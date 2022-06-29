import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

// import NavLogo from '../../assets/navLogo.png';
import NavMenu from '../../assets/navMenu.png';

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

const navbarLinkStyle = {
  padding: "0.563rem 0rem",
  fontSize: "0.75rem",
  lineHeight: "1.25rem",
  letterSpacing: "0.063rem",
  textTransform: "uppercase",
  verticalAlign: "top",
  transition: "opacity 200ms ease",
  cursor: "pointer"
};

const collapseNavbarLinkStyle = {
  width: "auto",
  backgroundColor: "#fff",
  textAlign: "center",
  margin: "0 auto",
  padding: "0.938rem 1.875rem",
  fontSize: "0.75rem",
  lineHeight: "1.25rem",
  letterSpacing: "0.063rem",
  textTransform: "uppercase",
  verticalAlign: "top",
  transition: "background-color 400ms ease, color 400ms ease, opacity 400ms ease",
  cursor: "pointer"
};

const buttonBackgroundColor = "#1a1b1f";
const buttonHoverBackgroundColor = "#32343a";

const navbarLinkColor = "#222222";
const navbarLinkHoverColor = "#32343a";
const navbarLinkActiveColor = "#1a1b1f";

const navbarLinkWeight = 500;
const navbarLinkActiveWeight = 600;

const navbarLinkOpacity = 0.6;
const navbarLinkHoverOpacity = 0.9;
const navbarLinkActiveOpacity = 1.0;


