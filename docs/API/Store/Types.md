# Types
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Types
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /types/ | POST | This allows you to create a type | [Details](#create-type) |
| /types/:type/ | DELETE | This allows you to delete a type | [Details](#delete-type) |
| /types/ | PUT | This allows you to update a specific type | [Details](#update-type) |
| /types/:type/ | PUT | This allows you to update a specific type | [Details](#update-type) |
| /types/ | GET | This allows you to list types | [Details](#view-type) |
| /types/:type/ | GET | This allows you to list types | [Details](#view-type) |

## Create Type
This allows you to create a type

**URL** : `/types/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_itemsbedisabled | Indicates whether or not items can be disabled | Boolean |  | 0 | N | N |
| can_itemsbeupdated | Indicates whether or not items can be updated | Boolean |  | 0 | N | N |
| can_itemshavedefault | Indicates whether or not items can have a default option for the type | Boolean |  | 0 | N | N |
| can_itemshavevalue | Indicates whether or not items can have a value | Boolean |  | 0 | N | N |
| code | Used to filter the types - if not provided, uses `name` | String | Between 1 and 50 characters long | NULL | N | Y |
| items | An array of items that you want to use with this type - see [Types Items](Types_Items.md#create-types-items) | Array |  | NULL | N | N |
| name | The name of the type | String | Between 1 and 50 characters long | NULL | Y | N |
| type | The kind of type | String | One of the following values: `billingprofile`, `data` | NULL | Y | N |
| value_label | The label to use for the value, required where `can_itemshavevalue` true | String | Between 1 and 50 characters long | NULL | N | Y |
| value_type | The type of value to use to check the value, required where `can_itemshavevalue` true | String | One of the following values: `float`, `number` | NULL | N | Y |

## Delete Type
This allows you to delete a type

**URL** : `/types/:type/`

**Method** : `DELETE`

## Update Type
This allows you to update a specific type

**URL** : `/types/`

**URL** : `/types/:type/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| items | An array of items that you want to use with this type - see [Types Items](Types_Items.md#update-types-items) | Array |  | NULL | N | N |
| name | The name of the type | String | Between 1 and 50 characters long | NULL | Y | N |

## View Type
This allows you to list types

**URL** : `/types/`

**URL** : `/types/:type/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| can_itemsbedisabled | Indicates whether or not items can be disabled | Boolean |  |
| can_itemsbeupdated | Indicates whether or not items can be updated | Boolean |  |
| can_itemshavedefault | Indicates whether or not items can have a default option for the type | Boolean |  |
| can_itemshavevalue | Indicates whether or not items can have a value | Boolean |  |
| code | Used to filter the types - if not provided, uses `name` | String | Between 1 and 50 characters long |
| items | An array of items that you want to use with this type - see [Types Items](Types_Items.md#view-types-items) | Array |  |
| name | The name of the type | String | Between 1 and 50 characters long |
| type | The kind of type | String | One of the following values: `billingprofile`, `data` |
| value_label | The label to use for the value | String | Between 1 and 50 characters long |
| value_type | The type of value to use to check the value | String | One of the following values: `float`, `number` |
