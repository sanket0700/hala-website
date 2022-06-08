import React from 'react';

import './styles.scss';

function TeamMemberCard(props) {
  return (
    <div className='TeamMemberCard'>
      <div className='team-member-card-container'>
        <div className='team-member-card-image-container'>
          <img className='team-member-card-image' src={props.imageUrl} alt={props.name} />
        </div>
        <div className='team-member-card-name'>
          {props.name}
        </div>
        <div className='team-member-card-role'>
          {props.role}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard