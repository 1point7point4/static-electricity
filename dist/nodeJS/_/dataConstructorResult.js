"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const dataConstructorResult = (dataConstructorArguments, canonicalModule, type, tag, propertyNames, constructor = null) => {
  const result = {
    get "static-land/canonical"() {
      return canonicalModule;
    },

    get type() {
      return type;
    },

    get tag() {
      return tag;
    },

    get dataConstructor() {
      /* Nullary constructors like `Nothing` are their own constructor.
       *
       * Non-nullary constructors like `Just` are not - they are the constructor
       * of the result of what they are applied to.
       */
      return constructor || result;
    }

  };

  for (let index = 0; index < dataConstructorArguments.length; index += 1) {
    result[propertyNames[index]] = dataConstructorArguments[index];
  }

  return result;
};

var _default = dataConstructorResult;
exports.default = _default;