# Domains
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Domains
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /domains/ | GET | This allows you to view a list of domains | [Details](#view-domains) |
| /domains/:domain/ | GET | This allows you to view a list of domains | [Details](#view-domains) |

## View Domains
This allows you to view a list of domains

**URL** : `/domains/`

**URL** : `/domains/:domain/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| api_domain | The domain name for API access | String | Up to 200 characters long |
| api_subdomain | The subdomain name for API access | String | Up to 100 characters long |
| content_domain | The domain name for Content access | String | Up to 200 characters long |
| content_subdomain | The subdomain name for Content access | String | Up to 100 characters long |
| domain | The domain name | String | Up to 100 characters long |
| login_domain | The domain name for Login access | String | Up to 200 characters long |
| login_subdomain | The subdomain name for Login access | String | Up to 100 characters long |
| redirects_to | The location where the domain name should redirect to if this domain matches | String | Up to 100 characters long |
| status | The status of the domain | String | Must have the value: `active` |
