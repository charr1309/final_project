import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const venues = [
    "Fox Theater",
    "High Museum of Art", 
    "Atlanta Symphony Orchestra",
    "14th Street Playhouse",
    "Kudzu Playhouse",
    "Fernbank",
    "Stone Mountain Park",
    "Philips Arena",
    "Gwinnett Arena and PAC",
    "Sporting Events"
  ];

  return (
    <section className="service-page">
      <div className="container">
        <div className="service-hero">
          <div className="service-images animate-fadeInLeft">
            <div className="calendar-showcase">
              <img 
                src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Calendar Postcard" 
                className="main-image"
              />
              <img 
                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1" 
                alt="Calendar Sample 2" 
                className="overlay-image"
              />
            </div>
          </div>
          
          <div className="service-content animate-fadeInRight">
            <h1>Atlanta Events - Monthly Calendar Postcards</h1>
            <p className="service-lead">
              Keep your customers informed with Atlanta's premier events calendar postcards.
            </p>
            
            <h3>Some of the venues our cards include:</h3>
            <div className="venues-grid">
              {venues.map((venue, index) => (
                <div key={index} className="venue-item">
                  <span className="venue-icon">🎭</span>
                  {venue}
                </div>
              ))}
            </div>

            <div className="pricing-info">
              <h3>Pricing</h3>
              <p><strong>Base price: 25¢ for 9" x 6"</strong></p>
            </div>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">Get Pricing</Link>
              <a href="tel:4048496139" className="btn btn-secondary">Call Now</a>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Our Calendar Postcards?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📅</div>
              <h3>Always Current</h3>
              <p>Updated monthly with the latest Atlanta events and attractions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Targeted Marketing</h3>
              <p>Perfect for real estate agents, businesses, and service providers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Fridge-Worthy</h3>
              <p>Customers keep them all month long, keeping your brand visible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;