"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataConstructorResult = _interopRequireDefault(require("./_/dataConstructorResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeDataConstructor = options => {
  const {
    canonicalModule,
    type = (canonicalModule || {}).typeName,
    tag,
    contains
  } = options;

  if (typeof type !== "string") {
    throw Error("Expected `options.type` to be a string, or `options.canonicalModule.typeName` to be a string instead");
  }

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
    return (0, _dataConstructorResult.default)([], canonicalModule, type, tag, contains);
  }

  const dataConstructor_ = rest => last => {
    rest.push(last);

    if (contains.length === rest.length) {
      return (0, _dataConstructorResult.default)(rest, canonicalModule, type, tag, contains);
    }

    return dataConstructor_(rest.slice(0));
  };

  const dataConstructor = dataConstructor_([]);

  dataConstructor.toString = () => tag;

  return dataConstructor;
};

var _default = makeDataConstructor;
exports.default = _default;