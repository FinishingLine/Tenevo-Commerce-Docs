# Rules
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages rules
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /rules/ | POST | This allows you to create rules | [Details](#create-rule) |
| /rules/:rule/ | DELETE | This allows you to delete a specified rule | [Details](#delete-rule) |
| /rules/ | PUT | This allows you to update rule | [Details](#update-rule) |
| /rules/:rule/ | PUT | This allows you to update rule | [Details](#update-rule) |
| /rules/ | GET | This allows you to list rule | [Details](#view-rule) |
| /rules/:rule/ | GET | This allows you to list rule | [Details](#view-rule) |

## Create Rule
This allows you to create rules

**URL** : `/rules/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| conditions | An array of conditions that this belong to this rule - see [Rules Conditions](Rules_Conditions.md#create-rules-conditions) | Array |  | NULL | N | N |
| description | A description about this rule | String |  | NULL | Y | N |
| name | The name for this rule | String | Up to 50 characters long | NULL | Y | N |
| type | The type of rule | String | One of the following values: `basketoverall`, `basketbygroup`, `shippingmethod`, `ticketautomation` | NULL | Y | N |

## Delete Rule
This allows you to delete a specified rule

**URL** : `/rules/:rule/`

**Method** : `DELETE`

## Update Rule
This allows you to update rule

**URL** : `/rules/`

**URL** : `/rules/:rule/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| conditions | An array of conditions that this belong to this rule - see [Rules Conditions](Rules_Conditions.md#update-rules-conditions) | Array |  | NULL | N | N |
| description | A description about this rule | String |  | NULL | Y | N |
| name | The name for this rule | String | Up to 50 characters long | NULL | Y | N |

## View Rule
This allows you to list rule

**URL** : `/rules/`

**URL** : `/rules/:rule/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| conditions | An array of conditions that this belong to this rule - see [Rules Conditions](Rules_Conditions.md#view-rules-conditions) | Array |  |
| description | A description about this rule | String |  |
| name | The name for this rule | String | Up to 50 characters long |
| type | The type of rule | String | One of the following values: `basketoverall`, `basketbygroup`, `shippingmethod`, `ticketautomation` |
