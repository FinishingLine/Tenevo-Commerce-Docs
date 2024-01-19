# Types Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Type Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /types/:type/items/ | POST | This allows you to create a type item | [Details](#create-type-item) |
| /types/:type/items/:item/ | DELETE | This allows you to delete a type item | [Details](#delete-type-item) |
| /types/:type/items/ | PUT | This allows you to update a specific type item | [Details](#update-type-items) |
| /types/:type/items/:item/ | PUT | This allows you to update a specific type item | [Details](#update-type-items) |
| /types/:type/items/ | GET | This allows you to list type items | [Details](#view-type-items) |
| /types/:type/items/:item/ | GET | This allows you to list type items | [Details](#view-type-items) |

## Create Type Item
This allows you to create a type item

**URL** : `/types/:type/items/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_default | Indicates whether the item is the default value, or not, when supported | Boolean |  | 0 | N | N |
| name | The name of the item | String | Between 1 and 100 characters long | NULL | Y | N |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |
| value | The value of the item | String | Between 1 and 50 characters long | NULL | Y | N |

## Delete Type Item
This allows you to delete a type item

**URL** : `/types/:type/items/:item/`

**Method** : `DELETE`

## Update Type Items
This allows you to update a specific type item

**URL** : `/types/:type/items/`

**URL** : `/types/:type/items/:item/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_default | Indicates whether the item is the default value, or not, when supported | Boolean |  | 0 | N | N |
| name | The name of the item | String | Between 1 and 100 characters long | NULL | Y | N |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |
| status | The status of the item | String | One of the following values: `active`, `disabled` | NULL | Y | N |
| value | The value of the item | String | Between 1 and 50 characters long | NULL | Y | N |

## View Type Items
This allows you to list type items

**URL** : `/types/:type/items/`

**URL** : `/types/:type/items/:item/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| is_default | Indicates whether the item is the default value, or not, when supported | Boolean |  |
| name | The name of the item | String | Between 1 and 100 characters long |
| parent_code | Used to filter the type items | String | Between 1 and 50 characters long |
| parent_type | Used to filter the type items | String | Between 1 and 50 characters long |
| sort_order | The default sort order | Integer | Up to 3 digits long |
| status | The status of the item | String | One of the following values: `active`, `disabled` |
| value | The value of the item | String | Between 1 and 50 characters long |
