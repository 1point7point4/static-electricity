/* # Extended Static Land Specification
 *
 * This specification describes a set of JavaScript interfaces and algebraic
 * laws extending on those set out in [the static-land specification](
 * https://github.com/fantasyland/static-land/blob/master/docs/spec.md#setoid).
 *
 * ## A note on type annotations
 *
 * Type annotations in this specification are represented with [haskell's type
 * system](http://www.learnyouahaskell.com/types-and-typeclasses). However, you
 * should be able to make sense of signatures even if you are unfamiliar with
 * the type system.
 *
 * ## Rehash of information stated in the original specification
 *
 * [If you've read this bit before, skip ahead to the table of contents](
 * #table-of-contents)
 *
 * ## Module
 * A module is a JavaScript object with some static functions and/or values,
 * "static" meaning they don't use `this`.
 * Here is an example:
 * ```js
 * const FooModule = {
 *   foo: 1,            // a value
 *   bar: (x) => x + 1, // a function
 * }
 * ```
 *
 * Note that this has nothing to do with JavaScript module systems like ES6
 * modules, in this specification a module is just an object.
 * ## Equivalence
 * An appropriate definition of equivalence for the given value should ensure
 * that the two values can be safely swapped out in a program that respects
 * abstractions.
 *
 * For example:
 *
 * * Two lists are equivalent if they are equivalent at all indices.
 * * Two plain old JavaScript objects, interpreted as dictionaries, are
 *   equivalent when they are equivalent for all keys.
 * * Two promises are equivalent when they yield equivalent values.
 * * Two functions are equivalent if they yield equivalent outputs for
 *   equivalent inputs.
 *
 * Note that these examples are not universal, in some cases different
 * definitions of equivalence for your types might be more appropriate.
 * It depends on which exact abstractions you choose to use in a program.
 *
 * We use `≡` symbol in laws to denote equivalence.
 * ## Parametricity
 *
 * All methods' implementations should only use type information about arguments
 * that is known from the signatures. It's not allowed to inspect arguments or
 * values that they produce or contain to get more information about their
 * types. In other words methods should be [parametrically polymorphic](
 * https://en.wikipedia.org/wiki/Parametric_polymorphism).
 *
 * ## Algebra
 *
 * An algebra is a set of requirements for modules, like matching some signature
 * or obeying some laws. If a module satisfies all requirements of an algebra,
 * it supports that algebra. An algebra may require to support other algebras.
 *
 * An algebra may also state other algebra methods which can be derived from new
 * methods. If a module provides a method which could be derived, its behaviour
 * must be equivalent to that of the derivation (or derivations).
 *
 * ## Table of Contents
 *
 * ### Metadata
 *
 * - [Named](#Named)
 *
 * ### Category Theory - General
 *
 * - [Setoid](#Setoid)
 * - [Ord](#Ord)
 * - [Semigroup](#Semigroup)
 * - [Monoid](#Monoid)
 * - [Group](#Group)
 *
 * ### Category Theory - Datastructures
 *
 * - [Semigroupoid](#Semigroupoid)
 * - [Category](#Category)
 * - [Filterable](#Filterable)
 * - [Functor](#Functor)
 * - [Bifunctor](#Bifunctor)
 * - [Contravariant](#Contravariant)
 * - [Profunctor](#Profunctor)
 * - [Apply](#Apply)
 * - [Applicative](#Applicative)
 * - [Alt](#Alt)
 * - [Plus](#Plus)
 * - [Alternative](#Alternative)
 * - [Chain](#Chain)
 * - [Monad](#Monad)
 * - [Foldable](#Foldable)
 * - [Unfoldable](#Unfoldable)
 * - [Extend](#Extend)
 * - [Comonad](#Comonad)
 * - [ComonadMaybe](#ComonadMaybe)
 * - [Traversable](#Traversable)
 * - [Enumerable](#Enumerable)
 *
 * ### Miscellaneous
 *
 * - [Show](#Show)
 * - [Ix](#Ix)
 * - [Hashable](#Hashable)
 * - [Forceable](#Forceable)
 *
 * ### Math - Arithmetic
 *
 * - [CommutativeSemigroup](#CommutativeSemigroup)
 * - [CommutativeMonoid](#CommutativeMonoid)
 * - [Additive](#Additive)
 * - [Ring](#Ring)
 * - [Absolute](#Absolute)
 * - [Field](#Field)
 * - [Algebraic](#Algebraic)
 * - [Differential](#Differential)
 * - [DivisibleSpace](#DivisibleSpace)
 * - [Indexable]
 * - [IntegralDomain]
 * - [ModuleOverRing]
 * - [ModuleBasis]
 * - [RealField]
 * - [Transcendental]
 * - [RealTranscendental]
 * - [ToInteger]
 * - [ToRational]
 *
 * ### General Math
 *
 * - [Measurement](#Measurement)
 * - [MeasurementConversion](#MeasurementConversion)
 * - [Fst](#Fst)
 * - [Snd](#Snd)
 *
 * ### Logic
 *
 * - [MinBound](#MinBound)
 * - [MaxBound](#MaxBound)
 * - [TopLattice](#TopLattice)
 * - [BottomLattice](#BottomLattice)
 * - [PartialOrd](#PartialOrd)
 *
 *
 * ### Lifted variants of standard algebras
 *
 * - [Eq1](#Eq1)
 * - [Ord1](#Ord1)
 * - [Semigroup1](#Semigroup1)
 * - [Filterable1](#Filterable1)
 * - [Functor1](#Functor1)
 * - [Show1](#Show1)
 * - [Eq2](#Eq2)
 * - [Ord2](#Ord2)
 * - [Semigroup2](#Semigroup2)
 * - [Show2](#Show2)
 *
 * ### Automatically derivable algebras (can be manually overridden for
 * performance)
 *
 * - [Length](#Length)
 */

