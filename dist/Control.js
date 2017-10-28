'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Control = function Control(_ref) {
  var onPressNext = _ref.onPressNext,
      onPressPrev = _ref.onPressPrev,
      direction = _ref.direction;

  if (direction === 'prev') {
    return _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.prev), onClick: onPressPrev });
  }
  if (direction === 'next') {
    return _react2.default.createElement('div', { className: (0, _aphrodite.css)(styles.next), onClick: onPressNext });
  }
};

var styles = _aphrodite.StyleSheet.create({
  prev: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    background: 'linear-gradient(to right, rgba(0,0,0,0.5) , transparent)',
    padding: '0 2rem',
    width: '30%',
    cursor: 'pointer'
  },
  next: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.5))',
    padding: '0 2rem',
    width: '30%',
    cursor: 'pointer'
  }
});

exports.default = Control;