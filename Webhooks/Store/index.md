# Store Webhooks

[Home](../../index.md) > [Webhooks](../index.md)

## Intro

The events below can be subscribed to on a Store system. See [Subscribing](../Subscribing.md) for how to register an
endpoint, [Request Format](../Request_Format.md) for the shape of a request, and [Verification](../Verification.md) for
how to confirm one is genuine.

Which events appear in the interface depends on the permissions held by the account and the modules enabled for the
client, so not every event listed here is available on every Store.

## Available events

| Displayed as     | Scope                | Sent when                                                                                     |
| ---------------- | -------------------- | --------------------------------------------------------------------------------------------- |
| ASNs             | `create_asns`        | An ASN is created                                                                             |
|                  | `delete_asns`        | An ASN, ASN Address, ASN Content, or ASN Item is deleted                                       |
|                  | `update_asns`        | A change is saved to an existing ASN                                                          |
| Inventory Levels | `update_stockonhand` | The stock on hand of a Product Variant changes - see [Stock On Hand](Stock_On_Hand.md)         |
| Orders           | `create_orders`      | An Order is created                                                                           |
|                  | `delete_orders`      | An Order, Order Address, Order Document, Order Grouping, or Order Item is deleted              |
|                  | `update_orders`      | A change is saved to an existing Order                                                        |
| Products         | `create_products`    | A Product is created                                                                          |
|                  | `delete_products`    | A Product is deleted                                                                          |
|                  | `update_products`    | A change is saved to an existing Product, including any of its variants                        |
| Returns          | `create_returns`     | A Return is created                                                                           |
|                  | `delete_returns`     | A Return is deleted                                                                           |
|                  | `update_returns`     | A change is saved to an existing Return                                                       |

## Overlapping events

Some changes satisfy more than one scope. Saving a change to a variant's stock, for example, is both a change to the
product and a change to the stock on hand, so an endpoint subscribed to `update_products` **and** `update_stockonhand`
receives two events for the one edit.

That is intentional - the two carry different detail, and you would normally subscribe to whichever granularity suits
your integration rather than both.
