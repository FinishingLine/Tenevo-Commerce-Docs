# Returns Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Returns Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /returns/:return/items/ | POST | This allows you to add items to a return | [Details](#create-return-items) |
| /returns/:return/items/:item/ | DELETE | This allows you to delete a specified return item | [Details](#delete-return-item) |
| /returns/:return/items/ | PUT | This allows you to update a specific return item | [Details](#update-returns-items) |
| /returns/:return/items/:item/ | PUT | This allows you to update a specific return item | [Details](#update-returns-items) |
| /returns/:return/items/ | GET | This allows you to list the items belonging to a return | [Details](#view-returns-items) |
| /returns/:return/items/:item | GET | This allows you to list the items belonging to a return | [Details](#view-returns-items) |

## Create Return Items
This allows you to add items to a return

**URL** : `/returns/:return/items/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| exchangevariant_id | A valid Variant ID of the item required to be exchanged for - only for exchanging an item | Integer |  | NULL | N | Y |
| orderitem_id | A valid Order Item ID of the item being returned | Integer |  | NULL | Y | N |
| quantity_accepted | The total number of this item that have been accepted | Integer | Up to 10 digits long | 0 | N | N |
| quantity_received | The total number of this item that have been received | Integer | Up to 10 digits long | 0 | N | N |
| quantity_returning | The quantity of units of the item that are returning to be returned | Integer | Up to 10 digits long | NULL | Y | N |
| reason_details | Details of why the return is being made, required where `reason_id` requires it | String |  | NULL | N | Y |
| reason_id | A valid Reason ID of why item is being returned | Integer |  | NULL | Y | N |
| sku | A valid product SKU - only needed when orderitem_id is null | String | Up to 100 characters long | NULL | N | Y |
| uom | The Unit of Measure used for the given UOM Size - will use value from corresponding `orderitem_id` or `sku` when not provided | String | Up to 100 characters long | NULL | N | N |
| uom_size | The size of the corresponding Unit of Measure used - will use value from corresponding `orderitem_id` or `sku` when not provided | Integer | Up to 10 digits long | 1 | N | N |

## Delete Return Item
This allows you to delete a specified return item

**URL** : `/returns/:return/items/:item/`

**Method** : `DELETE`

## Update Returns Items
This allows you to update a specific return item

**URL** : `/returns/:return/items/`

**URL** : `/returns/:return/items/:item/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| orderitem_id | A valid Order Item ID of the item being returned - can only update when orderitem_id is null | Integer |  | NULL | N | Y |
| quantity_accepted | The total number of this item that have been accepted | Integer | Up to 10 digits long | 0 | Y | N |
| quantity_received | The total number of this item that have been received | Integer | Up to 10 digits long | 0 | Y | N |
| quantity_returning | The quantity of units of the item that are returning to be returned | Integer | Up to 10 digits long | NULL | Y | N |
| reason_details | Details of why the return is being made, only when the return status is application in progress | String |  | NULL | N | Y |
| reason_id | A valid Reason ID of why item is being returned, only when the return status is application in progress | Integer |  | NULL | N | Y |

## View Returns Items
This allows you to list the items belonging to a return

**URL** : `/returns/:return/items/`

**URL** : `/returns/:return/items/:item`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| country_of_manufacturer | The name of the country of where the product was manufacturered | String |  |
| country_of_manufacturer_iso2 | A valid ISO2 Country Code of where the product was manufacturered | String | Exactly 2 characters long |
| description | A description of the product | String |  |
| exchangevariant_id | The Variant ID of the variant being requested to exchange the variant for | Integer |  |
| hs_tariff_code | The HS Tariff Code of the product | Integer |  |
| image_alt_text | The alt text for the product variant image | String |  |
| image_url | The relative URL to the variant image | String |  |
| name | The name of the variant being returned | String | Up to 255 characters long |
| order_id | The Order ID that this returns item belongs to | Integer |  |
| order_item_id | The Order Item ID of the variant being returned | Integer |  |
| order_number | The Order Number that this returns item belongs to | String | Up to 50 characters long |
| parent_id | A valid Return Item that this item belongs to | Integer | Up to 10 digits long |
| product_id | The Product ID of the variant being returned | Integer |  |
| product_type | The type of product | String | Up to 100 characters long |
| quantity_accepted | The total number units of this item have been accepted | Integer | Up to 10 digits long |
| quantity_received | The total number units of this item have been received | Integer | Up to 10 digits long |
| quantity_rejected | The total number units of this item that have been rejected | Integer | Up to 10 digits long |
| quantity_returning | The total number units of this item that are being returned | Integer | Up to 10 digits long |
| reason | The Reason of why the variant is being returned | String |  |
| reason_details | Details of why the variant is being returned | String |  |
| reason_id | The Reason ID of why the variant is being returned | Integer |  |
| reference | A unique reference for this returns item | String | Exactly 10 characters long |
| resolution | The resolution to be performed once the item has been returned | String | One of the following values: `credit`, `exchange`, `refund`, `replacement`, `unknown` |
| sku | The SKU of the item being returned | String | Up to 255 characters long |
| status | The status of the returns item | String | One of the following values: `closed`, `open` |
| type | The type of item that the variant was | String | One of the following values: `bundle`, `simple` |
| unit_price | The price that the buyer paid for one unit of the variant | Float | Up to 2 decimal places and no larger than 99999999.99 |
| unit_weight | The weight of one unit of the product, in grams | Integer | Between 1 and 10 digits long |
| uom | The Unit of Measure used for the given UOM Size | String | Up to 100 characters long |
| uom_quantity_accepted | The total number units of this item have been accepted, in Unit of Measure terms | Integer |  |
| uom_quantity_received | The total number units of this item have been received, in Unit of Measure terms | Integer |  |
| uom_quantity_rejected | The total number units of this item that have been rejected, in Unit of Measure terms | Integer |  |
| uom_quantity_returning | The total number units of this item that are being returned, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_size | The size of the corresponding Unit of Measure used | Integer | Up to 10 digits long |
| variant_id | The Variant ID of the variant being returned | Integer |  |
