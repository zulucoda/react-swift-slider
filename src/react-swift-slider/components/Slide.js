import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`;

const SwiftSliderSlide = styled.li`
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.active ? '2' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transition: visibility 0.3s;
  animation: ${props => (props.active ? fadeIn : fadeOut)} 0.8s;
  background-image: url('${props => props.backgroundImage}');
  will-change: opacity;
  will-change: visibility;
  will-change: z-index;
`;

export default class Slide extends React.Component {
  render() {
    const { src, active } = this.props;
    return <SwiftSliderSlide backgroundImage={src} active={active} />;
  }
}
