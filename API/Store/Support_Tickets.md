# Support Tickets
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Support Tickets
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /support/tickets/ | POST | This allows you to create a support ticket | [Details](#create-support-ticket) |
| /support/tickets/:ticket/ | DELETE | This allows you to delete a support ticket | [Details](#delete-support-ticket) |
| /support/tickets/ | PUT | This allows you to update a specific support ticket | [Details](#update-support-tickets) |
| /support/tickets/:ticket/ | PUT | This allows you to update a specific support ticket | [Details](#update-support-tickets) |
| /support/tickets/ | GET | This allows you to list support tickets | [Details](#view-support-tickets) |
| /support/tickets/:ticket/ | GET | This allows you to list support tickets | [Details](#view-support-tickets) |

## Create Support Ticket
This allows you to create a support ticket

**URL** : `/support/tickets/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| assignee_id | A valid ID for the given assignee_type | Integer | Up to 10 digits long | NULL | N | Y |
| assignee_type | The type of assignee | String | Must have the value: `admin` | NULL | N | Y |
| attrset_id | A valid Attribute Set ID | Integer |  | NULL | N | N |
| comments | An array containing comments related to this ticket - see [Comments](Comments.md#create-comments) | Array |  | NULL | N | N |
| followed_up_from_id | A valid Ticket ID that this ticket is followed up from | Integer | Up to 10 digits long | NULL | N | N |
| group_id | A valid Support Group ID | Integer | Up to 10 digits long | NULL | N | N |
| is_public | Indicates whether the ticket is public to the requester | Boolean |  | false | N | N |
| priority | The priority of the ticket | String | One of the following values: `high`, `low`, `normal`, `urgent` | NULL | N | N |
| problem_id | A valid Ticket ID of type problem, that is related to the ticket, only available when type is incident | Integer | Up to 10 digits long | NULL | N | Y |
| requester_id | A valid ID for the given requester_type | Integer | Up to 10 digits long | NULL | Y | N |
| requester_type | The type of requester that requested the ticket to be opened | String | One of the following values: `admin`, `contact`, `profile` | NULL | Y | N |
| source | The source of where the ticket was created from | String | One of the following values: `admin`, `call`, `direct`, `email` | NULL | Y | N |
| status | The status of the ticket | String | One of the following values: `new`, `open`, `pending`, `solved` | new | N | N |
| store_id | A valid Store ID | Integer | Up to 10 digits long | NULL | Y | N |
| subject | A subject for the ticket | String | Up to 100 characters long | NULL | Y | N |
| submitter_id | A valid ID for the given submitter_type | Integer | Up to 10 digits long | NULL | Y | N |
| submitter_type | The type of submitter that submitted the ticket | String | One of the following values: `admin`, `contact`, `profile` | NULL | Y | N |
| tags | An array containing tags related to this ticket - see [Tags](Tags.md#create-tags) | Array |  | NULL | N | N |
| type | The type of ticket | String | One of the following values: `incident`, `problem`, `question`, `task` | NULL | N | N |

## Delete Support Ticket
This allows you to delete a support ticket

**URL** : `/support/tickets/:ticket/`

**Method** : `DELETE`

## Update Support Tickets
This allows you to update a specific support ticket

**URL** : `/support/tickets/`

**URL** : `/support/tickets/:ticket/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| assignee_id | A valid ID for the given assignee_type, not required if group_id is provided | Integer | Up to 10 digits long | NULL | N | Y |
| assignee_type | The type of assignee, not required if group_id is provided | String | Must have the value: `admin` | NULL | N | Y |
| attrset_id | A valid Attribute Set ID | Integer |  | NULL | N | Y |
| comments | An array containing comments related to this ticket - see [Comments](Comments.md#update-comments) | Array |  | NULL | N | N |
| group_id | A valid Support Group ID | Integer | Up to 10 digits long | NULL | N | N |
| is_public | Indicates whether the ticket is public to the requester | Boolean |  | false | N | N |
| priority | The priority of the ticket | String | One of the following values: `high`, `low`, `normal`, `urgent` | NULL | N | N |
| problem_id | A valid Ticket ID of type problem, that is related to the ticket, only available when type is incident | Integer | Up to 10 digits long | NULL | N | Y |
| requester_id | A valid ID for the given requester_type | Integer | Up to 10 digits long | NULL | Y | N |
| requester_type | The type of requester that requested the ticket to be opened | String | One of the following values: `admin`, `contact`, `profile` | NULL | Y | N |
| resolver_id | A valid ID for the given resolver_type, only when status is solved | Integer | Up to 10 digits long | NULL | N | Y |
| resolver_type | The type of resolver that requested the ticket to be opened, only when status is solved | String | One of the following values: `admin`, `contact`, `profile` | NULL | N | Y |
| status | The status of the ticket | String | One of the following values: `open`, `pending`, `hold`, `solved`, `closed` | NULL | Y | N |
| subject | A subject for the ticket | String | Up to 100 characters long | NULL | Y | N |
| type | The type of ticket, only updatable if value is not problem and the problem is linked to incidents | String | One of the following values: `incident`, `problem`, `question`, `task` | NULL | N | Y |

## View Support Tickets
This allows you to list support tickets

**URL** : `/support/tickets/`

**URL** : `/support/tickets/:ticket/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| assigned_at | A UTC datetime of when the ticket was last assigned to an agent | Datetime |  |
| assignee | The name of the assignee | String |  |
| assignee_id | A valid ID for the given assignee_type | Integer | Up to 10 digits long |
| assignee_type | The type of assignee | String | Must have the value: `admin` |
| attrset | The name of the Attribute Set | String |  |
| attrset_id | A valid Attribute Set ID | Integer |  |
| closed_at | A UTC datetime of when the ticket was closed | Datetime |  |
| comments | An array containing comments related to this ticket - see [Comments](Comments.md#view-comments) | Array |  |
| created_at | A UTC datetime of when the ticket was created | Datetime |  |
| description | The first comment on the ticket | String |  |
| followed_up_from_id | A valid Ticket ID that this ticket is followed up from | Integer | Up to 10 digits long |
| group | The name of the currently assigned group | String |  |
| group_id | A valid Support Group ID | Integer | Up to 10 digits long |
| is_public | Indicates whether the ticket is public to the requester | Boolean |  |
| is_reopened | Indicates whether the ticket was previously solved | Boolean |  |
| is_solved | Indicates whether the ticket is solved | Boolean |  |
| priority | The priority of the ticket | String | One of the following values: `high`, `low`, `normal`, `urgent` |
| problem_id | A valid Ticket ID of type problem, that is related to the ticket | Integer | Up to 10 digits long |
| reference | The internal ticket reference, used for securing a ticket | String | Exactly 10 characters long |
| replied_first_at | A valid UTC datetime of when the ticket was first replied to by an agent | Datetime |  |
| requester | The name of the requester | String |  |
| requester_id | A valid ID for the given requester_type | Integer | Up to 10 digits long |
| requester_type | The type of requester that requested the ticket to be opened | String | One of the following values: `admin`, `contact`, `profile` |
| resolver | The name of the resolved | String |  |
| resolver_id | A valid ID for the given resolver_type | Integer | Up to 10 digits long |
| resolver_type | The type of resolver that resolved the ticket | String | One of the following values: `admin`, `contact`, `profile` |
| solved_at | A valid UTC datetime of when the ticket was solved | Datetime |  |
| solved_first_at | A valid UTC datetime of when the ticket was first solved | Datetime |  |
| source | The source of where the ticket was created from | String | One of the following values: `admin`, `call`, `direct`, `email` |
| status | The status of the ticket | String | One of the following values: `new`, `open`, `pending`, `hold`, `solved`, `closed` |
| store | The name of the Store | String |  |
| store_id | A valid Store ID | Integer | Up to 10 digits long |
| subject | A subject for the ticket | String | Up to 100 characters long |
| submitter | The name of the submitter | String |  |
| submitter_id | A valid ID for the given submitter_type | Integer | Up to 10 digits long |
| submitter_type | The type of submitter that submitted the ticket | String | One of the following values: `admin`, `contact`, `profile` |
| tags | An array containing tags related to this ticket - see [Tags](Tags.md#view-tags) | Array |  |
| total_agent_internal_comments | The total number of internal comments a ticket has by an administrator | Integer |  |
| total_agent_public_comments | The total number of public comments a ticket has by an administrator | Integer |  |
| total_agent_replies | The total number of public agent replies | Integer |  |
| type | The type of ticket | String | One of the following values: `incident`, `problem`, `question`, `task` |
| updated_at | A UTC datetime of when the ticket was last updated | Datetime |  |
