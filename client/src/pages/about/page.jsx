import React from 'react';
import { PageBanner } from '../../components/PageBanner';
import { SectionCard } from '../../components/SectionCard';
import { ServiceCard } from './ServiceCard';

import serviceData from './serviceData';

import './styles.scss';

function About() {
  return (
    <div className='section About'>
      <PageBanner 
        heading="About Us"
      />

      <div className='about-us-header-container'>
        <div className='about-us-header'>
          We're a group of creative thinkers who have built a business to change the world.
        </div>
      </div>

      <div className='about-us-section-break'></div>

      <div className='about-us-brief-description-container'>
        <div className='about-us-brief-description'>
          Growing in the era of handwritten letters to the period of text messages, one may wonder what's next!? Gradually becoming more adaptive to the changing world, we took part in the advancement. All of us come from a background of creativity, excelling in parts of it. Our vision is not just defined by words even so elucidated by our work style.
        </div>
      </div>

      <div className='about-us-section-break'></div>

      <div className='about-us-services-container'>
        <SectionCard
          heading="WHAT WE ARE BEST AT"
          description="Our Services"
        />
        <div className='about-us-services-grid'>
          {
            serviceData.map((service, index) => {
              return (
                <ServiceCard 
                  key={index}
                  {...service}
                />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default About