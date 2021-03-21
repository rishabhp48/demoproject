import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <h2>React Demo Project</h2>
      </div>
      <input type="checkbox" name="" id="opensidebar" />
      <label for="opensidebar" className="sidebarIcontoggle">
        <div className="spinner top"></div>
        <div className="spinner middle"></div>
        <div className="spinner bottom"></div>
      </label>
      <div id="sidebarmenu">
        <ul className="menu">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink exact to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink exact to="/about">About Us</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
