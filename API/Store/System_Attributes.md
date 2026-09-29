# System Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributes/ | GET | This allows you to list system attributes | [Details](#view-system-attributes) |
| /system/attributes/:attribute/ | GET | This allows you to list system attributes | [Details](#view-system-attributes) |

## View System Attributes
This allows you to list system attributes

**URL** : `/system/attributes/`

**URL** : `/system/attributes/:attribute/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| api_field | The name of the field when using the API to access the data | String | Between 1 and 50 characters long |
| attr_type | The type of attribute, or attribute family, that the attribute belows to | String | One of the following values: `contact`, `customer`, `customer_profile`, `product`, `ticket` |
| description | A description about the attribute | String |  |
| field_default | The default value of the field where no value is specified | String | Between 1 and 50 characters long |
| field_input | The type of input that should be used to input the data | String | One of the following values: `date`, `datetime`, `dropdown`, `file`, `html`, `radio`, `time`, `text`, `textarea`, `toggle` |
| field_options | A pipe seperated list of options that the field could be the value of | String |  |
| field_type | The type of data that is expected in the field | String | One of the following values: `boolean`, `choice`, `date`, `datetime`, `email`, `file`, `float`, `integer`, `string`, `time`, `url` |
| frontend_editable | Indicates whether or not the data can be edited/updated on the frontend | Boolean |  |
| is_personal | Indicates whether or not the field is personal, or not | Boolean |  |
| is_required | Indicates whether or not the field is required, or not | Boolean |  |
| is_system | Indicates whether or not the field is a system attribute, or not | Boolean |  |
| is_unique | Indicates whether or not the field is unique, or not | Boolean |  |
| max_length | The maximum length (number of characters) that the data can be | Integer | Between 1 and 3 digits long |
| max_value | The maximum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 |
| min_length | The minimum length (number of characters) that the data can be | Integer | Between 1 and 3 digits long |
| min_value | The minimum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 |
| name | The name of the field | String | Between 1 and 50 characters long |
| store_id | A valid Store ID to limit the attribute to | Integer |  |
| unique_type | If the field requires data to be unique, this is how unique the data should be | String | One of the following values: `global`, `none`, `store` |
