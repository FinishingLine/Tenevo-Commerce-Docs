# System Alerts
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system alerts
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/alerts/ | POST | This allows you to create alerts | [Details](#create-system-alerts) |
| /system/alerts/:alert/ | DELETE | This allows you to delete a specified alert | [Details](#delete-alert) |
| /system/alerts/ | PUT | This allows you to update alerts | [Details](#update-system-alerts) |
| /system/alerts/:alert/ | PUT | This allows you to update alerts | [Details](#update-system-alerts) |
| /system/alerts/ | GET | This allows you to list system alerts | [Details](#view-system-alerts) |
| /system/alerts/:alert/ | GET | This allows you to list system alerts | [Details](#view-system-alerts) |

## Create System Alerts
This allows you to create alerts

**URL** : `/system/alerts/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| chat_template | A valid notification template code for the alert to use when sending out chat messages | String | Between 1 and 100 characters long | NULL | N | N |
| client_email_permission | A valid email permission for clients to be sent an email alert - can only be used when the channel contains a client_id field | String | One of the following values: `email_purchaseorder_accepted`, `email_purchaseorder_awaitingreview`, `email_purchaseorder_rejected`, `email_purchaseorder_revised`, `email_stock_add`, `email_stock_destroy`, `email_stock_expiring`, `email_stock_dispatch`, `email_stock_low`, `email_stock_new`, `email_stock_receivedsixmonths`, `email_stock_receivedtwelvemonths`, `email_stock_reserve`, `email_stock_use` | NULL | N | Y |
| description | A short description of what the alert does | String |  | NULL | Y | N |
| duplicate_removal_field | When specified, alerts can be filtered by a field to avoid repetitive alerts - can only be used when `start_condition` is apimethod | String | Between 1 and 100 characters long | NULL | N | Y |
| email_template | A valid email template code for the alert to use when sending out emails | String | Between 1 and 100 characters long | NULL | Y | N |
| name | The name of the alert | String | Between 1 and 50 characters long | NULL | Y | N |
| notification_template | A valid notification template code for the alert to use when sending out browser notifications | String | Between 1 and 100 characters long | NULL | Y | N |
| result_action_channel | Only required when `start_condition` is localtime or periodic - must be a valid channel | String |  | NULL | N | Y |
| result_action_query | Only required when `start_condition` is localtime or periodic - must be a valid query against the selected channel | String |  | NULL | N | Y |
| start_condition | The condition required to start processing the alert | String | One of the following values: `apimethod`, `localtime`, `periodic` | NULL | Y | N |
| start_value | If: `start_condition` is apimethod, a valid channel; `localtime` a valid time in HH:mm format; `periodic` an amount of minutes between each run starting from midnight | String | Up to 100 characters long | NULL | Y | N |
| subscriptions | An array of subscriptions subscribing to the alert - see [System Alerts Subscriptions](System_Alerts_Subscriptions.md#create-system-alerts-subscriptions) | Array |  | NULL | N | N |
| triggers | An array of triggers that trigger the alert - see [System Alerts Triggers](System_Alerts_Triggers.md#create-system-alerts-triggers) | Array |  | NULL | N | N |

## Delete Alert
This allows you to delete a specified alert

**URL** : `/system/alerts/:alert/`

**Method** : `DELETE`

## Update System Alerts
This allows you to update alerts

**URL** : `/system/alerts/`

**URL** : `/system/alerts/:alert/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| chat_template | A valid notification template code for the alert to use when sending out chat messages | String | Between 1 and 100 characters long | NULL | N | N |
| client_email_permission | A valid email permission for clients to be sent an email alert - can only be used when the channel contains a client_id field | String | One of the following values: `email_purchaseorder_accepted`, `email_purchaseorder_awaitingreview`, `email_purchaseorder_rejected`, `email_purchaseorder_revised`, `email_stock_add`, `email_stock_destroy`, `email_stock_expiring`, `email_stock_dispatch`, `email_stock_low`, `email_stock_new`, `email_stock_receivedsixmonths`, `email_stock_receivedtwelvemonths`, `email_stock_reserve`, `email_stock_use` | NULL | N | Y |
| description | A short description of what the alert does | String |  | NULL | Y | N |
| duplicate_removal_field | When specified, alerts can be filtered by a field to avoid repetitive alerts - can only be used when `start_condition` is apimethod | String | Between 1 and 100 characters long | NULL | N | Y |
| email_template | A valid email template code for the alert to use when sending out emails | String | Between 1 and 100 characters long | NULL | Y | N |
| name | The name of the alert | String | Between 1 and 50 characters long | NULL | Y | N |
| notification_template | A valid notification template code for the alert to use when sending out browser notifications | String | Between 1 and 100 characters long | NULL | Y | N |
| result_action_query | Only required when `start_condition` is localtime or periodic - must be a valid query against the selected channel | String |  | NULL | N | Y |
| start_value | If: `start_condition` is apimethod, a valid channel; `localtime` a valid time in HH:mm format; `periodic` an amount of minutes between each run starting from midnight | String | Up to 100 characters long | NULL | Y | N |
| subscriptions | An array of subscriptions subscribing to the alert - see [System Alerts Subscriptions](System_Alerts_Subscriptions.md#update-system-alerts-subscriptions) | Array |  | NULL | N | N |
| triggers | An array of triggers that trigger the alert - see [System Alerts Triggers](System_Alerts_Triggers.md#update-system-alerts-triggers) | Array |  | NULL | N | N |

## View System Alerts
This allows you to list system alerts

**URL** : `/system/alerts/`

**URL** : `/system/alerts/:alert/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| chat_template | A valid notification template code for the alert to use when sending out chat messages | String | Between 1 and 100 characters long |
| client_email_permission | A valid email permission for clients to be sent an email alert - can only be used when the channel contains a client_id field | String | One of the following values: `email_purchaseorder_accepted`, `email_purchaseorder_awaitingreview`, `email_purchaseorder_rejected`, `email_purchaseorder_revised`, `email_stock_add`, `email_stock_destroy`, `email_stock_expiring`, `email_stock_dispatch`, `email_stock_low`, `email_stock_new`, `email_stock_receivedsixmonths`, `email_stock_receivedtwelvemonths`, `email_stock_reserve`, `email_stock_use` |
| created_at | A UTC datetime of when the alert was created | Datetime |  |
| description | A short description of what the alert does | String |  |
| duplicate_removal_field | When specified, alerts can be filtered by a field to avoid repetitive alerts - can only be used when `start_condition` is apimethod | String | Between 1 and 100 characters long |
| email_template | A valid email template code for the alert to use when sending out emails | String | Between 1 and 100 characters long |
| name | The name of the alert | String | Between 1 and 50 characters long |
| notification_template | A valid notification template code for the alert to use when sending out browser notifications | String | Between 1 and 100 characters long |
| result_action_channel | When `start_condition` is localtime or periodic - a valid channel that will have an API call made against it | String |  |
| result_action_query | When `start_condition` is localtime or periodic - a valid query against the selected channel | String |  |
| start_condition | The condition required to start processing the alert | String | One of the following values: `apimethod`, `localtime`, `periodic` |
| start_value | If: `start_condition` is apimethod, a valid channel; `localtime` a valid time in HH:mm format; `periodic` an amount of minutes between each run starting from midnight | String | Up to 100 characters long |
| subscriptions | An array of subscriptions subscribing to the alert - see [System Alerts Subscriptions](System_Alerts_Subscriptions.md#view-system-alerts-subscriptions) | Array |  |
| triggers | An array of triggers that trigger the alert - see [System Alerts Triggers](System_Alerts_Triggers.md#view-system-alerts-triggers) | Array |  |
| updated_at | A UTC datetime of when the alert was updated | Datetime |  |
