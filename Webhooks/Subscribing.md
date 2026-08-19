# Subscribing

[Home](../index.md) > [Webhooks](index.md)

## Intro

A webhook is an endpoint you own, plus the set of events you want sent to it. Both are managed under
**Settings > Webhooks**.

## Scopes

Each event you can subscribe to is identified by a **scope**, stored in the form `<create|delete|update>_<entity>` - for
example `update_products`.

The interface groups these by resource, so a scope may be presented under a friendlier heading than its stored name. The
stored scope is what travels on the wire as `event_type`.

## Creating a webhook

| Field         | Notes                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| Name          | For your own reference in the interface                                     |
| Request URL   | Where requests are sent; must be reachable over HTTPS                        |
| Status        | `Active` sends events; `Paused` keeps the configuration but sends nothing     |
| Subscriptions | Each event individually set to `Active`, `Paused`, or left unsubscribed       |

At least one event has to be set to `Active` or `Paused` before the webhook can be saved.

Which events appear depends on the permissions held by the account and the modules enabled for the client, so not every
documented event is available to every account.

## Code and token

Once created you are shown a **code** and a **token**:

- the **code** identifies the webhook, and is sent with every request
- the **token** is the shared secret used to sign every request, and is what you check against in
  [Verification](Verification.md)

> The token is displayed **once, at the point of creation**. It cannot be retrieved afterwards, so store it somewhere safe
> before leaving the page.

## Pausing

Both a webhook and each individual event can be paused.

Pausing a single event stops just that event while leaving the rest of the subscription intact - useful for silencing one
noisy event without tearing down the endpoint. Pausing the webhook stops everything being sent to that URL.
