import React from 'react';

const Contact = () => {
  return (
    <>
    <div id='Contact' className="main" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <h2 className='font-bold text-center text-2xl mb-5 underline animate-top'>Contact Us</h2>
      </div>
      <section className="container-fluid px-0" 
      style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <div className="row">
    <div id='Contact' className='contact-container contact animate-left'>
      <h2 className='font-bold underline'>Contact Info</h2>
      <div className='contact-info zoom-effect'>
        <div className='info-item'>
          <img src="/location.png" alt="" />
          <span>Sarthak Shorthand Institute <br />Simmalchaur Kotdwar, near Civil Court</span>
        </div>
        <div className='info-item'>
          <img src="/email.jpg" alt="" />
          <span>Email: example@example.com</span>
        </div>
        <div className='info-item'>
          <img src="/mobile.png" alt="" />
          <span>Mobile: +917310699107, 8077307550</span>
        </div>
      </div>
    </div>
    <div className="map-div col-md-6 order-md-2">
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.11766199314!2d78.51723447504985!3d29.74530773268273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39097d000951849b%3A0x4f87d53d29abca6d!2sSarthak%20Shorthand%20Kotdwara!5e0!3m2!1sen!2sin!4v1712831942386!5m2!1sen!2sin"
              width="80%"
              height={400}
              title= 'map'
              className='animate-left ml-40'
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
    </div>
    </div>
    </section>
    </>
  );
};

export default Contact;
