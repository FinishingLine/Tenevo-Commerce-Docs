# Tax Classes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tax Classes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tax/classes/ | POST | This allows you to create a tax class | [Details](#create-tax-class) |
| /tax/classes/:class/ | DELETE | This allows you to delete a tax class | [Details](#delete-tax-class) |
| /tax/classes/ | PUT | This allows you to update a specific tax class | [Details](#update-tax-classes) |
| /tax/classes/:class/ | PUT | This allows you to update a specific tax class | [Details](#update-tax-classes) |
| /tax/classes/ | GET | This allows you to list tax classes | [Details](#view-tax-classes) |
| /tax/classes/:tax | GET | This allows you to list tax classes | [Details](#view-tax-classes) |

## Create Tax Class
This allows you to create a tax class

**URL** : `/tax/classes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name for the tax class | String | Up to 100 characters long | NULL | Y | N |
| type | The type of tax class | String | One of the following values: `customer`, `product` | NULL | Y | N |

## Delete Tax Class
This allows you to delete a tax class

**URL** : `/tax/classes/:class/`

**Method** : `DELETE`

## Update Tax Classes
This allows you to update a specific tax class

**URL** : `/tax/classes/`

**URL** : `/tax/classes/:class/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name for the tax class | String | Up to 100 characters long | NULL | Y | N |

## View Tax Classes
This allows you to list tax classes

**URL** : `/tax/classes/`

**URL** : `/tax/classes/:tax`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | The name for the tax class | String | Up to 100 characters long |
| type | The type of tax class | String | One of the following values: `customer`, `product` |
