# Support Articles
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Support Articles
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /support_articles/ | POST | This allows you to create a support article | [Details](#create-support-article) |
| /support/articles/:article/ | DELETE | This allows you to delete an article | [Details](#delete-article) |
| /support/articles/ | PUT | This allows you to update a specific support article | [Details](#update-support-articles) |
| /support/articles/:article/ | PUT | This allows you to update a specific support article | [Details](#update-support-articles) |
| /support/articles/ | GET | This allows you to list article | [Details](#view-articles) |
| /support/articles/:article/ | GET | This allows you to list article | [Details](#view-articles) |

## Create Support Article
This allows you to create a support article

**URL** : `/support_articles/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| author_id | A valid ID for the given author | Integer | Up to 10 digits long | NULL | Y | N |
| author_type | A valid ID for the given author type | String | Must have the value: `admin` | NULL | Y | N |
| body | The body of the support article | String |  | NULL | Y | N |
| folder_id | A valid ID for the given folder | Integer | Up to 10 digits long | NULL | Y | N |
| is_internal | Indicates whether the article is the public, or internal | Boolean |  | 0 | N | N |
| is_promoted | Indicates whether the article is being promoted | Boolean |  | 0 | N | N |
| status | The body of the support article | String | One of the following values: `active`, `draft` | draft | N | N |
| store_id | A valid ID for the given store | Integer |  | NULL | Y | N |
| title | The title of the support article | String | Between 1 and 100 characters long | NULL | Y | N |

## Delete Article
This allows you to delete an article

**URL** : `/support/articles/:article/`

**Method** : `DELETE`

## Update Support Articles
This allows you to update a specific support article

**URL** : `/support/articles/`

**URL** : `/support/articles/:article/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| author_id | A valid ID for the given author | Integer | Up to 10 digits long | NULL | Y | N |
| author_type | A valid ID for the given author type | String | Must have the value: `admin` | NULL | Y | N |
| body | The body of the support article | String |  | NULL | Y | N |
| folder_id | A valid ID for the given folder | Integer | Up to 10 digits long | NULL | Y | N |
| is_internal | Indicates whether the article is the public, or internal | Boolean |  | 0 | Y | N |
| is_promoted | Indicates whether the article is being promoted | Boolean |  | 0 | Y | N |
| status | The body of the support article | String | One of the following values: `active`, `draft` | draft | N | N |
| store_id | A valid ID for the given store | Integer | Up to 10 digits long | NULL | Y | N |
| title | The title of the support article | String | Between 1 and 100 characters long | NULL | Y | N |

## View Articles
This allows you to list article

**URL** : `/support/articles/`

**URL** : `/support/articles/:article/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| author | A valid name for the given author | Integer | Up to 10 digits long |
| author_id | A valid ID for the given author | Integer | Up to 10 digits long |
| author_type | A valid ID for the given author type | String | Must have the value: `admin` |
| body | The body of the article, in markdown | String |  |
| body_html | The body of the article, in html | String |  |
| body_plain | The body of the article, in plain text | String |  |
| category | A valid name given for the given category | String | Up to 50 characters long |
| category_id | A valid ID for the given category | Integer | Up to 10 digits long |
| created_at | A UTC timestamp of when the article was created | Datetime |  |
| folder | A valid name for the given folder | String | Up to 50 characters long |
| folder_id | A valid ID for the given folder | Integer | Up to 10 digits long |
| is_internal | Indicates whether the article is the public, or internal | Boolean |  |
| is_promoted | Indicates whether the article is being promoted | Boolean |  |
| reference | A unique reference number | String | Exactly 7 characters long |
| status | The article's status | String | One of the following values: `active`, `draft` |
| store | A name of the given store | String |  |
| store_id | A valid ID for the given store | Integer | Up to 10 digits long |
| title | The title of the support article | String | Between 1 and 100 characters long |
| updated_at | A UTC timestamp of when the article was last updated | Datetime |  |
| views | A total amount of views | Integer |  |
| votes_down | A total amount of downvotes | Integer |  |
| votes_up | A total amount of upvotes | Integer |  |
