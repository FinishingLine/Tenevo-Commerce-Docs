# Subscriptions Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Subscriptions Addresses
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /subscriptions/:subscription/addresses/ | POST | This allows you to add addresses to a subscription | [Details](#create-subscription-addresses) |
| /subscriptions/:subscription/addresses/ | PUT | This allows you to update a specific address in an subscription | [Details](#update-subscription-addresses) |
| /subscriptions/:subscription/addresses/:addresses/ | PUT | This allows you to update a specific address in an subscription | [Details](#update-subscription-addresses) |
| /subscriptions/:subscription/addresses/ | GET | This allows you to list the addresses belonging to a subscription | [Details](#view-subscription-addresses) |
| /subscriptions/:subscription/addresses/:address/ | GET | This allows you to list the addresses belonging to a subscription | [Details](#view-subscription-addresses) |

## Create Subscription Addresses
This allows you to add addresses to a subscription

**URL** : `/subscriptions/:subscription/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice` | NULL | Y | N |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| delivery_instructions | Delivery notes/instructions | String |  | NULL | N | N |
| email | An valid email address that may recieve updates | String | Up to 100 characters long | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of address | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of address | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Up to 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |
| skip_picky_checks | Skip picky checks - will not run if skip_checks is false | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available - will not run if skip_checks is false | Boolean |  | false | N | N |
| title | The title of the recipient | String | Up to 10 characters long | NULL | N | N |

## Update Subscription Addresses
This allows you to update a specific address in an subscription

**URL** : `/subscriptions/:subscription/addresses/`

**URL** : `/subscriptions/:subscription/addresses/:addresses/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| delivery_instructions | Delivery notes/instructions | String |  | NULL | N | N |
| email | An valid email address that may recieve updates | String | Up to 100 characters long | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of address | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of address | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Up to 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |
| skip_picky_checks | Skip picky checks - will not run if skip_checks is false | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available - will not run if skip_checks is false | Boolean |  | false | N | N |
| title | The title of the recipient | String | Up to 10 characters long | NULL | N | N |

## View Subscription Addresses
This allows you to list the addresses belonging to a subscription

**URL** : `/subscriptions/:subscription/addresses/`

**URL** : `/subscriptions/:subscription/addresses/:address/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice` |
| city | The city or town | String | Between 1 and 100 characters long |
| company_name | The name of the company where the recipient can be found | String | Up to 100 characters long |
| country | The name of the country | String | Exactly 2 characters long |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long |
| delivery_instructions | Delivery notes/instructions | String |  |
| email | An valid email address that may recieve updates | String | Up to 100 characters long |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long |
| full_name | The full name of the recipient | String | Between 3 and 201 characters long |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long |
| line1 | First line of address | String | Between 1 and 200 characters long |
| line2 | Second line of address | String | Up to 200 characters long |
| line3 | Third line of address | String | Up to 200 characters long |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long |
| phone | The phone number to contact the recipient with | String | Up to 20 characters long |
| postcode | The postal code/zip code | String | Up to 20 characters long |
| province | The name of the province/state/county | String | Up to 100 characters long |
| province_code | The code for the province/state/county | String | Up to 10 characters long |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long |
| title | The title of the recipient | String | Up to 10 characters long |
