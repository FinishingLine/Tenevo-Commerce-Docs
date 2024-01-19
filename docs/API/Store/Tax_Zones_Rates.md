# Tax Zones Rates
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tax Zone Rates
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tax/zones/:zone/rates | POST | This allows you to create a tax zone rates | [Details](#create-tax-zone-rates) |
| /tax/zones/:zone/rates/:rate | DELETE | This allows you to delete a tax zone rate | [Details](#delete-tax-zone-rate) |
| /tax/zones/:zone/rates | PUT | This allows you to update a specific tax zone rate | [Details](#update-tax-zone-rates) |
| /tax/zones/:zone/rates/:rate | PUT | This allows you to update a specific tax zone rate | [Details](#update-tax-zone-rates) |
| /tax/zones/:zone/rates | GET | This allows you to list tax zone rates | [Details](#view-tax-zone-rates) |
| /tax/zones/:zone/rates/:rate | GET | This allows you to list tax zone rates | [Details](#view-tax-zone-rates) |

## Create Tax Zone Rates
This allows you to create a tax zone rates

**URL** : `/tax/zones/:zone/rates`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| from_date | The date the rate is valid from | Date |  | NOW | Y | N |
| rate | The rate of tax | Float | Up to 2 decimal places and no larger than 9.99 | 0.00 | Y | N |
| until_date | The date the rate is valid until | Date |  | NULL | N | N |

## Delete Tax Zone Rate
This allows you to delete a tax zone rate

**URL** : `/tax/zones/:zone/rates/:rate`

**Method** : `DELETE`

## Update Tax Zone Rates
This allows you to update a specific tax zone rate

**URL** : `/tax/zones/:zone/rates`

**URL** : `/tax/zones/:zone/rates/:rate`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| from_date | The date the rate is valid from | Date |  | NULL | Y | N |
| rate | The rate of tax | Float | Up to 2 decimal places and no larger than 9.99 | 0.00 | Y | N |
| until_date | The date the rate is valid until | Date |  | NULL | Y | N |

## View Tax Zone Rates
This allows you to list tax zone rates

**URL** : `/tax/zones/:zone/rates`

**URL** : `/tax/zones/:zone/rates/:rate`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| from_date | The date the rate is valid from | Date |  |
| rate | The rate of tax | Float | Up to 2 decimal places and no larger than 9.99 |
| until_date | The date the rate is valid until | Date |  |
