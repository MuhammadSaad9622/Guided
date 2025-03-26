import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Img from '../Assets/1.png';
import Img1 from '../Assets/2.png';
import Img2 from '../Assets/3.png';

const images = [
  {
    url: Img,  // Removed the curly braces - this was the main issue
    alt: "Dental implant guide markers"
  },
  {
    url: Img1,
    alt: "Dental X-ray scan"
  },
  {
    url: Img2,
    alt: "Dental implant guide model"
  }
];

function SurgicalGuide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Introduction Text */}
        <p className="text-gray-700 text-center mb-12 leading-relaxed">
          As a dentist, you strive to provide the highest standard of care to your patients, especially when it comes to implant surgery. We understand 
          the challenges you face during these procedures, which is why we are delighted to introduce you to the benefits of using surgical guides.
        </p>

        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#0c1152] mb-4">
            WHAT IS A SURGICAL GUIDE?
          </h2>
          <p className="text-[#0c1152] font-medium tracking-wide">
            GUIDING IMPLANT PLACEMENT WITH ADVANCED TECHNOLOGY
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-center mb-12 leading-relaxed">
          A surgical guide is a custom-made, 3D printed guide designed to enhance the accuracy and predictability of implant surgery. It serves as a 
          template that guides the precise placement of dental implants, ensuring optimal positioning, angulation, and depth. By utilizing the latest in 
          digital dentistry, surgical guides are tailored to the unique anatomy of each patient, making implant procedures more efficient and successful.
        </p>

        {/* Image Carousel */}
        <div className="relative">
          <div className="overflow-hidden relative h-[300px] md:h-[400px]">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.url}  // Fixed the src attribute
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg"  // Changed to object-contain for better image display
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#0c1152]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#0c1152]" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-[#0c1152]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurgicalGuide;