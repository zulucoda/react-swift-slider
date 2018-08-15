/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/11/18.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React from "react";
import { shallow, mount } from "enzyme";
import Slider from "../Slider";
import { JSDOM } from "jsdom";
import Slide from "../Slide";

const { document } = new JSDOM("").window;
global.document = document;
global.window = document.defaultView;

describe("Slider - Unit Test", () => {
  const data = [
    {
      id: "1",
      src: "https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30"
    },
    {
      id: "2",
      src: "https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30"
    },
    {
      id: "3",
      src: "https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30"
    },
    {
      id: "4",
      src: "https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30"
    },
    {
      id: "5",
      src: "https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30"
    }
  ];

  it("should render slider", () => {
    const wrapper = shallow(<Slider data={data} />);
    expect(wrapper.find(".swift-slider-container").length).toEqual(1);
    expect(wrapper.find(".swift-slider-slides").length).toEqual(1);
  });

  it("should NOT crash when rendered without data being set", () => {
    shallow(<Slider />);
  });

  it("should go to position 4 when on the first slide when clicking on next", () => {
    const wrapper = mount(<Slider data={data} />);
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.swift-slider-prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(4);
  });

  it("should go to previous slide", () => {
    const wrapper = mount(<Slider data={data} />);
    wrapper.find("div.swift-slider-prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(4);
    wrapper.find("div.swift-slider-prev").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(3);
  });

  it("should go to next slide", () => {
    const wrapper = mount(<Slider data={data} />);
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.swift-slider-next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
  });

  it("should go to position 0 when on the last slide when clicking on next", () => {
    const wrapper = mount(<Slider data={[data[0], data[1]]} />);
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper.find("div.swift-slider-next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(1);
    wrapper.find("div.swift-slider-next").simulate("click");
    expect(wrapper.state().currentSlide).toEqual(0);
  });

  it("should go slide when clicking on a dot", () => {
    const wrapper = mount(<Slider data={data} />);
    expect(wrapper.state().currentSlide).toEqual(0);
    wrapper
      .find("li.swift-slider-dot")
      .at(3)
      .simulate("click");
    expect(wrapper.state().currentSlide).toEqual(3);
  });

  it("should not show dots", () => {
    const wrapper = shallow(<Slider data={data} showDots={false} />);
    expect(wrapper.find(".swift-slider-dots").length).toEqual(0);
  });

  it("should not show dots", () => {
    const wrapper = shallow(<Slider data={data} showDots={false} />);
    expect(wrapper.find(".swift-slider-dots").length).toEqual(0);
  });

  it("should not show next and previous", () => {
    const wrapper = shallow(<Slider data={data} enableNextAndPrev={false} />);
    expect(wrapper.find("Control").length).toEqual(0);
  });
});
