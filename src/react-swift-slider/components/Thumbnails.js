import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSS_OVERRIDE, SliderDataType } from '../config';
import { getLabelName, getSlideId } from '../helpers';

const SwiftSliderThumbnailsContainer = styled.nav`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  grid-row-start: 2;
`;

const SwiftSliderThumbnail = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  filter: saturate(0);
  transition: 0.3s ease all;

  &:hover {
    transform: scale(1.05);
    filter: saturate(1);
  }
`;

const SwiftSliderThumbnailBtn = styled.a`
  display: flex;
  min-width: 10vw;
  margin-right: 10px;
  margin-bottom: 10px;
  min-height: auto;
`;

const uniqueId = (id) => `swiftSliderThumb_${id}`;

const SwiftSliderThumbnails = ({ data, showThumbnails }) => {
  useEffect(() => {
    data.forEach(({ thumbnailSrc }) => {
      if (thumbnailSrc) {
        const image = new Image();
        image.src = thumbnailSrc;
      }
    });
  }, [data]);

  if (!showThumbnails) {
    return null;
  }
  return (
    <SwiftSliderThumbnailsContainer
      className={CSS_OVERRIDE.swiftSliderThumbnailsContainer}
    >
      {data.map(({ id, src, thumbnailSrc, label }) => {
        const key = uniqueId(id);
        if (thumbnailSrc) {
          return (
            <SwiftSliderThumbnailBtn href={`#${getSlideId(id)}`}>
              <SwiftSliderThumbnail
                src={thumbnailSrc}
                id={key}
                className={CSS_OVERRIDE.swiftSliderThumbnail}
                alt={getLabelName(label, id)}
                key={key}
              />
            </SwiftSliderThumbnailBtn>
          );
        }

        return (
          <SwiftSliderThumbnailBtn href={`#${getSlideId(id)}`}>
            <SwiftSliderThumbnail
              src={src}
              id={key}
              className={CSS_OVERRIDE.swiftSliderThumbnail}
              alt={getLabelName(label, id)}
              key={key}
            />
          </SwiftSliderThumbnailBtn>
        );
      })}
    </SwiftSliderThumbnailsContainer>
  );
};

export default SwiftSliderThumbnails;

SwiftSliderThumbnails.propTypes = {
  data: SliderDataType,
  showThumbnails: PropTypes.bool.isRequired,
};
