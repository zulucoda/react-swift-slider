import React, { Component } from 'react';
import Carousel from './Carousel';

const data =  [
{'id':'76034043-8d49-483b-b23e-956fc6db0bc3','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
{'id':'5c1e3627-43ee-4786-af96-b0ae0dea0de2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
{'id':'4448f045-e217-4a9f-8ec7-d041e8dc811d','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
{'id':'656add0e-9933-42e3-a46b-2c83b5aea9a8','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
{'id':'ccc1597e-f687-413d-bb42-b459e4a78278','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

export default class App extends Component {
  render() {
    return (
      <div>
        <Carousel data={data}/>
      </div>

    );
  }
}
