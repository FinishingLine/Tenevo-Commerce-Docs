# Stores
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Stores
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/ | POST | This allows you to create a store | [Details](#create-stores) |
| /stores/:store/ | DELETE | This allows you to delete a store | [Details](#delete-store) |
| /stores/ | PUT | This allows you to update a specific store | [Details](#update-stores) |
| /stores/:store/ | PUT | This allows you to update a specific store | [Details](#update-stores) |
| /stores/ | GET | This allows you to view a list of stores | [Details](#view-stores) |
| /stores/:store | GET | This allows you to view a list of stores | [Details](#view-stores) |

## Create Stores
This allows you to create a store

**URL** : `/stores/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| domain_id | The Domain ID that the store uses | Integer |  | NULL | Y | N |
| name | The name of the store | String | Up to 100 characters long | NULL | Y | N |
| settings | An array containing the stores settings - see [Stores Settings](Stores_Settings.md#create-stores-settings) | Array |  | NULL | Y | N |
| theme | The theme that the store uses | String | Up to 100 characters long | NULL | Y | N |
| uses_domain | Indicates whether the Store uses a domain, or not | Boolean |  | true | N | N |

## Delete Store
This allows you to delete a store

**URL** : `/stores/:store/`

**Method** : `DELETE`

## Update Stores
This allows you to update a specific store

**URL** : `/stores/`

**URL** : `/stores/:store/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| domain_id | The Domain ID that the store uses | Integer |  | NULL | Y | N |
| name | The name of the store | String | Up to 100 characters long | NULL | Y | N |
| settings | An array containing the stores settings - see [Stores Settings](Stores_Settings.md#update-stores-settings) | Array |  | NULL | Y | N |
| theme | The theme that the store uses | String | Up to 100 characters long | NULL | Y | N |
| uses_domain | Indicates whether the Store uses a domain, or not | Boolean |  | true | N | N |

## View Stores
This allows you to view a list of stores

**URL** : `/stores/`

**URL** : `/stores/:store`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| api_domain | The domain name for API access | String | Up to 200 characters long |
| collections | An array containing the stores collections - see [Stores Collections](Stores_Collections.md#view-stores-collections) | Array |  |
| content_domain | The domain name for Content access | String | Up to 200 characters long |
| domain | The domain name | String | Up to 100 characters long |
| domain_id | The Domain ID that the store uses | Integer |  |
| login_domain | The domain name for Login access | String | Up to 200 characters long |
| name | The name of the store | String | Up to 100 characters long |
| pages | An array containing the stores pages - see [Stores Pages](Stores_Pages.md#view-stores-pages) | Array |  |
| paymentmethods | An array containing the stores payment methods - see [Stores Payment Methods](Stores_Payment_Methods.md#view-stores-payment-methods) | Array |  |
| reference | A unique reference for this store | String | Exactly 10 characters long |
| returnsreasons | An array containing the stores returns reasons - see [Stores Returns Reasons](Stores_Returns_Reasons.md#view-stores-returns-reasons) | Array |  |
| settings | An array containing the stores settings - see [Stores Settings](Stores_Settings.md#view-stores-settings) | Array |  |
| shippingmethods | An array containing the stores shipping methods - see [Stores Shipping Methods](Stores_Shipping_Methods.md#view-stores-shipping-methods) | Array |  |
| status | The status of the store | String | Must have the value: `active` |
| supportmailboxes | An array containing the stores support mailboxes - see [Stores Support Mailboxes](Stores_Support_Mailboxes.md#view-stores-support-mailboxes) | Array |  |
| theme | The theme that the store uses | String | Up to 100 characters long |
| uses_domain | Indicates whether the Store uses a domain, or not | Boolean |  |
