# Marketplaces Products Variations
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Products Variations
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/products/:product/variations/ | POST | This allows you to create a variation for a marketplace product | [Details](#create-marketplace-products-variations) |
| /marketplaces/:marketplace/products/:product/variations/:variation/ | DELETE | This allows you to delete a variation from a marketplace product | [Details](#delete-marketplace-product-variation) |
| /marketplaces/:marketplace/products/:product/variations/ | PUT | This allows you to update a specific variation for a marketplace product | [Details](#update-marketplace-products-variations) |
| /marketplaces/:marketplace/products/:product/variations/:variation/ | PUT | This allows you to update a specific variation for a marketplace product | [Details](#update-marketplace-products-variations) |
| /marketplaces/:marketplace/products/:product/variations/ | GET | This allows you to list the variations belonging to the marketplace product | [Details](#view-marketplace-products-variations) |
| /marketplaces/:marketplace/products/:product/variations/:variation/ | GET | This allows you to list the variations belonging to the marketplace product | [Details](#view-marketplace-products-variations) |

## Create Marketplace Products Variations
This allows you to create a variation for a marketplace product

**URL** : `/marketplaces/:marketplace/products/:product/variations/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product variation - see [Marketplaces Products Variations Attributes](Marketplaces_Products_Variations_Attributes.md#create-marketplaces-products-variations-attributes) | Array |  | NULL | N | N |
| reference | The variation reference at the marketplace | String | Up to 30 characters long | NULL | Y | N |
| variation_id | The linked Product Variation ID | Integer |  | NULL | N | N |

## Delete Marketplace Product Variation
This allows you to delete a variation from a marketplace product

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/`

**Method** : `DELETE`

## Update Marketplace Products Variations
This allows you to update a specific variation for a marketplace product

**URL** : `/marketplaces/:marketplace/products/:product/variations/`

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product - see [Marketplaces Products Variations Attributes](Marketplaces_Products_Variations_Attributes.md#update-marketplaces-products-variations-attributes) | Array |  | NULL | N | N |
| variation_id | The linked Product Variation ID | Integer |  | NULL | N | N |

## View Marketplace Products Variations
This allows you to list the variations belonging to the marketplace product

**URL** : `/marketplaces/:marketplace/products/:product/variations/`

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace product variation - see [Marketplaces Products Variations Attributes](Marketplaces_Products_Variations_Attributes.md#view-marketplaces-products-variations-attributes) | Array |  |
| is_mapped | Indicates whether the marketplace product is mapped to a Product Variant | Boolean |  |
| reference | The product reference at the marketplace | String | Up to 30 characters long |
| uom | The name of the Unit of Measure the variation uses | String |  |
| uom_quantity | The number of primary units that equal this Unit of Measure | Integer |  |
| variation_id | The linked Product Variation ID | Integer |  |
