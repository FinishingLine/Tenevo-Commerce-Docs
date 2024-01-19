# Suppliers Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages suppliers addresses
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /suppliers/:supplier/addresses/ | POST | This allows you to create an address for a supplier | [Details](#create-supplier-addresses) |
| /suppliers/:supplier/addresses/:addresses | DELETE | This allows you to delete an address from a supplier | [Details](#delete-supplier-addresses) |
| /suppliers/:supplier/addresses/ | PUT | This allows you to update a specific address in a supplier | [Details](#update-supplier-addresses) |
| /suppliers/:supplier/addresses/:addresses/ | PUT | This allows you to update a specific address in a supplier | [Details](#update-supplier-addresses) |
| /suppliers/:supplier/addresses/ | GET | This allows you to list the addresses belonging to the supplier | [Details](#view-supplier-addresses) |
| /suppliers/:supplier/addresses/:addresses | GET | This allows you to list the addresses belonging to the supplier | [Details](#view-supplier-addresses) |

## Create Supplier Addresses
This allows you to create an address for a supplier

**URL** : `/suppliers/:supplier/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company | String | Up to 100 characters long | NULL | N | N |
| contact_name | The name of a contact at the supplier | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An email address of the contact at the supplier | String | Up to 100 characters long | NULL | N | N |
| is_primary | Indicates if this address is the primary address for the supplier | Boolean |  | 0 | N | N |
| line1 | First line of addresses | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number of the contact at the supplier | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number of the contact at the supplier | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |

## Delete Supplier Addresses
This allows you to delete an address from a supplier

**URL** : `/suppliers/:supplier/addresses/:addresses`

**Method** : `DELETE`

## Update Supplier Addresses
This allows you to update a specific address in a supplier

**URL** : `/suppliers/:supplier/addresses/`

**URL** : `/suppliers/:supplier/addresses/:addresses/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company | String | Up to 100 characters long | NULL | N | N |
| contact_name | The name of a contact at the supplier | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An email address of the contact at the supplier | String | Up to 100 characters long | NULL | N | N |
| is_primary | Indicates if this address is the primary address for the supplier | Boolean |  | 0 | N | N |
| line1 | First line of addresses | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number of the contact at the supplier | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number of the contact at the supplier | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |

## View Supplier Addresses
This allows you to list the addresses belonging to the supplier

**URL** : `/suppliers/:supplier/addresses/`

**URL** : `/suppliers/:supplier/addresses/:addresses`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long |
| company_name | The name of the company | String | Up to 100 characters long |
| contact_name | The name of a contact at the supplier | String | Up to 100 characters long |
| country | The name of the country | String | Up to 255 characters long |
| country_iso2 | A ISO 2 letter country code | String | Exactly 2 characters long |
| email | An email address of the contact at the supplier | String | Up to 100 characters long |
| is_primary | Indicates if this address is the primary address for the supplier | Boolean |  |
| line1 | First line of addresses | String | Between 1 and 200 characters long |
| line2 | Second line of addresses | String | Up to 200 characters long |
| line3 | Third line of addresses | String | Up to 200 characters long |
| mobile | The mobile phone number of the contact at the supplier | String | Up to 20 characters long |
| phone | The phone number of the contact at the supplier | String | Up to 20 characters long |
| postcode | The postal code/zip code | String | Up to 20 characters long |
| province | The name of the province/state/county | String | Between 1 and 100 characters long |
| province_code | The code for the province/state/county | String | Up to 10 characters long |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long |
