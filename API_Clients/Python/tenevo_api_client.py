"""A client for the Tenevo API, for Python 3.8 or later, using only the standard library.

Authenticates at /auth/ whenever it has no live signature, signs every request, and authenticates again when a
signature expires.

    from tenevo_api_client import TenevoApiClient

    client = TenevoApiClient('yourcode', 'username', 'public key', 'private key', 'secret')
    orders = client.get('orders', {'fields': 'id,reference,status', 'limit': 10})

Every call returns the decoded response. A request the API refuses is returned as it is - check
response['request']['error'] - while a request that could not be made at all raises a TenevoApiError.
"""

import hashlib
import hmac
import json
import re
import secrets
import ssl
import string
import time
import urllib.error
import urllib.request
from base64 import b64encode
from datetime import datetime, timezone
from functools import cmp_to_key
from urllib.parse import quote

RESERVED_KEYS = ('route', 'fingerprint', 'signature', 'timestamp', 'sid')

# a signature lasts at least 60 seconds from its last use - a new one is fetched a little before then
SIGNATURE_REUSE_SECONDS = 50

PHP_TRIM = ' \t\n\r\0\x0b'
PHP_WHITESPACE = re.compile(r'[ \t\n\x0b\f\r]+')
PHP_NUMERIC = re.compile(r'^[ \t\n\r\x0b\f]*[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[ \t\n\r\x0b\f]*$')
INTEGER_KEY = re.compile(r'^(0|-?[1-9][0-9]*)$')
HTML_TAG = re.compile(r'<!--.*?(-->|$)|<(?![\s<])[^>]*(>|$)', re.S)


class TenevoApiError(Exception):
    def __init__(self, message, response=None):
        super().__init__(message)
        self.response = response


def to_string(value):
    """A value as the server's (PHP) string conversion gives it."""
    if value is None or value is False:
        return ''
    if value is True:
        return '1'
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        text = '%.14G' % value
        if 'E' in text:
            mantissa, exponent = text.split('E')
            text = '%sE%+d' % (mantissa if '.' in mantissa else mantissa + '.0', int(exponent))
        return text
    return value


def compare_keys(first, second):
    """How PHP's ksort() orders two keys of the same level."""
    if isinstance(first, int) != isinstance(second, int):
        raise TenevoApiError('Tenevo API: an object mixes numbered and named keys - send lists as lists')
    if isinstance(first, int) or (PHP_NUMERIC.match(first) and PHP_NUMERIC.match(second)):
        return (float(first) > float(second)) - (float(first) < float(second))
    return (first.encode() > second.encode()) - (first.encode() < second.encode())


def tidy(value):
    """The request as the server holds it: strings, tags stripped, trimmed, numbered keys renumbered."""
    if isinstance(value, list):
        value = dict(enumerate(value))
    if not isinstance(value, dict):
        return HTML_TAG.sub('', to_string(value)).strip(PHP_TRIM)

    items = {}
    for key, item in value.items():
        if isinstance(key, str) and INTEGER_KEY.match(key):
            key = int(key)
        items[key] = tidy(item)

    numbers = iter(range(len(items)))
    ordered = sorted(items, key=lambda k: (isinstance(k, str), k if isinstance(k, int) else 0))
    return {next(numbers) if isinstance(k, int) else k: items[k] for k in ordered}


def fingerprint_data(data):
    """Drops long values, collapses whitespace and sorts every level by key."""
    result = {}
    for key in sorted(data, key=cmp_to_key(compare_keys)):
        value = data[key]
        if isinstance(value, dict):
            result[key] = fingerprint_data(value)
        elif len(value.encode('utf-8')) <= 1000:
            result[key] = PHP_WHITESPACE.sub(' ', value).strip(PHP_TRIM)
    return result


def serialize(value):
    """PHP's serialize(), for the arrays of strings the request becomes."""
    if isinstance(value, dict):
        return 'a:%d:{%s}' % (len(value), ''.join(serialize(k) + serialize(v) for k, v in value.items()))
    if isinstance(value, int):
        return 'i:%d;' % value
    return 's:%d:"%s";' % (len(value.encode('utf-8')), value)


