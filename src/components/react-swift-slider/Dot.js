// @flow

import * as React from "react";
import type { DotProps } from "./types/Dot.Types";
import "./assets/sass/react-swift-dot.css";

type Props = DotProps;

export default class Dot extends React.Component<Props> {
  render() {
    const { active, onClick, idx, activeDotColor, dotColor } = this.props;
    return (
      <li
        onClick={() => onClick(idx)}
        style={{ background: active ? activeDotColor : dotColor }}
        className="swift-slider-dot"
      />
    );
  }
}
