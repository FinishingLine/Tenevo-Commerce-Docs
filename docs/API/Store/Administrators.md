# Administrators
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Administrators
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /administrators/ | POST | This allows you to create an administrator | [Details](#create-administrator) |
| /administrators/:admin/ | DELETE | This allows you to delete an administrator | [Details](#delete-administrator) |
| /administrators/ | PUT | This allows you to update a specific administrator | [Details](#update-administrators) |
| /administrators/:admin/ | PUT | This allows you to update a specific administrator | [Details](#update-administrators) |
| /administrators/ | GET | This allows you to list the administrators | [Details](#view-administrators) |
| /administrators/:admin/ | GET | This allows you to list the administrators | [Details](#view-administrators) |

## Create Administrator
This allows you to create an administrator

**URL** : `/administrators/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| first_name | The first name of the administrator | String | Between 1 and 255 characters long | NULL | Y | N |
| group_id | The Permissions Group ID to put the administrator in | Integer |  | NULL | Y | N |
| last_name | The last name/surname/family name of the administrator | String | Between 1 and 255 characters long | NULL | Y | N |
| signature | The signature to use when dealing with support requests | String |  | NULL | Y | N |
| username | The administrators's username (must be unique) - must be an email address | String | Between 1 and 255 characters long | NULL | Y | N |

## Delete Administrator
This allows you to delete an administrator

**URL** : `/administrators/:admin/`

**Method** : `DELETE`

## Update Administrators
This allows you to update a specific administrator

**URL** : `/administrators/`

**URL** : `/administrators/:admin/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| group_id | The Permissions Group ID to put the administrator in | Integer |  | NULL | Y | N |
| signature | The signature to use when dealing with support requests | String |  | NULL | Y | N |
| status | The administrator's account status | String | One of the following values: `active`, `hold`, `leaver` | NULL | Y | N |

## View Administrators
This allows you to list the administrators

**URL** : `/administrators/`

**URL** : `/administrators/:admin/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| chat_handle | The administrators chat handle | String | Between 1 and 50 characters long |
| created_at | A UTC timestamp of when the administrator was created | Datetime |  |
| filters | An array of filters - see [Administrators Filters](Administrators_Filters.md#view-administrators-filters) | Array |  |
| first_name | The first name of the administrator | String | Between 1 and 255 characters long |
| full_name | The full name of the administrator | String | Up to 511 characters long |
| group | The name of the Permissions Group | String | Up to 255 characters long |
| group_id | The Permissions Group ID to put the administrator in | Integer |  |
| group_type | The Permissions Group Type | String | Up to 10 characters long |
| last_name | The last name/surname/family name of the administrator | String | Between 1 and 255 characters long |
| signature | The signature to use when dealing with support requests, in markdown | String |  |
| signature_html | The signature to use when dealing with support requests, in html | String |  |
| signature_plain | The signature to use when dealing with support requests, in plain text | String |  |
| status | The administrator's account status | String | One of the following values: `active`, `hold`, `leaver` |
| updated_at | A UTC timestamp of when the administrator was last updated | Datetime |  |
| username | The administrator's username | String | Between 1 and 255 characters long |
