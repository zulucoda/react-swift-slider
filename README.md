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
