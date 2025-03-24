import React, { useState } from 'react';
import { ChevronDown, Upload } from 'lucide-react';

const SubmitCase = () => {
  const [surgicalGuideType, setSurgicalGuideType] = useState('');
  const [showGuideTypes, setShowGuideTypes] = useState(false);
  const [droppedFile, setDroppedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const guideTypes = [
    'Edentulous Surgical Guide',
    'Guided / Fully Guided',
    'Pilot Guide Only'
  ];

  const months = Array.from({ length: 12 }, (_, i) => {
    return new Date(0, i).toLocaleString('default', { month: 'long' });
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!dragActive) {
      setDragActive(true);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setDroppedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setDroppedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white p-8 relative">
          {/* Patient Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-1">
                  Patient Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Requested Due Date:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-1">
                  Date of Birth:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Surgery Date:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm">
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* General Planning Information */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#0c1152] mb-8 text-center">
              GENERAL PLANNING INFORMATION:
            </h2>
            
            <div className="space-y-3 max-w-xl mx-auto">
              <div className="relative">
                <button
                  onClick={() => setShowGuideTypes(!showGuideTypes)}
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-left flex items-center justify-between"
                >
                  <span className="text-gray-700">
                    {surgicalGuideType || 'Type of Surgical Guide:'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                {showGuideTypes && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow-lg z-10">
                    {guideTypes.map((type) => (
                      <button
                        key={type}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50"
                        onClick={() => {
                          setSurgicalGuideType(type);
                          setShowGuideTypes(false);
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-left flex items-center justify-between">
                <span className="text-gray-700">Number of Implants?</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <button className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-left flex items-center justify-between">
                <span className="text-gray-700">How are models being sent?</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Implant System Selection */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#0c1152] mb-8 text-center">
              SELECT IMPLANT SYSTEM AND GUIDE SURGICAL KIT:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Implant System/Manufacturer:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Type of Surgical Drill Kit:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Implant Tooth Position(s):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Desired Implant Width and Length(s):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Type of tissue flap anticipated?
                </label>
                <button className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-left flex items-center justify-between">
                  <span className="text-gray-700">Select type</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Expedited Turnaround being requested?
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm text-gray-600 mb-1">
                Additional Comments / Instructions:
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 h-32"
              />
            </div>

            <div className="mt-8">
              <div
                className={`bg-gray-100 rounded-lg p-8 text-center cursor-pointer ${
                  dragActive ? 'border-2 border-blue-500' : ''
                }`}
                onDragOver={handleDragOver}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
              >
                <Upload className="w-8 h-8 mx-auto mb-2 text-[#0c1152]" />
                <p className="text-[#0c1152] font-medium mb-1">
                  Click to Upload or Drag and Drop
                </p>
                <p className="text-[#0c1152] font-bold mb-4">
                  Attach CBCT/DICOM File
                </p>
                {droppedFile && (
                  <div className="mt-2 text-sm text-gray-700">
                    File: {droppedFile.name}
                  </div>
                )}
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  or share a link to CBCT/DICOM File
                </p>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Doctor's Information */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#0c1152] mb-8 text-center">
              DOCTOR'S INFORMATION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone #:
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Address:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  License #:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-8 text-sm text-gray-700">
              <p className="mb-4">
                Submitting this data is subject to the terms and conditions of the Master Surgical Guide Agreement, which are incorporated herein by this reference. The above referenced Placing Dentist and Restoring Dentist (collectively "Dentist") represents, declares and agrees that the Dentist:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  Is a licensed dental professional qualified to perform the dental implant procedure documented in the above case plan;
                </li>
                <li>
                  Has or will review the case plan and all relevant data related to the case plan and approve the same;
                </li>
                <li>
                  That the file and all relevant data provided to Guided Excellence, LLC for purposes of constructing the surgical guide is accurate and approved;
                </li>
                <li>
                  Is the Dentist;
                </li>
                <li>
                  Agree that Guided Excellence, LLC is not responsible for improperly fitting surgical guides when the scan appliance used was fabricated by a third party or models the Scan Appliance was constructed on are not available;
                </li>
                <li>
                  Assumes full responsibility for both the plan and resulting surgical guide(s); and
                </li>
                <li>
                  That this data will be accompanied by our Work Authorization which is made subject to the terms of the Master Surgical Guide Agreement which includes, but is not limited to, disclaimers on all warranties and a limitation of Guided Excellence, LLC liability.
                </li>
              </ol>

              <p className="mt-4">
                The Customer is commissioning Guided Excellence, LLC to obtain, plan or construct the surgical guide(s) and accepts all terms and conditions established by the surgical guide manufacturer and Guided Excellence, LLC.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Date:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Type Your Name:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#0c1152] text-white py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>

          {/* Implant Image */}
         
        </div>
      </div>
    </div>
  );
};

export default SubmitCase;
