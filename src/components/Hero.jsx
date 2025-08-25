import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content animate-fadeInUp">
          <h1 className="hero-title">Professional Postcard Services</h1>
          <p className="hero-subtitle">Since 1996</p>
          <p className="hero-description">
            Your premier destination for high-quality direct mail marketing solutions. 
            From real estate postcards to custom designs, we make your business stand out.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Get Free Quote</Link>
          </div>
          <div className="hero-stats">
            <div className="stat animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <h3>28+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <h3>10,000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <h3>1M+</h3>
              <p>Postcards Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;