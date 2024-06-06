# ASNs
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Advanced Shipment Notifications
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /asns/ | POST | This allows you to create an advanced shipment notification | [Details](#create-advanced-shipment-notification) |
| /asns/:asn/ | DELETE | This allows you to delete an advanced shipment notification | [Details](#delete-advanced-shipment-notification) |
| /asns/ | PUT | This allows you to update a specific advanced shipment notification | [Details](#update-advanced-shipment-notifications) |
| /asns/:asn/ | PUT | This allows you to update a specific advanced shipment notification | [Details](#update-advanced-shipment-notifications) |
| /asns/ | GET | This allows you to list the advanced shipment notifications | [Details](#view-advanced-shipment-notifications) |
| /asns/:asn/ | GET | This allows you to list the advanced shipment notifications | [Details](#view-advanced-shipment-notifications) |

## Create Advanced Shipment Notification
This allows you to create an advanced shipment notification

**URL** : `/asns/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses - see [ASNs Addresses](ASNs_Addresses.md#create-asns-addresses) | Array |  | NULL | N | N |
| booked_in_from | A UTC datetime of when the items are booked in from | Datetime |  | NULL | N | N |
| booked_in_until | A UTC datetime of when the items are booked in until | Datetime |  | NULL | N | N |
| carrier | The name of the carrier transporting the items | String | Up to 20 characters long | NULL | N | N |
| carrier_contact_email | The email address of a contact at the carrier transporting the items | String |  | NULL | N | N |
| carrier_contact_name | The name of a contact of the carrier transporting the items | String | Up to 50 characters long | NULL | N | N |
| carrier_contact_phone | The phone number of a contact of the carrier transporting the items | String | Up to 20 characters long | NULL | N | N |
| contents | An array of contents - see [ASNs Contents](ASNs_Contents.md#create-asns-contents) | Array |  | NULL | N | N |
| currency | A valid ISO 3 character currency code that the item values are provided in | String | Exactly 3 characters long | NULL | Y | N |
| expected_arrival_date | The date when the items are expected to arrive | Date |  | NULL | N | N |
| goods_in_type | The goods in type for this ASN - `tbc` can only be used when status is `draft` | String | One of the following values: `20ft container`, `40ft container`, `40fthc container`, `carton`, `pallet`, `tbc` | NULL | Y | N |
| is_pickup_managed | Indicates whether or not the receiver is to pickup the items | Boolean |  | false | N | N |
| notes | Notes related to this ASN | String |  | NULL | N | N |
| pickup_from | A UTC datetime of when to pickup the items from; required when `is_pickup_managed` is `true` | Datetime |  | NULL | N | Y |
| pickup_until | A UTC datetime of when to pickup the items until; required when `is_pickup_managed` is `true` | Datetime |  | NULL | N | Y |
| reference | A unique reference used to identify the ASN | String | Up to 50 characters long | NULL | Y | N |
| status | The status of the ASN | String | One of the following values: `draft`, `pending` | draft | N | N |
| supplier_id | A valid Supplier ID | Integer |  | NULL | N | N |

## Delete Advanced Shipment Notification
This allows you to delete an advanced shipment notification

**URL** : `/asns/:asn/`

**Method** : `DELETE`

## Update Advanced Shipment Notifications
This allows you to update a specific advanced shipment notification

**URL** : `/asns/`

**URL** : `/asns/:asn/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses - see [ASNs Addresses](ASNs_Addresses.md#update-asns-addresses) | Array |  | NULL | N | N |
| booked_in_from | A UTC datetime of when the items are booked in from | Datetime |  | NULL | N | N |
| booked_in_until | A UTC datetime of when the items are booked in until | Datetime |  | NULL | N | N |
| cancelled_at | A UTC datetime of when the ASN was cancelled | Datetime |  | NOW | N | N |
| carrier | The name of the carrier transporting the items | String | Up to 20 characters long | NULL | N | N |
| carrier_contact_email | The email address of a contact at the carrier transporting the items | String |  | NULL | N | N |
| carrier_contact_name | The name of a contact of the carrier transporting the items | String | Up to 50 characters long | NULL | N | N |
| carrier_contact_phone | The phone number of a contact of the carrier transporting the items | String | Up to 20 characters long | NULL | N | N |
| completed_at | A UTC datetime of when the ASN was completed | Datetime |  | NOW | N | N |
| contents | An array of items - see [ASNs Contents](ASNs_Contents.md#update-asns-contents) | Array |  | NULL | N | N |
| currency | A valid ISO 3 character currency code that the item values are provided in | String | Exactly 3 characters long | NULL | Y | N |
| expected_arrival_date | The date when the items are expected to arrive | Date |  | NULL | N | N |
| goods_in_type | The goods in type for this ASN - `tbc` can only be used when status is `draft` | String | One of the following values: `20ft container`, `40ft container`, `40fthc container`, `carton`, `pallet`, `tbc` | NULL | Y | N |
| is_pickup_managed | Indicates whether or not the receiver is to pickup the items | Boolean |  | false | N | N |
| notes | Notes related to this ASN | String |  | NULL | N | N |
| pickup_from | A UTC datetime of when to pickup the items from; required when `is_pickup_managed` is `true` | Datetime |  | NULL | N | Y |
| pickup_until | A UTC datetime of when to pickup the items until; required when `is_pickup_managed` is `true` | Datetime |  | NULL | N | Y |
| received_at | A UTC datetime of when the items were received | Datetime |  | NOW | N | N |
| reference | A unique reference used to identify the ASN | String | Up to 50 characters long | NULL | Y | N |
| status | The status of the ASN | String | One of the following values: `cancelled`, `completed`, `draft`, `in transit`, `part received`, `pending`, `received` | draft | N | N |

## View Advanced Shipment Notifications
This allows you to list the advanced shipment notifications

**URL** : `/asns/`

**URL** : `/asns/:asn/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array of addresses - see [ASNs Addresses](ASNs_Addresses.md#view-asns-addresses) | Array |  |
| asn_number | A unique Tenevo reference for the ASN | Integer | Exactly 10 digits long |
| booked_in_from | A UTC datetime of when the items are booked in from | Datetime |  |
| booked_in_until | A UTC datetime of when the items are booked in until | Datetime |  |
| cancelled_at | A UTC datetime of when the ASN was cancelled | Datetime |  |
| carrier | The name of the carrier transporting the items | String | Up to 20 characters long |
| carrier_contact_email | The email address of a contact at the carrier transporting the items | String |  |
| carrier_contact_name | The name of a contact of the carrier transporting the items | String | Up to 50 characters long |
| carrier_contact_phone | The phone number of a contact of the carrier transporting the items | String | Up to 20 characters long |
| completed_at | A UTC datetime of when the ASN was completed | Datetime |  |
| contents | An array of contents - see [ASNs Contents](ASNs_Contents.md#view-asns-contents) | Array |  |
| created_at | A UTC datetime of when the ASN was created | Datetime |  |
| currency | A valid ISO 3 character currency code that the item values are provided in | String | Exactly 3 characters long |
| expected_arrival_date | The date when the items are expected to arrive | Date |  |
| goods_in_type | The goods in type for this ASN | String | One of the following values: `20ft container`, `40ft container`, `40fthc container`, `carton`, `pallet`, `tbc` |
| is_pickup_managed | Indicates whether or not the receiver is to pickup the items | Boolean |  |
| notes | Notes related to this ASN | String |  |
| pickup_from | A UTC datetime of when to pickup the items from | Datetime |  |
| pickup_until | A UTC datetime of when to pickup the items until | Datetime |  |
| received_at | A UTC datetime of when the items were received | Datetime |  |
| reference | A unique reference used to identify the ASN | String | Up to 50 characters long |
| status | The status of the ASN | String | One of the following values: `cancelled`, `completed`, `draft`, `in transit`, `part received`, `pending`, `received` |
| supplier | The name of the Supplier | String |  |
| supplier_id | A valid Supplier ID | Integer |  |
| total_item_weight | The total item weight within the ASN | Integer |  |
| total_items | The total number of unique items within the ASN | Integer |  |
| total_units_accepted | The total number of units accepted within the ASN | Integer |  |
| total_units_expected | The total number of units expected to be received within the ASN | Integer |  |
| total_units_received | The total number of units received within the ASN | Integer |  |
| total_units_rejected | The total number of units rejected within the ASN | Integer |  |
| total_weight | The total weight of everything within the ASN | Integer |  |
| updated_at | A UTC datetime of when the ASN was updated | Datetime |  |
