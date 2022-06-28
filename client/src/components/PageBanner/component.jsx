import React from 'react';
import './styles.scss';

function PageBanner(props) {

  return (
    <div className='PageBanner'>
      <div className='page-banner-container'>
        <video id='page-banner-video' muted autoPlay loop>
            <source src={props.videoUrl}/>
        </video>
        <div className='page-banner-header'>
          {props.heading}
        </div>
      </div>
    </div>
  )
}

export default PageBanner