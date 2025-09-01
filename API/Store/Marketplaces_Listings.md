# Marketplaces Listings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Listings
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/listings/ | POST | This allows you to create a listing for a marketplace | [Details](#create-marketplace-listings) |
| /marketplaces/:marketplace/listings/:listing/ | DELETE | This allows you to delete a listing from a marketplace | [Details](#delete-marketplace-listing) |
| /marketplaces/:marketplace/listings/ | PUT | This allows you to update a specific listing for a marketplace | [Details](#update-marketplace-listings) |
| /marketplaces/:marketplace/listings/:listing/ | PUT | This allows you to update a specific listing for a marketplace | [Details](#update-marketplace-listings) |
| /marketplaces/:marketplace/listings/ | GET | This allows you to list the listings belonging to the marketplace | [Details](#view-marketplace-listings) |
| /marketplaces/:marketplace/listings/:listing/ | GET | This allows you to list the listings belonging to the marketplace | [Details](#view-marketplace-listings) |

## Create Marketplace Listings
This allows you to create a listing for a marketplace

**URL** : `/marketplaces/:marketplace/listings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace listing - see [Marketplaces Listings Attributes](Marketplaces_Listings_Attributes.md#create-marketplaces-listings-attributes) | Array |  | NULL | N | N |
| reference_id | The ID that the marketplace uses to reference the product | String | Up to 255 characters long | NULL | Y | N |
| reference_parent_id | The ID that the marketplace uses to reference the product's parent | String | Up to 255 characters long | NULL | N | N |
| sku | The SKU of the product | String | Up to 255 characters long | NULL | Y | N |
| variant_id | The linked Listing Variation ID | Integer |  | NULL | N | N |

## Delete Marketplace Listing
This allows you to delete a listing from a marketplace

**URL** : `/marketplaces/:marketplace/listings/:listing/`

**Method** : `DELETE`

## Update Marketplace Listings
This allows you to update a specific listing for a marketplace

**URL** : `/marketplaces/:marketplace/listings/`

**URL** : `/marketplaces/:marketplace/listings/:listing/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace listing - see [Marketplaces Listings Attributes](Marketplaces_Listings_Attributes.md#update-marketplaces-listings-attributes) | Array |  | NULL | N | N |
| sku | The SKU of the product | String | Up to 255 characters long | NULL | Y | N |
| status | The status of the listing | String | One of the following values: `active`, `hidden` | NULL | Y | N |
| variant_id | The linked Listing Variation ID | Integer |  | NULL | N | N |

## View Marketplace Listings
This allows you to list the listings belonging to the marketplace

**URL** : `/marketplaces/:marketplace/listings/`

**URL** : `/marketplaces/:marketplace/listings/:listing/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attributes | An array of attributes for the marketplace listing - see [Marketplaces Listings Attributes](Marketplaces_Listings_Attributes.md#view-marketplaces-listings-attributes) | Array |  |
| is_mapped | Indicates whether the marketplace listing is mapped to a Listing Variant | Boolean |  |
| is_released | Indicates whether the product is a released item, or not | Boolean |  |
| product_id | The linked Listing Variation's Product ID | Integer |  |
| reference_id | The listing reference at the marketplace | String | Up to 255 characters long |
| reference_parent_id | The listing's parent reference at the marketplace | String | Up to 255 characters long |
| sku | The SKU of the product | String | Up to 255 characters long |
| status | The status of the listing | String | One of the following values: `active`, `hidden` |
| uom | The name of the Unit of Measure | String |  |
| uom_quantity | The number of primary units that equal this Unit of Measure | Integer |  |
| variant_id | The linked Listing Variation ID | Integer |  |
