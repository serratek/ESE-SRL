import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Link from './LocalizedLink';
import LatestNews from '../components/LatestNews';

import imageLogo from '../assets/images/LOGO_ESE_WHITE.png';
import imageISO from '../assets/images/ISO-90012015.png';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer widget-footer clearfix">
        {/* {this.props.children} */}
        <div className="first-footer ttm-bgcolor-skincolor ttm-bg ttm-bgimage-yes bg-img1">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row align-items-md-center">
              <div className="col-lg-4 col-md-4 col-sm-12 order-md-2">
                <div className="footer-logo text-sm-center">
                  <img className="img-fluid" alt="footer-logo" src={imageLogo} />
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 order-md-1 res-767-mt-20">
                <div className="text-left">
                  {/*  featured-icon-box */}
                  <div className="featured-icon-box left-icon icon-align-top">
                    <div className="featured-icon">
                      {/*  featured-icon */}
                      <div className="ttm-icon ttm-textcolor-white ttm-icon_element-size-md">
                        <i className="ti ti-location-pin" />
                        {/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="featured-content">
                      {/*  featured-content */}
                      <div className="featured-desc">
                        <p>
                          <FormattedMessage id={'common.fullAddress'} />
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*  featured-icon-box END */}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 order-md-3 res-767-mt-20">
                <div className="text-sm-right">
                  <a
                    href="mailto:info@ese-srl.com"
                    className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white"
                  >
                    <i className="far fa-envelope" /> info@ese-srl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-footer ttm-textcolor-white bg-img2">
          <div className="container-xl">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text  clearfix">
                  <h3 className="widget-title">
                    <FormattedMessage id={'footer.aboutTitle'} />
                  </h3>
                  <div className="textwidget widget-text">
                    <FormattedMessage id={'footer.aboutDesc'} />
                  </div>
                  <div className="quicklink-box">
                    {/*  featured-icon-box */}
                    <div className="featured-icon-box left-icon">
                      <div className="featured-icon">
                        {/*  featured-icon */}
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                          <span className="flaticon flaticon-clock" />
                          {/*  ttm-icon */}
                        </div>
                      </div>
                      <div className="featured-content">
                        {/*  featured-content */}
                        <div className="featured-desc">
                          {/*  featured-desc */}
                          <p>
                            <FormattedMessage id={'common.talkToOurSupport'} />
                          </p>
                        </div>
                        <div className="featured-title">
                          {/*  featured-title */}
                          <h5>
                            <a href="tel:+591 3 3460561">+591 3 3460561</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/*  featured-icon-box END */}
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget link-widget clearfix">
                  <h3 className="widget-title">
                    <FormattedMessage id={'footer.quickLinks'} />
                  </h3>
                  <ul id="menu-footer-services">
                    <li>
                      <Link to="/">
                        <FormattedMessage id={'menu.home'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us/">
                        <FormattedMessage id={'menu.aboutUs'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/business-units/">
                        <FormattedMessage id={'menu.businessUnits'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects/">
                        <FormattedMessage id={'menu.projects'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/social-contribution/">
                        <FormattedMessage id={'menu.socialContribution'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/jobs/">
                        <FormattedMessage id={'menu.jobs'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/news/">
                        <FormattedMessage id={'menu.news'} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us/">
                        <FormattedMessage id={'menu.contactUs'} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-991-mb-40 res-767-mb-0">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">
                    <FormattedMessage id={'common.latestNews'} />
                  </h3>
                  <LatestNews />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-767-mb-40">
                <div className="widget flicker_widget clearfix">
                  <h3 className="widget-title">
                    <FormattedMessage id={'footer.followUs'} />
                  </h3>
                  <div className="textwidget widget-text">
                    <div className="social-icons circle social-hover">
                      <ul className="list-inline">
                        <li className="social-facebook">
                          <a
                            href="https://www.facebook.com/ESESRL/"
                            className="tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="Facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a
                            href="https://twitter.com/ESE_SRL"
                            className="tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="Twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-flickr">
                          <a
                            href="https://www.youtube.com/channel/UC52D98RbbJwgVQ3kIR07Bzw/videos"
                            className=" tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="youtube"
                          >
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img
                      src={imageISO}
                      className="img-fluid w-100 mt-40"
                      alt="ISO"
                      style={{ maxWidth: 260 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text ttm-bgcolor-darkgrey ttm-textcolor-white">
          <div className="container-xl">
            <div className="row copyright align-items-center text-center">
              <div className="col-md-12">
                <div>
                  <span>
                    Copyright © 2020&nbsp;<a to="/">ESE SRL</a>. All rights reserved. Created by{' '}
                    <a href="https://devhance.co/" target="_blank" rel="noopener noreferrer">
                      Devhance
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
