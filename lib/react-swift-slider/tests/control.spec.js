"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _Control = require("../Control");

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Control - Unit Test", function () {
  describe("previous", function () {
    it("should render previous div with previous on click function", function () {
      var onPressPrev = jest.fn();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Control2.default, { direction: _Control.DIRECTION.prev, onPressPrev: onPressPrev }));
      expect(wrapper.contains(_react2.default.createElement("div", { className: _Control.DIRECTION.prev, onClick: onPressPrev }))).toBeTruthy();
    });
  });

  describe("next", function () {
    it("should render next div with next on click function", function () {
      var onNextPrev = jest.fn();
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Control2.default, { direction: _Control.DIRECTION.next, onPressNext: onNextPrev }));
      expect(wrapper.contains(_react2.default.createElement("div", { className: _Control.DIRECTION.next, onClick: onNextPrev }))).toBeTruthy();
    });
  });
}); /**
     * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
     * Copyright mfbproject.co.za - muzi@mfbproject.co.za
     * Copyright zulucoda - mfbproject
     */