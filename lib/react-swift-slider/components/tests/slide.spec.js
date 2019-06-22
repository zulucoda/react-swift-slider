'use strict';

var _react = _interopRequireDefault(require('react'));

var _enzyme = require('enzyme');

var _Slide = _interopRequireDefault(require('../Slide'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/07/27.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
describe('React Swift Slider: Slide - Unit Test', function() {
  describe('when active', function() {
    it('should include ".swift-slider-active" class name', function() {
      var props = {
        active: true,
        src: 'some src url',
      };
      var wrapper = (0, _enzyme.shallow)(
        _react['default'].createElement(_Slide['default'], {
          src: props.src,
          active: props.active,
        }),
      );
      expect(wrapper.find('.swift-slider-active').length).toEqual(1);
    });
  });
  describe('when NOT active', function() {
    it('should NOT include ".swift-slider-active" class name', function() {
      var props = {
        active: false,
        src: 'some src url',
      };
      var wrapper = (0, _enzyme.shallow)(
        _react['default'].createElement(_Slide['default'], {
          src: props.src,
          active: props.active,
        }),
      );
      expect(wrapper.find('li').length).toEqual(1);
      expect(wrapper.find('li').getElement().props.className).toEqual(
        'swift-slider-slide',
      );
    });
  });
});
