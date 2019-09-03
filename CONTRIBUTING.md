## How to avoid having a bad time

 * Follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript#events) - but with one exception: write function calls with spaces (`f (x) (y)` instead of `f(x)(y)`).
 * Do not have circular references (A importing B, which imports A). This is fine in the main (es6 imports) version, but will silently fail in the NodeJS distribution.
