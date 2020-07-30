import React, { Component } from 'react';
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
              <a className="mobile-link">Home</a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="about" className="mobile-link">
                About us
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span>Business Units</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Aboutus_01'}>
                    About Us 1
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Aboutus_02'}>
                    About Us 2
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Services_01'}>
                    Services 1
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Services_02'}>
                    Services 2
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Our_expert'}>
                    Our Expert
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Faq'}>FAQs</MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_01'}>
                    Contact Us 1
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Contact_02'}>
                    Contact Us 2
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Error'}>
                    Error Page
                  </MDBDropdownItem>
                  <MDBDropdownItem href={process.env.PUBLIC_URL + '/Element'}>
                    Elements
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
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
