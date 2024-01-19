# Contacts
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages contacts
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /contacts/ | POST | This allows you to create contacts | [Details](#create-contacts) |
| /contacts/:contact/ | DELETE | This allows you to delete a specified contact | [Details](#delete-contact) |
| /contacts/ | PUT | This allows you to update contacts | [Details](#update-contacts) |
| /contacts/:contact/ | PUT | This allows you to update contacts | [Details](#update-contacts) |
| /contacts/ | GET | This allows you to list contacts | [Details](#view-contacts) |
| /contacts/:contact/ | GET | This allows you to list contacts | [Details](#view-contacts) |

## Create Contacts
This allows you to create contacts

**URL** : `/contacts/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attrset_id | A valid Attribute Set ID | Integer | Up to 10 digits long | NULL | N | N |
| email | The email address related to the contact, required if neither phone nor mobile provided | String | Up to 50 characters long | NULL | N | Y |
| first_name | The first name of the contact | String | Up to 50 characters long | NULL | Y | N |
| is_email_confirmed | Indicates whether the email address has been confirmed, or not | Boolean |  | false | N | N |
| last_name | The last name of the contact | String | Up to 50 characters long | NULL | Y | N |
| mobile | The contact's mobile number, required if neither email nor phone provided | String | Up to 15 characters long | NULL | N | Y |
| phone | The contact's phone number, required if neither email nor mobile provided | String | Up to 15 characters long | NULL | N | Y |
| store_id | A valid Store ID | Integer | Up to 10 digits long | NULL | Y | N |

## Delete Contact
This allows you to delete a specified contact

**URL** : `/contacts/:contact/`

**Method** : `DELETE`

## Update Contacts
This allows you to update contacts

**URL** : `/contacts/`

**URL** : `/contacts/:contact/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attrset_id | A valid Attribute Set ID | Integer | Up to 10 digits long | NULL | Y | N |
| email | The email address related to the contact, required if neither phone nor mobile provided | String | Up to 50 characters long | NULL | N | Y |
| first_name | The first name of the contact | String | Up to 50 characters long | NULL | Y | N |
| is_email_confirmed | Indicates whether the email address has been confirmed, or not | Boolean |  | false | N | N |
| last_name | The last name of the contact | String | Up to 50 characters long | NULL | Y | N |
| mobile | The contact's mobile number, required if neither email nor phone provided | String | Up to 15 characters long | NULL | N | Y |
| phone | The contact's phone number, required if neither email nor mobile provided | String | Up to 15 characters long | NULL | N | Y |

## View Contacts
This allows you to list contacts

**URL** : `/contacts/`

**URL** : `/contacts/:contact/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attrset | Attribute Set name | String | Up to 100 characters long |
| attrset_id | A valid Attribute Set ID | Integer | Up to 10 digits long |
| created_at | A UTC datetime of when the contact was created | Datetime |  |
| email | The email address related to the contact | String | Up to 50 characters long |
| first_name | The first name of the contact | String | Up to 50 characters long |
| full_name | The full name of the contact | String |  |
| is_email_confirmed | Indicates whether the email address has been confirmed, or not | Boolean |  |
| last_name | The last name of the contact | String | Up to 50 characters long |
| mobile | The contact's mobile number | String | Up to 15 characters long |
| phone | The contact's phone number | String | Up to 15 characters long |
| store | Store name | String | Up to 100 characters long |
| store_id | A valid Store ID | Integer | Up to 10 digits long |
| updated_at | A UTC datetime of when the contact was updated | Datetime |  |
