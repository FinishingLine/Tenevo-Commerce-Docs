# Products Variants
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product variants
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/variants/ | POST | This allows you to create product variants | [Details](#create-product-variants) |
| /products/:product/variants/:variant/ | DELETE | This allows you to delete a specified product variant | [Details](#delete-product-variant) |
| /products/:product/variants/ | PUT | This allows you to update product variants | [Details](#update-product-variants) |
| /products/:product/variants/:variant/ | PUT | This allows you to update product variants | [Details](#update-product-variants) |
| /products/:product/variants/ | GET | This allows you to list product variants | [Details](#view-product-variants) |
| /products/:product/variants/:variant/ | GET | This allows you to list product variants | [Details](#view-product-variants) |

## Create Product Variants
This allows you to create product variants

**URL** : `/products/:product/variants/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long | NULL | N | N |
| can_backorder | Indicates whether the variant can be back ordered, or not - a null value will use the parent product `can_backorder` status | Boolean |  | NULL | N | N |
| case_size | The number of units with the given case, must be provided with `case_variant_id` | Integer | Between 1 and 10 digits long | NULL | N | Y |
| case_variant_id | A valid Product Variant ID that is used as a complete case for this variant, must be provided with `case_size` | Integer |  | NULL | N | Y |
| components | An array of components for this product variant - see [Products Variants Components](Products_Variants_Components.md#create-products-variants-components) | Array |  | NULL | N | N |
| cost | The cost to you of one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| days_of_stock | The number of days of stock cover to have when replenishing inventory | Integer | Between 1 and 10 digits long | NULL | N | N |
| depth | The depth of one unit of the variant, in millimetres, required when product is physical and is simple | Integer | Between 1 and 10 digits long | 0 | N | Y |
| image_id | A valid Product Image ID | Integer |  | NULL | N | N |
| inventory_quantity | The amount of the variant that is held in stock in primary Unit of Measure units | Integer | Between 1 and 10 digits long | 0 | Y | N |
| lead_time | The number of days it will take between placing a purchase order and receiving stock | Integer | Between 1 and 10 digits long | NULL | N | N |
| length | The length of one unit of the variant, in millimetres, required when product is physical and is simple | Integer | Between 1 and 10 digits long | 0 | N | Y |
| low_stock_level | The amount of inventory remaining that can trigger a low stock level notification in primary Unit of Measure units (-1 = no alert) | Integer | Between 1 and 10 digits long | -1 | N | N |
| option_one_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_one_option_id | A valid Variant Option Option ID, must be provided and belong to option_one_group_id when set | Integer |  | NULL | N | Y |
| option_one_sort_order | The sort order option one | Integer | Between 1 and 3 digits long | 0 | N | N |
| option_three_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_three_option_id | A valid Variant Option Option ID, must be provided and belong to option_three_group_id when set | Integer |  | NULL | N | Y |
| option_three_sort_order | The sort order option three | Integer | Between 1 and 3 digits long | 0 | N | N |
| option_two_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_two_option_id | A valid Variant Option Option ID, must be provided and belong to option_two_group_id when set | Integer |  | NULL | N | Y |
| option_two_sort_order | The sort order option two | Integer | Between 1 and 3 digits long | 0 | N | N |
| price | The price that the buyer pays for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| release_date | A valid UTC datetime of when the variant should be released, will automatically change variant status to active if hidden | Datetime |  | NULL | N | N |
| rrp | The recommend retail price of the variant, usually set by the manufacturer, for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| sku | The SKU of the variant, must be unique | String | Between 1 and 100 characters long | NULL | Y | N |
| special_price | The price that the buyer pays for one unit of the variant, when the product is within a special price offering in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| status | The status of the variant | String | One of the following values: `active`, `hidden` | active | N | N |
| supplier_id | A valid Supplier ID; use `0` to inherit from the product | Integer |  | 0 | N | N |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long | NULL | N | N |
| uom_id | A valid UOM ID | Integer |  | NULL | Y | N |
| weight | The weight of one unit of the variant, in grams, required when product is physical and is simple | Integer | Between 1 and 10 digits long | 0 | N | Y |
| width | The width of one unit of the variant, in millimetres, required when product is physical and is simple | Integer | Between 1 and 10 digits long | 0 | N | Y |
| withdrawal_date | A valid UTC datetime of when the variant should be withdrawn, will automatically change variant status to hidden if active | Datetime |  | NULL | N | N |

## Delete Product Variant
This allows you to delete a specified product variant

**URL** : `/products/:product/variants/:variant/`

**Method** : `DELETE`

## Update Product Variants
This allows you to update product variants

**URL** : `/products/:product/variants/`

**URL** : `/products/:product/variants/:variant/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long | NULL | N | N |
| can_backorder | Indicates whether the variant can be back ordered, or not - a null value will use the parent product `can_backorder` status | Boolean |  | NULL | N | N |
| case_size | The number of units with the given case, must be provided with `case_variant_id` | Integer | Between 1 and 10 digits long | NULL | N | Y |
| case_variant_id | A valid Product Variant ID that is used as a complete case for this variant, must be provided with `case_size` | Integer |  | NULL | N | Y |
| components | An array of components for this product variant - see [Products Variants Components](Products_Variants_Components.md#update-products-variants-components) | Array |  | NULL | N | N |
| cost | The cost to you of one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| days_of_stock | The number of days of stock cover to have when replenishing inventory | Integer | Between 1 and 10 digits long | NULL | N | N |
| depth | The depth of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| image_id | A valid Product Image ID | Integer |  | NULL | N | N |
| inventory_quantity | The amount of the variant that is held in stock in primary Unit of Measure units | Integer | Between 1 and 10 digits long | 0 | Y | N |
| lead_time | The number of days it will take between placing a purchase order and receiving stock | Integer | Between 1 and 10 digits long | NULL | N | N |
| length | The length of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| low_stock_level | The amount of inventory remaining that can trigger a low stock level notification in primary Unit of Measure units (-1 = no alert) | Integer | Between 1 and 10 digits long | -1 | N | N |
| option_one_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_one_option_id | A valid Variant Option Option ID, must be provided and belong to option_one_group_id when set | Integer |  | NULL | N | Y |
| option_one_sort_order | The sort order option one | Integer | Between 1 and 3 digits long | 0 | N | N |
| option_three_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_three_option_id | A valid Variant Option Option ID, must be provided and belong to option_three_group_id when set | Integer |  | NULL | N | Y |
| option_three_sort_order | The sort order option three | Integer | Between 1 and 3 digits long | 0 | N | N |
| option_two_group_id | A valid Variant Option Group ID | Integer |  | NULL | N | N |
| option_two_option_id | A valid Variant Option Option ID, must be provided and belong to option_two_group_id when set | Integer |  | NULL | N | Y |
| option_two_sort_order | The sort order option two | Integer | Between 1 and 3 digits long | 0 | N | N |
| price | The price that the buyer pays for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| release_date | A valid UTC datetime of when the variant should be released, will automatically change variant status to active if hidden | Datetime |  | NULL | N | N |
| rrp | The recommend retail price of the variant, usually set by the manufacturer, for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| sku | The SKU of the variant, must be unique | String | Between 1 and 100 characters long | NULL | Y | N |
| special_price | The price that the buyer pays for one unit of the variant, when the product is within a special price offering in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 | 0.0000 | N | N |
| status | The status of the variant | String | One of the following values: `active`, `hidden` | active | N | N |
| supplier_id | A valid Supplier ID; use `0` to inherit from the product | Integer |  | 0 | N | N |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long | NULL | N | N |
| uom_id | A valid UOM ID | Integer |  | NULL | Y | N |
| weight | The weight of one unit of the variant, in grams, required when product is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| width | The width of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long | 0 | N | Y |
| withdrawal_date | A valid UTC datetime of when the variant should be withdrawn, will automatically change variant status to hidden if active | Datetime |  | NULL | N | N |

## View Product Variants
This allows you to list product variants

**URL** : `/products/:product/variants/`

**URL** : `/products/:product/variants/:variant/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long |
| can_backorder | Indicates whether the variant can be back ordered, or not - a null value indicates the parent product `can_backorder` status will be used | Boolean |  |
| can_purchase | Indicates whether the product can be purchased, or not (uses can_backorder as well as looking at variant stock levels) | Boolean |  |
| case_size | The number of units with the given case | Integer | Between 1 and 10 digits long |
| case_variant | The name of the Case Variant | String |  |
| case_variant_id | A valid Product Variant ID that is used as a complete case for this variant | Integer |  |
| components | An array of components for this product variant - see [Products Variants Components](Products_Variants_Components.md#view-products-variants-components) | Array |  |
| cost | The cost to you of one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| created_at | A UTC datetime of when the variant was created | Datetime |  |
| days_of_stock | The number of days of stock cover to have when replenishing inventory | Integer | Between 1 and 10 digits long |
| depth | The depth of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
| full_name | The full name of the variant (the product name and the options, seperated by / characters) | String |  |
| image_alt_text | The alt text for the product variant image | String |  |
| image_id | A valid Product Image ID | Integer |  |
| image_url | The relative URL to the product variant image | String |  |
| inventory_allocated | The amount of the variant that has been allocated to orders in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_available | The amount of the variant that is available to be purchased in primary Unit of Measure units (inventory_quantity - inventory_allocated) | Integer | Between 1 and 10 digits long |
| inventory_quantity | The amount of the variant that is held in stock in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_reserved | The amount of the variant that is reserved in a basket/checkout, this is included within inventory_available in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| lead_time | The number of days it will take between placing a purchase order and receiving stock | Integer | Between 1 and 10 digits long |
| length | The length of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
| low_stock_level | The amount of inventory remaining that can trigger a low stock level notification in primary Unit of Measure units (-1 = no alert) | Integer | Between 1 and 10 digits long |
| name | The name of the variant (uses the options, seperated by / characters) | String |  |
| option_one_default_sort_order | The default sort order for option one | Integer | Between 1 and 3 digits long |
| option_one_group | The name of the Variant Option Group | String | Up to 50 characters long |
| option_one_group_id | A valid Variant Option Group ID | Integer |  |
| option_one_option | The name of the Variant Option Option | String | Up to 50 characters long |
| option_one_option_id | A valid Variant Option Option ID | Integer |  |
| option_one_sort_order | The sort order option one | Integer | Between 1 and 3 digits long |
| option_three_default_sort_order | The default sort order for option three | Integer | Between 1 and 3 digits long |
| option_three_group | The name of the Variant Option Group | String | Up to 50 characters long |
| option_three_group_id | A valid Variant Option Group ID | Integer |  |
| option_three_option | The name of the Variant Option Option | String | Up to 50 characters long |
| option_three_option_id | A valid Variant Option Option ID | Integer |  |
| option_three_sort_order | The sort order option three | Integer | Between 1 and 3 digits long |
| option_two_default_sort_order | The default sort order for option two | Integer | Between 1 and 3 digits long |
| option_two_group | The name of the Variant Option Group | String | Up to 50 characters long |
| option_two_group_id | A valid Variant Option Group ID | Integer |  |
| option_two_option | The name of the Variant Option Option | String | Up to 50 characters long |
| option_two_option_id | A valid Variant Option Option ID | Integer |  |
| option_two_sort_order | The sort order option two | Integer | Between 1 and 3 digits long |
| price | The price that the buyer pays for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| product_type | The type of product this variant belongs to | String | One of the following values: `bundle`, `simple` |
| release_date | A valid UTC datetime of when the variant should be released, will automatically change variant status to active if hidden | Datetime |  |
| rrp | The recommend retail price of the variant, usually set by the manufacturer, for one unit of the variant in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| sku | The SKU of the variant | String | Between 1 and 100 characters long |
| special_price | The price that the buyer pays for one unit of the variant, when the product is within a special price offering in the primary Unit of Measure | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| status | The status of the variant | String | One of the following values: `active`, `hidden` |
| store_id | A valid Store ID | Integer |  |
| supplier | The name of the supplier | String | Up to 50 characters long |
| supplier_id | A valid Supplier ID; use `0` to inherit from the product | Integer |  |
| supplier_sku | The SKU or reference that the supplier uses for this item | String | Up to 100 characters long |
| uom | The name of the Unit of Measure | String |  |
| uom_cost | The cost to you of one unit of the variant, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_id | A valid UOM ID | Integer |  |
| uom_inventory_allocated | The amount of the variant that has been allocated to orders, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_available | The amount of the variant that is available to be purchased, in Unit of Measure terms(uom_inventory_quantity - uom_inventory_allocated) | Integer | Between 1 and 10 digits long |
| uom_inventory_quantity | The amount of the variant that is held in stock, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_reserved | The amount of the variant that is reserved in a basket/checkout, this is included within uom_inventory_available, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_price | The price that the buyer pays for one unit of the variant, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_quantity | The number of primary units that equal this Unit of Measure | Integer |  |
| uom_rrp | The recommend retail price of the variant, usually set by the manufacturer, for one unit of the variant, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| uom_special_price | The price that the buyer pays for one unit of the variant, when the product is within a special price offering, in Unit of Measure terms | Float | Up to 2 decimal places and no larger than 99999999.99 |
| updated_at | A UTC datetime of when the variant was updated | Datetime |  |
| url | The relative URL of the variant | String |  |
| weight | The weight of one unit of the variant, in grams, required when product is physical | Integer | Between 1 and 10 digits long |
| width | The width of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
| withdrawal_date | A valid UTC datetime of when the variant should be withdrawn, will automatically change variant status to hidden if active | Datetime |  |
