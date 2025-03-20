import React from 'react';
import { Check } from 'lucide-react';
import Img from'../Assets/Capture2.png';
import Img1 from '../Assets/Capture4.png';
import Img2 from '../Assets/Capture5.png';
import Img3 from '../Assets/Capture6.png';
import Img4 from '../Assets/Capture7.png';

const Technology = () => {
  return (
    <div className="bg-[#f9f9f9] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Industry Affiliations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0c1152]  mb-12">
            INDUSTRY AFFILIATIONS & RECOGNITIONS
          </h2>
          <div className="flex justify-between items-center gap-8 flex-wrap">
            <img src={Img} alt="Medit" className="h-12 object-contain" />
            <img src={Img1} alt="iTero" className="h-12 object-contain" />
            <img src={Img2} alt="Rodin" className="h-12 object-contain" />
            <img src={Img3} alt="Dentsply Sirona" className="h-12 object-contain" />
            <img src={Img4} alt="DEX" className="h-12 object-contain" />
          </div>
        </div>

        {/* What Are Surgical Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0c1152]  mb-4">
            WHAT ARE SURGICAL GUIDES?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A surgical guide is a custom-made device used in dental implant procedures to ensure precise positioning, angulation, and depth of implant placement. These guides help surgeons plan and execute procedures with greater accuracy, minimizing errors and improving patient outcomes.
          </p>
        </div>

        {/* How Do Surgical Guides Work */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#0c1152]  mb-4">
            HOW DO SURGICAL GUIDES WORK?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Using advanced 3D imaging and CAD/CAM technology, we create a digital blueprint of your patient's oral anatomy. This data is then used to design a custom surgical guide that fits perfectly, allowing for predictable and accurate implant placement every time.
          </p>
        </div>

        {/* Technology Behind Our Guides */}
        <div>
          <h3 className="text-2xl font-bold text-[#0c1152]  mb-6">
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
    </div>
  );
};

export default Technology;