import React from 'react';
import './style.css';

const ImageBox = () => {
  return (<section className='imagebox'>
    <div>
      <img src={require('../../asset/classic-tee.jpg')} alt='Cloth'/>
    </div>
  </section>);
}

export default ImageBox;