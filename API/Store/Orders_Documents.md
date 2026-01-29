# Orders Documents
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Orders Documents
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/documents/ | POST | This allows you to create a document for an order | [Details](#create-order-document) |
| /orders/:order/documents/:documents | DELETE | This allows you to delete a document from an order | [Details](#delete-order-documents) |
| /orders/:order/documents/ | PUT | This allows you to update a specific document in an order | [Details](#update-order-documents) |
| /orders/:order/documents/:document/ | PUT | This allows you to update a specific document in an order | [Details](#update-order-documents) |
| /orders/:order/documents/ | GET | This allows you to list the documents belonging to the order | [Details](#view-order-documents) |
| /orders/:order/documents/:document | GET | This allows you to list the documents belonging to the order | [Details](#view-order-documents) |

## Create Order Document
This allows you to create a document for an order

**URL** : `/orders/:order/documents/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| copies | Number of copies | Integer |  | 1 | N | N |
| data | A base 64 encoded string of the document | String |  | NULL | Y | N |
| format | Document format | String | One of the following values: `pdf`, `zpl` | NULL | Y | N |
| name | The document name | String | Up to 100 characters long | NULL | Y | N |
| size | Document size | String | One of the following values: `6x4inch`, `a4` | NULL | Y | N |
| type | The document type | String | One of the following values: `fba_labels`, `carrier_labels`, `other_label`, `pallet_labels`, `pallet_carrier_labels`, `commercial_invoice`, `despatch_note` | NULL | Y | N |

## Delete Order Documents
This allows you to delete a document from an order

**URL** : `/orders/:order/documents/:documents`

**Method** : `DELETE`

## Update Order Documents
This allows you to update a specific document in an order

**URL** : `/orders/:order/documents/`

**URL** : `/orders/:order/documents/:document/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| copies | Number of copies | Integer |  | 1 | N | N |
| name | The document name | String | Up to 100 characters long | NULL | Y | N |
| size | Document size | String | One of the following values: `6x4inch`, `a4` | NULL | Y | N |
| type | The document type | String | One of the following values: `fba_labels`, `carrier_labels`, `other_label`, `pallet_labels`, `pallet_carrier_labels`, `commercial_invoice`, `despatch_note` | NULL | Y | N |

## View Order Documents
This allows you to list the documents belonging to the order

**URL** : `/orders/:order/documents/`

**URL** : `/orders/:order/documents/:document`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| copies | Number of copies | Integer |  |
| file_path | The path to the document file | String | Up to 255 characters long |
| format | Document format | String | One of the following values: `pdf`, `zpl` |
| name | The document name | String | Up to 255 characters long |
| size | Document size | String | One of the following values: `6x4inch`, `a4` |
| type | The document type | String | One of the following values: `fba_labels`, `carrier_labels`, `other_label`, `pallet_labels`, `pallet_carrier_labels`, `commercial_invoice`, `despatch_note` |
