import React from "react";
import "./assets/sass/react-swift-control.css";
export const DIRECTION = {
  prev: "prev",
  next: "next"
};

const Control = ({ onPressNext, onPressPrev, direction }) => {
  if (direction === DIRECTION.prev) {
    return <div className="prev" onClick={onPressPrev} />;
  } else {
    return <div className="next" onClick={onPressNext} />;
  }
};

export default Control;
