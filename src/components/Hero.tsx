import React, { useState, useEffect } from 'react';
import DesktopImg from '../Assets/home page- hero.png';
import MobileImg from '../Assets/Home Page.png';

const Hero = () => {
  const [heroImage, setHeroImage] = useState(DesktopImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHeroImage(MobileImg);
      } else {
        setHeroImage(DesktopImg);
      }
    };

    handleResize(); // Set initial image based on screen width
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#cdcec9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
              <span className="block">ENHANCE ACCURACY.</span>
              <span className="block">REDUCE COMPLICATIONS.</span>
              <span className="block">IMPROVE EFFICIENCY</span>
            </h1>
            <button className="w-fit px-8 py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase">
              Submit Your Case
            </button>
          </div>
          <div className="relative h-[500px] md:h-full">
            <img 
              src={heroImage}
              alt="Dental surgical guide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Expert-Guided Section */}
      <div className="bg-[#f9f9f9] py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-4">
            EXPERT-GUIDED PRECISION FOR<br />
            EVERY IMPLANT SURGERY
          </h2>
          <p className="text-sm uppercase font-semibold text-gray-600 mb-8">
            DESIGNED BY A DENTIST WITH 20+ YEARS OF EXPERIENCE
          </p>
          <p className="text-gray-700 leading-relaxed">
            At Guided Excellence, we don't just create surgical guides—we elevate implant surgical precision with expert-guided solutions. Every single case plan is reviewed and finalized by Dr. Zareh Baghoomian, a seasoned dentist with over 20 years of experience. His expertise ensures that each guide is tailored for optimal fit, accuracy, and surgical success—giving you the confidence to place implants with precision every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
