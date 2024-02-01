# ASNs Addresses
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages advanced shipment notification addresses
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /asns/:asn/addresses/ | POST | This allows you to create an address for an advanced shipping notice | [Details](#create-advanced-shipment-notification-addresses) |
| /asns/:asn/addresses/:addresses | DELETE | This allows you to delete an address from an advanced shipment notification | [Details](#delete-advanced-shipment-notification-addresses) |
| /asns/:asn/addresses/ | PUT | This allows you to update a specific address in an advanced shipment notification | [Details](#update-advanced-shipment-notification-addresses) |
| /asns/:asn/addresses/:addresses/ | PUT | This allows you to update a specific address in an advanced shipment notification | [Details](#update-advanced-shipment-notification-addresses) |
| /asns/:asn/addresses/ | GET | This allows you to list the addresses belonging to the advanced shipment notification | [Details](#view-advanced-shipment-notification-addresses) |
| /asns/:asn/addresses/:addresses | GET | This allows you to list the addresses belonging to the advanced shipment notification | [Details](#view-advanced-shipment-notification-addresses) |

## Create Advanced Shipment Notification Addresses
This allows you to create an address for an advanced shipping notice

**URL** : `/asns/:asn/addresses/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `from`, `to` | NULL | Y | N |
| city | The city or town; not required when `owner_id` and `owner_type` is provided | String | Between 1 and 100 characters long | NULL | N | Y |
| company_name | The name of the company | String | Up to 100 characters long | NULL | N | N |
| contact_name | The name of a contact at the address | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code; not required when `owner_id` and `owner_type` is provided | String | Exactly 2 characters long | NULL | N | Y |
| email | An email address of the contact at the address | String | Up to 100 characters long | NULL | N | N |
| line1 | First line of addresses; not required when `owner_id` and `owner_type` is provided | String | Between 1 and 200 characters long | NULL | N | Y |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number of the contact at the address | String | Up to 20 characters long | NULL | N | N |
| owner_id | The Owner ID of this address; required with `owner_type` | Integer |  | NULL | N | Y |
| owner_type | The Owner Type of this address; required with `owner_id`. When provided, `supplieraddress` must be used when `address_type` is `from` and `fulfillmentservice` must be used when `address_type` is `to` | String | One of the following values: `fulfillmentservice`, `supplieraddress` | NULL | N | Y |
| phone | The phone number of the contact at the address | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code; not required when `owner_id` and `owner_type` is provided | String | Up to 20 characters long | NULL | N | Y |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| reference | A reference that the address uses for the ASN | String | Up to 50 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |

## Delete Advanced Shipment Notification Addresses
This allows you to delete an address from an advanced shipment notification

**URL** : `/asns/:asn/addresses/:addresses`

**Method** : `DELETE`

## Update Advanced Shipment Notification Addresses
This allows you to update a specific address in an advanced shipment notification

**URL** : `/asns/:asn/addresses/`

**URL** : `/asns/:asn/addresses/:addresses/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| city | The city or town | String | Between 1 and 100 characters long | NULL | Y | N |
| company_name | The name of the company | String | Up to 100 characters long | NULL | N | N |
| contact_name | The name of a contact at the address | String | Up to 100 characters long | NULL | N | N |
| country_iso2 | A valid ISO 2 letter country code | String | Exactly 2 characters long | NULL | Y | N |
| email | An email address of the contact at the address | String | Up to 100 characters long | NULL | N | N |
| line1 | First line of addresses | String | Between 1 and 200 characters long | NULL | Y | N |
| line2 | Second line of addresses | String | Up to 200 characters long | NULL | N | N |
| line3 | Third line of addresses | String | Up to 200 characters long | NULL | N | N |
| mobile | The mobile phone number of the contact at the address | String | Up to 20 characters long | NULL | N | N |
| phone | The phone number of the contact at the address | String | Up to 20 characters long | NULL | N | N |
| postcode | The postal code/zip code | String | Up to 20 characters long | NULL | Y | N |
| province | The name of the province/state/county | String | Between 1 and 100 characters long | NULL | N | N |
| province_code | The code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long | NULL | N | N |
| reference | A reference that the address uses for the ASN | String | Up to 50 characters long | NULL | N | N |
| skip_checks | Skip certain checks to ensure the address is inserted | Boolean |  | false | N | N |

## View Advanced Shipment Notification Addresses
This allows you to list the addresses belonging to the advanced shipment notification

**URL** : `/asns/:asn/addresses/`

**URL** : `/asns/:asn/addresses/:addresses`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| address_type | The type of address | String | One of the following values: `from`, `to` |
| city | The city or town | String | Between 1 and 100 characters long |
| company_name | The name of the company | String | Up to 100 characters long |
| contact_name | The name of a contact at the address | String | Up to 100 characters long |
| country | The name of the country | String | Up to 255 characters long |
| country_iso2 | A ISO 2 letter country code | String | Exactly 2 characters long |
| email | An email address of the contact at the address | String | Up to 100 characters long |
| line1 | First line of addresses | String | Between 1 and 200 characters long |
| line2 | Second line of addresses | String | Up to 200 characters long |
| line3 | Third line of addresses | String | Up to 200 characters long |
| mobile | The mobile phone number of the contact at the address | String | Up to 20 characters long |
| owner_id | The Owner ID of this address | Integer |  |
| owner_type | The Owner Type of this address | String | One of the following values: `fulfillmentservice`, `supplieraddress` |
| phone | The phone number of the contact at the address | String | Up to 20 characters long |
| postcode | The postal code/zip code | String | Up to 20 characters long |
| province | The name of the province/state/county | String | Between 1 and 100 characters long |
| province_code | The code for the province/state/county | String | Up to 10 characters long |
| province_iso | An ISO code for the province/state/county | String | Up to 10 characters long |
| reference | A reference that the address uses for the ASN | String | Up to 50 characters long |
