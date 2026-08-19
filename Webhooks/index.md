# Webhooks

[Home](../index.md)

## Intro

These docs highlight how webhooks work and what events are available to subscribe to

## Available Webhooks

Webhooks let the system tell your own application that something has happened, rather than you having to poll the API for
changes. The events available differ between the two systems

### Store System

The [Store System](Store/index.md) webhooks cover the entities involved in selling online, such as products, stock,
orders, ASNs, and returns

## Documentation

- [Subscribing](Subscribing.md) - how to register an endpoint and choose which events it receives
- [Request Format](Request_Format.md) - the structure of a webhook request
- [Verification](Verification.md) - how to confirm a request is genuine, and how to respond to it
