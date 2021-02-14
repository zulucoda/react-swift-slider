import PropTypes from 'prop-types';
import React from 'react';

export const DIRECTION = {
  prev: 'prev',
  next: 'next',
};

export const CSS_OVERRIDE = {
  swiftSliderContainerClass: 'swift-slider-container',
  swiftSliderSlidesClass: 'swift-slider-slides',
  swiftSliderDotsClass: 'swift-slider-dots',
  swiftSliderDotClass: 'swift-slider-dot',
  swiftSliderActiveDotClass: 'swift-slider-active-dot',
  swiftSliderSlideClass: 'swift-slider-slide',
  swiftSliderActiveSlideClass: 'swift-slider-active-slide',
  swiftSliderPreviousBtnClass: 'swift-slider-prev-btn',
  swiftSliderNextBtnClass: 'swift-slider-next-btn',
  swiftSliderThumbnailsContainer: 'swift-slider-thumbnails-container',
  swiftSliderThumbnail: 'swift-slider-thumbnail',
};

export const CSS_OVERRIDE_EXTERNAL = {
  ...Object.keys(CSS_OVERRIDE)
    .map((key) => ({
      [key]: `.${CSS_OVERRIDE[key]}`,
    }))
    .reduce((prev, cur) => ({ ...prev, ...cur }), {}),
};

export const DEFAULT_PROPS = {
  data: [],
  height: 450,
  activeDotColor: '#e8784e',
  interval: 5000,
  dotColor: '#909192',
  showDots: true,
  enableNextAndPrev: true,
  showThumbnails: false,
};

export const DEFAULT_LABEL = 'Slide';

export const SliderDataType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
    ]),
    src: PropTypes.string.isRequired,
    thumbnailSrc: PropTypes.string,
    label: PropTypes.string,
  }),
);
