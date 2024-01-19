# Stores Support Mailboxes
[Home](../../index.md) > [API](../index.md) > [Store](index.md)

## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /stores/:store/supportmailboxes/ | POST | This allows you to create store support mailboxes | [Details](#create-store-support-mailboxes) |
| /stores/:store/supportmailboxes/:supportmailbox/ | DELETE | This allows you to delete a specified store support mailbox | [Details](#delete-store-support-mailbox) |
| /stores/:store/supportmailboxes/ | PUT | This allows you to update store support mailboxes | [Details](#update-store-support-mailboxes) |
| /stores/:store/supportmailboxes/:supportmailbox/ | PUT | This allows you to update store support mailboxes | [Details](#update-store-support-mailboxes) |
| /stores/:store/supportmailboxes/ | GET | This allows you to list store support mailboxes | [Details](#view-store-support-mailboxes) |
| /stores/:store/supportmailboxes/:supportmailbox/ | GET | This allows you to list store support mailboxes | [Details](#view-store-support-mailboxes) |

## Create Store Support Mailboxes
This allows you to create store support mailboxes

**URL** : `/stores/:store/supportmailboxes/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| group_id | A valid Support Group ID, used to automatically route a new ticket to a group | Integer | Up to 10 digits long | NULL | N | N |
| is_default | Indicates whether the mailbox is the default, or not | Boolean |  | 0 | N | N |
| mailbox | The name of the mailbox, as appearing before the @ symbol in an email address - must be unique | String | Up to 20 characters long | NULL | Y | N |
| outgoing_name | The name that appears when sending an email out | String | Up to 50 characters long | NULL | N | N |

## Delete Store Support Mailbox
This allows you to delete a specified store support mailbox

**URL** : `/stores/:store/supportmailboxes/:supportmailbox/`

**Method** : `DELETE`

## Update Store Support Mailboxes
This allows you to update store support mailboxes

**URL** : `/stores/:store/supportmailboxes/`

**URL** : `/stores/:store/supportmailboxes/:supportmailbox/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| group_id | A valid Support Group ID, used to automatically route a new ticket to a group | Integer | Up to 10 digits long | NULL | N | N |
| is_default | Indicates whether the mailbox is the default, or not | Boolean |  | 0 | N | N |
| mailbox | The name of the mailbox, as appearing before the @ symbol in an email address - must be unique | String | Up to 20 characters long | NULL | Y | N |
| outgoing_name | The name that appears when sending an email out | String | Up to 50 characters long | NULL | N | N |

## View Store Support Mailboxes
This allows you to list store support mailboxes

**URL** : `/stores/:store/supportmailboxes/`

**URL** : `/stores/:store/supportmailboxes/:supportmailbox/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| group | The name of the group the mailbox is automatically routed to | String |  |
| group_id | A valid Support Group ID, used to automatically route a new ticket to a group | Integer | Up to 10 digits long |
| is_default | Indicates whether the mailbox is the default, or not | Boolean |  |
| mailbox | The name of the mailbox, as appearing before the @ symbol in an email address | String | Up to 20 characters long |
| outgoing_name | The name that appears when sending an email out | String | Up to 50 characters long |
