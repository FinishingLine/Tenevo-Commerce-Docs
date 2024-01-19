# Pages Stores
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Page Stores
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /pages/:page/stores/ | POST | This allows you to create a page store | [Details](#create-page-stores) |
| /pages/:page/stores/:storepage | DELETE | This allows you to delete a page store | [Details](#delete-page-store) |

## Create Page Stores
This allows you to create a page store

**URL** : `/pages/:page/stores/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| store_id | A valid Store ID | Integer |  | NULL | Y | N |

## Delete Page Store
This allows you to delete a page store

**URL** : `/pages/:page/stores/:storepage`

**Method** : `DELETE`
