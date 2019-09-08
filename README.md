# static-electricity

⚠️ This library only barely works. It should not be used for production code.

FP library with rich static-land support.

## Features

* Useful general-purpose structures like linked lists and `Maybe`
* `static-land` modules for easy abstraction
  * `Canon` module and `canon` function for when you don't want to explicitly pass around modules
* Combinators like `always` and `id`

## Installation

```
npm install static-electricity
```

## Basic example

```javascript
const {Just, Nothing, match} = require ("static-electricity");
const {map} = require ("static-electricity/static-land/Maybe");

const bacon = Just ("bacon");
const food = map (x => `${x} ice cream`) (food);

const wouldYouLikeSome = match ({
  Just: x => `Yeah, ${x} sounds tasty.`,
  Nothing: () => "No, that doesn't sound very filling."
});

wouldYouLikeSome (food); // "Yeah, bacon ice cream sounds tasty."
wouldYouLikeSome (Nothing); // "No, that doesn't sound very filling."
```

## More examples

### 99 bottles of beer

```javascript
// This example does not work yet - the library is still very much a work in progress.
const {templateWith, unfold} = require ("static-electricity");
const bottleCount = bottles => bottles === 0 ? "No more bottles" :
  bottles === 1 ? "One more bottle" :
  `${bottles} more bottles`

const nBottles = templateWith ([bottleCount]) (
  `$0 of beer on the wall,
$0 of beer;
Take one down, pass it around,
$0 of beer on the wall.`
);

console.log (Array (99).fill ().map ((_, i) => nBottles (i).reverse ().join ("\n"));
```

## Licensing

This project is under the MIT license.
