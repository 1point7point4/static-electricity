"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MultiplicativeId = _interopRequireDefault(require("./MultiplicativeId.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const supportMultiplicativeId = ({
  multiplicativeId,
  multiply
}) => {
  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const multiplicativeIdValue = multiplicativeId();
  return x => y => {
    if (x === _MultiplicativeId.default) {
      if (y === _MultiplicativeId.default) return multiplicativeIdValue;
      return y;
    }

    if (y === _MultiplicativeId.default) return x;
    return multiply(x)(y);
  };
};

var _default = supportMultiplicativeId;
exports.default = _default;