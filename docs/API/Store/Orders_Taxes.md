# Orders Taxes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Orders Tax
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/taxes/ | POST | This allows you to create an tax for an order | [Details](#create-order-taxes) |
| /orders/:order/taxes/:taxes | DELETE | This allows you to delete an tax from an order | [Details](#delete-order-taxes) |
| /orders/:order/taxes/ | PUT | This allows you to update a specific tax in an order | [Details](#update-order-taxes) |
| /orders/:order/taxes/:taxes/ | PUT | This allows you to update a specific tax in an order | [Details](#update-order-taxes) |
| /orders/:order/taxes/ | GET | This allows you to list the taxes belonging to the order | [Details](#view-order-taxes) |
| /orders/:order/taxes/:taxes | GET | This allows you to list the taxes belonging to the order | [Details](#view-order-taxes) |

## Create Order Taxes
This allows you to create an tax for an order

**URL** : `/orders/:order/taxes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| amount | The total amount of tax allocated to the provided Tax Zone | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | Y | N |
| name | The name of the tax, required if zone_id is null | String | Up to 100 characters long | NULL | N | Y |
| rate | The tax rate | Float | Up to 3 decimal places and no larger than 99.999 | NULL | Y | N |
| zone_id | A valid Tax Zone ID | Integer |  | NULL | N | N |

## Delete Order Taxes
This allows you to delete an tax from an order

**URL** : `/orders/:order/taxes/:taxes`

**Method** : `DELETE`

## Update Order Taxes
This allows you to update a specific tax in an order

**URL** : `/orders/:order/taxes/`

**URL** : `/orders/:order/taxes/:taxes/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| amount | The total amount of tax allocated to the provided Tax Zone | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | Y | N |
| name | The name of the tax, required if zone_id is null | String | Up to 100 characters long | NULL | N | Y |
| rate | The tax rate | Float | Up to 3 decimal places and no larger than 99.999 | NULL | Y | N |
| zone_id | A valid Tax Zone ID, updatable only if zone_id is null | Integer |  | NULL | N | Y |

## View Order Taxes
This allows you to list the taxes belonging to the order

**URL** : `/orders/:order/taxes/`

**URL** : `/orders/:order/taxes/:taxes`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| amount | The total amount of tax allocated to the provided Tax Zone | Float | Up to 2 decimal places and no larger than 99999999.99 |
| code | The code of the Tax Zone | String | Up to 50 characters long |
| name | The name of the tax | String | Up to 100 characters long |
| rate | The tax rate | Float | Up to 3 decimal places and no larger than 99.999 |
| zone | The name of the Tax Zone, reverts to name if zone_id is null | String | Up to 100 characters long |
| zone_id | A valid Tax Zone ID | Integer |  |
