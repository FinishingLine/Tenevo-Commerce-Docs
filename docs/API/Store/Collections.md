# Collections
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages collections
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /collections/ | POST | This allows you to create a collection | [Details](#create-collections) |
| /collections/:collection/ | DELETE | This allows you to delete a collection | [Details](#delete-collection) |
| /collections/ | PUT | This allows you to update collections | [Details](#update-collections) |
| /collections/:collection/ | PUT | This allows you to update collections | [Details](#update-collections) |
| /collections/ | GET | This allows you to view a list of collections | [Details](#view-collections) |
| /collections/:collection/ | GET | This allows you to view a list of collections | [Details](#view-collections) |

## Create Collections
This allows you to create a collection

**URL** : `/collections/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| auto_url_key | Indicates whether or not the url_key should be automatically generated, or not | Boolean |  | false | N | N |
| description | The description of the collection | String |  | NULL | N | N |
| media_id | A valid Media ID - this will be used for the featured collection image | Integer |  | NULL | N | N |
| name | The name of the collection | String | Up to 100 characters long | NULL | Y | N |
| status | The status of the collection | String | One of the following values: `active`, `hidden` | active | N | N |
| theme_layout | The theme layout of the collection | String | Up to 100 characters long | collection | N | N |
| url_key | The URL key of the collection, required if auto_url_key is false | String | Up to 100 characters long | NULL | N | Y |

## Delete Collection
This allows you to delete a collection

**URL** : `/collections/:collection/`

**Method** : `DELETE`

## Update Collections
This allows you to update collections

**URL** : `/collections/`

**URL** : `/collections/:collection/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | The description of the collection | String |  | NULL | N | N |
| media_id | A valid Media ID - this will be used for the featured collection image | Integer |  | NULL | N | N |
| name | The name of the collection | String | Up to 100 characters long | NULL | Y | N |
| status | The status of the collection | String | One of the following values: `active`, `hidden` | active | N | N |
| theme_layout | The theme layout of the collection | String | Up to 100 characters long | collection | N | N |
| url_key | The URL key of the collection | String | Up to 100 characters long | NULL | Y | N |

## View Collections
This allows you to view a list of collections

**URL** : `/collections/`

**URL** : `/collections/:collection/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| created_at | A UTC datetime of when the collection was create | Datetime |  |
| description | The description of the collection | String |  |
| image_alt_text | The alt text for the collection image | String |  |
| image_url | The relative URL to the collection image | String |  |
| media_id | A valid Media ID - this will be used for the featured collection image | Integer |  |
| name | The name of the collection | String | Up to 100 characters long |
| status | The status of the collection | String | One of the following values: `active`, `hidden` |
| theme_layout | The theme layout of the collection | String | Up to 100 characters long |
| updated_at | A UTC datetime of when the collection was updated | Datetime |  |
| url_key | The URL key of the collection | String | Up to 100 characters long |
