import React from 'react';
import images from '../../constants/images'

import './AboutUs.css';

function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={ images.G } alt="g letter" />
      </div>
      <div className='app__aboutus-content flex__center' data-aos="fade-right" data-aos-duration="400">
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about spoon" className="spoon_img" />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
      <div className='app__aboutus-content_knife flex__center'  data-aos="fade-up" data-aos-duration="800">
        <img src={ images.knife } />
      </div>  
      <div className='app__aboutus-content flex__center' data-aos="fade-left" data-aos-duration="400">
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about spoon" className="spoon_img" />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
