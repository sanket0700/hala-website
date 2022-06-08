import React from 'react';
import { PageBanner } from '../../components/PageBanner';
import { SectionCard } from '../../components/SectionCard';
import { TeamMemberCard } from './TeamMemberCard';

import teamData from './teamData';

import './styles.scss';

function Team() {
  return (
    <div className='section Team'>
      <PageBanner 
        heading="Team"
      />
      <SectionCard
        heading="OUR PEOPLE"
        description="Our world-class team"
      />

      <div className='team-members-grid'>
        {
          teamData.map((member,index) => {
            return (
              <TeamMemberCard key={index} {...member}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Team