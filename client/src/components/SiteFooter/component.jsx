import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

function SiteFooter(props) {

  let navigate = useNavigate();

  const handleClick = (path) => {
    props.setCurrentActive(path);
    navigate("/" + path);
  }

  return (
    <div className='SiteFooter'>
      <div className="site-footer-container">
        <div className="site-footer-nav-container">
          <div className='site-footer-nav-link' onClick={() => handleClick("")}>
            HOME
          </div>
          <div className='site-footer-nav-link' onClick={() => handleClick("about")}>
            ABOUT
          </div>
          <div className='site-footer-nav-link' onClick={() => handleClick("team")}>
            TEAM
          </div>
          <div className='site-footer-nav-link' onClick={() => handleClick("contact")}>
            CONTACT
          </div>
        </div>
        <div className="site-footer-socials-container">
          <div className='site-footer-logo-container'>
            <img 
              className='site-footer-logo'
              src="https://res.cloudinary.com/sanket0700/image/upload/v1656395567/behance-2_fe6vu7.png"
              style={{borderRadius: "50%"}} 
              alt="Behance"
              onClick={() => { window.open("https://www.behance.net/halacreative", "_blank") }}
            />
          </div>
          <div className='site-footer-logo-container'>
            <img
              className='site-footer-logo'
              src="https://res.cloudinary.com/sanket0700/image/upload/v1656395567/instagram-2_conpdk.png"
              alt="Instagram"
              onClick={() => { window.open("https://www.instagram.com/halacreativestudio/", "_blank") }} 
            />
          </div>
          <div className='site-footer-logo-container'>
            <img
              className='site-footer-logo'
              src="https://res.cloudinary.com/sanket0700/image/upload/v1656395567/facebook-2_ohffye.png"
              alt="Facebook"
              onClick={() => { window.open("https://www.facebook.com/HALA-Design-107949261895684/", "_blank") }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteFooter