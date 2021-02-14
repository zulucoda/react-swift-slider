import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SwiftSliderThumbnails from '../Thumbnails';

describe('React Swift Slider - Components - Thumbnails - Unit Test', () => {
  afterEach(cleanup);

  describe('When Show Thumbnails Is False', () => {
    test('should render null/empty div', () => {
      const { container } = render(
        <SwiftSliderThumbnails showThumbnails={false} data={[]} />,
      );
      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('When Show Thumbnails Is True', () => {
    test('should render thumbnails when thumbnail source is supplied', () => {
      const data = [
        {
          id: '1',
          src:
            'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg',
        },
        {
          id: '2',
          src:
            'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg',
        },
        {
          id: '3',
          src:
            'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg',
        },
        {
          id: '4',
          src:
            'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg',
        },
        {
          id: '5',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png',
        },
        {
          id: '6',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Running_Desk_1920_1080_Engine.png',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/ARWP_Running_Desk_1920_1080_Engine.png',
        },
        {
          id: '7',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Rear34Run_Desk_1920_1080_Hero.png',
          thumbnailSrc:
            'https://media.mfbproject.co.za/repos/ARWP_Rear34Run_Desk_1920_1080_Hero.png',
        },
      ];
      const { container } = render(
        <SwiftSliderThumbnails showThumbnails data={data} />,
      );
      expect(container).toMatchSnapshot();
    });
    test('should render thumbnails using origin source when thumbnail source is not supplied', () => {
      const data = [
        {
          id: '1',
          src:
            'https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg',
        },
        {
          id: '2',
          src:
            'https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg',
        },
        {
          id: '3',
          src:
            'https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg',
        },
        {
          id: '4',
          src:
            'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg',
        },
        {
          id: '5',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png',
        },
        {
          id: '6',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Running_Desk_1920_1080_Engine.png',
        },
        {
          id: '7',
          src:
            'https://media.mfbproject.co.za/repos/ARWP_Rear34Run_Desk_1920_1080_Hero.png',
        },
      ];
      const { container } = render(
        <SwiftSliderThumbnails showThumbnails data={data} />,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
