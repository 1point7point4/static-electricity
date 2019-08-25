import canon from "../canon";
import Empty from "../Empty";
import Id from "../CompositionId";
import AdditiveId from "../AdditiveId";
import MultiplicativeId from "../MultiplicativeId";

/* TODO: replace Infinity, -Infinity etc. with objects MaxBound, MinBound,
 * etc.
 */

/* [NOTE: values of type `() -> a`]
 ************************************
 * This is a historical explanation of why `empty` and many other values are of
 * type `() -> a`:
 *
 * Originally, Fantasyland wanted everything in the spec to be a function for
 * consistency.
 *
 * This library supports static-land, which is based off of Fantasyland, and so
 * empty was a function in static-land from the start. Changing these values
 * to have type `a` could cause compatibility issues.
 *
 * There are also rare cases
 * where `empty` being a function plays more nicely with static type systems for
 * JS:
 * (https://github.com/rpominov/static-land/issues/32#issuecomment-258691247)
 *
 * There is some discussion regarding whether the static-land spec should be
 * altered so `empty` has type `a` instead:
 * (https://github.com/fantasyland/static-land/issues/37)
 *
 * Values in the extended spec such as `minBound` are represented as functions
 * for consistency with static-land.
 */

/* Since `Canon` is a stand-in for other modules, we won't be using
 * `supportEmpty` and such.
 */

