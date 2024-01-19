# Administrators Filters
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Administrators Filters
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /administrators/:admin/filters/ | PUT | This allows you to update a specific administrator's filters | [Details](#update-specific-administrator-filters) |
| /administrators/:admin/filters/ | GET | This allows you to list the administrator's filters | [Details](#view-administrator-filters) |
| /administrators/:admin/filters/:filter | GET | This allows you to list the administrator's filters | [Details](#view-administrator-filters) |

## Update Specific Administrator Filters
This allows you to update a specific administrator's filters

**URL** : `/administrators/:admin/filters/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| filters | A JSON encoded string of the filters | String |  | NULL | Y | N |
| section | The section the filters are applicable for | String | One of the following values: `clients`, `dispatching`, `fulfillments`, `messaging`, `production`, `staff`, `surveys`, `timesheets`, `warehouse` | NULL | Y | N |

## View Administrator Filters
This allows you to list the administrator's filters

**URL** : `/administrators/:admin/filters/`

**URL** : `/administrators/:admin/filters/:filter`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| filters | A JSON encoded string of the filters | String |  |
| section | The section the filters are applicable for | String | One of the following values: `clients`, `dispatching`, `fulfillments`, `messaging`, `production`, `staff`, `surveys`, `timesheets`, `warehouse` |
