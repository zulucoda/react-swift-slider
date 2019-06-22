'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _Slide = _interopRequireDefault(require('./Slide'));

var _Control = _interopRequireWildcard(require('./Control'));

var _Dot = _interopRequireDefault(require('./Dot'));

var _useInterval = require('../hooks/use-interval');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError('Invalid attempt to destructure non-iterable instance');
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function Slider(_ref) {
  var data = _ref.data,
    height = _ref.height,
    activeDotColor = _ref.activeDotColor,
    interval = _ref.interval,
    dotColor = _ref.dotColor,
    showDots = _ref.showDots,
    enableNextAndPrev = _ref.enableNextAndPrev;

  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentSlide = _useState2[0],
    setCurrentSlide = _useState2[1];

  var _useState3 = (0, _react.useState)(interval),
    _useState4 = _slicedToArray(_useState3, 2),
    currentInterval = _useState4[0],
    setCurrentInterval = _useState4[1];

  (0, _useInterval.useInterval)(function() {
    nextSlide();
  }, currentInterval);
  (0, _react.useEffect)(
    function() {
      data.forEach(function(img) {
        var image = new Image();
        image.src = img.src;
      });
    },
    [data],
  );

  var nextSlide = function nextSlide() {
    if (currentSlide === data.length - 1) {
      return setCurrentSlide(0);
    }

    setCurrentSlide(currentSlide + 1);
  };

  var prevSlide = function prevSlide() {
    if (currentSlide === 0) {
      return setCurrentSlide(data.length - 1);
    }

    setCurrentSlide(currentSlide - 1);
    setCurrentInterval(currentInterval + 1);
  };

  var goToSlide = function goToSlide(idx) {
    setCurrentSlide(idx);
    setCurrentInterval(currentInterval - 1);
  };

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
          active: i === currentSlide,
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
              active: i === currentSlide,
              onClick: goToSlide,
              idx: i,
            });
          }),
        )
      : '',
    enableNextAndPrev
      ? _react['default'].createElement(_Control['default'], {
          onPressPrev: prevSlide,
          direction: _Control.DIRECTION.prev,
        })
      : '',
    enableNextAndPrev
      ? _react['default'].createElement(_Control['default'], {
          onPressNext: nextSlide,
          direction: _Control.DIRECTION.next,
        })
      : '',
  );
}

Slider.propTypes = {
  data: _propTypes['default'].array.isRequired,
  height: _propTypes['default'].number,
  interval: _propTypes['default'].number,
  activeDotColor: _propTypes['default'].string,
  dotColor: _propTypes['default'].string,
  showDots: _propTypes['default'].bool,
  enableNextAndPrev: _propTypes['default'].bool,
};
Slider.defaultProps = {
  data: [],
  height: 450,
  activeDotColor: '#e8784e',
  interval: 5000,
  dotColor: '#909192',
  showDots: true,
  enableNextAndPrev: true,
};
var _default = Slider;
exports['default'] = _default;
