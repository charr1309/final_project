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
    <section className="service-page">
      <div className="container">
        <div className="service-hero">
          <div className="service-content animate-fadeInLeft">
            <h1>Real Estate Pre-Printed Postcards</h1>
            <p className="service-lead">
              Mail 100 pre-printed postcards for just $75, all costs included.
            </p>
            <p>
              Choose a postcard from our gallery below or create a professional custom postcard. 
              Are you a broker? Ask about how we can help your whole office to mail pre-printed 
              postcards at a discounted rate.
            </p>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
          
          <div className="service-images animate-fadeInRight">
            <div className="image-grid">
              {samples.map((image, index) => (
                <div key={index} className="sample-image" style={{animationDelay: `${index * 0.2}s`}}>
                  <img src={image} alt={`Real Estate Sample ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pricing-section">
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
          <h2>Ready to Get Started?</h2>
          <p>Order now by phone or email</p>
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
    </section>
  );
};

export default RealEstate;