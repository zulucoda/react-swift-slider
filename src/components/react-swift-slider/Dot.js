import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Dot = ({ active, onClick, idx, activeDotColor, dotColor }) => {
  return(
    <li onClick={() => onClick(idx)}
      style={{background: active ? activeDotColor : dotColor}}
      className={css(styles.dot)}
    />
  )
}
export default Dot;

const styles = StyleSheet.create({
  dot: {
    width: '.5rem',
    height:'.5rem',
    borderRadius: '20px',
    margin: '0 1rem',
    cursor: 'pointer'
  }
})
