import React from 'react';

import './styles.scss'

function ServiceCard(props) {
  return (
    <div className='ServiceCard'>
      <div className='service-card-container'>
        <div className='service-thumbnail-container'>
          <img className='service-thumbnail' src={props.thumbnailUrl} alt={props.title} />
        </div>
        <div className='service-title'>
          {props.title}
        </div>
        <div className='service-description'>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard