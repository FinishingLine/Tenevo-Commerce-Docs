# API Rotate
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Lets an API user replace its own keys
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /api/rotate/ | POST | This allows an API user to rotate its own keys - the ones the request is signed with, and nobody else's. It keeps its username, owner and scope, and is given a new public key, private key and secret, which are returned this once. The current keys keep working for 24 hours, or until they expire if sooner, so the integration can switch over. The new keys last as long as the current ones were issued for. An extension's cannot be rotated here, as the system it connects to holds the keys too - reconnect the extension instead. An API user is rotated once; rotate with the new keys after that | [Details](#rotate-own-keys) |

## Rotate Own Keys
This allows an API user to rotate its own keys - the ones the request is signed with, and nobody else's. It keeps its username, owner and scope, and is given a new public key, private key and secret, which are returned this once. The current keys keep working for 24 hours, or until they expire if sooner, so the integration can switch over. The new keys last as long as the current ones were issued for. An extension's cannot be rotated here, as the system it connects to holds the keys too - reconnect the extension instead. An API user is rotated once; rotate with the new keys after that

**URL** : `/api/rotate/`

**Method** : `POST`
