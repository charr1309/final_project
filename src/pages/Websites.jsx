import React from 'react';
import { Link } from 'react-router-dom';

const Websites = () => {
  const features = [
    "Custom website design - no cookie-cutter templates",
    "Professional web hosting included",
    "Mobile-responsive design",
    "SEO-friendly structure",
    "Easy content management",
    "Professional email setup"
  ];

  const portfolioSamples = [
    {
      title: "Real Estate Website",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Professional real estate agent website with property listings"
    },
    {
      title: "Business Website",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Corporate website with service showcase and contact forms"
    },
    {
      title: "Restaurant Website",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Restaurant website with menu and online ordering"
    },
    {
      title: "Medical Practice",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      description: "Healthcare website with appointment booking"
    }
  ];

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-hero">
          <div className="service-content animate-fadeInLeft">
            <h1>Custom Website Design and Web Hosting</h1>
            <p className="service-lead">
              Don't fall victim to bad cookie-cutter websites made with templates, giving you very little control over your image.
            </p>
            <p>
              Create a custom website and host it for only $500. Our professional web design team 
              creates unique, custom websites that reflect your brand and help you stand out from 
              the competition.
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

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
          
          <div className="service-images animate-fadeInRight">
            <div className="website-showcase">
              <img 
                src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1" 
                alt="Custom Website Design" 
                className="main-image"
              />
              <div className="overlay-badge">
                <span>Custom Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-section">
          <h2>Website Package</h2>
          <div className="pricing-card featured">
            <h3>Complete Website Solution</h3>
            <div className="price">$500</div>
            <p>Everything you need to get online</p>
            <ul>
              <li>Custom website design</li>
              <li>Mobile-responsive layout</li>
              <li>Professional hosting</li>
              <li>Domain setup</li>
              <li>Email accounts</li>
              <li>SEO optimization</li>
              <li>Content management system</li>
              <li>1 year hosting included</li>
            </ul>
          </div>
        </div>

        <div className="portfolio-section">
          <h2>A few samples of our work</h2>
          <p>Click image to visit the sites</p>
          <div className="portfolio-grid">
            {portfolioSamples.map((sample, index) => (
              <div key={index} className="portfolio-item" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="portfolio-image">
                  <img src={sample.image} alt={sample.title} />
                  <div className="portfolio-overlay">
                    <h4>{sample.title}</h4>
                    <p>{sample.description}</p>
                    <span className="view-site">View Site →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Our Website Services?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Design</h3>
              <p>No templates - every website is designed specifically for your business</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Responsive</h3>
              <p>Your website will look perfect on all devices and screen sizes</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Reliable</h3>
              <p>Professional hosting ensures your site is always fast and available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>SEO Optimized</h3>
              <p>Built with search engine optimization to help customers find you</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h2>Ready to Get Your Custom Website?</h2>
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

export default Websites;