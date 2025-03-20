import React from 'react';
import { Phone, Mail } from 'lucide-react';

function Form() {
  return (
    <div className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#0c1152] " />
            <a href="tel:626.606.6504" className="text-[#0c1152]  hover:text-navy-800">626.606.6504</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#0c1152] " />
            <a href="mailto:dbaghoomian@guided4excellence.com" className="text-[#0c1152]  hover:text-navy-800">
              dbaghoomian@guided4excellence.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20"
            required
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20"
            required
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20 resize-none"
          />

          {/* reCAPTCHA placeholder */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="notRobot" className="rounded border-gray-300" />
            <label htmlFor="notRobot" className="text-sm text-gray-600">I'm not a robot</label>
            <div className="ml-auto">
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0c1152]  text-white py-3 rounded-md font-medium hover:bg-navy-800 transition-colors"
          >
            SUBMIT
          </button>
        </form>

        {/* Footer */}
       
      </div>
    </div>
  );
}

export default Form;