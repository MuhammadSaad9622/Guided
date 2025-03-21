import React, { useState, useEffect } from 'react';
import Pricing from './Pricing';
import Affordable from './Affordable';
import Testimonials from './Testimonials';
import FAQ from './faq';
import { DentalLanding } from './DentalLanding';
import Blogpage from './Blogpage';
import ImgDesktop from '../Assets/Blog - hero.png';
import ImgMobile from '../Assets/Blog.png'; // Add mobile version image

const Blog = () => {
  const [heroImage, setHeroImage] = useState(ImgDesktop);

  useEffect(() => {
    const updateImage = () => {
      setHeroImage(window.innerWidth < 768 ? ImgMobile : ImgDesktop);
    };

    updateImage(); // Set initial image based on screen size
    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#cdcec9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c1152] mb-8 leading-tight">
              <span className="block">Innovation &</span>
              <span className="block">Precision: The Guided</span>
              <span className="block">Excellence Blog</span> 
            </h1>
            <button className="w-fit px-8 py-3 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800 uppercase">
              GET STARTED
            </button>
          </div>
          <div className="relative h-[400px] md:h-full">
            <img 
              src={heroImage}
              alt="Blog Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Blogpage />

      <DentalLanding />
    </div>
  );
};

export default Blog;
