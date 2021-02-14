import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './Slide';
import Control from './Control';
import Dot from './Dot';
import { useInterval } from '../hooks/use-interval';
import {
  CSS_OVERRIDE,
  DEFAULT_PROPS,
  DIRECTION,
  SliderDataType,
} from '../config';
import SwiftSliderThumbnails from './Thumbnails';
import { getSlideId } from '../helpers';

const SwiftSliderWrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-gap: 10px;
`;

const SwiftSliderContainer = styled.div`
  position: relative;
  height: ${(props) => props.height || '450'}px;
  @media (max-width: 600px) {
    height: 250px;
  }
`;

const SwiftSliderSlides = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  list-style: none;
  height: ${(props) => props.height || '450'}px;
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

function ReactSlider({
  data,
  height,
  activeDotColor,
  interval,
  dotColor,
  showDots,
  enableNextAndPrev,
  showThumbnails,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId] = useInterval(() => {
    nextSlide();
  }, interval);

  useEffect(() => {
    data.forEach((img) => {
      const image = new Image();
      image.src = img.src;
    });
  }, [data]);

  const nextSlide = () => {
    if (currentSlide === data.length - 1) {
      return setCurrentSlide(0);
    }
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return setCurrentSlide(data.length - 1);
    }
    setCurrentSlide(currentSlide - 1);
    clearInterval(intervalId);
  };

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    clearInterval(intervalId);
  };

  return (
    <SwiftSliderWrapper>
      <SwiftSliderContainer
        height={height}
        className={CSS_OVERRIDE.swiftSliderContainerClass}
      >
        <SwiftSliderSlides
          height={height}
          className={CSS_OVERRIDE.swiftSliderSlidesClass}
        >
          {data.map((item, i) => (
            <Slide
              active={i === currentSlide}
              src={item.src}
              key={item.id}
              id={getSlideId(item.id)}
            />
          ))}
        </SwiftSliderSlides>
        {showDots ? (
          <SwiftSliderDots className={CSS_OVERRIDE.swiftSliderDotsClass}>
            {data.map((item, i) => (
              <Dot
                activeDotColor={activeDotColor}
                dotColor={dotColor}
                key={i}
                active={i === currentSlide}
                onClick={goToSlide}
                idx={i}
              />
            ))}
          </SwiftSliderDots>
        ) : (
          ''
        )}
        {enableNextAndPrev ? (
          <Control
            onPressPrev={prevSlide}
            direction={DIRECTION.prev}
            height={height}
          />
        ) : (
          ''
        )}
        {enableNextAndPrev ? (
          <Control
            onPressNext={nextSlide}
            direction={DIRECTION.next}
            height={height}
          />
        ) : (
          ''
        )}
      </SwiftSliderContainer>

      <SwiftSliderThumbnails showThumbnails={showThumbnails} data={data} />
    </SwiftSliderWrapper>
  );
}

ReactSlider.propTypes = {
  activeDotColor: PropTypes.string,
  data: SliderDataType,
  dotColor: PropTypes.string,
  enableNextAndPrev: PropTypes.bool,
  height: PropTypes.number,
  interval: PropTypes.number,
  showDots: PropTypes.bool,
  showThumbnails: PropTypes.bool,
};

ReactSlider.defaultProps = {
  ...DEFAULT_PROPS,
};

export default ReactSlider;
