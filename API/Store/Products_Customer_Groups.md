# Products Customer Groups
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product customer groups
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/customergroups/ | POST | This allows you to create product customer groups | [Details](#create-product-customer-groups) |
| /products/:product/customergroups/:customergroup/ | DELETE | This allows you to delete a specified product customer group | [Details](#delete-product-customer-group) |
| /products/:product/customergroups/ | GET | This allows you to list product customer groups | [Details](#view-product-customer-groups) |
| /products/:product/customergroups/:customergroup/ | GET | This allows you to list product customer groups | [Details](#view-product-customer-groups) |

## Create Product Customer Groups
This allows you to create product customer groups

**URL** : `/products/:product/customergroups/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| customergroup_id | A valid Customer Group ID | Integer |  | NULL | Y | N |

## Delete Product Customer Group
This allows you to delete a specified product customer group

**URL** : `/products/:product/customergroups/:customergroup/`

**Method** : `DELETE`

## View Product Customer Groups
This allows you to list product customer groups

**URL** : `/products/:product/customergroups/`

**URL** : `/products/:product/customergroups/:customergroup/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| customergroup_id | A valid Customer Group ID | Integer |  |
| name | The name of the customer group | String | Between 1 and 100 characters long |
