"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Either = _interopRequireDefault(require("./static-land/Either"));

var _makeDataConstructor = _interopRequireDefault(require("./makeDataConstructor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _makeDataConstructor.default)({
  canonicalModule: _Either.default,
  tag: "Right",
  contains: ["value"]
});

exports.default = _default;