# Tax Rules
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tax Rules
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tax/rules/ | POST | This allows you to create a tax rule | [Details](#create-tax-rule) |
| /tax/rules/:rule/ | DELETE | This allows you to delete a tax rule | [Details](#delete-tax-rule) |
| /tax/rules/ | PUT | This allows you to update a specific tax rule | [Details](#update-tax-rules) |
| /tax/rules/:rule/ | PUT | This allows you to update a specific tax rule | [Details](#update-tax-rules) |
| /tax/rules/ | GET | This allows you to list tax rules | [Details](#view-tax-rules) |
| /tax/rules/:rule/ | GET | This allows you to list tax rules | [Details](#view-tax-rules) |

## Create Tax Rule
This allows you to create a tax rule

**URL** : `/tax/rules/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| items | An array containing the items related to this rule - see [Tax Rules Items](Tax_Rules_Items.md#create-tax-rules-items) | Array |  | NULL | N | N |
| name | The name for the tax rule | String | Up to 100 characters long | NULL | Y | N |

## Delete Tax Rule
This allows you to delete a tax rule

**URL** : `/tax/rules/:rule/`

**Method** : `DELETE`

## Update Tax Rules
This allows you to update a specific tax rule

**URL** : `/tax/rules/`

**URL** : `/tax/rules/:rule/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name for the tax rule | String | Up to 100 characters long | NULL | Y | N |

## View Tax Rules
This allows you to list tax rules

**URL** : `/tax/rules/`

**URL** : `/tax/rules/:rule/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| items | An array containing the items related to this rule - see [Tax Rules Items](Tax_Rules_Items.md#view-tax-rules-items) | Array |  |
| name | The name for the tax rule | String | Up to 100 characters long |
