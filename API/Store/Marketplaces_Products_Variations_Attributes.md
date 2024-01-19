# Marketplaces Products Variations Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages marketplace product variation attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/ | POST | This allows you to create attributes for marketplace product variations | [Details](#create-marketplaces-products-variations-attributes) |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/ | DELETE | This allows you to delete a specified attribute from a marketplace product variations | [Details](#delete-marketplaces-products-variations-attribute) |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/ | PUT | This allows you to update attributes for marketplace product variations | [Details](#update-marketplaces-products-variations-attributes) |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/ | PUT | This allows you to update attributes for marketplace product variations | [Details](#update-marketplaces-products-variations-attributes) |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/ | GET | This allows you to list attributes for marketplace product variations | [Details](#view-marketplaces-products-variations-attributes) |
| /marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/ | GET | This allows you to list attributes for marketplace product variations | [Details](#view-marketplaces-products-variations-attributes) |

## Create Marketplaces Products Variations Attributes
This allows you to create attributes for marketplace product variations

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace product variation attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace product variation attribute | String |  | NULL | N | N |

## Delete Marketplaces Products Variations Attribute
This allows you to delete a specified attribute from a marketplace product variations

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/`

**Method** : `DELETE`

## Update Marketplaces Products Variations Attributes
This allows you to update attributes for marketplace product variations

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/`

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The name of the marketplace product variation attribute | String | Between 1 and 50 characters long | NULL | Y | N |
| value | The value of the marketplace product variation attribute | String |  | NULL | N | N |

## View Marketplaces Products Variations Attributes
This allows you to list attributes for marketplace product variations

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/`

**URL** : `/marketplaces/:marketplace/products/:product/variations/:variation/attributes/:attribute/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attribute | The name of the marketplace product variation attribute | String | Between 1 and 50 characters long |
| value | The value of the marketplace product variation attribute | String |  |
