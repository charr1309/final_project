import React from 'react';

const About = () => {
  const team = [
    {
      name: "Michael Vander Werf",
      title: "Founder, Co-owner, Sales Manager",
      phone: "404-849-6139",
      email: "mike@mrpostcard.com",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Ken Crane",
      title: "Co-owner, Production Manager",
      phone: "404-874-6139, ext. 2#",
      email: "ken@mrpostcard.com",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Andre Pierce",
      title: "Office Manager",
      email: "andre@mrpostcard.com",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Al Kennon",
      title: "Accounting",
      email: "al@mrpostcard.com",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-content animate-fadeInLeft">
            <h1>About Mr. Postcard</h1>
            <p className="about-lead">
              Facilitating direct mail advertising needs since 1996
            </p>
            <p>
              Mr. Postcard has been facilitating direct mail advertising needs of individuals and businesses since 1996. 
              Starting with the real estate market, founder Michael Vander Werf, who is known as "Mr. Postcard" to his friends, 
              opened a small postcard company to assist realtors in their quest to market and sell property in and around 
              metropolitan Atlanta.
            </p>
            <p>
              In just a few short months, success struck and the postcard business took off. Mr. Postcard, realizing that 
              he could help more than just real estate agents, began designing and printing postcards for businesses and 
              industries throughout the Atlanta area.
            </p>
          </div>
          <div className="about-image animate-fadeInRight">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1" 
              alt="About Our Team" 
            />
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item animate-fadeInUp">
            <h3>28+</h3>
            <p>Years in Business</p>
          </div>
          <div className="stat-item animate-fadeInUp">
            <h3>10,000+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-item animate-fadeInUp">
            <h3>1M+</h3>
            <p>Postcards Delivered</p>
          </div>
          <div className="stat-item animate-fadeInUp">
            <h3>99%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>

        <div className="team-section">
          <h2 className="animate-fadeInUp">Meet the Mr. Postcard Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                  {member.phone && <p className="team-contact">📞 {member.phone}</p>}
                  <p className="team-contact">📧 {member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-section animate-fadeInUp">
          <h2>Meet Just a Few of Our Clients</h2>
          <p>...but you probably already know them</p>
          <div className="clients-note">
            <p>We've worked with hundreds of businesses across Atlanta and beyond, from small local companies to major corporations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;