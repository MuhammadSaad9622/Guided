import React from 'react';

function Whyweuse () {
    return (
        <div>
          <br></br>
          <br></br>
          <br></br>

        <h2 className="text-3xl font-bold text-center text-[#0c1152]  mb-12">
          WHY USE A SURGICAL GUIDE?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-gray-200 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-[#0c1152] ">01</span>
              <div>
                <h3 className="font-bold text-[#0c1152] ">Improved Accuracy</h3>
                <p className="text-gray-700">Reduces human error and enhances precision.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-[#0c1152] ">03</span>
              <div>
                <h3 className="font-bold text-[#0c1152] ">Faster Procedures</h3>
                <p className="text-gray-700">Decreases chair time for both the dentist and the patient.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-[#0c1152] ">02</span>
              <div>
                <h3 className="font-bold text-[#0c1152] ">Minimized Surgical Risks</h3>
                <p className="text-gray-700">Lowers the chance of complications including nerve damage, sinus perforation and collision or encroachment on other vital structures such as adjacent roots.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <span className="text-2xl font-bold text-[#0c1152] ">04</span>
              <div>
                <h3 className="font-bold text-[#0c1152] ">Better Patient Outcomes</h3>
                <p className="text-gray-700">Leads to faster healing and greater implant success rates.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-900 text-white py-12 px-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">23+</div>
              <div className="text-sm">Years of Clinical Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3,600+</div>
              <div className="text-sm">Surgical Guides Planned</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm">Implants Compatible</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;3DAYS</div>
              <div className="text-sm">Planning Turnaround Time</div>
            </div>
          </div>
        </div>

</div>


);
}

export default Whyweuse;