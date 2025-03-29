import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'; // Icons for mobile menu
import Img from '../Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#f8f8f8] py-2 px-4 pb-4"> {/* Added padding below */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img 
              src={Img} 
              alt="Dental surgical guide" 
              style={{ width: "130px", height: "100px", cursor: "pointer" ,}} 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/howitworks" className="text-gray-700 hover:text-[#0c1152] font-medium">How It Works</Link>
          <Link to="/sugicaluide" className="text-gray-700 hover:text-[#0c1152] font-medium">Surgical Guides</Link>
          <Link to="/price" className="text-gray-700 hover:text-[#0c1152] font-medium">Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0c1152] font-medium">Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#0c1152] font-medium">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0c1152] font-medium">Contact Us</Link>
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="https://calendly.com/guided4excellence/30min">
            <button className="px-6 py-2 text-[#0c1152] border-2 border-navy-900 rounded-full font-semibold hover:bg-navy-50">
              BOOK A FREE CONSULT
            </button>
          </Link>
          <Link to="/submitcase">
            <button className="px-6 py-2 bg-[#0c1152] text-white rounded-full font-semibold hover:bg-navy-800">
              SUBMIT YOUR CASE
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white py-4 px-6 space-y-4 shadow-md">
          <Link to="/howitworks" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link to="/sugicaluide" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>Surgical Guides</Link>
          <Link to="/price" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/about" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0c1152]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/submitcase">
            <button className="w-full py-2 bg-[#0c1152] text-white rounded-md font-semibold hover:bg-navy-800">
              SUBMIT YOUR CASE
            </button>
          </Link>

          <Link to="https://calendly.com/guided4excellence/30min">
            <button className="w-full py-2 bg-[#0c1152] text-white rounded-md font-semibold hover:bg-navy-800">
              BOOK A FREE CONSULT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
