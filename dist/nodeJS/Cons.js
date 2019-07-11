"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _List = _interopRequireDefault(require("./static-land/List"));

var _makeDataConstructor = _interopRequireDefault(require("./makeDataConstructor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cons_ = (0, _makeDataConstructor.default)({
  canonicalModule: _List.default,
  tag: "Cons",
  contains: ["head", "tail"]
});

const Cons = head => tail => {
  if (tail.type !== "List") throw Error("Expected a value of type `List`");
  return Cons_(head)(tail);
};

var _default = Cons;
exports.default = _default;