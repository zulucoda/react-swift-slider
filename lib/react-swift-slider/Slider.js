'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Slide = _interopRequireDefault(require('./Slide'));

var _Control = _interopRequireWildcard(require('./Control'));

var _Dot = _interopRequireDefault(require('./Dot'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc =
            Object.defineProperty && Object.getOwnPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : {};
          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }
    newObj['default'] = obj;
    return newObj;
  }
}

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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  list-style: none;\n  margin: 1.7rem 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  @media (max-width: 600px) {\n    margin: 1rem 0;\n  }\n',
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  position: relative;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  height: ',
    'px;\n  @media (max-width: 600px) {\n    height: 250px;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  position: relative;\n  height: ',
    'px;\n  @media (max-width: 600px) {\n    height: 250px;\n  }\n',
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

var SwiftSliderContainer = _styledComponents['default'].div(
  _templateObject(),
  function(props) {
    return props.height || '450';
  },
);

var SwiftSliderSlides = _styledComponents['default'].ul(
  _templateObject2(),
  function(props) {
    return props.height || '450';
  },
);

var SwiftSliderDots = _styledComponents['default'].ul(_templateObject3());

var Slider =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Slider, _React$Component);

    function Slider() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Slider);

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Slider)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        currentSlide: 0,
      });

      _defineProperty(
        _assertThisInitialized(_this),
        'resetInterval',
        function() {
          clearInterval(_this.state.slideInterval);

          _this.setState({
            slideInterval: setInterval(_this.nextSlide, _this.props.interval),
          });
        },
      );

      _defineProperty(_assertThisInitialized(_this), 'nextSlide', function() {
        if (_this.state.currentSlide === _this.props.data.length - 1) {
          _this.setState({
            currentSlide: 0,
          });

          return;
        }

        _this.setState({
          currentSlide: _this.state.currentSlide + 1,
        });

        _this.resetInterval();
      });

      _defineProperty(_assertThisInitialized(_this), 'prevSlide', function() {
        if (_this.state.currentSlide === 0) {
          _this.setState({
            currentSlide: _this.props.data.length - 1,
          });

          return;
        }

        _this.setState({
          currentSlide: _this.state.currentSlide - 1,
        });

        _this.resetInterval();
      });

      _defineProperty(_assertThisInitialized(_this), 'goToSlide', function(
        idx,
      ) {
        _this.setState({
          currentSlide: idx,
        });

        _this.resetInterval();
      });

      return _this;
    }

    _createClass(Slider, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.setState({
            slideInterval: setInterval(this.nextSlide, this.props.interval),
          });
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            data = _this$props.data,
            height = _this$props.height,
            activeDotColor = _this$props.activeDotColor,
            dotColor = _this$props.dotColor,
            showDots = _this$props.showDots,
            enableNextAndPrev = _this$props.enableNextAndPrev;
          return _react['default'].createElement(
            SwiftSliderContainer,
            null,
            _react['default'].createElement(
              SwiftSliderSlides,
              {
                height: height,
              },
              data.map(function(item, i) {
                return _react['default'].createElement(_Slide['default'], {
                  active: i === _this2.state.currentSlide,
                  src: item.src,
                  key: item.id,
                });
              }),
            ),
            showDots
              ? _react['default'].createElement(
                  SwiftSliderDots,
                  null,
                  data.map(function(item, i) {
                    return _react['default'].createElement(_Dot['default'], {
                      activeDotColor: activeDotColor,
                      dotColor: dotColor,
                      key: i,
                      active: i === _this2.state.currentSlide,
                      onClick: _this2.goToSlide,
                      idx: i,
                    });
                  }),
                )
              : '',
            enableNextAndPrev
              ? _react['default'].createElement(_Control['default'], {
                  onPressPrev: this.prevSlide,
                  direction: _Control.DIRECTION.prev,
                })
              : '',
            enableNextAndPrev
              ? _react['default'].createElement(_Control['default'], {
                  onPressNext: this.nextSlide,
                  direction: _Control.DIRECTION.next,
                })
              : '',
          );
        },
      },
    ]);

    return Slider;
  })(_react['default'].Component);

exports['default'] = Slider;

_defineProperty(Slider, 'defaultProps', {
  data: [],
  height: 450,
  activeDotColor: '#e8784e',
  interval: 5000,
  dotColor: '#909192',
  showDots: true,
  enableNextAndPrev: true,
});

Slider.propTypes = {
  data: _propTypes['default'].array.isRequired,
  height: _propTypes['default'].number,
  interval: _propTypes['default'].number,
  activeDotColor: _propTypes['default'].string,
  dotColor: _propTypes['default'].string,
  showDots: _propTypes['default'].bool,
  enableNextAndPrev: _propTypes['default'].bool,
};
