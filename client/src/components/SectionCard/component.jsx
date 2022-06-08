import React from 'react';

import './styles.scss';

function SectionCard(props) {
  return (
    <div className='SectionCard'>
      <div className='section-card-container'>
        <div className='section-card-content section-card-heading'>
          {props.heading}
        </div>
        <div className='section-card-content section-card-description'>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default SectionCard