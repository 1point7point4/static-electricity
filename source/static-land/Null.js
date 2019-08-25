/* A typeclass for the type containing only the value `null`. Similar to the
 * typeclass for Unit, but sometimes also supports other types with functions
 * that take more than one argument.
 */

// The Nullish module expects type <T> to be the type containing only `null`.

const Null = {
  typeName: "Null",

  eq: x => y => x === y,

  concat: _ => y => y,

  empty: () => null,

  invert: _ => null,

  compose: _ => y => y,

  id: () => null,

  /* We won't be implementing filter, map, etc. even though we could implement
   * them lawfully, because those are intended for containers
   */

  alt: _ => y => y,

  zero: () => null,

  toEnum: _ => 0,

  fromEnum (n) {
    if (n === 0) return null;
    throw Error (`Expected 0, got ${n}`);
  },

  show: _ => "null"
};

export default Null;
