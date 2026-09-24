# API Error Codes

[API](index.md)

Every response the API sends because something went wrong - a request it could not authenticate, one it was not
allowed to make, one it could not accept - says what went wrong in the same way: a **type**, a **code** and a
**message**.

## The error

A failed request carries `request.error` alongside the usual `request` details:

```json
{
	"request": {
		"api_version": "1.3",
		"status_code": 401,
		"error": {
			"type": "authentication_error",
			"code": "credentials_expired",
			"message": "The API user has expired - it needs its expiry extended, or its keys rotating"
		}
	}
}
```

- `type` is the broad kind of failure - one of the four below. Branch on this for general handling.
- `code` is the specific failure. Match on this when the caller needs to act on one in particular.
- `message` explains it in words. The wording can change, so never match on it.
- `request.status_code` is the HTTP status, given for each code below.

A request that fails on its fields - a value missing, or too long - also carries `request.errors`, listing each
problem with the field it is about. A successful response has no `request.error`.

`request.status` is unchanged by any of this and is kept for existing clients only. New callers should use
`request.error`.

## Types

| Type                    | What it means                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| `authentication_error`  | Who is calling cannot be established - the credentials, signature or fingerprint are missing, wrong or expired |
| `permission_error`      | The caller is known, but is not allowed to do this                                                             |
| `invalid_request_error` | The request itself is wrong - its fields, its route or the record it names                                     |
| `api_error`             | Something went wrong on our side                                                                               |

## Codes

### Authentication

| Code                     | HTTP | What it means                                                               | What to do                                                                                                                                                                                                                  |
| ------------------------ | ---- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentials_invalid`    | 401  | The username or public key is not recognised, or the API user is not active | Check the username and public key. A revoked API user stays refused - it needs a new one issuing                                                                                                                            |
| `credentials_expired`    | 401  | The API user has expired                                                    | Have its expiry extended, or rotate its keys before it lapses                                                                                                                                                               |
| `ip_address_not_allowed` | 401  | The request comes from an IP address the API user may not be used from      | Call from an allowed address, or have the address added to the API user                                                                                                                                                     |
| `signature_missing`      | 401  | The request's signature, timestamp or fingerprint is missing                | Send all three with every request after `/auth/`                                                                                                                                                                            |
| `signature_invalid`      | 401  | The request's signature is unknown or has expired                           | Authenticate again at `/auth/` for a new signature                                                                                                                                                                          |
| `timestamp_out_of_range` | 401  | The request's timestamp is more than two minutes from the server's time     | Send the current UTC time, and check the caller's clock                                                                                                                                                                     |
| `fingerprint_mismatch`   | 401  | The request's fingerprint does not match                                    | Check the fingerprint is built from the private key, timestamp, secret, route, request data and server signature, in that order. A request that sends `Tenevo-Client-Code` also appends the header's value, exactly as sent |
| `unauthorised`           | 401  | The request could not be authenticated                                      | Authenticate at `/auth/`, then sign each request                                                                                                                                                                            |

### Permission

| Code                   | HTTP | What it means                             | What to do                                                                                  |
| ---------------------- | ---- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| `resource_not_allowed` | 403  | The API user may not use this resource    | Have the resource added to the API user, if it should have it                               |
| `method_not_allowed`   | 403  | The API user may not use this HTTP method | Have the method added to the API user - a new API user only reads (`GET`) unless given more |
| `forbidden`            | 403  | The request is not allowed                | Check the API user may do what is being asked                                               |

### Invalid Request

| Code                        | HTTP | What it means                                                              | What to do                                                      |
| --------------------------- | ---- | -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `validation_failed`         | 400  | One or more fields could not be accepted                                   | See `request.errors` for each problem and the field it is about |
| `not_found`                 | 404  | The route, or the record it names, does not exist                          | Check the route and the ID in it                                |
| `api_version_not_supported` | 405  | The API version in the route is not supported                              | Use a supported version                                         |
| `http_method_not_supported` | 406  | The HTTP method is not one the API accepts                                 | Use `GET`, `POST`, `PUT` or `DELETE`                            |
| `request_failed`            | 4xx  | The request could not be completed, for a reason without a code of its own | See `request.errors`, if present                                |

### API

| Code             | HTTP | What it means                    | What to do                                     |
| ---------------- | ---- | -------------------------------- | ---------------------------------------------- |
| `internal_error` | 5xx  | Something went wrong on our side | Try again, and contact support if it continues |

## From `/auth/`

`/auth/` refuses before there is a signature, so the codes it can return are `credentials_invalid`,
`credentials_expired`, `ip_address_not_allowed` and `fingerprint_mismatch`
