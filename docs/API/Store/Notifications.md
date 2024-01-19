# Notifications
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /notifications/ | POST | This allows you to manage notifications | [Details](#create-notifications) |
| /notifications/:notification/ | DELETE | This allows you to delete a specified notification | [Details](#delete-notification) |
| /notifications/ | PUT | This allows you to update notifications | [Details](#update-notifications) |
| /notifications/:notification/ | PUT | This allows you to update notifications | [Details](#update-notifications) |
| /notifications/notifications/ | GET | This allows you to list notifications | [Details](#view-notifications) |
| /notifications/notifications/:notification/ | GET | This allows you to list notifications | [Details](#view-notifications) |

## Create Notifications
This allows you to manage notifications

**URL** : `/notifications/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| admin_id | A valid Admin ID | Integer |  | NULL | Y | N |
| can_notify | Indicates whether or not the administrator should be notified | Boolean |  | false | N | N |
| store_id | A valid Store ID | Integer |  | NULL | N | N |
| type_id | A valid Notification Type ID | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Notification
This allows you to delete a specified notification

**URL** : `/notifications/:notification/`

**Method** : `DELETE`

## Update Notifications
This allows you to update notifications

**URL** : `/notifications/`

**URL** : `/notifications/:notification/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_notify | Indicates whether or not the administrator should be notified | Boolean |  | false | N | N |

## View Notifications
This allows you to list notifications

**URL** : `/notifications/notifications/`

**URL** : `/notifications/notifications/:notification/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| admin_id | A valid Admin ID | Integer |  |
| can_notify | Indicates whether or not the administrator should be notified | Boolean |  |
| parent_type | The name of the Notification Parent Type | String | Up to 100 characters long |
| parent_type_id | A valid Notification Parent Type ID | Integer | Up to 10 digits long |
| priority | The priority | Integer | Exactly 1 digits long |
| store_id | A valid Store ID | Integer |  |
| type | The name of the Notification Type | String | Up to 100 characters long |
| type_id | A valid Notification Type ID | Integer | Up to 10 digits long |
