# Automations Actions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages automation actions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /automations/:automation/actions/ | POST | This allows you to create automation actions | [Details](#create-automation-actions) |
| /automations/:automation/actions/:action/ | DELETE | This allows you to delete a specified automation action | [Details](#delete-automation-action) |
| /automations/:automation/actions/ | PUT | This allows you to update automation actions | [Details](#update-automation-actions) |
| /automations/:automation/actions/:action/ | PUT | This allows you to update automation actions | [Details](#update-automation-actions) |
| /automations/:automation/actions/ | GET | This allows you to list automation actions | [Details](#view-automation-actions) |
| /automations/:automation/actions/:action/ | GET | This allows you to list automation actions | [Details](#view-automation-actions) |

## Create Automation Actions
This allows you to create automation actions

**URL** : `/automations/:automation/actions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The attribute being targeted for the automation | String | Up to 100 characters long | NULL | Y | N |
| type | The type of action | String | One of the following values: `attributeupdate`, `email` | NULL | Y | N |
| value | The value to use related to the type and attribute specified, required when type is email | String |  | NULL | N | Y |

## Delete Automation Action
This allows you to delete a specified automation action

**URL** : `/automations/:automation/actions/:action/`

**Method** : `DELETE`

## Update Automation Actions
This allows you to update automation actions

**URL** : `/automations/:automation/actions/`

**URL** : `/automations/:automation/actions/:action/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute | The attribute being targeted for the automation | String | Up to 100 characters long | NULL | Y | N |
| value | The value to use related to the type and attribute specified, required when type is email | String |  | NULL | N | Y |

## View Automation Actions
This allows you to list automation actions

**URL** : `/automations/:automation/actions/`

**URL** : `/automations/:automation/actions/:action/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attribute | The attribute being targeted for the automation | String | Up to 100 characters long |
| type | The type of action | String | One of the following values: `attributeupdate`, `email` |
| value | The value to use related to the type and attribute specified | String |  |
