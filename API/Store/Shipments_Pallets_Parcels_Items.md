# Shipments Pallets Parcels Items
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments Pallets Parcels Items
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/:shipment/pallets/:pallet/parcels/:item/parcels/ | POST | This allows you to add items to a shipment pallet parcel | [Details](#create-shipment-pallets-parcels-items) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/items/ | PUT | This allows you to update a specific shipment pallet parcel item | [Details](#update-shipment-pallet-parcels-items) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/items/:item/ | PUT | This allows you to update a specific shipment pallet parcel item | [Details](#update-shipment-pallet-parcels-items) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/items/ | GET | This allows you to list the parcels belonging to a shipment pallet item | [Details](#view-shipment-pallet-parcel-item) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/items/:item/ | GET | This allows you to list the parcels belonging to a shipment pallet item | [Details](#view-shipment-pallet-parcel-item) |

## Create Shipment Pallets Parcels Items
This allows you to add items to a shipment pallet parcel

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:item/parcels/`

**Method** : `POST`

## Update Shipment Pallet Parcels Items
This allows you to update a specific shipment pallet parcel item

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/items/`

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/items/:item/`

**Method** : `PUT`

## View Shipment Pallet Parcel Item
This allows you to list the parcels belonging to a shipment pallet item

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/items/`

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/items/:item/`

**Method** : `GET`
