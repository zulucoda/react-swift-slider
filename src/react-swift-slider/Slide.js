import React from 'react';
import type { SlideProps } from './types/Slide.Types';

export default class Slide extends React.Component {
  render() {
    const { src, active } = this.props;
    const selectedClass = active
      ? 'swift-slider-slide swift-slider-active'
      : 'swift-slider-slide';
    return (
      <li
        className={selectedClass}
        style={{ backgroundImage: 'url(' + src + ')' }}
      />
    );
  }
}
