# Products Subscriptions Conditions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product subscription conditions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/subscriptions/:subscription/conditions/ | POST | This allows you to create product subscription conditions | [Details](#create-product-subscription-conditions) |
| /products/:product/subscriptions/:subscription/conditions/:condition/ | DELETE | This allows you to delete a specified product subscription condition | [Details](#delete-product-subscription-condition) |
| /products/:product/subscriptions/:subscription/conditions/ | PUT | This allows you to update product subscription condition | [Details](#update-product-subscription-conditions) |
| /products/:product/subscriptions/:subscription/conditions/:condition/ | PUT | This allows you to update product subscription condition | [Details](#update-product-subscription-conditions) |
| /products/:product/subscriptions/:subscription/conditions/ | GET | This allows you to list product subscription conditions | [Details](#view-product-subscription-conditions) |
| /products/:product/subscriptions/:subscription/conditions/:condition/ | GET | This allows you to list product subscription conditions | [Details](#view-product-subscription-conditions) |

## Create Product Subscription Conditions
This allows you to create product subscription conditions

**URL** : `/products/:product/subscriptions/:subscription/conditions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description about this condition | String |  | NULL | Y | N |
| name | The name for this condition | String | Up to 100 characters long | NULL | Y | N |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` | NULL | Y | N |
| rules | An array of rules that this belong to this condition - see [Products Subscriptions Conditions Rules](Products_Subscriptions_Conditions_Rules.md#create-products-subscriptions-conditions-rules) | Array |  | NULL | N | N |

## Delete Product Subscription Condition
This allows you to delete a specified product subscription condition

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/`

**Method** : `DELETE`

## Update Product Subscription Conditions
This allows you to update product subscription condition

**URL** : `/products/:product/subscriptions/:subscription/conditions/`

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description about this condition | String |  | NULL | Y | N |
| name | The name for this condition | String | Up to 100 characters long | NULL | Y | N |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` | NULL | Y | N |
| rules | An array of rules that this belong to this condition - see [Products Subscriptions Conditions Rules](Products_Subscriptions_Conditions_Rules.md#update-products-subscriptions-conditions-rules) | Array |  | NULL | N | N |

## View Product Subscription Conditions
This allows you to list product subscription conditions

**URL** : `/products/:product/subscriptions/:subscription/conditions/`

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| description | A description about this condition | String |  |
| name | The name for this condition | String | Up to 100 characters long |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` |
| rules | An array of rules that this belong to this condition - see [Products Subscriptions Conditions Rules](Products_Subscriptions_Conditions_Rules.md#view-products-subscriptions-conditions-rules) | Array |  |
