# API Interfaces Meta
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages API Interface Meta
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /api/interfaces/:interface/meta/ | POST | This allows you to create a Meta for an API Interface | [Details](#create-api-interface-meta) |
| /api/interfaces/:interface/meta/ | PUT | This allows you to update a specific client interface meta | [Details](#update-interfaces-meta) |
| /api/interfaces/:interface/meta/:meta/ | PUT | This allows you to update a specific client interface meta | [Details](#update-interfaces-meta) |
| /api/interfaces/:interface/meta/ | GET | This allows you to list the API interface metas belonging to the client | [Details](#view-api-interfaces-meta) |
| /api/interfaces/:interface/meta/:meta/ | GET | This allows you to list the API interface metas belonging to the client | [Details](#view-api-interfaces-meta) |

## Create API Interface Meta
This allows you to create a Meta for an API Interface

**URL** : `/api/interfaces/:interface/meta/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| meta | The meta to set, must be unique to the interface | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the meta | String |  | NULL | N | N |

## Update Interfaces Meta
This allows you to update a specific client interface meta

**URL** : `/api/interfaces/:interface/meta/`

**URL** : `/api/interfaces/:interface/meta/:meta/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| value | The value of the meta | String |  | NULL | N | N |

## View API Interfaces Meta
This allows you to list the API interface metas belonging to the client

**URL** : `/api/interfaces/:interface/meta/`

**URL** : `/api/interfaces/:interface/meta/:meta/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| meta | The meta to set, must be unique to the interface | String | Between 1 and 50 characters long |
| value | The value of the meta | String |  |
