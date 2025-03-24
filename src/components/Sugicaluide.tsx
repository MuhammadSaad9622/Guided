import React, { useState, useEffect } from 'react';
import SurgicalGuide from './SurgicalGuide';
import Benefits from './Benefits';
import Sugic from './Sugic';
import Pricing from './Pricing';
import { DentalLanding } from './DentalLanding';
import ImgDesktop from '../Assets/Surgical Guides -hero.png';
import ImgMobile from '../Assets/Surgical Guides.png'; // Mobile version image

function SurgicalGuideComponent() {
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
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#cdcec9] relative min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 max-w-9xl mx-auto">
        {/* Left Content Section */}
        <div><br></br><br></br></div>
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-[#0c1152] text-lg md:text-xl font-medium tracking-wide">
            WELCOME TO THE WORLD OF
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c1152] tracking-tight">
            ADVANCED DENTAL<br />TECHNOLOGY!
          </h1>
          <button className="bg-blue-950 text-white px-6 py-2.5 rounded-md text-sm font-medium tracking-wide hover:bg-navy-800 transition-colors mt-6">
            SUBMIT YOUR CASE
          </button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-2/5 w-full flex justify-end">
          <img 
            src={heroImage} 
            alt="Dental Technology" 
            className="object-contain h-[110vh] md:h-[70vh] w-full max-w-[600px]" 
          />
        </div>
      </div>

      {/* Surgical Guide Section */}
      <SurgicalGuide />

      {/* Benefits Section */}
      <Benefits />

      {/* Sugic Section */}
      <Sugic />

      {/* Pricing Section */}
      <Pricing />

      {/* Dental Landing Section */}
      <DentalLanding />
    </div>
  );
}

export default SurgicalGuideComponent;
