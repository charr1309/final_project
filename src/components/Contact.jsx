import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    referral: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header animate-fadeInUp">
          <h1>Contact Mr. Postcard</h1>
          <p>Get in touch with us for all your postcard and marketing needs</p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fadeInLeft">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>404.849.6139</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📠</span>
                <div>
                  <strong>Fax</strong>
                  <p>404.921.1023</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@mrpostcard.com</p>
                </div>
              </div>
            </div>

            <div className="contact-image">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1" 
                alt="Contact Us" 
              />
            </div>
          </div>

          <div className="contact-form-container animate-fadeInRight">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address1">Address 1</label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address2">Address 2</label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="referral">How did you hear about Mr. Postcard?</label>
                <select
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="referral">Referral</option>
                  <option value="postcard">Received someone's postcard</option>
                  <option value="mailer">Received mailer from us</option>
                  <option value="search">Search Engine</option>
                  <option value="website">Other Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  rows="4"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;