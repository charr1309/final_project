import React from 'react';
import { Link } from 'react-router-dom';

const MailingServices = () => {
  const features = [
    "Using your importable mailing list (Excel, dBase, CSV, ASCII file)",
    "Help you purchase a specialty list",
    "Addressing directly on mail piece",
    "Purging duplicate addresses",
    "Address delivery report",
    "Graphic layout of address panel message",
    "CASS certifying and barcoding list",
    "Merging and printing address, barcode and address side message",
    "Preparing and delivering to bulk mail",
    "Standard A Mail postage paid",
    "Upgrade to First Class Presort available",
    "Additional postage for non-barcodable addresses"
  ];

  const pricingTiers = [
    { quantity: "1 - 199", price: "43¢", note: "plus $15 setup fee*" },
    { quantity: "200 - 499", price: "41¢", note: "" },
    { quantity: "500 - 999", price: "39¢", note: "" },
    { quantity: "1,000 - 1,999", price: "36¢", note: "" },
    { quantity: "2,000 +", price: "34¢", note: "" }
  ];

  return (
    <section className="service-page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      
      <div className="container">
        <div className="service-hero">
          <div className="service-content animate-fadeInLeft">
            <h1>Mailing Services</h1>
            <p className="service-lead">
              We will mail more than just postcards: Also choose Mr PostCard for your next newsletter, sales letter, thank you card, or invitation.
            </p>
            
            <div className="features-list">
              <h3>Mailing fees include...</h3>
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className="additional-services">
              <h3>Additional Services</h3>
              <div className="service-item">
                <span className="service-icon">📝</span>
                <p>Need your client list converted to an importable file? We will enter your list for $20 per 100 addresses. (First, Last, Address, City, State and Zip)</p>
              </div>
              <div className="service-item">
                <span className="service-icon">💰</span>
                <p>Do you qualify for non-profit mail rates? We can guide you in obtaining non-profit status at the post office and mailing for lower rates!</p>
              </div>
              <div className="service-item">
                <span className="service-icon">📦</span>
                <p>Sending something other than a postcard? We can help provide your finishing services too. Call for pricing based on your specific needs.</p>
              </div>
            </div>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
          
          <div className="service-images animate-fadeInRight">
            <div className="mailing-showcase">
              <img 
                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Mailing Services" 
                className="main-image"
              />
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" 
                alt="Mail Processing" 
                className="overlay-image"
              />
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2>Mailing Service Pricing</h2>
          <div className="pricing-table">
            <div className="table-header">
              <div className="header-cell">Quantity</div>
              <div className="header-cell">Fee per piece</div>
            </div>
            {pricingTiers.map((tier, index) => (
              <div key={index} className="table-row">
                <div className="table-cell">{tier.quantity}</div>
                <div className="table-cell">
                  {tier.price}
                  {tier.note && <span className="price-note">{tier.note}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="pricing-note">*We waive the setup fee at 200+ if we are mailing for you</p>
        </div>

        <div className="features-section">
          <h2>Why Choose Our Mailing Services?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>List Management</h3>
              <p>Complete list processing including duplicate removal and CASS certification</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Targeted Delivery</h3>
              <p>Precise addressing and barcode printing for optimal delivery rates</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💸</div>
              <h3>Cost Effective</h3>
              <p>Bulk mail rates and non-profit options to maximize your budget</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Full Service</h3>
              <p>From design to delivery - we handle every step of your mailing campaign</p>
            </div>
            <div className="feature-card centered-feature">
              <div className="feature-icon">📊</div>
              <h3>Detailed Reporting</h3>
              <p>Comprehensive delivery reports and campaign analytics</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Ready to Start Your Mailing Campaign?</h2>
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

export default MailingServices;