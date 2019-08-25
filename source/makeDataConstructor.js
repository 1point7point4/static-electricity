import dataConstructorResult from "./_/dataConstructorResult";

const makeDataConstructor = (options) => {
  const {
    canonicalModule,
    type = (canonicalModule || {}).typeName,
    tag,
    contains
  } = options;

  if (typeof type !== "string") {
    throw Error (
      "Expected `options.type` to be a string, or `options.canonicalModule.typeName` to be a string instead"
    );
  }

  if (typeof tag !== "string") {
    throw Error ("Expected `options.tag` to be a string");
  }

  if (contains.constructor !== Array) {
    throw Error ("Expected `options.contains` to be an array");
  }

  if (
    contains.indexOf ("tag") !== -1 ||
    contains.indexOf ("static-land/canonical") !== -1
  ) {
    throw Error (
      "`options.contains` cannot have properties named \"tag\" or \"static-land/canonical\""
    )
  }

  if (contains.length === 0) {
    return dataConstructorResult ([], canonicalModule, type, tag, contains);
  }

  const dataConstructor_ = rest => last => {
    rest.push (last);

    // If all arguments have been supplied, return the result.
    if (contains.length === rest.length) {
      return dataConstructorResult (
        rest,
        canonicalModule,
        type,
        tag,
        contains,
        dataConstructor
      );
    }

    // Otherwise, return a partially applied function.
    return dataConstructor_ (rest.slice (0));
  }

  const dataConstructor = dataConstructor_ ([]);
  dataConstructor.toString = () => tag;

  return dataConstructor;
};

export default makeDataConstructor;
