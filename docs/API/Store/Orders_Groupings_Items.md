# Orders Groupings Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Order Grouping
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/groupings/:grouping/items/:item | DELETE | This allows you to delete an order grouping item | [Details](#delete-order-grouping-item) |
| /orders/:order/groupings/:grouping/items/ | POST | This allows you to create an order grouping item | [Details](#create-order-grouping-items) |
| /orders/:order/groupings/:grouping/items/:item | DELETE | This allows you to delete an order grouping item | [Details](#delete-order-grouping-item) |
| /orders/:order/groupings/:grouping/items/ | PUT | This allows you to update a specific order grouping item | [Details](#update-order-groupings-items) |
| /orders/:order/groupings/:grouping/items/:item/ | PUT | This allows you to update a specific order grouping item | [Details](#update-order-groupings-items) |
| /orders/:order/groupings/:grouping/items/ | GET | This allows you to list the order grouping items | [Details](#view-order-grouping-items) |
| /orders/:order/groupings/:grouping/items/:item | GET | This allows you to list the order grouping items | [Details](#view-order-grouping-items) |

## Delete Order Grouping Item
This allows you to delete an order grouping item

**URL** : `/orders/:order/groupings/:grouping/items/:item`

**Method** : `DELETE`

## Create Order Grouping Items
This allows you to create an order grouping item

**URL** : `/orders/:order/groupings/:grouping/items/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| gift_message | An optional gift message to provide if the item is a gift, only when is_gift is true | String |  | NULL | N | Y |
| is_gift | Indicates whether the item is a gift, or not | Boolean |  | false | N | N |
| is_unit_pricing | Indicates whether pricing is provided for one item, ie. a unit, or all the items, ie. the line - unit pricing will be scaled up to line pricing | Boolean |  | false | N | N |
| is_wrapped | Indicates whether the item should be wrapped, or not | Boolean |  | false | N | N |
| line_discount | The total discount, including tax, given on the line for the items, ignored if `is_unit_pricing` is true | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_discount_tax | The amount of tax that has been discounted on the line for the items, ignored if `is_unit_pricing` is true | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_price | The price of the items, before discounts and tax, ignored if `is_unit_pricing` is true | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_tax | The amount of tax paid on the line for the items, before discounts, ignored if `is_unit_pricing` is true | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_total | The total price paid on the line for the items, after discounts including tax, ignored if `is_unit_pricing` is true | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| name | The original name of the ordered item, uses the variant name if not provided | String | Up to 255 characters long | NULL | N | N |
| properties | A JSON encoded array of properties related to the item | String |  | NULL | N | N |
| quantity_ordered | The total number of this item ordered | Integer | Up to 10 digits long | 0 | Y | N |
| reference_id | A reference that corresponds to a Marketplace Order Item ID | String | Between 1 and 255 characters long | NULL | N | N |
| tax_rate | The rate of tax | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| unit_discount | The total discount, including tax, given on one item, ignored if `is_unit_pricing` is false | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_discount_tax | The amount of tax that has been discounted given on one item, ignored if `is_unit_pricing` is false | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_price | The price of the item, before discounts and tax, ignored if `is_unit_pricing` is false | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_tax | The amount of tax paid for the item, before discounts, ignored if `is_unit_pricing` is false | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_total | The total price paid for one unit of the item, after discounts including tax, ignored if `is_unit_pricing` is false | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| uom | The Unit of Measure used for the given UOM Size - will use value from corresponding `variant_id` when not provided | String | Up to 100 characters long | NULL | N | N |
| uom_size | The size of the corresponding Unit of Measure used - will use value from corresponding `variant_id` when not provided | Integer | Up to 10 digits long | 1 | N | N |
| variant_id | A valid Variant ID | Integer |  | NULL | Y | N |

## Delete Order Grouping Item
This allows you to delete an order grouping item

**URL** : `/orders/:order/groupings/:grouping/items/:item`

**Method** : `DELETE`

## Update Order Groupings Items
This allows you to update a specific order grouping item

**URL** : `/orders/:order/groupings/:grouping/items/`

**URL** : `/orders/:order/groupings/:grouping/items/:item/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| gift_message | An optional gift message to provide if the item is a gift, only when is_gift is true - can only update when order is open or on hold | String |  | NULL | N | Y |
| is_unit_pricing | Indicates whether pricing is provided for one item, ie. a unit, or all the items, ie. the line - unit pricing will be scaled up to line pricing | Boolean |  | false | N | N |
| line_discount | The total discount, including tax, given on the line for the items, ignored if `is_unit_pricing` is true - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_discount_tax | The amount of tax that has been discounted on the line for the items, ignored if `is_unit_pricing` is true - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_price | The price of the items, before discounts and tax, ignored if `is_unit_pricing` is true - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_tax | The amount of tax paid on the line for the items, before discounts, ignored if `is_unit_pricing` is true - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| line_total | The total price paid on the line for the items, after discounts including tax, ignored if `is_unit_pricing` is true - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| quantity_fulfilled | The total number of this item fulfilled | Integer | Up to 10 digits long | 0 | Y | N |
| quantity_ordered | The total number of this item ordered - can only update when order is open or on hold | Integer | Up to 10 digits long | 0 | Y | N |
| quantity_returned | The total number of this item returned | Integer | Up to 10 digits long | 0 | Y | N |
| tax_rate | The rate of tax - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | N |
| unit_discount | The total discount, including tax, given on one item, ignored if `is_unit_pricing` is false - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_discount_tax | The amount of tax that has been discounted given on one item, ignored if `is_unit_pricing` is false - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_price | The price of the item, before discounts and tax, ignored if `is_unit_pricing` is false - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_tax | The amount of tax paid for the item, before discounts, ignored if `is_unit_pricing` is false - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| unit_total | The total price paid for one unit of the item, after discounts including tax, ignored if `is_unit_pricing` is false - can only update when order is open or on hold | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | N | Y |
| uom | The Unit of Measure used for the given UOM Size - will use value from corresponding `variant_id` when not provided | String | Up to 100 characters long | NULL | N | N |
| uom_size | The size of the corresponding Unit of Measure used - will use value from corresponding `variant_id` when not provided | Integer | Up to 10 digits long | 1 | N | N |

## View Order Grouping Items
This allows you to list the order grouping items

**URL** : `/orders/:order/groupings/:grouping/items/`

**URL** : `/orders/:order/groupings/:grouping/items/:item`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| can_shipindividually | Indicates whether the item can be individually shipped, or not | Boolean |  |
| created_at | A UTC datetime of when the item was added to the order | Datetime |  |
| est_delivery_date | The estimated delivery date of the item | Date |  |
| fulfillment_service | The name of the Fulfillment Service | String |  |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long |
| gift_message | An optional gift message to provide if the item is a gift | String |  |
| image_alt_text | The alt text for the product variant image | String |  |
| image_url | The relative URL to the product variant image | String |  |
| is_exchangeable | Indicates whether the item is exchangeable, or not | Boolean |  |
| is_gift | Indicates whether the item is a gift, or not | Boolean |  |
| is_returnable | Indicates whether the item is returnable, or not | Boolean |  |
| is_wrapped | Indicates whether the item should be wrapped, or not | Boolean |  |
| line_discount | The total discount, including tax, given on the line for the items | Float | Up to 2 decimal places and no larger than 99999999.99 |
| line_discount_tax | The amount of tax that has been discounted on the line for the items | Float | Up to 2 decimal places and no larger than 99999999.99 |
| line_number | A unique numerical reference for this item | Integer | Up to 10 digits long |
| line_price | The price of the items, before discounts and tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| line_tax | The amount of tax paid on the line for the items, before discounts | Float | Up to 2 decimal places and no larger than 99999999.99 |
| line_total | The total price paid on the line for the items, after discounts including tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| name | The original name of the ordered item | String | Up to 255 characters long |
| parent_id | A valid Order Group Item that this item belongs to | Integer | Up to 10 digits long |
| properties | A JSON encoded array of properties related to the item | String |  |
| quantity_fulfillable | The total number units of this item that can be fulfilled | Integer | Up to 10 digits long |
| quantity_fulfilled | The total number units of this item fulfilled | Integer | Up to 10 digits long |
| quantity_ordered | The total number units of this item ordered | Integer | Up to 10 digits long |
| quantity_outstanding | The total number units of this item that have not yet been fulfilled | Integer | Up to 10 digits long |
| quantity_owned | The total number units of this item that the customer owns (ie. fulfilled minus returned) | Integer | Up to 10 digits long |
| quantity_returned | The total number units of this item returned | Integer | Up to 10 digits long |
| quantity_returning | The total number units of this item being returned | Integer | Up to 10 digits long |
| reference | A unique reference for this item | String | Exactly 10 characters long |
| reference_id | A reference that corresponds to a Marketplace Order Item ID | String | Between 1 and 255 characters long |
| sku | The original SKU of the ordered item | String | Up to 200 characters long |
| status | The fulfillment status of the item | String | One of the following values: `closed`, `open` |
| tax_rate | The rate of tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| type | The type of item that the variant was | String | One of the following values: `bundle`, `simple` |
| unit_discount | The total discount, including tax, given on one item, this is scaled down from line_discount | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| unit_discount_tax | The amount of tax that has been discounted given on one item, this is scaled down from line_discount_tax | Float | Up to 2 decimal places and no larger than 99999999.99 |
| unit_price | The price for unit of the item, before discounts and tax, this is scaled down from line_price | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| unit_tax | The amount of tax paid for the item, before discounts, this is scaled down from line_tax | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| unit_total | The total price paid for one unit of the item, after discounts including tax, this is scaled down from line_total | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| uom | The Unit of Measure used for the given UOM Size | String | Up to 100 characters long |
| uom_quantity_fulfillable | The total number units of this item that can be fulfilled, in Unit of Measure terms | Integer |  |
| uom_quantity_fulfilled | The total number units of this item fulfilled, in Unit of Measure terms | Integer |  |
| uom_quantity_ordered | The total number units of this item ordered, in Unit of Measure terms | Integer |  |
| uom_quantity_outstanding | The total number units of this item that have not yet been fulfilled, in Unit of Measure terms | Integer |  |
| uom_quantity_owned | The total number units of this item that the customer owns (ie. fulfilled minus returned), in Unit of Measure terms | Integer |  |
| uom_quantity_returned | The total number units of this item returned, in Unit of Measure terms | Integer |  |
| uom_quantity_returning | The total number units of this item being returned, in Unit of Measure terms | Integer |  |
| uom_size | The size of the corresponding Unit of Measure used | Integer | Up to 10 digits long |
| updated_at | A UTC datetime of when the item was last updated | Datetime |  |
| variant_id | A valid Variant ID | Integer |  |
