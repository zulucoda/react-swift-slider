'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = Dot;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 20px;\n  margin: 0 1rem;\n  cursor: pointer;\n  background: ',
    ';\n',
  ]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var SwiftSliderDot = _styledComponents['default'].li(
  _templateObject(),
  function(props) {
    return props.background;
  },
);

function Dot(_ref) {
  var active = _ref.active,
    _onClick = _ref.onClick,
    idx = _ref.idx,
    activeDotColor = _ref.activeDotColor,
    dotColor = _ref.dotColor;
  return _react['default'].createElement(SwiftSliderDot, {
    onClick: function onClick() {
      return _onClick(idx);
    },
    background: active ? activeDotColor : dotColor,
  });
}
