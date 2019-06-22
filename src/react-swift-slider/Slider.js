import React from 'react';
import PropTypes from 'prop-types';
import Slide from './Slide';
import Control, { DIRECTION } from './Control';
import Dot from './Dot';
import styled from 'styled-components';

const SwiftSliderContainer = styled.div`
  position: relative;
  height: ${props => props.height || '450'}px;
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const SwiftSliderSlides = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  height: ${props => props.height || '450'}px;
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const SwiftSliderDots = styled.ul`
  list-style: none;
  margin: 1.7rem 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`;

export default class Slider extends React.Component {
  state = {
    currentSlide: 0,
  };

  componentDidMount() {
    this.setState({
      slideInterval: setInterval(this.nextSlide, this.props.interval),
    });
  }

  resetInterval = () => {
    clearInterval(this.state.slideInterval);
    this.setState({
      slideInterval: setInterval(this.nextSlide, this.props.interval),
    });
  };

  nextSlide = () => {
    if (this.state.currentSlide === this.props.data.length - 1) {
      this.setState({
        currentSlide: 0,
      });
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide + 1,
    });
    this.resetInterval();
  };

  prevSlide = () => {
    if (this.state.currentSlide === 0) {
      this.setState({
        currentSlide: this.props.data.length - 1,
      });
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide - 1,
    });
    this.resetInterval();
  };

  goToSlide = idx => {
    this.setState({
      currentSlide: idx,
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
      enableNextAndPrev,
    } = this.props;
    return (
      <SwiftSliderContainer>
        <SwiftSliderSlides height={height}>
          {data.map((item, i) => (
            <Slide
              active={i === this.state.currentSlide}
              src={item.src}
              key={item.id}
            />
          ))}
        </SwiftSliderSlides>
        {showDots ? (
          <SwiftSliderDots>
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
          </SwiftSliderDots>
        ) : (
          ''
        )}
        {enableNextAndPrev ? (
          <Control onPressPrev={this.prevSlide} direction={DIRECTION.prev} />
        ) : (
          ''
        )}
        {enableNextAndPrev ? (
          <Control onPressNext={this.nextSlide} direction={DIRECTION.next} />
        ) : (
          ''
        )}
      </SwiftSliderContainer>
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
  enableNextAndPrev: PropTypes.bool,
};

Slider.defaultProps = {
  data: [],
  height: 450,
  activeDotColor: '#e8784e',
  interval: 5000,
  dotColor: '#909192',
  showDots: true,
  enableNextAndPrev: true,
};
