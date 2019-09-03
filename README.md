# static-electricity

⚠️ This library only barely works. It should not be used for production code ⚠️

FP library with rich static-land support.

## Features

* Useful general-purpose structures like linked lists and `Maybe`
* `static-land` modules for easy abstraction
  * `Auto` module for when you don't want to explicitly pass around modules
* Abstracted functions like `map` or `equals`
  * "`<abstraction>$`" versions of those functions that explicitly take a module

## Installation

```
npm install static-electricity
```

## Basic example

```javascript
/* NOTE: THIS IS STILL IN VERY EARLY STAGES OF DEVELOPMENT, THE EXAMPLE MAY NOT
 * WORK YET
 */
const {Just, match} = require ("static-electricity");
const {map, show} = require ("static-electricity/polymorphic");

const food = Just ("Bacon");
map (x => `${x} ice cream`) (food);

match ({
  Just: x => `${x} sounds tasty.`,
  Nothing: () => "I'm not very hungry at the moment."
}) (
  food
);
```

## More examples

### 99 bottles of beer

```javascript
const {template} = require ("static-electricity");
const bottleCount = bottles => bottles === 0 ? "No more bottles" :
  bottles === 1 ? "One more bottle" :
  `${bottles} more bottles`

const nBottles = templateWith (bottleCount) (
  `$0 of beer on the wall,
$0 of beer;
Take one down, pass it around,
$0 of beer on the wall.`
);

// TODO: find out how `unfold` works.
console.log (
```

## Licensing

This project is under the MIT license.
