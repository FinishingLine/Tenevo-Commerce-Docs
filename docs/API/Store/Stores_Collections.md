# Stores Collections
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages store collections
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/collections/ | POST | This allows you to create store collections | [Details](#create-store-collections) |
| /stores/:store/collections/:collection/ | DELETE | This allows you to delete a specified store collection | [Details](#delete-store-collection) |
| /stores/:store/collections/ | GET | This allows you to list store collections | [Details](#view-store-collections) |
| /stores/:store/collections/:collection/ | GET | This allows you to list store collections | [Details](#view-store-collections) |

## Create Store Collections
This allows you to create store collections

**URL** : `/stores/:store/collections/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| collection_id | A valid Collection ID | Integer |  | NULL | Y | N |

## Delete Store Collection
This allows you to delete a specified store collection

**URL** : `/stores/:store/collections/:collection/`

**Method** : `DELETE`

## View Store Collections
This allows you to list store collections

**URL** : `/stores/:store/collections/`

**URL** : `/stores/:store/collections/:collection/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| collection_id | A valid Collection ID | Integer |  |
| description | The description of the collection | String |  |
| image_alt_text | The alt text for the collection image | String |  |
| image_url | The relative URL to the collection image | String |  |
| media_id | A valid Media ID - this will be used for the featured collection image | Integer |  |
| name | The name of the collection | String | Between 1 and 100 characters long |
| status | The status of the collection | String | One of the following values: `active`, `hidden` |
| theme_layout | The theme layout of the collection | String | Up to 100 characters long |
| url_key | The URL key of the collection | String | Up to 100 characters long |
