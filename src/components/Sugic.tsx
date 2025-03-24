import React from 'react';
import Img1 from '../Assets/home page- hero.png';

function Sugic() {
  return (
    <div className="min-h-screen bg-[#cdcec9] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-16">
          {/* Left Content Section */}
          <div className="max-w-lg">
            <h2 className="text-[#0A1045] text-4xl font-bold mb-4">
              GUIDE PLANS STARTING AS LOW AS $150
            </h2>
            <p className="text-[#0A1045] mb-2">
              Ready to achieve unmatched precision in implant placement?
            </p>
            <p className="text-[#0A1045] font-medium mb-8">
              Experience the difference of expert-guided surgical guides.
            </p>
            <p className="text-gray-600 mb-6">
              Get started in minutes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0A1045] text-white px-6 py-2.5 rounded hover:bg-[#0A1045]/90 transition-colors">
                SUBMIT A CASE
              </button>
              <button className="bg-transparent border-2 border-[#0A1045] text-[#0A1045] px-6 py-2.5 rounded hover:bg-[#0A1045]/5 transition-colors">
                BOOK A CALL
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src={Img1} 
              alt="Dental Technology" 
              className="object-contain w-full max-w-[600px] h-auto" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sugic;
