import React, { useState } from 'react';
import { ChevronDown, Upload } from 'lucide-react';

const SubmitCase = () => {
  const [surgicalGuideType, setSurgicalGuideType] = useState('');
  const [showGuideTypes, setShowGuideTypes] = useState(false);
  const [droppedFile, setDroppedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const guideTypes = [
    'Edentulous Surgical Guide',
    'Guided / Fully Guided',
    'Pilot Guide Only'
  ];

  const months = Array.from({ length: 12 }, (_, i) => 
    new Date(0, i).toLocaleString('default', { month: 'long' }));
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || e.dataTransfer?.files?.[0];
    if (file) setDroppedFile(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave' || e.type === 'drop') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    if (droppedFile) formData.append('attachment', droppedFile);
    formData.append('surgicalGuideType', surgicalGuideType);

    try {
      const response = await fetch('http://server-mailer-theta.vercel.app/SubmitCase', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Case submitted successfully!');
        e.target.reset();
        setDroppedFile(null);
        setSurgicalGuideType('');
      } else {
        const errorData = await response.json();
        alert(`Submission failed: ${errorData.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred during submission. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="bg-white p-8 relative">
          {/* Patient Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {/* Patient Name and Dates */}
            <div>
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-1">
                  Patient Name:
                </label>
                <input
                  name="patientName"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Requested Due Date:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select name="dueMonth" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select name="dueDay" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select name="dueYear" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Date of Birth and Surgery Date */}
            <div>
              <div className="mb-8">
                <label className="block text-sm text-gray-600 mb-1">
                  Date of Birth:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <select name="birthMonth" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select name="birthDay" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select name="birthYear" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
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
                  <select name="surgeryMonth" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Month</option>
                    {months.map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                  <select name="surgeryDay" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
                    <option value="">Day</option>
                    {days.map(day => (
                      <option key={day} value={day}>{day}</option>
                    ))}
                  </select>
                  <select name="surgeryYear" className="w-full border border-gray-300 rounded px-2 py-2 text-sm" required>
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
                  type="button"
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
                        type="button"
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

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Number of Implants:
                </label>
                <input
                  name="numberOfImplants"
                  type="number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  How are models being sent?
                </label>
                <input
                  name="modelsDeliveryMethod"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
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
                  name="implantSystem"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Type of Surgical Drill Kit:
                </label>
                <input
                  name="drillKitType"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Implant Tooth Position(s):
                </label>
                <input
                  name="implantPositions"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Desired Implant Width and Length(s):
                </label>
                <input
                  name="implantDimensions"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Type of tissue flap anticipated?
                </label>
                <input
                  name="tissueFlapType"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Expedited Turnaround being requested?
                </label>
                <input
                  name="expeditedRequest"
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
                name="additionalComments"
                className="w-full border border-gray-300 rounded px-3 py-2 h-32"
              />
            </div>

            <div className="mt-8">
              <div
                className={`bg-gray-100 rounded-lg p-8 text-center cursor-pointer ${
                  dragActive ? 'border-2 border-blue-500' : ''
                }`}
                onDragOver={handleDrag}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
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
              <div className="mt-4">
                <label className="block text-sm text-gray-600 mb-1">
                  or share a link to CBCT/DICOM File:
                </label>
                <input
                  name="fileLink"
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
                  name="doctorName"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Phone #:
                </label>
                <input
                  name="doctorPhone"
                  type="tel"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Address:
                </label>
                <input
                  name="doctorAddress"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  License #:
                </label>
                <input
                  name="doctorLicense"
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="mt-8 text-sm text-gray-700">
              <p className="mb-4">
                Submitting this data is subject to the terms and conditions of the Master Surgical Guide Agreement.
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
                    name="submissionDate"
                    type="date"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Type Your Name:
                  </label>
                  <input
                    name="submitterName"
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
              </div>

              <div className="mt-8">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0c1152] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitCase;