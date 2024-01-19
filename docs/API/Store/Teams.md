# Teams
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Teams
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /teams/ | POST | This allows you to create a team | [Details](#create-team) |
| /teams/:team/ | DELETE | This allows you to delete a team | [Details](#delete-team) |
| /teams/ | PUT | This allows you to update a specific team | [Details](#update-teams) |
| /teams/:team/ | PUT | This allows you to update a specific team | [Details](#update-teams) |
| /teams/ | GET | This allows you to list teams | [Details](#view-teams) |
| /teams/:team/ | GET | This allows you to list teams | [Details](#view-teams) |

## Create Team
This allows you to create a team

**URL** : `/teams/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description of the team | String |  | NULL | Y | N |
| is_default | Indicates that the team is the default group | Boolean |  | false | N | N |
| members | An array containing the members of the group - see [Teams Members](Teams_Members.md#create-teams-members) | Array |  | NULL | N | N |
| name | The name for the team | String | Up to 50 characters long | NULL | Y | N |
| type | The type of team | String | One of the following values: `any`, `support` | any | N | N |

## Delete Team
This allows you to delete a team

**URL** : `/teams/:team/`

**Method** : `DELETE`

## Update Teams
This allows you to update a specific team

**URL** : `/teams/`

**URL** : `/teams/:team/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description of the team | String |  | NULL | Y | N |
| is_default | Indicates that the team is the default group | Boolean |  | false | N | N |
| name | The name for the team | String | Up to 50 characters long | NULL | Y | N |

## View Teams
This allows you to list teams

**URL** : `/teams/`

**URL** : `/teams/:team/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| description | A description of the team | String |  |
| is_default | Indicates that the team is the default group | Boolean |  |
| members | An array containing the members of the group - see [Teams Members](Teams_Members.md#view-teams-members) | Array |  |
| name | The name for the team | String | Up to 50 characters long |
| type | The type of team | String | One of the following values: `any`, `support` |
