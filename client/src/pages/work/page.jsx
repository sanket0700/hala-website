import React from 'react'
import { PageBanner } from '../../components/PageBanner';
import { SectionCard } from '../../components/SectionCard';

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
    </div>
  )
}

export default Work