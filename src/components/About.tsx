import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pricing from './Pricing';
import Affordable from './Affordable';
import Testimonials from './Testimonials';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import Doctor from './Doctor';
import Values from './Values';
import ImgDesktop from '../Assets/About - hero.png';
import ImgMobile from '../Assets/About - hero.png';

const About = () => {
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
    <div>
      {/* Hero Section */}
      <div className={`relative bg-[#cdcec9] overflow-hidden ${isMobile ? '' : 'min-h-[400px] sm:min-h-[500px] md:min-h-[700px]'}`}>
        {/* For Desktop */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 z-0">
              <img 
                src={ImgDesktop}
                alt="Dental surgical guide"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-16 md:mt-[149px]">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
                  <span className="block">About Us – Who We</span>
                  <span className="block">Are & What We Do</span>
                </h1>
                <button 
                  onClick={handleSubmitCase}
                  className="w-full sm:w-fit px-6 py-3 sm:px-8 sm:py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase text-sm sm:text-base"
                >
                  Submit Your Case
                </button>
              </div>
              <div className="hidden md:block"></div>
            </div>
          </>
        )}

        {/* For Mobile - Stacked Layout */}
        {isMobile && (
          <div className="flex flex-col">
            <div className="flex flex-col justify-center p-6 sm:p-8 z-10">
              <h1 className="text-4xl font-bold text-[#0c1152] mb-8 leading-tight">
                <span className="block">About Us – Who We</span>
                <span className="block">Are & What We Do</span>
              </h1>
              <button className="w-full px-6 py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase text-sm">
                Submit Your Case
              </button>
            </div>
            <div className="w-full">
              <img 
                src={ImgMobile}
                alt="Dental surgical guide"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* About Section (unchanged from your original) */}
      <div className="bg-[#f8f8f8] py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-12">
            ABOUT GUIDED EXCELLENCE
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            At Guided Excellence, we specialize in expert-designed surgical guides that bring unmatched precision to dental implant procedures. Founded by Dr. Zareh Baghoomian, a practicing dentist with over 20 years of experience, our mission is to elevate implant success rates through clinically guided, technology-driven solutions.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Unlike generic lab-made guides, every case is personally reviewed by Dr. Baghoomian, ensuring that each guide is tailored for optimal fit, accuracy, and patient safety. Our streamlined digital workflow and advanced 3D technology make implant procedures simpler, safer, and more predictable for dentists at every experience level.
          </p>

          <ul className="space-y-4 mb-12">
            <li className="text-gray-700">• Designed by a Dentist, Not Just a Lab</li>
            <li className="text-gray-700">• Precision, Efficiency & Predictability.</li>
            <li className="text-gray-700">• Trusted by Dentists Nationwide</li>
          </ul>

          <p className="text-gray-700 mb-12 font-medium">
            Experience the difference of expert-guided precision.
          </p>
        </div>
      </div>

      <Values />
      <Doctor />
      <Testimonials />
      <DentalLanding />
    </div>
  );
};

export default About;