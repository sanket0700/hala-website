import React, { useState } from 'react';

import './styles.scss';

function Button(props) {

  const [hover, setHover] = useState(false);

  return (
    <div className='Button'>
      <div className='button-container' 
        style={{...props.style, backgroundColor: (hover ? props.hoverBackgroundColor : props.backgroundColor)}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.text}
      </div>
    </div>
  )
}

export { Button }