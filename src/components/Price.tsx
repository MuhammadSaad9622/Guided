import React from 'react';
import Pricing from './Pricing';
import Affordable from './Affordable';
import Testimonials from './Testimonials';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import Whyweuse from './whyweuse';
import Img from '../Assets/12.png';


const Price = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#cdcec9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152]  mb-8 leading-tight">
              <span className="block">Transparent and </span>
              <span className="block">Affordable Pricing</span>
             
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

      <Pricing/>

      <Affordable/>

      <Testimonials/>

      <FAQ/>

      <DentalLanding/>









      </div>


  

  );
}
export default Price;      