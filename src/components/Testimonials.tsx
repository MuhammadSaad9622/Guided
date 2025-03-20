import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold text-center text-[#0c1152]  mb-12">
          TESTIMONIALS FROM SATISFIED DENTISTS
        </h2>
        
        <div className="relative mb-20">
          <div className="flex gap-6 items-stretch">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <ChevronLeft className="w-5 h-5 text-[#0c1152] " />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <div className="mb-4">
                  <h3 className="font-bold">DR. MICHAEL T., DDS</h3>
                  <div className="flex gap-1 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-gray-200">
                  "Guided Excellence has completely transformed my implant procedures. The guides are incredibly precise, and having Dr. Baghoomian review every case gives me total confidence in every surgery."
                </p>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <div className="mb-4">
                  <h3 className="font-bold">DR. SARAH L., DMD</h3>
                  <div className="flex gap-1 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-gray-200">
                  "The process is seamless, and the results are outstanding. My patients have had fewer complications, and my surgeries are more efficient than ever."
                </p>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-lg">
                <div className="mb-4">
                  <h3 className="font-bold">DR. ROBERT K., PROSTHODONTIST</h3>
                  <div className="flex gap-1 text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-gray-200">
                  "The best part? Dr. Baghoomian actually understands the clinical side of implantology, unlike most labs. His expertise makes all the difference."
                </p>
              </div>
              
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-[#0c1152] " />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-[#0c1152] "></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Testimonials;