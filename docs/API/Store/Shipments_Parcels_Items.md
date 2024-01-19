# Shipments Parcels Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments Parcels Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/:shipment/parcels/:parcel/items/ | POST | This allows you to add items to a shipment parcel | [Details](#create-shipment-parcels-items) |
| /shipments/:shipment/parcels/:parcel/items/ | PUT | This allows you to update a specific shipment parcel item | [Details](#update-shipment-parcel-items) |
| /shipments/:shipment/parcels/:parcel/items/:item/ | PUT | This allows you to update a specific shipment parcel item | [Details](#update-shipment-parcel-items) |
| /shipments/:shipment/parcels/:parcel/items/ | GET | This allows you to list the items belonging to a shipment parcel | [Details](#view-shipment-parcel-items) |
| /shipments/:shipment/parcels/:parcel/items/:item | GET | This allows you to list the items belonging to a shipment parcel | [Details](#view-shipment-parcel-items) |

## Create Shipment Parcels Items
This allows you to add items to a shipment parcel

**URL** : `/shipments/:shipment/parcels/:parcel/items/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description of the item, used for customs declarations | String | Up to 200 characters long | NULL | N | N |
| hs_tariff_code | The HS Tariff Code of the item, used for customs declarations | Integer |  | NULL | N | N |
| item_name | The name of the item | String | Up to 100 characters long | NULL | Y | N |
| manufactured_country_iso2 | A valid ISO 2 Country Code showing where the item was manufactured, used for customs declarations | String | Exactly 2 characters long | NULL | N | N |
| order_item_id | A valid Order Grouping Item ID | Integer |  | NULL | N | N |
| product_type | The type of product, used for customs declarations | String | Up to 100 characters long | NULL | N | N |
| properties | A JSON encoded array of properties related to the item | String |  | NULL | N | N |
| quantity | The quantity of units of this item within the parcel | Integer | Up to 10 digits long | NULL | Y | N |
| sku | The SKU of the item | String | Up to 255 characters long | NULL | N | N |
| unit_price | The price of one unit of this item, inclusive of taxes, etc | Float | Up to 4 decimal places and no larger than 99999999.9999 | NULL | Y | N |
| unit_tax | The tax of one unit of this item | Float | Up to 4 decimal places and no larger than 99999999.9999 | NULL | Y | N |
| unit_weight | The weight of one unit of this item | Integer | Up to 10 digits long | NULL | Y | N |
| uom | The Unit of Measure used for the given UOM Size | String | Up to 100 characters long | NULL | N | N |
| uom_size | The size of the corresponding Unit of Measure used | Integer | Up to 10 digits long | 1 | N | N |

## Update Shipment Parcel Items
This allows you to update a specific shipment parcel item

**URL** : `/shipments/:shipment/parcels/:parcel/items/`

**URL** : `/shipments/:shipment/parcels/:parcel/items/:item/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description of the item, used for customs declarations | String | Up to 200 characters long | NULL | N | N |
| hs_tariff_code | The HS Tariff Code of the item, used for customs declarations | Integer |  | NULL | N | N |
| manufactured_country_iso2 | A valid ISO 2 Country Code showing where the item was manufactured, used for customs declarations | String | Exactly 2 characters long | NULL | N | N |
| product_type | The type of product, used for customs declarations | String | Up to 100 characters long | NULL | N | N |
| quantity | The quantity of units of this item within the parcel | Integer | Up to 10 digits long | NULL | Y | N |
| sku | The SKU of the item | String | Up to 255 characters long | NULL | N | N |

## View Shipment Parcel Items
This allows you to list the items belonging to a shipment parcel

**URL** : `/shipments/:shipment/parcels/:parcel/items/`

**URL** : `/shipments/:shipment/parcels/:parcel/items/:item`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| batch_number | A comma seperated list of batch numbers | String |  |
| description | A description of the item, used for customs declarations | String | Up to 200 characters long |
| expiry_date | A comma seperated list of expiry dates | String |  |
| hs_tariff_code | The HS Tariff Code of the item, used for customs declarations | Integer |  |
| item_name | The name of the item | String | Up to 100 characters long |
| line_number | A unique numerical reference for this item | Integer | Up to 10 digits long |
| manufactured_country | The name of the country where the item was manufactured, used for customs declarations | String | Exactly 2 characters long |
| manufactured_country_iso2 | A valid ISO 2 Country Code showing where the item was manufactured, used for customs declarations | String | Exactly 2 characters long |
| order_id | A valid Order ID | Integer |  |
| order_item_id | A valid Order Grouping Item ID | Integer |  |
| order_number | The order number for the order | String | Up to 50 characters long |
| product_type | The type of product, used for customs declarations | String | Up to 100 characters long |
| properties | A JSON encoded array of properties related to the item | String |  |
| quantity | The quantity of units of this item within the parcel | Integer | Up to 10 digits long |
| serial_number | A comma seperated list of serial numbers | String |  |
| sku | The SKU of the item | String | Up to 255 characters long |
| total_price | The total price of all the units of this item, inclusive of taxes, etc | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_tax | The total tax of all the units of this item | Float | Up to 2 decimal places and no larger than 99999999.99 |
| total_weight | The total weight of all the units of this item | Integer | Up to 10 digits long |
| unit_price | The price of one unit of this item, inclusive of taxes, etc | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| unit_tax | The tax of one unit of this item | Float | Up to 4 decimal places and no larger than 99999999.9999 |
| unit_weight | The weight of one unit of this item | Integer | Up to 10 digits long |
| uom | The Unit of Measure used for the given UOM Size | String | Up to 100 characters long |
| uom_quantity | The quantity of units of this item within the parcel, in Unit of Measure terms | Integer | Up to 10 digits long |
| uom_size | The size of the corresponding Unit of Measure used | Integer | Up to 10 digits long |
| variant_id | A valid Variant ID | Integer |  |
