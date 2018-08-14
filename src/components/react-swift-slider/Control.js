// @flow

import * as React from "react";
import type { ControlProps } from "./types/Control.Types";
import "./assets/sass/react-swift-control.css";

export const DIRECTION = {
  prev: "prev",
  next: "next"
};

type Props = ControlProps;

export default class Control extends React.Component<Props> {
  render() {
    const { onPressNext, onPressPrev, direction } = this.props;
    if (direction === DIRECTION.prev) {
      return <div className="swift-slider-prev" onClick={onPressPrev} />;
    } else {
      return <div className="swift-slider-next" onClick={onPressNext} />;
    }
  }
}
