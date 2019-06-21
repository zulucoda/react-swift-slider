import React from 'react';

export default class Dot extends React.Component {
  render() {
    const { active, onClick, idx, activeDotColor, dotColor } = this.props;
    return (
      <li
        onClick={() => onClick(idx)}
        style={{ background: active ? activeDotColor : dotColor }}
        className="swift-slider-dot"
      />
    );
  }
}
