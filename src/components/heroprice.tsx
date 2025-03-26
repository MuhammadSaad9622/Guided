import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../Assets/Capt.png';

function HeroPrice() {
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase'); // Navigate to submit case route
  };

  const handleCheckPricing = () => {
    navigate('/Price'); // Navigate to pricing route
  };

  return (
    <div className="min-h-screen bg-[white]">
      <div className="w-full">
        <div className="bg-[#f8f8f8]">
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <div className="p-8 lg:p-16 md:w-1/2 flex flex-col justify-center space-y-6">
              <h1 className="text-[2.5rem] leading-tight font-bold text-[#0c1152]">
                GUIDE PLANS STARTING AS
                <br />
                <span className="text-[#0c1152]">LOW AS $150</span>
              </h1>
              
              <p className="text-[#0c1152]">
                Ready to achieve unmatched precision in implant placement?
              </p>
              <p className="text-[#0c1152] font-semibold">
                Experience the difference of expert-guided surgical guides.
              </p>
              <div className="flex gap-8 mt-2">
                <p className="text-[#0c1152]">Get started in minutes.</p>
                <p className="text-[#0c1152]">Transparent & Affordable</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button 
                  onClick={handleSubmitCase}
                  className="bg-[#0c1152] text-white px-6 py-3 rounded font-semibold hover:bg-gray-300 transition-colors"
                >
                  SUBMIT A CASE
                </button>
                <button 
                  onClick={handleCheckPricing}
                  className="bg-[#0c1152] text-white px-6 py-3 rounded font-semibold hover:bg-gray-300 transition-colors"
                >
                  CHECK PRICING
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="md:w-1/2 bg-white">
              <img 
                src={Img}
                alt="Dental surgical guide" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPrice;