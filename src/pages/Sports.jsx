import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
  const teams = [
    "Atlanta Braves",
    "Atlanta Hawks", 
    "Atlanta Falcons",
    "Georgia Bulldogs",
    "Georgia Tech Yellow Jackets"
  ];

  return (
    <div className="page-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fadeInUp">Sports Schedule Pre-Printed Postcards</h1>
          <p className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            They'll keep it on the fridge, which means they'll keep your information
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main animate-fadeInLeft">
              <h2>Atlanta's Favorite Sports Teams</h2>
              <p>
                We annually print schedules for Atlanta and Georgia's favorite sports teams. 
                Customize with your information on the front and back. These postcards stay 
                on refrigerators all season long, keeping your business visible.
              </p>
              
              <div className="features-list">
                <h3>Available Team Schedules:</h3>
                {teams.map((team, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">⚾</span>
                    {team}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="content-sidebar animate-fadeInRight">
              <img 
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1" 
                alt="Sports Schedule Postcards" 
                className="sidebar-image"
              />
              <div className="cta-section">
                <h3>Get Your Sports Schedules</h3>
                <p>Perfect for businesses targeting sports fans</p>
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
            <h2 className="animate-fadeInUp">Why Sports Schedule Postcards Work</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">🏠</div>
              <h3>Refrigerator Magnets</h3>
              <p>Sports fans keep schedules on their fridge all season, giving you constant visibility</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">🎯</div>
              <h3>Targeted Audience</h3>
              <p>Reach passionate sports fans who are loyal to their teams and local businesses</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">📅</div>
              <h3>Season-Long Exposure</h3>
              <p>Your business information stays visible for the entire sports season</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="feature-icon">⚡</div>
              <h3>High-Quality Printing</h3>
              <p>Durable, professional printing that lasts through the entire season</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Score Big with Sports Marketing</h2>
          <p>Connect with Atlanta's passionate sports fans through our schedule postcards</p>
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

export default Sports;