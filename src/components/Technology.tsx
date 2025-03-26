import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import Img from '../Assets/logo 1.svg';
import Img1 from '../Assets/logo 2.svg';
import Img2 from '../Assets/logo 3.svg';
import Img3 from '../Assets/logo 4.svg';
import Img4 from '../Assets/logo 5.svg';
import Img5 from '../Assets/logo 6.svg';
import Img6 from '../Assets/logo 7.svg';
import Img7 from '../Assets/logo 8.svg';
import Img8 from '../Assets/logo 9.svg';
import Img9 from '../Assets/logo 10.svg';
import Img10 from '../Assets/logo 11.svg';
import Img11 from '../Assets/logo 12.svg';
import Img12 from '../Assets/logo 13.svg';
import Img13 from '../Assets/logo 14.svg';

const Technology = () => {
  useEffect(() => {
    const scroller = document.querySelector('.affiliations-scroller');
    if (scroller) {
      const scrollerContent = Array.from(scroller.children);
      
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scroller.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div className="bg-[#f9f9f9] py-16">
      {/* Full-width affiliations section */}
      <div className="w-full mb-20">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-center text-[#0c1152]">
            INDUSTRY AFFILIATIONS & RECOGNITIONS
          </h2>
        </div>

        {/* Scrolling logos container */}
        <div className="w-full overflow-hidden bg-white py-8">
          <div className="affiliations-scroller flex w-max animate-infinite-scroll gap-16 items-center">
            {[Img, Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13].map((logo, index) => (
              <img 
                key={index}
                src={logo} 
                alt={`Affiliation ${index + 1}`} 
                className="h-28 object-contain flex-shrink-0" 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Rest of your content remains unchanged */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0c1152] mb-4">
            WHAT ARE SURGICAL GUIDES?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A surgical guide is a custom-made device used in dental implant procedures to ensure precise positioning, angulation, and depth of implant placement. These guides help surgeons plan and execute procedures with greater accuracy, minimizing errors and improving patient outcomes.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0c1152] mb-4">
            HOW DO SURGICAL GUIDES WORK?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Using advanced 3D imaging and CAD/CAM technology, we create a digital blueprint of your patient's oral anatomy. This data is then used to design a custom surgical guide that fits perfectly, allowing for predictable and accurate implant placement every time.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#0c1152] mb-6">
            THE TECHNOLOGY BEHIND OUR GUIDES
          </h3>
          <p className="text-gray-700 mb-8">
            At Guided Excellence, we use the latest in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#0c1152]  flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">3D Cone Beam CT Scanning (CBCT)</p>
                <p className="text-gray-600">Captures precise oral-facial anatomy including nerves, canals, sinuses and more.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#0c1152]  flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">CAD/CAM Design</p>
                <p className="text-gray-600">Ensures each guide is engineered with micron-level accuracy.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#0c1152]  flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Digital Impressions</p>
                <p className="text-gray-600">Eliminates the need for traditional molds.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Check className="w-6 h-6 text-[#0c1152]  flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">3D Printing Technology</p>
                <p className="text-gray-600">Creates durable, highly detailed guides for real-world use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 100s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Technology;


