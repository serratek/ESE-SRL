import React, { Component } from 'react';

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
                        <p>Industrial Park of Santa Cruz P.I. 23 and 24. Transversal Avenue 1</p>
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
                  <h3 className="widget-title">About Our Company</h3>
                  <div className="textwidget widget-text">
                    We are the best world Information Technology Company. Providing the highest
                    quality in hardware &amp; Network solutions. About more than 20 years of
                    experience and 1000 of innovative achievements.
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
                          <p>Talk To Our Support</p>
                        </div>
                        <div className="featured-title">
                          {/*  featured-title */}
                          <h5>+591 3 3460561</h5>
                        </div>
                      </div>
                    </div>
                    {/*  featured-icon-box END */}
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                <div className="widget link-widget clearfix">
                  <h3 className="widget-title">Quick Links</h3>
                  <ul id="menu-footer-services">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>About us</a>
                    </li>
                    <li>
                      <a>Business Units</a>
                    </li>
                    <li>
                      <a>Projects</a>
                    </li>
                    <li>
                      <a>Social Contribution</a>
                    </li>
                    <li>
                      <a>Jobs</a>
                    </li>
                    <li>
                      <a>News</a>
                    </li>
                    <li>
                      <a>Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-991-mb-40 res-767-mb-0">
                <div className="widget widget_text clearfix">
                  <h3 className="widget-title">Latest News</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        Define World Best IT Solution Technology
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 01, 2019
                      </span>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        You Must Try 20 Secret Of Digital Transform
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 03, 2019
                      </span>
                    </li>
                    <li>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        <img
                          className="img-fluid"
                          alt="post-img"
                          src="https://via.placeholder.com/150X150/444444.jpg"
                        />
                      </a>
                      <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                        10 PHP Frameworks You Need To Use Anywhere
                      </a>
                      <span className="post-date">
                        <i className="fa fa-calendar" />
                        May 05, 2019
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area res-767-mb-40">
                <div className="widget flicker_widget clearfix">
                  <h3 className="widget-title">Follow Us On</h3>
                  <div className="textwidget widget-text">
                    <div className="social-icons circle social-hover">
                      <ul className="list-inline">
                        <li className="social-facebook">
                          <a
                            className="tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="Facebook"
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="social-twitter">
                          <a
                            className="tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="Twitter"
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="social-flickr">
                          <a
                            className=" tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="flickr"
                          >
                            <i className="fab fa-flickr" />
                          </a>
                        </li>
                        <li className="social-linkedin">
                          <a
                            className=" tooltip-top rounded-circle"
                            target="_blank"
                            data-tooltip="aedIn"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src={imageISO} className="img-fluid mt-40" alt="ISO" />
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
                    <a to="https://devhance.co/" target="_blank">
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
