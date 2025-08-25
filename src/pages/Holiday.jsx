import React from 'react';
import { Link } from 'react-router-dom';

function Holiday() {
  return (
    <div className="page-container">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="hero-section">
        <div className="hero-content">
          <h1>Holiday & Seasonal Postcards</h1>
          <p>Spread joy and connect with customers during special occasions</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-overview">
            <h2>Holiday Marketing Made Easy</h2>
            <p>
              Keep your business top-of-mind during holidays and special seasons with our 
              professionally designed holiday postcards. Perfect for maintaining customer 
              relationships and driving seasonal sales.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎄</div>
              <h3>Seasonal Designs</h3>
              <p>Christmas, Halloween, Valentine's Day, Easter, and more</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Artwork</h3>
              <p>Professional designs tailored to your brand and message</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Timely Delivery</h3>
              <p>Scheduled printing and mailing to arrive at the perfect time</p>
            </div>
            <div className="feature-card centered-feature">
              <div className="feature-icon">💝</div>
              <h3>Special Offers</h3>
              <p>Include promotional codes and seasonal discounts</p>
            </div>
          </div>

          <div className="pricing-section">
            <h2>Holiday Postcard Pricing</h2>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Standard Holiday Cards</h3>
                <div className="price">$0.85 each</div>
                <ul>
                  <li>4" x 6" full color</li>
                  <li>Pre-designed templates</li>
                  <li>Your logo and message</li>
                  <li>Minimum 100 pieces</li>
                </ul>
              </div>
              <div className="pricing-card featured">
                <h3>Custom Holiday Design</h3>
                <div className="price">$1.25 each</div>
                <ul>
                  <li>4" x 6" full color</li>
                  <li>Custom artwork</li>
                  <li>Unlimited revisions</li>
                  <li>Premium cardstock</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Jumbo Holiday Cards</h3>
                <div className="price">$1.85 each</div>
                <ul>
                  <li>6" x 9" full color</li>
                  <li>Eye-catching size</li>
                  <li>Custom or template design</li>
                  <li>Premium finish</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="gallery-section">
            <h2>Holiday Card Examples</h2>
            <div className="holiday-gallery-grid">
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Christmas postcard design" />
                <p>Christmas Greetings</p>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Halloween postcard design" />
                <p>Halloween Promotions</p>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Valentine's Day postcard" />
                <p>Valentine's Day</p>
              </div>
              <div className="gallery-item">
                <img src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Easter postcard design" />
                <p>Easter Celebrations</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Spread Holiday Cheer?</h2>
            <p>Contact us today to start planning your holiday postcard campaign</p>
            <div className="cta-buttons">
              <button className="btn-primary">Get Quote</button>
              <button className="btn-secondary">View Templates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Holiday;