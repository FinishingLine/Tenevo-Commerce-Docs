# Tax Zones
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tax Zones
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tax/zones/ | POST | This allows you to create a tax zone | [Details](#create-tax-zone) |
| /tax/zones/:zone/ | DELETE | This allows you to delete a tax zone | [Details](#delete-tax-zone) |
| /tax/zones/ | PUT | This allows you to update a specific tax zone | [Details](#update-tax-zones) |
| /tax/zones/:zone/ | PUT | This allows you to update a specific tax zone | [Details](#update-tax-zones) |
| /tax/zones/ | GET | This allows you to list tax zones | [Details](#view-tax-zones) |
| /tax/zones/:tax | GET | This allows you to list tax zones | [Details](#view-tax-zones) |

## Create Tax Zone
This allows you to create a tax zone

**URL** : `/tax/zones/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| code | A unique code to use for the tax zone | String | Up to 50 characters long | NULL | Y | N |
| country_iso2 | A valid 2 character ISO Country Code | String | Exactly 2 characters long | NULL | Y | N |
| name | The name for the tax zone | String | Up to 100 characters long | NULL | Y | N |
| rates | An array containing the rates related to this zone - see [Tax Zones Rates](Tax_Zones_Rates.md#create-tax-zones-rates) | Array |  | NULL | N | N |

## Delete Tax Zone
This allows you to delete a tax zone

**URL** : `/tax/zones/:zone/`

**Method** : `DELETE`

## Update Tax Zones
This allows you to update a specific tax zone

**URL** : `/tax/zones/`

**URL** : `/tax/zones/:zone/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name for the tax zone | String | Up to 100 characters long | NULL | Y | N |
| rates | An array containing the rates related to this zone - see [Tax Zones Rates](Tax_Zones_Rates.md#update-tax-zones-rates) | Array |  | NULL | N | N |

## View Tax Zones
This allows you to list tax zones

**URL** : `/tax/zones/`

**URL** : `/tax/zones/:tax`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| code | A unique code to use for the tax zone | String | Up to 50 characters long |
| country | The name of the country | String | Up to 255 characters long |
| country_iso2 | A valid 2 character ISO Country Code | String | Exactly 2 characters long |
| name | The name for the tax zone | String | Up to 100 characters long |
| rates | An array containing the rates related to this zone - see [Tax Zones Rates](Tax_Zones_Rates.md#view-tax-zones-rates) | Array |  |
