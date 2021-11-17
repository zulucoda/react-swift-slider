import React from 'react';
import Slider from '../../../lib/react-swift-slider.min';

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

const Main = () => {
  return <Slider data={data} height={900} enableNextAndPrev showThumbnails />;
};

export default Main;
