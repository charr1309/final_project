import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MainNav extends Component {
  render() {
    return (
      <div>
          <div className="Navbar-main">
            <div className='menu'>
            <NavLink class="Main-item" to='/RealEstate'>Real Estate Postcards</NavLink>
            <NavLink class="Main-item" to='/Calender'>Monthly Calender Postcards</NavLink>
            <NavLink class="Main-item" to='/Sports'>Sports Schedule Postcards</NavLink>
            <NavLink class="Main-item" to='/Holiday'>Holiday and Seasonal Postcards</NavLink>
            <NavLink class="Main-item" to='/FullColor'>Full Color Custom PostCards</NavLink>
            <NavLink class="Main-item" to='/Mailing'>Mailing Services</NavLink>
            <NavLink class="Main-item" to='/BusinessCards'>Business Cards</NavLink>
            <NavLink class="Main-item" to='/Websites'>Websites and Hosting</NavLink>
            <NavLink class="Main-item" to='/Newsletter'>Newsletters, Flyers, Folders etc.</NavLink>
            </div>
            
          </div>
        {/* <div className="Navbar-main">
          <ul className="menu">
            <li class="Main-item">Real Estate Postcards</li>
            <li class="Main-item">Monthly Calender Postcards</li>
            <li class="Main-item">Sports Schedule Postcards</li>
            <li class="Main-item">Holiday and Seasonal Postcards</li>
            <li class="Main-item">Full Color Custom PostCards</li>
            <li class="Main-item">Mailing Services</li>
            <li class="Main-item">Business Cards</li>
            <li class="Main-item">Websites and Hosting</li>
            <li class="Main-item">Newsletters, Flyers, Folders etc.</li>
          </ul>
        </div> */}
      </div>
    );
  }
}
export default MainNav;
