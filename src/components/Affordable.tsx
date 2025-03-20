import React from 'react';

function Affordable () {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152]  mb-12">
          AFFORDABLE PRICING, EXCEPTIONAL VALUE
        </h2>

        {/* Main Description */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          At Guided4Excellence, we believe that high-quality surgical guides should be accessible to every dentist—without breaking the bank. Our 
          pricing is designed to be fair, transparent, and competitive, ensuring you receive the highest level of precision, expert oversight, and efficiency 
          at a cost that makes sense for your practice.
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
          By working directly with Dr. Zareh Baghoomian, you're not just purchasing a surgical guide—you're investing in clinical accuracy, reduced 
          surgical complications, and improved patient outcomes. Our streamlined digital workflow allows us to keep costs low while maintaining the 
          highest industry standards.
        </p>

        <p className="text-gray-700 mb-12 leading-relaxed">
          Whether you're handling simple cases or complex full-arch restorations, we offer pricing that delivers outstanding value without 
          compromising on quality.
        </p>

        {/* Benefits List */}
        <ul className="space-y-4 mb-12">
          <li className="text-gray-700">• No hidden fees.</li>
          <li className="text-gray-700">• Fast turnaround times.</li>
          <li className="text-gray-700">• Expert-reviewed for clinical precision.</li>
        </ul>

        {/* Bottom Text */}
        <p className="text-gray-700 mb-12 font-medium">
          Get the best in accuracy, efficiency, and affordability—because precision shouldn't come at a premium.
        </p>

        {/* CTA Button */}
        <button className="bg-[#0c1152]  text-white px-12 py-4 rounded-full text-lg font-medium tracking-wide hover:bg-navy-800 transition-colors">
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default Affordable;