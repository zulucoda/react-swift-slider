import React from 'react';
import ReactDOM from 'react-dom';
require('normalize-css');

import Slider from './Slider';

const data =  [
  {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
  {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
  {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
  {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
  {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

ReactDOM.render(<Slider data={data} height={900} showDots={false}/>, document.getElementById('root'));
