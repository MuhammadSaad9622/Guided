import React from 'react';
import { Link } from "react-router-dom";
import { Phone, Mail } from 'lucide-react';
import Img from '../Assets/logo.png'

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-6">
        {/* Logo Section */}
        <div className="md:w-1/4">
          <img
            src={Img} // Update with your logo path
            alt="Company Logo"
            className="h-20 w-50 object-contain mb-4"
          />
        </div>

        {/* Navigation Columns */}
        <div className="flex flex-1 justify-between md:justify-start md:gap-12">
          {/* Column 1 - Navigation */}
          <div className="flex flex-col gap-3">
           <Link to="/howitworks" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              How It Works
           </Link>
            <Link to="/sugicaluide" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              Surgical Guides
              </Link>
           <Link to="/price" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              Pricing
              </Link>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col gap-3">
            <Link to="/blog" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              Blog
              </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              About
              </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#0c1152] transition-colors text-base font-semibold">
              Contact Us
              </Link>
          </div>
        </div>

        {/* Column 3 - Contact & CTA */}
        <div className="flex flex-col gap-3 md:w-1/3">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#0c1152]" />
            <span className="text-base text-gray-600 font-semibold">626 604 6504</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#0c1152]" />
            <span className="text-base text-gray-600 font-semibold">info@guided4excellence.com</span>
          </div>
          <Link to="https://calendly.com/guided4excellence/30min">
          <button className="mt-2 bg-transparent border-2 border-[#0c1152] text-[#0c1152] px-6 py-2 rounded-full text-base font-semibold hover:bg-[#0c1152] hover:text-white transition-colors w-fit">
            BOOK A CALL
          </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;