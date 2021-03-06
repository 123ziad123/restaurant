import React from 'react';
import images from '../../constants/images';
import  SubHeading  from '../../components/SubHeading/SubHeading'
import './Header.css';

function Header() {

  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info' data-aos="fade-right" data-aos-duration="400">
        <SubHeading title="chase the new flavor" />
        <h1 className='app__header-h1'>The Key To Find Dining</h1>
        <p className='p__opensans' style={{ margin: "2rem 0" }}>
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper_img' data-aos="fade-left" data-aos-duration="400">
        <img src={ images.welcome } alt="header img"/>
      </div>
    </div>
  )
}

export default Header;
