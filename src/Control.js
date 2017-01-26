import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Control = ({ onPressNext, onPressPrev, direction }) => {
  if(direction === 'prev'){
    return(
      <div className={css(styles.prev)} onClick={onPressPrev}/>
    )
  }
  if(direction === 'next'){
    return(
      <div className={css(styles.next)} onClick={onPressNext}/>
    )
  }
}

const styles = StyleSheet.create({
  prev: {
    position: 'absolute',
    top:0,
    bottom:0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    background: 'linear-gradient(to right, rgba(0,0,0,0.5) , transparent)',
    padding: '0 2rem',
    width: '30%',
    cursor: 'pointer'
  },
  next: {
    position: 'absolute',
    top:0,
    bottom:0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.5))',
    padding: '0 2rem',
    width: '30%',
    cursor: 'pointer',
  }
})

export default Control;
