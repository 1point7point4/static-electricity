const canon = "static-land/canonical";

const canonAndHas = k => x => x != null && x[canon] && x[canon][k];

const sameType = x => y => x != null && y != null && x.type === y.type

const error = (err) => _ => {
  throw err;
};

const notSameType = fName => (
  error (`${fName}'s arguments should have the same type`)
);

const notInstance = algebraName => (
  error (`Expected an instance of ${algebraName}`);
);

const binaryPred = k => diffTypesFallback => nonCanonFallback => x => (y) => {
  if (canonAndHas (k) (x)) {

    /* NOTE [Check for type equality]
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * If we didn't check for type equality, we could end up with two values
     * that have the same tag (i.e. `Pure`), but different types (i.e. `Roll`
     * and `NonEmpty`)
     */
    if (sameType (x) (y)) return x[canon][k] (x) (y);
    return diffTypesFallback (x) (y);
  }

  return nonCanonFallback (x) (y);
};

const liftBinaryPred1 = k
                  => diffTypesFallback
                  => nonCanonFallback
                  => f
                  => x
                  => (y)
                  => {
  if (typeof f !== "function") throw Error ("Expected a function");

  // See NOTE [Check for type equality]
  if (canonAndHas ("liftEquals1") (x)) {

    if (sameType (x) (y)) return x[canon].liftEquals1 (f) (x) (y);

    return diffTypesFallback (x) (y);
  }

  return nonCanonFallback (x) (y);
}

const Canon = {

  equals: binaryPred ("equals") (_ => _ => false) (x => y => x === y),

  liftEquals1: liftBinaryPred1 (
    "liftEquals1"
  ) (
    _ => _ => _ => false
  ) (
    _ => x => y => x === y
  ),

  lte: binaryPred (
    "lte"
  ) (
    notSameType ("Canon.lte")
  ) (
    notInstance ("Ord")
  ),

  liftLte1: liftBinaryPred1 (
    "liftLte1"
  ) (
    notSameType ("Canon.liftLte1 (f)")
  ) (
    notInstance ("Ord1")
  )
};

export default Canon;
