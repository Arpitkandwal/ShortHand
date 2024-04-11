import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Slider = () => {
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ['Sarthak Shorthand'],
            startDelay: 300,
            typeSpeed: 20,
            loop: true,
            showCursor: false,
            backSpeed: 50,
            backDelay: 150,
            smartBackspace: true
          });
      
          return () => {
            typed.destroy();
          };
    }, []);

  return (
    <div id='Slider' className="carousel-container mb-5">
      <h1 className="typed-heading">Welcome To <span ref={el}></span></h1>
      <h2 className="typed-heading1">We are the premier institute for learning Hindi and English Shorthand <span className='ml-16'>for all Central & State Governments Competitive Exams.</span></h2>
      <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image6.jpg" className="d-block w-100 opacity-90" alt="..." style={{ width: '800px', height: '730px' }} />
          </div>
          <div className="carousel-item">
            <img src="/image4.jpg" className="d-block w-100 opacity-90" alt="..." style={{ width: '800px', height: '730px' }} />
          </div>
          <div className="carousel-item">
            <img src="/image1.jpg" className="d-block w-100 opacity-90" alt="..." style={{ width: '800px', height: '730px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
