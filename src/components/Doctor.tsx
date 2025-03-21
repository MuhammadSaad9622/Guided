import React from 'react';
import { ChevronDown } from 'lucide-react';
import Img from '../Assets/Dr. Zareh Baghoomian.png';


const Doctor = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Banner */}
       

        {/* Meet the Doctor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#0c1152]  mb-6">
              MEET<br />
              DR. ZAREH BAGHOOMIAN
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Dr. Zareh Baghoomian is a highly respected dentist with a deep passion for innovation in implant dentistry. A graduate of the Herman Ostrow School of Dentistry of USC, he has spent over 20 years perfecting the art of implant surgery. Recognizing the need for more accurate and efficient implant placement, he founded Guided Excellence, where he applies his clinical expertise to designing precision surgical guides.
              </p>
              <p>
                Unlike labs that rely solely on technicians, Dr. Baghoomian personally reviews and finalizes each case plan, ensuring surgical accuracy, safety, and optimal patient outcomes. His dedication to cutting-edge technology and clinical excellence makes Guided Excellence the trusted choice for dentists looking to elevate their implant procedures.
              </p>
            </div>
          </div>
          <div>
            <img
              src={Img}
              alt="Dr. Zareh Baghoomian"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* FAQ Section */}
        
      </div>
    </div>
  );
};

export default Doctor;