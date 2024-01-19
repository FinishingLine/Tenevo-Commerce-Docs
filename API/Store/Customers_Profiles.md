# Customers Profiles
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages customer profiles
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /customers/:customer/profiles/ | POST | This allows you to create customer profiles | [Details](#create-customer-profiles) |
| /customers/:customer/profiles/:profile/ | DELETE | This allows you to delete a specified customer profile | [Details](#delete-customer-profile) |
| /customers/:customer/profiles/ | PUT | This allows you to update customer profiles | [Details](#update-customer-profiles) |
| /customers/:customer/profiles/:profile/ | PUT | This allows you to update customer profiles | [Details](#update-customer-profiles) |
| /customers/:customer/profiles/ | GET | This allows you to list customer profiles | [Details](#view-customer-profiles) |
| /customers/:customer/profiles/:profile/ | GET | This allows you to list customer profiles | [Details](#view-customer-profiles) |

## Create Customer Profiles
This allows you to create customer profiles

**URL** : `/customers/:customer/profiles/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| attrset_id | A valid Attribute Set ID | Integer |  | NULL | Y | N |
| email | The email address related to the profile user, required if username provided | String | Between 1 and 50 characters long | NULL | N | Y |
| is_primary | Indicates whether the profile is the primary profile, or not | Boolean |  | NULL | N | N |
| password | The password used to access the profile, required if username provided | String | Between 1 and 100 characters long | NULL | N | Y |
| password_confirm | Confirmation of the password to use, must match `password`, required if username provided | String | Between 1 and 100 characters long | NULL | N | Y |
| primary_address_id | A valid Customer Address ID | Integer |  | NULL | N | N |
| profile_type_id | A valid Profile Type ID | Integer |  | NULL | N | N |
| status | The status of the profile | String | One of the following values: `closed`, `active` | active | N | N |
| username | The username of the profile (must be unique), required if is_primary true | String | Between 1 and 100 characters long | NULL | N | Y |
| wishlist | An array of wishlist items that the profile would like - see [Customers Profiles Wishlist](Customers_Profiles_Wishlist.md#create-customers-profiles-wishlist) | Array |  | NULL | N | N |

## Delete Customer Profile
This allows you to delete a specified customer profile

**URL** : `/customers/:customer/profiles/:profile/`

**Method** : `DELETE`

## Update Customer Profiles
This allows you to update customer profiles

**URL** : `/customers/:customer/profiles/`

**URL** : `/customers/:customer/profiles/:profile/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| email | The email address related to the profile user, required if username provided | String | Between 1 and 50 characters long | NULL | N | Y |
| is_primary | Indicates whether the profile is the primary profile, or not | Boolean |  | NULL | N | N |
| password | The password used to access the profile, required if username provided | String | Between 1 and 100 characters long | NULL | N | Y |
| password_confirm | Confirmation of the password to use, must match `password`, required if username provided | String | Between 1 and 100 characters long | NULL | N | Y |
| primary_address_id | A valid Customer Address ID | Integer |  | NULL | N | N |
| profile_type_id | A valid Profile Type ID | Integer |  | NULL | N | N |
| status | The status of the profile | String | One of the following values: `closed`, `active` | active | N | N |
| username | The username of the profile (must be unique), required if is_primary true | String | Between 1 and 100 characters long | NULL | N | Y |
| wishlist | An array of wishlist items that the profile would like - see [Customers Profiles Wishlist](Customers_Profiles_Wishlist.md#update-customers-profiles-wishlist) | Array |  | NULL | N | N |

## View Customer Profiles
This allows you to list customer profiles

**URL** : `/customers/:customer/profiles/`

**URL** : `/customers/:customer/profiles/:profile/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| attrset | The Attribute Set of the custome profile | String | Up to 100 characters long |
| attrset_id | A valid Attribute Set ID | Integer |  |
| created_at | A UTC datetime of when the profile was created | Datetime |  |
| email | The email address related to the profile user, required if username provided | String | Between 1 and 50 characters long |
| has_password | Indicates whether the profile has a password, or not | Boolean |  |
| is_placeholder | Indicates whether the profile is a placeholder set by a marketplace until it can be later updated, or not | Boolean |  |
| is_primary | Indicates whether the profile is the primary profile, or not | Boolean |  |
| primary_address_id | A valid Customer Address ID | Integer |  |
| profile_type | The name of the Profile Type | String |  |
| profile_type_id | A valid Profile Type ID | Integer |  |
| reference | A unique reference for this customer profile | String | Exactly 10 characters long |
| status | The status of the profile | String | One of the following values: `active`, `closed` |
| store_id | The Store ID that the customer belongs to | Integer |  |
| updated_at | A UTC datetime of when the profile was updated | Datetime |  |
| username | The username of the profile (must be unique), required if is_primary true | String | Between 1 and 100 characters long |
| wishlist | An array of wishlist items that the profile would like - see [Customers Profiles Wishlist](Customers_Profiles_Wishlist.md#view-customers-profiles-wishlist) | Array |  |
