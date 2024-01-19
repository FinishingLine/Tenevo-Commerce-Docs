# Logs
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Logs
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /logs/ | GET | This allows you to list the logs | [Details](#view-logs) |
| /logs/:log/ | GET | This allows you to list the logs | [Details](#view-logs) |

## View Logs
This allows you to list the logs

**URL** : `/logs/`

**URL** : `/logs/:log/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| caller | The name of the caller making the request | String |  |
| caller_id | A valid ID string of the object that made the request | Integer |  |
| caller_type | The type of caller making the request | String |  |
| cat_1 | The first level categorisation | String |  |
| cat_2 | The second level categorisation | String |  |
| cat_3 | The third level categorisation | String |  |
| datetime_log | A UTC datetime of when the log entry was created | Datetime |  |
| is_cron | Indicates whether the request was made during a cron job, or not | Boolean |  |
| is_debug | Indicates whether the request was made with debug mode switched on, or not | Boolean |  |
| method | The way the request was carried out | String | One of the following values: `DELETE`, `POST`, `PUT` |
| query | The query requested | String |  |
| request | A JSON string containing the request made | String |  |
| response | A JSON string containing the response to the request - usually error strings will feature here, but will be empty if a successful request | String |  |
| response_time | The number of milliseconds it took to process the request | Integer | Up to 10 digits long |
| status_code | The status code received from the request/update | Integer | Up to 10 digits long |
