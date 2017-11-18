import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Slide extends React.Component {
  render(){
    const { src, active } = this.props;
    return(
      <li
        className={css(styles.slide, active && styles.active)}
        style={{backgroundImage: 'url(' + src + ')'}}/>
    )
  }
}
export default Slide;

const styles = StyleSheet.create({
  slide: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 1,
    transition: 'opacity 1s'
  },
  active: {
    opacity: 1,
    zIndex: 2,
  },
  image: {
    maxWidth: '300px',
    marginRight: '2rem',
  }
})
