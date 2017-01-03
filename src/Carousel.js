import React from 'react';
import styles from './styles.css';

import Slide from './Slide';
import Control from './Control';
import Dot from './Dot';

class Carousel extends React.Component {
  static propTypes = {
    height: React.PropTypes.number,
  };
  static defaultProps = {
    height: 480
  };
  constructor(){
    super();
    this.state = {
      currentSlide: 0,
    }
    //var slideInterval = setInterval(this.nextSlide,10000);
  }
  nextSlide = () => {
    console.log('next')
    if(this.state.currentSlide === this.props.data.length-1){
      this.setState({
        currentSlide: 0
      })
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide +1
    })
  }

  prevSlide = () => {
    //clearInterval(myTimer);
    if(this.state.currentSlide === 0){
      this.setState({
        currentSlide: this.props.data.length-1
      })
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide -1
    })
  }
  render(){
    const { data, height } = this.props;
    return(
      <div className={styles.container} style={{ height }}>

        <ul className={styles.slides} style={{ height }}>
          {data.map((item, i) =>
            <Slide active={i === this.state.currentSlide} src={item.src} key={item.id}/>
          )}
        </ul>
        <ul className={styles.dots}>
          {data.map((item, i) =>
            <Dot key={i} active={i === this.state.currentSlide}/>
          )}
        </ul>
        <Control onPressPrev={this.prevSlide} direction="prev"/>
        <Control onPressNext={this.nextSlide} direction="next"/>
      </div>
    )
  }
}

export default Carousel;