const assert = require ("assert");

const forall = (f, values) => {
  if (typeof f !== "function") return f;

  for (let i = 0; i < values.length; i++) {
    if (forall (f (values[i]), values) === false) return false;
  }

  return true;
};

const assertForall = values => (f) => {
  assert (forall (f, values));
};

const followsLaws = S => (membersOfTypeModuleIsMadeFor) => {

  const sForall = assertForall (membersOfTypeModuleIsMadeFor);

  /* ## Named
   *
   * ```haskell
   * class Named a where
   *   name :: String
   * ```
   * All modules should have a `name` property, signifying the module's name. If
   * the module is canonical for a certain type, then the module is essentially
   * doubling as a type representative so it's extra good practice.
   */

  assert (typeof S.name === "string");

  /* ## Setoid
   *
   * ```haskell
   * class Setoid a where
   *   equals :: a -> a -> Boolean
   * ```
   *
   * Module for type `a` supporting Setoid must match the above constraint, and
   * obey following laws:
   */
  if (S.equals) {

    // 1. Reflexivity: `S.equals (a) (a) === true`
    sForall (a => S.equals (a) (a));

    // 2. Symmetry: `S.equals(a, b) === S.equals(b, a)`
    sForall (a => b => S.equals (a) (b) === Module.equals (b) (a));

    /* 3. Transitivity: if `S.equals(a, b)` and `S.equals(b, c)`, then
     * `S.equals(a, c)`
     */
    sForall (a => b => c => (
      (S.equals (a) (b) && S.equals (b) (c)) === S.equals (a) (c)
    ));

    /* ## Ord
     *
     * ```haskell
     * class (Setoid a) => Ord a where
     *   lte :: a -> a -> Boolean
     * ```
     *
     * Module for type `a` supporting `Ord` must match the above constraint, and
     * obey following laws:
     */
    if (S.lte) {

      // 1. Totality: `S.lte(a, b)` or `S.lte(b, a)`
      sForall (a => b => S.lte (a) (b) || S.lte (b) (a));

      /* 2. Antisymmetry: if `S.lte(a, b)` and `S.lte(b, a)`, then
       * `S.equals(a, b)`
       */
      sForall (a => b => S.lte (a) (b) && S.lte (b) (a) === S.equals (a) (b));

      // 3. Transitivity: if `S.lte(a, b)` and `S.lte(b, c)`, then `S.lte(a, c)`
      sForall (a => b => c => S.lte (a) (b) && S.lte (b) (c) <= S.lte (a) (c));
    }
  }

  /* ## Semigroup
   *
   * ```haskell
   * class Semigroup a where
   *   concat :: a -> a -> a
   * ```
   *
   * Module for type `a` supporting `Semigroup` must match the above constraint,
   * and obey following laws:
   */
  if (S.concat) {

    // <TODO>

    /* 1. Associativity:
     * `S.concat(S.concat(a, b), c) ≡ S.concat(a, S.concat(b, c))`
     */
    // sForall (
  }
};

module.exports = followsLaws;
