# Automations
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages automations
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /automations/ | POST | This allows you to create automations | [Details](#create-automations) |
| /automations/:automation/ | DELETE | This allows you to delete a specified automation | [Details](#delete-automations) |
| /automations/ | PUT | This allows you to update automation | [Details](#update-automation) |
| /automations/:automation/ | PUT | This allows you to update automation | [Details](#update-automation) |
| /automations/ | GET | This allows you to list automation | [Details](#view-automations) |
| /automations/:automation/ | GET | This allows you to list automation | [Details](#view-automations) |

## Create Automations
This allows you to create automations

**URL** : `/automations/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| actions | An array of actions that belong to this automation - see [Automations Actions](Automations_Actions.md#create-automations-actions) | Array |  | NULL | N | N |
| cron_pattern | A valid Cron Pattern for when the automation should be triggered, only required where trigged_by is schedule | String | Up to 100 characters long | NULL | N | Y |
| description | A description about the automation | String |  | NULL | Y | N |
| event | A valid Event for when the automation should be triggered, only required where trigged_by is event | String | Up to 100 characters long | NULL | N | Y |
| name | The name of the automation | String | Up to 100 characters long | NULL | Y | N |
| owner_id | Where the automation is private, a valid Owner ID, required with owner_type | Integer |  | NULL | N | Y |
| owner_type | Where the automation is private, a valid Owner Type, required with owner_id | String | Must have the value: `admin` | NULL | N | Y |
| position | The position of the automation, used to determine the order of execution for events and sceduled automations, or the display position for macros | Integer |  | 0 | N | N |
| store_id | A valid Store ID, where this automation belongs to a specific store | Integer |  | NULL | N | N |
| triggered_by | How the automation should be triggered | String | One of the following values: `event`, `macro`, `schedule` | NULL | Y | N |
| type | The type of automation | String | Up to 100 characters long | NULL | Y | N |

## Delete Automations
This allows you to delete a specified automation

**URL** : `/automations/:automation/`

**Method** : `DELETE`

## Update Automation
This allows you to update automation

**URL** : `/automations/`

**URL** : `/automations/:automation/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| actions | An array of actions that belong to this automation - see [Automations Actions](Automations_Actions.md#update-automations-actions) | Array |  | NULL | N | N |
| cron_pattern | A valid Cron Pattern for when the automation should be triggered, only required where trigged_by is schedule | String | Up to 100 characters long | NULL | N | Y |
| description | A description about the automation | String |  | NULL | Y | N |
| event | A valid Event for when the automation should be triggered, only required where trigged_by is event | String | Up to 100 characters long | NULL | N | Y |
| name | The name of the automation | String | Up to 100 characters long | NULL | Y | N |
| owner_id | Where the automation is private, a valid Owner ID, required with owner_type - can only remove the owner | Integer |  | NULL | N | Y |
| owner_type | Where the automation is private, a valid Owner Type, required with owner_id - can only remove the owner | String | Must have the value: `admin` | NULL | N | Y |
| position | The position of the automation, used to determine the order of execution for events and sceduled automations, or the display position for macros | Integer |  | 0 | N | N |
| status | The status of the automation | String | One of the following values: `active`, `inactive` | NULL | N | N |
| store_id | A valid Store ID, where this automation belongs to a specific store | Integer |  | NULL | N | N |
| type | The type of automation | String | Up to 100 characters long | NULL | Y | N |

## View Automations
This allows you to list automation

**URL** : `/automations/`

**URL** : `/automations/:automation/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| actions | An array of actions that belong to this automation - see [Automations Actions](Automations_Actions.md#view-automations-actions) | Array |  |
| created_at | A UTC timestamp of when the automation was created | Datetime |  |
| cron_pattern | A valid Cron Pattern for when the automation should be triggered, where trigged_by is schedule | String | Up to 100 characters long |
| description | A description about the automation | String |  |
| event | A valid Event for when the automation should be triggered, where trigged_by is event | String | Up to 100 characters long |
| name | The name of the automation | String | Up to 100 characters long |
| owner_id | Where the automation is private, a valid Owner ID | Integer |  |
| owner_type | Where the automation is private, a valid Owner Type | String | Must have the value: `admin` |
| position | The position of the automation, used to determine the order of execution for events and sceduled automations, or the display position for macros | Integer |  |
| status | The status of the automation | String | One of the following values: `active`, `inactive` |
| store | Where applicable to a specific Store, the name of the Store | String |  |
| store_id | A valid Store ID, where this automation belongs to a specific store | Integer |  |
| triggered_by | How the automation should be triggered | String | One of the following values: `event`, `macro`, `schedule` |
| type | The type of automation | String | Up to 100 characters long |
| updated_at | A UTC timestamp of when the automation was last updated | Datetime |  |
