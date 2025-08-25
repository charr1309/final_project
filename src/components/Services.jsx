import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Real Estate Postcards",
      description: "Mail 100 pre-printed postcards for just $75, all costs included",
      icon: "🏠",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/real-estate",
      price: "From $75"
    },
    {
      title: "Monthly Calendar Postcards",
      description: "Atlanta events calendar postcards featuring major venues and attractions",
      icon: "📅",
      image: "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
      link: "/calendar",
      price: "From $0.25"
    },
    {
      title: "Sports Schedule Postcards",
      description: "Keep your info on the fridge with Atlanta's favorite sports teams",
      icon: "⚾",
      image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/sports",
      price: "Seasonal"
    },
    {
      title: "Holiday & Seasonal Cards",
      description: "Cards for every major holiday from our extensive gallery",
      icon: "🎄",
      image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/holiday",
      price: "Varies"
    },
    {
      title: "Custom Postcards",
      description: "Professional custom postcards with 90 minutes FREE graphic design",
      icon: "🎨",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/custom-postcards",
      price: "Custom Quote"
    },
    {
      title: "Mailing Services",
      description: "Complete mailing solutions including list management and delivery",
      icon: "📮",
      image: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/mailing-services",
      price: "From $0.34"
    },
    {
      title: "Business Cards",
      description: "2,500 full-color business cards for only $175",
      icon: "💼",
      image: "https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/business-cards",
      price: "$175"
    },
    {
      title: "Website Design",
      description: "Custom website design and hosting for only $500",
      icon: "💻",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/websites",
      price: "$500"
    },
    {
      title: "Newsletters & Flyers",
      description: "Custom newsletters, flyers, folders and more",
      icon: "📰",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
      link: "/newsletter",
      price: "Custom Quote"
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services-header animate-fadeInUp">
          <h2>Our Services</h2>
          <p>Comprehensive postcard and marketing solutions for your business</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <span className="service-icon">{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <Link to={service.link} className="service-link">Learn More →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;