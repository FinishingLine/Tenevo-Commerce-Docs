# System Alerts Triggers
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system alerts triggers
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/alerts/:alert/triggers/ | POST | This allows you to create alert triggers | [Details](#create-system-alert-triggers) |
| /system/alerts/:alert/triggers/:trigger/ | DELETE | This allows you to delete a specified alert trigger | [Details](#delete-alert-trigger) |
| /system/alerts/:alert/triggers/ | PUT | This allows you to update alert triggers | [Details](#update-system-alert-triggers) |
| /system/alerts/:alert/triggers/:trigger/ | PUT | This allows you to update alert triggers | [Details](#update-system-alert-triggers) |
| /system/alerts/:alert/triggers/ | GET | This allows you to list alert triggers | [Details](#view-system-alert-triggers) |
| /system/alerts/:alert/triggers/:trigger/ | GET | This allows you to list alert triggers | [Details](#view-system-alert-triggers) |

## Create System Alert Triggers
This allows you to create alert triggers

**URL** : `/system/alerts/:alert/triggers/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` | NULL | Y | N |
| configurable_source | The source where the configurable gets its data from, only used when is_configurable is true | String | One of the following values: `administrators`, `collections`, `documents`, `fulfillments`, `items`, `jobs`, `messages`, `scanners`, `staff`, `titles` | NULL | N | Y |
| configurable_source_id | The field of where the configurable takes the data from, only used when configurable_source has a value | String | Between 1 and 100 characters long | NULL | N | Y |
| configurable_source_label | The label of what to show the end user on the configurable, only used when configurable_source has a value | String | Between 1 and 100 characters long | NULL | N | Y |
| configurable_source_query | The query to run with the source lookup | String |  | NULL | N | Y |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| is_configurable | Indicates whether the trigger can be configured by the subscriber | Boolean |  | 0 | N | N |
| is_previous | Indicates whether the value is to be compared to the previous value of the field | Boolean |  | 0 | N | N |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes` | NULL | N | N |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time`, `variable` | NULL | Y | N |
| variable_value_type | The type of field the the variable type takes, only required when value_type is variable | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` | NULL | N | Y |

## Delete Alert Trigger
This allows you to delete a specified alert trigger

**URL** : `/system/alerts/:alert/triggers/:trigger/`

**Method** : `DELETE`

## Update System Alert Triggers
This allows you to update alert triggers

**URL** : `/system/alerts/:alert/triggers/`

**URL** : `/system/alerts/:alert/triggers/:trigger/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` | NULL | Y | N |
| configurable_source | The source where the configurable gets its data from, only used when is_configurable is true | String | One of the following values: `administrators`, `collections`, `documents`, `fulfillments`, `items`, `jobs`, `messages`, `scanners`, `staff`, `titles` | NULL | N | Y |
| configurable_source_id | The field of where the configurable takes the data from, only used when configurable_source has a value | String | Between 1 and 100 characters long | NULL | N | Y |
| configurable_source_label | The label of what to show the end user on the configurable, only used when configurable_source has a value | String | Between 1 and 100 characters long | NULL | N | Y |
| configurable_source_query | The query to run with the source lookup | String |  | NULL | N | Y |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| is_configurable | Indicates whether the trigger can be configured by the subscriber | Boolean |  | 0 | N | N |
| is_previous | Indicates whether the value is to be compared to the previous value of the field | Boolean |  | 0 | N | N |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes` | NULL | Y | N |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time`, `variable` | NULL | Y | N |
| variable_value_type | The type of field the the variable type takes, only required when value_type is variable | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` | NULL | N | Y |

## View System Alert Triggers
This allows you to list alert triggers

**URL** : `/system/alerts/:alert/triggers/`

**URL** : `/system/alerts/:alert/triggers/:trigger/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` |
| configurable_source | The source where the configurable gets its data from, only used when is_configurable is true | String | One of the following values: `administrators`, `collections`, `documents`, `fulfillments`, `items`, `jobs`, `messages`, `scanners`, `staff`, `titles` |
| configurable_source_id | The field of where the configurable takes the data from, only used when configurable_source has a value | String | Between 1 and 100 characters long |
| configurable_sourse_label | The label of what to show the end user on the configurable, only used when configurable_source has a value | String | Between 1 and 100 characters long |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long |
| is_configurable | Indicates whether the trigger can be configured by the subscriber | Boolean |  |
| is_previous | Indicates whether the value is to be compared to the previous value of the field | Boolean |  |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes` |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time`, `variable` |
| variable_value_type | The type of field the the variable type takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` |
