# Types

[Home](../index.md) > [API](index.md)

The below types can be used when constructing new API functionality

| Type | Example | Description | Constraints |
| --- | --- | --- | --- |
| Array | {Array} | Used for providing bulk data to/from the next level of the API ||
| Boolean | {Boolean} | Used for indicating whether something is true/false | Should be able to accept Boolean or String values |
| Date | {Date} | Used for dates | Must be in the format Y-m-d |
| Datetime | {Datetime} | Used for timestamps | Must be in UTC time, must be in the format Y-m-d H:i:s using 24 hour clock |
| Float | {Float} | Used for floats/decimals ||
|| {Float{5,2}} | Left parameter is the maximum length (excluding decimal point), right being the maximum precision | Enclosed left parameter must be greater than right |
| Integer | {Integer} | Used for integers/whole numbers ||
|| {Integer{5}} | Used for an exact integer length ||
|| {Integer{..5}} | Used for a maximum length ||
|| {Integer{1,5}} | Used for a minimum and maximum length | Left parameter must be smaller than right |
| Json | {Json} | Used for providing a Json string ||
| String | {String} | Used for strings ||
|| {String{5}} | Used for an exact string length ||
|| {String{..5}} | Used for a maximum length ||
|| {String{1,5}} | Used for a minimum and maximum length | Left parameter must be smaller than the right |
|| {String{option1,option2}} | Used for showing which option(s) are expected | Option(s) must be comma seperated |
| Time | {Time} | Used for times | Must be in the format H:i:s using 24 hour clock |
| Url | {Url} | Used for Urls ||