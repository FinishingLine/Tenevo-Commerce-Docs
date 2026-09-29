# Events Structure

[Home](../index.md) > [Events](index.md)

## Tracking

The below event and sub-event codes are used for tracking events:

## Event Codes

| Code | Description      |                                        |
| ---- | ---------------- | -------------------------------------- |
| 100  | Delivered        | [Details](#sub-event-delivered)        |
| 200  | Exception        | [Details](#sub-event-exception)        |
| 300  | Expired          | [Details](#sub-event-expired)          |
| 400  | Failed Attempt   | [Details](#sub-event-failed-attempt)   |
| 500  | In Transit       | [Details](#sub-event-in-transit)       |
| 600  | Info Received    | [Details](#sub-event-info-received)    |
| 700  | Out for Delivery | [Details](#sub-event-out-for-delivery) |
| 800  | Pending          | [Details](#sub-event-pending)          |

## Sub-Event: Delivered

Sub-codes related to a successful delivery

| Sub-Code | Description                     |
| -------- | ------------------------------- |
| 100      | Delivered                       |
| 101      | Picked up by customer           |
| 102      | Signed by customer              |
| 103      | Delivered and cash collected    |
| 104      | Delivered to neighbour          |
| 105      | Delivered to requested location |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Exception

Sub-codes related to exceptions

| Sub-Code | Description                 |
| -------- | --------------------------- |
| 200      | Exception                   |
| 201      | Customer moved              |
| 202      | Customer refused delivery   |
| 203      | Delayed (customs clearance) |
| 204      | Delayed (external factors)  |
| 205      | Held for payment            |
| 206      | Incorrect address           |
| 207      | Pickup missed               |
| 208      | Rejected by carrier         |
| 209      | Returning to sender         |
| 210      | Returned to sender          |
| 211      | Shipment damaged            |
| 212      | Pickup not ready            |
| 213      | Shipment lost               |
| 214      | Address query               |
| 215      | Delayed (customs held)      |
| 216      | Misrouted                   |
| 217      | Held at facility            |
| 218      | Missed connection           |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Expired

Sub-codes related to an expiration of tracking

| Sub-Code | Description |
| -------- | ----------- |
| 300      | Expired     |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Failed Attempt

Sub-codes related to failed delivery attempts

| Sub-Code | Description           |
| -------- | --------------------- |
| 400      | Failed attempt        |
| 401      | Recipient unavailable |
| 402      | Business closed       |

[[Back to Event Codes]](#event-codes)

## Sub-Event: In Transit

Sub-codes related to transit events

| Sub-Code | Description                    |
| -------- | ------------------------------ |
| 500      | In transit                     |
| 501      | Acceptance scan                |
| 502      | Arrival scan                   |
| 503      | Arrived at destination country |
| 504      | Customs clearance completed    |
| 505      | Customs clearance started      |
| 506      | Departure scan                 |
| 507      | Problem resolved               |
| 508      | Forwarded to a new address     |
| 509      | Transit delay                  |
| 510      | Customs duties paid            |
| 511      | Re-routed                      |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Info Received

Sub-codes related to information surrounding a shipment

| Sub-Code | Description              |
| -------- | ------------------------ |
| 600      | Info received            |
| 601      | Shipment resealed        |
| 602      | Shipment labeled         |
| 603      | Shipment collected       |
| 604      | Shipment address updated |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Out for Delivery

Sub-codes related to a shipment dbeingout for delivery

| Sub-Code | Description                    |
| -------- | ------------------------------ |
| 700      | Out for delivery               |
| 701      | Available for pickup           |
| 702      | Customer contacted             |
| 703      | Delivery appointment scheduled |
| 704      | Delivery rescheduled           |

[[Back to Event Codes]](#event-codes)

## Sub-Event: Pending

Sub-codes related to shipment being in a pending state

| Sub-Code | Description |
| -------- | ----------- |
| 800      | Pending     |

[[Back to Event Codes]](#event-codes)
