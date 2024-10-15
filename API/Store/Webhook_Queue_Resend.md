# Webhook Queue Resend
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Resends an item in the webhook queue
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /webhooks/queue/:queue/resend/ | POST | This allows you to resend an item that is within the webhook queue | [Details](#schedules-an-item-in-the-webhook-queue-to-be-resent-with-the-latest-payload) |

## Schedules an item in the webhook queue to be resent with the latest payload
This allows you to resend an item that is within the webhook queue

**URL** : `/webhooks/queue/:queue/resend/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| code | The public code that was originally used to despatch the webhook | String |  | NULL | Y | N |
| hmac | The calculated HMAC that correspends to this request | String |  | NULL | Y | N |
| scope | The scope of the webhook that was originally provided | String |  | NULL | Y | N |
| timestamp | The timestamp that the request was made | Integer |  | NULL | Y | N |
