# Messages Templates
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages the templates that can be used for messaging
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /messages/templates/ | POST | This allows you to create a message template | [Details](#create-message-template) |
| /messages/templates/:template/ | DELETE | This allows you to delete a message template | [Details](#delete-message-template) |
| /messages/templates/:template/ | PUT | This allows you to update a message template | [Details](#update-message-template) |
| /messages/templates/ | GET | This allows you to list the message templates | [Details](#view-message-template) |
| /messages/templates/:template/ | GET | This allows you to list the message templates | [Details](#view-message-template) |

## Create Message Template
This allows you to create a message template

**URL** : `/messages/templates/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| body | The content of the message | String |  | NULL | Y | N |
| channel | The channel the template is for | String | One of the following values: `email`, `emailalert`, `notification`, `sms`, `ticket` | NULL | Y | N |
| code | A code to identify the message, must be unique per channel | String | Between 1 and 100 characters long | NULL | Y | N |
| has_multisupport | Indicates if the template supports multiple items, only available when channel is email or emailalert | Boolean |  | 0 | N | Y |
| name | The name of the template | String | Between 1 and 100 characters long | NULL | Y | N |
| subject | The default subject line, if channel is email | String | Between 1 and 200 characters long | NULL | N | Y |

## Delete Message Template
This allows you to delete a message template

**URL** : `/messages/templates/:template/`

**Method** : `DELETE`

## Update Message Template
This allows you to update a message template

**URL** : `/messages/templates/:template/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| body | The content of the message | String |  | NULL | Y | N |
| channel | The channel the template is for | String | One of the following values: `email`, `emailalert`, `notification`, `sms`, `ticket` | NULL | Y | N |
| code | A code to identify the message, must be unique per channel | String | Between 1 and 100 characters long | NULL | Y | N |
| has_multisupport | Indicates if the template supports multiple items, only available when channel is email or emailalert | Boolean |  | 0 | N | Y |
| name | The name of the template | String | Between 1 and 100 characters long | NULL | Y | N |
| subject | The default subject line, if channel is email | String | Between 1 and 200 characters long | NULL | N | Y |

## View Message Template
This allows you to list the message templates

**URL** : `/messages/templates/`

**URL** : `/messages/templates/:template/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| body | The content of the message | String |  |
| channel | The channel the template is for | String | One of the following values: `email`, `emailalert`, `notification`, `sms`, `ticket` |
| code | A code to identify the message, must be unique per channel | String | Between 1 and 100 characters long |
| has_multisupport | Indicates if the template supports multiple items | Boolean |  |
| name | The name of the template | String | Between 1 and 100 characters long |
| subject | The default subject line, if channel is `email` | String | Between 1 and 200 characters long |
