# System Attribute Sets Groups Attributes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attribute set group attributes
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributesets/:attributeset/groups/:group/attributes/ | POST | This allows you to create attribute set group attributes | [Details](#create-system-attribute-set-group-attributes) |
| /system/attributesets/:attributeset/groups/:group/:group/attributes/:attribute/ | DELETE | This allows you to delete a specified attribute set group attributes | [Details](#delete-attribute-set-group-attribute) |
| /system/attributesets/:attributeset/groups/:group/attributes/ | PUT | This allows you to update attribute set group attributes | [Details](#update-system-attribute-set-group-attributes) |
| /system/attributesets/:attributeset/groups/:group/attributes/:attribute | PUT | This allows you to update attribute set group attributes | [Details](#update-system-attribute-set-group-attributes) |
| /system/attributesets/:attributeset/groups/:group/attributes/ | GET | This allows you to list attribute set group attributes | [Details](#view-system-attribute-set-group-attributes) |
| /system/attributesets/:attributeset/groups/:group/attributes/:attribute/ | GET | This allows you to list attribute set group attributes | [Details](#view-system-attribute-set-group-attributes) |

## Create System Attribute Set Group Attributes
This allows you to create attribute set group attributes

**URL** : `/system/attributesets/:attributeset/groups/:group/attributes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attribute_id | A valid Attribute ID | Integer |  | NULL | Y | N |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |

## Delete Attribute Set Group Attribute
This allows you to delete a specified attribute set group attributes

**URL** : `/system/attributesets/:attributeset/groups/:group/:group/attributes/:attribute/`

**Method** : `DELETE`

## Update System Attribute Set Group Attributes
This allows you to update attribute set group attributes

**URL** : `/system/attributesets/:attributeset/groups/:group/attributes/`

**URL** : `/system/attributesets/:attributeset/groups/:group/attributes/:attribute`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |

## View System Attribute Set Group Attributes
This allows you to list attribute set group attributes

**URL** : `/system/attributesets/:attributeset/groups/:group/attributes/`

**URL** : `/system/attributesets/:attributeset/groups/:group/attributes/:attribute/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| api_field | The name of the field when using the API to access the data | String | Between 1 and 50 characters long |
| attribute | The attribute name | String | Between 1 and 50 characters long |
| attribute_id | A valid Attribute ID | Integer |  |
| description | A description of the attribute | String |  |
| field_default | The default value the field takes when no data is provided | String |  |
| field_input | The type of input that should be used to input the data | String | One of the following values: `date`, `datetime`, `dropdown`, `file`, `html`, `radio`, `time`, `text`, `textarea`, `toggle` |
| field_options | A pipe seperated list of options that the field could be the value of | String |  |
| field_type | The type of data that is expected in the field | String | One of the following values: `boolean`, `choice`, `date`, `datetime`, `email`, `file`, `float`, `integer`, `string`, `time`, `url` |
| frontend_editable | Indicates whether or not the data can be edited/updated on the frontend | Boolean |  |
| is_personal | Indicates whether the attribute is personal, or not | Boolean |  |
| is_required | Indicates whether the attribute is required, or not | Boolean |  |
| is_system | Indicates whether the attribute is a system attribute, or not | Boolean |  |
| is_unique | Indicates whether or not the field is unique, or not | Boolean |  |
| max_length | The maximum length (number of characters) that the data can be | Integer | Between 1 and 3 digits long |
| max_value | The maximum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 |
| min_length | The minimum length (number of characters) that the data can be | Integer | Between 1 and 3 digits long |
| min_value | The minimum value that the data can be | Float | Up to 3 decimal places and no larger than 999999999999.999 |
| sort_order | The default sort order | Integer | Up to 3 digits long |
| unique_type | If the field requires data to be unique, this is how unique the data should be | String | One of the following values: `global`, `none`, `store` |
