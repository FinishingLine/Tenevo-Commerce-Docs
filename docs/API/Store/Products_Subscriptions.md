# Products Subscriptions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product subscriptions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/subscriptions/ | POST | This allows you to create product subscriptions | [Details](#create-product-subscriptions) |
| /products/:product/subscriptions/:subscription/ | DELETE | This allows you to delete a specified product subscription | [Details](#delete-product-subscription) |
| /products/:product/subscriptions/ | PUT | This allows you to update product subscriptions | [Details](#update-product-subscriptions) |
| /products/:product/subscriptions/:subscription/ | PUT | This allows you to update product subscriptions | [Details](#update-product-subscriptions) |
| /products/:product/subscriptions/ | GET | This allows you to list product subscriptions | [Details](#view-product-subscriptions) |
| /products/:product/subscriptions/:subscription/ | GET | This allows you to list product subscriptions | [Details](#view-product-subscriptions) |

## Create Product Subscriptions
This allows you to create product subscriptions

**URL** : `/products/:product/subscriptions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| billing_cycle_length | The number of types to wait between billing cycles | Integer | Up to 10 digits long | 0 | Y | N |
| billing_cycle_type | The type of billing cycle | String | One of the following values: `day`, `week`, `month`, `year` | NULL | Y | N |
| can_catchup | Indicates whether the initial subscription can be posted ASAP, or not | Boolean |  | false | N | N |
| can_trial | Indicates whether the subscription can be tried, or not | Boolean |  | false | N | N |
| conditions | An array containing the subscription conditions - see [Products Subscriptions Conditions](Products_Subscriptions_Conditions.md#create-products-subscriptions-conditions) | Array |  | NULL | N | N |
| credit_missing_items | Indicates whether missing items in a subscription should be credited, or not | Boolean |  | false | N | N |
| gifts | An array containing the subscription gifts - see [Products Subscriptions Gifts](Products_Subscriptions_Gifts.md#create-products-subscriptions-gifts) | Array |  | NULL | N | N |
| is_default | Indicates whether the subscription is the default option, or not, for the product | Boolean |  | false | N | N |
| max_payment_failures | The maximum number of payment failures allowed before the on_payment_failure action happens | Integer | Up to 10 digits long | 0 | N | N |
| max_subscriptions | The maximum number of subscriptions of this product a customer can have | Integer | Up to 10 digits long | NULL | N | N |
| max_trials | The maximum number of trials a customer can have for the product, only when can_trial is true | Integer | Up to 10 digits long | 0 | N | Y |
| name | The name of the subscription | String | Between 1 and 100 characters long | NULL | Y | N |
| offer_code | An optional subscription offer code to allow customers to subscribe to restricted deals, must be unique | String | Up to 10 characters long | NULL | N | N |
| on_payment_failure | The action to perform on the subscription if a payment failure where to occur | String | One of the following values: `cancel`, `continue`, `suspend` | suspend | N | N |
| price | The price to charge for the current subscription, if price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | Y | N |
| price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` | fixed | N | N |
| price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 | NULL | N | Y |
| price_rounding_method | Where price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` | none | N | Y |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long | 1 | N | N |
| reference_prefix | The prefix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long | NULL | N | N |
| reference_suffix | The suffix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long | NULL | N | N |
| release_date | A valid UTC datetime of when the subscription becomes available for customers | Datetime |  | NULL | N | N |
| renew_on_default | Indicates whether the subscription should renew on the products default subscription, or not | Boolean |  | false | N | N |
| renewal_advice_length | The number of days before a subscription ends for renewal advice to be send to the customer | Integer | Up to 10 digits long | 0 | N | N |
| renewal_price | The price to charge for when the current subscription renews, if renewal_price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | Y | N |
| renewal_price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` | fixed | N | N |
| renewal_price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 | NULL | N | Y |
| renewal_price_rounding_method | Where renewal_price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` | none | N | Y |
| renewal_reminder_frequency | The number of days after the renewal_advice_length to send reminders to renew the subscription | Integer | Up to 10 digits long | 0 | N | N |
| renewal_type | The type of how renewals work for this subscription | String | One of the following values: `auto`, `invite`, `none` | auto | N | N |
| send_missing_items | Indicates whether out of stock items should later be sent out if they come back in stock later | Boolean |  | false | N | N |
| send_out_frequency_length | The number of types to wait between send outs | Integer | Up to 10 digits long | 1 | N | N |
| send_out_frequency_type | The type of period to wait between send outs | String | One of the following values: `day`, `week`, `month`, `year` | NULL | Y | N |
| sequential_quantity | The number of variants to be sent out in one send out period, only when type is sequential | Integer | Up to 10 digits long | NULL | N | Y |
| ship_out_of_stock | Indicates whether if the subscription will be missing one or more items that form the subscription, the subscription should proceed, or not | Boolean |  | false | N | N |
| shipping_service_id | A valid Shipping Service ID to use when creating the orders, if not provided, will use the default service for the Store | Integer | Up to 10 digits long | NULL | N | N |
| start_from_id | A valid Product Variant ID of where to start the subscription from, required when start_from_type is specific | Integer | Up to 10 digits long | NULL | N | Y |
| start_from_type | The method used to determine where to start the subscription from, only when type is sequential | String | One of the following values: `any`, `current`, `next`, `specific` | any | N | Y |
| status | The status of the subscription | String | One of the following values: `active`, `hidden`, `restricted` | active | N | N |
| synchronise_date | Indicates whether the subscriptions should be synchronised together for all customers of this product | Boolean |  | false | N | N |
| trial_length | The number of trial types the trial period should last for, only when can_trial is true | Integer | Up to 10 digits long | 0 | N | Y |
| trial_length_type | The type of trial period, only when can_trial is true | String | One of the following values: `day`, `week`, `month`, `year` | NULL | N | Y |
| trial_price | The price to charge for taking a trial, only when can_trial is true | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | N | Y |
| trial_requires_payment_details | Indicates whether payment details are required in order to take out a trial, or not, only when can_trial is true | Boolean |  | false | N | Y |
| type | The type of subscription | String | One of the following values: `sequential`, `simple` | simple | N | N |
| withdrawal_date | A valid UTC datetime of when the subscription becomes unavailable for customers | Datetime |  | NULL | N | N |

## Delete Product Subscription
This allows you to delete a specified product subscription

**URL** : `/products/:product/subscriptions/:subscription/`

**Method** : `DELETE`

## Update Product Subscriptions
This allows you to update product subscriptions

**URL** : `/products/:product/subscriptions/`

**URL** : `/products/:product/subscriptions/:subscription/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_catchup | Indicates whether the initial subscription can be posted ASAP, or not | Boolean |  | false | N | N |
| can_trial | Indicates whether the subscription can be tried, or not | Boolean |  | false | N | N |
| conditions | An array containing the subscription conditions - see [Products Subscriptions Conditions](Products_Subscriptions_Conditions.md#update-products-subscriptions-conditions) | Array |  | NULL | N | N |
| credit_missing_items | Indicates whether missing items in a subscription should be credited, or not | Boolean |  | false | N | N |
| gifts | An array containing the subscription gifts - see [Products Subscriptions Gifts](Products_Subscriptions_Gifts.md#update-products-subscriptions-gifts) | Array |  | NULL | N | N |
| is_default | Indicates whether the subscription is the default option, or not, for the product | Boolean |  | false | N | N |
| max_payment_failures | The maximum number of payment failures allowed before the on_payment_failure action happens | Integer | Up to 10 digits long | 0 | N | N |
| max_subscriptions | The maximum number of subscriptions of this product a customer can have | Integer | Up to 10 digits long | NULL | N | N |
| max_trials | The maximum number of trials a customer can have for the product, only when can_trial is true | Integer | Up to 10 digits long | 0 | N | Y |
| name | The name of the subscription | String | Between 1 and 100 characters long | NULL | Y | N |
| offer_code | An optional subscription offer code to allow customers to subscribe to restricted deals, must be unique | String | Up to 10 characters long | NULL | N | N |
| on_payment_failure | The action to perform on the subscription if a payment failure where to occur | String | One of the following values: `cancel`, `continue`, `suspend` | suspend | N | N |
| price | The price to charge for the current subscription, if price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | Y | N |
| price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` | fixed | N | N |
| price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 | NULL | N | Y |
| price_rounding_method | Where price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` | none | N | Y |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long | 1 | N | N |
| reference_prefix | The prefix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long | NULL | N | N |
| reference_suffix | The suffix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long | NULL | N | N |
| release_date | A valid UTC datetime of when the subscription becomes available for customers | Datetime |  | NULL | N | N |
| renew_on_default | Indicates whether the subscription should renew on the products default subscription, or not | Boolean |  | false | N | N |
| renewal_advice_length | The number of days before a subscription ends for renewal advice to be send to the customer | Integer | Up to 10 digits long | 0 | N | N |
| renewal_price | The price to charge for when the current subscription renews, if renewal_price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | Y | N |
| renewal_price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` | fixed | N | N |
| renewal_price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 | NULL | N | Y |
| renewal_price_rounding_method | Where renewal_price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` | none | N | Y |
| renewal_reminder_frequency | The number of days after the renewal_advice_length to send reminders to renew the subscription | Integer | Up to 10 digits long | 0 | N | N |
| renewal_type | The type of how renewals work for this subscription | String | One of the following values: `auto`, `invite`, `none` | auto | N | N |
| send_missing_items | Indicates whether out of stock items should later be sent out if they come back in stock later | Boolean |  | false | N | N |
| send_out_frequency_length | The number of types to wait between send outs | Integer | Up to 10 digits long | 1 | N | N |
| send_out_frequency_type | The type of period to wait between send outs | String | One of the following values: `day`, `week`, `month`, `year` | NULL | Y | N |
| sequential_quantity | The number of variants to be sent out in one send out period, only when type is sequential | Integer | Up to 10 digits long | NULL | N | Y |
| ship_out_of_stock | Indicates whether if the subscription will be missing one or more items that form the subscription, the subscription should proceed, or not | Boolean |  | false | N | N |
| shipping_service_id | A valid Shipping Service ID to use when creating the orders, if not provided, will use the default service for the Store | Integer | Up to 10 digits long | NULL | N | N |
| start_from_id | A valid Product Variant ID of where to start the subscription from, required when start_from_type is specific | Integer | Up to 10 digits long | NULL | N | Y |
| start_from_type | The method used to determine where to start the subscription from, only when type is sequential | String | One of the following values: `any`, `current`, `next`, `specific` | any | N | Y |
| status | The status of the subscription | String | One of the following values: `active`, `archived`, `hidden`, `restricted` | active | N | N |
| synchronise_date | Indicates whether the subscriptions should be synchronised together for all customers of this product | Boolean |  | false | N | N |
| trial_length | The number of trial types the trial period should last for, only when can_trial is true | Integer | Up to 10 digits long | 0 | N | Y |
| trial_length_type | The type of trial period, only when can_trial is true | String | One of the following values: `day`, `week`, `month`, `year` | NULL | N | Y |
| trial_price | The price to charge for taking a trial, only when can_trial is true | Float | Up to 2 decimal places and no larger than 999999.99 | 0.00 | N | Y |
| trial_requires_payment_details | Indicates whether payment details are required in order to take out a trial, or not, only when can_trial is true | Boolean |  | false | N | Y |
| withdrawal_date | A valid UTC datetime of when the subscription becomes unavailable for customers | Datetime |  | NULL | N | N |

## View Product Subscriptions
This allows you to list product subscriptions

**URL** : `/products/:product/subscriptions/`

**URL** : `/products/:product/subscriptions/:subscription/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| billing_cycle_length | The number of types to wait between billing cycles | Integer | Up to 10 digits long |
| billing_cycle_type | The type of billing cycle | String | One of the following values: `day`, `week`, `month`, `year` |
| can_catchup | Indicates whether the initial subscription can be posted ASAP, or not | Boolean |  |
| can_trial | Indicates whether the subscription can be tried, or not | Boolean |  |
| conditions | An array containing the subscription conditions - see [Products Subscriptions Conditions](Products_Subscriptions_Conditions.md#view-products-subscriptions-conditions) | Array |  |
| created_at | A valid UTC datetime of when the subscription was created | Datetime |  |
| credit_missing_items | Indicates whether missing items in a subscription should be credited, or not | Boolean |  |
| gifts | An array containing the subscription gifts - see [Products Subscriptions Gifts](Products_Subscriptions_Gifts.md#view-products-subscriptions-gifts) | Array |  |
| is_default | Indicates whether the subscription is the default option, or not, for the product | Boolean |  |
| max_payment_failures | The maximum number of payment failures allowed before the on_payment_failure action happens | Integer | Up to 10 digits long |
| max_subscriptions | The maximum number of subscriptions of this product a customer can have | Integer | Up to 10 digits long |
| max_trials | The maximum number of trials a customer can have for the product | Integer | Up to 10 digits long |
| name | The name of the subscription | String | Between 1 and 100 characters long |
| offer_code | An optional subscription offer code to allow customers to subscribe to restricted deals | String | Up to 10 characters long |
| on_payment_failure | The action to perform on the subscription if a payment failure where to occur | String | One of the following values: `cancel`, `continue`, `suspend` |
| price | The price to charge for the current subscription, if price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 |
| price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` |
| price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 |
| price_rounding_method | Where price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` |
| quantity | The number of units to send per subscription | Integer | Up to 10 digits long |
| reference_prefix | The prefix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long |
| reference_suffix | The suffix to use for the subscription reference, if null, the Store default will be used | String | Up to 10 characters long |
| release_date | A valid UTC datetime of when the subscription becomes available for customers | Datetime |  |
| renew_on_default | Indicates whether the subscription should renew on the products default subscription, or not | Boolean |  |
| renewal_advice_length | The number of days before a subscription ends for renewal advice to be send to the customer | Integer | Up to 10 digits long |
| renewal_price | The price to charge for when the current subscription renews, if renewal_price_method is a percentage price will be treated as a percentage | Float | Up to 2 decimal places and no larger than 999999.99 |
| renewal_price_method | The method of pricing | String | One of the following values: `fixed`, `percentageprice`, `percentagespecial` |
| renewal_price_rounding_amount | The amount to round to if the price needs to be shown as a nice number | Float | Up to 2 decimal places and no larger than 999999.99 |
| renewal_price_rounding_method | Where renewal_price_method is a percentage, this will determine how to round pricing | String | One of the following values: `down`, `none`, `up` |
| renewal_reminder_frequency | The number of days after the renewal_advice_length to send reminders to renew the subscription | Integer | Up to 10 digits long |
| renewal_type | The type of how renewals work for this subscription | String | One of the following values: `auto`, `invite`, `none` |
| send_missing_items | Indicates whether out of stock items should later be sent out if they come back in stock later | Boolean |  |
| send_out_frequency_length | The number of types to wait between send outs | Integer | Up to 10 digits long |
| send_out_frequency_type | The type of period to wait between send outs | String | One of the following values: `day`, `week`, `month`, `year` |
| sequential_quantity | The number of variants to be sent out in one send out period | Integer | Up to 10 digits long |
| ship_out_of_stock | Indicates whether if the subscription will be missing one or more items that form the subscription, the subscription should proceed, or not | Boolean |  |
| shipping_service_id | A valid Shipping Service ID to use when creating the orders, if not provided, will use the default service for the Store | Integer | Up to 10 digits long |
| start_from_id | A valid Product Variant ID of where to start the subscription from, required when start_from_type is specific | Integer | Up to 10 digits long |
| start_from_type | The method used to determine where to start the subscription from | String | One of the following values: `any`, `current`, `next`, `specific` |
| status | The status of the subscription | String | One of the following values: `active`, `archived`, `hidden`, `restricted` |
| synchronise_date | Indicates whether the subscriptions should be synchronised together for all customers of this product | Boolean |  |
| trial_length | The number of trial types the trial period should last for | Integer | Up to 10 digits long |
| trial_length_type | The type of trial period | String | One of the following values: `day`, `week`, `month`, `year` |
| trial_price | The price to charge for taking a trial | Float | Up to 2 decimal places and no larger than 999999.99 |
| trial_requires_payment_details | Indicates whether payment details are required in order to take out a trial, or not | Boolean |  |
| type | The type of subscription | String | One of the following values: `sequential`, `simple` |
| updated_at | A valid UTC datetime of when the subscription was last updated | Datetime |  |
| withdrawal_date | A valid UTC datetime of when the subscription becomes unavailable for customers | Datetime |  |
