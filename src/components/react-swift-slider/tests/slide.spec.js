/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/07/27.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from "react";
import { shallow } from "enzyme";
import Slide from "../Slide";

describe("React Swift Slider: Slide - Unit Test", () => {
  describe("when active", () => {
    it('should include ".swift-slider-active" class name', () => {
      const props = {
        active: true,
        src: "some src url"
      };

      const wrapper = shallow(<Slide src={props.src} active={props.active} />);

      expect(wrapper.find(".swift-slider-active").length).toEqual(1);
    });
  });
  describe("when NOT active", () => {
    it('should NOT include ".swift-slider-active" class name', () => {
      const props = {
        active: false,
        src: "some src url"
      };

      const wrapper = shallow(<Slide src={props.src} active={props.active} />);

      expect(wrapper.find("li").length).toEqual(1);
      expect(wrapper.find("li").getElement().props.className).toEqual(
        "swift-slider-slide"
      );
    });
  });
});
