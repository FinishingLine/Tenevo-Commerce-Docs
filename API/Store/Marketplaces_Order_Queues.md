# Marketplaces Order Queues
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Order Queues
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/orderqueues/ | POST | This allows you to create an order queue for a marketplace | [Details](#create-marketplace-order-queues) |
| /marketplaces/:marketplace/orderqueues/:orderqueue/ | DELETE | This allows you to delete an order queue from a marketplace | [Details](#delete-marketplace-order-queues) |
| /marketplaces/:marketplace/orderqueues/ | GET | This allows you to list the order queues belonging to the marketplace | [Details](#view-marketplace-order-queues) |
| /marketplaces/:marketplace/orderqueues/:orderqueue/ | GET | This allows you to list the order queues belonging to the marketplace | [Details](#view-marketplace-order-queues) |

## Create Marketplace Order Queues
This allows you to create an order queue for a marketplace

**URL** : `/marketplaces/:marketplace/orderqueues/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| created_at | A date time stamp of when the order was created on the marketplace | Datetime |  | NOW | N | N |
| items | An array of items for the marketplace order queues - see [Marketplaces Order Queues Items](Marketplaces_Order_Queues_Items.md#create-marketplaces-order-queues-items) | Array |  | NULL | N | N |
| order_number | The order number of the order at the marketplace | String | Up to 255 characters long | NULL | Y | N |
| reference_child_id | The child ID that the marketplace uses to reference the order | String | Up to 255 characters long | NULL | N | N |
| reference_id | The ID that the marketplace uses to reference the order | String | Up to 255 characters long | NULL | Y | N |

## Delete Marketplace Order Queues
This allows you to delete an order queue from a marketplace

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/`

**Method** : `DELETE`

## View Marketplace Order Queues
This allows you to list the order queues belonging to the marketplace

**URL** : `/marketplaces/:marketplace/orderqueues/`

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| created_at | A date time stamp of when the order was created on the marketplace | Datetime |  |
| items | An array of items for the marketplace order queues - see [Marketplaces Order Queues Items](Marketplaces_Order_Queues_Items.md#view-marketplaces-order-queues-items) | Array |  |
| order_number | The order number of the order at the marketplace | String | Up to 255 characters long |
| reference_child_id | The child ID that the marketplace uses to reference the order | String | Up to 255 characters long |
| reference_id | The ID that the marketplace uses to reference the order | String | Up to 255 characters long |
| status | The status of the order queue | String | One of the following values: `active`, `retry` |
| system_created_at | A UTC datetime of when the order was added to the order queue | Datetime |  |
