# Usage

[Home](../index.md) > [API](index.md)

This is an overview on how to use the API within Models and other scripts

## Making Calls

Generally this is done by utilising the `localAPI` method. The first parameter will always be the endpoint that is being called - these will always vary depending exactly what the objective of the call is. The second parameter is the method be used to make the request and will be one of `POST`, `PUT`, `GET`, or `DELETE`. The third and final parameter is the payload that relates to the request.

### POST Requests

When creating new data via the API, the below example can be used:

```
$api->localAPI('/items', 'POST', $createItemData);
```

Here, the third paramter takes the form of an array - this can contain one or more items that need to be created

### PUT Requests

When updating data via the API, either of the below example can be used:

```
$api->localAPI('/items', 'PUT', $updateItemData);
$api->localAPI('/items/123', 'PUT', $updateItemData);
```

Here, the third parameter takes the form of an array - this can contain one or more items that need to be updated. The first example must have the `id` paramter provided within the array, whereas the second example does not, however this comes at the cost of only being able to make one update at a time

### GET Requests

When data needs to be returned from the API a `GET` request can be made. Manipulation of what is returned can be made by using the third pararmeter

Fetch all items:

```
$api->localAPI('/items', 'GET', '');
```
Fetch the item with ID `123`

```
$api->localAPI('/items/123', 'GET', '');
```

Fetch all the subitems that belong to item with ID `123`

```
$api->localAPI('/items/123/subitems', 'GET', '');
```

Fetch the subitem with ID `456` taht belongs to item with ID `123`

```
$api->localAPI('/items/123/subitems/456', 'GET', '');
```

Fetch the sub item with ID `456` (in this case we may not know what the parent item ID is)
```
$api->localAPI('/items/subitems/456', 'GET', '');'');
```

Fetch all the subitems belonging to any item

```
$api->localAPI('/items/subitems', 'GET', '');
```

#### Filtering Results

The `query` parameter can be used to filter the results that are returned. This can allow you to make complex filtering depending on requirements

API field names can be used within the filter along with special characters and actions

The below example shows how to find all the people that have the `first_name` of John

```
$api->localAPI('/people, 'GET', 'query=first_name:"John"');
```

What if we wanted to then find everyone that has both the `first_name` John but also the `last_name` Smith? This can be done by adding `AND`

```
$api->localAPI('/people, 'GET', 'query=first_name:"John"%20AND%20last_name:"Smith"');
```

How about if we instead wanted to then find everyone that has either the `first_name` John or the `last_name` Smith? This can be done by adding `OR`

```
$api->localAPI('/people, 'GET', 'query=first_name:"John"%20OR%20last_name:"Smith"');
```

What if we instead wanted to search for anyone whose name started with `John`? Such as `John`, `Johnny`, `Johnathon`? This can be done by dropping the speech marks to make a partial match

```
$api->localAPI('/people, 'GET', 'query=first_name:John');
```

It may be that we looking for people whose `first_name` is either `John` or `Johnny`, but we do not want `Johnathon` like above? There are a few ways this could be done, the first being to query both (using `OR`), or we could make sure that the name is within a list

```
$api->localAPI('/people, 'GET', 'query=first_name:"John"%20OR%20first_name:"Johnny"');
$api->localAPI('/people, 'GET', 'query=first_name:{{"John","Johnny"}}');
```

Perhaps we want to find all the people whose `first_name` or `middle_name` is `John`, but the `last_name` is `Smith` - this is where we can use square brackets

```
$api->localAPI('/people, 'GET', 'query=[[first_name:"John"%20OR%20middle_name:"John"]]%20AND%20last_name:"Smith"');
```

We can also append `_min` and `_max` to the end of certain fields. For example, say we want to find everyone born in the 21st Century

```
$api->localAPI('/people', 'GET', 'query=date_of_birth_min:"2000-01-01");
```

#### Limiting Fields

By default, all fields, including sub-fields, are returned during an API call. This can be controlled by providing the `fields` attribute. By requesting only the fields that are needed, a response may be made faster.

You *must* ensure that all the `fields` listed include fields specified within our paramters, such as `query`

For example, we may only want the `first_name` to be returned

```
$api->localAPI('/people', 'GET', 'fields=first_name');
```

If multiple fields are requested, these can be comma seperated:

```
$api->localAPI('/people', 'GET', 'fields=first_name,last_name');
```

If we only want to return all fields for the current API, but not the sub-fields, we can pass `_basic_` to the attribute

```
$api->localAPI('/people', 'GET', fields=_basic_');
```

There may even be a requirement where the sub-fields need to be controlled, for example, there may be address data linked to people, but only the `country` is required.

```
$api->localAPI('/people', 'GET', 'fields=first_name,addresses[country]');
```

#### Sorting

Sometimes you may need to sort the results of an API call for any given reason. This can be done by using the `order` parameter. Fields can be sorted either ascending `asc` or decending `desc`

```
$api->localAPI('/people', 'GET', 'order=first_name:asc');
```

If multiple fields are required to be sorted at the same time, this is possible by comma seperating them

```
$api->localAPI('/people', 'GET', 'order=last_name:asc,first_name:asc');
```

#### Limiting

By default, 20 results are returned during a API call. This can be increased/decreased to a maximum of 50 results by providing the `limit` attribute to the API request

For example, if just the first result was required

```
$api->localAPI('/people', 'GET', 'limit=1');
```