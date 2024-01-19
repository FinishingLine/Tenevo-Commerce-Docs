# Messages Recipients
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages message recipients
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /messages/:message/data/ | POST | This allows you to create a message recipient | [Details](#create-recipient) |
| /messages/:message/data/:recipient/ | PUT | This allows you to update a message recipient | [Details](#update-recipient) |
| /messages/:message/data/ | GET | This allows you to list message recipients | [Details](#view-recipients) |
| /messages/:message/data/:recipient/ | GET | This allows you to list message recipients | [Details](#view-recipients) |

## Create Recipient
This allows you to create a message recipient

**URL** : `/messages/:message/data/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| carrier_id | The ID of the message from the carrier (ie. network provider) | String | Up to 100 characters long | NULL | N | N |
| contact_id | A valid ID of whom the message is being sent to | Integer |  | NULL | N | N |
| contact_type | The contact type the message was sent to | String | One of the following values: `admin`, `contact`, `customer`, `profile` | NULL | N | N |
| feedback_detail | The feedback detail from the message | String |  | NULL | N | N |
| feedback_status | The feedback status from the message | String | One of the following values: `accepted`, `delivered`, `failed`, `processing`, `queued`, `received`, `receiving`, `sending`, `sent`, `undelivered` | processing | Y | N |
| is_clicked | Denotes whether the messages has been clicked or not | Boolean |  | 0 | N | N |
| is_read | Denotes whether the messages has been read or not | Boolean |  | 0 | N | N |
| message_id | The Message ID relating to this recipient | Integer |  | NULL | Y | N |
| to | The detail of whom the message was to | String | Between 1 and 100 characters long | NULL | Y | N |
| type | The type of to | String | One of the following values: `to`, `cc`, `bcc` | NULL | Y | N |
| updated_at | A UTC datetime of when the message was updated | Datetime |  | NULL | N | N |

## Update Recipient
This allows you to update a message recipient

**URL** : `/messages/:message/data/:recipient/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| carrier_id | The ID of the message from the carrier (ie. network provider) | String | Up to 100 characters long | NULL | N | N |
| contact_id | A valid ID of whom the message is being sent to | Integer |  | NULL | N | N |
| contact_type | The contact type the message was sent to | String | One of the following values: `admin`, `contact`, `customer`, `profile` | NULL | N | N |
| feedback_detail | The feedback detail from the message | String |  | NULL | N | N |
| feedback_status | The feedback status from the message | String | One of the following values: `accepted`, `delivered`, `failed`, `processing`, `queued`, `received`, `receiving`, `sending`, `sent`, `undelivered` | processing | Y | N |
| is_clicked | Denotes whether the messages has been clicked or not | Boolean |  | 0 | N | N |
| is_read | Denotes whether the messages has been read or not | Boolean |  | 0 | N | N |
| updated_at | A UTC datetime of when the message was updated | Datetime |  | NULL | N | N |

## View Recipients
This allows you to list message recipients

**URL** : `/messages/:message/data/`

**URL** : `/messages/:message/data/:recipient/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| carrier_id | The ID of the message from the carrier (ie. network provider) | String | Up to 100 characters long |
| channel | The channel the message was sent/received on | String | One of the following values: `email`, `sms` |
| contact_id | A valid ID of whom the message is being sent to | Integer |  |
| contact_type | The contact type the message was sent to | String | One of the following values: `admin`, `contact`, `customer`, `profile` |
| feedback_detail | The feedback detail from the message | String |  |
| feedback_status | The feedback status from the message | String | One of the following values: `accepted`, `delivered`, `failed`, `processing`, `queued`, `received`, `receiving`, `sending`, `sent`, `undelivered` |
| is_clicked | Denotes whether the messages has been clicked or not | Boolean |  |
| is_read | Denotes whether the messages has been read or not | Boolean |  |
| message_id | The Message ID relating to this recipient | Integer |  |
| to | The detail of whom the message was to | String | Between 1 and 100 characters long |
| tracking_id | The unique tracking ID corresponding to the recipient | String | Exactly 64 characters long |
| type | The type of to | String | One of the following values: `to`, `cc`, `bcc` |
| updated_at | A UTC datetime of when the message was updated | Datetime |  |
