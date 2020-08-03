import React, { Component } from 'react';
import { Link } from 'gatsby';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBHamburgerToggler,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';

class Mobilemenu extends Component {
  state = {
    collapse1: false,
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
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
              <Link to="/" className="mobile-link">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/about-us/" className="mobile-link">
                About us
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span>Business Units</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="/power-generation/">Power Generation</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/power-substations/">Power Substations</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/oil-and-gas/">Oil & Gas</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/industry/">Industry</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/distribution-electrical-grids/">Distribution Electrical Grids</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/lines-of-transmission/">Lines of Transmission</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/lighting-systems/">Lighting Systems</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/projects/" className="mobile-link">
                Projects
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/social-contribution/" className="mobile-link">
                Social Contribution
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/jobs/" className="mobile-link">
                Jobs
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/news/" className="mobile-link">
                News
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/contact-us/" className="mobile-link">
                Contact us
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Mobilemenu;
