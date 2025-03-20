import React from 'react';
import { Clock, Smile, CheckCircle, Laptop, Target } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "ENHANCED PRECISION:",
    description: "With surgical guides, you can achieve an unprecedented level of accuracy. The guide acts as a three-dimensional map, allowing you to pre-plan the implant placement based on the patient's specific anatomy. This precision minimizes the risk of errors, ensures optimal aesthetic and functional outcomes, and promotes the long-term success of the implant."
  },
  {
    icon: Clock,
    title: "TIME AND COST EFFICIENCY:",
    description: "By using surgical guides, you can streamline your implant procedures. The pre-operative planning process allows you to visualize the final result, identify potential complications, and optimize the treatment plan before even starting the surgery. This leads to reduced chair time, fewer post-operative complications, and improved patient satisfaction. Additionally, the accuracy of surgical guides reduces the need for costly revisions or additional surgeries."
  },
  {
    icon: Smile,
    title: "IMPROVED PATIENT EXPERIENCE:",
    description: "Patients undergoing implant surgery often have concerns about pain, complications, and the final outcome. By incorporating surgical guides, you can alleviate these concerns. The accurate placement of implants using surgical guides minimizes tissue trauma, reduces post-operative discomfort, and ensures faster healing. With improved aesthetic outcomes and enhanced functionality, patients will be delighted with their new smiles and recommend your practice to others."
  },
  {
    icon: CheckCircle,
    title: "INCREASED PREDICTABILITY AND SUCCESS RATES:",
    description: "Surgical guides provide a predictable and standardized approach to implant surgery. By following a pre-determined plan, you can minimize the margin for error and complications. The precise positioning and alignment of implants using surgical guides promote osseointegration, reduce the risk of peri-implantitis, and enhance the long-term stability and success rates for implants."
  },
  {
    icon: Laptop,
    title: "INTEGRATION OF DIGITAL DENTISTRY:",
    description: "Embracing surgical guides allows you to harness the power of digital dentistry. Advanced technologies such as cone-beam computed tomography (CBCT) and computer-aided design and computer-aided manufacturing (CAD/CAM) systems are used to create highly accurate surgical guides. Incorporating these digital tools not only improves patient outcomes but also positions your practice at the forefront of modern dentistry."
  }
];

function Benefits() {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0c1152]  mb-4">
            WHY SHOULD YOU INCORPORATE SURGICAL GUIDES?
          </h2>
          <p className="text-[#0c1152]  font-medium tracking-wide">
            ACHIEVE UNMATCHED ACCURACY AND CONFIDENCE IN SURGERY
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0c1152] /10 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#0c1152] " />
                </div>
              </div>
              <div>
                <h3 className="text-[#0c1152]  font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;