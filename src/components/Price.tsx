import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pricing from './Pricing';
import Affordable from './Affordable';
import Testimonials from './Testimonials';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import Whyweuse from './whyweuse';
import ImgDesktop from '../Assets/Pricing - hero.png';
import ImgMobile from '../Assets/Pricing.png';

const Price = () => {
  const [heroImage, setHeroImage] = useState(ImgDesktop);
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase'); // Navigate to submit case route
  };

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
      <div className="relative bg-[#cdcec9] overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[700px]">
        {/* Background Image with responsive negative margin */}
        <div className={`absolute inset-0 z-0`}>
          <img 
            src={heroImage}
            alt="Dental surgical guide"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-16 md:mt-[149px]">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
              <span className="block">Transparent and </span>
              <span className="block">Affordable Pricing</span>
            </h1>
            <button 
              onClick={handleSubmitCase}
              className="w-full sm:w-fit px-6 py-3 sm:px-8 sm:py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase text-sm sm:text-base"
            >
              Submit Your Case
            </button>
          </div>
          
          {/* Empty column for desktop layout */}
          <div className="hidden md:block"></div>
        </div>
      </div>

      <Pricing />
      <Affordable />
      <Testimonials />
      <FAQ />
      <DentalLanding />
    </div>
  );
};

export default Price;