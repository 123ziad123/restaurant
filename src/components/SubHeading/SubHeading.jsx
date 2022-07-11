import React from 'react';
import images from '../../constants/images';

function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }} data-aos="fade-down" data-aos-duration="400">
      <p className='p__cormorant'>{ title }</p>
      <img src={ images.spoon } className="spoon__img" alt="spoon"/>
    </div>
  )
}

export default SubHeading;
