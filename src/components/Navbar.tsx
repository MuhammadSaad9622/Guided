import React from 'react';
import { Link } from "react-router-dom";
import Img from '../Assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#f8f8f8] py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img 
              src={Img} 
              alt="Dental surgical guide" 
              style={{ width: "130px", height: "100px", cursor: "pointer" }} 
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/howitworks" className="text-gray-700 hover:text-[#0c1152] font-medium">How It Works</Link>
          <Link to="/sugicaluide" className="text-gray-700 hover:text-[#0c1152] font-medium">Surgical Guides</Link>
          <Link to="/price" className="text-gray-700 hover:text-[#0c1152] font-medium">Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0c1152] font-medium">Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#0c1152] font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0c1152] font-medium">Contact Us</Link>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 text-[#0c1152] border-2 border-navy-900 rounded-full font-semibold hover:bg-navy-50">
            BOOK A FREE CONSULT
          </button>
          <Link to="/submitcase">
            <button className="px-6 py-2 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800">
              SUBMIT YOUR CASE
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
