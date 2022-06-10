import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

import './styles.scss';



const buttonStyle = {
  padding: "0.75rem 1.563rem",
  fontSize: "0.75rem",
  lineHeight: "1.25rem",
  transition: "background-color 400ms ease, color 400ms ease, opacity 400ms ease",
  color: "#fff",
  letterSpacing: "0.125rem",
  textTransform: "uppercase",
  textAlign: "center"
};

const buttonBackgroundColor = "#1a1b1f";
const buttonHoverBackgroundColor = "#32343a";

function BriefCard(props) {

  const navigate = useNavigate();
  const mediaMatch = window.matchMedia('(max-width: 991px)');

  const [ inverted, setInverted ] = useState(false);

  const screenSizeChangeHandler = (e) => {
    if(e.matches) {
      setInverted(true);
    } else {
      setInverted(false);
    }
  };

  useEffect(() => {
    if(mediaMatch.matches) {
      setInverted(true)
    } else {
      setInverted(false)
    }
  }, [ mediaMatch, inverted ])


  mediaMatch.addEventListener("change", screenSizeChangeHandler);

  const buttonClickHandler = (redirectUrl) => {
    navigate(redirectUrl);
    props.setCurrentActive(redirectUrl.substring(1));
  };


  return (
    <div className='BriefCard'>
      <div className='brief-card-container'>
        { 
          (!inverted && props.type===1) ? 
          <div className='brief-card brief-card-type-one'>
            <div className='brief-card-text-container'>
              <div className='brief-card-category'>
                {props.category}
              </div>
              <div className='brief-card-title'>
                {props.title}
              </div>
              <div className='brief-card-description'>
                {props.description}
              </div>
              <Button
                className="brief-card-button"
                text="LEARN MORE"
                style={buttonStyle}
                backgroundColor={buttonBackgroundColor}
                hoverBackgroundColor={buttonHoverBackgroundColor}
                clickHandler={() => buttonClickHandler(props.redirectUrl)}
              />
            </div>
            <div className='brief-card-image-container'>
              <img className='brief-card-image' src={props.imageUrl} alt={props.title} />
            </div>
          </div>
          :
          <div className={'brief-card brief-card-type-two'}>
            <div className='brief-card-image-container'>
              <img className='brief-card-image' src={props.imageUrl} alt={props.title} />
            </div>
            <div className='brief-card-text-container'>
              <div className='brief-card-category'>
                {props.category}
              </div>
              <div className='brief-card-title'>
                {props.title}
              </div>
              <div className='brief-card-description'>
                {props.description}
              </div>
              <Button
                className="brief-card-button"
                text="LEARN MORE"
                style={buttonStyle}
                backgroundColor={buttonBackgroundColor}
                hoverBackgroundColor={buttonHoverBackgroundColor}
                clickHandler={() => buttonClickHandler(props.redirectUrl)}
              />
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default BriefCard