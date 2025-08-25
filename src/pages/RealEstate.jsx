import React from 'react';
import { Link } from 'react-router-dom';

const RealEstate = () => {
  const features = [
    "100 postcards for just $75 - all costs included",
    "Professional pre-printed designs",
    "High-quality postcard stock",
    "Fast turnaround time",
    "Bulk discounts for brokers"
  ];

  const samples = [
    "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
  ];

  return (
    <div className="page-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <div className="container">
          <h1 className="animate-fadeInUp">Real Estate Pre-Printed Postcards</h1>
          <p className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Mail 100 pre-printed postcards for just $75, all costs included
          </p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-main animate-fadeInLeft">
              <h2>Dominate Your Real Estate Market</h2>
              <p>
                Choose a postcard from our gallery below or create a professional custom postcard. 
                Are you a broker? Ask about how we can help your whole office to mail pre-printed 
                postcards at a discounted rate.
              </p>
              
              <div className="features-list">
                <h3>What's Included:</h3>
                {features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="content-sidebar animate-fadeInRight">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1" 
                alt="Real Estate Postcards" 
                className="sidebar-image"
              />
              <div className="cta-section">
                <h3>Ready to Get Started?</h3>
                <p>Contact us today for your real estate postcard needs</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary">Get Quote</Link>
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
            <h2 className="animate-fadeInUp">Why Choose Our Real Estate Postcards?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="feature-icon">🏠</div>
              <h3>Proven Results</h3>
              <p>Our postcards have helped thousands of real estate agents generate leads and close more deals</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="feature-icon">💰</div>
              <h3>Unbeatable Value</h3>
              <p>100 postcards for just $75 - no hidden fees, no surprises, just great value</p>
            </div>
            <div className="feature-card animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick processing and delivery to get your marketing campaign started fast</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-section">
        <div className="container">
          <h2>Real Estate Special Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card animate-fadeInUp">
              <h3>Standard Package</h3>
              <div className="price">$75</div>
              <p>For 100 postcards, everything included</p>
              <ul>
                <li>Professional design selection</li>
                <li>High-quality printing</li>
                <li>Standard shipping included</li>
                <li>No setup fees</li>
                <li>No hidden costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="service-actions">
        <div className="container">
          <h2>Pricing</h2>
          <div className="pricing-card">
            <h3>Real Estate Special</h3>
            <div className="price">$75</div>
            <p>For 100 postcards, all costs included</p>
            <ul>
              <li>Professional design</li>
              <li>High-quality printing</li>
              <li>Standard shipping</li>
              <li>No hidden fees</li>
            </ul>
          </div>
        </div>

        <div className="contact-cta">
        </div>
      </div>

      <div className="cta-section">
        <div className="container">
          <h2>Ready to Dominate Your Market?</h2>
          <p>Join thousands of successful real estate agents who trust Mr. Postcard</p>
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

export default RealEstate;