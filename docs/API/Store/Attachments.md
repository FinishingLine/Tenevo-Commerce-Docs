# Attachments
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Attachments
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /attachments/ | POST | This allows you to create a attachment | [Details](#create-attachment) |
| /attachments/:attachment/ | DELETE | This allows you to delete a attachment | [Details](#delete-attachment) |
| /attachments/ | GET | This allows you to list attachments | [Details](#view-attachments) |
| /attachments/:attachment/ | GET | This allows you to list attachments | [Details](#view-attachments) |

## Create Attachment
This allows you to create a attachment

**URL** : `/attachments/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| data | A base 64 encoded string of the attachment | String |  | NULL | Y | N |
| filename | The name of the file | String | Up to 100 characters long | NULL | N | N |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long | NULL | Y | N |
| parent_type | The type of parent | String | Must have the value: `comment` | NULL | Y | N |

## Delete Attachment
This allows you to delete a attachment

**URL** : `/attachments/:attachment/`

**Method** : `DELETE`

## View Attachments
This allows you to list attachments

**URL** : `/attachments/`

**URL** : `/attachments/:attachment/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| content_type | The mime type of the attachment | String | Up to 100 characters long |
| content_url | The URL to access the attachment | String |  |
| created_at | A UTC datetime of when the attachment was created | Datetime |  |
| filename | The name of the file | String | Up to 100 characters long |
| filepath | The name of the stored file | String | Up to 100 characters long |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long |
| parent_type | The type of parent | String | Must have the value: `comment` |
| size | The size of the file in bytes | Integer |  |
