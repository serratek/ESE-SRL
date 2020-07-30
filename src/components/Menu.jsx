import React, { Component } from 'react';
import { Link } from 'gatsby';

const Menu = () => {
  return (
    <nav id="menu" role="navigation" className="menu">
      <ul>
        <li className="menu-hasdropdown">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/about-us/">About us</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/business-units/">Business Units</Link>
        </li>
        <li className="menu-hasdropdown">
          <a>Projects</a>
        </li>
        <li className="menu-hasdropdown">
          <a>Social Contribution</a>
        </li>
        <li className="menu-hasdropdown">
          <a>Jobs</a>
        </li>
        <li className="menu-hasdropdown">
          <a>News</a>
        </li>
        <li className="menu-hasdropdown">
          <a>Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
