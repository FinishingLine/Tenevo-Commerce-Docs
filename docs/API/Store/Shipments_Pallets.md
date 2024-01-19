# Shipments Pallets
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments Pallets
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/:shipment/pallets/ | POST | This allows you to add pallets to a shipment | [Details](#create-shipment-pallets) |
| /shipments/:shipment/pallets/:pallet | DELETE | This allows you to delete a shipment pallet | [Details](#delete-shipment-pallet) |
| /shipments/:shipment/pallets/ | PUT | This allows you to update a specific shipment pallet | [Details](#update-shipment-pallets) |
| /shipments/:shipment/pallets/:pallet/ | PUT | This allows you to update a specific shipment pallet | [Details](#update-shipment-pallets) |
| /shipments/:shipment/pallets/ | GET | This allows you to list the pallets belonging to a shipment | [Details](#view-shipment-pallet) |
| /shipments/:shipment/pallets/:pallet/ | GET | This allows you to list the pallets belonging to a shipment | [Details](#view-shipment-pallet) |

## Create Shipment Pallets
This allows you to add pallets to a shipment

**URL** : `/shipments/:shipment/pallets/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| courier_reference | The couriers reference for the pallet, this could be the same as the tracking_code | String | Up to 100 characters long | NULL | N | N |
| depth | The depth of the pallet, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |
| height | The height of the pallet, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |
| label_data | A base 64 encoded string of the label. Maximum file size: 5MB. Accepted attachment extensions include: .gif, .jpg, & .png | String |  | NULL | N | N |
| length | The length of the pallet, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |
| pallet_number | The pallet number, must be unique to the shipment | Integer | Up to 3 digits long | 1 | N | N |
| parcels | An array of parcels for the shipment pallet - see [Shipments Pallets Parcels](Shipments_Pallets_Parcels.md#create-shipments-pallets-parcels) | Array |  | NULL | N | N |
| tracking_code | The couriers tracking code, if the pallet can be tracked | String | Up to 100 characters long | NULL | N | N |
| tracking_status | The current tracking status of the pallet - can only be provided when tracking_code has a value | String | Up to 100 characters long | NULL | N | Y |
| weight | The weight of the pallet, including packaging, in grams | Integer | Up to 10 digits long | NULL | Y | N |
| width | The width of the pallet, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Shipment Pallet
This allows you to delete a shipment pallet

**URL** : `/shipments/:shipment/pallets/:pallet`

**Method** : `DELETE`

## Update Shipment Pallets
This allows you to update a specific shipment pallet

**URL** : `/shipments/:shipment/pallets/`

**URL** : `/shipments/:shipment/pallets/:pallet/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| courier_reference | The couriers reference for the pallet, this could be the same as the tracking_code | String | Up to 100 characters long | NULL | N | N |
| label_data | A base 64 encoded string of the label. Maximum file size: 5MB. Accepted attachment extensions include: .gif, .jpg, & .png | String |  | NULL | N | N |
| parcels | An array of parcels for the shipment pallet - see [Shipments Pallets Parcels](Shipments_Pallets_Parcels.md#update-shipments-pallets-parcels) | Array |  | NULL | N | N |
| status | The status of the pallet | String | One of the following values: `closed`, `open`, `packed` | NULL | Y | N |
| tracking_code | The couriers tracking code, if the pallet can be tracked | String | Up to 100 characters long | NULL | N | N |
| tracking_status | The current tracking status of the pallet - can only be provided when tracking_code has a value | String | Up to 100 characters long | NULL | N | Y |
| weight | The weight of the pallet, including packaging, in grams | Integer | Up to 10 digits long | NULL | Y | N |

## View Shipment Pallet
This allows you to list the pallets belonging to a shipment

**URL** : `/shipments/:shipment/pallets/`

**URL** : `/shipments/:shipment/pallets/:pallet/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| courier_reference | The couriers reference for the pallet, this could be the same as the tracking_code | String | Up to 100 characters long |
| depth | The depth of the pallet, in millimetres | Integer | Up to 10 digits long |
| has_aerosol | Indicates whether the pallet contains an aerosol, or not | Boolean |  |
| has_battery | Indicates whether the pallet contains a battery, or not | Boolean |  |
| has_corrosive | Indicates whether the pallet contains a corrosive item, or not | Boolean |  |
| has_fragile | Indicates whether the pallet contains a fragile item, or not | Boolean |  |
| has_hazardous | Indicates whether the pallet contains a hazardous item, or not | Boolean |  |
| has_itemwithbattery | Indicates whether the pallet contains an item with a battery, or not | Boolean |  |
| has_liquid | Indicates whether the pallet contains a liquid item, or not | Boolean |  |
| height | The height of the pallet, in millimetres | Integer | Up to 10 digits long |
| label_file | The name of the saved file for the shipping label | String |  |
| length | The length of the pallet, in millimetres | Integer | Up to 10 digits long |
| pallet_number | The pallet number, must be unique to the shipment | Integer | Up to 3 digits long |
| parcels | An array of parcels for the shipment pallet - see [Shipments Pallets Parcels](Shipments_Pallets_Parcels.md#view-shipments-pallets-parcels) | Array |  |
| shipment_reference | The unique reference for the shipment this pallet belongs to | String | Exactly 10 characters long |
| status | The status of the pallet | String | One of the following values: `closed`, `open`, `packed` |
| total_packaging_weight | The total weight of all the packaging on the pallet, in grams | Integer | Up to 10 digits long |
| total_pallet_weight | The weight of the base pallet and all the items and packaging on the pallet, in grams | Integer | Up to 10 digits long |
| total_parcels | The total number of parcels on the pallet | Integer | Up to 10 digits long |
| total_price | The total price of all the items in the pallet, inclusive of taxes, etc | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_tax | The total tax of all the items in the pallet | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_units | The total number of units in the pallet | Integer | Up to 10 digits long |
| total_uom_units | The total number of units in the pallet, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_weight | The total weight of all the items in the pallet, in grams | Integer | Up to 10 digits long |
| tracking_code | The couriers tracking code, if the pallet can be tracked | String | Up to 100 characters long |
| tracking_status | The current tracking status of the pallet | String | Up to 100 characters long |
| updated_at | A UTC datetime of when the pallet was updated | Datetime |  |
| weight | The weight of the pallet, including packaging, in grams | Integer | Up to 10 digits long |
| width | The width of the pallet, in millimetres | Integer | Up to 10 digits long |
