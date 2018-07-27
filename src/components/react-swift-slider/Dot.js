import React from "react";
import "./assets/sass/react-swift-dot.css";

const Dot = ({ active, onClick, idx, activeDotColor, dotColor }) => {
  return (
    <li
      onClick={() => onClick(idx)}
      style={{ background: active ? activeDotColor : dotColor }}
      className="swift-slider-dot"
    />
  );
};
export default Dot;
