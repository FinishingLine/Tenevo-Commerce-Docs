# Login
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Provides login functionality for users (only accessible by systems)
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /login/ | POST | This creates a new login session for a user | [Details](#creates-a-new-login-session) |
| /login/ | DELETE | This allows you to delete a login session | [Details](#delete-a-login-session) |
| /login/ | GET | This allows you to list the login | [Details](#validate-that-a-given-token-is-valid) |
| /login/:group/ | GET | This allows you to list the login | [Details](#validate-that-a-given-token-is-valid) |

## Creates a new login session
This creates a new login session for a user

**URL** : `/login/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| password | The password used to access the account | String | Between 1 and 100 characters long | NULL | Y | N |
| type | The login user type | String | Must have the value: `client` | NULL | Y | N |
| username | The user's username | String | Between 1 and 255 characters long | NULL | Y | N |

## Delete a login session
This allows you to delete a login session

**URL** : `/login/`

**Method** : `DELETE`

## Validate that a given token is valid
This allows you to list the login

**URL** : `/login/`

**URL** : `/login/:group/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| status | Indicates whether the token is valid | Boolean |  |