def fingerprint(private_key, secret, timestamp, route, data, server_signature=''):
    tidied = {k: v for k, v in tidy(data).items() if k not in RESERVED_KEYS}
    message = private_key + timestamp + secret + route + serialize(fingerprint_data(tidied)) + server_signature
    # characters outside Latin-1 become ?, as the server's conversion makes them
    latin1 = ''.join(c if ord(c) < 256 else '?' for c in message).encode('latin-1')
    return hmac.new(private_key.encode('utf-8'), latin1, hashlib.sha256).hexdigest()


def query_pairs(data, prefix=None):
    """Query parameters as key[name]=value pairs, the way PHP's http_build_query() writes nested data."""
    pairs = []
    items = enumerate(data) if isinstance(data, list) else data.items()
    for key, value in items:
        name = str(key) if prefix is None else '%s[%s]' % (prefix, key)
        if isinstance(value, (dict, list)):
            pairs.extend(query_pairs(value, name))
        else:
            pairs.append((name, to_string(value)))
    return pairs


def parse_query(pairs):
    """PHP's parse_str() over decoded pairs - flat keys, plus key[] and key[name] arrays."""
    result = {}
    for name, value in pairs:
        match = re.match(r'^([^\[]+)((\[[^\]]*\])*)$', name)
        base, path = (match.group(1), re.findall(r'\[([^\]]*)\]', match.group(2))) if match else (name, [])
        base = re.sub(r'[ .]', '_', base.lstrip(' '))
        target, key = result, base
        for part in path:
            if not isinstance(target.get(key), dict):
                target[key] = {}
            target = target[key]
            if part == '':
                numbers = [int(k) for k in target if INTEGER_KEY.match(str(k))]
                key = str(max(numbers) + 1 if numbers else 0)
            else:
                key = part
        target[key] = value
    return result


