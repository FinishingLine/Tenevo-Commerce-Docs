# Supplier Services
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages supplier services
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /supplierservices/ | GET | This allows you to list supplier services | [Details](#view-supplier-services) |
| /supplierservices/:supplierservice/ | GET | This allows you to list supplier services | [Details](#view-supplier-services) |

## View Supplier Services
This allows you to list supplier services

**URL** : `/supplierservices/`

**URL** : `/supplierservices/:supplierservice/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| name | The name of the supplier service | String | Up to 100 characters long |
| type | The type of supplier service | String | Must have the value: `extension` |
