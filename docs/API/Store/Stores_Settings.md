# Stores Settings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages store settings
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/settings/ | POST | This allows you to create store settings | [Details](#create-store-settings) |
| /stores/:store/settings/ | PUT | This allows you to update store settings | [Details](#update-store-settings) |
| /stores/:store/settings/:setting/ | PUT | This allows you to update store settings | [Details](#update-store-settings) |
| /stores/:store/settings/ | GET | This allows you to list store settings | [Details](#view-store-settings) |
| /stores/:store/settings/:setting/ | GET | This allows you to list store settings | [Details](#view-store-settings) |

## Create Store Settings
This allows you to create store settings

**URL** : `/stores/:store/settings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| setting | The setting to set, must be unique to the store | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the setting | String |  | NULL | N | N |

## Update Store Settings
This allows you to update store settings

**URL** : `/stores/:store/settings/`

**URL** : `/stores/:store/settings/:setting/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| value | The value of the setting | String |  | NULL | N | N |

## View Store Settings
This allows you to list store settings

**URL** : `/stores/:store/settings/`

**URL** : `/stores/:store/settings/:setting/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| setting | The setting to set, must be unique to the store | String | Between 1 and 50 characters long |
| store_id | A valid Store ID | Integer |  |
| value | The value of the setting | String |  |
