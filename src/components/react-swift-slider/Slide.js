import React, { Component } from "react";
import PropTypes from "prop-types";
import "./assets/sass/react-swift-slide.css";

class Slide extends Component {
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

Slide.propTypes = {
  src: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default Slide;
