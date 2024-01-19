# Rule Sets
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages rule sets
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /rulesets/ | POST | This allows you to create rule sets | [Details](#create-rule-sets) |
| /rulesets/:ruleset/ | DELETE | This allows you to delete a specified rule set | [Details](#delete-rule-set) |
| /rulesets/ | PUT | This allows you to update rule set | [Details](#update-rule-sets) |
| /rulesets/:ruleset/ | PUT | This allows you to update rule set | [Details](#update-rule-sets) |
| /rulesets/ | GET | This allows you to list rule sets | [Details](#view-rule-sets) |
| /rulesets/:ruleset/ | GET | This allows you to list rule sets | [Details](#view-rule-sets) |

## Create Rule Sets
This allows you to create rule sets

**URL** : `/rulesets/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| apply_administrator | Indicates whether the rules should apply to administrators | Boolean |  | false | N | N |
| apply_customer | Indicates whether the rules should apply to customers | Boolean |  | false | N | N |
| description | A description about this rule set | String |  | NULL | Y | N |
| failure_message_administrator | A failure message when the ruleset does not pass when being applied to an administrator | String |  | NULL | N | N |
| failure_message_customer | A failure message when the ruleset does not pass when being applied to a customer | String |  | NULL | N | N |
| name | The name for this rule set | String | Up to 50 characters long | NULL | Y | N |
| owner_id | A valid Owner ID for matching the type specified with owner_type | Integer |  | NULL | Y | N |
| owner_type | A valid type of Owner | String | One of the following values: `automation`, `basketoverall`, `basketbygroup`, `shippingmethod` | NULL | Y | N |
| rules | An array of rules that this belong to this rule set - see [Rule Sets Rules](Rule_Sets_Rules.md#create-rule-sets-rules) | Array |  | NULL | N | N |

## Delete Rule Set
This allows you to delete a specified rule set

**URL** : `/rulesets/:ruleset/`

**Method** : `DELETE`

## Update Rule Sets
This allows you to update rule set

**URL** : `/rulesets/`

**URL** : `/rulesets/:ruleset/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| apply_administrator | Indicates whether the rules should apply to administrators | Boolean |  | false | N | N |
| apply_customer | Indicates whether the rules should apply to customers | Boolean |  | false | N | N |
| description | A description about this rule set | String |  | NULL | Y | N |
| failure_message_administrator | A failure message when the ruleset does not pass when being applied to an administrator | String |  | NULL | N | N |
| failure_message_customer | A failure message when the ruleset does not pass when being applied to a customer | String |  | NULL | N | N |
| name | The name for this rule set | String | Up to 50 characters long | NULL | Y | N |
| rules | An array of rules that this belong to this rule set - see [Rule Sets Rules](Rule_Sets_Rules.md#update-rule-sets-rules) | Array |  | NULL | N | N |

## View Rule Sets
This allows you to list rule sets

**URL** : `/rulesets/`

**URL** : `/rulesets/:ruleset/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| apply_administrator | Indicates whether the rules should apply to administrators | Boolean |  |
| apply_customer | Indicates whether the rules should apply to customers | Boolean |  |
| description | A description about this rule set | String |  |
| failure_message_administrator | A failure message when the ruleset does not pass | String |  |
| failure_message_customer | A failure message when the ruleset does not pass | String |  |
| name | The name for this rule set | String | Up to 50 characters long |
| owner_id | A valid Owner ID for matching the type specified with owner_type | Integer |  |
| owner_type | A valid type of Owner | String | One of the following values: `automation`, `basketoverall`, `basketbygroup`, `shippingmethod` |
| rules | An array of rules that this belong to this rule set - see [Rule Sets Rules](Rule_Sets_Rules.md#view-rule-sets-rules) | Array |  |
