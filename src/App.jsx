import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

// Service Pages
import RealEstate from './pages/RealEstate';
import Calendar from './pages/Calendar';
import Sports from './pages/Sports';
import Holiday from './pages/Holiday';
import CustomPostcards from './pages/CustomPostcards';
import MailingServices from './pages/MailingServices';
import BusinessCards from './pages/BusinessCards';
import Websites from './pages/Websites';
import Newsletter from './pages/Newsletter';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <span className="logo-text">Mr. Postcard</span>
              <span className="logo-tagline">Since 1996</span>
            </Link>
            
            <div className="nav-menu">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
            
            <div className="nav-contact">
              <span className="phone">📞 404.849.6139</span>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/custom-postcards" element={<CustomPostcards />} />
          <Route path="/mailing-services" element={<MailingServices />} />
          <Route path="/business-cards" element={<BusinessCards />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>

        {/* Chatbot */}
        <Chatbot />

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h3>Mr. Postcard</h3>
              <p>Professional postcard services since 1996</p>
              <div className="social-links">
                <span>📧 info@mrpostcard.com</span>
                <span>📞 404.849.6139</span>
                <span>📠 404.921.1023</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <Link to="/real-estate">Real Estate Postcards</Link>
              <Link to="/calendar">Calendar Postcards</Link>
              <Link to="/sports">Sports Schedules</Link>
              <Link to="/holiday">Holiday Cards</Link>
              <Link to="/custom-postcards">Custom Postcards</Link>
            </div>
            
            <div className="footer-section">
              <h4>More Services</h4>
              <Link to="/mailing-services">Mailing Services</Link>
              <Link to="/business-cards">Business Cards</Link>
              <Link to="/websites">Websites</Link>
              <Link to="/newsletter">Newsletters</Link>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Mr. Postcard. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}

export default App;