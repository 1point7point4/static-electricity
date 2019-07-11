"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// This is an internal function so it's relatively okay to have it uncurried
const dataConstructorResult = (dataConstructorArguments, canon, tag, propNames) => {
  const result = {
    get "static-land/canonical"() {
      return canon;
    },

    get tag() {
      return tag;
    }

  };

  for (let i = 0; i < dataConstructorArguments.length; i += 1) {
    result[propNames[i]] = dataConstructorArguments[i];
  }

  return result;
};

const makeDataConstructor = options => {
  const {
    canonicalModule,
    tag,
    contains
  } = options;

  if (typeof tag !== "string") {
    throw Error("Expected `options.tag` to be a string");
  }

  if (contains.constructor !== Array) {
    throw Error("Expected `options.contains` to be an array");
  }

  if (contains.indexOf("tag") !== -1 || contains.indexOf("static-land/canonical") !== -1) {
    throw Error("`options.contains` cannot have properties named \"tag\" or \"static-land/canonical\"");
  }

  if (contains.length === 0) {
    return dataConstructorResult([], canonicalModule, tag, contains);
  }

  const dataConstructor_ = rest => last => {
    rest.push(last);

    if (contains.length === rest.length) {
      return dataConstructorResult(rest, canonicalModule, tag, contains);
    }

    return dataConstructor_(rest.slice(0));
  };

  const dataConstructor = dataConstructor_([]);

  dataConstructor.toString = () => tag;

  return dataConstructor_([]);
};

var _default = makeDataConstructor;
exports.default = _default;