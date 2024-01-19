# Pages
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Pages
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /pages/ | POST | This allows you to create a page | [Details](#create-pages) |
| /pages/:page/ | DELETE | This allows you to delete a page | [Details](#delete-page) |
| /pages/ | PUT | This allows you to update pages | [Details](#update-pages) |
| /pages/:page/ | PUT | This allows you to update pages | [Details](#update-pages) |
| /pages/ | GET | This allows you to view a list of pages | [Details](#view-pages) |
| /pages/:page/ | GET | This allows you to view a list of pages | [Details](#view-pages) |

## Create Pages
This allows you to create a page

**URL** : `/pages/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| access_level | The level of access in order to view the given page | String | One of the following values: `administrator`, `customer`, `public` | public | N | N |
| content_body | The body of the content | String |  | NULL | Y | N |
| content_heading | The heading of the content | String | Up to 100 characters long | NULL | N | N |
| description | The description of the page | String | Up to 100 characters long | NULL | N | N |
| is_home | Indicates whether the page is the home page or not | Boolean |  | false | Y | N |
| keywords | The keywords of the page | String | Up to 100 characters long | NULL | N | N |
| stores | An array of stores that can access the page - see [Pages Stores](Pages_Stores.md#create-pages-stores) | Array |  | NULL | Y | N |
| theme_layout | The theme layout of the page | String | Up to 100 characters long | page | N | N |
| title | The title of the page | String | Up to 100 characters long | NULL | Y | N |
| url_key | The URL key of the page | String | Up to 100 characters long | NULL | Y | N |

## Delete Page
This allows you to delete a page

**URL** : `/pages/:page/`

**Method** : `DELETE`

## Update Pages
This allows you to update pages

**URL** : `/pages/`

**URL** : `/pages/:page/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| access_level | The level of access in order to view the given page | String | One of the following values: `administrator`, `customer`, `public` | public | N | N |
| content_body | The body of the content | String |  | NULL | Y | N |
| content_heading | The heading of the content | String | Up to 100 characters long | NULL | N | N |
| description | The description of the page | String | Up to 100 characters long | NULL | N | N |
| is_home | Indicates whether the page is the home page or not | Boolean |  | false | Y | N |
| keywords | The keywords of the page | String | Up to 100 characters long | NULL | N | N |
| stores | An array of stores that can access the page - see [Pages Stores](Pages_Stores.md#update-pages-stores) | Array |  | NULL | Y | N |
| theme_layout | The theme layout of the page | String | Up to 100 characters long | page | N | N |
| title | The title of the page | String | Up to 100 characters long | NULL | Y | N |
| url_key | The URL key of the page | String | Up to 100 characters long | NULL | Y | N |

## View Pages
This allows you to view a list of pages

**URL** : `/pages/`

**URL** : `/pages/:page/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| access_level | The level of access in order to view the given page | String | One of the following values: `administrator`, `customer`, `public` |
| content_body | The body of the content | String |  |
| content_heading | The heading of the content | String | Up to 100 characters long |
| created_at | A UTC datetime of when the page was create | Datetime |  |
| description | The description of the page | String | Up to 100 characters long |
| is_home | Indicates whether the page is the home page or not | Boolean |  |
| keywords | The keywords of the page | String | Up to 100 characters long |
| status | The status of the page | String | Must have the value: `active` |
| theme_layout | The theme layout of the page | String | Up to 100 characters long |
| title | The title of the page | String | Up to 100 characters long |
| updated_at | A UTC datetime of when the page was updated | Datetime |  |
| url_key | The URL key of the page | String | Up to 100 characters long |
