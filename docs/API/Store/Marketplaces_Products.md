# Marketplaces Products
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Products
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/products/ | POST | This allows you to create a product for a marketplace | [Details](#create-marketplace-products) |
| /marketplaces/:marketplace/products/:product/ | DELETE | This allows you to delete a product from a marketplace | [Details](#delete-marketplace-product) |
| /marketplaces/:marketplace/products/ | PUT | This allows you to update a specific product for a marketplace | [Details](#update-marketplace-products) |
| /marketplaces/:marketplace/products/:product/ | PUT | This allows you to update a specific product for a marketplace | [Details](#update-marketplace-products) |
| /marketplaces/:marketplace/products/ | GET | This allows you to list the products belonging to the marketplace | [Details](#view-marketplace-products) |
| /marketplaces/:marketplace/products/:product/ | GET | This allows you to list the products belonging to the marketplace | [Details](#view-marketplace-products) |

## Create Marketplace Products
This allows you to create a product for a marketplace

**URL** : `/marketplaces/:marketplace/products/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product - see [Marketplaces Products Attributes](Marketplaces_Products_Attributes.md#create-marketplaces-products-attributes) | Array |  | NULL | N | N |
| reference | The product reference at the marketplace | String | Up to 30 characters long | NULL | Y | N |
| variation_id | The linked Product Variation ID | Integer |  | NULL | N | N |

## Delete Marketplace Product
This allows you to delete a product from a marketplace

**URL** : `/marketplaces/:marketplace/products/:product/`

**Method** : `DELETE`

## Update Marketplace Products
This allows you to update a specific product for a marketplace

**URL** : `/marketplaces/:marketplace/products/`

**URL** : `/marketplaces/:marketplace/products/:product/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product - see [Marketplaces Products Attributes](Marketplaces_Products_Attributes.md#update-marketplaces-products-attributes) | Array |  | NULL | N | N |
| variation_id | The linked Product Variation ID | Integer |  | NULL | N | N |

## View Marketplace Products
This allows you to list the products belonging to the marketplace

**URL** : `/marketplaces/:marketplace/products/`

**URL** : `/marketplaces/:marketplace/products/:product/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product - see [Marketplaces Products Attributes](Marketplaces_Products_Attributes.md#view-marketplaces-products-attributes) | Array |  |
| is_mapped | Indicates whether the marketplace product is mapped to a Product Variant | Boolean |  |
| reference | The product reference at the marketplace | String | Up to 30 characters long |
| variation_id | The linked Product Variation ID | Integer |  |
