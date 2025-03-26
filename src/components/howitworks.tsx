import React, { useState, useEffect } from 'react';
import { FileText, Monitor, Stethoscope, LightbulbIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import ImgDesktop from '../Assets/How It Works - hero.png';
import ImgMobile from '../Assets/How It Works - hero.png';
import Img1 from '../Assets/1.png';
import Img2 from '../Assets/2.png';

export function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [Img2, Img1];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-[#cdcec9] ${isMobile ? 'py-8 h-auto' : 'py-32 h-[600px]'}`}>
        {!isMobile ? (
          // Desktop Version (unchanged)
          <>
            <div className="container mx-auto px-4 h-full">
              <div className="max-w-6xl h-full flex flex-col justify-center relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-6">
                  DISCOVER OUR STEP-BY-<br />
                  STEP PROCESS FOR PRECISE <br />
                  AND EFFECTIVE TREATMENT
                </h1>
                <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition-colors w-fit">
                  SUBMIT YOUR CASE
                </button>
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#cdcec9] via-[#cdcec9]/70 to-transparent z-0"></div>
                <img
                  src={ImgDesktop}
                  alt="Dental Tools"
                  className="absolute right-[153px] top-0 h-full w-auto max-w-[50%] object-cover object-right"
                />
              </div>
            </div>
          </>
        ) : (
          // Mobile Version with reduced height
          <div className="flex flex-col h-full">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center pt-4 pb-6">
                <h1 className="text-2xl font-bold text-[#0c1152] mb-4">
                  DISCOVER OUR STEP-BY-STEP PROCESS FOR PRECISE AND EFFECTIVE TREATMENT
                </h1>
                <button className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-navy-800 transition-colors w-full max-w-xs text-sm">
                  SUBMIT YOUR CASE
                </button>
              </div>
            </div>
            <div className="w-full h-[200px] overflow-hidden">
              <img
                src={ImgMobile}
                alt="Dental Tools"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Rest of the components remain unchanged */}
      <section className="py-20">
        {/* ... existing process section ... */}
      </section>

      <section className="py-20 bg-white">
        {/* ... existing technology section ... */}
      </section>

      <FAQ />
      <DentalLanding/>
    </div>
  );
}