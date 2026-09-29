# Tracking Events

[Home](../../index.md) > [Webhooks](../index.md) > [Store](index.md)

## Intro

**Scope:** `create_trackingevents`, or `create_trackingevents.<status>` for a single status
**Displayed as:** Tracking Events > All, or Tracking Events > *status*

Sent for each step a parcel (or pallet, on a pallet shipment) of an order takes - from being labelled, through the
carrier's own tracking, to being delivered. One subscription to `create_trackingevents` receives every event; a
subscription to a sub-scope, such as `create_trackingevents.delivered`, receives only that status.

An endpoint subscribes to either every event or particular statuses - not both.

## When it is sent

Each status is a [delivery status](../Delivery_Status.md), worked out from the tracking event.

| Status               | Sent when                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| `labelled`           | A shipment is labelled - one event per parcel                                                            |
| `despatched`         | A shipment is despatched **before** the carrier has reported the parcel (see below)                       |
| `in_transit`         | The carrier reports the parcel moving                                                                    |
| `out_for_delivery`   | The carrier reports the parcel out for delivery                                                          |
| `delivered`          | The carrier reports the parcel delivered                                                                 |
| `attempted_delivery` | The carrier reports a failed delivery attempt                                                            |
| `delayed`            | The carrier reports a delay, e.g. customs or a missed connection                                         |
| `failure`            | The carrier reports a problem needing someone to act on it - lost, damaged, refused, incorrect address, returning or returned to sender - or the tracking expired before delivery |
| `cancelled`          | The parcel's shipment is cancelled                                                                       |

Each carrier event is sent once, when it is first received. Carriers sometimes report an event late, after a newer one -
it is still sent, with its own `datetime`, but the parcel's current status in `fulfillment` does not go backwards.

A `despatched` event is only sent while the carrier has yet to report the parcel. Where the carrier's first scan
arrives before the shipment is despatched, the carrier's own event (`in_transit`) takes its place.

## When it is not sent

| Situation                                                 | Why                                                         |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| A shipment for a return                                   | Only an order's shipments are tracked here                  |
| A tracking update that repeats an event already received  | Nothing new happened                                        |

## `event_data`

| Field         | Description                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| `event`       | The event - see below                                                                                |
| `fulfillment` | The parcel (or pallet) as it is now - the same as its entry in the order's `fulfillments`             |
| `order`       | The order's delivery fields as they are now                                                           |

`event`:

| Field       | Description                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------- |
| `id`        | The tracking event id. `0` for `despatched` and `cancelled`, which we raise ourselves - a parcel only has one of each |
| `code`      | The tracking event code, e.g. `500` - see [Tracking Events](../../Events/tracking.md). `0` for `despatched` and `cancelled` |
| `subcode`   | The tracking sub event code, e.g. `213` - `0` where there is none                                              |
| `status`    | The status the event represents, as in the table above                                                         |
| `event`     | Description of the event code                                                                                  |
| `subevent`  | Description of the sub event code                                                                              |
| `details`   | Any further detail given by the carrier                                                                        |
| `signed_by` | Who signed for the parcel, where the carrier gives it                                                          |
| `datetime`  | UTC datetime of when the event happened                                                                        |
| `location`  | Where the event happened, as given by the carrier - `name`, `country_iso2`, `latitude` and `longitude` (blank where not given) |
| `window`    | The delivery window the carrier gives - `start` and `end` - `0000-00-00 00:00:00` where it gives none                    |

`fulfillment` is the parcel (or pallet) as it is now, identified by its `entity` - the parcel's entry in
`GET /orders/:order/fulfillments/`, without its latest event, which would only repeat `event`. An event reported late
keeps its own details in `event`, while `delivery_status` here stays where the parcel has actually got to:

| Field                     | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `entity`                  | What was sent - `type` (`parcel`, or `pallet` on a pallet shipment) and its `id`, the Parcel ID or Pallet ID |
| `shipment`                | The shipment it went on - its `id` and `reference`                                            |
| `delivery_status`         | Where the parcel has got to now                                                              |
| `has_delivery_exception`  | `1` when the parcel's latest event needs someone to act on it                                 |
| `shipped_at`              | UTC datetime the shipment was despatched                                                     |
| `first_attempted_at`      | UTC datetime of the first delivery attempt                                                   |
| `delivered_at`            | UTC datetime the parcel was delivered                                                        |
| `total_delivery_attempts` | The number of delivery attempts                                                              |
| `carrier`                 | The carrier - `name`, `code`, and its `service` and `service_code`                            |
| `tracking`                | The tracking - `id` (the full history is at `/tracking/:id/events/`), `code`, and the `url` of the tracking page |

