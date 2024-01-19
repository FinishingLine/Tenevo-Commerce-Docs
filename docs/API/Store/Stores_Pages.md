# Stores Pages
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Store Pages
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/pages/ | GET | This allows you to view a list of store pages | [Details](#view-store-pages) |
| /stores/pages/:page/ | GET | This allows you to view a list of store pages | [Details](#view-store-pages) |
| /stores/:store/pages/ | GET | This allows you to view a list of store pages | [Details](#view-store-pages) |
| /stores/:store/pages/:page/ | GET | This allows you to view a list of store pages | [Details](#view-store-pages) |

## View Store Pages
This allows you to view a list of store pages

**URL** : `/stores/pages/`

**URL** : `/stores/pages/:page/`

**URL** : `/stores/:store/pages/`

**URL** : `/stores/:store/pages/:page/`

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
