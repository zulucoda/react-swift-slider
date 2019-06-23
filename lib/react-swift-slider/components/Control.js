'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = Control;
exports.DIRECTION = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  right: 0;\n  &:hover {\n    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));\n  }\n',
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  left: 0;\n  &:hover {\n    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  z-index: 10;\n  padding: 0 2rem;\n  width: 30%;\n  height: ',
    'px;\n  cursor: pointer;\n  align-items: center;\n',
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

var DIRECTION = {
  prev: 'prev',
  next: 'next',
};
exports.DIRECTION = DIRECTION;

var SwiftSliderControlBase = _styledComponents['default'].div(
  _templateObject(),
  function(props) {
    return props.height;
  },
);

var SwiftSliderControlPrev = (0, _styledComponents['default'])(
  SwiftSliderControlBase,
)(_templateObject2());
var SwiftSliderControlNext = (0, _styledComponents['default'])(
  SwiftSliderControlBase,
)(_templateObject3());

function Control(_ref) {
  var onPressNext = _ref.onPressNext,
    onPressPrev = _ref.onPressPrev,
    direction = _ref.direction,
    height = _ref.height;
  return direction === DIRECTION.prev
    ? _react['default'].createElement(SwiftSliderControlPrev, {
        onClick: onPressPrev,
        height: height,
      })
    : _react['default'].createElement(SwiftSliderControlNext, {
        onClick: onPressNext,
        height: height,
      });
}
