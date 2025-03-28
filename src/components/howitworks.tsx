import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const slides = [Img2, Img1];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-[#cdcec9] ${isMobile ? 'py-16 pb-1' : 'py-32 h-[600px]'}`}>
        {!isMobile ? (
          // Desktop Version
          <>
            <div className="container mx-auto px-4 h-full">
              <div className="max-w-6xl h-full flex flex-col justify-center relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-6">
                  DISCOVER OUR STEP-BY-<br />
                  STEP PROCESS FOR PRECISE <br />
                  AND EFFECTIVE TREATMENT
                </h1>
                <button 
                  onClick={handleSubmitCase}
                  className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition-colors w-fit"
                >
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
          // Mobile Version
          <div className="flex flex-col " >
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center">
                <h5 className="text-2xl font-bold text-[#0c1152] mb-6">
                  DISCOVER OUR STEP-BY-STEP PROCESS FOR PRECISE AND EFFECTIVE TREATMENT
                </h5>
                <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-800 transition-colors w-full max-w-xs">
                  SUBMIT YOUR CASE
                </button>
              </div>
            </div>
            <div className=" mt-8 "style={{ marginLeft: '-193px', width:'142%' }}>
              <img
                src={ImgMobile}
                alt="Dental Tools"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Process Section (unchanged) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">HOW IT WORKS</h2>
            <p className="text-blue-950 uppercase tracking-wide">YOUR JOURNEY TO A PERFECT SMILE, STEP BY STEP</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <FileText className="w-10 h-10 text-[#0c1152]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">STEP 1: COLLECT RECORDS</h3>
              <p className="text-gray-600">
                We gather your CBCT files, STL/intraoral files as well as the prescription form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-[#0c1152]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">STEP 2: DIGITAL PLAN AND DESIGN CREATED</h3>
              <p className="text-gray-600">
                Using cutting-edge technology, we create a virtual, customized
                3D case, implant placement rendering ready for collaboration.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Stethoscope className="w-10 h-10 text-[#0c1152]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">STEP 3: EXPERT CLINICAL REVIEW</h3>
              <p className="text-gray-600">
                Our Professional team will go over the case evaluation and
                make all necessary adjustments if required.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <LightbulbIcon className="w-10 h-10 text-[#0c1152]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">STEP 4: APPROVAL & DELIVERY</h3>
              <p className="text-gray-600">
                Once approved, we print and ship your customized
                surgical guide with express delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implant Placement Technology Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 text-center mb-6">
              GUIDING IMPLANT PLACEMENT<br />
              WITH ADVANCED TECHNOLOGY
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A surgical guide is a custom-made 3D printed guide designed to enhance the accuracy and predictability of implant surgery. It serves as a 
              template that guides the precise placement of dental implants, ensuring optimal positioning, angulation, and depth. By utilizing the latest in 
              digital dentistry, surgical guides can be tailored to the unique anatomy of each patient, making implant procedures more efficient and successful.
            </p>

            {/* Image Carousel */}
            <div className="relative w-full h-[400px]">
              <div className="overflow-hidden rounded-lg shadow-lg h-full">
                <img
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0c1152]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                >
                  <ChevronRight className="w-5 h-5 text-[#0c1152]" />
                </button>
              </div>
              <div className="flex justify-center space-x-1 mt-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-[#0c1152]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <DentalLanding/>
    </div>
  );
}