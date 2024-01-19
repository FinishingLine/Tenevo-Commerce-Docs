# Marketplaces Products Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages marketplace product attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/products/:product/attributes/ | POST | This allows you to create attributes for marketplace products | [Details](#create-marketplaces-products-attributes) |
| /marketplaces/:marketplace/products/:product/attributes/:attribute/ | DELETE | This allows you to delete a specified attribute from a marketplace products | [Details](#delete-marketplaces-products-attribute) |
| /marketplaces/:marketplace/products/:product/attributes/ | PUT | This allows you to update attributes for marketplace products | [Details](#update-marketplaces-products-attributes) |
| /marketplaces/:marketplace/products/:product/attributes/:attribute/ | PUT | This allows you to update attributes for marketplace products | [Details](#update-marketplaces-products-attributes) |
| /marketplaces/:marketplace/products/:product/attributes/ | GET | This allows you to list attributes for marketplace products | [Details](#view-marketplaces-products-attributes) |
| /marketplaces/:marketplace/products/:product/attributes/:attribute/ | GET | This allows you to list attributes for marketplace products | [Details](#view-marketplaces-products-attributes) |

## Create Marketplaces Products Attributes
This allows you to create attributes for marketplace products

**URL** : `/marketplaces/:marketplace/products/:product/attributes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace product attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace product attribute | String |  | NULL | N | N |

## Delete Marketplaces Products Attribute
This allows you to delete a specified attribute from a marketplace products

**URL** : `/marketplaces/:marketplace/products/:product/attributes/:attribute/`

**Method** : `DELETE`

## Update Marketplaces Products Attributes
This allows you to update attributes for marketplace products

**URL** : `/marketplaces/:marketplace/products/:product/attributes/`

**URL** : `/marketplaces/:marketplace/products/:product/attributes/:attribute/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace product attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace product attribute | String |  | NULL | N | N |

## View Marketplaces Products Attributes
This allows you to list attributes for marketplace products

**URL** : `/marketplaces/:marketplace/products/:product/attributes/`

**URL** : `/marketplaces/:marketplace/products/:product/attributes/:attribute/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attribute | The name of the marketplace product attribute | String | Between 1 and 50 characters long |
| value | The value of the marketplace product attribute | String |  |
