import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBCollapse, MDBHamburgerToggler } from 'mdbreact';

class Mobilemenu extends Component {
  state = {
    collapse1: false,
    collapseID: '',
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <MDBNavbar>
        <MDBHamburgerToggler
          id="hamburger1"
          onClick={() => this.toggleSingleCollapse('collapse1')}
        />
        <MDBCollapse isOpen={this.state.collapse1} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <a className="mobile-link">Home</a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="about" className="mobile-link">
                About us
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">Business Units</a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">Projects</a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">Social Contribution</a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">Jobs</a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">News</a>
            </MDBNavItem>
            <MDBNavItem>
              <a className="mobile-link">Contact us</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Mobilemenu;
