# Rule Sets Rules
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages rule set rules
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /rulesets/:ruleset/rules/ | POST | This allows you to create rule set rules | [Details](#create-rule-set-rules) |
| /rulesets/:ruleset/rules/:rule/ | DELETE | This allows you to delete a specified rule set rule | [Details](#delete-rule-set-rule) |
| /rulesets/:ruleset/rules/ | PUT | This allows you to update rule set rules | [Details](#update-rule-set-rules) |
| /rulesets/:ruleset/rules/:rule/ | PUT | This allows you to update rule set rules | [Details](#update-rule-set-rules) |
| /rulesets/:ruleset/rules/ | GET | This allows you to list rule set rules | [Details](#view-rule-set-rules) |
| /rulesets/:ruleset/rules/:rule/ | GET | This allows you to list rule set rules | [Details](#view-rule-set-rules) |

## Create Rule Set Rules
This allows you to create rule set rules

**URL** : `/rulesets/:ruleset/rules/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` | NULL | Y | N |
| rule_id | A valid Rule ID matching the rule set owner_type, must be unique for the rule set | Integer |  | NULL | Y | N |

## Delete Rule Set Rule
This allows you to delete a specified rule set rule

**URL** : `/rulesets/:ruleset/rules/:rule/`

**Method** : `DELETE`

## Update Rule Set Rules
This allows you to update rule set rules

**URL** : `/rulesets/:ruleset/rules/`

**URL** : `/rulesets/:ruleset/rules/:rule/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` | NULL | Y | N |

## View Rule Set Rules
This allows you to list rule set rules

**URL** : `/rulesets/:ruleset/rules/`

**URL** : `/rulesets/:ruleset/rules/:rule/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| description | A description about this rule | String |  |
| name | The name for this rule | String | Up to 50 characters long |
| pass_if | Indicates which condition should allow the rule set to pass, based on how the rule set rules evaluate | String | One of the following values: `allfalse`, `anyfalse`, `alltrue`, `anytrue` |
| rule_id | A valid Rule ID | Integer |  |
