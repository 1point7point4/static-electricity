## How to avoid having a bad time

 * Follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript#events) - but with one exception: write function calls with spaces (`f (x) (y)` instead of `f(x)(y)`).
 * Do not have circular references (A importing B, which imports A). This is fine in the main (es6 imports) version, but will silently fail in the NodeJS distribution.
 * Add only one feature/change per commit.
 * Only export one thing per file - this applies even for data constructors like `Left` and `Right`.
 * If you're adding a new feature that will be publicly exported, make sure the `index.js` file in the directory exports that file.
 * If you're adding a new file that provides private functionality, make sure to put it in a directory named `_`.
