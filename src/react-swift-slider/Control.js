import React from 'react';
import styled from 'styled-components';

export const DIRECTION = {
  prev: 'prev',
  next: 'next',
};

const SwiftSliderControlBase = styled.div`
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  padding: 0 2rem;
  width: 30%;
  cursor: pointer;
`;

const SwiftSliderControlPrev = styled(SwiftSliderControlBase)`
  left: 0;
  align-items: enter;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
`;

const SwiftSliderControlNext = styled(SwiftSliderControlBase)`
  right: 0;
  align-items: center;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5));
`;

export default class Control extends React.Component {
  render() {
    const { onPressNext, onPressPrev, direction } = this.props;
    if (direction === DIRECTION.prev) {
      return <SwiftSliderControlPrev onClick={onPressPrev} />;
    } else {
      return <SwiftSliderControlNext onClick={onPressNext} />;
    }
  }
}
