# Delivery Status

[Home](../index.md) > [Webhooks](index.md)

## Intro

A tracking event's `status`, and the `delivery_status` of its fulfillment, shipment and order, say where something sent
out has got to, from being labelled to being delivered. Each status is also a sub-scope of
`create_trackingevents` (e.g. `create_trackingevents.delivered`) - see [Subscribing](Subscribing.md).

`delivery_status` is on:

| Where                                   | Worked out from                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| A parcel, or a pallet on a pallet shipment | Its latest [tracking event](../Events/tracking.md), and its shipment's status while the carrier has yet to report it |
| A shipment                              | Its parcels (or pallets)                                                     |
| An order                                | Its shipments                                                                |
| Each entry of an order's `fulfillments` | As a parcel                                                                  |

Alongside it, `has_delivery_exception` says whether something needs someone to act on it.

## Values

| Value                | Meaning                                                                       |
| -------------------- | ----------------------------------------------------------------------------- |
| `pending`            | Not labelled yet                                                              |
| `labelled`           | Labelled, and not yet with the carrier                                        |
| `despatched`         | Despatched, and not yet reported by the carrier - or collected by it           |
| `in_transit`         | The carrier reports it moving                                                 |
| `out_for_delivery`   | The carrier reports it out for delivery                                       |
| `attempted_delivery` | The carrier reports a failed delivery attempt                                 |
| `delayed`            | The carrier reports a delay, e.g. customs or a missed connection              |
| `failure`            | The carrier reports a problem needing someone to act on it, or the tracking expired before delivery |
| `part_delivered`     | Some of a shipment's parcels (or an order's shipments) are delivered - never a single parcel |
| `delivered`          | Delivered - for a shipment or order, every parcel                             |
| `cancelled`          | Its shipment was cancelled                                                    |

## A parcel

A parcel's own tracking decides its status. Until the carrier reports it, the shipment's own status - labelled,
despatched or cancelled - stands in, as that is all there is to go on.

| Latest event                                                         | Shipment status | `delivery_status`    |
| -------------------------------------------------------------------- | --------------- | -------------------- |
| any                                                                  | cancelled       | `cancelled`          |
| none, 600 (other than 603), or 800                                   | labelled        | `labelled`           |
| none, 600 (other than 603), or 800                                   | despatched      | `despatched`         |
| 603                                                                  | any             | `despatched`         |
| 200 with sub-event 200, 201, 202, 205, 206, 208, 209, 210, 211, 213, 214, or 216; or any 300 |  | `failure`   |
| any other 200, or 509                                                |                 | `delayed`            |
| 400                                                                  |                 | `attempted_delivery` |
| 500                                                                  |                 | `in_transit`         |
| 700                                                                  |                 | `out_for_delivery`   |
| 100                                                                  |                 | `delivered`          |

A `failure` also sets `has_delivery_exception`. It follows the latest event, so it clears itself when a later event
arrives.

## A shipment or an order

Several parcels (or shipments) are combined by taking the first of these that applies:

1. all cancelled - `cancelled`
2. all delivered - `delivered`
3. any delivered - `part_delivered`
4. any `failure`, then any `attempted_delivery`, then any `delayed`
5. otherwise the least advanced of `pending`, `labelled`, `despatched`, `in_transit`, `out_for_delivery`

Cancelled shipments are left out of an order's status, and an order is only `delivered` once it has shipped in full;
until then it is at most `part_delivered`.
