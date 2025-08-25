import React from 'react';
import { Link } from 'react-router-dom';

function BusinessCards() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="hero-section">
        <div className="container">
          <h1 className="hero-title">Professional Business Cards</h1>
          <p className="hero-subtitle">Make a lasting first impression with high-quality business cards</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <div className="section-header">
            <h2>Business Card Services</h2>
            <p>Professional business cards that represent your brand perfectly</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>High-quality cardstock with professional finishes</p>
            </div>
            <div className="feature-card">
              <h3>Custom Design</h3>
              <p>Professional design services to match your brand</p>
            </div>
            <div className="feature-card">
              <h3>Fast Turnaround</h3>
              <p>Quick production and delivery times</p>
            </div>
            <div className="feature-card">
              <h3>Bulk Pricing</h3>
              <p>Competitive rates for large quantities</p>
            </div>
            <div className="feature-card centered-feature">
              <h3>Professional Service</h3>
              <p>Expert guidance throughout the entire process</p>
            </div>
          </div>

          <div className="pricing-section">
            <h3>Business Card Options</h3>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h4>Standard Cards</h4>
                <p className="price">Starting at $0.15 each</p>
                <ul>
                  <li>14pt cardstock</li>
                  <li>Full color printing</li>
                  <li>Standard finishes</li>
                  <li>Minimum 250 cards</li>
                </ul>
              </div>
              <div className="pricing-card featured">
                <h4>Premium Cards</h4>
                <p className="price">Starting at $0.25 each</p>
                <ul>
                  <li>16pt cardstock</li>
                  <li>UV coating available</li>
                  <li>Rounded corners</li>
                  <li>Premium finishes</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>Luxury Cards</h4>
                <p className="price">Starting at $0.45 each</p>
                <ul>
                  <li>18pt cardstock</li>
                  <li>Foil stamping</li>
                  <li>Embossing options</li>
                  <li>Special textures</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Why Choose Our Business Cards?</h3>
            <div className="info-grid centered-text">
              <div className="info-item">
                <h4>Professional Design</h4>
                <p>Our experienced designers create cards that make an impact and reflect your brand identity.</p>
              </div>
              <div className="info-item">
                <h4>Quality Materials</h4>
                <p>We use only premium cardstock and printing techniques for cards that feel as good as they look.</p>
              </div>
              <div className="info-item">
                <h4>Quick Turnaround</h4>
                <p>Fast production times mean you'll have your cards when you need them most.</p>
              </div>
              <div className="info-item">
                <h4>Competitive Pricing</h4>
                <p>Professional quality at prices that work for businesses of all sizes.</p>
              </div>
              <div className="info-item centered-feature">
                <h4>Bulk Pricing</h4>
                <p>Special discounts available for large quantity orders and repeat customers.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Order Your Business Cards?</h3>
            <p>Contact us today for a custom quote and professional design consultation.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Quote</button>
              <button className="btn-secondary">View Samples</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BusinessCards;