# Stores Shipping Methods
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/shippingmethods/ | POST | This allows you to create store shipping methods | [Details](#create-store-shipping-methods) |
| /stores/:store/shippingmethods/:shippingmethod/ | DELETE | This allows you to delete a specified store shipping method | [Details](#delete-store-shipping-method) |
| /stores/:store/shippingmethods/ | PUT | This allows you to update store shipping methods | [Details](#update-store-shipping-methods) |
| /stores/:store/shippingmethods/:shippingmethod/ | PUT | This allows you to update store shipping methods | [Details](#update-store-shipping-methods) |
| /stores/:store/shippingmethods/ | GET | This allows you to list store shipping methods | [Details](#view-store-shipping-methods) |
| /stores/:store/shippingmethods/:shippingmethod/ | GET | This allows you to list store shipping methods | [Details](#view-store-shipping-methods) |

## Create Store Shipping Methods
This allows you to create store shipping methods

**URL** : `/stores/:store/shippingmethods/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| code | A unique code to identify this shipping method, if not provided, uses name | String | Up to 40 characters long | NULL | N | Y |
| details | Details about the shipping method | String | Up to 100 characters long | NULL | Y | N |
| is_default | Indicates whether the shipping method is the default, or not | Boolean |  | 0 | N | N |
| is_pickup | Indicates whether the shipping method is for pickup, or not | Boolean |  | 0 | N | N |
| is_public | Indicates whether the shipping method is public, or not | Boolean |  | 0 | N | N |
| name | The name of the shipping method | String | Up to 40 characters long | NULL | Y | N |
| price | The price to charge for using this shipping method | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | Y | N |

## Delete Store Shipping Method
This allows you to delete a specified store shipping method

**URL** : `/stores/:store/shippingmethods/:shippingmethod/`

**Method** : `DELETE`

## Update Store Shipping Methods
This allows you to update store shipping methods

**URL** : `/stores/:store/shippingmethods/`

**URL** : `/stores/:store/shippingmethods/:shippingmethod/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| details | Details about the shipping method | String | Up to 100 characters long | NULL | Y | N |
| is_default | Indicates whether the shipping method is the default, or not | Boolean |  | 0 | N | N |
| is_pickup | Indicates whether the shipping method is for pickup, or not | Boolean |  | 0 | N | N |
| is_public | Indicates whether the shipping method is public, or not | Boolean |  | 0 | N | N |
| name | The name of the shipping method | String | Up to 40 characters long | NULL | Y | N |
| price | The price to charge for using this shipping method | Float | Up to 2 decimal places and no larger than 99999999.99 | 0.00 | Y | N |

## View Store Shipping Methods
This allows you to list store shipping methods

**URL** : `/stores/:store/shippingmethods/`

**URL** : `/stores/:store/shippingmethods/:shippingmethod/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| code | A unique code to identify this shipping method, if not provided, uses name | String | Up to 40 characters long |
| details | Details about the shipping method | String | Up to 100 characters long |
| is_default | Indicates whether the shipping method is the default, or not | Boolean |  |
| is_pickup | Indicates whether the shipping method is for pickup, or not | Boolean |  |
| is_public | Indicates whether the shipping method is public, or not | Boolean |  |
| name | The name of the shipping method | String | Up to 40 characters long |
| price | The price to charge for using this shipping method | Float | Up to 2 decimal places and no larger than 99999999.99 |
