# Products
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages products
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/ | POST | This allows you to create products | [Details](#create-products) |
| /products/:product/ | DELETE | This allows you to delete a specified product | [Details](#delete-product) |
| /products/ | PUT | This allows you to update products | [Details](#update-products) |
| /products/:product/ | PUT | This allows you to update products | [Details](#update-products) |
| /products/ | GET | This allows you to list products in the warehouse | [Details](#view-products) |
| /products/:product/ | GET | This allows you to list products in the warehouse | [Details](#view-products) |

## Create Products
This allows you to create products

**URL** : `/products/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attrset_id | A valid Attribute Set ID | Integer |  | NULL | Y | N |
| can_backorder | Indicates whether the product can be back ordered, or not | Boolean |  | false | N | N |
| collections | An array of collections that this product belongs to - see [Products Collections](Products_Collections.md#create-products-collections) | Array |  | NULL | N | N |
| contains_battery | Indicates, where the product is an electronic item, whether it contains a battery, or not | Boolean |  | false | N | N |
| country_of_manufacturer_iso2 | A valid ISO2 Country Code of where the product was manufacturered | String | Exactly 2 characters long | NULL | N | N |
| customergroups | An array of customer groups that can access this product - see [Products Customer Groups](Products_Customer_Groups.md#create-products-customer-groups) | Array |  | NULL | N | N |
| description | A description of the product | String |  | NULL | N | N |
| export_description | A description of the product when exporting it | String |  | NULL | N | N |
| export_product_type | The type of product being exported | String | Up to 100 characters long | NULL | N | N |
| fabric_content | The main manufacturing material of the product | String | Up to 100 characters long | NULL | N | N |
| fda_number | The FDA Number of the product, where shipping the product to the US | String | Up to 100 characters long | NULL | N | N |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long | default | N | N |
| hs_tariff_code | The HS Tariff Code of the product | Integer |  | NULL | N | N |
| images | An array of images of this product - see [Products Images](Products_Images.md#create-products-images) | Array |  | NULL | N | N |
| is_aerosol | Indicates whether the product is an aerosol, or not | Boolean |  | false | N | N |
| is_battery | Indicates whether the product is a battery, or not | Boolean |  | false | N | N |
| is_corrosive | Indicates whether the product is corrosive, or not | Boolean |  | false | N | N |
| is_exchangeable | Indicates whether the product is exchangeable, or not | Boolean |  | false | N | N |
| is_exportable | Indicates whether the product is exportable, or not | Boolean |  | false | N | N |
| is_fragile | Indicates whether the product is fragile, or not | Boolean |  | false | N | N |
| is_hazardous | Indicates whether the product is hazardous, or not | Boolean |  | false | N | N |
| is_liquid | Indicates whether the product is a liquid, or not | Boolean |  | false | N | N |
| is_physical | Indicates whether the product is a physical product, or not | Boolean |  | true | N | N |
| is_returnable | Indicates whether the product is returnable, or not | Boolean |  | true | N | N |
| media_id | A valid Media ID - this will be used for the featured product image, search results, etc | Integer |  | NULL | N | N |
| name | The name of the product | String | Up to 100 characters long | NULL | Y | N |
| page_description | Used for SEO, the description of the page - uses description when not set | String |  | NULL | N | N |
| page_title | Used for SEO, the title of the page - uses title when not set | String | Up to 100 characters long | NULL | N | N |
| release_date | A valid UTC datetime of when the product is being released | Array |  | NULL | N | N |
| requires_batchcapture | Indicates whether the product requires a batch number to be captured, or not | Boolean |  | false | N | N |
| requires_expirycapture | Indicates whether the product requires an expiry date to be captured, or not | Boolean |  | false | N | N |
| requires_serialcapture | Indicates whether the product requires a serial number to be captured, or not | Boolean |  | false | N | N |
| special_price_from | A valid UTC datetime of when to show the special price from | Datetime |  | NULL | N | N |
| special_price_until | A valid UTC datetime of when to show the special price until | Datetime |  | NULL | N | N |
| status | The status of the product | String | One of the following values: `active`, `hidden` | active | N | N |
| store_id | A valid Store ID | Integer |  | NULL | Y | N |
| supplier_id | A valid Supplier ID | Integer |  | NULL | N | N |
| tax_class_id | A valid Tax Class ID | Integer |  | NULL | N | N |
| theme_layout | The theme layout of the product | String | Up to 100 characters long | product | N | N |
| type | The type of product | String | One of the following values: `bundle`, `simple` | simple | N | N |
| uom_set_id | A valid UOM Set ID | Integer |  | NULL | Y | N |
| url_key | The URL key of the product - will automatically derive from the product name if not specified | String | Up to 100 characters long | NULL | N | N |
| variants | An array of variants of this product - see [Products Variants](Products_Variants.md#create-products-variants) | Array |  | NULL | N | N |
| withdrawal_date | A valid UTC datetime of when the product is being withdrawn from the sale | Array |  | NULL | N | N |

## Delete Product
This allows you to delete a specified product

**URL** : `/products/:product/`

**Method** : `DELETE`

## Update Products
This allows you to update products

**URL** : `/products/`

**URL** : `/products/:product/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| can_backorder | Indicates whether the product can be back ordered, or not | Boolean |  | false | N | N |
| collections | An array of collections that this product belongs to - see [Products Collections](Products_Collections.md#update-products-collections) | Array |  | NULL | N | N |
| contains_battery | Indicates, where the product is an electronic item, whether it contains a battery, or not | Boolean |  | false | N | N |
| country_of_manufacturer_iso2 | A valid ISO2 Country Code of where the product was manufacturered | String | Exactly 2 characters long | NULL | N | N |
| customergroups | An array of customer groups that this product belongs to - see [Products Customer Groups](Products_Customer_Groups.md#update-products-customer-groups) | Array |  | NULL | N | N |
| description | A description of the product | String |  | NULL | N | N |
| export_description | A description of the product when exporting it | String |  | NULL | N | N |
| export_product_type | The type of product being exported | String | Up to 100 characters long | NULL | N | N |
| fabric_content | The main manufacturing material of the product | String | Up to 100 characters long | NULL | N | N |
| fda_number | The FDA Number of the product, where shipping the product to the US | String | Up to 100 characters long | NULL | N | N |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long | default | N | N |
| hs_tariff_code | The HS Tariff Code of the product | Integer |  | NULL | N | N |
| images | An array of images of this product - see [Products Images](Products_Images.md#update-products-images) | Array |  | NULL | N | N |
| is_aerosol | Indicates whether the product is an aerosol, or not | Boolean |  | false | N | N |
| is_battery | Indicates whether the product is a battery, or not | Boolean |  | false | N | N |
| is_corrosive | Indicates whether the product is corrosive, or not | Boolean |  | false | N | N |
| is_exchangeable | Indicates whether the product is exchangeable, or not | Boolean |  | false | N | N |
| is_exportable | Indicates whether the product is exportable, or not | Boolean |  | false | N | N |
| is_fragile | Indicates whether the product is fragile, or not | Boolean |  | false | N | N |
| is_hazardous | Indicates whether the product is hazardous, or not | Boolean |  | false | N | N |
| is_liquid | Indicates whether the product is a liquid, or not | Boolean |  | false | N | N |
| is_physical | Indicates whether the product is a physical product, or not | Boolean |  | true | N | N |
| is_returnable | Indicates whether the product is returnable, or not | Boolean |  | true | N | N |
| media_id | A valid Media ID - this will be used for the featured product image, search results, etc | Integer |  | NULL | N | N |
| name | The name of the product | String | Up to 100 characters long | NULL | Y | N |
| page_description | Used for SEO, the description of the page - uses description when not set | String |  | NULL | N | N |
| page_title | Used for SEO, the title of the page - uses title when not set | String | Up to 100 characters long | NULL | N | N |
| release_date | A valid UTC datetime of when the product is being released | String | Up to 100 characters long | NULL | N | N |
| requires_batchcapture | Indicates whether the product requires a batch number to be captured, or not | Boolean |  | false | N | N |
| requires_expirycapture | Indicates whether the product requires an expiry date to be captured, or not | Boolean |  | false | N | N |
| requires_serialcapture | Indicates whether the product requires a serial number to be captured, or not | Boolean |  | false | N | N |
| special_price_from | A valid UTC datetime of when to show the special price from | Datetime |  | NULL | N | N |
| special_price_until | A valid UTC datetime of when to show the special price until | Datetime |  | NULL | N | N |
| status | The status of the product | String | One of the following values: `active`, `hidden` | active | N | N |
| supplier_id | A valid Supplier ID | Integer |  | NULL | N | N |
| tax_class_id | A valid Tax Class ID | Integer |  | NULL | N | N |
| theme_layout | The theme layout of the product | String | Up to 100 characters long | product | N | N |
| type | The type of product, only when `type` is simple | String | One of the following values: `bundle`, `simple` | simple | N | Y |
| uom_set_id | A valid UOM Set ID | Integer |  | NULL | Y | N |
| url_key | The URL key of the product - will automatically derive from the product name if not specified | String | Up to 100 characters long | NULL | N | N |
| variants | An array of variants of this product - see [Products Variants](Products_Variants.md#update-products-variants) | Array |  | NULL | N | N |
| withdrawal_date | A valid UTC datetime of when the product is being withdrawn from the sale | Array |  | NULL | N | N |

## View Products
This allows you to list products in the warehouse

**URL** : `/products/`

**URL** : `/products/:product/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attrset | The Attribute Set of the product | String | Up to 100 characters long |
| attrset_id | A valid Attribute Set ID | Integer |  |
| can_backorder | Indicates whether the product can be back ordered, or not | Boolean |  |
| can_purchase | Indicates whether the product can be purchased, or not (uses can_backorder as well as looking at variant stock levels) | Boolean |  |
| collections | An array of collections that this product belongs to - see [Products Collections](Products_Collections.md#view-products-collections) | Array |  |
| contains_battery | Indicates, where the product is an electronic item, whether it contains a battery, or not | Boolean |  |
| country_of_manufacturer | The name of the country of where the product was manufacturered | String |  |
| country_of_manufacturer_iso2 | A valid ISO2 Country Code of where the product was manufacturered | String | Exactly 2 characters long |
| created_at | A UTC datetime of when the product was created | Datetime |  |
| customer_group_restriction | A comma seperated string of Customer Group IDs that can view the product, if empty, anyone can view the product | String |  |
| customergroups | An array of customer groups that can access this product - see [Products Customer Groups](Products_Customer_Groups.md#view-products-customer-groups) | Array |  |
| description | A description of the product | String |  |
| export_description | A description of the product when exporting it | String |  |
| export_product_type | The type of product being exported | String | Up to 100 characters long |
| fabric_content | The main manufacturing material of the product | String | Up to 100 characters long |
| fda_number | The FDA Number of the product, where shipping the product to the US | String | Up to 100 characters long |
| featured_image_alt_text | The alt text for the featured product image | String |  |
| featured_image_url | The relative URL to the featured product image | String |  |
| fulfillment_service | The name of the Fulfillment Service | String |  |
| fulfillment_service_id | A valid Fulfillment Service ID | Integer | Up to 10 digits long |
| has_multiple_variants | Indicates whether the product has multiple variants available for purchase | Boolean |  |
| hs_tariff_code | The HS Tariff Code of the product | Integer |  |
| images | An array of images of this product - see [Products Images](Products_Images.md#view-products-images) | Array |  |
| is_aerosol | Indicates whether the product is an aerosol, or not | Boolean |  |
| is_battery | Indicates whether the product is a battery, or not | Boolean |  |
| is_corrosive | Indicates whether the product is corrosive, or not | Boolean |  |
| is_exchangeable | Indicates whether the product is exchangeable, or not | Boolean |  |
| is_exportable | Indicates whether the product is exportable, or not | Boolean |  |
| is_fragile | Indicates whether the product is fragile, or not | Boolean |  |
| is_hazardous | Indicates whether the product is hazardous, or not | Boolean |  |
| is_liquid | Indicates whether the product is a liquid, or not | Boolean |  |
| is_physical | Indicates whether the product is a physical product, or not | Boolean |  |
| is_returnable | Indicates whether the product is returnable, or not | Boolean |  |
| media_id | A valid Media ID - this will be used for the featured product image, search results, etc | Integer |  |
| name | The name of the product | String | Up to 100 characters long |
| page_description | Used for SEO, the description of the page - uses description when not set | String |  |
| page_title | Used for SEO, the title of the page - uses title when not set | String | Up to 100 characters long |
| price_max | The highest price of all variants | Float | Up to 3 decimal places and no larger than 9999999.999 |
| price_min | The lowest price of all variants | Float | Up to 3 decimal places and no larger than 9999999.999 |
| release_date | A valid UTC datetime of when the product is being released | String | Up to 100 characters long |
| requires_batchcapture | Indicates whether the product requires a batch number to be captured, or not | Boolean |  |
| requires_expirycapture | Indicates whether the product requires an expiry date to be captured, or not | Boolean |  |
| requires_serialcapture | Indicates whether the product requires a serial number to be captured, or not | Boolean |  |
| special_price_from | A valid UTC datetime of when to show the special price from | Datetime |  |
| special_price_until | A valid UTC datetime of when to show the special price until | Datetime |  |
| status | The status of the product | String | One of the following values: `active`, `hidden` |
| store | The name of the Store | String | Up to 100 characters long |
| store_id | A valid Store ID | Integer |  |
| subscriptions | An array of subscriptions of this product - see [Products Subscriptions](Products_Subscriptions.md#view-products-subscriptions) | Array |  |
| supplier | The name of the Supplier | String | Up to 50 characters long |
| supplier_id | A valid Supplier ID | Integer |  |
| tax_class | The name of the Tax Class | String | Up to 100 characters long |
| tax_class_id | A valid Tax Class ID | Integer |  |
| theme_layout | The theme layout of the product | String | Up to 100 characters long |
| type | The type of product | String | One of the following values: `bundle`, `simple` |
| uom_set | The name of the Unit of Measure Set | String |  |
| uom_set_id | A valid UOM Set ID | Integer |  |
| updated_at | A UTC datetime of when the product was updated | Datetime |  |
| url | The relative URL of the product | String |  |
| url_key | The URL key of the product | String | Up to 100 characters long |
| variants | An array of variants of this product - see [Products Variants](Products_Variants.md#view-products-variants) | Array |  |
| withdrawal_date | A valid UTC datetime of when the product is being withdrawn from the sale | Array |  |
