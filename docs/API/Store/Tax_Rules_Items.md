# Tax Rules Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tax Rule Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tax/rules/:rule/items | POST | This allows you to create a tax rule item | [Details](#create-tax-rule-item) |
| /tax/rules/:rule/items/:item | DELETE | This allows you to delete a tax rule item | [Details](#delete-tax-rule-item) |
| /tax/rules/items/ | GET | This allows you to list tax rule items | [Details](#view-tax-rule-items) |
| /tax/rules/:rule/items/:item | GET | This allows you to list tax rule items | [Details](#view-tax-rule-items) |

## Create Tax Rule Item
This allows you to create a tax rule item

**URL** : `/tax/rules/:rule/items`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| customer_class_id | A valid Tax Class ID of type customer | Integer | Up to 10 digits long | NULL | Y | N |
| product_class_id | A valid Tax Class ID of type product | Integer | Up to 10 digits long | NULL | Y | N |
| zone_id | A valid Tax Zone ID | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Tax Rule Item
This allows you to delete a tax rule item

**URL** : `/tax/rules/:rule/items/:item`

**Method** : `DELETE`

## View Tax Rule Items
This allows you to list tax rule items

**URL** : `/tax/rules/items/`

**URL** : `/tax/rules/:rule/items/:item`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| customer_class | The name of the Customer Tax Class | String | Up to 100 characters long |
| customer_class_id | A valid Tax Class ID of type customer | Integer | Up to 10 digits long |
| product_class | The name of the Product Tax Class | String | Up to 100 characters long |
| product_class_id | A valid Tax Class ID of type product | Integer | Up to 10 digits long |
| zone | The name of the Tax Zone | String | Up to 100 characters long |
| zone_id | A valid Tax Zone ID | Integer | Up to 10 digits long |
