'use strict';

var _react = _interopRequireDefault(require('react'));

var _react2 = require('@testing-library/react');

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
  afterEach(_react2.cleanup);
  describe('when active', function() {
    it('should render Slide with active css properties', function() {
      var props = {
        active: true,
        src: 'some src url',
      };

      var _render = (0, _react2.render)(
          _react['default'].createElement(_Slide['default'], {
            src: props.src,
            active: props.active,
          }),
        ),
        container = _render.container;

      expect(container.firstChild).toMatchSnapshot();
    });
  });
  describe('when NOT active', function() {
    it('should render Slide without active css properties', function() {
      var props = {
        active: false,
        src: 'some src url',
      };

      var _render2 = (0, _react2.render)(
          _react['default'].createElement(_Slide['default'], {
            src: props.src,
            active: props.active,
          }),
        ),
        container = _render2.container;

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
