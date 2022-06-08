import React from 'react'
import { PageBanner } from '../../components/PageBanner';
import { SectionCard } from '../../components/SectionCard';
import { ProjectCard } from './ProjectCard';

import projectData from './projectData';

import './styles.scss';

function Work() {
  return (
    <div className='section Work'>
      <PageBanner 
        heading="Our Work"
      />
      <SectionCard
        heading="OUR WORK"
        description="Team projects"
      />

      <div className='projects-grid'>
        {
          projectData.map((project, index) => {
            return (
              <ProjectCard 
                key={index}
                {...project} 
              />
            )
          })
        }
      </div>

    </div>
  )
}

export default Work