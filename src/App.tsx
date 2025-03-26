import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Technology from './components/Technology';
import Testimonials from './components/Testimonials';
import Doctor from './components/Doctor';
import { DentalLanding } from './components/DentalLanding';
import FAQ from './components/faq';
import {HowItWorks} from './components/howitworks';
import Sugicaluide from './components/Sugicaluide';   
import Price from './components/Price';  
import Whyweuse from './components/whyweuse';   
import Blog from './components/Blog';  
import BlogDetailPage from './components/Blogdetails';  
import About from './components/About'; 
import Contact from './components/Contact';
import SubmitCase from './components/SubmitCase';
import HeroPrice from './components/heroprice';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to top on navigation */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Process />
                <HeroPrice/>
                <Technology />
                <Testimonials />
                <Whyweuse/>
                <Doctor />
                <FAQ />
                <DentalLanding />
              </>
            }
          />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/Sugicaluide" element={<Sugicaluide />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BlogDetailPage" element={<BlogDetailPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SubmitCase" element={<SubmitCase />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
