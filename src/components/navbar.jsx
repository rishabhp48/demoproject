import React from "react";

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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
          <li>
            <a href="services">Services</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
