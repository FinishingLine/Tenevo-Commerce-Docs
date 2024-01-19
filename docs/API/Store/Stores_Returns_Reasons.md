# Stores Returns Reasons
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/returnsreasons/ | POST | This allows you to create store returns reasons | [Details](#create-store-returns-reasons) |
| /stores/:store/returnsreasons/:returnsreason/ | DELETE | This allows you to delete a specified store returns reason | [Details](#delete-store-returns-reason) |
| /stores/:store/returnsreasons/ | PUT | This allows you to update store returns reasons | [Details](#update-store-returns-reasons) |
| /stores/:store/returnsreasons/:returnsreason/ | PUT | This allows you to update store returns reasons | [Details](#update-store-returns-reasons) |
| /stores/:store/returnsreasons/ | GET | This allows you to list store returns reasons | [Details](#view-store-returns-reasons) |
| /stores/:store/returnsreasons/:returnsreason/ | GET | This allows you to list store returns reasons | [Details](#view-store-returns-reasons) |

## Create Store Returns Reasons
This allows you to create store returns reasons

**URL** : `/stores/:store/returnsreasons/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| reason_long | A long version of the returns reason, could also be used as a description | String | Up to 200 characters long | NULL | Y | N |
| reason_short | A short version of the returns reason | String | Up to 50 characters long | NULL | Y | N |
| requires_details | Indicates whether or not the reason requires further details to be provided by the returnee | Boolean |  | false | N | N |
| resolution | Indicates how the return needs to be resolved | String | One of the following values: `credit`, `exchange`, `refund`, `replacement`, `unknown` | NULL | Y | N |
| sort_order | The sort order of the reason | Integer | Up to 3 digits long | 0 | N | N |

## Delete Store Returns Reason
This allows you to delete a specified store returns reason

**URL** : `/stores/:store/returnsreasons/:returnsreason/`

**Method** : `DELETE`

## Update Store Returns Reasons
This allows you to update store returns reasons

**URL** : `/stores/:store/returnsreasons/`

**URL** : `/stores/:store/returnsreasons/:returnsreason/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| reason_long | A long version of the returns reason, could also be used as a description | String | Up to 200 characters long | NULL | Y | N |
| reason_short | A short version of the returns reason | String | Up to 50 characters long | NULL | Y | N |
| requires_details | Indicates whether or not the reason requires further details to be provided by the returnee | Boolean |  | false | N | N |
| resolution | Indicates how the return needs to be resolved | String | One of the following values: `credit`, `exchange`, `refund`, `replacement`, `unknown` | NULL | Y | N |
| sort_order | The sort order of the reason | Integer | Up to 3 digits long | 0 | N | N |
| status | The status of the returns reason | String | One of the following values: `active`, `disabled` | NULL | Y | N |

## View Store Returns Reasons
This allows you to list store returns reasons

**URL** : `/stores/:store/returnsreasons/`

**URL** : `/stores/:store/returnsreasons/:returnsreason/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| reason_long | A long version of the returns reason, could also be used as a description | String | Up to 200 characters long |
| reason_short | A short version of the returns reason | String | Up to 50 characters long |
| requires_details | Indicates whether or not the reason requires further details to be provided by the returnee | Boolean |  |
| resolution | Indicates how the return needs to be resolved | String | One of the following values: `credit`, `exchange`, `refund`, `replacement`, `unknown` |
| sort_order | The sort order of the reason | Integer | Up to 3 digits long |
| status | The status of the returns reason | String | One of the following values: `active`, `disabled` |
