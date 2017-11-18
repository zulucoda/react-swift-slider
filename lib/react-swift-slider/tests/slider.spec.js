"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _Slider = require("../Slider");

var _Slider2 = _interopRequireDefault(_Slider);

var _jsdom = require("jsdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
var document = new _jsdom.JSDOM("").window.document;

global.document = document;
global.window = document.defaultView;

describe("Slider - Unit Test", function () {
  var data = [{
    id: "1",
    src: "https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30"
  }, {
    id: "2",
    src: "https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30"
  }, {
    id: "3",
    src: "https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30"
  }, {
    id: "4",
    src: "https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30"
  }, {
    id: "5",
    src: "https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30"
  }];

  it("should render slider", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Slider2.default, { data: data }));
    expect(wrapper.find(".container").length).toEqual(1);
    expect(wrapper.find(".slides").length).toEqual(1);
  });

  it("should go to position 4 when on the first slide when clicking on next", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Slider2.default, { data: data }));
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(4);
  });

  it("should go to previous slide", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Slider2.default, { data: data }));
    wrapper.find("div.prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(4);
    wrapper.find("div.prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(3);
  });

  it("should go to next slide", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Slider2.default, { data: data }));
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
  });

  it("should go to position 0 when on the last slide when clicking on next", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Slider2.default, { data: [data[0], data[1]] }));
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
    wrapper.find("div.next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(0);
  });

  it("should go slide when clicking on a dot", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_Slider2.default, { data: data }));
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("li.dot").at(3).simulate("click");
    expect(wrapper.state().currentSlide).toEqual(3);
  });

  it("should not show dots", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Slider2.default, { data: data, showDots: false }));
    expect(wrapper.find(".dots").length).toEqual(0);
  });

  it("should not show dots", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Slider2.default, { data: data, showDots: false }));
    expect(wrapper.find(".dots").length).toEqual(0);
  });

  it("should not show next and previous", function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Slider2.default, { data: data, enableNextAndPrev: false }));
    expect(wrapper.find("Control").length).toEqual(0);
  });
});