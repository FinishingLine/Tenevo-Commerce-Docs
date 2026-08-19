# Request Format

[Home](../index.md) > [Webhooks](index.md)

## Intro

Every webhook, whatever the event, is sent in the same shape. Only `event_data` varies.

## The request

Requests are sent as `POST`, with `Content-Type: application/json`, and a JSON object as the body.

| Field             | Description                                                            |
| ----------------- | ---------------------------------------------------------------------- |
| `event_data`      | The entity the event relates to; the shape depends on the event         |
| `event_type`      | The scope that triggered the send, e.g. `update_products`               |
| `event_timestamp` | Unix timestamp of when the event happened                              |
| `event_url`       | Base URL of the system that sent the event                             |
| `code`            | The code of the webhook the request was sent from                      |
| `event_id`        | Unique id of the queued event                                          |
| `timestamp`       | Unix timestamp of when this delivery attempt was made                  |
| `hmac`            | Signature of the request - see [Verification](Verification.md)          |

## Timestamps

There are two, and they are not the same thing:

- `event_timestamp` is when the change happened
- `timestamp` is when this particular attempt was sent

On a first attempt the two will be close together. On a retry they will not, so use `event_timestamp` when you care about
when something actually occurred.

## Event ids

`event_id` identifies the queued event rather than the request, so the same id can arrive more than once - a retry, or an
event sent again on request.

Treat it as an idempotency key and ignore any id you have already processed.

## Example

```json
{
  "event_data": {
    "id": 2,
    "sku": "DEF"
  },
  "event_type": "update_stockonhand",
  "event_timestamp": 1786965798,
  "event_url": "https://login.example.tenevo.co.uk",
  "code": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
  "event_id": 369,
  "timestamp": 1786965801,
  "hmac": "9f2c1adf4b8e0c7a15d3e6b29f84c05713ae6d2f8b41c09e7a5d3f6b28c14e0d"
}
```

The contents of `event_data` above are cut short for brevity - see the event's own page for what it carries.
