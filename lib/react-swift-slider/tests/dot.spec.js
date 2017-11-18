"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _Dot = require("../Dot");

var _Dot2 = _interopRequireDefault(_Dot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Dot - Unit Test", function () {
  it("should render a non active dot", function () {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dot2.default, {
      dotColor: "dot color",
      key: "some key",
      active: false,
      onClick: onClickFun,
      idx: "some index"
    }));

    expect(wrapper.find("li").getElement().props.className).toEqual("dot");
    expect(wrapper.find("li").getElement().props.style.background).toEqual("dot color");
  });

  it("should render a active dot", function () {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dot2.default, {
      activeDotColor: "active dot color",
      key: "some key",
      active: true,
      onClick: onClickFun,
      idx: "some index"
    }));

    expect(wrapper.find("li").getElement().props.style.background).toEqual("active dot color");
  });

  it("should call onClick function with index, on element click", function () {
    var onClickFun = jest.fn();
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dot2.default, {
      activeDotColor: "active dot color",
      key: "some key",
      active: true,
      onClick: onClickFun,
      idx: "some index"
    }));
    wrapper.find("li").simulate("click");
    expect(onClickFun).toHaveBeenCalledWith("some index");
  });
}); /**
     * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
     * Copyright mfbproject.co.za - muzi@mfbproject.co.za
     * Copyright zulucoda - mfbproject
     */