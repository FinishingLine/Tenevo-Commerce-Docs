# Marketplaces Mappings
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Mappings
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/mappings/ | POST | This allows you to create a mapping for a marketplace | [Details](#create-marketplace-mappings) |
| /marketplaces/:marketplace/mappings/:mapping/ | DELETE | This allows you to delete a mapping from a marketplace | [Details](#delete-marketplace-mapping) |
| /marketplaces/:marketplace/mappings/ | PUT | This allows you to update a specific mapping for a marketplace | [Details](#update-marketplace-mappings) |
| /marketplaces/:marketplace/mappings/:mapping/ | PUT | This allows you to update a specific mapping for a marketplace | [Details](#update-marketplace-mappings) |
| /marketplaces/:marketplace/mappings/ | GET | This allows you to list the mappings belonging to the marketplace | [Details](#view-marketplace-mappings) |
| /marketplaces/:marketplace/mappings/:mapping/ | GET | This allows you to list the mappings belonging to the marketplace | [Details](#view-marketplace-mappings) |

## Create Marketplace Mappings
This allows you to create a mapping for a marketplace

**URL** : `/marketplaces/:marketplace/mappings/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| from | The value we are mapping from | String | Up to 200 characters long | NULL | Y | N |
| to | The value we are mapping the from value to | String | Up to 200 characters long | NULL | Y | N |
| type | The type of mapping | String | One of the following values: `order`, `orderitem`, `product`, `shipping` | NULL | Y | N |

## Delete Marketplace Mapping
This allows you to delete a mapping from a marketplace

**URL** : `/marketplaces/:marketplace/mappings/:mapping/`

**Method** : `DELETE`

## Update Marketplace Mappings
This allows you to update a specific mapping for a marketplace

**URL** : `/marketplaces/:marketplace/mappings/`

**URL** : `/marketplaces/:marketplace/mappings/:mapping/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| from | The value we are mapping from | String | Up to 200 characters long | NULL | Y | N |
| to | The value we are mapping the from value to | String | Up to 200 characters long | NULL | Y | N |

## View Marketplace Mappings
This allows you to list the mappings belonging to the marketplace

**URL** : `/marketplaces/:marketplace/mappings/`

**URL** : `/marketplaces/:marketplace/mappings/:mapping/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| from | The value we are mapping from | String | Between 1 and 255 characters long |
| to | The value we are mapping the from value to | String | Between 1 and 255 characters long |
| type | The type of mapping | String | One of the following values: `order`, `orderitem`, `product`, `shipping` |
