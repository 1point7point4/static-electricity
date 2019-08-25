"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Null = _interopRequireDefault(require("./static-land/Null"));

var _Number = _interopRequireDefault(require("./static-land/Number"));

var _Boolean = _interopRequireDefault(require("./static-land/Boolean"));

var _String = _interopRequireDefault(require("./static-land/String"));

var _Symbol = _interopRequireDefault(require("./static-land/Symbol"));

var _Function = _interopRequireDefault(require("./static-land/Function"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const typeofTable = {
  undefined: {
    typeName: "Undefined",
    eq: x => y => x === y,
    show: _ => "undefined"
  },
  number: _Number.default,
  boolean: _Boolean.default,
  string: _String.default,
  symbol: _Symbol.default,
  function: _Function.default
};

const canon = x => {
  if (x === null) return _Null.default;

  if (typeof x["static-land/canonical"] === "function") {
    return x["static-land/canonical"];
  }

  if (typeofTable.hasOwnProperty(typeof x)) return typeofTable[x]; // TODO: Support other builtin types.like `Array`.

  throw Error(`${x} does not have a valid canonical module`);
};

var _default = canon;
exports.default = _default;