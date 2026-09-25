# Connecting to the API

[Home](../index.md) > [API](index.md)

This page explains how to build an API client from scratch, in any language. Ready-made
[clients for PHP, JavaScript (Node.js) and Python](../API_Clients/README.md) follow the same steps shown here.
The fastest way to explore the API is with the
[Postman collection](Store/Postman/Store.postman_collection.json), which signs every request for you.

## What you need

The Team will provide these connection details:

| Value         | What it is                                                   |
| ------------- | ------------------------------------------------------------ |
| `client_code` | Your client code, which forms the host name                  |
| `username`    | The API user's username                                      |
| `public_key`  | Sent with every request, as the Basic authentication password |
| `private_key` | Keys the fingerprint. It is never sent                       |
| `secret`      | Part of every fingerprint. It is never sent                  |

The API is served from `https://api.{client_code}.tenevo.co.uk`, and every route starts with the version, for
example `/v1.3/orders/`. Every endpoint is described in the [Tenevo Commerce (Store)](Store/index.md) reference.

Treat the private key and the secret like passwords. Anyone holding them can act as the API user.

## How it works

1. **Authenticate** once, at `POST /v1.3/auth/`. You send a *client signature* that you generate, and the
   server returns a *server signature*.
2. **Sign every request.** Each one carries the client signature, a timestamp and a *fingerprint*. The
   fingerprint is an HMAC over the request, which proves you hold the private key and the secret, and that
   the request was not altered on the way.

Every request, `/auth/` included, uses HTTP Basic authentication, with the username as the user and the
public key as the password.

## Step 1 - authenticate

Generate a **client signature**: 64 random characters from `0-9`, `a-z` and `A-Z`. You keep it for as long
as the signature stays live.

`POST /v1.3/auth/` with a JSON body:

```json
{
    "signature": "<your client signature>",
    "timestamp": "2026-09-25T10:15:00Z",
    "fingerprint": "<fingerprint>"
}
```

The fingerprint is built as described below. `/auth/` sends no other data, and there is no server signature
yet, so the server signature part of the message is left empty.

A successful response returns the server signature:

```json
{
    "request": {
        "timestamp": "2026-09-25UTC10:15:00",
        "status_code": 200
    },
    "signature": "<server signature>"
}
```

