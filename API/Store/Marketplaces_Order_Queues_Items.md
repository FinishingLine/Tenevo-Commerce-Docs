# Marketplaces Order Queues Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Order Queue Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/orderqueues/:orderqueue/items/ | POST | This allows you to create items for marketplace order queues | [Details](#create-marketplaces-order-queues-items) |
| /marketplaces/:marketplace/orderqueues/:orderqueue/items/:item/ | DELETE | This allows you to delete a specified item from a marketplace order queue | [Details](#delete-marketplaces-order-queues-item) |
| /marketplaces/:marketplace/orderqueues/:orderqueue/items/ | GET | This allows you to list items for marketplace order queues | [Details](#view-marketplaces-order-queues-items) |
| /marketplaces/:marketplace/orderqueues/:orderqueue/items/:item/ | GET | This allows you to list items for marketplace order queues | [Details](#view-marketplaces-order-queues-items) |

## Create Marketplaces Order Queues Items
This allows you to create items for marketplace order queues

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/items/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| product_reference_id | The ID of the ordered product as per at the marketplace | String | Up to 255 characters long | NULL | Y | N |
| reference_id | The ID that the marketplace uses to reference the order item | String | Up to 255 characters long | NULL | Y | N |
| sku | The SKU of the order item | String | Up to 255 characters long | NULL | N | N |

## Delete Marketplaces Order Queues Item
This allows you to delete a specified item from a marketplace order queue

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/items/:item/`

**Method** : `DELETE`

## View Marketplaces Order Queues Items
This allows you to list items for marketplace order queues

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/items/`

**URL** : `/marketplaces/:marketplace/orderqueues/:orderqueue/items/:item/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| product_reference_id | The ID of the ordered product as per at the marketplace | String | Up to 255 characters long |
| reference_id | The ID that the marketplace uses to reference the order item | String | Up to 255 characters long |
| sku | The SKU of the order item | String | Up to 255 characters long |
