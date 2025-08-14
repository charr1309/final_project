import React, { Component } from "react";
import FadeIn from 'react-fade-in';

class Contact extends Component {
  render() {
    return (
      <div>
        <FadeIn>
          <div>
            <h1>Contact Mr. PostCard</h1>
            <p>Phone: 404.849.6139</p>
            <p>Fax: 404.921.1023</p>
            <p>Email: info@mrpostcard.com</p>
            <form>
              <label htmlFor="Name">Name</label><br />
              <input type="text" id="Name" name="Name" /><br />
              <label htmlFor="Phone">Phone</label><br />
              <input type="text" id="Phone" name="Phone" /><br />
              <label htmlFor="Company">Company/Organization</label><br />
              <input type="text" id="CompanyEmail" name="CompanyEmail" /><br />
              <label htmlFor="Email">Email</label><br />
              <input type="text" id="Email" name="Email" /><br />
              <label htmlFor="Address1">Address1</label><br />
              <input type="text" id="Address1" name="Address1" /><br />
              <label htmlFor="Address2">Address2</label><br />
              <input type="text" id="Address2" name="Address2" /><br />
              <label htmlFor="City">City</label><br />
              <input type="text" id="City" name="City" /><br />
              <label htmlFor="State">State</label><br />
              <input type="text" id="State" name="State" /><br />
              <label htmlFor="Zip">Zip</label><br />
              <input type="text" id="Zip" name="Zip" /><br />
              <label htmlFor="referral">How did you hear about Mr. Postcard</label><br />
              <select id="referral" name="referral">
                <option value="referral">Referral</option>
                <option value="postcard">Received someones postcard</option>
                <option value="Received mailer from us">Received mailer from us</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Other WebsiteOther">Other WebsiteOther</option>
                <option value="Other">Other</option>
              </select><br />
              <label htmlFor="Comments">Comments</label><br />
              <textarea id="Comments" name="Comments" /><br />
              <button type="Submit">Submit</button>
            </form>
          </div>
        </FadeIn>
      </div>
    );
  }
}
export default Contact;