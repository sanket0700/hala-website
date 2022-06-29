import React, { useState } from 'react';
import { PageBanner } from '../../components/PageBanner';

import { db } from '../../configs/firebase.config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import './styles.scss';

function Contact() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");


  const submitForm = async(event) => {
    event.preventDefault();
    
    try {
      const formDataJSON = {
        created: Timestamp.now()
      };

      const formData = new FormData(event.target);

      formData.forEach((value, key) => {
        formDataJSON[key] = value;
      });

      await addDoc(collection(db, 'contactFormSubmissions'), formDataJSON);
      
      document.location.reload();
      alert("Contact Form submitted successfully. Someone from our team will contact you shortly...")
    } catch(error) {
      console.log(error);
      alert("Oops, something went wrong!");
    }
  }

  const numberClickHandler = () => {
    document.location = "tel:+375292771265";
  }

  const emailClickHandler = () => {
    document.location = "mailto:contact@halacreativestudio.com";
  }


  return (
    <div className='section Contact'>
      <PageBanner 
        heading="Contact Us"
        videoUrl="https://res.cloudinary.com/sanket0700/video/upload/v1656333333/Contact_Banner_Video_wmt5j3.mp4"
      />
      <div className='contact-us-card-container'>
        <div className='contact-us-card'>
          <div className="contact-us-form-container">
            <div className='contact-us-heading'>
              Contact us
            </div>
            <div className='contact-us-description'>
              Looking to collaborate or want to design?<br />Get in touch to find out how we can help.
            </div>
            <form className='contact-us-form' autoComplete='on' onSubmit={(e) => submitForm(e)}>
              <label className='contact-us-form-field'>
                <div>
                  NAME
                </div>
                <input className='contact-us-text-field' type="text" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required/>
              </label>

              <label className='contact-us-form-field'>
                <div>
                  EMAIL ADDRESS
                </div>
                <input className='contact-us-text-field' type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </label>

              <label className='contact-us-form-field'>
                <div>
                  MESSAGE
                </div>
                <textarea name="message" maxLength="5000" placeholder="Hi there, I'm reaching out because I think we can collaborate..." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </label>
              <input className='contact-us-form-submit' type="submit" value="SUBMIT" />
            </form>
          </div>
          <div className='contact-us-variables-container'>
            <div className='contact-us-variables'>
              <div className='contact-us-contact-variable'>
                <div className='contact-variable-header'>
                  CONTACT
                </div>
                <div className='contact-variable-content'>
                  <div className='contact-variable-content-number' onClick={numberClickHandler}>
                    <img className='contact-variable-content-icon' src="https://res.cloudinary.com/sanket0700/image/upload/v1656481296/contact_kvjr2h.png" alt="Contact Number : " />+91 788 706 1880
                  </div>
                  <div className='contact-variable-content-email' onClick={emailClickHandler}>
                    <img className='contact-variable-content-icon' src="https://res.cloudinary.com/sanket0700/image/upload/v1656481296/mail_uhzkgi.png" alt="Email : " />contact@halacreativestudio.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact