import React from 'react';
import styled from 'styled-components';
import { CSS_OVERRIDE } from '../config';

const SwiftSliderSlide = styled.li`
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.active ? '2' : '0')};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s linear;
  background-image: url('${(props) => props.backgroundImage}');
`;

export default function Slide({ src, active }) {
  const className = active
    ? CSS_OVERRIDE.swiftSliderActiveSlideClass
    : CSS_OVERRIDE.swiftSliderSlideClass;
  return (
    <SwiftSliderSlide
      backgroundImage={src}
      active={active}
      className={className}
    />
  );
}
