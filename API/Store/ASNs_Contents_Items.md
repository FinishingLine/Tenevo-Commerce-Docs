# ASNs Contents Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages advanced shipment notification content items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /asns/:asn/contents/:content/items | POST | This allows you to create items for an advanced shipment notification content | [Details](#create-advanced-shipment-notification-content-items) |
| /asns/:asn/contents/:content/items/:item | DELETE | This allows you to delete items from an advanced shipment notification content | [Details](#delete-advanced-shipment-notification-content-items) |
| /asns/:asn/contents/:content/items/ | PUT | This allows you to update a specific item in an advanced shipment notification content | [Details](#update-advanced-shipment-notification-content-items) |
| /asns/:asn/contents/:content/items/:item | PUT | This allows you to update a specific item in an advanced shipment notification content | [Details](#update-advanced-shipment-notification-content-items) |
| /asns/:asn/contents/:content/items/ | GET | This allows you to list the items belonging to the advanced shipment notification content | [Details](#view-advanced-shipment-notification-content-items) |
| /asns/:asn/contents/:content/items/:items | GET | This allows you to list the items belonging to the advanced shipment notification content | [Details](#view-advanced-shipment-notification-content-items) |

## Create Advanced Shipment Notification Content Items
This allows you to create items for an advanced shipment notification content

**URL** : `/asns/:asn/contents/:content/items`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Up to 100 characters long | NULL | N | N |
| batch_number | The batch number for the item | String | Up to 20 characters long | NULL | N | N |
| expiry_date | The expiry date for the items | Date |  | NULL | N | N |
| name | The name of the item; required if `variant_id` is not provided | String | Up to 100 characters long | NULL | N | Y |
| po_line_number | The Line Number that this item refers to within the Purchase Order/Order | Integer | Up to 10 digits long | NULL | N | N |
| po_number | The Purchase Order/Order Number that this item was ordered on | String | Up to 30 characters long | NULL | N | N |
| quantity_expected | The number of units that are expected to be received of this items | Integer | Between 1 and 10 digits long | NULL | Y | N |
| sku | The SKU of the item; required if `variant_id` is not provided | String | Up to 100 characters long | NULL | N | Y |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long | NULL | N | N |
| variant_id | A valid Product Variant ID | Integer |  | NULL | N | N |
| weight | The unit weight of the item, in g | Integer | Up to 10 digits long | NULL | N | N |

## Delete Advanced Shipment Notification Content Items
This allows you to delete items from an advanced shipment notification content

**URL** : `/asns/:asn/contents/:content/items/:item`

**Method** : `DELETE`

## Update Advanced Shipment Notification Content Items
This allows you to update a specific item in an advanced shipment notification content

**URL** : `/asns/:asn/contents/:content/items/`

**URL** : `/asns/:asn/contents/:content/items/:item`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Up to 100 characters long | NULL | N | N |
| batch_number | The batch number for the item | String | Up to 20 characters long | NULL | N | N |
| expiry_date | The expiry date for the items | Date |  | NULL | N | N |
| name | The name of the item | String | Up to 100 characters long | NULL | Y | N |
| po_line_number | The Line Number that this item refers to within the Purchase Order/Order | Integer | Up to 10 digits long | NULL | N | N |
| po_number | The Purchase Order/Order Number that this item was ordered on | String | Up to 30 characters long | NULL | N | N |
| quantity_accepted | The number of units that were accepted of this item | Integer | Between 1 and 10 digits long | 0 | N | N |
| quantity_expected | The number of units that are expected to be received of this items | Integer | Between 1 and 10 digits long | NULL | Y | N |
| quantity_received | The number of units that were received of this item | Integer | Between 1 and 10 digits long | 0 | N | N |
| sku | The SKU of the item | String | Up to 100 characters long | NULL | Y | N |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long | NULL | N | N |
| weight | The unit weight of the item, in g | Integer | Up to 10 digits long | NULL | N | N |

## View Advanced Shipment Notification Content Items
This allows you to list the items belonging to the advanced shipment notification content

**URL** : `/asns/:asn/contents/:content/items/`

**URL** : `/asns/:asn/contents/:content/items/:items`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Up to 100 characters long |
| batch_number | The batch number for the item | String | Up to 20 characters long |
| expiry_date | The expiry date for the items | Date |  |
| name | The name of the item | String | Up to 100 characters long |
| po_line_number | The Line Number that this item refers to within the Purchase Order/Order | Integer | Up to 10 digits long |
| po_number | The Purchase Order/Order Number that this item was ordered on | String | Up to 30 characters long |
| quantity_accepted | The number of units that were accepted of this item | Integer | Between 1 and 10 digits long |
| quantity_expected | The number of units that are expected to be received of this items | Integer | Between 1 and 10 digits long |
| quantity_received | The number of units that were received of this item | Integer | Between 1 and 10 digits long |
| quantity_rejected | The number of units that were rejected of this item | Integer | Between 1 and 10 digits long |
| sku | The SKU of the item | String | Up to 100 characters long |
| status | The status of the item | String | One of the following values: `closed`, `open` |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long |
| weight | The unit weight of the item, in g | Integer | Up to 10 digits long |
