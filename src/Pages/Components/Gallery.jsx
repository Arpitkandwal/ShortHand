import React from 'react';

const Gallery = () => {
  return (
    <div id='Gallery' className="image-carousel animate-top mb-40">
      <h1 className='text-center font-bold text-2xl underline'>Gallery</h1>
      <div className="image-container mb-10">
        <img className='gallery zoom-effect' src="/image1.jpg" alt="" />
        <img className='gallery zoom-effect' src="/image2.jpg" alt="" />
        <img className='gallery zoom-effect' src="/image4.jpg" alt="" />
        <img className='gallery zoom-effect' src="/image5.jpg" alt="" />
        <img className='gallery zoom-effect' src="/image6.jpg" alt="" />
        <img className='gallery zoom-effect' src="/image1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Gallery;
