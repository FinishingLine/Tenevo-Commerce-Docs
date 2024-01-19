# Returns Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Returns Addresses
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /returns/:return/addresses/ | POST | This allows you to add addresses to a return | [Details](#create-returns-addresses) |
| /returns/:return/addresses/:address/ | DELETE | This allows you to delete a specified return address | [Details](#delete-return-address) |
| /returns/:return/addresses/ | PUT | This allows you to update a specific return address | [Details](#update-returns-addresses) |
| /returns/:return/addresses/:address/ | PUT | This allows you to update a specific return address | [Details](#update-returns-addresses) |
| /returns/:return/addresses/ | GET | This allows you to list the addresses belonging to a return | [Details](#view-return-address) |
| /returns/:return/addresses/:address/ | GET | This allows you to list the addresses belonging to a return | [Details](#view-return-address) |

## Create Returns Addresses
This allows you to add addresses to a return

**URL** : `/returns/:return/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `dropoff`, `pickup` | NULL | Y | N |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An valid email address that may recieve updates | String | Between 1 and 100 characters long | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of address | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of address | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 10 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| title | The title of the recipient | String | Up to 10 characters long | NULL | N | N |

## Delete Return Address
This allows you to delete a specified return address

**URL** : `/returns/:return/addresses/:address/`

**Method** : `DELETE`

## Update Returns Addresses
This allows you to update a specific return address

**URL** : `/returns/:return/addresses/`

**URL** : `/returns/:return/addresses/:address/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An valid email address that may recieve updates | String | Between 1 and 100 characters long | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of address | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of address | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 10 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| title | The title of the recipient | String | Up to 10 characters long | NULL | N | N |

## View Return Address
This allows you to list the addresses belonging to a return

**URL** : `/returns/:return/addresses/`

**URL** : `/returns/:return/addresses/:address/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `dropoff`, `pickup` |
| city | The city or town | String | Between 1 and 100 characters long |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long |
| country | The name of the country | String | Exactly 2 characters long |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long |
| email | An valid email address that may recieve updates | String | Between 1 and 100 characters long |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long |
| full_name | The full name of the recipient | String | Between 3 and 206 characters long |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long |
| line1 | First line of address | String | Between 1 and 200 characters long |
| line2 | Second line of address | String | Up to 200 characters long |
| line3 | Third line of address | String | Up to 200 characters long |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long |
| postcode | The postal code/zip code | String | Up to 10 characters long |
| province | The name of the province/state/county | String | Between 1 and 100 characters long |
| title | The title of the recipient | String | Up to 10 characters long |
