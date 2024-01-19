# Suppliers Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages supplier items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /suppliers/:supplier/items/ | PUT | This allows you to update supplier items | [Details](#update-supplier-items) |
| /suppliers/:supplier/items/:item/ | PUT | This allows you to update supplier items | [Details](#update-supplier-items) |
| /suppliers/:supplier/items/ | GET | This allows you to list supplier items | [Details](#view-supplier-items) |
| /suppliers/:supplier/items/:item/ | GET | This allows you to list supplier items | [Details](#view-supplier-items) |

## Update Supplier Items
This allows you to update supplier items

**URL** : `/suppliers/:supplier/items/`

**URL** : `/suppliers/:supplier/items/:item/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long | NULL | Y | N |
| cost | The cost to you of one unit of the item in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| days_of_stock | The number of days of stock cover to have when replenishing inventory | Integer | Between 1 and 10 digits long | NULL | N | N |
| depth | The depth of one unit of the item, in millimetres, required when item is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| lead_time | The number of days it will take between placing a purchase order and receiving stock | Integer | Between 1 and 10 digits long | NULL | N | N |
| length | The length of one unit of the item, in millimetres, required when item is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| low_stock_level | The amount of inventory remaining that can trigger a low stock level notification in primary Unit of Measure units (-1 = no alert) | Integer | Between 1 and 10 digits long | -1 | N | N |
| price | The price that the buyer pays for one unit of the item in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| rrp | The recommend retail price of the item, usually set by the manufacturer, for one unit of the item in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| sku | The SKU of the item, must be unique | String | Between 1 and 100 characters long | NULL | Y | N |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long | NULL | N | N |
| uom_id | A valid UOM ID | Integer |  | NULL | Y | N |
| weight | The weight of one unit of the item, in grams, required when item is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| width | The width of one unit of the item, in millimetres, required when item is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |

## View Supplier Items
This allows you to list supplier items

**URL** : `/suppliers/:supplier/items/`

**URL** : `/suppliers/:supplier/items/:item/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long |
| cost | The cost to you of one unit of the item in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| days_of_stock | The number of days of stock cover to have when replenishing inventory | Integer | Between 1 and 10 digits long |
| depth | The depth of one unit of the item, in millimetres, required when supplier is physical | Integer | Between 1 and 10 digits long |
| full_name | The full name of the item (the supplier name and the options, seperated by / characters) | String |  |
| image_url | The relative URL to the supplier item image | String |  |
| inventory_allocated | The amount of the item that has been allocated to orders in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_available | The amount of the item that is available to be purchased in primary Unit of Measure units (inventory_quantity - inventory_allocated) | Integer | Between 1 and 10 digits long |
| inventory_quantity | The amount of the item that is held in stock in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_reserved | The amount of the item that is reserved in a basket/checkout, this is included within inventory_available in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| lead_time | The number of days it will take between placing a purchase order and receiving stock | Integer | Between 1 and 10 digits long |
| length | The length of one unit of the item, in millimetres, required when supplier is physical | Integer | Between 1 and 10 digits long |
| low_stock_level | The amount of inventory remaining that can trigger a low stock level notification in primary Unit of Measure units (-1 = no alert) | Integer | Between 1 and 10 digits long |
| name | The name of the item (uses the options, seperated by / characters) the buyer pays for one unit of the item in the primary Unit of Measure | String |  |
| product_id | A valid Product ID | Integer |  |
| rrp | The recommend retail price of the item, usually set by the manufacturer, for one unit of the item in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| sku | The SKU of the item | String | Between 1 and 100 characters long |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long |
| uom | The name of the Unit of Measure | String |  |
| uom_cost | The cost to you of one unit of the item, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_id | A valid UOM ID | Integer |  |
| uom_inventory_allocated | The amount of the item that has been allocated to orders, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_available | The amount of the item that is available to be purchased, in Unit of Measure terms(uom_inventory_quantity - uom_inventory_allocated) | Integer | Between 1 and 10 digits long |
| uom_inventory_quantity | The amount of the item that is held in stock, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_reserved | The amount of the item that is reserved in a basket/checkout, this is included within uom_inventory_available, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_price | The price that the buyer pays for one unit of the item, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_quantity | The number of primary units that equal this Unit of Measure | Integer |  |
| uom_rrp | The recommend retail price of the item, usually set by the manufacturer, for one unit of the item, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_set | The name of the Unit of Measure Set | String |  |
| uom_set_id | A valid UOM Set ID | Integer |  |
| variant_id | A valid Product Variant ID | Integer |  |
| weight | The weight of one unit of the item, in grams, required when supplier is physical | Integer | Between 1 and 10 digits long |
| width | The width of one unit of the item, in millimetres, required when supplier is physical | Integer | Between 1 and 10 digits long |
