# Subscriptions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Subscriptions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /subscriptions/ | POST | This allows you to create a subscription | [Details](#create-subscriptions) |
| /subscriptions/:subscription/ | DELETE | This allows you to delete a subscription | [Details](#delete-subscription) |
| /subscriptions/ | PUT | This allows you to update a specific subscription | [Details](#update-subscriptions) |
| /subscriptions/:subscription/ | PUT | This allows you to update a specific subscription | [Details](#update-subscriptions) |
| /subscriptions/ | GET | This allows you to view a list of subscriptions | [Details](#view-subscriptions) |
| /subscriptions/:subscription | GET | This allows you to view a list of subscriptions | [Details](#view-subscriptions) |
| /subscriptions/:subscription/addresses/:address | DELETE | This allows you to delete a subscription address | [Details](#delete-subscription-address) |

## Create Subscriptions
This allows you to create a subscription

**URL** : `/subscriptions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array containing the subscription addresses - see [Subscriptions Addresses](Subscriptions_Addresses.md#create-subscriptions-addresses) | Array |  | NULL | N | N |
| can_renew | Indicates whether the Subscription can be renewed, or not | Boolean |  | false | N | N |
| customer_id | A valid Customer ID | Integer |  | NULL | Y | N |
| end_date | The date when the subscription ends | Date |  | NULL | N | N |
| is_gift | Indicates whether the Subscription is a gift, or not | Boolean |  | false | N | N |
| is_trial | Indicates whether the Subscription is a trial, or not | Boolean |  | false | N | N |
| next_payment_date | The date when the next payment will be taken for the subscription | Date |  | NULL | N | N |
| next_posting_date | The date when the next subscription will be posted out | Date |  | NULL | N | N |
| payment_method_id | A valid Payment Method ID | Integer |  | NULL | N | N |
| price | The price of the subscription, where null uses the Product Subscription Price | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | N | N |
| product_subscription_id | A valid Product Subscription ID | Integer |  | NULL | Y | N |
| renewal_price | The renewal price of the subscription, where null uses the Product Subscription Renewal Price | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | N | N |
| start_date | The date when the subscription starts | Date |  | NULL | Y | N |
| start_variant_id | A valid Product Variant ID | Integer |  | NULL | N | N |
| subscription_reference | A unique reference of the subscription, where not provided, a reference will be automatically generated | String | Up to 20 characters long | NULL | N | N |
| trial_end_date | The date the trail ends, required when is_trial is true | Date |  | NULL | N | Y |

## Delete Subscription
This allows you to delete a subscription

**URL** : `/subscriptions/:subscription/`

**Method** : `DELETE`

## Update Subscriptions
This allows you to update a specific subscription

**URL** : `/subscriptions/`

**URL** : `/subscriptions/:subscription/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array containing the subscription addresses - see [Subscriptions Addresses](Subscriptions_Addresses.md#update-subscriptions-addresses) | Array |  | NULL | N | N |
| can_renew | Indicates whether the Subscription can be renewed, or not | Boolean |  | false | N | N |
| end_date | The date when the subscription ends | Date |  | NULL | N | N |
| is_gift | Indicates whether the Subscription is a gift, or not | Boolean |  | false | N | N |
| is_trial | Indicates whether the Subscription is a trial, or not | Boolean |  | false | N | N |
| next_payment_date | The date when the next payment will be taken for the subscription | Date |  | NULL | N | N |
| next_posting_date | The date when the next subscription will be posted out | Date |  | NULL | N | N |
| payment_failures | A count of the number of times payment has failed to be taken from a customer | Integer |  | 0 | N | N |
| payment_method_id | A valid Payment Method ID | Integer |  | NULL | N | N |
| price | The price of the subscription, where null uses the Product Subscription Price | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | N | N |
| renewal_price | The renewal price of the subscription, where null uses the Product Subscription Renewal Price | Float | Up to 2 decimal places and no larger than 99999999.99 | NULL | N | N |
| start_date | The date when the subscription starts | Date |  | NULL | Y | N |
| start_variant_id | A valid Product Variant ID | Integer |  | NULL | N | N |
| status | The status of the subscription | String | One of the following values: `active`, `cancelled`, `suspended` | NULL | Y | N |
| trial_end_date | The date the trail ends, required when is_trial is true | Date |  | NULL | N | Y |

## View Subscriptions
This allows you to view a list of subscriptions

**URL** : `/subscriptions/`

**URL** : `/subscriptions/:subscription`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array containing the subscription addresses - see [Subscriptions Addresses](Subscriptions_Addresses.md#view-subscriptions-addresses) | Array |  |
| can_renew | Indicates whether the Subscription can be renewed, or not | Boolean |  |
| customer_id | A valid Customer ID | Integer |  |
| end_date | The date when the subscription ends | Date |  |
| is_gift | Indicates whether the Subscription is a gift, or not | Boolean |  |
| is_trial | Indicates whether the Subscription is a trial, or not | Boolean |  |
| next_payment_date | The date when the next payment will be taken for the subscription | Date |  |
| next_posting_date | The date when the next subscription will be posted out | Date |  |
| payment_failures | A count of the number of times payment has failed to be taken from a customer | Integer |  |
| payment_method_id | A valid Payment Method ID | Integer |  |
| price | The price of the subscription, where null uses the Product Subscription Price | Float | Up to 2 decimal places and no larger than 99999999.99 |
| product_subscription_id | A valid Product Subscription ID | Integer |  |
| renewal_price | The renewal price of the subscription, where null uses the Product Subscription Renewal Price | Float | Up to 2 decimal places and no larger than 99999999.99 |
| start_date | The date when the subscription starts | Date |  |
| start_variant_id | A valid Product Variant ID | Integer |  |
| status | The status of the subscription | String | One of the following values: `active`, `cancelled`, `suspended` |
| subscription_reference | A unique reference of the subscription, where not provided, a reference will be automatically generated | String | Up to 20 characters long |
| trial_end_date | The date the trail ends, required when is_trial is true | Date |  |

## Delete Subscription Address
This allows you to delete a subscription address

**URL** : `/subscriptions/:subscription/addresses/:address`

**Method** : `DELETE`
