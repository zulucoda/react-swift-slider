"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var React = _interopRequireWildcard(_react);

require("./assets/sass/react-swift-slider.css");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slide = require("./Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _Control = require("./Control");

var _Control2 = _interopRequireDefault(_Control);

var _Dot = require("./Dot");

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentSlide: 0
    }, _this.resetInterval = function () {
      clearInterval(_this.state.slideInterval);
      _this.setState({
        slideInterval: setInterval(_this.nextSlide, _this.props.interval)
      });
    }, _this.nextSlide = function () {
      if (_this.state.currentSlide === _this.props.data.length - 1) {
        _this.setState({
          currentSlide: 0
        });
        return;
      }
      _this.setState({
        currentSlide: _this.state.currentSlide + 1
      });
      _this.resetInterval();
    }, _this.prevSlide = function () {
      if (_this.state.currentSlide === 0) {
        _this.setState({
          currentSlide: _this.props.data.length - 1
        });
        return;
      }
      _this.setState({
        currentSlide: _this.state.currentSlide - 1
      });
      _this.resetInterval();
    }, _this.goToSlide = function (idx) {
      _this.setState({
        currentSlide: idx
      });
      _this.resetInterval();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        slideInterval: setInterval(this.nextSlide, this.props.interval)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          data = _props.data,
          height = _props.height,
          activeDotColor = _props.activeDotColor,
          dotColor = _props.dotColor,
          showDots = _props.showDots,
          enableNextAndPrev = _props.enableNextAndPrev;

      return React.createElement(
        "div",
        { className: "swift-slider-container" },
        React.createElement(
          "ul",
          { className: "swift-slider-slides", style: { height: height } },
          data.map(function (item, i) {
            return React.createElement(_Slide2.default, {
              active: i === _this2.state.currentSlide,
              src: item.src,
              key: item.id
            });
          })
        ),
        showDots ? React.createElement(
          "ul",
          { className: "swift-slider-dots" },
          data.map(function (item, i) {
            return React.createElement(_Dot2.default, {
              activeDotColor: activeDotColor,
              dotColor: dotColor,
              key: i,
              active: i === _this2.state.currentSlide,
              onClick: _this2.goToSlide,
              idx: i
            });
          })
        ) : "",
        enableNextAndPrev ? React.createElement(_Control2.default, { onPressPrev: this.prevSlide, direction: _Control.DIRECTION.prev }) : "",
        enableNextAndPrev ? React.createElement(_Control2.default, { onPressNext: this.nextSlide, direction: _Control.DIRECTION.next }) : ""
      );
    }
  }]);

  return Slider;
}(React.Component);

Slider.defaultProps = {
  data: [],
  height: 450,
  activeDotColor: "#e8784e",
  interval: 5000,
  dotColor: "#909192",
  showDots: true,
  enableNextAndPrev: true
};
exports.default = Slider;


Slider.propTypes = {
  data: _propTypes2.default.array.isRequired,
  height: _propTypes2.default.number,
  interval: _propTypes2.default.number,
  activeDotColor: _propTypes2.default.string,
  dotColor: _propTypes2.default.string,
  showDots: _propTypes2.default.bool,
  enableNextAndPrev: _propTypes2.default.bool
};