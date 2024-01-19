# Comments
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Comments
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /comments/ | POST | This allows you to create a comment | [Details](#create-comment) |
| /comments/:comment/ | DELETE | This allows you to delete a comment | [Details](#delete-comment) |
| /comments/ | PUT | This allows you to update a specific comment | [Details](#update-comments) |
| /comments/:comment/ | PUT | This allows you to update a specific comment | [Details](#update-comments) |
| /comments/ | GET | This allows you to list comments | [Details](#view-comments) |
| /comments/:comment/ | GET | This allows you to list comments | [Details](#view-comments) |

## Create Comment
This allows you to create a comment

**URL** : `/comments/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attachments | An array containing attachments related to this comment - see [Attachments](Attachments.md#create-attachments) | Array |  | NULL | N | N |
| author_id | A valid ID for the given author_type, must be blank when author_type is bot | Integer | Up to 10 digits long | NULL | N | Y |
| author_type | The type of author | String | One of the following values: `admin`, `bot`, `contact`, `profile` | NULL | Y | N |
| body | The body of the comment | String |  | NULL | Y | N |
| is_public | Indicates whether the comment is public, must be false when author_type is bot | Boolean |  | false | N | N |
| metadata | Meta Data related to the comment, must be a JSON string when provided | String |  | NULL | N | N |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long | NULL | Y | N |
| parent_type | The type of parent | String | Must have the value: `ticket` | NULL | Y | N |
| source | The source of the comment | String | One of the following values: `call_inbound`, `call_outbound`, `email`, `web_admin`, `web_customer`, `web_form` | NULL | Y | N |
| time_spent | The amount of time spent on the comment, in seconds | Integer | Up to 10 digits long | 0 | N | N |
| type | The type of comment | String | Must have the value: `comment` | NULL | Y | N |

## Delete Comment
This allows you to delete a comment

**URL** : `/comments/:comment/`

**Method** : `DELETE`

## Update Comments
This allows you to update a specific comment

**URL** : `/comments/`

**URL** : `/comments/:comment/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| is_public | Indicates whether the comment is public | Boolean |  | false | N | N |

## View Comments
This allows you to list comments

**URL** : `/comments/`

**URL** : `/comments/:comment/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attachments | An array containing attachments related to this comment - see [Attachments](Attachments.md#view-attachments) | Array |  |
| author | The name of the assignee | String |  |
| author_id | A valid ID for the given author_type | Integer | Up to 10 digits long |
| author_type | The type of author | String | One of the following values: `admin`, `bot`, `contact`, `profile` |
| body | The body of the comment, in markdown | String |  |
| body_html | The body of the comment, in html | String |  |
| body_plain | The body of the comment, in plain text | String |  |
| created_at | A UTC datetime of when the comment was created | Datetime |  |
| is_first | Indicates whether the comment is the first | Boolean |  |
| is_public | Indicates whether the comment is public | Boolean |  |
| metadata | Meta Data related to the comment, in JSON format | String |  |
| parent_id | A valid ID for the given parent_type | Integer | Up to 10 digits long |
| parent_type | The type of parent | String | Must have the value: `ticket` |
| source | The source of the comment | String | One of the following values: `call_inbound`, `call_outbound`, `email`, `web_admin`, `web_customer`, `web_form` |
| store | The name of the Store | String |  |
| store_id | A valid Store ID | Integer | Up to 10 digits long |
| time_spent | The amount of time spent on the comment, in seconds | Integer | Up to 10 digits long |
| type | The type of comment | String | Must have the value: `comment` |
