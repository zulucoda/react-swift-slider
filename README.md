## React SwiftSlider

React Slider Component


[Demo](http://ill-informed-position.surge.sh/)



```
npm i react-swift-slider
```


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


### add the styles
(looking for a better way to package css modules)

```
.styles__container___14JyY {
  position: relative;
}
.styles__row___3d9ZU {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
      flex-direction: row;
}
.styles__slides___2_7_m {
    position: relative;
    padding: 0px;
    margin: 0px;
    list-style-type: none;
}

.styles__dots___36tjg {
  list-style: none;
  margin: 1.7rem 0;
  padding: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
      flex-direction: row;
  -ms-flex-pack: center;
      justify-content: center;
}

.styles__slide___FVBAo {
    background-position: center;
    background-size: cover;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 1;
    transition: opacity 1s;
}

.styles__active___e4bTj {
    opacity: 1;
    z-index: 2;
}

.styles__image___1iSTN {
  max-width: 300px;
  margin-right: 2rem;
}
.styles__container__prev___20JPr {
  position: absolute;
  top:0;
  bottom:0;
  left: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  z-index: 10;
  background: linear-gradient(to right, rgba(0, 0, 0, .5) , transparent);
  padding: 0 2rem;
  width: 30%;
  cursor: pointer;
}
.styles__container__next___3qkXi {
  position: absolute;
  top:0;
  bottom:0;
  right: 0;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
      justify-content: center;
  -ms-flex-align: center;
      align-items: center;
  z-index: 10;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, .5));
  padding: 0 2rem;
  width: 30%;
  cursor: pointer;
}
.styles__dot___16MUI {
  width: .5rem;
  height:.5rem;
  border-radius: 20px;
  margin: 0 1rem;
  cursor: pointer;
}
```
