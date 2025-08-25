import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const venues = [
    "Fox Theater",
    "High Museum of Art", 
    "Atlanta Symphony Orchestra",
    "14th Street Playhouse",
    "Kudzu Playhouse",
    "Fernbank",
    "Stone Mountain Park",
    "Philips Arena",
    "Gwinnett Arena and PAC",
    "Sporting Events"
  ];

  return (
    <div className="page-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fadeInUp">Atlanta Events - Monthly Calendar Postcards</h1>
          <p className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Keep your customers informed with Atlanta's premier events calendar postcards
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main animate-fadeInLeft">
              <h2>Stay Connected with Atlanta's Best Events</h2>
              <p>
                Our monthly calendar postcards feature the most popular venues and events in Atlanta. 
                Your customers will keep these on their refrigerator all month long, keeping your 
                business top-of-mind.
              </p>
              
              <div className="features-list">
                <h3>Featured Venues Include:</h3>
                <div className="venues-grid">
                  {venues.map((venue, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-icon">🎭</span>
                      {venue}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pricing-info">
                <h3>Affordable Pricing</h3>
                <p><strong>Base price: 25¢ for 9" x 6" postcards</strong></p>
                <p>Perfect size for maximum visibility and information</p>
              </div>
            </div>
            
            <div className="content-sidebar animate-fadeInRight">
              <img 
                src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1" 
                alt="Calendar Postcards" 
                className="sidebar-image"
              />
              <div className="cta-section">
                <h3>Get Your Calendar Postcards</h3>
                <p>Start your monthly marketing campaign today</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">Get Pricing</Link>
                  <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section">
      <div className="container">
          <div className="features-header">
            <h2 className="animate-fadeInUp">Why Choose Our Calendar Postcards?</h2>
        </div>
          <div className="features-grid">
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">📅</div>
              <h3>Always Current</h3>
              <p>Updated monthly with the latest Atlanta events and attractions from premier venues</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">🎯</div>
              <h3>Targeted Marketing</h3>
              <p>Perfect for real estate agents, businesses, and service providers targeting Atlanta residents</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">🏠</div>
              <h3>Fridge-Worthy Design</h3>
              <p>Customers keep them all month long, ensuring your brand stays visible in their homes</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">💼</div>
              <h3>Professional Quality</h3>
              <p>High-quality printing and design that reflects well on your business</p>
          </div>
        </div>
      </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Start Your Monthly Marketing Campaign</h2>
          <p>Join the businesses that stay connected with Atlanta residents every month</p>
          <div className="contact-options">
            <a href="tel:4048496139" className="contact-option">
              <span className="contact-icon">📞</span>
              404.849.6139
            </a>
            <a href="mailto:info@mrpostcard.com" className="contact-option">
              <span className="contact-icon">📧</span>
              info@mrpostcard.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;