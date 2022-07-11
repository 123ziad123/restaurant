import React from 'react';
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { images } from '../../constants';
import './Footer.css';

function Footer() {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />
      
      <div className="app__footer-links">
        <div className="app__footer-links_contact" data-aos="fade-up" data-aos-duration="400">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo" data-aos="fade-up" data-aos-duration="800">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans"><q>The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.</q></p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work" data-aos="fade-up" data-aos-duration="1200">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-friday:</p>
          <p className="p__opensans">08:00 Am - 12:00 Am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 Am - 11:00 Pm</p>
        </div>
      </div>
      <div className="footer__copyright" data-aos="fade-up" data-aos-duration="2000">
        <p className="p__opensans">2022 Ziad Amer. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer;
