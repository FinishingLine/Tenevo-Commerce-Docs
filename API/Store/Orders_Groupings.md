# Orders Groupings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Order Grouping
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/groupings/ | POST | This allows you to create an order grouping | [Details](#create-order-grouping) |
| /orders/:order/groupings/ | PUT | This allows you to update a specific order grouping | [Details](#update-order-groupings) |
| /orders/:order/groupings/:grouping/ | PUT | This allows you to update a specific order grouping | [Details](#update-order-groupings) |
| /orders/:order/groupings/ | GET | This allows you to list the order grouping | [Details](#view-order-grouping) |
| /orders/:order/groupings/:grouping | GET | This allows you to list the order grouping | [Details](#view-order-grouping) |

## Create Order Grouping
This allows you to create an order grouping

**URL** : `/orders/:order/groupings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| items | An array of items belonging to this grouping - see [Orders Groupings Items](Orders_Groupings_Items.md#create-orders-groupings-items) | Array |  | NULL | N | N |
| profile_id | A valid Profile ID | Integer |  | NULL | Y | N |
| reference | A reference for this grouping | String | Up to 200 characters long | NULL | Y | N |

## Update Order Groupings
This allows you to update a specific order grouping

**URL** : `/orders/:order/groupings/`

**URL** : `/orders/:order/groupings/:grouping/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| items | An array of items belonging to this grouping - see [Orders Groupings Items](Orders_Groupings_Items.md#update-orders-groupings-items) | Array |  | NULL | N | N |
| reference | A reference for this grouping | String | Up to 200 characters long | NULL | Y | N |

## View Order Grouping
This allows you to list the order grouping

**URL** : `/orders/:order/groupings/`

**URL** : `/orders/:order/groupings/:grouping`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| first_name | The first name of the grouping profile | String | Up to 255 characters long |
| full_name | The full name of the grouping profile | String | Up to 255 characters long |
| has_prerelease | Indicates whether the grouping has a pre-release item, or not | Boolean |  |
| has_released | Indicates whether the grouping has a released item, or not | Boolean |  |
| items | An array of items belonging to this grouping - see [Orders Groupings Items](Orders_Groupings_Items.md#view-orders-groupings-items) | Array |  |
| last_name | The last name of the grouping profile | String | Up to 255 characters long |
| profile_id | A valid Profile ID | Integer |  |
| quantity_fulfilled | The total number of units fulfilled for the grouping | Integer | Up to 10 digits long |
| quantity_ordered | The total number of units ordered for the grouping | Integer | Up to 10 digits long |
| quantity_outstanding | The total number of units outstanding for the grouping | Integer | Up to 10 digits long |
| quantity_returned | The total number of units returned for the grouping | Integer | Up to 10 digits long |
| quantity_returning | The total number of units being returned for the grouping | Integer | Up to 10 digits long |
| reference | A reference for this grouping | String | Exactly 10 characters long |
| release_at | Where the grouping contains a pre-release item, a UTC datetime of when the next item will be released | Datetime |  |
| uom_quantity_fulfilled | The total number of units fulfilled for the grouping, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_quantity_ordered | The total number of units ordered for the grouping, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_quantity_outstanding | The total number of units outstanding for the grouping, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_quantity_returned | The total number of units returned for the grouping, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_quantity_returning | The total number of units being returned for the grouping, in Unit of Measure terms | Integer | Up to 10 digits long |
