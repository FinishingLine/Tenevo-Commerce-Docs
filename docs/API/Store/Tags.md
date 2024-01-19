# Tags
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tags
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tags/ | POST | This allows you to create a tag | [Details](#create-tag) |
| /tags/:tag/ | DELETE | This allows you to delete a tag | [Details](#delete-tag) |
| /tags/ | GET | This allows you to list tag | [Details](#view-tags) |
| /tag/:tag/ | GET | This allows you to list tag | [Details](#view-tags) |

## Create Tag
This allows you to create a tag

**URL** : `/tags/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long | NULL | Y | N |
| parent_type | The type of parent | String | Must have the value: `ticket` | NULL | Y | N |
| tag_id | A valid tag ID | Integer | Up to 10 digits long | 0 | Y | N |

## Delete Tag
This allows you to delete a tag

**URL** : `/tags/:tag/`

**Method** : `DELETE`

## View Tags
This allows you to list tag

**URL** : `/tags/`

**URL** : `/tag/:tag/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | A name of the tag | String | Up to 255 characters long |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long |
| parent_type | The type of parent | String | Must have the value: `ticket` |
| tag_id | A valid ID for the tag | Integer | Up to 10 digits long |
