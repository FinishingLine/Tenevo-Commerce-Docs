# Teams Members
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Team Members
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /teams/:team/members | POST | This allows you to create a team member | [Details](#create-team-member) |
| /teams/:team/members/:member | DELETE | This allows you to delete a team member | [Details](#delete-team-member) |
| /teams/members/ | GET | This allows you to list team members | [Details](#view-team-members) |
| /teams/:team/members/:member | GET | This allows you to list team members | [Details](#view-team-members) |

## Create Team Member
This allows you to create a team member

**URL** : `/teams/:team/members`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| admin_id | A valid Administrator ID | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Team Member
This allows you to delete a team member

**URL** : `/teams/:team/members/:member`

**Method** : `DELETE`

## View Team Members
This allows you to list team members

**URL** : `/teams/members/`

**URL** : `/teams/:team/members/:member`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| admin_id | A valid Administrator ID | Integer | Up to 10 digits long |
| first_name | The first name of the administrator | String | Between 1 and 255 characters long |
| full_name | The full name of the administrator | String | Up to 511 characters long |
| last_name | The last name/surname/family name of the administrator | String | Between 1 and 255 characters long |
