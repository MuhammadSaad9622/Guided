import React from 'react';
import{Link} from 'react-router-dom';

const pricingData = [
  { units: 1, planning: 150, printing: 145, total: 295 },
  { units: 2, planning: 180, printing: 200, total: 380 },
  { units: 3, planning: 210, printing: 225, total: 435 },
  { units: 4, planning: 270, printing: 245, total: 515 },
  { units: 5, planning: 290, printing: 255, total: 545 },
  { units: 6, planning: 310, printing: 265, total: 575 },
  { units: "EDENTULOUS GUIDES", planning: 350, printing: 350, total: 700 }
];

function Pricing() {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#0c1152] mb-12">
          TRANSPARENT PRICING FOR PRECISION-GUIDED<br />
          DENTAL SOLUTIONS
        </h2>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            {/* Table Header */}
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-4 px-6 text-left font-medium border border-gray-300">NUMBER OF UNITS</th>
                <th className="py-4 px-6 text-left font-medium border border-gray-300">PLANNING AND CONSULTION FEE</th>
                <th className="py-4 px-6 text-left font-medium border border-gray-300">PRINTING FEE</th>
                <th className="py-4 px-6 text-left font-medium border border-gray-300">TOTAL COST</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {pricingData.map((row, index) => (
                <tr 
                  key={index}
                  className={`
                    border-b border-gray-300
                    ${typeof row.units === 'string' ? '' : 'hover:bg-gray-50'}
                  `}
                >
                  <td className="py-4 px-6 border border-gray-300">{row.units}</td>
                  <td className="py-4 px-6 border border-gray-300">${row.planning}</td>
                  <td className="py-4 px-6 border border-gray-300">${row.printing}</td>
                  <td className="py-4 px-6 border border-gray-300">${row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link to ='/SubmitCase'>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-blue-800 transition-colors">
            GET STARTED
          </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pricing;