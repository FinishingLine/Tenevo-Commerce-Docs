# Tracking
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tracking
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tracking/ | GET | This allows you to list the tracking of a parcel | [Details](#view-tracking) |
| /tracking/:tracking/ | GET | This allows you to list the tracking of a parcel | [Details](#view-tracking) |

## View Tracking
This allows you to list the tracking of a parcel

**URL** : `/tracking/`

**URL** : `/tracking/:tracking/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| courier | The name of the courier being used | String | Up to 50 characters long |
| courier_code | A valid Tenevo courier code | String | Up to 100 characters long |
| courier_service | The name of the courier service | String | Up to 100 characters long |
| courier_service_code | A valid Tenevo courier service code | String | Up to 100 characters long |
| est_delivery_date | The estimated delivery date for the shipment | Date |  |
| events | An array of events for the tracking - see [Tracking Events](Tracking_Events.md#view-tracking-events) | Array |  |
| has_movements | Indicates whether the tracking has moved | Boolean |  |
| last_details | Details from the last tracking event | String |  |
| last_event | The last event received from the tracking | String |  |
| last_event_code | The last event code received from the tracking | String |  |
| last_location | The last location received from the tracking | String |  |
| last_raw_event | The last event as received from the tracking courier | String |  |
| last_raw_event_code | The last event code as received from the tracking courier | String |  |
| last_subevent | The last sub event received from the tracking | String |  |
| last_subevent_code | The last sub event code received from the tracking | String |  |
| last_updated | A UTC datetime of when the tracking was last updated | Datetime |  |
| recipient_country_iso2 | The ISO country code of the recipient | String | Exactly 2 characters long |
| recipient_postcode | The postcode of the recipient | String | Up to 20 characters long |
| returns_label | Indicates whether or not the item is for that of a returns, or not | Boolean |  |
| sender_country_iso2 | The ISO country code of the sender | String | Exactly 2 characters long |
| sender_postcode | The postcode of the sender | String | Up to 20 characters long |
| shipment_reference | The reference of the shipment | String | Up to 50 characters long |
| status | The status of the tracking | String | One of the following values: `active`, `closed` |
| trackable | Indicates whether or not the item is trackable, or not | Boolean |  |
| tracking_code | The tracking code being used to do the tracking | String | Up to 100 characters long |
| updated_at | When the tracking for this item was last checked | Datetime |  |
