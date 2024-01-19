# Marketplaces Settings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages marketplace settings
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/settings/ | POST | This allows you to create marketplace settings | [Details](#create-marketplace-settings) |
| /marketplaces/:marketplace/settings/ | PUT | This allows you to update marketplace settings | [Details](#update-marketplace-settings) |
| /marketplaces/:marketplace/settings/:setting/ | PUT | This allows you to update marketplace settings | [Details](#update-marketplace-settings) |
| /marketplaces/:marketplace/settings/ | GET | This allows you to list marketplace settings | [Details](#view-marketplace-settings) |
| /marketplaces/:marketplace/settings/:setting/ | GET | This allows you to list marketplace settings | [Details](#view-marketplace-settings) |

## Create Marketplace Settings
This allows you to create marketplace settings

**URL** : `/marketplaces/:marketplace/settings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_secure | Indicates whether or not the setting value is secured | Boolean |  | false | N | N |
| setting | The setting to set, must be unique to the marketplace | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the setting | String |  | NULL | N | N |

## Update Marketplace Settings
This allows you to update marketplace settings

**URL** : `/marketplaces/:marketplace/settings/`

**URL** : `/marketplaces/:marketplace/settings/:setting/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| value | The value of the setting | String |  | NULL | N | N |

## View Marketplace Settings
This allows you to list marketplace settings

**URL** : `/marketplaces/:marketplace/settings/`

**URL** : `/marketplaces/:marketplace/settings/:setting/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| is_secure | Indicates whether or not the setting value is secured | Boolean |  |
| setting | The setting to set, must be unique to the marketplace | String | Between 1 and 50 characters long |
| value | The value of the setting | String |  |
