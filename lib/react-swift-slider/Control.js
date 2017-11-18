'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./assets/sass/react-swift-control.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var onPressNext = _ref.onPressNext,
      onPressPrev = _ref.onPressPrev,
      direction = _ref.direction;

  if (direction === 'prev') {
    return _react2.default.createElement('div', { className: 'prev', onClick: onPressPrev });
  }
  if (direction === 'next') {
    return _react2.default.createElement('div', { className: 'next', onClick: onPressNext });
  }
};

exports.default = Control;