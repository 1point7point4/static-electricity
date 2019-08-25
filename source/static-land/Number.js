const Number = {
  typeName: "Number",

  /* We're technically ignoring the intuition behind equality since
   * `Number.equals (-0) (0)` but that's okay because we would throw people off
   * if we treated them as not equal.
   * There's also precedent in Haskell to treat `-0` and `0` as equal.
   */
  equals: x => y => x === y,

  /* There are specific checks for x being `-Infinity/Infinity` because those
   * values mean "lower/upper bound" even when the second argument is not a
   *
   */
  lte: x => y => x === Infinity ? Canon.equals (y) (canon (y).upperBound) :
    x === -Infinity ? true :
    x <= y,

  // TODO
};

export default Number;
