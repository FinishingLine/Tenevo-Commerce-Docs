# Self Labeller
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /selflabeller | POST | This allows you to create a shipment via the self labeller method | [Details](#creating-shipment-for-self-labelled-order) |

## Creating shipment for self labelled order
This allows you to create a shipment via the self labeller method

**URL** : `/selflabeller`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| reference_id | The ID that the marketplace uses to reference the order | String | Up to 255 characters long | NULL | Y | N |
