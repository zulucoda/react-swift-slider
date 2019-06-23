import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slide from './Slide';
import Control, { DIRECTION } from './Control';
import Dot from './Dot';
import { useInterval } from '../hooks/use-interval';

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

function ReactSlider({
  data,
  height,
  activeDotColor,
  interval,
  dotColor,
  showDots,
  enableNextAndPrev,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentInterval, setCurrentInterval] = useState(interval);

  useInterval(() => {
    nextSlide();
  }, currentInterval);

  useEffect(() => {
    data.forEach(img => {
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
    setCurrentInterval(currentInterval + 1);
  };

  const goToSlide = idx => {
    setCurrentSlide(idx);
    setCurrentInterval(currentInterval - 1);
  };

  return (
    <SwiftSliderContainer>
      <SwiftSliderSlides height={height}>
        {data.map((item, i) => (
          <Slide active={i === currentSlide} src={item.src} key={item.id} />
        ))}
      </SwiftSliderSlides>
      {showDots ? (
        <SwiftSliderDots>
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
  );
}

ReactSlider.propTypes = {
  data: PropTypes.array.isRequired,
  height: PropTypes.number,
  interval: PropTypes.number,
  activeDotColor: PropTypes.string,
  dotColor: PropTypes.string,
  showDots: PropTypes.bool,
  enableNextAndPrev: PropTypes.bool,
};

ReactSlider.defaultProps = {
  data: [],
  height: 450,
  activeDotColor: '#e8784e',
  interval: 5000,
  dotColor: '#909192',
  showDots: true,
  enableNextAndPrev: true,
};

export default ReactSlider;
