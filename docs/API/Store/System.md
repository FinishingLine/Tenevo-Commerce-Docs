# System
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages System
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/ | POST | This allows you to create a system | [Details](#create-system) |
| /system/ | PUT | This allows you to update a specific system | [Details](#update-system) |
| /system/ | GET | This allows you to list system | [Details](#view-system) |

## Create System
This allows you to create a system

**URL** : `/system/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alerts | An array containing alerts - see [System Alerts](System_Alerts.md#create-system-alerts) | Array |  | NULL | N | N |

## Update System
This allows you to update a specific system

**URL** : `/system/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alerts | An array containing alerts - see [System Alerts](System_Alerts.md#update-system-alerts) | Array |  | NULL | Y | N |

## View System
This allows you to list system

**URL** : `/system/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| alerts | An array containing alerts - see [System Alerts](System_Alerts.md#view-system-alerts) | Array |  |
