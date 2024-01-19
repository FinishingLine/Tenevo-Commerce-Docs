# Media
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manage media
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /media/ | POST | This allows you to create new media | [Details](#create-media) |
| /media/:id/ | DELETE | This allows you to delete media | [Details](#delete-media) |
| /media/:id/ | PUT | This allows you to update specified media | [Details](#update-media) |
| /media/ | GET | This allows you to list media | [Details](#view-media) |
| /media/:id/ | GET | This allows you to list media | [Details](#view-media) |

## Create Media
This allows you to create new media

**URL** : `/media/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alt_text | Alt Text for the media file | String | Between 1 and 100 characters long | NULL | N | N |
| filename | The name of the media file (including extension) - must be unique for the given media_folder | String | Between 1 and 100 characters long | NULL | N | N |
| media_data | A base 64 encoded string of the media file. Maximum file size: 5MB. Accepted extensions include: .gif, .jpg, & .png | String |  | NULL | Y | N |
| media_folder | The folder of where the media is being stored | String | One of the following values: `general`, `product` | general | N | N |

## Delete Media
This allows you to delete media

**URL** : `/media/:id/`

**Method** : `DELETE`

## Update Media
This allows you to update specified media

**URL** : `/media/:id/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alt_text | Alt Text for the media file | String | Between 1 and 100 characters long | NULL | N | N |
| filename | The name of the media file (including extension) - must be unique for the given media_folder | String | Between 1 and 100 characters long | NULL | N | N |
| media_folder | The folder of where the media is being stored | String | One of the following values: `general`, `product` | general | N | N |

## View Media
This allows you to list media

**URL** : `/media/`

**URL** : `/media/:id/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| alt_text | Alt Text for the media file | String | Between 1 and 100 characters long |
| aspect_ratio | Where the media file is an image, the aspect ratio of the image (width / height) | Float | Up to 2 decimal places and no larger than 99999999.99 |
| filename | The name of the media file (including extension) - must be unique for the given media_folder | String | Between 1 and 100 characters long |
| height | Where the media file is an image, the height of the image in pixels | Integer | Between 1 and 10 digits long |
| media_folder | The folder of where the media was uploaded to | String | One of the following values: `general`, `product` |
| media_type | The type of media being uploaded | String | Must have the value: `images` |
| mime_type | The mime type of the media file | String | Between 1 and 100 characters long |
| size | The size of the file, in bytes | Integer | Between 1 and 10 digits long |
| updated_at | A UTC datetime of when the media file was last modified | Datetime |  |
| url | The full URL of the media file | String |  |
| width | Where the media file is an image, the width of the image in pixels | Integer | Between 1 and 10 digits long |
