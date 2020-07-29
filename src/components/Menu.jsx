import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <nav id="menu" role="navigation" className="menu">
        <ul>
          <li className="menu-hasdropdown">
            <a>Home</a>
          </li>
          <li className="menu-hasdropdown">
            <a>About us</a>
          </li>
          <li className="menu-hasdropdown">
            <a>Business Units</a>
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
  }
}
