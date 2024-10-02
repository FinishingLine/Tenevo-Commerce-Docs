# Customers
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages customers
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /customers/ | POST | This allows you to create customers | [Details](#create-customers) |
| /customers/:customer/ | DELETE | This allows you to delete a specified customer | [Details](#delete-customer) |
| /customers/ | PUT | This allows you to update customers | [Details](#update-customers) |
| /customers/:customer/ | PUT | This allows you to update customers | [Details](#update-customers) |
| /customers/ | GET | This allows you to list customers | [Details](#view-customers) |
| /customers/:customer/ | GET | This allows you to list customers | [Details](#view-customers) |

## Create Customers
This allows you to create customers

**URL** : `/customers/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses that this customer belongs to - see [Customers Addresses](Customers_Addresses.md#create-customers-addresses) | Array |  | NULL | N | N |
| amazon_fc | Indicates whether or not the customer is an Amazon Fulfillment Centre (for the purpose of FBA orders) | Boolean |  | NULL | N | N |
| approver_email | An email address of the approver, required when requires_approvedorders is true | String | Up to 50 characters long | NULL | N | Y |
| attrset_id | A valid Attribute Set ID | Integer |  | NULL | Y | N |
| company_name | The customers company name | String | Up to 100 characters long | NULL | N | N |
| company_number | The customers company number | String | Up to 50 characters long | NULL | N | N |
| customer_group_id | A valid Customer Group ID | Integer |  | NULL | N | N |
| customer_type | The type that the customer is | String | One of the following values: `b2b`, `b2c` | b2c | N | N |
| eori_number | The customers EORI number | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not | Boolean |  | false | N | N |
| marketplaces | An array of marketplaces that this customer belongs to - see [Customers Marketplaces](Customers_Marketplaces.md#create-customers-marketplaces) | Array |  | NULL | N | N |
| profiles | An array of profiles that this customer belongs to - see [Customers Profiles](Customers_Profiles.md#create-customers-profiles) | Array |  | NULL | N | N |
| requires_approvedorders | Indicates whether or not the customer requires orders to have approval being being processed | Boolean |  | NULL | N | N |
| status | The status of the customer | String | One of the following values: `active`, `hold` | active | N | N |
| store_id | A valid Store ID | Integer |  | NULL | Y | N |
| tax_class_id | A valid Tax Class ID | Integer |  | NULL | N | N |
| ukims_number | The customers UKIMS number | String | Up to 40 characters long | NULL | N | N |
| vat_number | The customers VAT number | String | Up to 50 characters long | NULL | N | N |

## Delete Customer
This allows you to delete a specified customer

**URL** : `/customers/:customer/`

**Method** : `DELETE`

## Update Customers
This allows you to update customers

**URL** : `/customers/`

**URL** : `/customers/:customer/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses that this customer belongs to - see [Customers Addresses](Customers_Addresses.md#update-customers-addresses) | Array |  | NULL | N | N |
| amazon_fc | Indicates whether or not the customer is an Amazon Fulfillment Centre (for the purpose of FBA orders) | Boolean |  | NULL | N | N |
| approver_email | An email address of the approver, required when requires_approvedorders is true | String | Up to 50 characters long | NULL | N | Y |
| company_name | The customers company name | String | Up to 100 characters long | NULL | N | N |
| company_number | The customers company number | String | Up to 50 characters long | NULL | N | N |
| customer_group_id | A valid Customer Group ID | Integer |  | NULL | N | N |
| customer_type | The type that the customer is | String | One of the following values: `b2b`, `b2c` | b2c | N | N |
| eori_number | The customers EORI number | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not | Boolean |  | false | N | N |
| profiles | An array of profiles that this customer belongs to - see [Customers Profiles](Customers_Profiles.md#update-customers-profiles) | Array |  | NULL | N | N |
| requires_approvedorders | Indicates whether or not the customer requires orders to have approval being being processed | Boolean |  | NULL | N | N |
| status | The status of the customer | String | One of the following values: `active`, `hold` | active | N | N |
| tax_class_id | A valid Tax Class ID | Integer |  | NULL | N | N |
| ukims_number | The customers UKIMS number | String | Up to 40 characters long | NULL | N | N |
| vat_number | The customers VAT number | String | Up to 50 characters long | NULL | N | N |

## View Customers
This allows you to list customers

**URL** : `/customers/`

**URL** : `/customers/:customer/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array of addresses that this customer belongs to - see [Customers Addresses](Customers_Addresses.md#view-customers-addresses) | Array |  |
| amazon_fc | Indicates whether or not the customer is an Amazon Fulfillment Centre (for the purpose of FBA orders) | Boolean |  |
| approver_email | An email address of the approver, required when requires_approvedorders is true | String | Up to 50 characters long |
| attrset | The Attribute Set of the customer | String | Up to 100 characters long |
| attrset_id | A valid Attribute Set ID | Integer |  |
| company_name | The customers company name | String | Up to 100 characters long |
| company_number | The customers company number | String | Up to 50 characters long |
| created_at | A UTC datetime of when the customer was created | Datetime |  |
| customer_group | The name of the Customer Group | String |  |
| customer_group_id | A valid Customer Group ID | Integer |  |
| customer_type | The type that the customer is | String | One of the following values: `b2b`, `b2c` |
| eori_number | The customers EORI number | String | Up to 20 characters long |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not | Boolean |  |
| marketplaces | An array of marketplaces that this customer belongs to - see [Customers Marketplaces](Customers_Marketplaces.md#view-customers-marketplaces) | Array |  |
| primary_first_name | The first name of the primary account holder | String |  |
| primary_full_name | The full name of the primary account holder | String |  |
| primary_last_name | The last name of the primary account holder | String |  |
| profiles | An array of profiles that this customer belongs to - see [Customers Profiles](Customers_Profiles.md#view-customers-profiles) | Array |  |
| reference | A unique reference for this customer | String | Exactly 10 characters long |
| requires_approvedorders | Indicates whether or not the customer requires orders to have approval being being processed | Boolean |  |
| status | The status of the customer | String | One of the following values: `active`, `hold` |
| store | The name of the Store | String |  |
| store_id | A valid Store ID | Integer |  |
| tax_class | The name of the Tax Class | String | Up to 100 characters long |
| tax_class_id | A valid Tax Class ID | Integer |  |
| ukims_number | The customers UKIMS number | String | Up to 40 characters long |
| updated_at | A UTC datetime of when the customer was updated | Datetime |  |
| vat_number | The customers VAT number | String | Up to 50 characters long |
