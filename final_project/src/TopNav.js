import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <div>
          <div classname="Navbar-top">
              <div className='Top-menu'>
              <NavLink className="items" to='/'>Home</NavLink>
              <NavLink className="items" to='/Contact'>Contact Mr. Postcard</NavLink>
              <NavLink className="items" to='/About'>About Mr. Postcard</NavLink>
              <NavLink className="items" to='/SiteNewsletter'>Newsletter</NavLink>
              </div>
              
          </div>

        {/* <div className="Navbar-top">
          <ul className="Top-menu">
            <li className="items">Home</li>
            <li className="items">Contact Mr. Postcard</li>
            <li className="items">About Mr. PostCard</li>
            <li className="items">Newsletter</li>
          </ul>
        </div> */}
      </div>
    );
  }
}
export default TopNav;
