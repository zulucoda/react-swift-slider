import React from 'react';
import styled from 'styled-components';

const SwiftSliderDot = styled.li`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 20px;
  margin: 0 1rem;
  cursor: pointer;
  background: ${props => props.background};
`;

export default class Dot extends React.Component {
  render() {
    const { active, onClick, idx, activeDotColor, dotColor } = this.props;
    return (
      <SwiftSliderDot
        onClick={() => onClick(idx)}
        background={active ? activeDotColor : dotColor}
      />
    );
  }
}
