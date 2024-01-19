# Products Subscriptions Gifts
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product subscription gifts
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/subscriptions/:subscription/gifts/ | POST | This allows you to create product subscription gifts | [Details](#create-product-subscription-gifts) |
| /products/:product/subscriptions/:subscription/gifts/:gift | DELETE | This allows you to delete a specified product subscription gift | [Details](#delete-product-subscription-gift) |
| /products/:product/subscriptions/:subscription/gifts/ | PUT | This allows you to update product subscription gifts | [Details](#update-product-subscription-gifts) |
| /products/:product/subscriptions/:subscription/gifts/:gift/ | PUT | This allows you to update product subscription gifts | [Details](#update-product-subscription-gifts) |
| /products/:product/subscriptions/:subscription/gifts/ | GET | This allows you to list product subscription gifts | [Details](#view-product-subscription-gifts) |
| /products/:product/subscriptions/:subscription/gifts/:gift/ | GET | This allows you to list product subscription gifts | [Details](#view-product-subscription-gifts) |

## Create Product Subscription Gifts
This allows you to create product subscription gifts

**URL** : `/products/:product/subscriptions/:subscription/gifts/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| posting_number | The posting number of the subscription to send the gifts | Integer | Up to 10 digits long | 1 | N | N |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long | 1 | N | N |
| send_together | Indicates whether the gift should be sent with the subscription, or not | Boolean |  | false | N | N |
| variant_id | A valid Product Variant ID of the gift to send | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Product Subscription Gift
This allows you to delete a specified product subscription gift

**URL** : `/products/:product/subscriptions/:subscription/gifts/:gift`

**Method** : `DELETE`

## Update Product Subscription Gifts
This allows you to update product subscription gifts

**URL** : `/products/:product/subscriptions/:subscription/gifts/`

**URL** : `/products/:product/subscriptions/:subscription/gifts/:gift/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| posting_number | The posting number of the subscription to send the gifts | Integer | Up to 10 digits long | 1 | N | N |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long | 1 | N | N |
| send_together | Indicates whether the gift should be sent with the subscription, or not | Boolean |  | false | N | N |
| variant_id | A valid Product Variant ID of the gift to send | Integer | Up to 10 digits long | NULL | Y | N |

## View Product Subscription Gifts
This allows you to list product subscription gifts

**URL** : `/products/:product/subscriptions/:subscription/gifts/`

**URL** : `/products/:product/subscriptions/:subscription/gifts/:gift/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | The name of the gift | String |  |
| posting_number | The posting number of the subscription to send the gifts | Integer | Up to 10 digits long |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long |
| send_together | Indicates whether the gift should be sent with the subscription, or not | Boolean |  |
| sku | The SKU of the gift | String | Between 1 and 100 characters long |
| variant_id | A valid Product Variant ID of the gift to send | Integer | Up to 10 digits long |
