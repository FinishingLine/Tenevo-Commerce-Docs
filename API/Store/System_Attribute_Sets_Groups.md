# System Attribute Sets Groups
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages system attribute set groups
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /system/attributesets/:attributeset/groups/ | POST | This allows you to create attribute set groups | [Details](#create-system-attribute-set-groups) |
| /system/attributesets/:attributeset/groups/:group/ | DELETE | This allows you to delete a specified attribute set group | [Details](#delete-attribute-set-group) |
| /system/attributesets/:attributeset/groups/ | PUT | This allows you to update attribute set groups | [Details](#update-system-attribute-set-groups) |
| /system/attributesets/:attributeset/groups/:group/ | PUT | This allows you to update attribute set groups | [Details](#update-system-attribute-set-groups) |
| /system/attributesets/:attributeset/groups/ | GET | This allows you to list attribute set groups | [Details](#view-system-attribute-set-groups) |
| /system/attributesets/:attributeset/groups/:group/ | GET | This allows you to list attribute set groups | [Details](#view-system-attribute-set-groups) |

## Create System Attribute Set Groups
This allows you to create attribute set groups

**URL** : `/system/attributesets/:attributeset/groups/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes that the group uses - see [System Attribute Sets Groups Attributes](System_Attribute_Sets_Groups_Attributes.md#create-system-attribute-sets-groups-attributes) | Array |  | NULL | N | N |
| name | The name of the attribute set, must be unique | String | Between 1 and 100 characters long | NULL | Y | N |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |

## Delete Attribute Set Group
This allows you to delete a specified attribute set group

**URL** : `/system/attributesets/:attributeset/groups/:group/`

**Method** : `DELETE`

## Update System Attribute Set Groups
This allows you to update attribute set groups

**URL** : `/system/attributesets/:attributeset/groups/`

**URL** : `/system/attributesets/:attributeset/groups/:group/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attributes | An array of attributes that the group uses - see [System Attribute Sets Groups Attributes](System_Attribute_Sets_Groups_Attributes.md#update-system-attribute-sets-groups-attributes) | Array |  | NULL | N | N |
| name | The name of the attribute set, must be unique | String | Between 1 and 100 characters long | NULL | Y | N |
| sort_order | The default sort order | Integer | Up to 3 digits long | 0 | N | N |

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
