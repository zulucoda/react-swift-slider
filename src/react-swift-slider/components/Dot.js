import React from 'react';
import styled from 'styled-components';
import { CSS_OVERRIDE } from '../config';

const SwiftSliderDot = styled.li`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 20px;
  margin: 0 1rem;
  cursor: pointer;
  background: ${(props) => props.background};
`;

export default function Dot({
  active,
  onClick,
  idx,
  activeDotColor,
  dotColor,
}) {
  const className = active
    ? CSS_OVERRIDE.swiftSliderActiveDotClass
    : CSS_OVERRIDE.swiftSliderDotClass;
  return (
    <SwiftSliderDot
      onClick={() => onClick(idx)}
      background={active ? activeDotColor : dotColor}
      className={className}
    />
  );
}
