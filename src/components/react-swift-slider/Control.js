import React from 'react';
import './assets/sass/react-swift-control.css';

const Control = ({ onPressNext, onPressPrev, direction }) => {
  if(direction === 'prev'){
    return(
      <div className='prev' onClick={onPressPrev}/>
    )
  }
  if(direction === 'next'){
    return(
      <div className='next' onClick={onPressNext}/>
    )
  }
}


export default Control;
