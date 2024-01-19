# Marketplaces Conditions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Marketplaces Conditions
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /marketplaces/conditions/ | POST | This allows you to create a condition for a marketplace | [Details](#create-a-condition) |
| /marketplaces/:marketplace/conditions/:condition/ | DELETE | This allows you to delete a condition from a marketplace | [Details](#delete-a-condition) |
| /marketplaces/:marketplace/conditions/ | PUT | This allows you to update conditions for a marketplace | [Details](#update-conditions) |
| /marketplaces/:marketplace/conditions/:condition/ | PUT | This allows you to update conditions for a marketplace | [Details](#update-conditions) |
| /marketplaces/:marketplace/conditions/ | GET | This allows you to list conditions for a marketplace | [Details](#view-conditions) |
| /marketplaces/:marketplace/conditions/:condition/ | GET | This allows you to list conditions for a marketplace | [Details](#view-conditions) |

## Create a Condition
This allows you to create a condition for a marketplace

**URL** : `/marketplaces/conditions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` | NULL | Y | N |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| type | The type of condition | String | One of the following values: `order`, `orderitem`, `product` | NULL | Y | N |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes`, `months` | NULL | N | N |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` | NULL | Y | N |

## Delete a Condition
This allows you to delete a condition from a marketplace

**URL** : `/marketplaces/:marketplace/conditions/:condition/`

**Method** : `DELETE`

## Update Conditions
This allows you to update conditions for a marketplace

**URL** : `/marketplaces/:marketplace/conditions/`

**URL** : `/marketplaces/:marketplace/conditions/:condition/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` | NULL | Y | N |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long | NULL | Y | N |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes`, `months` | NULL | Y | N |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` | NULL | Y | N |

## View Conditions
This allows you to list conditions for a marketplace

**URL** : `/marketplaces/:marketplace/conditions/`

**URL** : `/marketplaces/:marketplace/conditions/:condition/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| comparator | The comparator function to use to compare the value | String | One of the following values: `after`, `before`, `contain`, `equal`, `less`, `lessequal`, `more`, `moreequal`, `notequal`, `notcontain` |
| field | The name of the field that is being used to extract a value to compare against the stored value | String | Between 1 and 100 characters long |
| type | The type of condition | String | One of the following values: `order`, `orderitem`, `product` |
| value | The value to compare against the stored value | String | Between 1 and 100 characters long |
| value_modifier | The modifier used to manipulate the value - for example, if value is 1 and days is used, the value_modifier will effectively be looking for dates tomorrow (with equals comparator) | String | One of the following values: `days`, `minutes`, `months` |
| value_type | The type of field the value takes | String | One of the following values: `boolean`, `date`, `datetime`, `float`, `id`, `number`, `percentage`, `string`, `time` |
