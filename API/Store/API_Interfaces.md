# API Interfaces
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages API Interfaces
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /api/interfaces/ | POST | This allows you to create an API Interface | [Details](#create-api-interface) |
| /api/interfaces/:interface/ | DELETE | This allows you to delete an API interface | [Details](#delete-api-interface) |
| /api/interfaces/ | PUT | This allows you to update a specific client interface | [Details](#update-interfaces) |
| /api/interfaces/:interface/ | PUT | This allows you to update a specific client interface | [Details](#update-interfaces) |
| /api/interfaces/ | GET | This allows you to list the API interfaces belonging to the client | [Details](#view-api-interfaces) |
| /api/interfaces/:interface/ | GET | This allows you to list the API interfaces belonging to the client | [Details](#view-api-interfaces) |

## Create API Interface
This allows you to create an API Interface

**URL** : `/api/interfaces/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| meta | An array of meta for the interface - see [API Interfaces Meta](API_Interfaces_Meta.md#create-api-interfaces-meta) | Array |  | NULL | N | N |
| owner_id | A valid Owner ID | Integer |  | NULL | Y | N |
| settings | An array of settings for the interface - see [API Interfaces Settings](API_Interfaces_Settings.md#create-api-interfaces-settings) | Array |  | NULL | N | N |
| type | The interface type | String | Must have the value: `marketplace` | NULL | Y | N |

## Delete API Interface
This allows you to delete an API interface

**URL** : `/api/interfaces/:interface/`

**Method** : `DELETE`

## Update Interfaces
This allows you to update a specific client interface

**URL** : `/api/interfaces/`

**URL** : `/api/interfaces/:interface/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| meta | An array of meta for the interface - see [API Interfaces Meta](API_Interfaces_Meta.md#update-api-interfaces-meta) | Array |  | NULL | N | N |
| settings | An array of settings for the interface - see [API Interfaces Settings](API_Interfaces_Settings.md#update-api-interfaces-settings) | Array |  | NULL | N | N |

## View API Interfaces
This allows you to list the API interfaces belonging to the client

**URL** : `/api/interfaces/`

**URL** : `/api/interfaces/:interface/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| meta | An array of meta for the interface - see [API Interfaces Meta](API_Interfaces_Meta.md#view-api-interfaces-meta) | Array |  |
| owner_id | A valid Owner ID | Integer |  |
| reference | A unique reference given to the interface | String | Exactly 10 characters long |
| settings | An array of settings for the interface - see [API Interfaces Settings](API_Interfaces_Settings.md#view-api-interfaces-settings) | Array |  |
| type | The interface type | String | Must have the value: `marketplace` |
