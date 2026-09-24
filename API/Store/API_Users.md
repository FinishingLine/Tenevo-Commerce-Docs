# API Users
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages the API users that reach this API - the tenant's own, and those belonging to its extensions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /api/users/ | GET | This allows you to list the API users that reach this API. The keys themselves are only ever returned when an API user is created or rotated | [Details](#view-api-users) |
| /api/users/:user/ | GET | This allows you to list the API users that reach this API. The keys themselves are only ever returned when an API user is created or rotated | [Details](#view-api-users) |

## View API Users
This allows you to list the API users that reach this API. The keys themselves are only ever returned when an API user is created or rotated

**URL** : `/api/users/`

**URL** : `/api/users/:user/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| allowed_ips | The IP addresses and CIDR ranges the API user may be used from, comma separated, or * for anywhere | String |  |
| allowed_methods | The HTTP methods the API user may use, comma separated, or * for any | String | Up to 100 characters long |
| allowed_resources | The resources the API user may use, comma separated, wildcards allowed, or * for any | String |  |
| created_at | A UTC datetime of when the API user was created | Datetime |  |
| description | A description of the API user | String | Up to 255 characters long |
| expires_at | A UTC datetime of when the API user expires - empty if it never does | Datetime |  |
| name | The name of the API user | String | Up to 100 characters long |
| owner | The name of what the API user belongs to - an extension's slug for an extension's, and empty for the tenant's own | String |  |
| owner_id | The ID of the administrator (for their own) or extension the API user belongs to - empty for the tenant's own | Integer |  |
| owner_type | What the API user belongs to | String | One of the following values: `admin`, `extension`, `tenant` |
| public_key | The API user's public key - its private key and secret are only ever returned when it is created or rotated | String |  |
| replaced_by_id | The ID of the API user that replaced this one when it was rotated | Integer |  |
| replaces_id | The ID of the API user this one replaced, while that one still exists - empty once it has been revoked | Integer |  |
| rotated_at | A UTC datetime of when the API user was rotated - empty if it never has been | Datetime |  |
| rotated_from_id | The ID of the API user this one replaced, whether or not it still exists | Integer |  |
| status | The status of the API user - expired once past its expiry, replaced once rotated and its replacement is live, expiring within 14 days of its expiry, and active otherwise | String | One of the following values: `active`, `expiring`, `replaced`, `expired` |
| username | The API username | String | Up to 26 characters long |
