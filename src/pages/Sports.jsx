import React from 'react';

const Sports = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Sports Schedule Postcards</h1>
          <p>Keep fans engaged with professional sports schedule postcards</p>
        </div>
      </div>

      <div className="content-section">
        <div className="container">
          <div className="service-details">
            <div className="service-info">
              <h2>Professional Sports Schedules</h2>
              <p>
                Perfect for schools, leagues, and sports organizations. Our sports schedule 
                postcards help keep fans, parents, and supporters informed about upcoming games 
                and events.
              </p>

              <div className="features-grid">
                <div className="feature-card">
                  <h3>Custom Team Branding</h3>
                  <p>Include team logos, colors, and mascots</p>
                </div>
                <div className="feature-card">
                  <h3>Complete Schedules</h3>
                  <p>Full season schedules with dates, times, and locations</p>
                </div>
                <div className="feature-card">
                  <h3>Durable Materials</h3>
                  <p>Weather-resistant postcards that last all season</p>
                </div>
                <div className="feature-card">
                  <h3>Quick Turnaround</h3>
                  <p>Fast production to meet your season deadlines</p>
                </div>
              </div>

              <div className="pricing-section">
                <h3>Sports Schedule Pricing</h3>
                <div className="pricing-grid">
                  <div className="price-card">
                    <h4>Standard Schedule</h4>
                    <div className="price">$0.35 each</div>
                    <p>Minimum 500 pieces</p>
                  </div>
                  <div className="price-card">
                    <h4>Premium Schedule</h4>
                    <div className="price">$0.45 each</div>
                    <p>Full color with photos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sports schedule postcard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;