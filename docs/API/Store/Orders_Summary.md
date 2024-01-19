# Orders Summary
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Fulfillments Orders Summary
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/summary/ | GET | This allows you to get a summary of an order | [Details](#view-forder-summary) |

## View FOrder Summary
This allows you to get a summary of an order

**URL** : `/orders/:order/summary/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| grand_total | The grand total of the order, ie. what the customer paid | Float |  |
| sub_total | The sub total of the order, before discounts and shipping | Float |  |
| total_credit_balance | The total amount of credit balance used against the order | Float |  |
| total_discount | The total amount of discounts applied to the order | Float |  |
| total_items | The total number of items ordered (ie. unique SKUs) | Integer |  |
| total_shipping | The total amount paid for shipping | Float |  |
| total_tax | The total amount of tax paid on the order | Float |  |
| total_units_fulfilled | The total number of units fulfilled | Integer |  |
| total_units_ordered | The total number of units ordered | Integer |  |
| total_units_outstanding | The total number of units outstanding (not fulfilled) | Integer |  |
| total_units_returned | The total number of units returned | Integer |  |
| total_uom_units_fulfilled | The total number of units fulfilled, in Unit of Measure terms | Integer |  |
| total_uom_units_ordered | The total number of units ordered, in Unit of Measure terms | Integer |  |
| total_uom_units_outstanding | The total number of units outstanding (not fulfilled), in Unit of Measure terms | Integer |  |
| total_uom_units_returned | The total number of units returned, in Unit of Measure terms | Integer |  |
