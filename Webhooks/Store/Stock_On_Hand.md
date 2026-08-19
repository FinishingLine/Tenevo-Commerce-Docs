# Stock On Hand

[Home](../../index.md) > [Webhooks](../index.md) > [Store](index.md)

## Intro

**Scope:** `update_stockonhand`
**Displayed as:** Inventory Levels > Update

Sent when the stock on hand of a product variant changes. Stock on hand is `inventory_quantity` - the physical count
held, before anything is allocated to orders and before any buffer is deducted.

## When it is sent

- A variant's `inventory_quantity` is changed, through the API or through the admin interface
- A bundle's `inventory_quantity` is recalculated because one of its components moved

It is sent once per variant, per change, and only when the figure actually moved - a save that resolves to the same
number sends nothing.

Because a bundle's stock on hand is derived from its components, one change to a component can send an event for the
component **and** a further event for each bundle containing it. A single goods-in across many SKUs can therefore
produce a large number of events.

## When it is not sent

| Situation                                              | Why                                                                    |
| ------------------------------------------------------ | ---------------------------------------------------------------------- |
| An order is placed, amended, or cancelled              | That changes what is *available*, not what is on hand                   |
| A variant is created                                   | Use `create_products`                                                  |
| Only `buffer_stock_level` or `low_stock_level` changed  | Neither is stock on hand                                               |

## `event_data`

| Field                         | Description                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------- |
| `id`                          | The Product Variant ID                                                             |
| `product_id`                  | The Product ID the variant belongs to                                              |
| `sku`                         | The SKU of the variant                                                             |
| `inventory_quantity`          | Stock on hand after the change                                                     |
| `previous_inventory_quantity` | Stock on hand before the change                                                    |
| `inventory_available`         | Amount available to be purchased, `inventory_quantity` less allocations and buffer   |
| `inventory_allocated`         | Amount allocated to outstanding orders                                             |
| `inventory_reserved`          | Amount reserved in a basket or checkout; included within `inventory_available`      |
| `buffer_stock_level`          | Amount held back as a buffer                                                       |
| `low_stock_level`             | Threshold for a low stock notification; `-1` means no alert                        |
| `uom_quantity`                | Number of eaches in the variant's primary Unit of Measure                          |

All quantities are in **eaches**, not Unit of Measure units. Divide by `uom_quantity` to convert.

> **Only `inventory_quantity` triggers this event.** Every other figure above is a snapshot taken when the event was
> queued. `inventory_available` in particular moves whenever an order is placed or cancelled, and no event is sent for
> that - so do not treat a difference in `inventory_available` between two events as something you were notified about.

There is deliberately no `updated_at`. A bundle recalculation writes the new quantity without touching the variant's
update time, so the field would report a stale time on exactly the events where stock had just moved. Use
`event_timestamp` instead.

## Example

```json
{
  "event_data": {
    "id": 2,
    "product_id": 2,
    "sku": "DEF",
    "inventory_quantity": 10,
    "previous_inventory_quantity": 3,
    "inventory_available": "8",
    "inventory_allocated": "2",
    "inventory_reserved": "0",
    "buffer_stock_level": 0,
    "low_stock_level": -1,
    "uom_quantity": "1"
  },
  "event_type": "update_stockonhand",
  "event_timestamp": 1786965798,
  "event_url": "https://login.example.tenevo.co.uk",
  "code": "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
  "event_id": 369,
  "timestamp": 1786965801,
  "hmac": "9f2c1adf4b8e0c7a15d3e6b29f84c05713ae6d2f8b41c09e7a5d3f6b28c14e0d"
}
```
