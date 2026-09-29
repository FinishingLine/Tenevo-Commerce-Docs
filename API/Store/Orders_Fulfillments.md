# Orders Fulfillments
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Lists the parcels (or pallets) sent for orders, with their tracking and delivery status
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/fulfillments/ | GET | This allows you to list every parcel (or pallet, on a pallet shipment) sent for an order, with its tracking and delivery status - cancelled shipments are included, with a delivery_status of cancelled | [Details](#view-fulfillments) |
| /orders/:id/fulfillments/ | GET | This allows you to list every parcel (or pallet, on a pallet shipment) sent for an order, with its tracking and delivery status - cancelled shipments are included, with a delivery_status of cancelled | [Details](#view-fulfillments) |

## View Fulfillments
This allows you to list every parcel (or pallet, on a pallet shipment) sent for an order, with its tracking and delivery status - cancelled shipments are included, with a delivery_status of cancelled

**URL** : `/orders/fulfillments/`

**URL** : `/orders/:id/fulfillments/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| carrier | The name of the carrier | String | Up to 30 characters long |
| carrier_code | The code used for the carrier | String | Up to 20 characters long |
| carrier_service | The name of the carrier service | String |  |
| carrier_service_code | The code of the carrier service | String |  |
| delivered_at | A UTC datetime of when the carrier delivered the parcel (or pallet) | Datetime |  |
| delivery_status | Where the parcel (or pallet) has got to, worked out from its latest tracking event and the shipment status | String | One of the following values: `attempted_delivery`, `cancelled`, `delayed`, `delivered`, `despatched`, `failure`, `in_transit`, `labelled`, `out_for_delivery`, `pending` |
| entity_id | The Parcel ID, or the Pallet ID on a pallet shipment | Integer |  |
| entity_type | Whether the fulfillment is a parcel, or a pallet on a pallet shipment | String | One of the following values: `parcel`, `pallet` |
| first_attempted_at | A UTC datetime of the first delivery attempt made by the carrier | Datetime |  |
| has_delivery_exception | Indicates whether the latest tracking event needs someone to act on it (e.g. lost, refused, or returning to sender), or not | Boolean |  |
| shipment_id | The Shipment ID | Integer |  |
| shipment_reference | The reference of the shipment | String | Exactly 10 characters long |
| shipped_at | A UTC datetime of when the shipment was despatched | Datetime |  |
| total_delivery_attempts | The total number of delivery attempts made by the carrier | Integer |  |
| tracking_code | The carrier's tracking code | String | Up to 100 characters long |
| tracking_event | The description of the latest tracking event code | String |  |
| tracking_event_at | A UTC datetime of when the latest tracking event occurred | Datetime |  |
| tracking_event_code | The event code of the latest tracking event - see the tracking event codes | Integer |  |
| tracking_event_id | The ID of the latest tracking event | Integer |  |
| tracking_id | The Tracking ID - the full history is at /tracking/:tracking/events/ | Integer |  |
| tracking_subevent | The description of the latest tracking sub event code | String |  |
| tracking_subevent_code | The sub event code of the latest tracking event - see the tracking event codes | Integer |  |
| tracking_url | The tracking page for the parcel (or pallet) | String |  |
