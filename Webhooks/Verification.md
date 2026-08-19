# Verification

[Home](../index.md) > [Webhooks](index.md)

## Intro

Anyone can send a request to your URL, so every request should be verified before it is acted on.

## The signature

The signature is `HMAC-SHA256`, keyed on your **token**, taken over your **request URL** concatenated with the
URL-encoded query string of the payload.

It arrives in two places, whichever is easier for you to read:

- the `hmac` field in the body, as lowercase hexadecimal
- the `X-WD-SIGNATURE` header (also sent as `X_WD_SIGNATURE`), as the Base64 encoding of that same hexadecimal string

## Reproducing it

1. Take the received JSON body and **remove the `hmac` field** - it is not part of what was signed
2. Sort the remaining keys alphabetically, **recursively**, through every nested array and object
3. Build a URL-encoded query string from the result, as `http_build_query()` would
4. Prefix the request URL you registered, exactly as you registered it
5. `HMAC-SHA256` that string, using your token as the key
6. Compare against the received value using a timing-safe comparison

```php
$payload = json_decode($rawRequestBody, true);

$received = $payload['hmac'];
unset($payload['hmac']);

ksortRecursive($payload);

$expected = hash_hmac('sha256', $myRequestUrl . http_build_query($payload), $myToken);

if(!hash_equals($expected, $received)) {
    http_response_code(401);
    exit;
}
```

> The request URL forms part of the signed string, so it has to match what is configured against the webhook character
> for character. A redirect, an added or removed trailing slash, or a proxy that rewrites the path will all cause
> verification to fail even when the token is correct.

## Responding

Reply with any `2xx` status to acknowledge the event. The body of your response is not inspected.

Send that response as soon as you have stored the event, and do your processing afterwards. Requests time out after **30
seconds**, and a handler that is still working at that point is recorded as a timeout and retried even though you already
have the data.

Anything other than a `2xx` is treated as a failure, with two exceptions:

| Status | Behaviour                                                                                          |
| ------ | -------------------------------------------------------------------------------------------------- |
| `423`  | Treated as busy - the event is held back briefly and tried again, without counting as a failed attempt |
| `429`  | Rate limited - the `Retry-After` header is honoured, and no failed attempt is counted                |

Use `423` when you are temporarily unable to accept the event, and `429` when you want to control the pace. Both are
preferable to a `500`, which does count against the endpoint.

## Repeated failures

A failed delivery is retried, and how many times depends on the event and the endpoint it is being sent to.

An endpoint that keeps failing is backed off automatically, so that one unreachable subscriber cannot hold up delivery to
everybody else. An endpoint that continues to fail across repeated back-offs is suspended and stops receiving events
entirely, with the owner notified by email - so that email is something to act on rather than file.

The recent delivery history for an endpoint, including response codes, is shown on its detail page under
**Settings > Webhooks**.
