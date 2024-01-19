# Issues
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages issues
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /issues/ | POST | This allows you to create issues | [Details](#create-issues) |
| /issues/:issue/ | DELETE | This allows you to delete a specified issue | [Details](#delete-issue) |
| /issues/ | PUT | This allows you to update issues | [Details](#update-issues) |
| /issues/:issue/ | PUT | This allows you to update issues | [Details](#update-issues) |
| /issues/ | GET | This allows you to list issues | [Details](#view-issues) |
| /issues/:issue/ | GET | This allows you to list issues | [Details](#view-issues) |

## Create Issues
This allows you to create issues

**URL** : `/issues/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| customer_id | A valid Customer ID | Integer |  | NULL | Y | N |
| issue_type_id | A valid Issue Type ID | Integer | Up to 10 digits long | NULL | Y | N |
| item_id | The ID of the item that has an issue that needs to be resolved | Integer |  | NULL | Y | N |
| item_type | The type of item that has an issue that needs to be resolved | String | One of the following values: `customer`, `marketplace`, `order`, `return` | NULL | Y | N |
| store_id | A valid Store ID | Integer |  | NULL | Y | N |

## Delete Issue
This allows you to delete a specified issue

**URL** : `/issues/:issue/`

**Method** : `DELETE`

## Update Issues
This allows you to update issues

**URL** : `/issues/`

**URL** : `/issues/:issue/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| customer_id | A valid Customer ID - can only update when customer_id is null | Integer |  | NULL | N | Y |
| notes | Notes relating to the issue | String |  | NULL | N | N |
| resolver_id | A valid Admin ID, required when status is closed | Integer |  | NULL | N | Y |
| status | The status of the issue | String | One of the following values: `open`, `closed` | open | N | N |
| store_id | A valid Store ID - can only update when store_id is null | Integer |  | NULL | N | Y |

## View Issues
This allows you to list issues

**URL** : `/issues/`

**URL** : `/issues/:issue/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| company_name | The customers company name | String | Up to 100 characters long |
| created_at | A UTC datetime of when the issue was created | Datetime |  |
| customer_id | A valid Customer ID | Integer |  |
| issue_parent_type | The name of the Issue Parent Type | String | Up to 100 characters long |
| issue_parent_type_id | A valid Issue Parent Type ID | Integer | Up to 10 digits long |
| issue_type | The name of the Issue Type | String | Up to 100 characters long |
| issue_type_id | A valid Issue Type ID | Integer | Up to 10 digits long |
| item_id | The ID of the item that has an issue that needs to be resolved | Integer |  |
| item_type | The type of item that has an issue that needs to be resolved | String | One of the following values: `customer`, `marketplace`, `order`, `return` |
| notes | Notes relating to the issue | String |  |
| primary_first_name | The first name of the primary account holder of the customer | String |  |
| primary_full_name | The full name of the primary account holder of the customer | String |  |
| primary_last_name | The last name of the primary account holder of the customer | String |  |
| reference | The reference for the issue | String | Exactly 10 characters long |
| resolver | The name of the Admin whom resolved the issue | String |  |
| resolver_id | A valid Admin ID | Integer |  |
| status | The status of the issue | String | One of the following values: `open`, `closed` |
| store | The name of the store | String | Up to 50 characters long |
| store_id | A valid Store ID | Integer |  |
| updated_at | A UTC datetime of when the issue was updated | Datetime |  |
