import MultiplicativeId from "./MultiplicativeId.js";

const supportId = ({multiplicativeId, multiply}) => {

  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const multiplicativeIdValue = multiplicativeId ();

  return x => (y) => {

    if (x === MultiplicativeId) {
      if (y === MultiplicativeId) return multiplicativeIdValue;
      return y;
    }
    if (y === MultiplicativeId) return x;

    return multiply (x) (y);
  };
};

export default supportMultiplicativeId;
