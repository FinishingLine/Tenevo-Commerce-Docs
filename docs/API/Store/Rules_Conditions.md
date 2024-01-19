# Rules Conditions
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages rule condition
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /rules/:rule/conditions/ | POST | This allows you to create rule conditions | [Details](#create-rule-conditions) |
| /rules/:rule/conditions/:condition/ | DELETE | This allows you to delete a specified rule condition | [Details](#delete-rule-condition) |
| /rules/:rule/conditions/ | PUT | This allows you to update rule condition | [Details](#update-rule-conditions) |
| /rules/:rule/conditions/:condition/ | PUT | This allows you to update rule condition | [Details](#update-rule-conditions) |
| /rules/:rule/conditions/ | GET | This allows you to list rule conditions | [Details](#view-rule-conditions) |
| /rules/:rule/conditions/:condition/ | GET | This allows you to list rule conditions | [Details](#view-rule-conditions) |

## Create Rule Conditions
This allows you to create rule conditions

**URL** : `/rules/:rule/conditions/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `changed`, `changedfrom`, `changedto`, `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notchanged`, `notchangedfrom`, `notchangedto`, `notcontains`, `notmatches`, `startswith` | NULL | Y | N |
| custom_value | Where a field ends with .custom, the value of the modifier | String |  | NULL | N | Y |
| field | The field that this rule will look at | String | Up to 75 characters long | NULL | Y | N |
| is_valuedynamic | Indicates whether or not the value is dynamic | Boolean |  | false | N | N |
| is_valueempty | Indicates whether or not the value is meant to be empty; must be true when comparator is not changed nor notchanged | Boolean |  | false | N | N |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  | false | N | N |
| value | The value used to make comparisons, required when is_valueempty is false | String |  | NULL | N | Y |

## Delete Rule Condition
This allows you to delete a specified rule condition

**URL** : `/rules/:rule/conditions/:condition/`

**Method** : `DELETE`

## Update Rule Conditions
This allows you to update rule condition

**URL** : `/rules/:rule/conditions/`

**URL** : `/rules/:rule/conditions/:condition/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `changed`, `changedfrom`, `changedto`, `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notchanged`, `notchangedfrom`, `notchangedto`, `notcontains`, `notmatches`, `startswith` | NULL | Y | N |
| custom_value | Where a field ends with .custom, the value of the modifier | String |  | NULL | N | Y |
| field | The field that this rule will look at | String | Up to 75 characters long | NULL | Y | N |
| is_valuedynamic | Indicates whether or not the value is dynamic | Boolean |  | false | N | N |
| is_valueempty | Indicates whether or not the value is meant to be empty; must be true when comparator is not changed nor notchanged | Boolean |  | false | N | N |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  | false | N | N |
| value | The value used to make comparisons, required when is_valueempty is false | String |  | NULL | N | Y |

## View Rule Conditions
This allows you to list rule conditions

**URL** : `/rules/:rule/conditions/`

**URL** : `/rules/:rule/conditions/:condition/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| comparator | The comparator used to compare the field value with the value | String | One of the following values: `changed`, `changedfrom`, `changedto`, `contains`, `endswith`, `greaterthan`, `greaterthanequal`, `lessthan`, `lessthanequal`, `matches`, `notchanged`, `notchangedfrom`, `notchangedto`, `notcontains`, `notmatches`, `startswith` |
| custom_value | Where a field ends with .custom, the value of the modifier | String |  |
| field | The field that this rule will look at | String | Up to 75 characters long |
| is_valuedynamic | Indicates whether or not the value is dynamic | Boolean |  |
| is_valueempty | Indicates whether or not the value meant to be empty | Boolean |  |
| is_valueregex | Indicates whether or not the value is a regular expression | Boolean |  |
| value | The value used to make comparisons | String |  |
