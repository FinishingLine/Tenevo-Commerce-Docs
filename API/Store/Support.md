# Support
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Support
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /support/ | POST | This allows you to create a support | [Details](#create-support) |
| /support/ | PUT | This allows you to update a specific support | [Details](#update-support) |
| /support/ | GET | This allows you to list support | [Details](#view-support) |

## Create Support
This allows you to create a support

**URL** : `/support/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| agents | An array containing agents - see [Support Agents](Support_Agents.md#create-support-agents) | Array |  | NULL | N | N |
| allowblock | An array containing allowblock - see [Support Allow-Block](Support_Allow-Block.md#create-support-allow-block) | Array |  | NULL | N | N |
| articles | An array containing articles - see [Support Articles](Support_Articles.md#create-support-articles) | Array |  | NULL | N | N |
| tickets | An array containing tickets - see [Support Tickets](Support_Tickets.md#create-support-tickets) | Array |  | NULL | N | N |

## Update Support
This allows you to update a specific support

**URL** : `/support/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| articles | An array containing articles - see [Support Articles](Support_Articles.md#update-support-articles) | Array |  | NULL | Y | N |
| tickets | An array containing tickets - see [Support Tickets](Support_Tickets.md#update-support-tickets) | Array |  | NULL | Y | N |

## View Support
This allows you to list support

**URL** : `/support/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| agents | An array containing agents - see [Support Agents](Support_Agents.md#view-support-agents) | Array |  |
| allowblock | An array containing allowblock - see [Support Allow-Block](Support_Allow-Block.md#view-support-allow-block) | Array |  |
| articles | An array containing articles - see [Support Articles](Support_Articles.md#view-support-articles) | Array |  |
| tickets | An array containing tickets - see [Support Tickets](Support_Tickets.md#view-support-tickets) | Array |  |
