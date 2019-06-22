import React from 'react';
import styled from 'styled-components';

const SwiftSliderSlide = styled.li`
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  zIndex: 1;
  transition: opacity 1s;
  background-image: url('${props => props.backgroundImage}');
`;

const SwiftSliderSlideActive = styled(SwiftSliderSlide)`
  opacity: 1;
  z-index: 2;
`;

export default class Slide extends React.Component {
  render() {
    const { src, active } = this.props;
    return active ? (
      <SwiftSliderSlideActive backgroundImage={src} />
    ) : (
      <SwiftSliderSlide backgroundImage={src} />
    );
  }
}
