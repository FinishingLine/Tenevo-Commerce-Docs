<?php

declare(strict_types=1);

namespace Tenevo;

/**
 * A client for the Tenevo API.
 *
 * Authenticates at /auth/ whenever it has no live signature, signs every request, and authenticates again when a
 * signature expires. Requires PHP 8.0 or later, with the curl, json and mbstring extensions.
 *
 *     $client = new \Tenevo\ApiClient('yourcode', 'username', 'public key', 'private key', 'secret');
 *
 *     $orders = $client->get('orders', ['fields' => 'id,reference,status', 'limit' => 10]);
 *     $order  = $client->post('orders', ['customer_id' => '42', 'currency' => 'GBP']);
 *
 * Every call returns the decoded response. A request the API refuses is returned as it is - check
 * `$response['request']['error']` - while a request that could not be made at all throws an ApiException.
 */
class ApiClient
{
    private const RESERVED_KEYS = ['route', 'fingerprint', 'signature', 'timestamp', 'sid'];

    // a signature lasts at least 60 seconds from its last use - a new one is fetched a little before then
    private const SIGNATURE_REUSE_SECONDS = 50;

    private string $baseUrl;
    private string $version;
    private int $timeout;
    private bool $verifySsl;

    private ?string $clientSignature = null;
    private ?string $serverSignature = null;
    private int $signatureUsedAt = 0;
    private int $clockOffset = 0;

    private int $lastStatusCode = 0;
    private array $lastHeaders = [];


    /**
     * @param array $options `base_url` (defaults to https://api.{clientCode}.tenevo.co.uk), `version` (1.3),
     *                       `timeout` in seconds (60) and `verify_ssl` (true)
     */
    public function __construct(
        string $clientCode,
        private string $username,
        private string $publicKey,
        private string $privateKey,
        private string $secret,
        array $options = []
    ) {
        foreach (['clientCode' => $clientCode, 'username' => $username, 'publicKey' => $publicKey, 'privateKey' => $privateKey, 'secret' => $secret] as $name => $value) {
            if (trim($value) === '') {
                throw new \InvalidArgumentException('Tenevo API: ' . $name . ' must be given');
            }
        }

        $this->baseUrl = rtrim((string) ($options['base_url'] ?? 'https://api.' . $clientCode . '.tenevo.co.uk'), '/');
        $this->version = (string) ($options['version'] ?? '1.3');
        $this->timeout = (int) ($options['timeout'] ?? 60);
        $this->verifySsl = (bool) ($options['verify_ssl'] ?? true);
    }


    public function get(string $path, array $data = []): array
    {
        return $this->request('GET', $path, $data);
    }


    public function post(string $path, array $data = []): array
    {
        return $this->request('POST', $path, $data);
    }


    public function put(string $path, array $data = []): array
    {
        return $this->request('PUT', $path, $data);
    }


    public function delete(string $path, array $data = []): array
    {
        return $this->request('DELETE', $path, $data);
    }


    /**
     * @param string $path relative to the version, such as `orders` or `orders/123`
     * @param array  $data the query parameters of a GET or DELETE, or the fields of a POST or PUT
     */
    public function request(string $method, string $path, array $data = []): array
    {
        $method = strtoupper($method);
        if (!in_array($method, ['GET', 'POST', 'PUT', 'DELETE'], true)) {
            throw new \InvalidArgumentException('Tenevo API: unsupported method ' . $method);
        }

        $route = '/v' . $this->version . '/' . trim($path, '/');

        if ($this->serverSignature === null || (time() - $this->signatureUsedAt) >= self::SIGNATURE_REUSE_SECONDS) {
            $this->authenticate();
        }

        $response = $this->send($method, $route, $data);

        // a signature the server no longer knows is renewed once, and the request made again
        if (($response['request']['error']['code'] ?? null) === 'signature_invalid') {
            $this->authenticate();
            $response = $this->send($method, $route, $data);
        }

        return $response;
    }


    public function getLastStatusCode(): int
    {
        return $this->lastStatusCode;
    }


    /**
     * The response headers of the last request, keyed in lower case - `tenevo-key-expires-at` and
     * `tenevo-key-rotation` say when the API user's keys expire, and when to rotate them
     */
    public function getLastHeaders(): array
    {
        return $this->lastHeaders;
    }


    public function authenticate(): void
    {
        $this->clientSignature = self::randomSignature();
        $this->serverSignature = null;

        $route = '/v' . $this->version . '/auth';
        $timestamp = $this->timestamp();

        $response = $this->http('POST', $route . '/', json_encode([
            'signature'     => $this->clientSignature,
            'timestamp'     => $timestamp,
            'fingerprint'   => $this->fingerprint($timestamp, $route, [], ''),
        ]));

        if (empty($response['signature'])) {
            $error = $response['request']['error'] ?? [];
            throw new ApiException('Tenevo API: authentication failed - ' . trim(($error['code'] ?? 'HTTP ' . $this->lastStatusCode) . ' ' . ($error['message'] ?? '')), $response);
        }

        $this->serverSignature = (string) $response['signature'];
        $this->signatureUsedAt = time();

        // the server's time reads 2026-09-25UTC10:15:00 - the zone name sits where the T would
        if (preg_match('/^(\d{4}-\d{2}-\d{2})\D+(\d{2}:\d{2}:\d{2})/', (string) ($response['request']['timestamp'] ?? ''), $matches)) {
            $this->clockOffset = (int) strtotime($matches[1] . 'T' . $matches[2] . 'Z') - time();
        }
    }


