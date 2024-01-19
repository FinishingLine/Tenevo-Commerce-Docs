# Products Images
[Home](../../index.md) > [API](../index.md) > [Store](index.md)
## Intro
Manages product images
## Endpoints
The below endpoints are available with this API

| Endpoint | Method | Description | |
| --- | --- | --- | --- |
| /products/:product/images/ | POST | This allows you to create product images | [Details](#create-product-images) |
| /products/:product/images/:image/ | DELETE | This allows you to delete a specified product image | [Details](#delete-product-image) |
| /products/:product/images/ | PUT | This allows you to update product images | [Details](#update-product-images) |
| /products/:product/images/:image/ | PUT | This allows you to update product images | [Details](#update-product-images) |
| /products/:product/images/ | GET | This allows you to list product images | [Details](#view-product-images) |
| /products/:product/images/:image/ | GET | This allows you to list product images | [Details](#view-product-images) |

## Create Product Images
This allows you to create product images

**URL** : `/products/:product/images/`

**Method** : `POST`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alt_text | The alt text for the image, uses media alt_text when empty | String | Between 1 and 100 characters long | NULL | N | N |
| media_id | A valid Media ID | Integer |  | NULL | Y | N |
| sort_order | The sort order of the images, where required | Integer | Up to 3 digits long | 999 | N | N |

## Delete Product Image
This allows you to delete a specified product image

**URL** : `/products/:product/images/:image/`

**Method** : `DELETE`

## Update Product Images
This allows you to update product images

**URL** : `/products/:product/images/`

**URL** : `/products/:product/images/:image/`

**Method** : `PUT`

| Field | Description | Type | Requirements | Default | Required? | Conditional? |
| --- | --- | --- | --- | --- | --- | --- |
| alt_text | The alt text for the image, uses media alt_text when empty | String | Between 1 and 100 characters long | NULL | N | N |
| sort_order | The sort order of the images, where required | Integer | Up to 3 digits long | 999 | N | N |

## View Product Images
This allows you to list product images

**URL** : `/products/:product/images/`

**URL** : `/products/:product/images/:image/`

**Method** : `GET`

| Field | Description | Type | Validation |
| --- | --- | --- | --- |
| alt_text | The alt text for the image | String | Between 1 and 100 characters long |
| height | Where the media file is an image, the height of the image in pixels | Integer | Between 1 and 10 digits long |
| media_id | A valid Media ID | Integer |  |
| sort_order | The sort order of the images | Integer | Up to 3 digits long |
| url | The full URL of the media file | String |  |
| width | Where the media file is an image, the width of the image in pixels | Integer | Between 1 and 10 digits long |
