import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Slide from './Slide';
import Control from './Control';
import Dot from './Dot';

export default class Slider extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    height: React.PropTypes.number,
    interval: React.PropTypes.number,
    activeDotColor: React.PropTypes.string,
    dotColor: React.PropTypes.string,
    showDots: React.PropTypes.bool,
    enableNextAndPrev: React.PropTypes.bool
  };
  static defaultProps = {
    height: 450,
    activeDotColor: '#e8784e',
    interval: 5000,
    dotColor: '#909192',
    showDots: true,
    enableNextAndPrev: true
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
        currentSlide: this.props.data.length - 1
      })
      return;
    }
    this.setState({
      currentSlide: this.state.currentSlide - 1
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
    const { data, height, activeDotColor, dotColor, showDots, enableNextAndPrev } = this.props;
    return(
      <div className={css(styles.container)}>
        <ul className={css(styles.slides)} style={{height: height}}>
          {data.map((item, i) =>
            <Slide active={i === this.state.currentSlide}
              src={item.src}
              key={item.id}/>
          )}
        </ul>
        {showDots ?
        <ul className={css(styles.dots)} >
          {data.map((item, i) =>
            <Dot
              activeDotColor={activeDotColor}
              dotColor={dotColor}
              key={i} active={i === this.state.currentSlide}
              onClick={this.goToSlide}
              idx={i}
            />
          )}
        </ul> : ''}
        {enableNextAndPrev ?
          <Control
            onPressPrev={this.prevSlide}
            direction="prev"/> : ''}
        {enableNextAndPrev ?
          <Control
            onPressNext={this.nextSlide}
            direction="next"/> : ''}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '450px',
    '@media (max-width: 600px)': {
      height: '250px',
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  slides: {
    position: 'relative',
    padding: '0px',
    margin: '0px',
    listStyle: 'none',
    '@media (max-width: 600px)': {
      height: '250px',
    }
  },
  dots: {
    listStyle: 'none',
    margin: '1.7rem 0',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '@media (max-width: 600px)': {
      margin: '1rem 0',
    }
  }
})
