# Products Variants Components
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product variant components
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/variants/:variant/components/ | POST | This allows you to create product variant components | [Details](#create-product-variant-components) |
| /products/:product/variants/:variant/components/:component/ | DELETE | This allows you to delete a specified product variant component | [Details](#delete-product-variant-component) |
| /products/:product/variants/:variant/components/ | PUT | This allows you to update product variant components | [Details](#update-product-variant-components) |
| /products/:product/variants/:variant/components/:component/ | PUT | This allows you to update product variant components | [Details](#update-product-variant-components) |
| /products/:product/variants/:variant/components/ | GET | This allows you to list product variant components | [Details](#view-product-variant-components) |
| /products/:product/variants/:variant/components/:component/ | GET | This allows you to list product variant components | [Details](#view-product-variant-components) |

## Create Product Variant Components
This allows you to create product variant components

**URL** : `/products/:product/variants/:variant/components/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_shipindividually | Indicates whether the component can be shipped individually, or not | Boolean |  | false | N | N |
| component_variant_id | A valid Product Variant ID, must be unique to variant | Integer |  | NULL | Y | N |
| quantity | The number of the variant to include | Integer |  | NULL | Y | N |

## Delete Product Variant Component
This allows you to delete a specified product variant component

**URL** : `/products/:product/variants/:variant/components/:component/`

**Method** : `DELETE`

## Update Product Variant Components
This allows you to update product variant components

**URL** : `/products/:product/variants/:variant/components/`

**URL** : `/products/:product/variants/:variant/components/:component/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_shipindividually | Indicates whether the component can be shipped individually, or not | Boolean |  | false | N | N |
| quantity | The number of the variant to include | Integer |  | NULL | Y | N |

## View Product Variant Components
This allows you to list product variant components

**URL** : `/products/:product/variants/:variant/components/`

**URL** : `/products/:product/variants/:variant/components/:component/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| barcode | The manufacturers barcode on the item | String | Between 1 and 100 characters long |
| can_backorder | Indicates whether the variant can be back ordered, or not - a null value indicates the parent product `can_backorder` status will be used | Boolean |  |
| can_purchase | Indicates whether the product can be purchased, or not (uses can_backorder as well as looking at variant stock levels) | Boolean |  |
| can_shipindividually | Indicates whether the component can be shipped individually, or not | Boolean |  |
| component_variant_id | A valid Product Variant ID | Integer |  |
| created_at | A UTC datetime of when the component was created | Datetime |  |
| depth | The depth of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
| full_name | The full name of the variant (the product name and the options, seperated by / characters) | String |  |
| image_alt_text | The alt text for the product variant image | String |  |
| image_id | A valid Product Image ID | Integer |  |
| image_url | The relative URL to the product variant image | String |  |
| inventory_allocated | The amount of the variant that has been allocated to orders in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_available | The amount of the variant that is available to be purchased (inventory_quantity - inventory_allocated) in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_quantity | The amount of the variant that is held in stock in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| inventory_reserved | The amount of the variant that is reserved in a basket/checkout, this is included within inventory_available in primary Unit of Measure units | Integer | Between 1 and 10 digits long |
| length | The length of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
| name | The name of the variant (uses the options, seperated by / characters) | String |  |
| quantity | The number of the variant to include | Integer |  |
| sku | The SKU of the variant | String | Between 1 and 100 characters long |
| uom | The name of the Unit of Measure | String |  |
| uom_id | A valid UOM ID | Integer |  |
| uom_inventory_allocated | The amount of the variant that has been allocated to orders, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_available | The amount of the variant that is available to be purchased (uom_inventory_quantity - uom_inventory_allocated), in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_quantity | The amount of the variant that is held in stock, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_inventory_reserved | The amount of the variant that is reserved in a basket/checkout, this is included within uom_inventory_available, in Unit of Measure terms | Integer | Between 1 and 10 digits long |
| uom_quantity | The number of primary units that equal this Unit of Measure | Integer |  |
| updated_at | A UTC datetime of when the component was updated | Datetime |  |
| weight | The weight of one unit of the variant, in grams, required when product is physical | Integer | Between 1 and 10 digits long |
| width | The width of one unit of the variant, in millimetres, required when product is physical | Integer | Between 1 and 10 digits long |
