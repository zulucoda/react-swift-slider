import React from 'react';
import styles from './styles.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Dot = ({ active }) => {
  const dotClasses = cx({
    dot: true,
    active: active,
  });
  return(
    <li className={dotClasses}/>
  )
}
export default Dot;
