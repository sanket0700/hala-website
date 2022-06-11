import React, { useState } from 'react';
import { PageBanner } from '../../components/PageBanner';

import './styles.scss';

function Contact() {

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("")

  return (
    <div className='section Contact'>
      <PageBanner 
        heading="Contact Us"
      />
      <div className='contact-us-card-container'>
        <div className='contact-us-card'>
          <div className="contact-us-form-container">
            <div className='contact-us-heading'>
              Contact us
            </div>
            <div className='contact-us-description'>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </div>
            <form className='contact-us-form' autoComplete='on'>
              <label className='contact-us-form-field'>
                <div>
                  NAME
                </div>
                <input className='contact-us-text-field' type="text" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
              </label>

              <label className='contact-us-form-field'>
                <div>
                  EMAIL ADDRESS
                </div>
                <input className='contact-us-text-field' type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
                  <div className='contact-variable-content-email'>
                    contact@business.com
                  </div>
                  <div className='contact-variable-content-number'>
                    01 (650) 658 6822
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