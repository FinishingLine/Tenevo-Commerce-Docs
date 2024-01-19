# System Alerts Subscriptions Configurable Options
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system alerts subscription configurable options
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/alerts/:alert/subscriptions/:subscription/configurableoptions/ | POST | This allows you to create alert subscription configurable options | [Details](#create-system-alert-subscription-configurable-options) |
| /system/alerts/:alert/subscriptions/:subscription/:subscription/configurableoptions/:configurableoption/ | DELETE | This allows you to delete a specified alert subscription configurable options | [Details](#delete-alert-subscription-configurable-option) |
| /system/alerts/:alert/subscriptions/:subscription/configurableoptions/ | PUT | This allows you to update alert subscription configurable options | [Details](#update-system-alert-subscription-configurable-options) |
| /system/alerts/:alert/subscriptions/:subscription/configurableoptions/:configurableoption/ | PUT | This allows you to update alert subscription configurable options | [Details](#update-system-alert-subscription-configurable-options) |
| /system/alerts/:alert/subscriptions/:subscription/configurableoptions/ | GET | This allows you to list alert subscription configurable options | [Details](#view-system-alert-subscription-configurable-options) |
| /system/alerts/:alert/subscriptions/:subscription/configurableoptions/:configurableoption/ | GET | This allows you to list alert subscription configurable options | [Details](#view-system-alert-subscription-configurable-options) |

## Create System Alert Subscription Configurable Options
This allows you to create alert subscription configurable options

**URL** : `/system/alerts/:alert/subscriptions/:subscription/configurableoptions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| trigger_id | A valid Alert Tigger ID | Integer |  | NULL | Y | N |
| value | The value to use to compare in the trigger | String | Between 1 and 100 characters long | NULL | Y | N |

## Delete Alert Subscription Configurable Option
This allows you to delete a specified alert subscription configurable options

**URL** : `/system/alerts/:alert/subscriptions/:subscription/:subscription/configurableoptions/:configurableoption/`

**Method** : `DELETE`

## Update System Alert Subscription Configurable Options
This allows you to update alert subscription configurable options

**URL** : `/system/alerts/:alert/subscriptions/:subscription/configurableoptions/`

**URL** : `/system/alerts/:alert/subscriptions/:subscription/configurableoptions/:configurableoption/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| value | The value to use to compare in the trigger | String | Between 1 and 100 characters long | NULL | Y | N |

## View System Alert Subscription Configurable Options
This allows you to list alert subscription configurable options

**URL** : `/system/alerts/:alert/subscriptions/:subscription/configurableoptions/`

**URL** : `/system/alerts/:alert/subscriptions/:subscription/configurableoptions/:configurableoption/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| trigger_id | A valid Alert Tigger ID | Integer |  |
| value | The value to use to compare in the trigger | String | Between 1 and 100 characters long |
