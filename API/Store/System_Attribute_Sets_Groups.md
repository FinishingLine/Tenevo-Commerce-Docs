# System Attribute Sets Groups
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attribute set groups
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributesets/:attributeset/groups/ | GET | This allows you to list attribute set groups | [Details](#view-system-attribute-set-groups) |
| /system/attributesets/:attributeset/groups/:group/ | GET | This allows you to list attribute set groups | [Details](#view-system-attribute-set-groups) |

## View System Attribute Set Groups
This allows you to list attribute set groups

**URL** : `/system/attributesets/:attributeset/groups/`

**URL** : `/system/attributesets/:attributeset/groups/:group/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attributes | An array of attributes that the group uses - see [System Attribute Sets Groups Attributes](System_Attribute_Sets_Groups_Attributes.md#view-system-attribute-sets-groups-attributes) | Array |  |
| is_system | Indicates whether the group is a system group, or not | Boolean |  |
| name | The name of the attribute set | String | Between 1 and 100 characters long |
| sort_order | The default sort order | Integer | Up to 3 digits long |
