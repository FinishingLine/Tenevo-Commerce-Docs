# Returns
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Returns
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /returns/ | POST | This allows you to create a return | [Details](#create-return) |
| /returns/:return/ | DELETE | This allows you to delete an return | [Details](#delete-return) |
| /returns/ | PUT | This allows you to update a specific return | [Details](#update-returns) |
| /returns/:return/ | PUT | This allows you to update a specific return | [Details](#update-returns) |
| /returns/ | GET | This allows you to list the returns | [Details](#view-returns) |
| /returns/:return/ | GET | This allows you to list the returns | [Details](#view-returns) |

## Create Return
This allows you to create a return

**URL** : `/returns/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| addresses | An array of addresses for the return - see [Returns Addresses](Returns_Addresses.md#create-returns-addresses) | Array |  | NULL | N | N |
| admin_id | A valid Admin ID of whom created the return | Integer |  | NULL | N | Y |
| courier_reference | The reference of the courier to be used - only when `method` is dropoff or pickup | Datetime |  | NULL | N | N |
| customer_id | A valid Customer ID | Integer |  | NULL | Y | N |
| items | An array of items for the return - see [Returns Items](Returns_Items.md#create-returns-items) | Array |  | NULL | N | N |
| method | The returns method the Customer will use to return the items | String | One of the following values: `dropoff`, `pickup`, `rts`, `self` | NULL | Y | N |
| notes | Notes relating to the return | String |  | NULL | N | N |
| parcel_depth | The depth of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| parcel_length | The length of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| parcel_width | The width of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| pickup_from | A valid UTC datetime of when the return should be picked up from - only when `method` is pickup | Datetime |  | NULL | N | N |
| pickup_until | A valid UTC datetime of when the return should be picked up until - only when `method` is pickup | Datetime |  | NULL | N | N |
| profile_id | A valid Profile ID of whom raised the return | Integer |  | NULL | Y | N |
| received_at | The date and time the return was marked as arriving - only used when status is received | Datetime |  | NULL | N | Y |
| rma | A unique reference for the return, only when `status` is received | Integer | Exactly 10 digits long | NULL | N | Y |
| service_level | The service level to be used - only when `method` is dropoff or pickup | String | Up to 50 characters long | NULL | N | N |
| source | The source of the return | String | One of the following values: `admin`, `direct`, `unexpected` | direct | Y | N |
| status | in progress] The status of the return | String | One of the following values: `application in progress`, `received` | application in progress | N | N |
| total_parcels | The total number of parcels being sent - required when `method` is dropoff or pickup | Integer | Up to 3 digits long | 1 | N | Y |
| vat_sender | The VAT number of the sender | String | Up to 20 characters long | NULL | N | N |
| weight | The weight of the parcel minus the weight of the items in grams - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |

## Delete return
This allows you to delete an return

**URL** : `/returns/:return/`

**Method** : `DELETE`

## Update Returns
This allows you to update a specific return

**URL** : `/returns/`

**URL** : `/returns/:return/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| closed_at | The date and time the return was marked as closed | Datetime |  | NULL | N | N |
| courier_reference | The reference of the courier to be used - only when `method` is dropoff or pickup | Datetime |  | NULL | N | N |
| customer_id | A valid Customer ID, can only update when null | Integer |  | NULL | N | Y |
| decided_at | The date and time the return was accepted or rejected | Datetime |  | NULL | N | N |
| items | An array of items for the return - see [Returns Items](Returns_Items.md#update-returns-items) | Array |  | NULL | N | N |
| notes | Notes relating to the return | String |  | NULL | N | N |
| parcel_depth | The depth of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| parcel_length | The length of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| parcel_width | The width of the parcel in millimetres - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |
| pickup_from | A valid UTC datetime of when the return should be picked up from | Datetime |  | NULL | N | N |
| pickup_until | A valid UTC datetime of when the return should be picked up until | Datetime |  | NULL | N | N |
| profile_id | A valid Profile ID of whom raised the return, can only update when null | Integer |  | NULL | N | Y |
| received_at | The date and time the return was marked as arriving | Datetime |  | NULL | N | N |
| rma | A unique reference for the return, can only set if not already set | Integer | Exactly 10 digits long | NULL | N | Y |
| service_level | The service level to be used - only when `method` is dropoff or pickup | String | Up to 50 characters long | NULL | N | N |
| status | The status of the return | String | One of the following values: `application in progress`, `awaiting approval`, `awaiting items`, `cancelled`, `closed`, `provisionally approved`, `received`, `rejected`, `request approved` | NULL | N | N |
| unexpected_resolution | The resolution to use when a return is unexpectedly received - required when source is unexpected and status is to be closed | String | One of the following values: `resend`, `restock` | NULL | N | Y |
| updated_at | The date and time the return was last updated | Datetime |  | NULL | N | N |
| vat_sender | The VAT number of the sender | String | Up to 20 characters long | NULL | N | N |
| weight | The weight of the parcel minus the weight of the items in grams - required when `method` is dropoff or pickup | Integer | Up to 10 digits long | 0 | N | Y |

## View Returns
This allows you to list the returns

**URL** : `/returns/`

**URL** : `/returns/:return/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| addresses | An array of addresses for the return - see [Returns Addresses](Returns_Addresses.md#view-returns-addresses) | Array |  |
| admin_id | A valid Admin ID of whom created the return | Integer |  |
| closed_at | The date and time the return was marked as closed | Datetime |  |
| company_name | The company name of the customer | String | Up to 255 characters long |
| courier_reference | The reference of the courier to be used | Datetime |  |
| created_at | The date and time the return was marked as created | Datetime |  |
| currency | The currency code that the return is priced in | String | Exactly 3 characters long |
| customer_id | A valid Customer ID | Integer |  |
| decided_at | The date and time the return was accepted or rejected | Datetime |  |
| first_name | The first name of the customer | String | Up to 255 characters long |
| full_name | The full name of the customer | String | Up to 255 characters long |
| items | An array of items for the return - see [Returns Items](Returns_Items.md#view-returns-items) | Array |  |
| last_name | The last name of the customer | String | Up to 255 characters long |
| method | The returns method the Customer will use to return the items | String | One of the following values: `dropoff`, `pickup`, `rts`, `self` |
| notes | Notes relating to the return | String |  |
| parcel_depth | The depth of the parcel in millimetres | Integer | Up to 10 digits long |
| parcel_length | The length of the parcel in millimetres | Integer | Up to 10 digits long |
| parcel_width | The width of the parcel in millimetres | Integer | Up to 10 digits long |
| pickup_from | A valid UTC datetime of when the return should be picked up from | Datetime |  |
| pickup_until | A valid UTC datetime of when the return should be picked up by | Datetime |  |
| profile_id | A valid Profile ID of whom raised the return | Integer |  |
| received_at | The date and time the return was marked as arriving | Datetime |  |
| reference | A unique reference for this return | String | Exactly 10 characters long |
| rma | A unique reference for the return | Integer | Exactly 10 digits long |
| service_level | The service level to be used | String | Up to 50 characters long |
| source | The source of the return | String | One of the following values: `admin`, `direct`, `unexpected` |
| status | The status of the return | String | One of the following values: `application in progress`, `awaiting approval`, `awaiting items`, `cancelled`, `closed`, `provisionally approved`, `received`, `rejected`, `request approved` |
| store_id | A valid Store ID of where the return was made | Integer |  |
| total_accepted | The total number units in this return that have been accepted | Integer | Up to 10 digits long |
| total_parcels | The total number of parcels being sent | Integer | Exactly 3 digits long |
| total_received | The total number units in this return that have been received | Integer | Up to 10 digits long |
| total_rejected | The total number units in this return that that have been rejected | Integer | Up to 10 digits long |
| total_returning | The total number units in this return that that are being returned | Integer | Up to 10 digits long |
| total_uom_accepted | The total number units in this return that have been accepted, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_received | The total number units in this return that have been received, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_rejected | The total number units in this return that that have been rejected, in Unit of Measure terms | Integer | Up to 10 digits long |
| total_uom_returning | The total number units in this return that that are being returned, in Unit of Measure terms | Integer | Up to 10 digits long |
| unexpected_resolution | The resolution to use when a return is unexpectedly received | String | One of the following values: `resend`, `restock` |
| updated_at | A UTC datetime of when the return was updated | Datetime |  |
| vat_sender | The VAT number of the sender | String | Up to 20 characters long |
| weight | The weight of the parcel minus the weight of the items in grams | Integer | Up to 10 digits long |
