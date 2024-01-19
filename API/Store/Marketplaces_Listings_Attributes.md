# Marketplaces Listings Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages marketplace listing attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/listings/:listing/attributes/ | POST | This allows you to create attributes for marketplace listings | [Details](#create-marketplaces-listings-attributes) |
| /marketplaces/:marketplace/listings/:listing/attributes/:attribute/ | DELETE | This allows you to delete a specified attribute from a marketplace listings | [Details](#delete-marketplaces-listings-attribute) |
| /marketplaces/:marketplace/listings/:listing/attributes/ | PUT | This allows you to update attributes for marketplace listings | [Details](#update-marketplaces-listings-attributes) |
| /marketplaces/:marketplace/listings/:listing/attributes/:attribute/ | PUT | This allows you to update attributes for marketplace listings | [Details](#update-marketplaces-listings-attributes) |
| /marketplaces/:marketplace/listings/:listing/attributes/ | GET | This allows you to list attributes for marketplace listings | [Details](#view-marketplaces-listings-attributes) |
| /marketplaces/:marketplace/listings/:listing/attributes/:attribute/ | GET | This allows you to list attributes for marketplace listings | [Details](#view-marketplaces-listings-attributes) |

## Create Marketplaces Listings Attributes
This allows you to create attributes for marketplace listings

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace listing attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace listing attribute | String |  | NULL | N | N |

## Delete Marketplaces Listings Attribute
This allows you to delete a specified attribute from a marketplace listings

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/:attribute/`

**Method** : `DELETE`

## Update Marketplaces Listings Attributes
This allows you to update attributes for marketplace listings

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/`

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/:attribute/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace listing attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace listing attribute | String |  | NULL | N | N |

## View Marketplaces Listings Attributes
This allows you to list attributes for marketplace listings

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/`

**URL** : `/marketplaces/:marketplace/listings/:listing/attributes/:attribute/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attribute | The name of the marketplace listing attribute | String | Between 1 and 50 characters long |
| value | The value of the marketplace listing attribute | String |  |
