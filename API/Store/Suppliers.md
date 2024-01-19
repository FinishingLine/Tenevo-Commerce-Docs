# Suppliers
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages suppliers
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /suppliers/ | POST | This allows you to create a supplier | [Details](#create-supplier) |
| /suppliers/:supplier/ | DELETE | This allows you to delete a supplier | [Details](#delete-supplier) |
| /suppliers/ | PUT | This allows you to update a specific supplier | [Details](#update-suppliers) |
| /suppliers/:supplier/ | PUT | This allows you to update a specific supplier | [Details](#update-suppliers) |
| /suppliers/ | GET | This allows you to list suppliers | [Details](#view-suppliers) |
| /suppliers/:supplier/ | GET | This allows you to list suppliers | [Details](#view-suppliers) |

## Create Supplier
This allows you to create a supplier

**URL** : `/suppliers/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| account_number | The account number the supplier has setup | String | Up to 50 characters long | NULL | N | N |
| addresses | An array containing the addresses associated with the supplier - see [Suppliers Addresses](Suppliers_Addresses.md#create-suppliers-addresses) | Array |  | NULL | N | N |
| name | The name of the supplier | String | Between 1 and 50 characters long | NULL | Y | N |
| reference | A reference that is used to identify the supplier | String | Up to 50 characters long | NULL | N | N |
| status | The status of the supplier | String | One of the following values: `active`, `disabled` | active | N | N |

## Delete Supplier
This allows you to delete a supplier

**URL** : `/suppliers/:supplier/`

**Method** : `DELETE`

## Update Suppliers
This allows you to update a specific supplier

**URL** : `/suppliers/`

**URL** : `/suppliers/:supplier/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| account_number | The account number the supplier has setup | String | Up to 50 characters long | NULL | N | N |
| addresses | An array containing the addresses associated with the supplier - see [Suppliers Addresses](Suppliers_Addresses.md#update-suppliers-addresses) | Array |  | NULL | N | N |
| items | An array containing the items associated with the supplier - see [Suppliers Items](Suppliers_Items.md#update-suppliers-items) | Array |  | NULL | N | N |
| name | The name of the supplier | String | Between 1 and 50 characters long | NULL | Y | N |
| reference | A reference that is used to identify the supplier | String | Up to 50 characters long | NULL | N | N |
| status | The status of the supplier | String | One of the following values: `active`, `disabled` | active | N | N |

## View Suppliers
This allows you to list suppliers

**URL** : `/suppliers/`

**URL** : `/suppliers/:supplier/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| account_number | The account number the supplier has setup | String | Up to 50 characters long |
| addresses | An array containing the addresses associated with the supplier - see [Suppliers Addresses](Suppliers_Addresses.md#view-suppliers-addresses) | Array |  |
| created_at | A UTC datetime of when the supplier was created | Datetime |  |
| items | An array containing the items associated with the supplier - see [Suppliers Items](Suppliers_Items.md#view-suppliers-items) | Array |  |
| name | The name of the supplier | String | Between 1 and 50 characters long |
| reference | A reference that is used to identify the supplier | String | Up to 50 characters long |
| status | The status of the supplier | String | One of the following values: `active`, `disabled` |
| updated_at | A UTC datetime of when the supplier was last updated | Datetime |  |
