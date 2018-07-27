/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from "react";
import { shallow } from "enzyme";
import Dot from "../Dot";

describe("Dot - Unit Test", () => {
  it("should render a non active dot", () => {
    const onClickFun = jest.fn();
    const wrapper = shallow(
      <Dot
        dotColor="dot color"
        key="some key"
        active={false}
        onClick={onClickFun}
        idx="some index"
      />
    );

    expect(wrapper.find("li").getElement().props.className).toEqual(
      "swift-slider-dot"
    );
    expect(wrapper.find("li").getElement().props.style.background).toEqual(
      "dot color"
    );
  });

  it("should render a active dot", () => {
    const onClickFun = jest.fn();
    const wrapper = shallow(
      <Dot
        activeDotColor="active dot color"
        key="some key"
        active={true}
        onClick={onClickFun}
        idx="some index"
      />
    );

    expect(wrapper.find("li").getElement().props.style.background).toEqual(
      "active dot color"
    );
  });

  it("should call onClick function with index, on element click", () => {
    const onClickFun = jest.fn();
    const wrapper = shallow(
      <Dot
        activeDotColor="active dot color"
        key="some key"
        active={true}
        onClick={onClickFun}
        idx="some index"
      />
    );
    wrapper.find("li").simulate("click");
    expect(onClickFun).toHaveBeenCalledWith("some index");
  });
});
