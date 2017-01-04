'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = {
  'container__prev': 'styles__container__prev___3sMDE',
  'container__next': 'styles__container__next___cyGe4',
  'prev': 'styles__prev___34nH8',
  'next': 'styles__next___19Pfz'
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var onPressNext = _ref.onPressNext,
      onPressPrev = _ref.onPressPrev,
      direction = _ref.direction;

  if (direction === 'prev') {
    return _react2.default.createElement('div', { className: _styles2.default.container__prev, onClick: onPressPrev });
  }
  if (direction === 'next') {
    return _react2.default.createElement('div', { className: _styles2.default.container__next, onClick: onPressNext });
  }
};

exports.default = Control;