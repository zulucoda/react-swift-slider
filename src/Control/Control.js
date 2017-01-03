import React from 'react';
import styles from './styles.css';

const Control = ({onPressNext, onPressPrev, direction}) => {
  if(direction === 'prev'){
    return(
      <div className={styles.container__prev} onClick={onPressPrev}>
        {/*<button className={styles.prev}>Prev</button>*/}
      </div>
    )
  }
  if(direction === 'next'){
    return(
      <div className={styles.container__next} onClick={onPressNext}>
        {/*<button className={styles.next}>Next</button>*/}
      </div>
    )
  }
}

export default Control;
