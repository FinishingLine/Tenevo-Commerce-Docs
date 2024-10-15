# System Order Checks
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/orderchecks/ | POST | This allows you to manage system order checks | [Details](#create-system-order-checks) |
| /system/orderchecks/:ordercheck/ | DELETE | This allows you to delete a specified system order check | [Details](#delete-system-order-check) |
| /system/orderchecks/ | PUT | This allows you to update system order checks | [Details](#update-system-order-checks) |
| /system/orderchecks/:ordercheck/ | PUT | This allows you to update system order checks | [Details](#update-system-order-checks) |
| /system/orderchecks/ | GET | This allows you to list system order checks | [Details](#view-system-order-checks) |
| /system/orderchecks/:ordercheck/ | GET | This allows you to list system order checks | [Details](#view-system-order-checks) |

## Create System Order Checks
This allows you to manage system order checks

**URL** : `/system/orderchecks/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_enabled | Indicates whether or not the check is enabled | Boolean |  | false | N | N |
| marketplace_id | A valid Marketplace ID | Integer |  | NULL | N | N |
| store_id | A valid Store ID | Integer |  | NULL | N | N |
| type_id | A valid Order Screening Type ID | Integer | Up to 10 digits long | NULL | Y | N |

## Delete System Order Check
This allows you to delete a specified system order check

**URL** : `/system/orderchecks/:ordercheck/`

**Method** : `DELETE`

## Update System Order Checks
This allows you to update system order checks

**URL** : `/system/orderchecks/`

**URL** : `/system/orderchecks/:ordercheck/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_enabled | Indicates whether or not the check is enabled | Boolean |  | false | N | N |

## View System Order Checks
This allows you to list system order checks

**URL** : `/system/orderchecks/`

**URL** : `/system/orderchecks/:ordercheck/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| is_enabled | Indicates whether or not the administrator should be notified | Boolean |  |
| marketplace_id | A valid Marketplace ID | Integer |  |
| parent_type | The name of the Order Screening Parent Type | String | Up to 100 characters long |
| parent_type_id | A valid Order Screening Parent Type ID | Integer | Up to 10 digits long |
| store_id | A valid Store ID | Integer |  |
| type | The name of the Order Screening Type | String | Up to 100 characters long |
| type_id | A valid Order Screening Type ID | Integer | Up to 10 digits long |
