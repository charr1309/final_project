import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
  const services = [
    {
      title: "Newsletters",
      description: "Professional newsletters to keep your customers informed",
      icon: "📰",
      features: ["Custom design", "Professional layout", "Bulk printing", "Mailing services"]
    },
    {
      title: "Flyers",
      description: "Eye-catching flyers for promotions and events",
      icon: "📄",
      features: ["Full color printing", "Various sizes", "High-quality paper", "Fast turnaround"]
    },
    {
      title: "Folders",
      description: "Custom presentation folders for professional materials",
      icon: "📁",
      features: ["Pocket folders", "Custom branding", "Business card slots", "Professional finish"]
    },
    {
      title: "Brochures",
      description: "Tri-fold and bi-fold brochures for detailed information",
      icon: "📋",
      features: ["Multiple fold options", "Glossy or matte finish", "Custom sizes", "Professional design"]
    }
  ];

  const samples = [
    "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
    "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1"
  ];

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-hero">
          <div className="service-content animate-fadeInLeft">
            <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
            <p className="service-lead">
              We're more than just postcards. We can help you create custom flyers, newsletters, folders, and more.
            </p>
            <p>
              From corporate newsletters to promotional flyers, we provide comprehensive printing 
              services for all your marketing materials. Our experienced design team can create 
              professional materials that represent your brand perfectly.
            </p>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
          
          <div className="service-images animate-fadeInRight">
            <div className="image-grid">
              {samples.slice(0, 4).map((image, index) => (
                <div key={index} className="sample-image" style={{animationDelay: `${index * 0.2}s`}}>
                  <img src={image} alt={`Newsletter Sample ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>Our Print Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Our Print Services?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Professional Design</h3>
              <p>Our experienced designers create materials that make an impact</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🖨️</div>
              <h3>High Quality Printing</h3>
              <p>State-of-the-art printing equipment for superior results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Quick production times to meet your deadlines</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Complete Service</h3>
              <p>From design to printing to mailing - we handle it all</p>
            </div>
          </div>
        </div>

        <div className="portfolio-section">
          <h2>Sample Work</h2>
          <p>Examples of our newsletter and print design work</p>
          <div className="portfolio-grid">
            {samples.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img src={image} alt={`Print Sample ${index + 1}`} />
                <div className="portfolio-overlay">
                  <span>View Sample</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-cta">
          <h2>Ready to Create Your Print Materials?</h2>
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

export default Newsletter;