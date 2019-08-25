"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CompositionId = _interopRequireDefault(require("./CompositionId.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const supportId = ({
  id,
  compose
}) => {
  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const idValue = id();
  return x => y => {
    if (x === _CompositionId.default) {
      if (y === _CompositionId.default) return idValue;
      return y;
    }

    if (y === _CompositionId.default) return x;
    return compose(x)(y);
  };
};

var _default = supportId;
exports.default = _default;