import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "DR. MICHAEL T., DDS",
    rating: 5,
    text: "Guided Excellence has completely transformed my implant procedures. The guides are incredibly precise, and having Dr. Baghoomian review every case gives me total confidence in every surgery."
  },
  {
    name: "DR. SARAH L., DMD",
    rating: 5,
    text: "The process is seamless, and the results are outstanding. My patients have had fewer complications, and my surgeries are more efficient than ever."
  },
  {
    name: "DR. ROBERT K., PROSTHODONTIST",
    rating: 5,
    text: "The best part? Dr. Baghoomian actually understands the clinical side of implantology, unlike most labs. His expertise makes all the difference."
  },
  {
    name: "DR. JENNIFER M., DDS",
    rating: 5,
    text: "The accuracy of the surgical guides has reduced my chair time significantly. My patients experience less discomfort post-op."
  },
  {
    name: "DR. DAVID P., ORAL SURGEON",
    rating: 5,
    text: "I've worked with many labs, but Guided Excellence stands out for their attention to detail and clinical expertise."
  },
  {
    name: "DR. LISA W., DMD",
    rating: 5,
    text: "The communication is excellent, and turnaround times are consistently faster than promised."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex >= testimonials.length - 3 ? 0 : prevIndex + 1;
      }
    });
  };

  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]]
    : testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-center text-[#0c1152] mb-12">
          TESTIMONIALS FROM SATISFIED DENTISTS
        </h2>

        <div className="relative mb-20">
          <div className="flex items-center justify-center relative">
            {/* Backward Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center md:-translate-x-4 z-10"
            >
              <ChevronLeft className="w-5 h-5 text-[#0c1152]" />
            </button>

            {/* Testimonial Cards */}
            <div className="w-full flex justify-center overflow-hidden">
              <div className={`flex ${isMobile ? 'justify-center' : 'justify-start'} gap-6 transition-transform duration-300 ease-in-out`}>
                {visibleTestimonials.map((testimonial, index) => (
                  <div 
                    key={`${currentIndex}-${index}`} 
                    className={`bg-blue-900 text-white p-8 rounded-lg ${isMobile ? 'w-full max-w-md' : 'w-full min-w-[calc(33.333% - 1.5rem)] max-w-[calc(33.333% - 1.5rem)]'}`}
                  >
                    <div className="mb-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <div className="flex gap-1 text-yellow-400">
                        {'★'.repeat(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-200">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Forward Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center md:translate-x-4 z-10"
            >
              <ChevronRight className="w-5 h-5 text-[#0c1152]" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(isMobile ? index : index * 3)}
                className={`w-3 h-3 rounded-full transition-all ${(isMobile ? index === currentIndex : Math.floor(currentIndex / 3) === index) ? "bg-[#0c1152] w-4" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <br></br>
    </div>

  );
};

export default Testimonials;