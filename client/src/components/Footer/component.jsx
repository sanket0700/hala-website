import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

import './styles.scss';

const buttonStyle = {
  padding: "1rem 2.188rem",
  fontSize: "0.875rem",
  lineHeight: "1.625rem",
  transition: "background-color 400ms ease, color 400ms ease, opacity 400ms ease",
  color: "#fff",
  letterSpacing: "0.125rem",
  textTransform: "uppercase",
  textAlign: "center"
};

const buttonBackgroundColor = "#1a1b1f";
const buttonHoverBackgroundColor = "#32343a";

function Footer({ setCurrentActive }) {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setCurrentActive("contact");
    navigate("/contact");
  }

  return (
    <div className='section Footer'>
      <div className='footer-container'>
        <div className='footer-text'>
          <div className='footer-text-header'>
            Grow your business.
          </div>
          <div className='footer-text-body'>
            Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.
          </div>
        </div>
        <div className='footer-button'>
          <Button
            text="START NOW"
            style={buttonStyle}
            backgroundColor={buttonBackgroundColor}
            hoverBackgroundColor={buttonHoverBackgroundColor}
            clickHandler={handleButtonClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Footer