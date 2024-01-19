# Marketplaces Properties
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Properties
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/properties/ | POST | This allows you to create a property for a marketplace | [Details](#create-marketplace-properties) |
| /marketplaces/:marketplace/properties/:property/ | DELETE | This allows you to delete a property from a marketplace | [Details](#delete-marketplace-property) |
| /marketplaces/:marketplace/properties/ | PUT | This allows you to update a specific property for a marketplace | [Details](#update-marketplace-properties) |
| /marketplaces/:marketplace/properties/:property/ | PUT | This allows you to update a specific property for a marketplace | [Details](#update-marketplace-properties) |
| /marketplaces/:marketplace/properties/ | GET | This allows you to list the properties belonging to the marketplace | [Details](#view-marketplace-properties) |
| /marketplaces/:marketplace/properties/:property/ | GET | This allows you to list the properties belonging to the marketplace | [Details](#view-marketplace-properties) |

## Create Marketplace Properties
This allows you to create a property for a marketplace

**URL** : `/marketplaces/:marketplace/properties/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| field | The field that the property gets its value from | String | Up to 200 characters long | NULL | Y | N |
| name | The name of the property | String | Up to 200 characters long | NULL | Y | N |
| type | The type of property | String | Must have the value: `orderitem` | NULL | Y | N |

## Delete Marketplace Property
This allows you to delete a property from a marketplace

**URL** : `/marketplaces/:marketplace/properties/:property/`

**Method** : `DELETE`

## Update Marketplace Properties
This allows you to update a specific property for a marketplace

**URL** : `/marketplaces/:marketplace/properties/`

**URL** : `/marketplaces/:marketplace/properties/:property/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| field | The field that the property gets its value from | String | Up to 200 characters long | NULL | Y | N |
| name | The name of the property | String | Up to 200 characters long | NULL | Y | N |

## View Marketplace Properties
This allows you to list the properties belonging to the marketplace

**URL** : `/marketplaces/:marketplace/properties/`

**URL** : `/marketplaces/:marketplace/properties/:property/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| field | The field that the property gets its value from | String | Up to 200 characters long |
| name | The name of the property | String | Up to 200 characters long |
| type | The type of property | String | Must have the value: `orderitem` |