`request.timestamp` is the server's UTC time. The zone name sits where the `T` would normally be. Compare it
with your own clock, and correct every timestamp you send by the difference (see [Timestamps](#timestamps)).

## Step 2 - sign each request

Every request after `/auth/` carries three extra values, alongside its own data:

| Value         | What it is                                   |
| ------------- | -------------------------------------------- |
| `signature`   | Your client signature, the same every time   |
| `timestamp`   | The current UTC time                         |
| `fingerprint` | The fingerprint of this request              |

For `GET` and `DELETE` requests, they go in the query string, with the rest of the request's parameters. For
`POST` and `PUT` requests, they go in the JSON body, as top-level keys next to the request's fields. Send
`Content-Type: application/json`.

## Building the fingerprint

```
message     = private_key + timestamp + secret + route + serialize(data) + server_signature
fingerprint = lowercase_hex( HMAC-SHA256( key = private_key, message = latin1(message) ) )
```

### The route

The route is the path the request is made to, with no query string and **no trailing slash**. It keeps the
version and any IDs in it. Case is kept as sent.

| Request                                  | Route              |
| ---------------------------------------- | ------------------ |
| `POST /v1.3/auth/`                       | `/v1.3/auth`       |
| `GET /v1.3/orders/?fields=id`            | `/v1.3/orders`     |
| `PUT /v1.3/orders/123/`                  | `/v1.3/orders/123` |

### The data

The data is the request's parameters as the server reads them. For `GET` and `DELETE` requests, that is the
decoded query string. For `POST` and `PUT` requests, it is the decoded JSON body. The server tidies the data
before it checks the fingerprint, and your fingerprint has to be taken over the same tidied data:

1. **Remove** the keys `signature`, `timestamp`, `fingerprint`, `route` and `sid`. They are never part of
   the data.
2. **Make every value a string**, keeping objects and lists as they are:
   - `true` becomes `"1"`, while `false` and `null` become `""`
   - whole numbers are written plainly, for example `2`
   - decimals are rounded to 14 significant digits, with trailing zeros dropped, so `10.50` becomes `"10.5"`
     and `0.1 + 0.2` becomes `"0.3"`. The simplest approach is to send decimals as strings
3. **Strip HTML tags and trim** each value. The server removes anything that looks like a tag, such as
   `<b>`, and trims spaces, tabs and new lines from both ends.
4. **Drop long values.** Any value longer than 1000 bytes is left out of the fingerprint entirely. It is
   still sent, and still used.
5. **Collapse whitespace.** Within the remaining values, every run of spaces, tabs or new lines becomes a
   single space.
6. **Sort every level by key.** Named keys sort by their bytes (`A`-`Z` before `_` before `a`-`z`). Lists
   keep their order, keyed `0`, `1`, `2`...

A list is keyed by number, and an object is keyed by name. Never mix the two in a single object, because the
server's sort order for mixed keys cannot be reproduced reliably. An object whose keys are all numbers, such as
`{"5": ..., "3": ...}`, is turned into a list (`0`, `1`...) in ascending order of the numbers.

### Serialising

`serialize(data)` writes the tidied data in PHP's serialisation format. That format uses only three shapes:

| Shape             | Written as                         | Example                            |
| ----------------- | ---------------------------------- | ---------------------------------- |
| A string          | `s:<byte length>:"<text>";`        | `s:3:"GBP";`                       |
| A numbered key    | `i:<number>;`                      | `i:0;`                             |
| An object or list | `a:<count>:{<key><value>...}`      | `a:1:{s:3:"sku";s:6:"MUG-01";}`    |

- Named keys are written as strings, and list positions as numbers.
- The length is in **UTF-8 bytes**, not characters. `Zoë` is `s:4:"Zoë";`.
- No data at all serialises as `a:0:{}`.
- Nothing is escaped. Quotes inside a value are written as they are.

### Latin-1

Before the HMAC, the message is converted from UTF-8 to Latin-1 (ISO-8859-1). Any character outside Latin-1,
such as `日` or an emoji, becomes `?`. The `ë` in `Zoë` stays as the single byte `0xEB`. The key is the
private key's own bytes.

## Worked example

All of these values are made up. They are here so that you can check your own code against them.

| Value            | Example                                                            |
| ---------------- | ------------------------------------------------------------------ |
| private key      | `example_private_key`                                              |
| secret           | `example_secret`                                                   |
| timestamp        | `2026-09-25T10:15:00Z`                                             |
| server signature | `ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba987654321098` |

**`POST /v1.3/auth/`**, which has no data and no server signature:

```
serialized  a:0:{}
message     example_private_key2026-09-25T10:15:00Zexample_secret/v1.3/autha:0:{}
fingerprint 8bba0b30fa313d80f2d685f156229d6d205ff91bacc3fbee20a5137798ba6eff
```

**`GET /v1.3/orders/?fields=id,reference,status&query=status:%22open%22&limit=10`**:

```
serialized  a:3:{s:6:"fields";s:19:"id,reference,status";s:5:"limit";s:2:"10";s:5:"query";s:13:"status:"open"";}
fingerprint 4af799045e400e6113e04c6c3d8bfb22e05bcc1449222ecd97169fba1a2a0996
```

The request that is sent adds `&signature=...&timestamp=2026-09-25T10:15:00Z&fingerprint=4af79...` to the
query string.

**`POST /v1.3/orders/`** with this body:

```json
{"customer_id": "42", "currency": "GBP", "notes": "  Leave with   Zoë ", "is_gift": true, "items": [{"sku": "MUG-01", "quantity": 2}, {"sku": "TEE-02", "quantity": 1}]}
```

The keys are sorted, `true` becomes `"1"`, the numbers become strings, and the note is trimmed and collapsed.
`Leave with Zoë` is 15 bytes:

```
serialized  a:5:{s:8:"currency";s:3:"GBP";s:11:"customer_id";s:2:"42";s:7:"is_gift";s:1:"1";s:5:"items";a:2:{i:0;a:2:{s:8:"quantity";s:1:"2";s:3:"sku";s:6:"MUG-01";}i:1;a:2:{s:8:"quantity";s:1:"1";s:3:"sku";s:6:"TEE-02";}}s:5:"notes";s:15:"Leave with Zoë";}
fingerprint 8043cdeef356170ca0de2a9b8d2d5d17979c348c2807124be0863749b71ccb94
```

The body that is sent is the original body, plus the `signature`, `timestamp` and `fingerprint` keys.

## Timestamps

- Send the current **UTC** time. `2026-09-25T10:15:00Z` is the recommended format. The server accepts
  anything PHP's `strtotime()` can read, but the fingerprint uses the exact text you send.
- A timestamp more than **two minutes** away from the server's clock is refused with
  `timestamp_out_of_range`. Correct your timestamps by the difference measured at `/auth/`.

## How long a signature lasts

A signature expires two minutes after `/auth/` issues it. Each request that is accepted keeps it alive, for at
least another minute. If the client sits idle for longer than that, or a request is refused with
`signature_invalid`, authenticate again for a new signature.

## When a request is refused

A refused request says why in `request.error.code`. See [Error Codes](Error_Codes.md) for the full list. The
codes you will meet while building a client are:

| Code                     | Usual cause                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| `credentials_invalid`    | The Basic authentication username or public key is wrong                                    |
| `signature_missing`      | `signature`, `timestamp` or `fingerprint` was not sent                                      |
| `signature_invalid`      | The signature has expired, or `/auth/` was never called with it                             |
| `timestamp_out_of_range` | The clock is out by more than two minutes                                                   |
| `fingerprint_mismatch`   | The fingerprint differs - check it against the [worked example](#worked-example)            |

When a fingerprint does not match, the usual causes are:

- a trailing slash left on the route
- a character length used instead of a byte length
- a number or boolean not converted the way the server converts it
- keys not sorted at every level
- the message not converted to Latin-1
- a query string value compared before it was URL-decoded (`%20` and `+` both decode to a space)

## Things to avoid

- **Very large numbers.** Send integers above 2<sup>53</sup>, and whole numbers of 10<sup>14</sup> or more
  written with a decimal point, as strings. Many JSON libraries cannot hold them exactly, so the value you
  fingerprint drifts from the one the server reads.
- **HTML in values.** The server strips tags from every value before storing it, so they do not survive
  anyway.
- **Reserved names.** `route` and `sid` are removed by the server and cannot be used as parameter names.

## Ready-made clients

[Clients for PHP, JavaScript (Node.js) and Python](../API_Clients/README.md) are ready to use. Each is a single
file with no dependencies, handles authentication and signature renewal for you, and passes the
[worked example](#worked-example) above.

## Postman

The [Postman collection](Store/Postman/Store.postman_collection.json) holds every public Store endpoint, grouped as
they are in these docs. It is generated from the same source as these docs, so it always matches them.

1. Import the collection into Postman, along with the
   [environment](Store/Postman/Store_Live.postman_environment.json) that goes with it.
2. Select the environment, then fill in `clientCode`, `username`, `publicKey`, `privateKey` and `secret`.
   Keeping the keys in an environment, rather than on the collection, means they are not saved into the
   collection if it is shared.
3. Send any request.

The collection authenticates at `/auth/` whenever it has no live signature, and signs each request before it
is sent. It works out the route, the data and the fingerprint exactly as described above. If a signature
expires or is refused, the next request authenticates again. List requests carry `fields`, `query`, `order`,
`limit` and `page` parameters, which are switched off until they are needed. Create and update requests carry
the required fields in the body, and list every field in the request's description.
