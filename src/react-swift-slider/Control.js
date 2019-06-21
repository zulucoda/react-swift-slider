import React from 'react';

export const DIRECTION = {
  prev: 'prev',
  next: 'next',
};

export default class Control extends React.Component {
  render() {
    const { onPressNext, onPressPrev, direction } = this.props;
    if (direction === DIRECTION.prev) {
      return <div className="swift-slider-prev" onClick={onPressPrev} />;
    } else {
      return <div className="swift-slider-next" onClick={onPressNext} />;
    }
  }
}
