import React, { useState } from 'react';
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
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
              className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center md:-translate-x-4"
            >
              <ChevronLeft className="w-5 h-5 text-[#0c1152]" />
            </button>

            {/* Testimonial Cards */}
            <div className="w-full flex justify-center overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-blue-900 text-white p-8 rounded-lg min-w-full md:min-w-[30%]">
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
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center md:translate-x-4"
            >
              <ChevronRight className="w-5 h-5 text-[#0c1152]" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-[#0c1152]" : "bg-gray-300"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
