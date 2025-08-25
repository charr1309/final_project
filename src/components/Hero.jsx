import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Professional Postcard Services",
      subtitle: "Since 1996",
      description: "Your premier destination for high-quality direct mail marketing solutions",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "Explore Services"
    },
    {
      title: "Real Estate Marketing",
      subtitle: "Stand Out in the Market",
      description: "100 pre-printed postcards for just $75 - all costs included",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "View Real Estate"
    },
    {
      title: "Custom Design Services",
      subtitle: "Your Vision, Our Expertise",
      description: "90 minutes FREE graphic design with every custom postcard order",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      cta: "Get Custom Design"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-text animate-fadeInUp">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <Link to="/services" className="btn btn-primary">{slide.cta}</Link>
                  <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <h3>28+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat">
          <h3>10,000+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>1M+</h3>
          <p>Postcards Printed</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;