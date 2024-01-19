# Groups Permissions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Groups Permissions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /groups/:group/permissions/ | POST | This allows you to create a permissions group permission - note, all permissions must be provided at the same time | [Details](#create-permissions-group-permissions) |
| /groups/:group/permissions/ | DELETE | This allows you to delete all permissions within a permissions group | [Details](#delete-permissions-group-permissions) |
| /groups/:group/permissions/ | PUT | This allows you to update a permissions group permission - note, all permissions must be provided at the same time | [Details](#update-permissions-group-permissions) |
| /groups/:group/permissions/ | GET | This allows you to list a groups permissions | [Details](#view-group-permissions) |

## Create Permissions Group Permissions
This allows you to create a permissions group permission - note, all permissions must be provided at the same time

**URL** : `/groups/:group/permissions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| permission | The permission number | Integer | Between 1 and 3 digits long | NULL | Y | N |

## Delete Permissions Group Permissions
This allows you to delete all permissions within a permissions group

**URL** : `/groups/:group/permissions/`

**Method** : `DELETE`

## Update Permissions Group Permissions
This allows you to update a permissions group permission - note, all permissions must be provided at the same time

**URL** : `/groups/:group/permissions/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| permission | The permission number | Integer | Between 1 and 3 digits long | NULL | Y | N |

## View Group Permissions
This allows you to list a groups permissions

**URL** : `/groups/:group/permissions/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| permission | The permission number the group has access to | Integer | Up to 10 digits long |