function NavBar({ currentActive, setCurrentActive }) {

  let navigate = useNavigate();

  const mediaMatch = window.matchMedia('(min-width: 991px)');

  const [ hoverTag, setHoverTag ] = useState("");
  const [ collapsed, setCollapsed ] = useState(true);

  const screenSizeChangeHandler = (e) => {
    if(e.matches) {
      setCollapsed(true);
    }
  };


  mediaMatch.addEventListener("change", screenSizeChangeHandler);

  const handleClick = (linkTag) => {
    if(currentActive!==linkTag) {
      linkTag==="" ? setCurrentActive("home") : setCurrentActive(linkTag);
      navigate("/"+linkTag);
    }

    setCollapsed(true);
  }

  const handleHover = (linkTag) => {
    setHoverTag(linkTag);
  }

  const toggleNavCollapse = () => {
    setCollapsed(!collapsed);
  }

  const ourWorkClickHandler = () => {
    window.open("https://www.behance.net/halacreative", "_blank")
  }


  return (
    <div className='NavBar'>
      <div className='navbar-container'>
        <div className='navbar-logo' onClick={() => handleClick("")}>
          <img className='navbar-logo-img' src="https://res.cloudinary.com/sanket0700/image/upload/v1656390648/Header_logo_tqg02k.png" alt="Business" />
        </div>
        <div className='navbar-all-links'>
          <div className='navbar-all-links-container'>
            <div className='navbar-link'
              onClick={() => handleClick("")}
              onMouseEnter={() => handleHover("home")}
              onMouseLeave={() => handleHover("")}
              style={{ ...navbarLinkStyle, 
                opacity: (currentActive==="home" ? navbarLinkActiveOpacity : (hoverTag==="home" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                color: (currentActive==="home" ? navbarLinkActiveColor : (hoverTag==="home" ? navbarLinkHoverColor : navbarLinkColor)),
                fontWeight: (currentActive==="home" ? navbarLinkActiveWeight : navbarLinkWeight) }}
            >
              HOME
            </div>
            <div className='navbar-link'
              onClick={() => handleClick("about")}
              onMouseEnter={() => handleHover("about")}
              onMouseLeave={() => handleHover("")}
              style={{ ...navbarLinkStyle, 
                        opacity: (currentActive==="about" ? navbarLinkActiveOpacity : (hoverTag==="about" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                        color: (currentActive==="about" ? navbarLinkActiveColor : (hoverTag==="about" ? navbarLinkHoverColor : navbarLinkColor)),
                        fontWeight: (currentActive==="about" ? navbarLinkActiveWeight : navbarLinkWeight) }}
            >
              ABOUT
            </div>  
            {/* <div className='navbar-link'
              onClick={() => handleClick("work")}
              onMouseEnter={() => handleHover("work")}
              onMouseLeave={() => handleHover("")}
              style={{ ...navbarLinkStyle, 
                opacity: (currentActive==="work" ? navbarLinkActiveOpacity : (hoverTag==="work" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                color: (currentActive==="work" ? navbarLinkActiveColor : (hoverTag==="work" ? navbarLinkHoverColor : navbarLinkColor)),
                fontWeight: (currentActive==="work" ? navbarLinkActiveWeight : navbarLinkWeight) }}
            >
              WORK
            </div> */}
            <div className='navbar-link'
              onClick={() => handleClick("team")}
              onMouseEnter={() => handleHover("team")}
              onMouseLeave={() => handleHover("")}
              style={{ ...navbarLinkStyle, 
                opacity: (currentActive==="team" ? navbarLinkActiveOpacity : (hoverTag==="team" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                color: (currentActive==="team" ? navbarLinkActiveColor : (hoverTag==="team" ? navbarLinkHoverColor : navbarLinkColor)),
                fontWeight: (currentActive==="team" ? navbarLinkActiveWeight : navbarLinkWeight) }}
            >
              TEAM
            </div>
            <div className='navbar-link'
              onClick={() => handleClick("contact")}
              onMouseEnter={() => handleHover("contact")}
              onMouseLeave={() => handleHover("")}
              style={{ ...navbarLinkStyle, 
                opacity: (currentActive==="contact" ? navbarLinkActiveOpacity : (hoverTag==="contact" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                color: (currentActive==="contact" ? navbarLinkActiveColor : (hoverTag==="contact" ? navbarLinkHoverColor : navbarLinkColor)),
                fontWeight: (currentActive==="contact" ? navbarLinkActiveWeight : navbarLinkWeight) }}
            >
              CONTACT
            </div>
          </div>
        </div>
        <div className='navbar-contact-us-button'>
          <Button
            text="OUR WORK"
            style={buttonStyle}
            backgroundColor={buttonBackgroundColor}
            hoverBackgroundColor={buttonHoverBackgroundColor}
            clickHandler={ourWorkClickHandler}
          />
        </div>
        <div className='navbar-links-collapse-menu-icon'>
          <img className='navbar-links-collapse-menu-icon-img'
             src={NavMenu} 
             alt="NavMenu"
             onClick={() => toggleNavCollapse()} 
          />
        </div>
      </div>

      <div className='navbar-links-collapse-menu-container'
        style={{display: (collapsed ? "none" : "block")}}
      >
        <div className='navbar-links-collapse-menu'>
          <div className='navbar-collapse-link'
            onClick={() => handleClick("")}
            onMouseEnter={() => handleHover("home")}
            onMouseLeave={() => handleHover("home")}
            style={{ ...collapseNavbarLinkStyle, 
                      opacity: (currentActive==="home" ? navbarLinkActiveOpacity : (hoverTag==="home" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                      color: (currentActive==="home" ? navbarLinkActiveColor : (hoverTag==="home" ? navbarLinkHoverColor : navbarLinkColor)),
                      fontWeight: (currentActive==="home" ? navbarLinkActiveWeight : navbarLinkWeight) }}
          >
            HOME
          </div>
          <div className='navbar-collapse-link'
            onClick={() => handleClick("about")}
            onMouseEnter={() => handleHover("about")}
            onMouseLeave={() => handleHover("")}
            style={{ ...collapseNavbarLinkStyle, 
                      opacity: (currentActive==="about" ? navbarLinkActiveOpacity : (hoverTag==="about" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
                      color: (currentActive==="about" ? navbarLinkActiveColor : (hoverTag==="about" ? navbarLinkHoverColor : navbarLinkColor)),
                      fontWeight: (currentActive==="about" ? navbarLinkActiveWeight : navbarLinkWeight) }}
          >
            ABOUT
          </div>  
          <div className='navbar-collapse-link'
            onClick={ourWorkClickHandler}
            onMouseEnter={() => handleHover("work")}
            onMouseLeave={() => handleHover("")}
            style={{ ...collapseNavbarLinkStyle, 
              opacity: (currentActive==="work" ? navbarLinkActiveOpacity : (hoverTag==="work" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
              color: (currentActive==="work" ? navbarLinkActiveColor : (hoverTag==="work" ? navbarLinkHoverColor : navbarLinkColor)),
              fontWeight: (currentActive==="work" ? navbarLinkActiveWeight : navbarLinkWeight) }}
          >
            WORK
          </div>
          <div className='navbar-collapse-link'
            onClick={() => handleClick("team")}
            onMouseEnter={() => handleHover("team")}
            onMouseLeave={() => handleHover("")}
            style={{ ...collapseNavbarLinkStyle, 
              opacity: (currentActive==="team" ? navbarLinkActiveOpacity : (hoverTag==="team" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
              color: (currentActive==="team" ? navbarLinkActiveColor : (hoverTag==="team" ? navbarLinkHoverColor : navbarLinkColor)),
              fontWeight: (currentActive==="team" ? navbarLinkActiveWeight : navbarLinkWeight) }}
          >
            TEAM
          </div>
          <div className='navbar-collapse-link'
            onClick={() => handleClick("contact")}
            onMouseEnter={() => handleHover("contact")}
            onMouseLeave={() => handleHover("")}
            style={{ ...collapseNavbarLinkStyle, 
              opacity: (currentActive==="contact" ? navbarLinkActiveOpacity : (hoverTag==="contact" ? navbarLinkHoverOpacity : navbarLinkOpacity)),
              color: (currentActive==="contact" ? navbarLinkActiveColor : (hoverTag==="contact" ? navbarLinkHoverColor : navbarLinkColor)),
              fontWeight: (currentActive==="contact" ? navbarLinkActiveWeight : navbarLinkWeight) }}
          >
            CONTACT
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar