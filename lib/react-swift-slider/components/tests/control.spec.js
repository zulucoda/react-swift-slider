'use strict';

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _Control = _interopRequireWildcard(require('../Control'));

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

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('Control - Unit Test', function() {
  describe('previous', function() {
    it('should render previous div with previous on click function', function() {
      var onPressPrev = jest.fn();
      var wrapper = (0, _enzyme.shallow)(
        _react['default'].createElement(_Control['default'], {
          direction: _Control.DIRECTION.prev,
          onPressPrev: onPressPrev,
        }),
      );
      expect(
        wrapper.contains(
          _react['default'].createElement('div', {
            className: 'swift-slider-prev',
            onClick: onPressPrev,
          }),
        ),
      ).toBeTruthy();
    });
  });
  describe('next', function() {
    it('should render next div with next on click function', function() {
      var onNextPrev = jest.fn();
      var wrapper = (0, _enzyme.shallow)(
        _react['default'].createElement(_Control['default'], {
          direction: _Control.DIRECTION.next,
          onPressNext: onNextPrev,
        }),
      );
      expect(
        wrapper.contains(
          _react['default'].createElement('div', {
            className: 'swift-slider-next',
            onClick: onNextPrev,
          }),
        ),
      ).toBeTruthy();
    });
  });
});
