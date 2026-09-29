# System Attribute Sets
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attribute sets
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributesets/ | GET | This allows you to list system attribute sets | [Details](#view-system-attribute-sets) |
| /system/attributesets/:attributeset/ | GET | This allows you to list system attribute sets | [Details](#view-system-attribute-sets) |

## View System Attribute Sets
This allows you to list system attribute sets

**URL** : `/system/attributesets/`

**URL** : `/system/attributesets/:attributeset/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attr_type | The type of attribute set that the set contains | String | One of the following values: `contact`, `customer`, `customer_profile`, `product`, `ticket` |
| groups | An array of groups belonging to the attribute set - see [System Attribute Sets Groups](System_Attribute_Sets_Groups.md#view-system-attribute-sets-groups) | Array |  |
| is_default | Indicates whether the attribute set is the default for the given attr_type, or not | Boolean |  |
| is_system | Indicates whether the attribute set is a system defined attribute set, or not | Boolean |  |
| name | The name of the attribute set | String | Between 1 and 100 characters long |
| store_id | A valid Store ID to limit the attribute to | Integer |  |
