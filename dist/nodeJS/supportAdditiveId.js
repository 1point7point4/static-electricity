"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AdditiveId = _interopRequireDefault(require("./AdditiveId.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const supportAdditiveId = ({
  additiveId,
  add
}) => {
  // See [NOTE: values of type `() -> a`] at "static-land/Canon.js".
  const additiveIdValue = additiveId();
  return x => y => {
    if (x === _AdditiveId.default) {
      if (y === _AdditiveId.default) return additiveIdValue;
      return y;
    }

    if (y === _AdditiveId.default) return x;
    return add(x)(y);
  };
};

var _default = supportAdditiveId;
exports.default = _default;