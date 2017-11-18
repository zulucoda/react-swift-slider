import React, { Component } from "react";
import "./assets/sass/react-swift-slide.css";

class Slide extends Component {
  render() {
    const { src, active } = this.props;
    const selectedClass = active ? "slide active" : "slide";
    return (
      <li
        className={selectedClass}
        style={{ backgroundImage: "url(" + src + ")" }}
      />
    );
  }
}
export default Slide;
