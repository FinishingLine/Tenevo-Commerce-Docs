# Types

[Home](../index.md) > [API](index.md)

The below types can be used when constructing new API functionality

| Type | Example | Description | Constraints |
| --- | --- | --- | --- |
| Array | {Array} | Used for providing bulk data to/from the next level of the API ||
| Boolean | {Boolean} | Used for indicating whether something is true/false | Should be able to accept Boolean or String values |
| Date | {Date} | Used for dates | Must be in the format Y-m-d |
| Datetime | {Datetime} | Used for timestamps | Must be in UTC time, must be in the format Y-m-d H:i:s using 24 hour clock - Y-m-d H:i is also accepted, and stored with `:00` seconds |
| Float | {Float} | Used for floats/decimals ||
|| {Float{5,2}} | Left parameter is the maximum length (excluding decimal point), right being the maximum precision | Enclosed left parameter must be greater than right |
| Integer | {Integer} | Used for integers/whole numbers ||
|| {Integer{5}} | Used for an exact integer length, in digits ||
|| {Integer{..5}} | Used for a maximum length, in digits ||
|| {Integer{1..5}} | Used for a minimum and maximum length, in digits | Left parameter must be smaller than right |
|| {Integer{1..10;>=1}} | A length constraint followed by a minimum value, after a semicolon | The value must be greater than or equal to the number given |
|| {Integer{1..4;<=3600}} | A length constraint followed by a maximum value, after a semicolon | The value must be less than or equal to the number given |
|| {Integer{1..4;1<=3600}} | A length constraint followed by a minimum and maximum value, after a semicolon | The value must be between the two numbers given, inclusive |
| Json | {Json} | Used for providing a Json string ||
| String | {String} | Used for strings ||
|| {String{5}} | Used for an exact string length ||
|| {String{..5}} | Used for a maximum length | Used for an optional field, which may be empty |
|| {String{1..5}} | Used for a minimum and maximum length | Left parameter must be smaller than the right - use `1..` for a required field, as it cannot be empty |
|| {String{option1,option2}} | Used for showing which option(s) are expected | Option(s) must be comma separated - use the named values the API returns (e.g. `active,paused`), not the stored numbers |
| Time | {Time} | Used for times | Must be in the format H:i:s using 24 hour clock - H:i is also accepted, and stored with `:00` seconds |
| Url | {Url} | Used for Urls ||