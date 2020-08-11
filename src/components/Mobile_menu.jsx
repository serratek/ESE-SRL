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
import { Link as GatsbyLink } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Link from './LocalizedLink';

import iconES from '../assets/images/flag_Espana.jpg';
import iconEN from '../assets/images/flag_United Kingdom.jpg';

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
    const { locale } = this.props;
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
                <FormattedMessage id={'menu.home'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/about-us/" className="mobile-link">
                <FormattedMessage id={'menu.aboutUs'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span>
                    <FormattedMessage id={'menu.businessUnits'} />
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to="/power-generation/">
                      <FormattedMessage id={'menu.powerGeneration'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/power-substations/">
                      <FormattedMessage id={'menu.powerSubstations'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/oil-and-gas/">
                      {' '}
                      <FormattedMessage id={'menu.oilGas'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/industry/">
                      <FormattedMessage id={'menu.industry'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/distribution-electrical-grids/">
                      <FormattedMessage id={'menu.distributionElectricalGrids'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/lines-of-transmission/">
                      <FormattedMessage id={'menu.linesOfTransmission'} />
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to="/lighting-systems/">
                      <FormattedMessage id={'menu.lightingSystems'} />
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/projects/" className="mobile-link">
                <FormattedMessage id={'menu.projects'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/social-contribution/" className="mobile-link">
                <FormattedMessage id={'menu.socialContribution'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/jobs/" className="mobile-link">
                <FormattedMessage id={'menu.jobs'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/news/" className="mobile-link">
                <FormattedMessage id={'menu.news'} />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/contact-us/" className="mobile-link">
                <FormattedMessage id={'menu.contactUs'} />
              </Link>
            </MDBNavItem>

            <MDBNavItem>
              <div className="mt-2">
                <GatsbyLink to={locale === 'en' ? '/' : '/en'} className="mr-2">
                  <img src={iconES} alt="es" />
                </GatsbyLink>
                <GatsbyLink to={'/en'}>
                  <img src={iconEN} alt="en" />
                </GatsbyLink>
              </div>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Mobilemenu;
