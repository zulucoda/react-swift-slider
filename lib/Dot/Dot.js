import React from 'react';
import styles from './styles.css';

const Dot = ({ active, onClick, idx, activeDotColor, dotColor }) => {
  return(
    <li onClick={() => onClick(idx)}
      style={{background: active ? activeDotColor : dotColor}}
      className={styles.dot}
    />
  )
}
export default Dot;
