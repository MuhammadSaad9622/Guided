import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopImg from '../Assets/home page- hero.png';
import MobileImg from '../Assets/home page- hero.png';

const Hero = () => {
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className={`relative bg-[#cdcec9] overflow-hidden ${isMobile ? 'pb-0' : 'min-h-[500px] md:min-h-[700px]'}`}>
        {/* Desktop Version */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 z-0">
              <img 
                src={DesktopImg}
                alt="Dental surgical guide"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-8 md:p-16 md:mt-[149px]">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
                  <span className="block">ENHANCE ACCURACY.</span>
                  <span className="block">REDUCE COMPLICATIONS.</span>
                  <span className="block">IMPROVE EFFICIENCY</span>
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
              <h1 className="text-2xl font-bold text-[#0c1152] leading-tight">
                <span className="block">ENHANCE ACCURACY.</span>
                <span className="block">REDUCE COMPLICATIONS.</span>
                <span className="block">IMPROVE EFFICIENCY</span>
              </h1>
              <button 
                onClick={handleSubmitCase}
                className="w-full bg-[#0c1152] text-white px-8 py-3 rounded-md text-base font-medium hover:bg-blue-900 transition-colors"
              >
                Submit Your Case
              </button>
            </div>
            <div className="mt-4" style={{ marginLeft: '-70%', width: '175%' }}>
              <img 
                src={MobileImg}
                alt="Dental surgical guide"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* Expert-Guided Section */}
      <div className="bg-[#f9f9f9] py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#0c1152] mb-4 text-center md:text-left">
            EXPERT-GUIDED PRECISION FOR<br className="hidden md:block" />
            EVERY IMPLANT SURGERY
          </h2>
          <p className="text-xs md:text-sm uppercase font-semibold text-gray-600 mb-4 md:mb-6 text-center">
            DESIGNED BY A DENTIST WITH 20+ YEARS OF EXPERIENCE
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
            At Guided Excellence, we don't just create surgical guides—we elevate implant surgical precision with expert-guided solutions. Every single case plan is reviewed and finalized by Dr. Zar[...]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;