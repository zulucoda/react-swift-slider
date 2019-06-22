'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.DIRECTION = void 0;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  right: 0;\n  align-items: center;\n  background: linear-gradient(to right, transparent, rgba(0,0,0,0.5));\n',
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  left: 0;\n  align-items: enter;\n  background: linear-gradient(to right, rgba(0,0,0,0.5) , transparent);\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n    top:0;\n    bottom:0;\n    display: flex;\n    justify-content: center;\n    z-index: 10;\n    padding: 0 2rem;\n    width: 30%;\n    cursor: pointer;\n',
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
);

var SwiftSliderControlPrev = (0, _styledComponents['default'])(
  SwiftSliderControlBase,
)(_templateObject2());
var SwiftSliderControlNext = (0, _styledComponents['default'])(
  SwiftSliderControlBase,
)(_templateObject3());

var Control =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Control, _React$Component);

    function Control() {
      _classCallCheck(this, Control);

      return _possibleConstructorReturn(
        this,
        _getPrototypeOf(Control).apply(this, arguments),
      );
    }

    _createClass(Control, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            onPressNext = _this$props.onPressNext,
            onPressPrev = _this$props.onPressPrev,
            direction = _this$props.direction;

          if (direction === DIRECTION.prev) {
            return _react['default'].createElement(SwiftSliderControlPrev, {
              onClick: onPressPrev,
            });
          } else {
            return _react['default'].createElement(SwiftSliderControlNext, {
              onClick: onPressNext,
            });
          }
        },
      },
    ]);

    return Control;
  })(_react['default'].Component);

exports['default'] = Control;
