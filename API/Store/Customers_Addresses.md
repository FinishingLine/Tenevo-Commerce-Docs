# Customers Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages customer addresses
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /customers/:customer/addresses/ | POST | This allows you to create customer addresses | [Details](#create-customer-addresses) |
| /customers/:customer/addresses/:address/ | DELETE | This allows you to delete a specified customer address | [Details](#delete-customer-address) |
| /customers/:customer/addresses/ | PUT | This allows you to update customer addresses | [Details](#update-customer-addresses) |
| /customers/:customer/addresses/:address/ | PUT | This allows you to update customer addresses | [Details](#update-customer-addresses) |
| /customers/:customer/addresses/ | GET | This allows you to list customer addresses | [Details](#view-customer-addresses) |
| /customers/:customer/addresses/:address/ | GET | This allows you to list customer addresses | [Details](#view-customer-addresses) |

## Create Customer Addresses
This allows you to create customer addresses

**URL** : `/customers/:customer/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice`, `other` | other | N | N |
| city | The city or town of where the address can be found | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The company name of where the addressee can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An email address relating to the address | String | Between 1 and 100 characters long | NULL | N | N |
| eori_number | The EORI number to use for this address, where null is provided the value from the customer record is used | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not, where null is provided the value from the customer record is used | Boolean |  | NULL | N | N |
| first_name | The first name of the addressee | String | Between 1 and 100 characters long | NULL | Y | N |
| is_default | Indicates whether the address is the default for the given address type | Boolean |  | false | N | N |
| last_name | The last name of the addressee | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | The first line of the address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | The second line of the address | String | Between 1 and 200 characters long | NULL | N | N |
| line3 | The third line of the address | String | Between 1 and 200 characters long | NULL | N | N |
| mobile | The mobile number relating to the address | String | Up to 20 characters long | NULL | Y | N |
| phone | The phone number relating to the address | String | Up to 20 characters long | NULL | Y | N |
| postcode | The postal code/zip code of the address | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county, where province_id is not available to be provided for the given country_iso2 | String | Between 1 and 100 characters long | NULL | N | Y |
| province_code | The code for the province/state/county, used to lookup province_id when not provided | String | Up to 10 characters long | NULL | N | N |
| province_id | The ID of the province/state/county | Integer | Up to 3 digits long | NULL | Y | N |
| province_iso | A valid ISO code for the province/state/county, used to lookup province_id when not provided | String | Up to 10 characters long | NULL | N | N |
| skip_picky_checks | Skip picky checks | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available | Boolean |  | false | N | N |
| title | The title of the addressee | String | One of the following values: `dr`, `fr`, `lady`, `lord`, `madam`, `master`, `miss`, `mr`, `mrs`, `ms`, `mx`, `prof`, `rev`, `sir` | NULL | N | N |
| ukims_number | The UKIMS number to use for this address, where null is provided the value from the customer record is used | String | Up to 40 characters long | NULL | N | N |
| use_profile_name | Indicates whether a profile name can override the title, first_name, and last_name fields | Boolean |  | false | N | N |
| vat_number | The VAT number to use for this address, where null is provided the value from the customer record is used | String | Up to 20 characters long | NULL | N | N |

## Delete Customer Address
This allows you to delete a specified customer address

**URL** : `/customers/:customer/addresses/:address/`

**Method** : `DELETE`

## Update Customer Addresses
This allows you to update customer addresses

**URL** : `/customers/:customer/addresses/`

**URL** : `/customers/:customer/addresses/:address/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice`, `other` | other | N | N |
| city | The city or town of where the address can be found | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The company name of where the addressee can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An email address relating to the address | String | Between 1 and 100 characters long | NULL | N | N |
| eori_number | The EORI number to use for this address, where null is provided the value from the customer record is used | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not, where null is provided the value from the customer record is used | Boolean |  | NULL | N | N |
| first_name | The first name of the addressee | String | Between 1 and 100 characters long | NULL | Y | N |
| is_default | Indicates whether the address is the default for the given address type | Boolean |  | false | N | N |
| last_name | The last name of the addressee | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | The first line of the address | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | The second line of the address | String | Between 1 and 200 characters long | NULL | N | N |
| line3 | The third line of the address | String | Between 1 and 200 characters long | NULL | N | N |
| mobile | The mobile number relating to the address | String | Up to 20 characters long | NULL | Y | N |
| phone | The phone number relating to the address | String | Up to 20 characters long | NULL | Y | N |
| postcode | The postal code/zip code of the address | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county, where province_id is not available to be provided for the given country_iso2 | String | Between 1 and 100 characters long | NULL | N | Y |
| province_code | The code for the province/state/county, used to lookup province_id when not provided | String | Up to 10 characters long | NULL | N | N |
| province_id | The ID of the province/state/county | Integer | Up to 3 digits long | NULL | Y | N |
| province_iso | A valid ISO code for the province/state/county, used to lookup province_id when not provided | String | Up to 10 characters long | NULL | N | N |
| skip_picky_checks | Skip picky checks | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available | Boolean |  | false | N | N |
| title | The title of the addressee | String | One of the following values: `dr`, `fr`, `lady`, `lord`, `madam`, `master`, `miss`, `mr`, `mrs`, `ms`, `mx`, `prof`, `rev`, `sir` | NULL | N | N |
| ukims_number | The UKIMS number to use for this address, where null is provided the value from the customer record is used | String | Up to 40 characters long | NULL | N | N |
| use_profile_name | Indicates whether a profile name can override the title, first_name, and last_name fields | Boolean |  | false | N | N |
| vat_number | The VAT number to use for this address, where null is provided the value from the customer record is used | String | Up to 20 characters long | NULL | N | N |

## View Customer Addresses
This allows you to list customer addresses

**URL** : `/customers/:customer/addresses/`

**URL** : `/customers/:customer/addresses/:address/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice`, `other` |
| city | The city or town of where the address can be found | String | Between 1 and 100 characters long |
| company_name | The company name of where the addressee can be found | String | Between 1 and 100 characters long |
| country | The name of the country | String | Exactly 2 characters long |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long |
| created_at | A UTC datetime of when the address was created | Datetime |  |
| email | An email address relating to the address | String | Between 1 and 100 characters long |
| eori_number | The EORI number to use for this address | String | Up to 20 characters long |
| eu_movement_risk | Indicates if orders are at risk of entering the EU, or not, where null is provided the value from the customer record is used | Boolean |  |
| first_name | The first name of the addressee | String | Between 1 and 100 characters long |
| full_name | The full name of the addressee | String | Between 3 and 201 characters long |
| hash | A hash of the address | String | Exactly 64 characters long |
| is_default | Indicates whether the address is the default for the given address type | Boolean |  |
| is_eori_number_default | Indicates whether the default customer EORI number is used, or not | Boolean |  |
| is_eu_movement_risk_default | Indicates whether the default customer EU movement risk flag is used, or not | Boolean |  |
| is_ukims_number_default | Indicates whether the default customer UKIMS number is used, or not | Boolean |  |
| is_vat_number_default | Indicates whether the default customer VAT number is used, or not | Boolean |  |
| last_name | The last name of the addressee | String | Between 1 and 100 characters long |
| line1 | The first line of the address | String | Between 1 and 200 characters long |
| line2 | The second line of the address | String | Between 1 and 200 characters long |
| line3 | The third line of the address | String | Between 1 and 200 characters long |
| mobile | The mobile number relating to the address | String | Up to 20 characters long |
| phone | The phone number relating to the address | String | Up to 20 characters long |
| postcode | The postal code/zip code of the address | String | Up to 20 characters long |
| province | The name of the province/state/county | String | Between 1 and 100 characters long |
| province_code | The code for the province/state/county | String | Up to 10 characters long |
| province_id | The ID of the province/state/county | Integer | Up to 3 digits long |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long |
| reference | A unique reference for this customer address | String | Exactly 10 characters long |
| title | The title of the addressee | String | One of the following values: `dr`, `miss`, `mr`, `mrs`, `ms`, `mx` |
| ukims_number | The UKIMS number to use for this address | String | Up to 40 characters long |
| updated_at | A UTC datetime of when the address was updated | Datetime |  |
| use_profile_name | Indicates whether a profile name can override the title, first_name, and last_name fields | Boolean |  |
| vat_number | The VAT number to use for this address | String | Up to 20 characters long |
