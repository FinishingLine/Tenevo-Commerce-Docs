# Fulfillment Services
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages fulfillment services
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /fulfillmentservices/ | GET | This allows you to list fulfillment services | [Details](#view-fulfillment-services) |
| /fulfillmentservices/:fulfillmentservice/ | GET | This allows you to list fulfillment services | [Details](#view-fulfillment-services) |

## View Fulfillment Services
This allows you to list fulfillment services

**URL** : `/fulfillmentservices/`

**URL** : `/fulfillmentservices/:fulfillmentservice/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | The name of the fulfillment service | String | Up to 100 characters long |
| type | The type of fulfillment service | String | One of the following values: `external`, `manual` |
