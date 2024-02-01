# ASNs Contents
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages advanced shipment notification contents
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /asns/:asn/contents/ | POST | This allows you to create contents for an adanced shipping notification | [Details](#create-advanced-shipment-notification-contents) |
| /asns/:asn/contents/:content | DELETE | This allows you to delete content from an advanced shipment notification | [Details](#delete-advanced-shipment-notification-contents) |
| /asns/:asn/contents/ | PUT | This allows you to update a specific content in an advanced shipment notification | [Details](#update-advanced-shipment-notification-contents) |
| /asns/:asn/contents/:content/ | PUT | This allows you to update a specific content in an advanced shipment notification | [Details](#update-advanced-shipment-notification-contents) |
| /asns/:asn/contents/ | GET | This allows you to list the contents belonging to the advanced shipment notification | [Details](#view-advanced-shipment-notification-contents) |
| /asns/:asn/contents/:content | GET | This allows you to list the contents belonging to the advanced shipment notification | [Details](#view-advanced-shipment-notification-contents) |

## Create Advanced Shipment Notification Contents
This allows you to create contents for an adanced shipping notification

**URL** : `/asns/:asn/contents/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| depth | The depth of the content, in mm | Integer | Up to 10 digits long | NULL | N | N |
| is_stackable | Indicates if the content are stackable, or not | Boolean |  | false | N | N |
| items | An array of items - see [ASNs Contents Items](ASNs_Contents_Items.md#create-asns-contents-items) | Array |  | NULL | N | N |
| length | The length of the content, in mm | Integer | Up to 10 digits long | NULL | N | N |
| tracking_number | The tracking number of the content | String | Up to 100 characters long | NULL | N | N |
| weight | The total weight of the content, including packaging, in g | Integer | Up to 10 digits long | NULL | N | N |
| width | The width of the content, in mm | Integer | Up to 10 digits long | NULL | N | N |

## Delete Advanced Shipment Notification Contents
This allows you to delete content from an advanced shipment notification

**URL** : `/asns/:asn/contents/:content`

**Method** : `DELETE`

## Update Advanced Shipment Notification Contents
This allows you to update a specific content in an advanced shipment notification

**URL** : `/asns/:asn/contents/`

**URL** : `/asns/:asn/contents/:content/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| depth | The depth of the contents, in mm | Integer | Up to 10 digits long | NULL | N | N |
| is_stackable | Indicates if the contents are stackable, or not | Boolean |  | false | N | N |
| items | An array of items - see [ASNs Contents Items](ASNs_Contents_Items.md#update-asns-contents-items) | Array |  | NULL | N | N |
| length | The length of the contents, in mm | Integer | Up to 10 digits long | NULL | N | N |
| tracking_number | The tracking number of the contents | String | Up to 100 characters long | NULL | N | N |
| weight | The total weight of the contents, including packaging, in g | Integer | Up to 10 digits long | NULL | N | N |
| width | The width of the contents, in mm | Integer | Up to 10 digits long | NULL | N | N |

## View Advanced Shipment Notification Contents
This allows you to list the contents belonging to the advanced shipment notification

**URL** : `/asns/:asn/contents/`

**URL** : `/asns/:asn/contents/:content`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| depth | The depth of the contents, in mm | Integer | Up to 10 digits long |
| is_mixed | Indicates if the contents contain mixed SKUs, or not | Boolean |  |
| is_stackable | Indicates if the contents are stackable, or not | Boolean |  |
| items | An array of items - see [ASNs Contents Items](ASNs_Contents_Items.md#view-asns-contents-items) | Array |  |
| length | The length of the contents, in mm | Integer | Up to 10 digits long |
| status | The status of the contents | String | One of the following values: `closed`, `open` |
| total_item_weight | The total item weight within the contents | Integer |  |
| total_items | The total number of unique items within the contents | Integer |  |
| total_units_accepted | The total number of units accepted within the contents | Integer |  |
| total_units_expected | The total number of units expected to be received within the contents | Integer |  |
| total_units_received | The total number of units received within the contents | Integer |  |
| total_units_rejected | The total number of units rejected within the contents | Integer |  |
| total_weight | The total weight of everything within the contents | Integer |  |
| tracking_number | The tracking number of the contents | String | Up to 100 characters long |
| weight | The total weight of the contents, including packaging, in g | Integer | Up to 10 digits long |
| width | The width of the contents, in mm | Integer | Up to 10 digits long |
