import React from 'react';
import { Link } from 'react-router-dom';

const CustomPostcards = () => {
  const features = [
    "90 minutes FREE graphic design",
    "Full color, both sides",
    "100 lbs. postcard stock",
    "Professional custom designs",
    "Fast turnaround time"
  ];

  const samples = [
    "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
  ];

  return (
    <section className="service-page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="container">
        <div className="service-hero">
          <div className="service-content animate-fadeInLeft">
            <h1>Professional Custom Postcards for your Business</h1>
            <p className="service-lead">
              Create the right image for your business with our customized postcards
            </p>
            <p>
              Stand out from the competition with professionally designed custom postcards 
              that reflect your brand and message. Our experienced design team will work 
              with you to create eye-catching postcards that get results.
            </p>
            
            <div className="features-list">
              <h3>Included in the price:</h3>
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
                  <img src={image} alt={`Custom Postcard Sample ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Our Custom Postcards?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Professional Design</h3>
              <p>90 minutes of FREE graphic design to create the perfect postcard for your business</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖨️</div>
              <h3>High Quality Printing</h3>
              <p>Full color printing on both sides using premium 100 lb. postcard stock</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick production times to meet your marketing deadlines</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Business Focused</h3>
              <p>Designs that enhance your professional image and drive results</p>
            </div>
            <div className="feature-card centered-feature">
              <div className="feature-icon">🎯</div>
              <h3>Targeted Marketing</h3>
              <p>Designs optimized for your specific audience and marketing goals</p>
            </div>
          </div>
        </div>

        <div className="samples-section">
          <h2>A few samples of our work</h2>
          <p>Click image to enlarge</p>
          <div className="samples-gallery-grid">
            {samples.map((image, index) => (
              <div key={index} className="sample-card">
                <img src={image} alt={`Custom Design Sample ${index + 1}`} />
                <div className="sample-overlay">
                  <span>View Sample</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-cta">
          <h2>Ready to Create Your Custom Postcards?</h2>
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

export default CustomPostcards;