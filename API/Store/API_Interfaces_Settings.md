# API Interfaces Settings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages API Interface Settings
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /api/interfaces/:interface/settings/ | POST | This allows you to create a Setting for an API Interface | [Details](#create-api-interface-settings) |
| /api/interfaces/:interface/settings/ | PUT | This allows you to update a specific client interface setting | [Details](#update-interfaces-settings) |
| /api/interfaces/:interface/settings/:setting/ | PUT | This allows you to update a specific client interface setting | [Details](#update-interfaces-settings) |
| /api/interfaces/:interface/settings/ | GET | This allows you to list the API interface settingss belonging to the client | [Details](#view-api-interfaces-settings) |
| /api/interfaces/:interface/settings/:setting/ | GET | This allows you to list the API interface settingss belonging to the client | [Details](#view-api-interfaces-settings) |

## Create API Interface Settings
This allows you to create a Setting for an API Interface

**URL** : `/api/interfaces/:interface/settings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| setting | The setting to set, must be unique to the interface | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the setting | String |  | NULL | N | N |

## Update Interfaces Settings
This allows you to update a specific client interface setting

**URL** : `/api/interfaces/:interface/settings/`

**URL** : `/api/interfaces/:interface/settings/:setting/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| value | The value of the setting | String |  | NULL | N | N |

## View API Interfaces Settings
This allows you to list the API interface settingss belonging to the client

**URL** : `/api/interfaces/:interface/settings/`

**URL** : `/api/interfaces/:interface/settings/:setting/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| setting | The setting to set, must be unique to the interface | String | Between 1 and 50 characters long |
| value | The value of the setting | String |  |