const Canon = {
  typeName: "Canon",

  /* We need to implement `equals`, `lte`, and `show` and not just the lifted
   * versions in order to support modules without the lifted counterparts.
   */
  equals: x => y => canon (x).equals (x) (y),

  // Should be read here as `x less than or equal to y`.
  lte: x => y => canon (x).lte (x) (y),

  concat: x => y => canon (x).concat (x) (y),

  // See [NOTE: values of type `() -> a`].
  empty: () => Empty,

  // We /can/ have `invert` though! ^^
  invert: x => canon (x).invert (x),

  compose: x => y => canon (x).compose (x) (y),

  // See [NOTE: values of type `() -> a`].
  id: () => Id,

  filter: predicate => x => canon (x).filter (predicate) (x),

  // Just run-of-the-mill static-land stuff.
  map: f => x => canon (x).map (f) (x),
  bimap: f => g => x => canon (x).bimap (f) (g) (x),

  /* `map` is like left-to-right composition and `contramap` is like
   * right-to-left composition
   */
  contramap: f => x => canon (x).contramap (f) (x),

  // `promap` is to `bimap` as `contramap` is to `map`.
  promap: f => g => x => canon (x).promap (f) (g) (x),
  ap: af => ax => canon (ax).ap (af) (ax),

  /* We can't make this work as well as we should because we can't guess the
   * type that `pure` should be.
   */
  of: x => ({
    value: x,
    get "static-land/canonical" () {
      throw Error (
        "`Canon.of (${x})` is of unknown type - this is a placeholder value that allows some use cases to work anyway."
      );
    },
    get constructor () {
      throw Error (
        "`Canon.of (${x})` is of unknown type - this is a placeholder value that allows some use cases to work anyway."
      );
    }
  }),

  alt: x => y => canon (x).alt (x) (y),

  // See [NOTE: values of type `() -> a`].
  zero: () => Zero,

  // `chain` is scala's `flatMap`.
  chain: f => x => canon (x).chain (f) (x),

  /* In some cases, `chain` would result in excessive stack usage. That's where
   * `chainRec` comes in.
   */
  chainRec: f => x => canon (x).chainRec (f) (x),

  reduce: f => accumulator => x => canon (x).reduce (f) (accumulator) (x),

  /* `length` only exists for performance reasons - it can be derived as
   * `Foo.reduce (_ => accumulator => accumulator + 1) (0)` and all modules with
   * `length` must also have `reduce`.
   */
  length: x => canon (x).length (f) (accumulator) (x),

  unReduce: f => accumulator => x => canon (x).unReduce (f) (accumulator) (x),

  // Extending is sort of like "un`chain`ing".
  extend: f => x => canon (x).extend (f) (x),

  // Extracting is sort of like "un`pure`ing".
  extract: x => canon (x).extract (x),

  // Examples include `safeHead` and `Maybe.map (id)`.
  extractMaybe: x => canon (x).extractMaybe,

  traverse: Module => f => x => canon (x).traverse (Module) (f) (x),

  toEnum: x => canon (x).toEnum (x),
  fromEnum: x => canon (x).fromEnum (x),

  // See [NOTE: values of type `() -> a`].
  minBound: () => MinBound,
  maxBound: () => MaxBound,

  show: x => canon (x).show (x),

  // TODO: decide what type to use to represent ranges.

  // Think `[lower..upper]`.
  range: lower => upper => canon (lower).range (lower) (upper),

  // Look up what this means cause I forgot.
  index: lower => upper => x => canon (x).index (lower) (upper) (x),

  /* "Is `x` between `lower` and `upper`?"
   * Note that it's not dependent on Ord because it should also work for partial
   * orderings.
   */
  inRange: lower => upper => x => canon (x).inRange (lower) (upper) (x),

  // A salt is a number that should alter the resulting hash or something???
  hashWithSalt: salt => x => canon (x).hashWithSalt (salt) (x),

  // See [NOTE: values of type `() -> a`].
  additiveId: () => AdditiveId,
  additiveInverse: x => canon (x).additiveInverse (x),
  add: x => y => canon (x).add (x) (y),

  // See [NOTE: values of type `() -> a`].
  multiplicativeId: () => MultiplicativeId,
  multiplicativeInverse: x => canon (x).multiplicativeInverse (x),
  multiply: x => y => canon (x).add (x) (y),

  not: x => canon (x).not (x),
  // See [NOTE: values of type `() -> a`].
  conjunctiveId: () => ConjunctiveId,

  and: x => y => canon (x).and (x) (y),

  /* `or` can be derived using `and`/`not` but some types (i.e. `Set`) do not
   * have a very practical-to-implement `not`. In addition, using a direct
   * implementation of `or` will improve performance over using the derived
   * version (`x => y => not (and (not (x)) (not (y)))`)
   */

  // See [NOTE: values of type `() -> a`].
  disjunctiveId: () => DisjunctiveId,
  or: x => y => canon (x).or (x) (y),


  /* Similar to `lte`, read as "x subset of y".
   * In a way, subset is like `lt` but for partial orderings instead.
   */
  subset: x => y => canon (x).superset (x) (y),

  fst: x => canon (x).fst (x),
  snd: x => canon (x).snd (x),

  // To be used on lazy data structures to force a strict interpretation.
  force: x => canon (x).force (x),

  // Lifted versions are very useful when you need to use a custom instance.
  liftEquals1: equals => x => y => canon (x).liftEquals1 (equals) (x) (y),
  liftLte1: lte => x => y => canon (x).liftLte1 (lte) (x) (y),
  liftConcat1: concat => x => y => canon (x).liftConcat1 (concat) (x) (y),

  liftFilter1: filter => p => x => canon (x).liftFilter1 (filter) (p) (x),

  /* You might have a monad like `Free` where you can have multiple layers of
   * functors.
   */
  liftMap1: map => f => x => canon (x).liftMap1 (map) (f) (x),
  liftShow1: show => x => canon (x).liftShow1 (show) (x),

  // There are a few other lifted typeclasses that might be useful to implement.

  // Variants of `liftFoo1` for binary type constructors like `(,)` or `Either`.

  liftEquals2: equals1 => equals2 => x => y => (
    canon (x).liftEquals2 (equals1) (equals2) (x) (y)
  ),
  liftLte2: lte1 => lte2 => x => y => canon (x).liftLte2 (lte1) (lte2) (x) (y),
  liftConcat2: concat1 => concat2 => x => y => (
    canon (x).liftConcat2 (concat1) (concat2) (x) (y)
  ),
  liftShow2: show1 => show2 => x => canon (x).liftShow2 (show1) (show2) (x)

  // `liftCompose2` could be added in the future if anyone knows of a usecase.
};

export default Canon;
