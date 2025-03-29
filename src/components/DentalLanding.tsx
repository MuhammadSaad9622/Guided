import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Phone, Mail } from 'lucide-react';
import { Link } from "react-router-dom";
import Img from '../Assets/Captur9-removebg-preview.png';
import Img1 from '../Assets/Capture10-removebg-preview.png';
import logo from '../Assets/logo.png';

function FAQItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-4 bg-[#f8f8f8] rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
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

  const handleSubmitCase = () => navigate('/SubmitCase');
  const handleBookCall = () => navigate('https://calendly.com/guided4excellence/30min');

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Hero Section */}
      <section className="relative bg-[#cdcec9] py-16 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0c1152] mb-6">
            START YOUR NEXT IMPLANT CASE<br className="hidden md:block" />WITH CONFIDENCE
          </h2>
          
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            With Guided Excellence, you're not just getting a surgical guide—you're getting
            <span className="font-semibold"> expert-driven solutions</span> that take your implant procedures to the next level.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={handleSubmitCase}
              className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
            >
              SUBMIT A CASE
            </button>
            <button 
              onClick={handleBookCall}
              className="bg-white text-[#0c1152] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-blue-900"
            >
              BOOK A CALL
            </button>
          </div>
        </div>

        {/* Decorative Images */}
        <img
          src={Img1}
          alt="Dental Implant"
          className="absolute left-0 bottom-0 w-24 md:w-48 opacity-50 md:opacity-100"
        />
        <img
          src={Img}
          alt="Dental Implant"
          className="absolute right-0 bottom-0 w-24 md:w-48 opacity-50 md:opacity-100"
        />
      </section>

      {/* Mobile Version - Centered logo with left-aligned other elements */}
      <section className="bg-[#f8f8f8] py-8 px-4 block md:hidden">
        <div className="max-w-md mx-auto flex flex-col space-y-6">
          {/* Centered Logo */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Guided Logo"
              className="w-40 h-auto"
            />
          </div>

          {/* Left-aligned Form */}
          <form className="w-full flex flex-col space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              className="w-full bg-[#0c1152] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              SUBMIT
            </button>
          </form> 

          {/* Left-aligned Navigation Links */}
          <nav className="flex flex-col space-y-2">
          <Link to="/howitworks" className="text-gray-700 hover:text-[#0c1152] font-medium">How It Works</Link>
          <Link to="/sugicaluide" className="text-gray-700 hover:text-[#0c1152] font-medium">Surgical Guides</Link>
          <Link to="/price" className="text-gray-700 hover:text-[#0c1152] font-medium">Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0c1152] font-medium">Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#0c1152] font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0c1152] font-medium">Contact Us</Link>
          </nav>

          {/* Left-aligned Contact Info */}
          <div className="space-y-2">
            <Link  to="tel:6266046504" 
             
              className="flex items-center text-gray-600 hover:text-blue-900 font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              626.604.6504
            </Link>
            <Link  to="mailto:info@guided4excellence.com" 
             
              className="flex items-center text-gray-600 hover:text-blue-900 font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@guided4excellence.com
            </Link>
          </div>

          {/* Full-width Book Call Button */}
          <button 
            onClick={handleBookCall}
            className="w-full bg-white text-[#0c1152] py-3 rounded-lg font-semibold border-2 border-blue-900 hover:bg-gray-50 transition-colors"
          >
            BOOK A CALL
          </button>
        </div>
      </section>

      {/* Desktop Version (Unchanged) */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 hidden md:grid">
        {/* Form - First Column */}
        <form className="md:col-span-1 order-1 space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-[#0c1152] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            SUBMIT
          </button>
        </form>

        {/* Contact Info - Second Column */}
        <div className="md:col-span-1 order-2 space-y-6">
          <div className="space-y-4">
            <a href="tel:6266046504" className="flex items-center text-gray-600 hover:text-blue-900">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">626.604.6504</span>
            </a>
            <a href="mailto:info@guided4excellence.com" className="flex items-center text-gray-600 hover:text-blue-900">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-medium">info@guided4excellence.com</span>
            </a>
          </div>
          
          <button 
            onClick={handleBookCall}
            className="w-full bg-white text-[#0c1152] py-3 rounded-lg font-semibold border-2 border-blue-900 hover:bg-gray-50 transition-colors"
          >
            BOOK A CALL
          </button>
        </div>

        {/* Navigation - Third Column */}
        <div className="md:col-span-1 order-3 md:order-first">
          <div className="mb-8">
            <img
              src={logo}
              alt="Guided Logo"
              className="w-40 h-auto"
            />
          </div>
          
          <nav className="grid gap-3">
          <Link to="/howitworks" className="text-gray-700 hover:text-[#0c1152] font-medium">How It Works</Link>
          <Link to="/sugicaluide" className="text-gray-700 hover:text-[#0c1152] font-medium">Surgical Guides</Link>
          <Link to="/price" className="text-gray-700 hover:text-[#0c1152] font-medium">Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0c1152] font-medium">Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#0c1152] font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0c1152] font-medium">Contact Us</Link>
          </nav>
        </div>
      </section>
    </div>
  );
}