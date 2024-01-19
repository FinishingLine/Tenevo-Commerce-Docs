# Support Allow-Block
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Support Allow-Block
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /support/allowblock/ | POST | This allows you to create a Support Allow-Block | [Details](#create-support-allow-block) |
| /support/allowblock/:allowblock/ | DELETE | This allows you to delete a Support Allow-Block | [Details](#delete-support-allow-block) |
| /support/alloblock/ | GET | This allows you to list Support Allow-Block | [Details](#view-support-allow-block) |
| /support/alloblock/:allowblock/ | GET | This allows you to list Support Allow-Block | [Details](#view-support-allow-block) |

## Create Support Allow-Block
This allows you to create a Support Allow-Block

**URL** : `/support/allowblock/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| action | The action that is performed when a match occurs | String | One of the following values: `allow`, `block` | NULL | Y | N |
| admin_id | A valid Administrator ID of whom created the action | Integer | Up to 10 digits long | NULL | Y | N |
| detail | The detail, related to the subtype | String | Up to 200 characters long | NULL | Y | N |
| subtype | The subtype of thing that is being allowed/blocked | String | One of the following values: `domain`, `email` | NULL | Y | N |
| type | The type of thing that is being allowed/blocked | String | Must have the value: `email` | NULL | Y | N |

## Delete Support Allow-Block
This allows you to delete a Support Allow-Block

**URL** : `/support/allowblock/:allowblock/`

**Method** : `DELETE`

## View Support Allow-Block
This allows you to list Support Allow-Block

**URL** : `/support/alloblock/`

**URL** : `/support/alloblock/:allowblock/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| action | The action that is performed when a match occurs | String | One of the following values: `allow`, `block` |
| admin | The name of the administrator that created the allow/block | String |  |
| admin_id | A valid Administrator ID of whom created the action | Integer | Up to 10 digits long |
| created_at | A UTC datetime of when the allow/block was created | Datetime |  |
| detail | The detail, related to the subtype | String | Up to 200 characters long |
| subtype | The subtype of thing that is being allowed/blocked | String | One of the following values: `domain`, `email` |
| type | The type of thing that is being allowed/blocked | String | Must have the value: `email` |
