# System Alerts Subscriptions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system alerts subscriptions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/alerts/:alert/subscriptions/ | POST | This allows you to create alert subscriptions | [Details](#create-system-alert-subscriptions) |
| /system/alerts/:alert/subscriptions/:subscription/ | DELETE | This allows you to delete a specified alert subscription | [Details](#delete-alert-subscriber) |
| /system/alerts/:alert/subscriptions/ | PUT | This allows you to update alert subscriptions | [Details](#update-system-alert-subscriptions) |
| /system/alerts/:alert/subscriptions/:subscription/ | PUT | This allows you to update alert subscriptions | [Details](#update-system-alert-subscriptions) |
| /system/alerts/:alert/subscriptions/ | GET | This allows you to list alert subscriptions | [Details](#view-system-alert-subscriptions) |
| /system/alerts/:alert/subscriptions/:subscription/ | GET | This allows you to list alert subscriptions | [Details](#view-system-alert-subscriptions) |

## Create System Alert Subscriptions
This allows you to create alert subscriptions

**URL** : `/system/alerts/:alert/subscriptions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| configurableoptions | An array of configurable options that the subscriber is using to configure customised trigger value - see [System Alerts Subscriptions Configurable Options](System_Alerts_Subscriptions_Configurable_Options.md#create-system-alerts-subscriptions-configurable-options) | Array |  | NULL | N | N |
| subscribe_until | 00:00:00] A UTC datetime of how long the subscriber should be subscribed to the alert until [0000-00-00 00:00:00 = forever] | Datetime |  | 0000-00-00 00:00:00 | N | N |
| subscriber_id | A valid ID of the subscriber (Admin ID) | Integer |  | NULL | Y | N |
| trigger_action | How the subscriber would like to consume the alert | String | One of the following values: `chat`, `email`, `notification` | NULL | Y | N |
| trigger_once | Indicates whether subscriber wants to consume the alert just once | Boolean |  | false | N | N |

## Delete Alert Subscriber
This allows you to delete a specified alert subscription

**URL** : `/system/alerts/:alert/subscriptions/:subscription/`

**Method** : `DELETE`

## Update System Alert Subscriptions
This allows you to update alert subscriptions

**URL** : `/system/alerts/:alert/subscriptions/`

**URL** : `/system/alerts/:alert/subscriptions/:subscription/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| configurableoptions | An array of configurable options that the subscriber is using to configure customised trigger value - see [System Alerts Subscriptions Configurable Options](System_Alerts_Subscriptions_Configurable_Options.md#update-system-alerts-subscriptions-configurable-options) | Array |  | NULL | N | N |
| status | The status of the subscription | String | One of the following values: `active`, `archived` | active | Y | N |
| subscribe_until | 00:00:00] A UTC datetime of how long the subscriber should be subscribed to the alert until [0000-00-00 00:00:00 = forever] | Datetime |  | 0000-00-00 00:00:00 | Y | N |
| trigger_once | Indicates whether subscriber wants to consume the alert just once | Boolean |  | false | Y | N |

## View System Alert Subscriptions
This allows you to list alert subscriptions

**URL** : `/system/alerts/:alert/subscriptions/`

**URL** : `/system/alerts/:alert/subscriptions/:subscription/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| alert_id | A valid ID of the alert subscribed to | Integer |  |
| configurableoptions | An array of configurable options that the subscriber is using to configure customised trigger value - see [System Alerts Subscriptions Configurable Options](System_Alerts_Subscriptions_Configurable_Options.md#view-system-alerts-subscriptions-configurable-options) | Array |  |
| status | The status of the subscription | String | One of the following values: `active`, `archived` |
| subscribe_until | A UTC datetime of how long the subscriber should be subscribed to the alert until [0000-00-00 00:00:00 = forever] | Datetime |  |
| subscriber_id | A valid ID of the subscriber (Admin ID) | Integer |  |
| trigger_action | How the subscriber would like to consume the alert | String | One of the following values: `chat`, `email`, `notification` |
| trigger_once | Indicates whether subscriber wants to consume the alert just once | Boolean |  |
