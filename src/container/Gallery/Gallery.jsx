import React, { useRef } from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';

function Gallery() {
  
  const GalleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
  const GalleryImagesReversed = [images.gallery04, images.gallery03, images.gallery02, images.gallery01]

  const imgsContainer1 = useRef()
  const imgsContainer2 = useRef()
  
  window.onscroll = function () {
    let value = window.scrollY
    imgsContainer1.current.style.left = value / -6  + 'px'
    imgsContainer2.current.style.right = value / -6  + 'px'
  }
  
  
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '1rem' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit.</p>
        <button type='button' className='custom__button' style={{ marginBlock: '1rem 2rem' }}>View More</button>
      </div>
      <div className="app__gallery-imgs">
        <div className="app__gallery-imgs_container one" ref={imgsContainer1}>
          {GalleryImages.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
          {GalleryImages.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
          {GalleryImages.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
        </div>
        <div className="app__gallery-imgs_container two" ref={imgsContainer2}>
          {GalleryImagesReversed.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
          {GalleryImagesReversed.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
          {GalleryImagesReversed.map((img, index) => (
            <div className="app__gallery-imgs_card flex__center" key={index}>
              <img src={ img } alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery;
