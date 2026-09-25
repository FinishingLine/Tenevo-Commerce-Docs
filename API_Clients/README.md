# API Clients

[Home](../index.md) > [API](../API/index.md)

Ready-made clients for the Tenevo API. The Team will provide the connection details they need. To build a client
in another language, see [Connecting](../API/Connecting.md), which describes every step these clients take.

Each client authenticates at `/auth/` whenever it has no live signature, signs every request, and authenticates
again when a signature expires or is refused. Each is a single file with no dependencies beyond the language
itself.

| Client                                            | Needs                                       |
| ------------------------------------------------- | ------------------------------------------- |
| [PHP](PHP/ApiClient.php)                          | PHP 8.0+, with `curl`, `json` and `mbstring` |
| [JavaScript](JavaScript/tenevo-api-client.js)     | Node.js 18+                                  |
| [Python](Python/tenevo_api_client.py)             | Python 3.8+                                  |

## Using them

Every client takes the same five values - the client code, username, public key, private key and secret - and
has `get`, `post`, `put` and `delete` methods, each taking a path relative to the version and the request's data.

### PHP

```php
require 'ApiClient.php';

$client = new \Tenevo\ApiClient('yourcode', 'username', 'public key', 'private key', 'secret');

$orders = $client->get('orders', ['fields' => 'id,reference,status', 'limit' => 10]);
$order = $client->post('orders', ['customer_id' => '42', 'currency' => 'GBP']);
```

### JavaScript

```js
const { TenevoApiClient } = require('./tenevo-api-client');

const client = new TenevoApiClient({ clientCode: 'yourcode', username: '...', publicKey: '...', privateKey: '...', secret: '...' });

const orders = await client.get('orders', { fields: 'id,reference,status', limit: 10 });
const order = await client.post('orders', { customer_id: '42', currency: 'GBP' });
```

### Python

```python
from tenevo_api_client import TenevoApiClient

client = TenevoApiClient('yourcode', 'username', 'public key', 'private key', 'secret')

orders = client.get('orders', {'fields': 'id,reference,status', 'limit': 10})
order = client.post('orders', {'customer_id': '42', 'currency': 'GBP'})
```

## Responses and errors

Every call returns the decoded response. A request the API refuses - a validation failure, a missing record, a
permission error - is returned as it is, so check `request.error` (see [Error Codes](../API/Error_Codes.md)). A
request that could not be made at all - no connection, a response that is not JSON, or credentials that are
refused at `/auth/` - throws `ApiException` (PHP), `TenevoApiError` (JavaScript) or `TenevoApiError` (Python).

The last response's HTTP status and headers are kept - `getLastStatusCode()` and `getLastHeaders()` in PHP,
`lastStatusCode` and `lastHeaders` in JavaScript, and `last_status_code` and `last_headers` in Python. The
`tenevo-key-expires-at` and `tenevo-key-rotation` headers say when the API user's keys expire, and when to rotate
them.

## Options

| Option                        | PHP (`$options`) | JavaScript    | Python       | Default                                  |
| ----------------------------- | ---------------- | ------------- | ------------ | ---------------------------------------- |
| Where the API is served from  | `base_url`       | `baseUrl`     | `base_url`   | `https://api.{client code}.tenevo.co.uk` |
| API version                   | `version`        | `version`     | `version`    | `1.3`                                    |
| Timeout                       | `timeout` (s)    | `timeout` (ms) | `timeout` (s) | 60 seconds                               |
| Verify the SSL certificate    | `verify_ssl`     | -             | `verify_ssl` | on                                       |

Leave certificate verification on against the live API. It is only worth turning off for a test server with a
self-signed certificate - for Node.js, by running with `NODE_TLS_REJECT_UNAUTHORIZED=0`.

## Numbers in JavaScript

A JavaScript number cannot hold every value exactly, so send integers above 2<sup>53</sup>, and whole numbers of
10<sup>14</sup> or more written with a decimal point, as strings. The PHP and Python clients have no such limit.
