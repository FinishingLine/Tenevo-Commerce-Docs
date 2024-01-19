# Products Subscriptions Conditions Rules
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product subscription condition rules
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/ | POST | This allows you to create product subscription condition rules | [Details](#create-product-subscription-condition-rules) |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/ | DELETE | This allows you to delete a specified product subscription condition rule | [Details](#delete-product-subscription-condition-rule) |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/ | PUT | This allows you to update product subscription condition rule | [Details](#update-product-subscription-condition-rules) |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/ | PUT | This allows you to update product subscription condition rule | [Details](#update-product-subscription-condition-rules) |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/ | GET | This allows you to list product subscription condition rules | [Details](#view-product-subscription-condition-rules) |
| /products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/ | GET | This allows you to list product subscription condition rules | [Details](#view-product-subscription-condition-rules) |

## Create Product Subscription Condition Rules
This allows you to create product subscription condition rules

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notcontains`, `notmatches`, `startswith` | NULL | Y | N |
| field | The field that this rule will look at | String | Up to 50 characters long | NULL | Y | N |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  | false | N | N |
| value | The value used to make comparisons | String |  | NULL | Y | N |

## Delete Product Subscription Condition Rule
This allows you to delete a specified product subscription condition rule

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/`

**Method** : `DELETE`

## Update Product Subscription Condition Rules
This allows you to update product subscription condition rule

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/`

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notcontains`, `notmatches`, `startswith` | NULL | Y | N |
| field | The field that this rule will look at | String | Up to 50 characters long | NULL | Y | N |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  | false | N | N |
| value | The value used to make comparisons | String |  | NULL | Y | N |

## View Product Subscription Condition Rules
This allows you to list product subscription condition rules

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/`

**URL** : `/products/:product/subscriptions/:subscription/conditions/:condition/rules/:rule/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notcontains`, `notmatches`, `startswith` |
| field | The field that this rule will look at | String | Up to 50 characters long |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  |
| value | The value used to make comparisons | String |  |
