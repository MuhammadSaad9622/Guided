import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import Img from '../Assets/Captur9-removebg-preview.png';
import Img1 from '../Assets/Capture10-removebg-preview.png';
import logo from '../Assets/logo.png';

function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left text-gray-800">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="p-4 mt-2 bg-white rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
}

export function DentalLanding() {
  const navigate = useNavigate();

  const handleSubmitCase = () => {
    navigate('/SubmitCase'); // Navigate to submit case route
  };

  const handleBookCall = () => {
    navigate('/book-call'); // Navigate to book call route
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main CTA Section */}
      <section className="relative bg-[#cdcec9] py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-6">
            START YOUR NEXT IMPLANT CASE<br />WITH CONFIDENCE
          </h2>
          
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            With Guided Excellence, you're not just getting a surgical guide—you're getting
            <span className="font-semibold"> expert-driven solutions</span> that take your implant procedures to the next level.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <button 
              onClick={handleSubmitCase}
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              SUBMIT A CASE
            </button>
            <button 
              onClick={handleBookCall}
              className="bg-white text-[#0c1152] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              BOOK A CALL
            </button>
          </div>
        </div>

        {/* Decorative Images - Modified for mobile */}
        <img
          src={Img1}
          alt="Dental Implant Left"
          className="absolute left-0 bottom-0 w-24 md:w-48 opacity-50 md:opacity-100"
        />
        <img
          src={Img}
          alt="Dental Implant Right"
          className="absolute right-0 bottom-0 w-24 md:w-48 opacity-50 md:opacity-100"
        />
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center mb-8">
            <img
              src={logo}
              alt="Guided Logo"
              className="w-30 h-25" 
            />
          </div>
          
          <nav className="space-y-2">
            <a href="#" className="block text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Surgical Guides</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">Contact Us</a>
          </nav>
        </div>

        <form className="md:col-span-1 space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-lg"
          />
          <button className="w-full bg-[#0c1152] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            SUBMIT
          </button>
        </form>

        <div className="md:col-span-1">
          <div className="space-y-4">
            <a href="tel:626604650" className="flex items-center text-gray-600 hover:text-gray-900">
              <Phone className="w-5 h-5 mr-2" />
              626 604 6504
            </a>
            <a href="mailto:info@guided4excellence.com" className="flex items-center text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5 mr-2" />
              info@guided4excellence.com
            </a>
            <button 
              onClick={handleBookCall}
              className="w-full bg-white text-[#0c1152] py-3 rounded-lg font-semibold border border-blue-900 hover:bg-gray-50 transition-colors"
            >
              BOOK A CALL
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}