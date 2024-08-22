# Shipments
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/ | POST | This allows you to create a shipment | [Details](#create-shipment) |
| /shipments/:shipment/ | DELETE | This allows you to delete an shipment | [Details](#delete-shipment) |
| /shipments/ | PUT | This allows you to update a specific shipment | [Details](#update-shipments) |
| /shipments/:shipment/ | PUT | This allows you to update a specific shipment | [Details](#update-shipments) |
| /shipments/ | GET | This allows you to list the shipments belonging to the fulfillment | [Details](#view-shipments) |
| /shipments/:shipment/ | GET | This allows you to list the shipments belonging to the fulfillment | [Details](#view-shipments) |

## Create Shipment
This allows you to create a shipment

**URL** : `/shipments/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses for the shipment - see [Shipments Addresses](Shipments_Addresses.md#create-shipments-addresses) | Array |  | NULL | N | N |
| courier_code | The code used for the courier | String | Up to 20 characters long | NULL | N | N |
| courier_collection_code | The collection code used for the courier | String | Up to 20 characters long | NULL | N | N |
| courier_name | The name of the courier | String | Up to 30 characters long | NULL | N | N |
| created_at | A UTC datetime of when the shipment was created | Datetime |  | NULL | N | N |
| currency | The ISO 3 character currency code that the order was purchased in | String | Exactly 3 characters long | GBP | N | N |
| customer_id | A valid Customer ID | Integer |  | NULL | N | N |
| customs_duty_terms | Customs duty terms | String | Up to 4 characters long | NULL | N | N |
| eori | EORI | String | Up to 20 characters long | NULL | N | N |
| est_delivery_date | The estimated delivery date of the shipment | Date |  | NULL | N | N |
| ioss_number | The IOSS Number used for the shipment | String | Exactly 12 characters long | NULL | N | N |
| is_pallet | Indicates whether the shipment is a pallet shipment, or not | Boolean |  | 0 | N | N |
| is_returns | Indicates whether the shipment is a returns shipment, or not | Boolean |  | 0 | N | N |
| is_selflabelled | Indicates whether the shipment is self labelled, or not. | Boolean |  | 0 | N | N |
| notes | Notes relating to the shipment | String |  | NULL | N | N |
| owner_id | A valid Owner ID | Integer |  | NULL | Y | N |
| owner_type | The type of Owner | String | One of the following values: `order`, `return` | NULL | Y | N |
| pallets | An array of pallets for the shipment - see [Shipments Pallets](Shipments_Pallets.md#create-shipments-pallets) | Array |  | NULL | N | N |
| parcels | An array of parcels for the shipment - see [Shipments Parcels](Shipments_Parcels.md#create-shipments-parcels) | Array |  | NULL | N | N |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long | NULL | N | N |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long | NULL | N | N |
| shipment_reference | The reference that was given to the shipment | String | Up to 50 characters long | NULL | N | N |
| shipped_at | A UTC datetime of when the shipment was shipped | Datetime |  | NULL | N | N |
| status | The status of the shipment | String | One of the following values: `despatched`, `labelled`, `open` | NULL | N | N |
| updated_at | A UTC datetime of when the shipment was updated | Datetime |  | NULL | N | N |
| vat_recipient | The VAT number of the recipient | String | Up to 20 characters long | NULL | N | N |
| vat_sender | The VAT number of the sender | String | Up to 20 characters long | NULL | N | N |

## Delete Shipment
This allows you to delete an shipment

**URL** : `/shipments/:shipment/`

**Method** : `DELETE`

## Update Shipments
This allows you to update a specific shipment

**URL** : `/shipments/`

**URL** : `/shipments/:shipment/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| courier_code | The code used for the courier | String | Up to 20 characters long | NULL | N | N |
| courier_collection_code | The collection code used for the courier | String | Up to 20 characters long | NULL | N | N |
| courier_name | The name of the courier | String | Up to 30 characters long | NULL | N | N |
| est_delivery_date | The estimated delivery date of the shipment | Date |  | NULL | N | N |
| pallets | An array of pallets for the shipment - see [Shipments Pallets](Shipments_Pallets.md#update-shipments-pallets) | Array |  | NULL | N | N |
| parcels | An array of parcels for the shipment - see [Shipments Parcels](Shipments_Parcels.md#update-shipments-parcels) | Array |  | NULL | N | N |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long | NULL | N | N |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long | NULL | N | N |
| shipment_reference | The reference that was given to the shipment | String | Up to 50 characters long | NULL | N | N |
| shipped_at | The date and time the order was marked as shipped | Datetime |  | NULL | N | N |
| status | The status of the shipment | String | One of the following values: `cancelled`, `despatched`, `labelled`, `open` | NULL | N | N |

## View Shipments
This allows you to list the shipments belonging to the fulfillment

**URL** : `/shipments/`

**URL** : `/shipments/:shipment/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array of addresses for the shipment - see [Shipments Addresses](Shipments_Addresses.md#view-shipments-addresses) | Array |  |
| courier_code | The code used for the courier | String | Up to 20 characters long |
| courier_collection_code | The collection code used for the courier | String | Up to 20 characters long |
| courier_name | The name of the Courier | String |  |
| created_at | A UTC datetime of when the shipment was created | Datetime |  |
| currency | The ISO 3 character currency code that the order was purchased in | String | Exactly 3 characters long |
| customer_id | A valid Customer ID | Integer |  |
| customs_duty_terms | Customs duty terms | String | Up to 4 characters long |
| eori | EORI | String | Up to 20 characters long |
| est_delivery_date | The estimated delivery date of the shipment | Date |  |
| ioss_number | The IOSS Number used for the shipment | String | Exactly 12 characters long |
| is_customer_notified | Indicates whether the customer has been fully notified about the shipment, or not | Boolean |  |
| is_pallet | Indicates whether the shipment is a pallet shipment, or not | Boolean |  |
| is_returns | Indicates whether the shipment is a returns shipment, or not | Boolean |  |
| is_selflabelled | Indicates whether the shipment is self labelled, or not | Boolean |  |
| notes | Notes relating to the shipment | String |  |
| owner_id | A valid Owner ID | Integer |  |
| owner_type | The type of Owner | String | One of the following values: `order`, `return` |
| pallets | An array of pallets for the shipment - see [Shipments Pallets](Shipments_Pallets.md#view-shipments-pallets) | Array |  |
| parcels | An array of parcels for the shipment - see [Shipments Parcels](Shipments_Parcels.md#view-shipments-parcels) | Array |  |
| reference | A unique reference for this shipment | String | Exactly 10 characters long |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long |
| shipment_reference | The reference that was given to the shipment | String | Up to 50 characters long |
| shipped_at | A UTC datetime of when the shipment was shipped | Datetime |  |
| status | The status of the shipment | String | One of the following values: `cancelled`, `despatched`, `labelled`, `open` |
| store_id | A valid Store ID | Integer |  |
| total_items | The total number of unique items in the shipment | Integer | Up to 10 digits long |
| total_pallet_weight | The weight of all the pallets in the shipment, including packaging, in grams | Integer | Up to 10 digits long |
| total_pallets | The total number of pallets in the shipment | Integer | Up to 10 digits long |
| total_parcel_weight | The weight of all the parcels in the shipment, including packaging, in grams | Integer | Up to 10 digits long |
| total_parcels | The total number of parcels in the shipment | Integer | Up to 10 digits long |
| total_price | The total price of all the items in the shipment, inclusive of taxes, etc | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_shipment_weight | The total weight of the shipment, in grams | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_tax | The total tax of all the items in the shipment | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_units | The total number of units in the shipment | Integer | Up to 10 digits long |
| total_uom_units | The total number of units in the shipment, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_weight | The total weight of all the items in the shipment, in grams | Integer | Up to 10 digits long |
| updated_at | A UTC datetime of when the shipment was updated | Datetime |  |
| vat_recipient | The VAT number of the recipient | String | Up to 20 characters long |
| vat_sender | The VAT number of the sender | String | Up to 20 characters long |
