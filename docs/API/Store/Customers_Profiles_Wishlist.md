# Customers Profiles Wishlist
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages customer profile wishlist
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /customers/:customer/profiles/:profile/wishlist/ | POST | This allows you to create customer profile wishlist | [Details](#create-customer-profile-wishlist) |
| /customers/:customer/profiles/:profile/wishlist/:wishlist | DELETE | This allows you to delete a specified customer profile wishlist | [Details](#delete-customer-profile-wishlist) |
| /customers/:customer/profiles/:profile/wishlist/ | PUT | This allows you to update customer profile wishlist | [Details](#update-customer-profile-wishlist) |
| /customers/:customer/profiles/:profile/wishlist/:wishlist/ | PUT | This allows you to update customer profile wishlist | [Details](#update-customer-profile-wishlist) |
| /customers/:customer/profiles/:profile/wishlist/ | GET | This allows you to list customer profile wishlist | [Details](#view-customer-profile-wishlist) |
| /customers/:customer/profiles/:profile/wishlist/:wishlist/ | GET | This allows you to list customer profile wishlist | [Details](#view-customer-profile-wishlist) |

## Create Customer Profile Wishlist
This allows you to create customer profile wishlist

**URL** : `/customers/:customer/profiles/:profile/wishlist/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| notes | Notes about the wishlist item | String |  | NULL | N | N |
| quantity | The number of units | Integer | Between 1 and 10 digits long | 1 | N | N |
| variant_id | A valid Product Variant ID | Integer |  | NULL | Y | N |

## Delete Customer Profile Wishlist
This allows you to delete a specified customer profile wishlist

**URL** : `/customers/:customer/profiles/:profile/wishlist/:wishlist`

**Method** : `DELETE`

## Update Customer Profile Wishlist
This allows you to update customer profile wishlist

**URL** : `/customers/:customer/profiles/:profile/wishlist/`

**URL** : `/customers/:customer/profiles/:profile/wishlist/:wishlist/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| notes | Notes about the wishlist item | String |  | NULL | N | N |
| quantity | The number of units | Integer | Between 1 and 10 digits long | 1 | N | N |

## View Customer Profile Wishlist
This allows you to list customer profile wishlist

**URL** : `/customers/:customer/profiles/:profile/wishlist/`

**URL** : `/customers/:customer/profiles/:profile/wishlist/:wishlist/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| created_at | A UTC datetime of when the wishlist item was created | Datetime |  |
| full_name | The full name of the variant (the product name and the options, seperated by / characters) | String |  |
| image_alt_text | The alt text for the product variant image | String |  |
| image_id | A valid Product Image ID | Integer |  |
| image_url | The relative URL to the product variant image | String |  |
| notes | Notes about the wishlist item | String |  |
| product_id | The Product ID | Integer |  |
| quantity | The number of units | Integer | Between 1 and 10 digits long |
| updated_at | A UTC datetime of when the wishlist item was updated | Datetime |  |
| url | The relative URL of the variant | String |  |
| variant_id | The Product Variant ID | Integer |  |
