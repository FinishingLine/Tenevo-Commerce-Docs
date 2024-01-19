# System Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributes/ | POST | This allows you to create attributes | [Details](#create-system-attributes) |
| /system/attributes/:attribute/ | DELETE | This allows you to delete a specified attribute | [Details](#delete-attribute) |
| /system/attributes/ | PUT | This allows you to update attributes | [Details](#update-system-attributes) |
| /system/attributes/:attribute/ | PUT | This allows you to update attributes | [Details](#update-system-attributes) |
| /system/attributes/ | GET | This allows you to list system attributes | [Details](#view-system-attributes) |
| /system/attributes/:attribute/ | GET | This allows you to list system attributes | [Details](#view-system-attributes) |

## Create System Attributes
This allows you to create attributes

**URL** : `/system/attributes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| api_field | The name of the field when using the API to access the data, must be unique to the attr_type | String | Between 1 and 50 characters long | NULL | Y | N |
| attr_type | The type of attribute, or attribute family, that the attribute belows to | String | One of the following values: `contact`, `customer`, `customer_profile`, `product`, `ticket` | NULL | Y | N |
| description | A description about the attribute | String |  | NULL | N | N |
| field_default | The default value of the field where no value is specified | String | Between 1 and 50 characters long | NULL | N | N |
| field_input | The type of input that should be used to input the data | String | One of the following values: `date`, `datetime`, `dropdown`, `file`, `html`, `radio`, `time`, `text`, `textarea`, `toggle` | NULL | Y | N |
| field_options | A pipe seperated list of options that the field could be the value of - required when field_type is choice [value1=label1|value2=label2], and optional when field_type is file where mime types are listed to limit the file type [image/jpeg] | String |  | NULL | N | Y |
| field_type | The type of data that is expected in the field | String | One of the following values: `boolean`, `choice`, `date`, `datetime`, `email`, `file`, `float`, `integer`, `string`, `time`, `url` | NULL | Y | N |
| frontend_editable | Indicates whether or not the data can be edited/updated on the frontend | Boolean |  | false | N | N |
| is_personal | Indicates whether or not the field is personal, or not | Boolean |  | false | N | N |
| is_required | Indicates whether or not the field is required, or not | Boolean |  | false | N | N |
| max_length | The maximum length (number of characters) that the data can be [NB: max_length can be no longer than 10 characters if an integer, and 65 characters (excluding point) if float] | Integer | Between 1 and 3 digits long | 100 | N | N |
| max_value | The maximum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 | 999999999999999.999 | N | N |
| min_length | The minimum length (number of characters) that the data can be [NB: min_length must be no smaller than 4 characters for float] | Integer | Between 1 and 3 digits long | 1 | N | N |
| min_value | The minimum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 | -999999999999999.999 | N | N |
| name | The name of the field, must be unique | String | Between 1 and 50 characters long | NULL | Y | N |
| store_id | A valid Store ID to limit the attribute to | Integer |  | NULL | N | N |
| unique_type | If the field requires data to be unique, this is how unique the data should be | String | One of the following values: `global`, `none`, `store` | none | N | N |

## Delete Attribute
This allows you to delete a specified attribute

**URL** : `/system/attributes/:attribute/`

**Method** : `DELETE`

## Update System Attributes
This allows you to update attributes

**URL** : `/system/attributes/`

**URL** : `/system/attributes/:attribute/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| description | A description about the attribute | String |  | NULL | N | N |
| field_default | The default value of the field where no value is specified | String | Between 1 and 50 characters long | NULL | N | N |
| field_options | A pipe seperated list of options that the field could be the value of - required when field_type is choice [value1=label1|value2=label2], and optional when field_type is file where mime types are listed to limit the file type [image/jpeg] | String |  | NULL | N | Y |
| frontend_editable | Indicates whether or not the data can be edited/updated on the frontend | Boolean |  | false | N | N |
| is_personal | Indicates whether or not the field is personal, or not | Boolean |  | false | N | N |
| is_required | Indicates whether or not the field is required, or not | Boolean |  | false | N | N |
| max_length | The maximum length (number of characters) that the data can be - max_length can only be made larger | Integer | Between 1 and 3 digits long | 100 | N | Y |
| max_value | The maximum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 | 999999999999999.999 | N | N |
| min_length | The minimum length (number of characters) that the data can be [NB: min_length must be no smaller than 4 characters for float] | Integer | Between 1 and 3 digits long | 1 | N | N |
| min_value | The minimum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 | -999999999999999.999 | N | N |
| name | The name of the field, must be unique | String | Between 1 and 50 characters long | NULL | Y | N |
| store_id | A valid Store ID to limit the attribute to - you can only change a specific store_id to all stores | Integer |  | NULL | N | Y |
| unique_type | If the field requires data to be unique, this is how unique the data should be - can only go from: global to store; or; global to none; or; store to none | String | One of the following values: `global`, `none`, `store` | none | N | Y |

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
