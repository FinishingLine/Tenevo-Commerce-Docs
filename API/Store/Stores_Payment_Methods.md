# Stores Payment Methods
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/paymentmethods/ | POST | This allows you to create store payment methods | [Details](#create-store-payment-methods) |
| /stores/:store/paymentmethods/:paymentmethod/ | DELETE | This allows you to delete a specified store payment method | [Details](#delete-store-payment-method) |
| /stores/:store/paymentmethods/ | PUT | This allows you to update store payment methods | [Details](#update-store-payment-methods) |
| /stores/:store/paymentmethods/:paymentmethod/ | PUT | This allows you to update store payment methods | [Details](#update-store-payment-methods) |
| /stores/:store/paymentmethods/ | GET | This allows you to list store payment methods | [Details](#view-store-payment-methods) |
| /stores/:store/paymentmethods/:paymentmethod/ | GET | This allows you to list store payment methods | [Details](#view-store-payment-methods) |

## Create Store Payment Methods
This allows you to create store payment methods

**URL** : `/stores/:store/paymentmethods/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| details | Details/Information about the payment method that you can use to inform the customer about | String | Up to 100 characters long | NULL | Y | N |
| gateway | A valid gateway code | String | Up to 20 characters long | NULL | Y | N |
| sort_order | The sort order to set order the methods by | Integer | Up to 3 digits long | 0 | N | N |

## Delete Store Payment Method
This allows you to delete a specified store payment method

**URL** : `/stores/:store/paymentmethods/:paymentmethod/`

**Method** : `DELETE`

## Update Store Payment Methods
This allows you to update store payment methods

**URL** : `/stores/:store/paymentmethods/`

**URL** : `/stores/:store/paymentmethods/:paymentmethod/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| details | Details/Information about the payment method that you can use to inform the customer about | String | Up to 100 characters long | NULL | Y | N |
| sort_order | The sort order to set order the methods by | Integer | Up to 3 digits long | 0 | N | N |

## View Store Payment Methods
This allows you to list store payment methods

**URL** : `/stores/:store/paymentmethods/`

**URL** : `/stores/:store/paymentmethods/:paymentmethod/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| accepted_cards | A comma seperated list of cards that the method accepts | String |  |
| default_instructions | Default instructions that the method sets | String | Up to 100 characters long |
| details | Details/Information about the payment method that you can use to inform the customer about | String | Up to 100 characters long |
| gateway | A valid gateway code | String | Up to 20 characters long |
| name | The name of the payment method | String | Up to 20 characters long |
| sort_order | The sort order to set order the methods by | Integer | Up to 3 digits long |
| type | The type of method | String | One of the following values: `creditcard`, `manual`, `paypal` |