class TenevoApiClient:
    def __init__(self, client_code, username, public_key, private_key, secret, base_url=None, version='1.3', timeout=60, verify_ssl=True):
        for name, value in (('client_code', client_code), ('username', username), ('public_key', public_key), ('private_key', private_key), ('secret', secret)):
            if not isinstance(value, str) or not value.strip():
                raise TenevoApiError('Tenevo API: %s must be given' % name)

        self.base_url = (base_url or 'https://api.%s.tenevo.co.uk' % client_code).rstrip('/')
        self.version = str(version)
        self.timeout = timeout
        self.username, self.public_key = username, public_key
        self.private_key, self.secret = private_key, secret
        self.ssl_context = None if verify_ssl else ssl._create_unverified_context()

        self.client_signature = None
        self.server_signature = None
        self.signature_used_at = 0
        self.clock_offset = 0

        self.last_status_code = 0
        self.last_headers = {}

    def get(self, path, data=None):
        return self.request('GET', path, data)

    def post(self, path, data=None):
        return self.request('POST', path, data)

    def put(self, path, data=None):
        return self.request('PUT', path, data)

    def delete(self, path, data=None):
        return self.request('DELETE', path, data)

    def request(self, method, path, data=None):
        """path is relative to the version, such as 'orders' or 'orders/123' - data is the query parameters
        of a GET or DELETE, or the fields of a POST or PUT."""
        method = method.upper()
        if method not in ('GET', 'POST', 'PUT', 'DELETE'):
            raise TenevoApiError('Tenevo API: unsupported method %s' % method)

        route = '/v%s/%s' % (self.version, path.strip('/'))
        data = data or {}

        if self.server_signature is None or time.time() - self.signature_used_at >= SIGNATURE_REUSE_SECONDS:
            self.authenticate()

        response = self._send(method, route, data)

        # a signature the server no longer knows is renewed once, and the request made again
        if (response.get('request') or {}).get('error', {}).get('code') == 'signature_invalid':
            self.authenticate()
            response = self._send(method, route, data)

        return response

    def authenticate(self):
        self.client_signature = ''.join(secrets.choice(string.digits + string.ascii_letters) for _ in range(64))
        self.server_signature = None

        route = '/v%s/auth' % self.version
        timestamp = self._timestamp()
        response = self._http('POST', route + '/', json.dumps({
            'signature': self.client_signature,
            'timestamp': timestamp,
            'fingerprint': fingerprint(self.private_key, self.secret, timestamp, route, {}),
        }))

        if not response.get('signature'):
            error = (response.get('request') or {}).get('error') or {}
            reason = ('%s %s' % (error.get('code', 'HTTP %d' % self.last_status_code), error.get('message', ''))).strip()
            raise TenevoApiError('Tenevo API: authentication failed - %s' % reason, response)

        self.server_signature = str(response['signature'])
        self.signature_used_at = time.time()

        # the server's time reads 2026-09-25UTC10:15:00 - the zone name sits where the T would
        match = re.match(r'^(\d{4}-\d{2}-\d{2})\D+(\d{2}:\d{2}:\d{2})', str((response.get('request') or {}).get('timestamp', '')))
        if match:
            server_time = datetime.fromisoformat('%sT%s' % match.groups()).replace(tzinfo=timezone.utc).timestamp()
            self.clock_offset = server_time - time.time()

    def _send(self, method, route, data):
        timestamp = self._timestamp()
        signed = {'signature': self.client_signature, 'timestamp': timestamp}

        # the fingerprint is taken over the data exactly as the server will read it back
        if method in ('GET', 'DELETE'):
            pairs = [(k, v) for k, v in query_pairs(data) if re.sub(r'\[.*$', '', k) not in RESERVED_KEYS]
            signed['fingerprint'] = fingerprint(self.private_key, self.secret, timestamp, route, parse_query(pairs), self.server_signature)
            query = '&'.join('%s=%s' % (quote(k, safe=''), quote(v, safe='')) for k, v in pairs + list(signed.items()))
            response = self._http(method, route + '/?' + query, None)
        else:
            sent = json.loads(json.dumps(data))
            if isinstance(sent, dict):
                for key in RESERVED_KEYS:
                    sent.pop(key, None)
            signed['fingerprint'] = fingerprint(self.private_key, self.secret, timestamp, route, sent, self.server_signature)
            response = self._http(method, route + '/', json.dumps({**sent, **signed}))

        if self.last_status_code != 401:
            self.signature_used_at = time.time()

        return response

    def _http(self, method, url, body):
        request = urllib.request.Request(self.base_url + url, method=method, data=None if body is None else body.encode('utf-8'))
        credentials = b64encode(('%s:%s' % (self.username, self.public_key)).encode('utf-8')).decode()
        request.add_header('Authorization', 'Basic ' + credentials)
        request.add_header('Content-Type', 'application/json')
        request.add_header('Accept', 'application/json')

        try:
            with urllib.request.urlopen(request, timeout=self.timeout, context=self.ssl_context) as response:
                status, headers, text = response.status, response.headers, response.read()
        except urllib.error.HTTPError as error:
            status, headers, text = error.code, error.headers, error.read()
        except (urllib.error.URLError, OSError) as error:
            raise TenevoApiError('Tenevo API: could not reach %s - %s' % (self.base_url, error))

        self.last_status_code = status
        self.last_headers = {k.lower(): v for k, v in headers.items()}

        try:
            decoded = json.loads(text)
        except ValueError:
            raise TenevoApiError('Tenevo API: HTTP %d was not a JSON response - %s' % (status, re.sub(r'<[^>]*>', ' ', text.decode('utf-8', 'replace')).strip()[:200]))
        if not isinstance(decoded, dict):
            raise TenevoApiError('Tenevo API: HTTP %d was not a JSON object' % status)
        return decoded

    def _timestamp(self):
        return datetime.fromtimestamp(time.time() + self.clock_offset, timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
