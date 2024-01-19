# Shipments Pallets Parcels
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Shipments Pallets Parcels
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /shipments/:shipment/pallets/:pallet/parcels/ | POST | This allows you to add parcels to a shipment pallet | [Details](#create-shipment-pallets-parcels) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel | DELETE | This allows you to delete a shipment parcel pallet | [Details](#delete-shipment-pallet-parcel) |
| /shipments/:shipment/pallets/:pallet/parcels/ | PUT | This allows you to update a specific shipment pallet parcel | [Details](#update-shipment-pallet-parcels) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/ | PUT | This allows you to update a specific shipment pallet parcel | [Details](#update-shipment-pallet-parcels) |
| /shipments/:shipment/pallets/:pallet/parcels/ | GET | This allows you to list the parcels belonging to a shipment pallet | [Details](#view-shipment-pallet-parcel) |
| /shipments/:shipment/pallets/:pallet/parcels/:parcel/ | GET | This allows you to list the parcels belonging to a shipment pallet | [Details](#view-shipment-pallet-parcel) |

## Create Shipment Pallets Parcels
This allows you to add parcels to a shipment pallet

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/`

**Method** : `POST`

## Delete Shipment Pallet Parcel
This allows you to delete a shipment parcel pallet

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel`

**Method** : `DELETE`

## Update Shipment Pallet Parcels
This allows you to update a specific shipment pallet parcel

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/`

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/`

**Method** : `PUT`

## View Shipment Pallet Parcel
This allows you to list the parcels belonging to a shipment pallet

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/`

**URL** : `/shipments/:shipment/pallets/:pallet/parcels/:parcel/`

**Method** : `GET`
