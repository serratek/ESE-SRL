import React from 'react';
import Link from './LocalizedLink';

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
          <a>Business Units</a>
          <ul className="menu-dropdown">
            <li>
              <Link to="/power-generation/">Power Generation</Link>
            </li>
            <li>
              <Link to="/power-substations/">Power Substations</Link>
            </li>
            <li>
              <Link to="/oil-and-gas/">Oil & Gas</Link>
            </li>
            <li>
              <Link to="/industry/">Industry</Link>
            </li>
            <li>
              <Link to="/distribution-electrical-grids/">Distribution Electrical Grids</Link>
            </li>
            <li>
              <Link to="/lines-of-transmission/">Lines of Transmission</Link>
            </li>
            <li>
              <Link to="/lighting-systems/">Lighting Systems</Link>
            </li>
          </ul>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/projects/">Projects</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/social-contribution/">Social Contribution</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/jobs/">Jobs</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/news/">News</Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/contact-us/">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
