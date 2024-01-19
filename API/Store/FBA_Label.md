# FBA Label
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /fbalabel | POST | This allows you to create a shipment for an FBA order | [Details](#creating-shipment-for-fba-order) |

## Creating shipment for FBA order
This allows you to create a shipment for an FBA order

**URL** : `/fbalabel`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| reference_id | The ID that the marketplace uses to reference the order | String | Up to 255 characters long | NULL | Y | N |
