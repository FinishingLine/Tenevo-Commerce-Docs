# Messages
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages messages
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /messages/ | POST | This allows you to create a message | [Details](#create-message) |
| /messages/ | PUT | This allows you to update a message | [Details](#update-message) |
| /messages/ | GET | This allows you to list messages | [Details](#view-message) |
| /messages/:message/ | GET | This allows you to list messages | [Details](#view-message) |

## Create Message
This allows you to create a message

**URL** : `/messages/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| body | The content of the message | String |  | NULL | Y | N |
| carrier_id | The ID of the message from the carrier (ie. network provider) | String | Up to 100 characters long | NULL | N | N |
| chain_id | The ID of the chain that the message is in | String | Up to 30 characters long | NULL | N | N |
| channel | The channel the message was sent/received on | String | One of the following values: `call`, `email`, `emailalert`, `sms` | NULL | Y | N |
| contact_id | A valid ID of whom the message has been received from | Integer |  | NULL | N | N |
| created_at | A UTC datetime of when the message was created/received | Datetime |  | NULL | N | N |
| from | The detail of whom the message was from | String | Between 1 and 100 characters long | NULL | Y | N |
| headers | Headers that could be used when sending out the message, must be valid JSON | String |  | NULL | N | N |
| is_flag | Denotes whether the messages has been flagged or not | Boolean |  | NULL | N | N |
| is_read | Denotes whether the messages has been read or not | Boolean |  | 0 | N | N |
| length | The length of the message in characters/seconds, only needed when channel=call | Integer | Up to 10 digits long | NULL | N | Y |
| method_id | The Gateway Method ID that the message is/was being sent/received via | Integer |  | NULL | Y | N |
| recipients | An array of recipients if message being sent - see [Messages Recipients](Messages_Recipients.md#create-messages-recipients) | Array |  | NULL | N | Y |
| subject | The message subject, if message is an email | String | Between 1 and 200 characters long | NULL | N | Y |

## Update Message
This allows you to update a message

**URL** : `/messages/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| carrier_id | The ID of the message from the carrier (ie. network provider) | String | Up to 100 characters long | NULL | N | N |
| chain_id | The ID of the chain that the message is in | String | Up to 30 characters long | NULL | N | N |
| contact_id | A valid ID of whom the message is being sent to | Integer |  | NULL | N | N |
| is_flag | Denotes whether the messages has been flagged or not | Boolean |  | NULL | N | N |
| is_read | Denotes whether the messages has been read or not | Boolean |  | 0 | N | N |
| recipients | An array of recipients if message being sent - see [Messages Recipients](Messages_Recipients.md#update-messages-recipients) | Array |  | NULL | N | Y |

## View Message
This allows you to list messages

**URL** : `/messages/`

**URL** : `/messages/:message/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| body | The content of the message | String |  |
| carrier_id | The carrier ID of the message | String | Up to 100 characters long |
| chain_id | The chain ID of the message | String | Up to 30 characters long |
| channel | The channel the message was sent/received on | String | One of the following values: `email`, `sms` |
| contact_id | The Contact ID of the message | Integer |  |
| created_at | A UTC datetime of when the message was created/received | Datetime |  |
| from | The detail of whom the message was from | String | Between 1 and 100 characters long |
| headers | Headers that could be used when sending out the message, in JSON format | String |  |
| is_flag | Denotes whether the messages has been flagged or not | Boolean |  |
| is_read | Denotes whether the messages has been read or not | Boolean |  |
| length | The length of the message in characters/seconds | Integer | Up to 10 digits long |
| method_id | The Gateway Method ID that the message is/was being sent/received via | Integer |  |
| recipients | An array of recipients - see [Messages Recipients](Messages_Recipients.md#view-messages-recipients) | Array |  |
| subject | The message subject | String | Between 1 and 200 characters long |
