import React, { useState, useEffect } from 'react';
import { FileText, Monitor, Stethoscope, LightbulbIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import ImgDesktop from '../Assets/How It Works - hero.png';
import ImgMobile from '../Assets/How_It_Works-removebg-preview.png'; // Mobile version of the image
import Img1 from '../Assets/1.png';
import Img2 from '../Assets/2.png';

export function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImage, setHeroImage] = useState(ImgDesktop);

  const slides = [Img2, Img1];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setHeroImage(ImgMobile);
      } else {
        setHeroImage(ImgDesktop);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    
    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-[#cdcec9] py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0c1152]  mb-6">
              DISCOVER OUR STEP-BY-<br />
              STEP PROCESS FOR PRECISE <br />
              AND EFFECTIVE TREATMENT
            </h1>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition-colors">
              SUBMIT YOUR CASE
            </button>
          </div>
          <img
            src={heroImage}
            alt="Dental Tools"
            className="absolute right-0 top-0 h-full w-1/2 md:w-1/2 object-cover opacity-90"
          />
        </div>
      </section>

      {/* Other Sections Remain the Same */}

 


      {/* FAQ Section */}
      <FAQ /> {/* Add the FAQ component here */}
       

       {/* DENTAL Section */}
     <DentalLanding/>

      
    </div>
  );
}