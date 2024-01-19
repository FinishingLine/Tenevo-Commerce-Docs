# Branding
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages Branding
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /branding/ | POST | This allows you to update branding | [Details](#update-branding) |
| /branding/ | GET | This allows you to list branding | [Details](#view-branding) |

## Update Branding
This allows you to update branding

**URL** : `/branding/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| logo | A base 64 encoded string of the attachment. Maximum file size: 5MB. Accepted attachment extensions include: .gif, .jpg, & .png - must be 1000px wide and 400px | String |  | NULL | Y | N |
| primary_background_colour | The primary background colour - string should be a valid colour hex code | String | Between 1 and 6 characters long | NULL | Y | N |
| primary_foreground_colour | The primary foreground colour - string should be a valid colour hex code | String | Between 1 and 6 characters long | NULL | Y | N |
| system_title | The system title | String | Between 1 and 100 characters long | NULL | Y | N |

## View Branding
This allows you to list branding

**URL** : `/branding/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| logo_master | A Url to the master logo | Url |  |
| logo_print | A Url to the print logo | Url |  |
| primary_background_colour | The primary background colour - string is a colour hex code | String | Between 1 and 6 characters long |
| primary_foreground_colour | The primary foreground colour - string is a colour hex code | String | Between 1 and 6 characters long |
| system_title | The system title | String | Between 1 and 100 characters long |
