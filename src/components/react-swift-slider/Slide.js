// @flow

import * as React from "react";
import type { SlideProps } from "./types/Slide.Types";
import "./assets/sass/react-swift-slide.css";

type Props = SlideProps;

export default class Slide extends React.Component<Props> {
  render() {
    const { src, active } = this.props;
    const selectedClass = active
      ? "swift-slider-slide swift-slider-active"
      : "swift-slider-slide";
    return (
      <li
        className={selectedClass}
        style={{ backgroundImage: "url(" + src + ")" }}
      />
    );
  }
}
