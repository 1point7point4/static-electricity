"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _canon = _interopRequireDefault(require("../canon"));

var _match = _interopRequireDefault(require("../match2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Either = {
  typeName: "Either",
  equals: (0, _match.default)({
    Left_Left: ({
      value: x
    }) => ({
      value: y
    }) => (0, _canon.default)(x).equals(x)(y),
    Right_Right: ({
      value: x
    }) => ({
      value: y
    }) => (0, _canon.default)(x).equals(x)(y),
    _: _ => _ => false
  })
};
var _default = Either;
exports.default = _default;