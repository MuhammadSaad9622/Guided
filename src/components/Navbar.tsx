import React from 'react';
import { Link } from "react-router-dom";
import { Bluetooth as Tooth } from 'lucide-react';
import { HowItWorks } from './howitworks';
import  Sugicaluide from './Sugicaluide';
import Price from './Price';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import SubmitCase from './SubmitCase';
import Img from '../Assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#f8f8f8] py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
        <Link to="/">
  <img 
    src={Img} 
    alt="Dental surgical guide" 
    style={{ width: "130px", height: "100px", cursor: "pointer" }} 
  />
</Link>

          <span className="text-[#0c1152]  font-bold text-xl"></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="./HowItWorks" className="text-gray-700 hover:text-[#0c1152]  font-medium">How It Works</a>
          <a href="Sugicaluide" className="text-gray-700 hover:text-[#0c1152]  font-medium">Surgical Guides</a>
          <a href="Price" className="text-gray-700 hover:text-[#0c1152]  font-medium">Pricing</a>
          <a href="Blog" className="text-gray-700 hover:text-[#0c1152]  font-medium">Blog</a>
          <a href="About" className="text-gray-700 hover:text-[#0c1152]  font-medium">About</a>
          <a href="Contact" className="text-gray-700 hover:text-[#0c1152]  font-medium">Contact Us</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 text-[#0c1152]  border-2 border-navy-900 rounded-full font-semibold hover:bg-navy-50">
            BOOK A FREE CONSULT
          </button>
          <Link to="/SubmitCase">
        <button className="px-6 py-2 bg-[#0c1152]  text-white rounded-full font-semibold hover:bg-navy-800">
            SUBMIT YOUR CASE
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;