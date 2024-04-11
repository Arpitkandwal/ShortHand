import React, { useRef, useState, useEffect } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const aboutUsSection = document.getElementById('AboutUs');
      if (aboutUsSection) {
        const aboutUsOffset = aboutUsSection.offsetTop;
        const windowHeight = window.innerHeight;
        setIsScrolled(scrollTop > aboutUsOffset - windowHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const isScrolled = useScroll();

  return (
    <section
      id='AboutUs'
      ref={aboutUsRef}
      className={`container-fluid px-0 mb-40 ${isScrolled ? 'animate-section' : ''}`}
      style={{ maxWidth: '100%', overflowX: 'hidden' }}
    >
      <div className="row">
        <div className="col-md-6 order-md-1 animate-left">
          <div className="image-container">
            <img src="/image5.jpg" alt="" className="img-fluid ml-20 mt-20 zoom-effect" width={700} />
          </div>
        </div>
        <div className="col-md-6 order-md-2 animate-right">
          <div className="row justify-content-center">
            <div className="about-us-us col-12 col-lg-8 blurb mb-5 mb-md-0">
              <h2 className='text-black font-bold text-2xl mb-2 mt-20 underline'>About Us</h2>
              <p className="lead">At the Steno-type Institute, you will learn court reporting, closed captioning, cyber conferencing and more with the skills you need for a successful career. Our talented expert, well-experienced and highly qualified teachers will lead you towards success. Your future is at your fingertips at the Steno-type institute like ours.

              We trust that expert achievement relies upon individual trustworthiness, devotion to a solid hard working attitude and a solid, proceeding with instruction in the present quick-paced universe of fast innovative and social change. Our rationality thus prompts a state of mind of seeking after a profession described by intentional and remunerating work. This disposition grasps a guarantee to a control to gain the information and abilities that will empower every individual to ace his or her calling, which thus will prompt an individual fulfillment that one gets from a vocation well done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
