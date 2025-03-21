import React, { useState, useEffect } from 'react';
import Form from './Form';
import Footer from './Footer';

import ImgDesktop from '../Assets/Contact Us - hero.png';
import ImgMobile from '../Assets/Contact.png'; // Mobile image

const Contact = () => {
  const [heroImage, setHeroImage] = useState(ImgDesktop);

  useEffect(() => {
    const updateImage = () => {
      setHeroImage(window.innerWidth < 768 ? ImgMobile : ImgDesktop);
    };

    updateImage(); // Set initial image based on screen size
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#cdcec9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
              <span className="block">Contact Us –</span>
              <span className="block">We're Here to Help</span>
            </h1>
            <button className="w-fit px-8 py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase">
              Submit Your Case
            </button>
          </div>
          <div className="relative h-[400px] md:h-full">
            <img 
              src={heroImage}
              alt="Contact Us Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
