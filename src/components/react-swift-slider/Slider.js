import React, { Component } from "react";
import PropTypes from "prop-types";
import "./assets/sass/react-swift-slider.css";

import Slide from "./Slide";
import Control from "./Control";
import Dot from "./Dot";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.slideInterval = setInterval(this.nextSlide, this.props.interval);
  }
  resetInterval = () => {
    clearInterval(this.slideInterval);
    this.slideInterval = setInterval(this.nextSlide, this.props.interval);
  };
  nextSlide = () => {
    if (this.state.currentSlide === this.props.data.length - 1) {
      this.setState({
        currentSlide: 0
      });
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide + 1
    });
    this.resetInterval();
  };

  prevSlide = () => {
    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: this.props.data.length - 1
      });
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide - 1
    });
    this.resetInterval();
  };
  goToSlide = idx => {
    this.setState({
      currentSlide: idx
    });
    this.resetInterval();
  };
  render() {
    const {
      data,
      height,
      activeDotColor,
      dotColor,
      showDots,
      enableNextAndPrev
    } = this.props;
    return (
      <div className="swift-slider-container">
        <ul className="swift-slider-slides" style={{ height: height }}>
          {data.map((item, i) => (
            <Slide
              active={i === this.state.currentSlide}
              src={item.src}
              key={item.id}
            />
          ))}
        </ul>
        {showDots ? (
          <ul className="swift-slider-dots">
            {data.map((item, i) => (
              <Dot
                activeDotColor={activeDotColor}
                dotColor={dotColor}
                key={i}
                active={i === this.state.currentSlide}
                onClick={this.goToSlide}
                idx={i}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
        {enableNextAndPrev ? (
          <Control onPressPrev={this.prevSlide} direction="prev" />
        ) : (
          ""
        )}
        {enableNextAndPrev ? (
          <Control onPressNext={this.nextSlide} direction="next" />
        ) : (
          ""
        )}
      </div>
    );
  }
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  interval: PropTypes.number,
  activeDotColor: PropTypes.string,
  dotColor: PropTypes.string,
  showDots: PropTypes.bool,
  enableNextAndPrev: PropTypes.bool
};

Slider.defaultProps = {
  height: 450,
  activeDotColor: "#e8784e",
  interval: 5000,
  dotColor: "#909192",
  showDots: true,
  enableNextAndPrev: true
};
