# Tracking Events
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Tracking Events
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /tracking/:tracking/events/ | GET | This allows you to list the tracking events of a parcel | [Details](#view-tracking-events) |
| /tracking/:tracking/events/:event/ | GET | This allows you to list the tracking events of a parcel | [Details](#view-tracking-events) |

## View Tracking Events
This allows you to list the tracking events of a parcel

**URL** : `/tracking/:tracking/events/`

**URL** : `/tracking/:tracking/events/:event/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| additional_details | Details from the last tracking event | String |  |
| country | The country of the last location received from the tracking | String |  |
| country_iso2 | The ISO Country Code of the last location received from the tracking | String | Exactly 2 characters long |
| datetime | The UTC datetime of when the tracking event occurred | Datetime |  |
| event | The last event received from the tracking | String |  |
| event_code | The last event code received from the tracking | Integer |  |
| filename | A filename for the related event | String |  |
| latitude | The last known latitude from the tracking | Float | Up to 8 decimal places and no larger than 99.99999999 |
| location | The last location received from the tracking | String |  |
| longitude | The last known longitude from the tracking | Float | Up to 8 decimal places and no larger than 99.99999999 |
| raw_event | The last event as received from the tracking | String |  |
| raw_event_code | The last event code as received from the tracking | String |  |
| signed_by | The name of whom signed for the tracking | String | Up to 30 characters long |
| subevent | The last sub event received from the tracking | String |  |
| subevent_code | The last sub event code received from the tracking | Integer |  |
| window_end_estimate | The end of the estimated time frame from the tracking | Datetime |  |
| window_start_estimate | The beginning of the estimate time frame from the tracking | Datetime |  |
