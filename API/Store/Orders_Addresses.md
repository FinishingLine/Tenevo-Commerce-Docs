# Orders Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Orders Address
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /orders/:order/addresses/ | POST | This allows you to create an address for an order | [Details](#create-order-addresses) |
| /orders/:order/addresses/:addresses | DELETE | This allows you to delete an address from an order | [Details](#delete-order-addresses) |
| /orders/:order/addresses/ | PUT | This allows you to update a specific address in an order | [Details](#update-order-addresses) |
| /orders/:order/addresses/:addresses/ | PUT | This allows you to update a specific address in an order | [Details](#update-order-addresses) |
| /orders/:order/addresses/ | GET | This allows you to list the addresses belonging to the order | [Details](#view-order-addresses) |
| /orders/:order/addresses/:addresses | GET | This allows you to list the addresses belonging to the order | [Details](#view-order-addresses) |

## Create Order Addresses
This allows you to create an address for an order

**URL** : `/orders/:order/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice` | NULL | Y | N |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| ebay_vtn | The ebay VTN number related to the address | String | Up to 11 characters long | NULL | N | N |
| email | An email address to contact the recipient with | String |  | NULL | N | N |
| eori_number | The EORI number related to this address | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if the order is at risk of entering the EU, or not | Boolean |  | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of addresses | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |
| skip_picky_checks | Skip picky checks - will not run if skip_checks is false | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available - will not run if skip_checks is false | Boolean |  | false | N | N |
| title | The title of the recipient | String | One of the following values: `Dr`, `Fr`, `Lady`, `Lord`, `Madam`, `Master`, `Miss`, `Mr`, `Mrs`, `Ms`, `Mx`, `Prof`, `Rev`, `Sir` | NULL | N | N |
| ukims_number | The UKIMS number related to this address | String | Up to 40 characters long | NULL | N | N |
| vat_number | The VAT number related to the address | String | Up to 20 characters long | NULL | N | N |

## Delete Order Addresses
This allows you to delete an address from an order

**URL** : `/orders/:order/addresses/:addresses`

**Method** : `DELETE`

## Update Order Addresses
This allows you to update a specific address in an order

**URL** : `/orders/:order/addresses/`

**URL** : `/orders/:order/addresses/:addresses/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| ebay_vtn | The ebay VTN number related to the address | String | Up to 11 characters long | NULL | Y | N |
| email | An email address to contact the recipient with | String |  | NULL | N | N |
| eori_number | The EORI number related to this address | String | Up to 20 characters long | NULL | N | N |
| eu_movement_risk | Indicates if the order is at risk of entering the EU, or not | Boolean |  | NULL | N | N |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long | NULL | Y | N |
| line1 | First line of addresses | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |
| skip_picky_checks | Skip picky checks - will not run if skip_checks is false | Boolean |  | false | N | N |
| skip_province_postcode_check | When true, will validate postcode on a country-level, where available - will not run if skip_checks is false | Boolean |  | false | N | N |
| title | The title of the recipient | String | One of the following values: `Dr`, `Fr`, `Lady`, `Lord`, `Madam`, `Master`, `Miss`, `Mr`, `Mrs`, `Ms`, `Mx`, `Prof`, `Rev`, `Sir` | NULL | N | N |
| ukims_number | The UKIMS number related to this address | String | Up to 40 characters long | NULL | N | N |
| vat_number | The VAT number related to the address | String | Up to 20 characters long | NULL | N | N |

## View Order Addresses
This allows you to list the addresses belonging to the order

**URL** : `/orders/:order/addresses/`

**URL** : `/orders/:order/addresses/:addresses`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `delivery`, `invoice` |
| city | The city or town | String | Between 1 and 100 characters long |
| company_name | The name of the company where the recipient can be found | String | Between 1 and 100 characters long |
| country | The name of the country | String | Up to 255 characters long |
| country_iso2 | A ISO 2 letter country code | String | Exactly 2 characters long |
| ebay_vtn | The ebay VTN related to the address | String | Up to 11 characters long |
| email | An email address to contact the recipient with | String | Up to 100 characters long |
| eori_number | The EORI number related to this address | String | Up to 20 characters long |
| eu_movement_risk | Indicates if the order is at risk of entering the EU, or not | Boolean |  |
| first_name | The first name of the recipient | String | Between 1 and 100 characters long |
| full_name | The full name of the recipient | String | Between 3 and 201 characters long |
| hash | A hash of the address | String | Exactly 64 characters long |
| last_name | The last name/family name of the recipient | String | Between 1 and 100 characters long |
| line1 | First line of addresses | String | Between 1 and 200 characters long |
| line2 | Second line of addresses | String | Up to 200 characters long |
| line3 | Third line of addresses | String | Up to 200 characters long |
| mobile | The mobile phone number to contact the recipient with | String | Up to 20 characters long |
| phone | The phone number to contact the recipient with | String | Between 1 and 20 characters long |
| postcode | The postal code/zip code | String | Up to 20 characters long |
| province | The name of the province/state/county | String | Between 1 and 100 characters long |
| province_code | The code for the province/state/county | String | Up to 10 characters long |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long |
| title | The title of the recipient | String | One of the following values: `Dr`, `Fr`, `Lady`, `Lord`, `Madam`, `Master`, `Miss`, `Mr`, `Mrs`, `Ms`, `Mx`, `Prof`, `Rev`, `Sir` |
| ukims_number | The UKIMS number related to this address | String | Up to 40 characters long |
| vat_number | The VAT number related to the address | String | Up to 20 characters long |
