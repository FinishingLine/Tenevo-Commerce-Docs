# Customers Marketplaces
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages customer marketplaces
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /customers/:customer/marketplaces/ | POST | This allows you to create customer marketplaces | [Details](#create-customer-marketplaces) |
| /customers/:customer/marketplaces/:marketplace/ | DELETE | This allows you to delete a specified customer marketplace | [Details](#delete-customer-marketplace) |
| /customers/:customer/marketplaces/ | GET | This allows you to list customer marketplaces | [Details](#view-customer-marketplaces) |
| /customers/:customer/marketplaces/:marketplace/ | GET | This allows you to list customer marketplaces | [Details](#view-customer-marketplaces) |

## Create Customer Marketplaces
This allows you to create customer marketplaces

**URL** : `/customers/:customer/marketplaces/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| marketplace_customer_id | The Customer ID that the marketplace has given the customer - must be unique to the marketplace | String | Up to 64 characters long | NULL | Y | N |
| marketplace_id | A valid Marketplace ID | Integer |  | NULL | Y | N |

## Delete Customer Marketplace
This allows you to delete a specified customer marketplace

**URL** : `/customers/:customer/marketplaces/:marketplace/`

**Method** : `DELETE`

## View Customer Marketplaces
This allows you to list customer marketplaces

**URL** : `/customers/:customer/marketplaces/`

**URL** : `/customers/:customer/marketplaces/:marketplace/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| marketplace_customer_id | The Customer ID that the marketplace has given the customer - must be unique to the marketplace | String | Up to 64 characters long |
| marketplace_id | A valid Marketplace ID | Integer |  |