`order`:

| Field                      | Description                                                                                     |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                       | The Order ID                                                                                    |
| `order_number`             | The order number                                                                                |
| `po_number`                | The purchase order number given with the order, where there is one                               |
| `status`                   | The status of the order                                                                         |
| `shipping_status`          | `not_shipped`, `part_shipped`, or `shipped`                                                     |
| `delivery_status`          | Where the order has got to - only `delivered` once it has shipped in full and every parcel is delivered |
| `has_delivery_exception`   | `1` when any parcel of the order needs someone to act on it                                      |
| `transit_at`               | UTC datetime the first shipment was despatched                                                  |
| `delivered_at`             | UTC datetime the last parcel was delivered, once the order has been delivered in full            |
| `store`                    | The name of the store the order belongs to                                                       |
| `marketplace`              | Where the order came from - the `name` of the marketplace connection, the `code` of its channel (e.g. `amazon`), and the `order_number` it has there. An order sent in through the API may have only an `order_number`. Each is blank where not known |

All datetimes are UTC, in the form `YYYY-MM-DD HH:ii:ss`; one not yet reached is `0000-00-00 00:00:00`.

## Order of sending

Events are queued against the shipment, so the events for one shipment - and its `update_shipments` events - are sent in
the order they happened. An `update_shipments` event is also sent whenever the shipment's delivery fields, or one of its
parcels' `delivery_status`, change; subscribe to that instead for the whole shipment on each change.

## Example

```json
{
  "event_data": {
    "event": {
      "id": 9930117,
      "code": 100,
      "subcode": 100,
      "status": "delivered",
      "event": "Delivered",
      "subevent": "Delivered",
      "details": "Delivered to the recipient",
      "signed_by": "",
      "datetime": "2026-09-23 11:42:08",
      "location": {
        "name": "London",
        "country_iso2": "GB",
        "latitude": "51.50340000",
        "longitude": "-0.12760000"
      },
      "window": {
        "start": "0000-00-00 00:00:00",
        "end": "0000-00-00 00:00:00"
      }
    },
    "fulfillment": {
      "entity": {
        "type": "parcel",
        "id": 8830
      },
      "shipment": {
        "id": 5534,
        "reference": "SH00013100"
      },
      "delivery_status": "delivered",
      "has_delivery_exception": 0,
      "shipped_at": "2026-09-22 16:05:48",
      "first_attempted_at": "2026-09-23 11:42:08",
      "delivered_at": "2026-09-23 11:42:08",
      "total_delivery_attempts": 1,
      "carrier": {
        "name": "Royal Mail",
        "code": "royalmail",
        "service": "Tracked 24",
        "service_code": "TPN"
      },
      "tracking": {
        "id": 771204,
        "code": "YT123456789GB",
        "url": "https://tracking.example.tenevo.co.uk/tracking/SH00013100/YT123456789GB"
      }
    },
    "order": {
      "id": 10482,
      "order_number": "10482",
      "po_number": "PO-55120",
      "status": "closed",
      "shipping_status": "shipped",
      "delivery_status": "delivered",
      "has_delivery_exception": 0,
      "transit_at": "2026-09-22 16:05:48",
      "delivered_at": "2026-09-23 11:42:08",
      "store": "Example Store",
      "marketplace": {
        "name": "Example Shopify",
        "code": "shopify",
        "order_number": "#1046"
      }
    }
  },
  "event_type": "create_trackingevents.delivered",
  "event_timestamp": 1790163728,
  "event_url": "https://login.example.tenevo.co.uk",
  "code": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
  "event_id": 412,
  "event_sequence": 412,
  "timestamp": 1790163730,
  "hmac": "9f2c1adf4b8e0c7a15d3e6b29f84c05713ae6d2f8b41c09e7a5d3f6b28c14e0d"
}
```

`event_type` is always the sub-scope of the event's status, whichever of the scopes the endpoint subscribed to.
