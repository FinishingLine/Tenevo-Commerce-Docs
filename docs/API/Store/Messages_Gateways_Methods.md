# Messages Gateways Methods
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages message gateway methods
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /messages/gateways/:gateway/method/ | POST | This allows you to create a message gateway method | [Details](#create-message-gateway-method) |
| /messages/gateways/:gateway/method/:method/ | DELETE | This allows you to remove a message gateway method | [Details](#delete-message-gateway-method) |
| /messages/gateways/:gateway/method/:method/ | PUT | This allows you to update a message gateway method | [Details](#update-message-gateway-method) |
| /messages/gateways/:gateway/method/ | GET | This allows you to list message gateway methods | [Details](#view-message-gateway-method) |
| /messages/gateways/:gateway/method/:method/ | GET | This allows you to list message gateway methods | [Details](#view-message-gateway-method) |

## Create Message Gateway Method
This allows you to create a message gateway method

**URL** : `/messages/gateways/:gateway/method/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| channel | The channel the method uses | String | One of the following values: `call`, `email`, `emailalert`, `sms` | NULL | Y | N |
| detail | The detail the channel uses (ie. phone number, email address) | String | Between 1 and 100 characters long | NULL | Y | N |
| priorty | The priority of the method | Integer | Up to 3 digits long | 0 | Y | N |

## Delete Message Gateway Method
This allows you to remove a message gateway method

**URL** : `/messages/gateways/:gateway/method/:method/`

**Method** : `DELETE`

## Update Message Gateway Method
This allows you to update a message gateway method

**URL** : `/messages/gateways/:gateway/method/:method/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| channel | The channel the method uses | String | One of the following values: `call`, `email`, `emailalert`, `sms` | NULL | Y | N |
| detail | The detail the channel uses (ie. phone number, email address) | String | Between 1 and 100 characters long | NULL | Y | N |
| priority | The priority of the method | Integer | Up to 3 digits long | 0 | Y | N |

## View Message Gateway Method
This allows you to list message gateway methods

**URL** : `/messages/gateways/:gateway/method/`

**URL** : `/messages/gateways/:gateway/method/:method/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| channel | The channel the method uses | String | One of the following values: `call`, `email`, `emailalert`, `sms` |
| detail | The detail the channel uses (ie. phone number, email address) | String | Between 1 and 100 characters long |
| priorty | The priority of the method | Integer | Up to 3 digits long |
