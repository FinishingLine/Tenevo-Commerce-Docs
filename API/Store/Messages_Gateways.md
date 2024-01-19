# Messages Gateways
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages message gateways
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /messages/gateways/ | POST | This allows you to create a message gateway | [Details](#create-message-gateway) |
| /messages/gateways/:gateway/ | DELETE | This allows you to delete a message gateway | [Details](#delete-message-gateway) |
| /messages/gateways/:gateway/ | PUT | This allows you to update a message gateway | [Details](#updates-message-gateway) |
| /messages/gateways/ | GET | This allows you to list the available message gateways | [Details](#view-message-gateway) |
| /messages/gateways/:gateway/ | GET | This allows you to list the available message gateways | [Details](#view-message-gateway) |

## Create Message Gateway
This allows you to create a message gateway

**URL** : `/messages/gateways/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| interface | The interface that the gateway uses | String | One of the following values: `email`, `twilio` | NULL | Y | N |
| methods | An array of methods - see [Messages Gateways Methods](Messages_Gateways_Methods.md#create-messages-gateways-methods) | Array |  | NULL | N | N |
| name | Name of the gateway | String | Between 1 and 100 characters long | NULL | Y | N |
| password | The password needed to connect to the server | String |  | NULL | Y | N |
| port | The server port that need to communicate to on the server | Integer | Up to 5 digits long | NULL | Y | N |
| security | The security setting the gateway uses | String | One of the following values: `ssl`, `tls` | NULL | N | N |
| server | The server the gateway will connect to | String |  | NULL | Y | N |
| username | The username needed to connect to the server | String | Between 1 and 100 characters long | NULL | Y | N |

## Delete Message Gateway
This allows you to delete a message gateway

**URL** : `/messages/gateways/:gateway/`

**Method** : `DELETE`

## Updates Message Gateway
This allows you to update a message gateway

**URL** : `/messages/gateways/:gateway/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| methods | An array of methods - see [Messages Gateways Methods](Messages_Gateways_Methods.md#update-messages-gateways-methods) | Array |  | NULL | N | N |
| name | Name of the gateway | String | Between 1 and 100 characters long | NULL | Y | N |
| password | The password needed to connect to the server | String |  | NULL | Y | N |
| port | The server port that need to communicate to on the server | Integer | Up to 5 digits long | NULL | Y | N |
| security | The security setting the gateway uses | String | One of the following values: `ssl`, `tls` | NULL | N | N |
| server | The server the gateway will connect to | String |  | NULL | Y | N |
| username | The username needed to connect to the server | String | Between 1 and 100 characters long | NULL | Y | N |

## View Message Gateway
This allows you to list the available message gateways

**URL** : `/messages/gateways/`

**URL** : `/messages/gateways/:gateway/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| interface | The interface that the gateway uses | String | One of the following values: `email`, `twilio` |
| methods | An array of methods - see [Messages Gateways Methods](Messages_Gateways_Methods.md#view-messages-gateways-methods) | Array |  |
| name | Name of the gateway | String | Between 1 and 100 characters long |
