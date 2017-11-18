"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./assets/sass/react-swift-dot.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dot = function Dot(_ref) {
  var active = _ref.active,
      _onClick = _ref.onClick,
      idx = _ref.idx,
      activeDotColor = _ref.activeDotColor,
      dotColor = _ref.dotColor;

  return _react2.default.createElement("li", {
    onClick: function onClick() {
      return _onClick(idx);
    },
    style: { background: active ? activeDotColor : dotColor },
    className: "dot"
  });
};
exports.default = Dot;