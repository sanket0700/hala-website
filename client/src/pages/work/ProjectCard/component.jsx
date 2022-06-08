import React from 'react';

import './styles.scss';

function ProjectCard(props) {
  return (
    <div className='ProjectCard'>
      <div className='project-card-container'>
        <div className='project-card-element project-card-thumbnail-container'>
          <img className='project-card-thumbnail' src={props.thumbnailUrl} alt={props.title} />
        </div>
        <div className='project-card-element project-card-text-container'>
          <div className='project-card-title'>
            {props.title}
          </div>
          <div className='project-card-category'>
            {props.category}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard