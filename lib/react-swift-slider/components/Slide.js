'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = Slide;

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireWildcard(require('styled-components'));

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

function _templateObject3() {
  var data = _taggedTemplateLiteral([
    '\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: ',
    ';\n  visibility: ',
    ';\n  transition: visibility 0.3s;\n  animation: ',
    " 0.8s;\n  background-image: url('",
    "');\n  will-change: opacity;\n  will-change: visibility;\n  will-change: z-index;\n",
  ]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([
    '\n  from {\n    opacity: 1;\n  }\n  \n  to {\n    opacity: 0;\n  }\n',
  ]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n  from {\n    opacity: 0;\n  }\n  \n  to {\n    opacity: 1;\n  }\n',
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

var fadeIn = (0, _styledComponents.keyframes)(_templateObject());
var fadeOut = (0, _styledComponents.keyframes)(_templateObject2());

var SwiftSliderSlide = _styledComponents['default'].li(
  _templateObject3(),
  function(props) {
    return props.active ? '2' : '0';
  },
  function(props) {
    return props.active ? 'visible' : 'hidden';
  },
  function(props) {
    return props.active ? fadeIn : fadeOut;
  },
  function(props) {
    return props.backgroundImage;
  },
);

function Slide(_ref) {
  var src = _ref.src,
    active = _ref.active;
  return _react['default'].createElement(SwiftSliderSlide, {
    backgroundImage: src,
    active: active,
  });
}