    private function send(string $method, string $route, array $data): array
    {
        foreach (self::RESERVED_KEYS as $key) {
            unset($data[$key]);
        }

        $timestamp = $this->timestamp();
        $signed = ['signature' => $this->clientSignature, 'timestamp' => $timestamp];

        // the fingerprint is taken over the data exactly as the server will read it back
        if ($method === 'GET' || $method === 'DELETE') {
            $query = http_build_query($data, '', '&', PHP_QUERY_RFC3986);
            parse_str($query, $sent);

            $signed['fingerprint'] = $this->fingerprint($timestamp, $route, $sent, (string) $this->serverSignature);
            $response = $this->http($method, $route . '/?' . ltrim($query . '&' . http_build_query($signed, '', '&', PHP_QUERY_RFC3986), '&'), null);
        } else {
            $sent = json_decode(json_encode($data, JSON_THROW_ON_ERROR), true, 512, JSON_BIGINT_AS_STRING | JSON_THROW_ON_ERROR);

            $signed['fingerprint'] = $this->fingerprint($timestamp, $route, is_array($sent) ? $sent : [], (string) $this->serverSignature);
            $response = $this->http($method, $route . '/', json_encode($data + $signed, JSON_THROW_ON_ERROR));
        }

        if ($this->lastStatusCode !== 401) {
            $this->signatureUsedAt = time();
        }

        return $response;
    }


    // The server cleans the request, sorts it, drops long values and serialises it - done here the same way
    private function fingerprint(string $timestamp, string $route, array $data, string $serverSignature): string
    {
        $data = self::sortRequest(self::cleanInputs($data));

        ksort($data);
        foreach (self::RESERVED_KEYS as $key) {
            unset($data[$key]);
        }
        $data = self::removeLongItems($data);
        ksort($data);

        $message = $this->privateKey . $timestamp . $this->secret . $route . serialize($data) . $serverSignature;

        return hash_hmac('sha256', mb_convert_encoding($message, 'ISO-8859-1', 'UTF-8'), $this->privateKey);
    }


    private static function cleanInputs($data)
    {
        if (!is_array($data)) {
            return trim(strip_tags((string) $data));
        }

        $cleaned = [];
        foreach ($data as $key => $value) {
            $cleaned[$key] = self::cleanInputs($value);
        }

        return $cleaned;
    }


    private static function sortRequest($data)
    {
        if (!is_array($data)) {
            return $data;
        }

        $keys = array_keys($data);
        array_multisort($keys, SORT_NATURAL | SORT_FLAG_CASE, $data);

        foreach ($data as $key => $value) {
            $data[$key] = self::sortRequest($value);
        }

        return $data;
    }


    private static function removeLongItems(array $data): array
    {
        ksort($data);
        foreach ($data as $key => $value) {
            if (is_array($value)) {
                $data[$key] = self::removeLongItems($value);
            } elseif (strlen((string) $value) > 1000) {
                unset($data[$key]);
            } else {
                $data[$key] = trim((string) preg_replace('/\s+/S', ' ', (string) $value));
            }
        }

        return $data;
    }


    private function http(string $method, string $url, ?string $body): array
    {
        $handle = curl_init($this->baseUrl . $url);

        $headers = [];
        curl_setopt_array($handle, [
            CURLOPT_CUSTOMREQUEST   => $method,
            CURLOPT_HTTPAUTH        => CURLAUTH_BASIC,
            CURLOPT_USERPWD         => $this->username . ':' . $this->publicKey,
            CURLOPT_HTTPHEADER      => ['Content-Type: application/json', 'Accept: application/json'],
            CURLOPT_RETURNTRANSFER  => true,
            CURLOPT_TIMEOUT         => $this->timeout,
            CURLOPT_SSL_VERIFYPEER  => $this->verifySsl,
            CURLOPT_SSL_VERIFYHOST  => $this->verifySsl ? 2 : 0,
            CURLOPT_HEADERFUNCTION  => static function ($handle, string $line) use (&$headers): int {
                $parts = explode(':', $line, 2);
                if (count($parts) === 2) {
                    $headers[strtolower(trim($parts[0]))] = trim($parts[1]);
                }

                return strlen($line);
            },
        ]);
        if ($body !== null) {
            curl_setopt($handle, CURLOPT_POSTFIELDS, $body);
        }

        $responseBody = curl_exec($handle);
        $this->lastStatusCode = (int) curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
        $this->lastHeaders = $headers;

        if ($responseBody === false) {
            $error = curl_error($handle);
            curl_close($handle);

            throw new ApiException('Tenevo API: could not reach ' . $this->baseUrl . ' - ' . $error);
        }
        curl_close($handle);

        $decoded = json_decode((string) $responseBody, true, 512, JSON_BIGINT_AS_STRING);
        if (!is_array($decoded)) {
            throw new ApiException('Tenevo API: HTTP ' . $this->lastStatusCode . ' was not a JSON response - ' . substr(trim(strip_tags((string) $responseBody)), 0, 200));
        }

        return $decoded;
    }


    private function timestamp(): string
    {
        return gmdate('Y-m-d\TH:i:s\Z', time() + $this->clockOffset);
    }


    private static function randomSignature(): string
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        $signature = '';
        for ($i = 0; $i < 64; $i++) {
            $signature .= $characters[random_int(0, strlen($characters) - 1)];
        }

        return $signature;
    }
}


class ApiException extends \RuntimeException
{
    public function __construct(string $message, private array $response = [])
    {
        parent::__construct($message);
    }


    // the decoded response, where there was one
    public function getResponse(): array
    {
        return $this->response;
    }
}
