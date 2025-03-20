import React from 'react';
import Pricing from './Pricing';
import Affordable from './Affordable';
import Testimonials from './Testimonials';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import Blogpage from './Blogpage';
import Doctor from './Doctor';

import Values from './Values';

import Img from '../Assets/14.png';
const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#cdcec9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152]  mb-8 leading-tight">
              <span className="block">About Us – Who We </span>
              <span className="block">Are & What We Do </span>
            
             
            </h1>
            <button className="w-fit px-8 py-3 bg-[#0c1152]  text-white rounded-full font-semibold hover:bg-navy-800 uppercase">
              GET STARTED
            </button>
          </div>
          <div className="relative h-[400px] md:h-full">
            <img 
              src={Img}
              alt="Dental surgical guide"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div>

      <div className="bg-[#f8f8f8] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152]  mb-12">
        ABOUT GUIDED EXCELLENCE
        </h2>

        {/* Main Description */}
        <p className="text-gray-700 mb-8 leading-relaxed">
        At Guided Excellence, we specialize in expert-designed surgical guides that bring unmatched precision to dental implant procedures. Founded by Dr. Zareh Baghoomian, a practicing dentist with over 20 years of experience, our mission is to elevate implant success rates through clinically guided, technology-driven solutions
        </p>

        <p className="text-gray-700 mb-8 leading-relaxed">
        Unlike generic lab-made guides, every case is personally reviewed by Dr. Baghoomian, ensuring that each guide is tailored for optimal fit, accuracy, and patient safety. Our streamlined digital workflow and advanced 3D technology make implant procedures simpler, safer, and more predictable for dentists at every experience level.
        </p>

      

        {/* Benefits List */}
        <ul className="space-y-4 mb-12">
          <li className="text-gray-700">•  Designed by a Dentist, Not Just a Lab

</li>
          <li className="text-gray-700">•  Precision, Efficiency & Predictability.</li>
          <li className="text-gray-700">• Trusted by Dentists Nationwide</li>
        </ul>

        {/* Bottom Text */}
        <p className="text-gray-700 mb-12 font-medium">
        Experience the difference of expert-guided precision.
        </p>

        {/* CTA Button */}
        
      </div>
    </div>

    <Values/>


    
        <Doctor/>
      </div>


      <div>
        <Testimonials/>
      </div>

      <DentalLanding/>







      </div>


  

  );
}
export default About;      