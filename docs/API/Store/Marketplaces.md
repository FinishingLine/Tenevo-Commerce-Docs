# Marketplaces
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/ | POST | This allows you to create a marketplace | [Details](#create-marketplace) |
| /marketplaces/:marketplace/ | DELETE | This allows you to delete a marketplace | [Details](#delete-marketplace) |
| /marketplaces/ | PUT | This allows you to update a specific marketplace | [Details](#update-marketplaces) |
| /marketplaces/:marketplace/ | PUT | This allows you to update a specific marketplace | [Details](#update-marketplaces) |
| /marketplaces/ | GET | This allows you to list the marketplaces | [Details](#view-marketplaces) |
| /marketplaces/:marketplace/ | GET | This allows you to list the marketplaces | [Details](#view-marketplaces) |

## Create Marketplace
This allows you to create a marketplace

**URL** : `/marketplaces/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| conditions | An array of conditions for the marketplace - see [Marketplaces Conditions](Marketplaces_Conditions.md#create-marketplaces-conditions) | Array |  | NULL | N | N |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long | default | N | N |
| interface_id | A valid Interface ID | Integer | Up to 10 digits long | NULL | Y | N |
| listings | An array of listings for the marketplace - see [Marketplaces Listings](Marketplaces_Listings.md#create-marketplaces-listings) | Array |  | NULL | N | N |
| mappings | An array of mappings for the marketplace - see [Marketplaces Mappings](Marketplaces_Mappings.md#create-marketplaces-mappings) | Array |  | NULL | N | N |
| name | The name that you can referer to this marketplace as | String | Up to 50 characters long | NULL | Y | N |
| products | An array of products for the marketplace - see [Marketplaces Products](Marketplaces_Products.md#create-marketplaces-products) | Array |  | NULL | N | N |
| properties | An array of properties for the marketplace - see [Marketplaces Properties](Marketplaces_Properties.md#create-marketplaces-properties) | Array |  | NULL | N | N |
| settings | An array of settings for the marketplace - see [Marketplaces Settings](Marketplaces_Settings.md#create-marketplaces-settings) | Array |  | NULL | N | N |
| store_id | A valid Store ID | Integer |  | NULL | Y | N |
| uom_id | A valid UOM ID | Integer |  | NULL | Y | N |
| uom_set_id | A valid UOM Set ID | Integer |  | NULL | Y | N |

## Delete Marketplace
This allows you to delete a marketplace

**URL** : `/marketplaces/:marketplace/`

**Method** : `DELETE`

## Update Marketplaces
This allows you to update a specific marketplace

**URL** : `/marketplaces/`

**URL** : `/marketplaces/:marketplace/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| conditions | An array of conditions for the marketplace - see [Marketplaces Conditions](Marketplaces_Conditions.md#update-marketplaces-conditions) | Array |  | NULL | N | N |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long | default | N | N |
| listings | An array of listings for the marketplace - see [Marketplaces Listings](Marketplaces_Listings.md#update-marketplaces-listings) | Array |  | NULL | N | N |
| mappings | An array of mappings for the marketplace - see [Marketplaces Mappings](Marketplaces_Mappings.md#update-marketplaces-mappings) | Array |  | NULL | N | N |
| name | The name that you can referer to this marketplace as | String | Up to 50 characters long | NULL | Y | N |
| products | An array of products for the marketplace - see [Marketplaces Products](Marketplaces_Products.md#update-marketplaces-products) | Array |  | NULL | N | N |
| properties | An array of properties for the marketplace - see [Marketplaces Properties](Marketplaces_Properties.md#update-marketplaces-properties) | Array |  | NULL | N | N |
| settings | An array of settings for the marketplace - see [Marketplaces Settings](Marketplaces_Settings.md#update-marketplaces-settings) | Array |  | NULL | N | N |
| status | The status of the marketplace | String | One of the following values: `active`, `paused` | NULL | Y | N |
| uom_id | A valid UOM ID | Integer |  | NULL | Y | N |
| uom_set_id | A valid UOM Set ID | Integer |  | NULL | Y | N |

## View Marketplaces
This allows you to list the marketplaces

**URL** : `/marketplaces/`

**URL** : `/marketplaces/:marketplace/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| api_interface_id | The API Interface ID | Integer |  |
| conditions | An array of conditions for the marketplace - see [Marketplaces Conditions](Marketplaces_Conditions.md#view-marketplaces-conditions) | Array |  |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long |
| interface | The name of the interface being used | String | Up to 200 characters long |
| interface_code | The code of the interface being used | String | Up to 20 characters long |
| interface_id | The Interface ID being used | Integer | Up to 10 digits long |
| listings | An array of listings for the marketplace - see [Marketplaces Listings](Marketplaces_Listings.md#view-marketplaces-listings) | Array |  |
| mappings | An array of mappings for the marketplace - see [Marketplaces Mappings](Marketplaces_Mappings.md#view-marketplaces-mappings) | Array |  |
| name | The name that you can referer to this marketplace as | String | Up to 50 characters long |
| products | An array of products for the marketplace - see [Marketplaces Products](Marketplaces_Products.md#view-marketplaces-products) | Array |  |
| properties | An array of properties for the marketplace - see [Marketplaces Properties](Marketplaces_Properties.md#view-marketplaces-properties) | Array |  |
| settings | An array of settings for the marketplace - see [Marketplaces Settings](Marketplaces_Settings.md#view-marketplaces-settings) | Array |  |
| status | The status of the marketplace | String | One of the following values: `active`, `paused` |
| store | The name of the store | String | Up to 100 characters long |
| store_id | The Store ID | Integer |  |
| uom | The name of the default Unit of Measure for the marketplace | String |  |
| uom_id | A valid UOM ID | Integer |  |
| uom_set | The name of the default Unit of Measure Set for the marketplace | String |  |
| uom_set_id | A valid UOM Set ID | Integer |  |
