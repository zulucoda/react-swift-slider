import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.css';
const cx = classNames.bind(styles);

class Slide extends React.Component {
  render(){
    const slideClasses = cx({
      slide: true,
      active: this.props.active,
    });
    const { src } = this.props;
    return(
      <li className={slideClasses} style={{backgroundImage: 'url(' + src + ')'}}>
        
      </li>
    )
  }
}
export default Slide;
