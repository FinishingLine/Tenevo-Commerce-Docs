# Products Collections
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product collections
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/collections/ | POST | This allows you to create product collections | [Details](#create-product-collections) |
| /products/:product/collections/:collection/ | DELETE | This allows you to delete a specified product collection | [Details](#delete-product-collection) |
| /products/:product/collections/ | GET | This allows you to list product collections | [Details](#view-product-collections) |
| /products/:product/collections/:collection/ | GET | This allows you to list product collections | [Details](#view-product-collections) |

## Create Product Collections
This allows you to create product collections

**URL** : `/products/:product/collections/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| collection_id | A valid Collection ID | Integer |  | NULL | Y | N |

## Delete Product Collection
This allows you to delete a specified product collection

**URL** : `/products/:product/collections/:collection/`

**Method** : `DELETE`

## View Product Collections
This allows you to list product collections

**URL** : `/products/:product/collections/`

**URL** : `/products/:product/collections/:collection/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| collection_id | A valid Collection ID | Integer |  |
| name | The name of the collection | String | Between 1 and 100 characters long |
