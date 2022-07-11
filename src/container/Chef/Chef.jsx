import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components'
import './Chef.css';


function Chef() {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse" data-aos="fade-right" data-aos-duration="400">
        <img src={ images.chef }  alt="chef img"/>
      </div>
      <div className="app__wrapper_info" data-aos="fade-left" data-aos-duration="400">
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>
        
        <div className="app__chef-content">
          <div className="app__chef-content_quot">
            <img src={images.quote} alt="quot img" className='quote-image'/>
            <p className="p__opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.
            </p>
          </div>
        </div>
        
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef &amp; Founder</p>
          <img src={ images.sign } alt='sign' />
        </div>
        
      </div>
    </div>
  )
}

export default Chef;
