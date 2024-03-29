"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Maybe = _interopRequireDefault(require("./static-land/Maybe"));

var _makeDataConstructor = _interopRequireDefault(require("./makeDataConstructor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Nothing = (0, _makeDataConstructor.default)({
  canonicalModule: _Maybe.default,
  tag: "Nothing",
  contains: []
});
var _default = Nothing;
exports.default = _default;