# Shipments Parcels
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments Parcels
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/:shipment/parcels/ | POST | This allows you to add parcels to a shipment | [Details](#create-shipment-parcels) |
| /shipments/:shipment/parcels/:parcel | DELETE | This allows you to delete a shipment parcel | [Details](#delete-shipment-parcel) |
| /shipments/:shipment/parcels/ | PUT | This allows you to update a specific shipment parcel | [Details](#update-shipment-parcels) |
| /shipments/:shipment/parcels/:parcel/ | PUT | This allows you to update a specific shipment parcel | [Details](#update-shipment-parcels) |
| /shipments/:shipment/parcels/ | GET | This allows you to list the parcels belonging to a shipment | [Details](#view-shipment-parcel) |
| /shipments/:shipment/parcels/:parcel/ | GET | This allows you to list the parcels belonging to a shipment | [Details](#view-shipment-parcel) |
| /shipments/:shipment/parcels/:parcel | DELETE | This allows you to delete a shipment parcel | [Details](#delete-shipment-parcel) |

## Create Shipment Parcels
This allows you to add parcels to a shipment

**URL** : `/shipments/:shipment/parcels/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| courier_reference | The couriers reference for the parcel, this could be the same as the tracking_code | String | Up to 100 characters long | NULL | N | N |
| depth | The depth of the parcel, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |
| has_aerosol | Indicates whether the parcel contains an aerosol, or not | Boolean |  | false | N | N |
| has_battery | Indicates whether the parcel contains an battery, or not | Boolean |  | false | N | N |
| has_corrosive | Indicates whether the parcel contains a corrosive item, or not | Boolean |  | false | N | N |
| has_fragile | Indicates whether the parcel contains a fragile item, or not | Boolean |  | false | N | N |
| has_hazardous | Indicates whether the parcel contains a hazardous item, or not | Boolean |  | false | N | N |
| has_itemwithbattery | Indicates whether the parcel contains an item with a battery, or not | Boolean |  | false | N | N |
| has_liquid | Indicates whether the parcel contains a liquid item, or not | Boolean |  | false | N | N |
| items | An array of items for the shipment parcel - see [Shipments Parcels Items](Shipments_Parcels_Items.md#create-shipments-parcels-items) | Array |  | NULL | N | N |
| label_data | A base 64 encoded string of the label. Maximum file size: 5MB. Accepted attachment extensions include: .gif, .jpg, & .png | String |  | NULL | N | N |
| length | The length of the parcel, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |
| parcel_number | The parcel number, must be unique to the shipment | Integer | Up to 4 digits long | 1 | N | N |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long | NULL | N | N |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long | NULL | N | N |
| tracking_code | The couriers tracking code, if the parcel can be tracked | String | Up to 100 characters long | NULL | N | N |
| tracking_status | The current tracking status of the parcel - can only be provided when tracking_code has a value | String | Up to 100 characters long | NULL | N | Y |
| weight | The weight of the parcel, including packaging, in grams | Integer | Up to 10 digits long | NULL | Y | N |
| width | The width of the parcel, in millimetres | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Shipment Parcel
This allows you to delete a shipment parcel

**URL** : `/shipments/:shipment/parcels/:parcel`

**Method** : `DELETE`

## Update Shipment Parcels
This allows you to update a specific shipment parcel

**URL** : `/shipments/:shipment/parcels/`

**URL** : `/shipments/:shipment/parcels/:parcel/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| courier_reference | The couriers reference for the parcel, this could be the same as the tracking_code | String | Up to 100 characters long | NULL | N | N |
| has_aerosol | Indicates whether the parcel contains an aerosol, or not | Boolean |  | false | N | N |
| has_battery | Indicates whether the parcel contains a battery, or not | Boolean |  | false | N | N |
| has_corrosive | Indicates whether the parcel contains a corrosive item, or not | Boolean |  | false | N | N |
| has_fragile | Indicates whether the parcel contains a fragile item, or not | Boolean |  | false | N | N |
| has_hazardous | Indicates whether the parcel contains a hazardous item, or not | Boolean |  | false | N | N |
| has_itemwithbattery | Indicates whether the parcel contains an item with a battery, or not | Boolean |  | false | N | N |
| has_liquid | Indicates whether the parcel contains a liquid item, or not | Boolean |  | false | N | N |
| items | An array of items for the shipment parcel - see [Shipments Parcels Items](Shipments_Parcels_Items.md#update-shipments-parcels-items) | Array |  | NULL | N | N |
| label_data | A base 64 encoded string of the label. Maximum file size: 5MB. Accepted attachment extensions include: .gif, .jpg, & .png | String |  | NULL | N | N |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long | NULL | N | N |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long | NULL | N | N |
| status | The status of the parcel | String | One of the following values: `closed`, `open`, `packed` | NULL | Y | N |
| tracking_code | The couriers tracking code, if the parcel can be tracked | String | Up to 100 characters long | NULL | N | N |
| tracking_status | The current tracking status of the parcel - can only be provided when tracking_code has a value | String | Up to 100 characters long | NULL | N | Y |
| weight | The weight of the parcel, including packaging, in grams | Integer | Up to 10 digits long | NULL | Y | N |

## View Shipment Parcel
This allows you to list the parcels belonging to a shipment

**URL** : `/shipments/:shipment/parcels/`

**URL** : `/shipments/:shipment/parcels/:parcel/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| courier_reference | The couriers reference for the parcel, this could be the same as the tracking_code | String | Up to 100 characters long |
| depth | The depth of the parcel, in millimetres | Integer | Up to 10 digits long |
| has_aerosol | Indicates whether the parcel contains an aerosol, or not | Boolean |  |
| has_battery | Indicates whether the parcel contains a battery, or not | Boolean |  |
| has_corrosive | Indicates whether the parcel contains a corrosive item, or not | Boolean |  |
| has_fragile | Indicates whether the parcel contains a fragile item, or not | Boolean |  |
| has_hazardous | Indicates whether the parcel contains a hazardous item, or not | Boolean |  |
| has_itemwithbattery | Indicates whether the parcel contains an item with a battery, or not | Boolean |  |
| has_liquid | Indicates whether the parcel contains a liquid item, or not | Boolean |  |
| is_customer_notified | Indicates whether the customer has been notified about the parcel, or not | Boolean |  |
| is_mixed | Indicates whether the parcel contains mixed items, or not | Boolean |  |
| items | An array of items for the shipment parcel - see [Shipments Parcels Items](Shipments_Parcels_Items.md#view-shipments-parcels-items) | Array |  |
| label_file | The name of the saved file for the shipping label | String |  |
| length | The length of the parcel, in millimetres | Integer | Up to 10 digits long |
| parcel_number | The parcel number, must be unique to the shipment | Integer | Up to 4 digits long |
| returnslabel_courier_name | The name of the courier providing the returns label | String | Up to 30 characters long |
| returnslabel_tracking_code | The tracking code of the returns label | String | Up to 100 characters long |
| shipment_reference | The unique reference for the shipment this parcel belongs to | String | Exactly 10 characters long |
| status | The status of the parcel | String | One of the following values: `closed`, `open`, `packed` |
| total_parcel_weight | The weight of all the items and packaging in the parcel, in grams | Integer | Up to 10 digits long |
| total_price | The total price of all the items in the parcel, inclusive of taxes, etc | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_tax | The total tax of all the items in the parcel | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_units | The total number of units in the parcel | Integer | Up to 10 digits long |
| total_uom_units | The total number of units in the parcel, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_weight | The total weight of all the items in the parcel, in grams | Integer | Up to 10 digits long |
| tracking_code | The couriers tracking code, if the parcel can be tracked | String | Up to 100 characters long |
| tracking_status | The current tracking status of the parcel | String | Up to 100 characters long |
| updated_at | A UTC datetime of when the parcel was updated | Datetime |  |
| weight | The weight of the parcel, including packaging, in grams | Integer | Up to 10 digits long |
| width | The width of the parcel, in millimetres | Integer | Up to 10 digits long |

## Delete Shipment Parcel
This allows you to delete a shipment parcel

**URL** : `/shipments/:shipment/parcels/:parcel`

**Method** : `DELETE`
