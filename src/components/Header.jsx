import React, { Component } from 'react';
import Menu from './Menu';
import Mobilemenu from './Mobile_menu';

import imageLogo from '../assets/images/LOGO_ESE.png';

export class Header3 extends Component {
  state = {
    show: false,
  };
  toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
  render() {
    return (
      <header id="masthead" className="header ttm-header-style-03">
        {/* ttm-topbar-wrapper */}
        <div className="ttm-header-wrap">
          <div className="site-header-menu">
            <div id="navbar" className="ttm-stickable-header clearfix">
              <div className="container-xl">
                <div className="d-xl-flex flex-xl-row align-items-xl-center justify-content-xl-between">
                  <div className="site-branding">
                    <a
                      className="home-link"
                      href={process.env.PUBLIC_URL + '/'}
                      title="Altech"
                      rel="home"
                    >
                      <img id="logo-img" className="img-fluid" alt="logo" src={imageLogo} />
                    </a>
                  </div>
                  <div className="site-navigation">
                    <div className="ttm-topbar-wrapper clearfix">
                      <div className="container-xl">
                        <div className="row">
                          <div className="col-lg-12 text-right">
                            <ul className="top-contact">
                              <li>
                                <i className="fas fa-map-marker-alt" />
                                &nbsp;&nbsp;24 Tech Roqad st Ny 10023
                              </li>
                              <li>
                                <i className="far fa-envelope" />
                                &nbsp;&nbsp;<a to="mailto:info@example.com.com">info@example.com</a>
                              </li>
                              <li>
                                <i className="far fa-clock" />
                                &nbsp;&nbsp;Office Hour: 08:00am - 6:00pm
                              </li>
                            </ul>
                            <div className="ttm-social-links-wrapper list-inline">
                              <ul className="social-icons">
                                <li>
                                  <a className=" tooltip-bottom" data-tooltip="Facebook">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a className=" tooltip-bottom" data-tooltip="Twitter">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a className=" tooltip-bottom" data-tooltip="Flickr">
                                    <i className="fab fa-flickr" />
                                  </a>
                                </li>
                                <li>
                                  <a className=" tooltip-bottom" data-tooltip="aedin">
                                    <i className="fab fa-linkedin-in" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container-xl">
                      <div className="row align-items-center ml-auto">
                        <div className="ml-auto">
                          <Menu />
                          <div className="mobilemenu">
                            <Mobilemenu />
                          </div>
                        </div>
                        <div className="ml-auto right-btn">
                          <button className="ml-4 ttm-btn ttm-btn-size-xs ttm-bgcolor-skincolor">
                            get a quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header3;
