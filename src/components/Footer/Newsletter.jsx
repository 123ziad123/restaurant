import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="app__newsletter"  data-aos="zoom-in" data-aos-duration="400">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates! </p>
      </div>
      
      <div className="app__newsletter-input flex__Center">
        <input type='email' placeholder='Enter Your Email Adress' />
        <button className="custom__button">Subscript</button>
      </div>
      
    </div>
  )
}

export default Newsletter;
