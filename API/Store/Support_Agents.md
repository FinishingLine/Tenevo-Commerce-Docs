# Support Agents
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Support Agents
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /support/agents/ | POST | This allows you to create a support agent | [Details](#create-support-agent) |
| /support/agents/:agent/ | DELETE | This allows you to delete a support agent | [Details](#delete-support-agent) |
| /support/agents/ | GET | This allows you to list support agents | [Details](#view-support-agents) |
| /support/agents/:agent/ | GET | This allows you to list support agents | [Details](#view-support-agents) |

## Create Support Agent
This allows you to create a support agent

**URL** : `/support/agents/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| admin_id | A valid Administrator ID | Integer | Up to 10 digits long | NULL | Y | N |
| reference | A reference for the agent | String | Up to 100 characters long | NULL | Y | N |

## Delete Support Agent
This allows you to delete a support agent

**URL** : `/support/agents/:agent/`

**Method** : `DELETE`

## View Support Agents
This allows you to list support agents

**URL** : `/support/agents/`

**URL** : `/support/agents/:agent/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| admin_id | A valid Administrator ID | Integer | Up to 10 digits long |
| reference | A reference for the agent | String | Up to 100 characters long |
