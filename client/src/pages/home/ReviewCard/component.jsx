import React from 'react';

import './styles.scss';

function ReviewCard(props) {
  return (
    <div className='ReviewCard'>
      <div className='review-card-company-logo-container'>
        <img className='review-card-company-logo' src={props.thumbnailUrl} alt="" />
      </div>
      <div className='review-card-company-name'>
        {props.companyName}
      </div>
      <div className='review-card-service-name'>
        {props.serviceName}
      </div>
      <div className='review-card-rating'>
        {/* <span style={{fontWeight: "500", paddingRight: "4px"}}>Rating : </span>{props.rating}/5 */}
        <div className="Stars" style={{"--rating": props.rating}}></div>
      </div>
      <div className='review-card-comment'>
        {props.comment}
      </div>
    </div>
  )
}

export default ReviewCard