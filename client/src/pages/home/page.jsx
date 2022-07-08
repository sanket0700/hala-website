import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from'../../components/Button';
import { BriefCard } from './BriefCard';

import briefCardData from './briefCardData.js';
import ReviewCard from './ReviewCard/component';
import reviewData from './reviewData';

import './styles.scss';

const buttonStyle = {
  padding: "1rem 2.188rem",
  fontSize: "0.875rem",
  lineHeight: "1.625rem",
  transition: "background-color 400ms ease, color 400ms ease, opacity 400ms ease",
  color: "#000",
  letterSpacing: "0.125rem",
  textTransform: "uppercase",
  textAlign: "center"
};

const buttonBackgroundColor = "#fff";
const buttonHoverBackgroundColor = "#f1f1f1";

const bannerVideoUrl = "https://res.cloudinary.com/sanket0700/video/upload/v1656333353/Home_Banner_Video_gve0qy.mp4";

function Home(props) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
    props.setCurrentActive("about")
  };

  return (
    <div className='section Home'>
      <div className='home-container'>
        <div className='home-banner-container' onContextMenu={(e) => e.preventDefault()}>
          <video id='home-banner-video' muted autoPlay loop disablePictureInPicture>
              <source src={bannerVideoUrl}/>
          </video>
          <div className="home-banner-content-container">
            <div className='home-banner-content home-banner-header'>
              Imagine and Design
            </div>
            <div className='home-banner-content home-banner-description'>
              Just like how HALA glorifies the beauty of moon, our service will surely elevate your business.
            </div>
            <div className='home-banner-content home-banner-button'>
              <Button
                text="LEARN MORE"
                style={buttonStyle}
                backgroundColor={buttonBackgroundColor}
                hoverBackgroundColor={buttonHoverBackgroundColor}
                clickHandler={handleButtonClick}
              />
            </div>
          </div>
        </div>
        <div className='home-section-card-container'>
          <div className='home-section-card-content home-section-card-heading'>
            WHAT WE BELIEVE IN
          </div>
          <div className='home-section-card-content home-section-card-description'>
            Grow your business, establish your brand, and put your customers first.
          </div>
        </div>

        <div className='home-section-break'></div>

        <div className='home-brief-cards-grid'>
          {
            briefCardData.map((cardData, index) => {
              return (
                <BriefCard
                  key={index}
                  type={index%2 + 1}
                  {...cardData}
                  setCurrentActive={props.setCurrentActive}
                />
              )
            })
          }
        </div>

        <div className='home-section-break'></div>

        <div className='home-section-card-container home-review-section-card-container'>
          <div className='home-section-card-content home-section-card-description'>
            Our Clients
          </div>
        </div>
        
        <div className='home-review-section'>
          <div className='home-review-section-container'>
            {
              reviewData.map((data,index) => {
                return (
                  <ReviewCard key={index} {...data}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home