import React from 'react';
import styles from './styles.css';

import Slide from '../Slide';
import Control from '../Control';
import Dot from '../Dot';

class Slider extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    height: React.PropTypes.number,
    interval: React.PropTypes.number,
    activeDotColor: React.PropTypes.string,
    dotColor: React.PropTypes.string
  };
  static defaultProps = {
    height: 450,
    activeDotColor: '#e8784e',
    interval: 5000,
    dotColor: '#909192'
  };
  constructor(props){
    super(props);
    this.state = {
      currentSlide: 0,
    }
    this.slideInterval = setInterval(this.nextSlide, this.props.interval);
  }
  resetInterval = () => {
    clearInterval(this.slideInterval)
    this.slideInterval = setInterval(this.nextSlide, this.props.interval);
  }
  nextSlide = () => {
    if(this.state.currentSlide === this.props.data.length-1){
      this.setState({
        currentSlide: 0
      })
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide +1
    })
    this.resetInterval();
  }

  prevSlide = () => {
    if(this.state.currentSlide === 0){
      this.setState({
        currentSlide: this.props.data.length-1
      })
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide -1
    })
    this.resetInterval();
  }
  goToSlide = (idx) => {
    this.setState({
      currentSlide: idx
    })
    this.resetInterval();
  }
  render(){
    const { data, height, activeDotColor, dotColor } = this.props;
    return(
      <div className={styles.container} style={{ height }}>

        <ul className={styles.slides} style={{ height }}>
          {data.map((item, i) =>
            <Slide active={i === this.state.currentSlide} src={item.src} key={item.id}/>
          )}
        </ul>
        <ul className={styles.dots}>
          {data.map((item, i) =>
            <Dot
              activeDotColor={activeDotColor}
              dotColor={dotColor}
              key={i} active={i === this.state.currentSlide}
              onClick={this.goToSlide}
              idx={i}
            />
          )}
        </ul>
        <Control
          onPressPrev={this.prevSlide}
          direction="prev"/>
        <Control
          onPressNext={this.nextSlide}
          direction="next"/>
      </div>
    )
  }
}

export default Slider;
