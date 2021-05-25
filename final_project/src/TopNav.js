import React, { Component } from "react";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <div>
        <div className="Navbar-top">
          <ul className="Top-menu">
            <li className="items">Home</li>
            <li className="items">Contact Mr. Postcard</li>
            <li className="items">About Mr. PostCard</li>
            <li className="items">Newsletter</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default TopNav;
