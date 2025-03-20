import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Banner */}
       

        {/* Meet the Doctor */}
       

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#0c1152]  mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4">
            <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-navy-900 transition-colors">
              <span className="font-medium text-left">What is a dental implant surgical guide?</span>
              <ChevronDown className="w-5 h-5 text-[#0c1152] " />
            </button>
            <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-navy-900 transition-colors">
              <span className="font-medium text-left">Why should I use a guided approach for implant placement?</span>
              <ChevronDown className="w-5 h-5 text-[#0c1152] " />
            </button>
            <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-navy-900 transition-colors">
              <span className="font-medium text-left">How long does it take to receive my surgical guide?</span>
              <ChevronDown className="w-5 h-5 text-[#0c1152] " />
            </button>
            <button className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-navy-900 transition-colors">
              <span className="font-medium text-left">How is Guided Excellence different from other surgical guide providers?</span>
              <ChevronDown className="w-5 h-5 text-[#0c1152] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;