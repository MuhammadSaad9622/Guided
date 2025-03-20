import React from 'react';
import { Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white py-8 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <img
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          
          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#0c1152]  transition-colors">How it Works</a>
            <a href="#" className="hover:text-[#0c1152]  transition-colors">Blog</a>
            <a href="#" className="hover:text-[#0c1152]  transition-colors">Surgical Guides</a>
            <a href="#" className="hover:text-[#0c1152]  transition-colors">About</a>
            <a href="#" className="hover:text-[#0c1152]  transition-colors">Pricing</a>
            <a href="#" className="hover:text-[#0c1152]  transition-colors">Contact Us</a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#0c1152] " />
            <span className="text-sm">626.606.6504</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#0c1152] " />
            <span className="text-sm">info@guided4excellence.com</span>
          </div>
          <button className="bg-transparent border-2 border-navy-900 text-[#0c1152]  px-6 py-2 rounded-full text-sm font-medium hover:bg-[#0c1152]  hover:text-white transition-colors">
            BOOK A CALL
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;