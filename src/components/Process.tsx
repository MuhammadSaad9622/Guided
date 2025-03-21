import React from 'react';
import { FolderUp, Calendar, CheckCircle } from 'lucide-react';
import Img from '../Assets/home page- hero.png';

const Process = () => {
  return (
    <div className="bg-blue-900 text-white">
      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">OUR SIMPLE 3-STEP PROCESS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <FolderUp className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">UPLOAD YOUR CASE</h3>
            <p className="text-gray-300">
              Securely submit your patient's case in just a few clicks.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Calendar className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">SCHEDULE A CONSULTATION</h3>
            <p className="text-gray-300">
              Discuss your case with Dr. Baghoomian for expert clinical insights.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-2">PRINT & SHIP</h3>
            <p className="text-gray-300">
              Receive your customized guide, ready for a seamless procedure.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-white text-[#0c1152]  rounded-full font-semibold hover:bg-gray-100">
            GET STARTED
          </button>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white text-[#0c1152]  py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            WHY CHOOSE GUIDED EXCELLENCE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 10v2c0 3.87-3.13 7-7 7s-7-3.13-7-7v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Designed by a Dentist</h3>
                <p className="text-gray-600">Every guide plan is reviewed and finalized by Dr. Baghoomian, ensuring clinical accuracy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Seamless Digital Workflow</h3>
                <p className="text-gray-600">Easy case submission, quick turnaround times, and direct clinical guidance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Customized for Your Success</h3>
                <p className="text-gray-600">Tailored to your patient's specific anatomy for precise and predictable implant placement.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-4 rounded-full">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Faster, Safer Procedures</h3>
                <p className="text-gray-600">Reduce chair time and surgical risks with expertly designed guides.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
{/* Pricing Section */}
<div className="bg-[#cdcec9] max-w-7xl mx-auto px-6 rounded-lg px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
  <div>
    <h2 className="text-3xl font-bold mb-3">GUIDE PLANS STARTING AS<br />LOW AS $150</h2>
    <p className="mb-3">Ready to achieve unmatched precision in implant placement?</p>
    <p className="text-[#0c1152]  font-semibold mb-4">Experience the difference of expert-guided surgical guides.</p>
    <div className="flex gap-3">
      <button className="px-5 py-2 bg-[#0c1152]  text-white rounded-full font-semibold hover:bg-navy-800">
        SUBMIT A CASE
      </button>
      <button className="px-5 py-2 border-2 border-navy-900 text-[#0c1152]  rounded-full font-semibold hover:bg-navy-50">
        CHECK PRICING
      </button>
    </div>
  </div>
  <div className="relative h-[200px] md:h-[250px]">
    <img 
      src={Img}
      alt="Dental surgical guide"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default Process;