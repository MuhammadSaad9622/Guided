import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopImg from '../Assets/home page- hero.png';
import MobileImg from '../Assets/Home Page.png';
import SubmitCase from './SubmitCase';

const Hero = () => {
  const [heroImage, setHeroImage] = useState(DesktopImg);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase'); // Navigate to submit case route
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setHeroImage(mobile ? MobileImg : DesktopImg);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section - Responsive height */}
      <div className="relative bg-[#cdcec9] overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[700px]">
        {/* Background Image with responsive negative margin */}
        <div className={`absolute ${isMobile ? '-mt-[80px]' : '-mt-[109px]'} inset-0 z-0`}>
          <img 
            src={heroImage}
            alt="Dental surgical guide"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c1152] mb-6 sm:mb-8 leading-tight mt-[100px] sm:mt-[120px] md:mt-[149px]">
              <span className="block">ENHANCE ACCURACY.</span>
              <span className="block">REDUCE COMPLICATIONS.</span>
              <span className="block">IMPROVE EFFICIENCY</span>
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

      {/* Expert-Guided Section */}
      <div className="bg-[#f9f9f9] py-12 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0c1152] mb-4">
            EXPERT-GUIDED PRECISION FOR<br className="hidden sm:block" />
            EVERY IMPLANT SURGERY
          </h2>
          <p className="text-xs sm:text-sm uppercase font-semibold text-gray-600 mb-6 sm:mb-8">
            DESIGNED BY A DENTIST WITH 20+ YEARS OF EXPERIENCE
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            At Guided Excellence, we don't just create surgical guides—we elevate implant surgical precision with expert-guided solutions. Every single case plan is reviewed and finalized by Dr. Zareh Baghoomian, a seasoned dentist with over 20 years of experience. His expertise ensures that each guide is tailored for optimal fit, accuracy, and surgical success—giving you the confidence to place implants with precision every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;