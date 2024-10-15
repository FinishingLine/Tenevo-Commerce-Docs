# Orders
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Orders
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/ | POST | This allows you to create an order | [Details](#create-order) |
| /orders/:order/ | DELETE | This allows you to delete an order | [Details](#delete-order) |
| /orders/ | PUT | This allows you to update a specific order | [Details](#update-orders) |
| /orders/:order/ | PUT | This allows you to update a specific order | [Details](#update-orders) |
| /orders/ | GET | This allows you to list orders | [Details](#view-orders) |
| /orders/:order/ | GET | This allows you to list orders | [Details](#view-orders) |

## Create Order
This allows you to create an order

**URL** : `/orders/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array containing the addresses to send this order to - see [Orders Addresses](Orders_Addresses.md#create-orders-addresses) | Array |  | NULL | N | N |
| admin_id | A valid Admin ID of whom created the order, only when source is admin | Integer |  | NULL | N | Y |
| booking_instructions | The instructions for the booking of the order | String |  | NULL | N | N |
| currency | A valid ISO 3 character currency code | String | Exactly 3 characters long | NULL | Y | N |
| customer_id | A valid Customer ID that this order belongs to | Integer |  | NULL | Y | N |
| deliver_max | A date that the order needs to be delivered no later than - ignored when `deliver_on` is provided | Date |  | NULL | N | N |
| deliver_min | A date that the order needs to be delivered no earlier than - ignored when `deliver_on` is provided | Date |  | NULL | N | N |
| deliver_on | A date that the order needs to be delivered on | Date |  | NULL | N | N |
| delivery_instructions | Delivery instructions to pass onto the courier | String |  | NULL | N | N |
| despatch_partorders | Indicates whether orders should be dispatched asap, regardless of if all items are available | Boolean |  | 0 | N | N |
| discount_tax | The total amount of tax the recipient saves, due to discounts | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| gift_message | A gift message from the customer if the order is a gift order | String | Up to 255 characters long | NULL | N | N |
| globale_reference | Where an order is being sent via Global-e, provide the Global-e reference | String | Up to 20 characters long | NULL | N | N |
| group_sameaddress | Indicates whether orders going to the same address should be grouped, or not | Boolean |  | 0 | N | N |
| groupings | An array of groupings belonging to this order - see [Orders Groupings](Orders_Groupings.md#create-orders-groupings) | Array |  | NULL | N | N |
| instructions | Any instructions for filtering | String |  | NULL | N | N |
| ioss_number | A valid IOSS number if the order will be sent this way | String | Exactly 12 characters long | NULL | N | N |
| is_amazon_premium | Indicates whether an order is an Amazon Premium order, or not | Boolean |  | 0 | N | N |
| is_amazon_prime | Indicates whether an order is an Amazon Prime order, or not | Boolean |  | 0 | N | N |
| is_amazon_selflabeller | Indicates whether an order is an Amazon order that needs to be self labelled, or not | Boolean |  | 0 | N | N |
| is_b2b | Indicates whether the order is a B2B order, or not | Boolean |  | 0 | N | N |
| is_fbaprep | Indicates whether an order is for FBA prep, or not | Boolean |  | 0 | N | N |
| is_gift | Indicates whether an order is a gift, or not | Boolean |  | 0 | N | N |
| is_priority | Indicates whether the order should be given priority over other orders, or not | Boolean |  | 0 | N | N |
| is_resend | Indicates whether the order is an order that has been resent, or not | Boolean |  | 0 | N | N |
| is_test | Indicates whether an order is a test order, or not | Boolean |  | 0 | N | N |
| marketplace_id | A valid Marketplace ID | Integer |  | NULL | N | N |
| marketplace_order_number | The Order Number as provided by the Marketplace | String | Between 1 and 255 characters long | NULL | N | N |
| notes | Any extra notes pertaining to the order | String |  | NULL | N | N |
| packing_instructions | The instructions for the packing of the order | String |  | NULL | N | N |
| payment_ip | The IP address that was used at the time of payment | String | Up to 39 characters long | NULL | N | N |
| payment_method_country_iso2 | A valid ISO Country Code where the payment method was issued | String | Exactly 2 characters long | NULL | N | N |
| payment_method_detail | The payment method detail | String | Up to 30 characters long | NULL | N | N |
| payment_method_gateway | The payment method gateway | String | Up to 20 characters long | NULL | Y | N |
| po_number | A Purchase Order Number that has been provided by the customer for the order | String | Up to 30 characters long | NULL | N | N |
| profile_id | A valid Customer Profile ID that placed this order | Integer |  | NULL | Y | N |
| properties | A JSON encoded array of properties related to the order | String |  | NULL | N | N |
| reference_id | A reference that corresponds to a Marketplace Order ID | String | Between 1 and 255 characters long | NULL | N | N |
| requires_booking | Indicates whether the order should be a booking or not | Boolean |  | 0 | N | N |
| resend_order_id | Where the order is a resend, the original Order ID | Integer |  | NULL | N | N |
| resend_reason | The reason why a resend is being sent out, only when `is_resend` is true | String | One of the following values: `unknown`, `shipment not received`, `item not received`, `shipment damaged`, `item damaged`, `item defective` | unknown | N | Y |
| risk_score | A score related to the risk an order contains - the lower the score, the lower the risk | Integer | Up to 4 digits long | 0 | N | N |
| shipment_reference | A Shipment Reference that has been provided by the customer for the order | String | Up to 50 characters long | NULL | N | N |
| shipping_method_code | The code of the shipping method | String | Up to 20 characters long | NULL | Y | N |
| shipping_method_name | The name of the shipping method | String | Up to 100 characters long | NULL | Y | N |
| shipping_tax | The total amount the recipient paid for tax for shipping | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| source | The source of the order | String | One of the following values: `admin`, `direct`, `marketplace` | direct | N | N |
| status | The status of the order | String | One of the following values: `awaiting approval`, `hold`, `open` | open | N | N |
| store_id | A valid Store ID that this order belongs to | Integer |  | NULL | Y | N |
| subscription_id | A valid Subscription ID that this order relates to | Integer |  | NULL | N | N |
| taxes | An array containing the taxes charged in the order - see [Orders Taxes](Orders_Taxes.md#create-orders-taxes) | Array |  | NULL | N | N |
| total_credit_balance | The total amount of credit balance used against the order | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| total_discount | The total amount of discount provided off the order sub total, such as one time discounts, and shipping discounts - unit discounts should be excluded from this - this should exclude tax | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| total_shipping | The total amount the recipient paid for shipping, before discounts - this should be exclude tax | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |

## Delete Order
This allows you to delete an order

**URL** : `/orders/:order/`

**Method** : `DELETE`

## Update Orders
This allows you to update a specific order

**URL** : `/orders/`

**URL** : `/orders/:order/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array containing the addresses to send this order to - see [Orders Addresses](Orders_Addresses.md#update-orders-addresses) | Array |  | NULL | N | N |
| booking_instructions | The instructions for the booking of the order | String |  | NULL | N | N |
| cancelled_at | A valid UTC datetime of when the order was cancelled | Datetime |  | NULL | N | N |
| cancelled_reason | The reason for a cancelled order | String |  | NULL | N | N |
| closed_at | A valid UTC datetime of when the order was closed | Datetime |  | NULL | N | N |
| currency | A valid ISO 3 character currency code | String | Exactly 3 characters long | NULL | Y | N |
| deliver_max | A date that the order needs to be delivered no later than - ignored when `deliver_on` is provided | Date |  | NULL | N | N |
| deliver_min | A date that the order needs to be delivered no earlier than - ignored when `deliver_on` is provided | Date |  | NULL | N | N |
| deliver_on | A date that the order needs to be delivered on | Date |  | NULL | N | N |
| delivery_instructions | Delivery instructions to pass onto the courier, can only be updated while the order is open or on hold | String |  | NULL | N | N |
| despatch_partorders | Indicates whether orders should be dispatched asap, regardless of if all items are available | Boolean |  | 0 | N | N |
| discount_tax | The total amount of tax the recipient saves, due to discounts | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| gift_message | A gift message from the customer if the order is a gift order | String | Up to 255 characters long | NULL | N | N |
| globale_reference | Where an order is being sent via Global-e, provide the Global-e reference | String | Up to 20 characters long | NULL | N | N |
| group_sameaddress | Indicates whether orders going to the same address should be grouped, or not | Boolean |  | 0 | N | N |
| groupings | An array of groupings belonging to this order - see [Orders Groupings](Orders_Groupings.md#update-orders-groupings) | Array |  | NULL | N | N |
| instructions | Any instructions for filtering | String |  | NULL | N | N |
| ioss_number | A valid IOSS number if the order will be sent this way | String | Exactly 12 characters long | NULL | N | N |
| is_b2b | Indicates whether the order is a B2B order, or not | Boolean |  | 0 | N | N |
| is_fbaprep | Indicates whether an order is for FBA prep, or not | Boolean |  | 0 | N | N |
| is_gift | Indicates whether an order is a gift, or not | Boolean |  | 0 | N | N |
| is_priority | Indicates whether the order should be given priority over other orders, or not | Boolean |  | 0 | N | N |
| is_test | Indicates whether an order is a test order, or not | Boolean |  | 0 | N | N |
| notes | Any extra notes pertaining to the order | String |  | NULL | N | N |
| packing_instructions | The instructions for the packing of the order | String |  | NULL | N | N |
| processed_at | A valid UTC datetime of when the order was last processed | Datetime |  | NULL | N | N |
| requires_booking | Indicates whether the order should be a booking or not | Boolean |  | 0 | N | N |
| risk_score | A score related to the risk an order contains - the lower the score, the lower the risk | Integer | Up to 4 digits long | 0 | N | N |
| shipping_method_code | The code of the shipping method, can only be updated while the order is open or on hold | String | Up to 20 characters long | NULL | N | Y |
| shipping_method_name | The name of the shipping method, can only be updated while the order is open or on hold | String | Up to 100 characters long | NULL | N | Y |
| shipping_tax | The total amount of shipping tax for the order | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| skip_marketplace | Indicates whether a status change should not update on the marketplace, can only be uused with marketplace orders | Boolean |  | false | N | Y |
| status | The status of the order | String | One of the following values: `awaiting approval`, `cancelled`, `closed`, `hold`, `in progress`, `open`, `part fulfilled` | NULL | N | N |
| taxes | An array containing the taxes charged in the order - see [Orders Taxes](Orders_Taxes.md#update-orders-taxes) | Array |  | NULL | N | N |
| total_credit_balance | The total amount of credit balance used against the order | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| total_discount | The total amount of discount provided off the order sub total, such as one time discounts, and shipping discounts - unit discounts should be excluded from this - this should exclude tax | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| total_shipping | The total amount the recipient paid for shipping, before discounts | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |

## View Orders
This allows you to list orders

**URL** : `/orders/`

**URL** : `/orders/:order/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array containing the addresses to send this order to - see [Orders Addresses](Orders_Addresses.md#view-orders-addresses) | Array |  |
| admin_id | A valid Admin ID of whom created the order | Integer |  |
| approval_token | Where the order status is awaiting approval, the token required in order to approve the order | String | Exactly 64 characters long |
| booking_instructions | The instructions for the booking of the order | String |  |
| cancelled_at | A UTC datetime of when the order was cancelled | Datetime |  |
| cancelled_reason | The reason why the order was cancelled | String |  |
| closed_at | A UTC datetime of when the order was closed | Datetime |  |
| company_name | The company name of the customer | String | Up to 255 characters long |
| created_at | A UTC datetime of when the order was created | Datetime |  |
| currency | The ISO 3 character currency code | String | Exactly 3 characters long |
| customer_id | The Customer ID of the customer the order belongs to | Integer |  |
| deliver_max | A date that the order needs to be delivered no later than | Date |  |
| deliver_min | A date that the order needs to be delivered no earlier than | Date |  |
| deliver_on | A date that the order needs to be delivered on | Date |  |
| delivery_instructions | The delivery instructions | String |  |
| delivery_postcode | The postal code/zip code of where the order is being shipped to | String | Up to 20 characters long |
| despatch_partorders | Indicates whether orders should be dispatched asap, regardless of if all items are available | Boolean |  |
| discount_tax | The total amount of tax the recipient saves, due to discounts | Float | Up to 2 decimal places and no larger than 99999999.99 |
| first_name | The first name of the customer | String | Up to 255 characters long |
| full_name | The full name of the customer | String | Up to 255 characters long |
| gift_message | Message from the buyer if the order is a gift | String | Up to 255 characters long |
| globale_reference | Where an order is being sent via Global-e, provide the Global-e reference | String | Up to 20 characters long |
| group_sameaddress | Indicates whether orders going to the same address should be grouped, or not | Boolean |  |
| groupings | An array of groupings belonging to this order - see [Orders Groupings](Orders_Groupings.md#view-orders-groupings) | Array |  |
| has_resends | Indicates whether the order has been resent | Boolean |  |
| instructions | Any instructions for filtering | String |  |
| ioss_number | A valid IOSS number if the order will be sent this way | String | Exactly 12 characters long |
| is_amazon_premium | Indicates whether an order is an Amazon Premium order, or not | Boolean |  |
| is_amazon_prime | Indicates whether an order is an Amazon Prime order, or not | Boolean |  |
| is_amazon_selflabeller | Indicates whether an order is an Amazon order that needs to be self labelled, or not | Boolean |  |
| is_b2b | Indicates whether the order is a B2B order, or not | Boolean |  |
| is_fbaprep | Indicates whether an order is for FBA prep, or not | Boolean |  |
| is_gift | Indicates whether an order is a gift, or not | Boolean |  |
| is_priority | Indicates whether the order should be given priority over other orders, or not | Boolean |  |
| is_resend | Indicates whether the order is an order that has been resent | Boolean |  |
| is_subscription | Indicates whether the order is part of a subscription | Boolean |  |
| is_test | Indicates whether the order is a test order, or not | Boolean |  |
| last_name | The last name of the customer | String | Up to 255 characters long |
| marketplace | The name of the marketplace from which the order came from | String | Up to 20 characters long |
| marketplace_id | A valid Marketplace ID | Integer |  |
| marketplace_order_number | The Order Number as provided by the Marketplace | String | Between 1 and 255 characters long |
| notes | Any extra notes pertaining to the order | String |  |
| order_number | The order number for the order | String | Up to 50 characters long |
| packing_instructions | The instructions for the packing of the order | String |  |
| payment_ip | The IP address that was used at the time of payment | String | Up to 39 characters long |
| payment_method_country_iso2 | A valid ISO Country Code where the payment method was issued | String | Exactly 2 characters long |
| payment_method_detail | The detail of the payment method | String | Up to 30 characters long |
| payment_method_gateway | The gateway of the payment method | String | Up to 20 characters long |
| payment_method_name | The name of the payment method | String |  |
| po_number | A Purchase Order Number that has been provided by the customer for the order | String | Up to 30 characters long |
| processed_at | A UTC datetime of when the order was last processed | Datetime |  |
| profile_id | The Profile ID of the user that placed the order | Integer |  |
| properties | A JSON encoded array of properties related to the order | String |  |
| reference | A unique reference for this order | String | Exactly 10 characters long |
| reference_id | A reference that corresponds to a Marketplace Order ID | String | Between 1 and 255 characters long |
| requires_booking | Indicates whether the order should be a booking or not | Boolean |  |
| resend_order_id | Where the order is a resend, the original Order ID | Integer |  |
| resend_reason | The reason why a resend is being sent out | String | One of the following values: `unknown`, `shipment not received`, `item not received`, `shipment damaged`, `item damaged`, `item defective` |
| risk_score | A score related to the risk an order contains - the lower the score, the lower the risk | Integer | Up to 4 digits long |
| shipment_reference | A Shipment Reference that has been provided by the customer for the order | String | Up to 50 characters long |
| shipping_method_code | The code of the shipping method | String | Up to 20 characters long |
| shipping_method_name | The name of the shipping method | String | Up to 100 characters long |
| shipping_tax | The total amount the recipient paid for tax for shipping | Float | Up to 2 decimal places and no larger than 99999999.99 |
| source | The source of the order | String | One of the following values: `admin`, `direct`, `marketplace` |
| status | The status of the order | String | One of the following values: `awaiting approval`, `cancelled`, `closed`, `hold`, `in progress`, `open`, `part fulfilled` |
| store_id | The Store ID where the order was placed | Integer |  |
| subscription_id | The Subscription ID that this order relates to | Integer |  |
| summary | An array providing a summary about the order - see [Orders Summary](Orders_Summary.md#view-orders-summary) | Array |  |
| taxes | An array containing the taxes charged in the order - see [Orders Taxes](Orders_Taxes.md#view-orders-taxes) | Array |  |
| total_credit_balance | The total amount of credit balance used against the order | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_discount | The total amount of discount provided off the order sub total, such as one time discounts, and shipping discounts - unit discounts should be excluded from this - this should exclude tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_gift_items | The total number of items that are gifts | Integer | Up to 10 digits long |
| total_gift_units | The total number of units that are gifts | Integer | Up to 10 digits long |
| total_gift_uom_units | The total number of units that are gifts, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_price | The total value of the order including shipping, tax, etc | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_shipping | The total amount the recipient paid for shipping, before discounts - this should be exclude tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_tax | The total tax of the order, before discounts and shipping | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_units_fulfilled | The total number of units fulfilled | Integer | Up to 10 digits long |
| total_units_ordered | The total number of units ordered | Integer | Up to 10 digits long |
| total_units_outstanding | The total number of units outstanding | Integer | Up to 10 digits long |
| total_units_returned | The total number of units returned | Integer | Up to 10 digits long |
| total_units_returning | The total number of units being returned | Integer | Up to 10 digits long |
| total_units_unfulfillable | The total number of units that are unfulfillable | Integer | Up to 10 digits long |
| total_uom_units_fulfilled | The total number of units fulfilled, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_units_ordered | The total number of units ordered, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_units_outstanding | The total number of units outstanding, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_units_returned | The total number of units returned, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_units_returning | The total number of units being returned, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_units_unfulfillable | The total number of units that are unfulfillable, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_wrapped_items | The total number of items that are wrapped | Integer | Up to 10 digits long |
| total_wrapped_units | The total number of units that are wrapped | Integer | Up to 10 digits long |
| total_wrapped_uom_units | The total number of units that are wrapped, in Unit of Measure terms | Integer | Up to 10 digits long |
| updated_at | A UTC datetime of when the order was last updated | Datetime |  |
