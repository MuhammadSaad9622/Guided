import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SurgicalGuide from './SurgicalGuide';
import Benefits from './Benefits';
import Pricing from './Pricing';
import { DentalLanding } from './DentalLanding';
import ImgDesktop from '../Assets/Surgical Guides -hero.png';
import ImgMobile from '../Assets/Surgical Guides -hero.png';
import HeroPrice from './heroprice';

function SurgicalGuideComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase'); // Navigate to submit case route
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
      <div className={`relative bg-[#cdcec9] overflow-hidden ${isMobile ? 'pb-8' : 'min-h-[200px] sm:min-h-[500px] md:min-h-[700px]'}`}>
        
        {/* Desktop Version (unchanged) */}
        {!isMobile && (
          <>
            <div className={`absolute inset-0 z-0 md:mt-[-149px]`}>
              <img 
                src={ImgDesktop}
                alt="Dental surgical guide"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="md:w-1/2 text-center md:text-left space-y-4 md:mt-[189px] md:ml-[170px]">
                <h2 className="text-[#0c1152] text-lg md:text-xl font-medium tracking-wide">
                  WELCOME TO THE WORLD OF
                </h2>
                <h1 className="whitespace-nowrap text-2xl md:text-4xl lg:text-4xl font-bold text-[#0c1152] tracking-tight">
                  ADVANCED DENTAL TECHNOLOGY!
                </h1>
                <button 
                  onClick={handleSubmitCase}
                  className="bg-blue-950 text-white px-8 py-3 rounded-md text-base font-medium tracking-wide hover:bg-blue-900 transition-colors mt-8"
                >
                  SUBMIT YOUR CASE
                </button>
              </div>
              
              <div className="hidden md:block"></div>
            </div>
          </>
        )}

        {/* Mobile Version with image at bottom */}
        {isMobile && (
          <div className="flex flex-col">
            <div className="p-6 text-center space-y-4">
              <h2 className="text-[#0c1152] text-lg font-medium tracking-wide">
                WELCOME TO THE WORLD OF
              </h2>
              <h1 className="text-2xl font-bold text-[#0c1152] tracking-tight">
                ADVANCED DENTAL TECHNOLOGY!
              </h1>
              <button 
                onClick={handleSubmitCase}
                className="w-full bg-blue-950 text-white px-8 py-3 rounded-md text-base font-medium tracking-wide hover:bg-blue-900 transition-colors mt-4"
              >
                SUBMIT YOUR CASE
              </button>
            </div>
            <div className="w-full mt-4">
              <img 
                src={ImgMobile}
                alt="Dental surgical guide"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Rest of the components remain unchanged */}
      <SurgicalGuide />
      <Benefits />
      <HeroPrice />
      <Pricing />
      <DentalLanding />
    </div>
  );
}

export default SurgicalGuideComponent;