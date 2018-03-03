# React Swift Slider
[![npm status](https://img.shields.io/npm/v/react-swift-slider.svg)](https://www.npmjs.com/package/react-swift-slider)
[![Build Status](https://travis-ci.org/zulucoda/react-swift-slider.svg?branch=master)](https://travis-ci.org/zulucoda/react-swift-slider)
[![Coverage Status](https://coveralls.io/repos/github/zulucoda/react-swift-slider/badge.svg?branch=master)](https://coveralls.io/github/zulucoda/react-swift-slider?branch=master)

React Swift Slider is a simple image/picture slider for react.

![example](react-swift-slider-test.gif)

## Demo

[Demo-1](https://react-swift-slider.mfbproject.co.za/)
[Demo-2](http://ill-informed-position.surge.sh/)



## Example Repo on how to use `react-swift-slider`
[https://github.com/zulucoda/react-swift-slider-test](https://github.com/zulucoda/react-swift-slider-test)

## Installation

```
npm i react-swift-slider
```

## Usage

```javascript
import SwiftSlider from 'react-swift-slider'
```

```javascript
const data =  [
  {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
  {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
  {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
  {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
  {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

class App extends Component {
  render() {
    return (
      <SwiftSlider data={data}/>
    );
  }
}
```

### Available Props

| Prop | Type | Description |
| :------| :-----------| :-----------|
| data   | Array | Array of slide id & src's |
| height  | Number | Height of slider default 460px |
| interval   | Number | Slide interval duration default 5000 |
| activeDotColor   | String | Active dot color  |
| dotColor  | String | Dot color  |
| showDots  | Boolean | Show/Hide Dots |
| enableNextAndPrev  | Boolean | Show/Hide Controls |

### Change Default Height
This will render swift slide with 900px height. The default height is 450px.
```javascript
const data =  [
  {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
  {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
  {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
  {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
  {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

class App extends Component {
  render() {
    return (
      <SwiftSlider data={data} height={900}/>
    );
  }
}
```

### Hide/Show Dots
These dots allow the user to change the image, by default they displayed.
To hide these dots just set showDots to false.

```javascript
const data =  [
  {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
  {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
  {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
  {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
  {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

class App extends Component {
  render() {
    return (
      <SwiftSlider data={data} showDots={false}/>
    );
  }
}
```

### Hide/Show Previous and Next controls
These controls allow the user to go *next* or *previous*, they located on the *left* and *right* side of the image.
By default, these are available. To hide this just set enableNextAndPrev to false

```javascript
const data =  [
  {'id':'1','src':'https://picjumbo.imgix.net/HNCK9192.jpg?q=40&w=1650&sharp=30'},
  {'id':'2','src':'https://picjumbo.imgix.net/HNCK3313.jpg?q=40&w=1650&sharp=30'},
  {'id':'3','src':'https://picjumbo.imgix.net/HNCK4330.jpg?q=40&w=1650&sharp=30'},
  {'id':'4','src':'https://picjumbo.imgix.net/HNCK0180.jpg?q=40&w=1650&sharp=30'},
  {'id':'5','src':'https://picjumbo.imgix.net/HNCK3286.jpg?q=40&w=1650&sharp=30'}
];

class App extends Component {
  render() {
    return (
      <SwiftSlider data={data} enableNextAndPrev={false}/>
    );
  }
}
```