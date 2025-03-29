import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import Footer from './Footer';
import ImgDesktop from '../Assets/Contact Us - hero.png';
import ImgMobile from '../Assets/Contact Us - hero.png';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase');
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className={`relative bg-[#cdcec9] overflow-hidden ${isMobile ? 'pb-0' : 'min-h-[500px] md:min-h-[700px]'}`}>
        
        {/* Desktop Version */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 z-0">
              <img 
                src={ImgDesktop}
                alt="Contact Us Hero"
                className="w-full h-full object-cover object-right"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-8 md:p-16 md:mt-[149px]">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
                  <span className="block">Contact Us –</span>
                  <span className="block">We're Here to Help</span>
                </h1>
                <button 
                  onClick={handleSubmitCase}
                  className="w-fit px-8 py-3 bg-[#0c1152] text-white rounded-md font-semibold hover:bg-navy-800 uppercase text-base"
                >
                  Submit Your Case
                </button>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </>
        )}

        {/* Mobile Version */}
        {isMobile && (
          <div className="flex flex-col">
            <div className="p-6 text-center space-y-4">
              <h1 className="text-3xl font-bold text-[#0c1152] leading-tight">
                <span className="block">Contact Us –</span>
                <span className="block">We're Here to Help</span>
              </h1>
              <button 
                onClick={handleSubmitCase}
                className="w-full bg-[#0c1152] text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-900 transition-colors"
              >
                Submit Your Case
              </button>
            </div>
            <div className="mt-4" style={{ marginLeft: '-25%', width: '150%' }}>
              <img 
                src={ImgMobile}
                alt="Contact Us Hero"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Form Section */}
      <div className="bg-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Form />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;