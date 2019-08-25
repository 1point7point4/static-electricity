"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canon = _interopRequireDefault(require("../canon"));

var _Empty = _interopRequireDefault(require("../Empty"));

var _CompositionId = _interopRequireDefault(require("../CompositionId"));

var _AdditiveId = _interopRequireDefault(require("../AdditiveId"));

var _MultiplicativeId = _interopRequireDefault(require("../MultiplicativeId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  equals: x => y => (0, _canon.default)(x).equals(x)(y),
  // Should be read here as `x less than or equal to y`.
  lte: x => y => (0, _canon.default)(x).lte(x)(y),
  concat: x => y => (0, _canon.default)(x).concat(x)(y),
  // See [NOTE: values of type `() -> a`].
  empty: () => _Empty.default,
  // We /can/ have `invert` though! ^^
  invert: x => (0, _canon.default)(x).invert(x),
  compose: x => y => (0, _canon.default)(x).compose(x)(y),
  // See [NOTE: values of type `() -> a`].
  id: () => _CompositionId.default,
  filter: predicate => x => (0, _canon.default)(x).filter(predicate)(x),
  // Just run-of-the-mill static-land stuff.
  map: f => x => (0, _canon.default)(x).map(f)(x),
  bimap: f => g => x => (0, _canon.default)(x).bimap(f)(g)(x),

  /* `map` is like left-to-right composition and `contramap` is like
   * right-to-left composition
   */
  contramap: f => x => (0, _canon.default)(x).contramap(f)(x),
  // `promap` is to `bimap` as `contramap` is to `map`.
  promap: f => g => x => (0, _canon.default)(x).promap(f)(g)(x),
  ap: af => ax => (0, _canon.default)(ax).ap(af)(ax),

  /* We can't make this work as well as we should because we can't guess the
   * type that `pure` should be.
   */
  of: x => ({
    value: x,

    get "static-land/canonical"() {
      throw Error("`Canon.of (${x})` is of unknown type - this is a placeholder value that allows some use cases to work anyway.");
    },

    get constructor() {
      throw Error("`Canon.of (${x})` is of unknown type - this is a placeholder value that allows some use cases to work anyway.");
    }

  }),
  alt: x => y => (0, _canon.default)(x).alt(x)(y),
  // See [NOTE: values of type `() -> a`].
  zero: () => Zero,
  // `chain` is scala's `flatMap`.
  chain: f => x => (0, _canon.default)(x).chain(f)(x),

  /* In some cases, `chain` would result in excessive stack usage. That's where
   * `chainRec` comes in.
   */
  chainRec: f => x => (0, _canon.default)(x).chainRec(f)(x),
  reduce: f => accumulator => x => (0, _canon.default)(x).reduce(f)(accumulator)(x),

  /* `length` only exists for performance reasons - it can be derived as
   * `Foo.reduce (_ => accumulator => accumulator + 1) (0)` and all modules with
   * `length` must also have `reduce`.
   */
  length: x => (0, _canon.default)(x).length(f)(accumulator)(x),
  unReduce: f => accumulator => x => (0, _canon.default)(x).unReduce(f)(accumulator)(x),
  // Extending is sort of like "un`chain`ing".
  extend: f => x => (0, _canon.default)(x).extend(f)(x),
  // Extracting is sort of like "un`pure`ing".
  extract: x => (0, _canon.default)(x).extract(x),
  // Examples include `safeHead` and `Maybe.map (id)`.
  extractMaybe: x => (0, _canon.default)(x).extractMaybe,
  traverse: Module => f => x => (0, _canon.default)(x).traverse(Module)(f)(x),
  toEnum: x => (0, _canon.default)(x).toEnum(x),
  fromEnum: x => (0, _canon.default)(x).fromEnum(x),
  // See [NOTE: values of type `() -> a`].
  minBound: () => MinBound,
  maxBound: () => MaxBound,
  show: x => (0, _canon.default)(x).show(x),
  // TODO: decide what type to use to represent ranges.
  // Think `[lower..upper]`.
  range: lower => upper => (0, _canon.default)(lower).range(lower)(upper),
  // Look up what this means cause I forgot.
  index: lower => upper => x => (0, _canon.default)(x).index(lower)(upper)(x),

  /* "Is `x` between `lower` and `upper`?"
   * Note that it's not dependent on Ord because it should also work for partial
   * orderings.
   */
  inRange: lower => upper => x => (0, _canon.default)(x).inRange(lower)(upper)(x),
  // A salt is a number that should alter the resulting hash or something???
  hashWithSalt: salt => x => (0, _canon.default)(x).hashWithSalt(salt)(x),
  // See [NOTE: values of type `() -> a`].
  additiveId: () => _AdditiveId.default,
  additiveInverse: x => (0, _canon.default)(x).additiveInverse(x),
  add: x => y => (0, _canon.default)(x).add(x)(y),
  // See [NOTE: values of type `() -> a`].
  multiplicativeId: () => _MultiplicativeId.default,
  multiplicativeInverse: x => (0, _canon.default)(x).multiplicativeInverse(x),
  multiply: x => y => (0, _canon.default)(x).add(x)(y),
  not: x => (0, _canon.default)(x).not(x),
  // See [NOTE: values of type `() -> a`].
  conjunctiveId: () => ConjunctiveId,
  and: x => y => (0, _canon.default)(x).and(x)(y),

  /* `or` can be derived using `and`/`not` but some types (i.e. `Set`) do not
   * have a very practical-to-implement `not`. In addition, using a direct
   * implementation of `or` will improve performance over using the derived
   * version (`x => y => not (and (not (x)) (not (y)))`)
   */
  // See [NOTE: values of type `() -> a`].
  disjunctiveId: () => DisjunctiveId,
  or: x => y => (0, _canon.default)(x).or(x)(y),

  /* Similar to `lte`, read as "x subset of y".
   * In a way, subset is like `lt` but for partial orderings instead.
   */
  subset: x => y => (0, _canon.default)(x).superset(x)(y),
  fst: x => (0, _canon.default)(x).fst(x),
  snd: x => (0, _canon.default)(x).snd(x),
  // To be used on lazy data structures to force a strict interpretation.
  force: x => (0, _canon.default)(x).force(x),
  // Lifted versions are very useful when you need to use a custom instance.
  liftEquals1: equals => x => y => (0, _canon.default)(x).liftEquals1(equals)(x)(y),
  liftLte1: lte => x => y => (0, _canon.default)(x).liftLte1(lte)(x)(y),
  liftConcat1: concat => x => y => (0, _canon.default)(x).liftConcat1(concat)(x)(y),
  liftFilter1: filter => p => x => (0, _canon.default)(x).liftFilter1(filter)(p)(x),

  /* You might have a monad like `Free` where you can have multiple layers of
   * functors.
   */
  liftMap1: map => f => x => (0, _canon.default)(x).liftMap1(map)(f)(x),
  liftShow1: show => x => (0, _canon.default)(x).liftShow1(show)(x),
  // There are a few other lifted typeclasses that might be useful to implement.
  // Variants of `liftFoo1` for binary type constructors like `(,)` or `Either`.
  liftEquals2: equals1 => equals2 => x => y => (0, _canon.default)(x).liftEquals2(equals1)(equals2)(x)(y),
  liftLte2: lte1 => lte2 => x => y => (0, _canon.default)(x).liftLte2(lte1)(lte2)(x)(y),
  liftConcat2: concat1 => concat2 => x => y => (0, _canon.default)(x).liftConcat2(concat1)(concat2)(x)(y),
  liftShow2: show1 => show2 => x => (0, _canon.default)(x).liftShow2(show1)(show2)(x) // `liftCompose2` could be added in the future if anyone knows of a usecase.

};
var _default = Canon;
exports.default = _default;