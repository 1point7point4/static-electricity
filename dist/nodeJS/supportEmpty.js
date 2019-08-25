"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Empty = _interopRequireDefault(require("./Empty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const supportEmpty = ({
  empty,
  concat
}) => {
  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js"
  const emptyValue = empty();
  return x => y => {
    if (x === _Empty.default) {
      if (y === _Empty.default) return emptyValue;
      return y;
    }

    if (y === _Empty.default) return x;
    return concat(x)(y);
  };
};

var _default = supportEmpty;
exports.default = _default;