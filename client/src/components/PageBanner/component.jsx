import React from 'react';
import './styles.scss';

function PageBanner(props) {
  return (
    <div className='PageBanner'>
      <div className='page-banner-container'>
        <div className='page-banner-header'>
          {props.heading}
        </div>
      </div>
    </div>
  )
}

export default PageBanner