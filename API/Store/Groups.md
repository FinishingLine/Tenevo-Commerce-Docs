# Groups
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Groups
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /groups/ | POST | This allows you to create a permissions group | [Details](#create-permissions-group) |
| /groups/:group/ | DELETE | This allows you to delete an group | [Details](#delete-group) |
| /groups/ | PUT | This allows you to update a specific group | [Details](#update-groups) |
| /groups/:group/ | PUT | This allows you to update a specific group | [Details](#update-groups) |
| /groups/ | GET | This allows you to list the groups | [Details](#view-groups) |
| /groups/:group/ | GET | This allows you to list the groups | [Details](#view-groups) |

## Create Permissions Group
This allows you to create a permissions group

**URL** : `/groups/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name of the Permissions Group | String | Between 1 and 255 characters long | NULL | Y | N |
| permissions | An array of permissions - see [Groups Permissions](Groups_Permissions.md#create-groups-permissions) | Array |  | NULL | N | N |
| type | The type of permissions group | String | One of the following values: `admin_standard`, `admin_super` | NULL | Y | N |

## Delete Group
This allows you to delete an group

**URL** : `/groups/:group/`

**Method** : `DELETE`

## Update Groups
This allows you to update a specific group

**URL** : `/groups/`

**URL** : `/groups/:group/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| name | The name of the Permissions Group | String | Between 1 and 255 characters long | NULL | Y | N |
| permissions | An array of permissions - see [Groups Permissions](Groups_Permissions.md#update-groups-permissions) | Array |  | NULL | N | N |
| type | The type of permissions group | String | One of the following values: `admin_standard`, `admin_super` | NULL | Y | N |

## View Groups
This allows you to list the groups

**URL** : `/groups/`

**URL** : `/groups/:group/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | The name of the Permissions Group | String | Between 1 and 255 characters long |
| permissions | An array of permissions - see [Groups Permissions](Groups_Permissions.md#view-groups-permissions) | Array |  |
| type | The type of permissions group | String | One of the following values: `admin_standard`, `admin_super` |
| uses | The number of uses the group is used | Integer |  |
