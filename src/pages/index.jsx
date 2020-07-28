import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import Layout from '../components/Layout';

import image from '../assets/images/bg-image/slider-mainbg-003.jpg';

var slick_slider = {
  dots: false,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const IndexPage = () => (
  <Layout title="Home">
    <section>
      <div className="container-fluid">
        <div className="row">
          <div id="Home_banner2" className="carousel">
            <div className="view">
              <img className="d-block w-100" src={image} alt="Second slide" />
            </div>

            <div className="carousel-caption">
              <div className="container-xl d-flex">
                <div className="carousel-caption-inner">
                  <h5 className="ttm-textcolor-skincolor">
                    Trust and Client Focus&nbsp;&nbsp;&nbsp;
                  </h5>

                  <h2 className="ttm-textcolor-darkgrey">
                    Best <strong className="ttm-textcolor-skincolor">Digital Agency</strong> And
                    Bussiness
                  </h2>

                  <p className="text">
                    We are equipped with an updated technical knowledge to serve our customers
                    properly. Our method of application maintains the industry.
                  </p>

                  <p>
                    <button className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor ttm-textcolor-white mr-3">
                      read more
                    </button>
                    <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey">
                      get altech
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="ttm-row aboutus-section-style2 clearfix">
      <div className="container-xl">
        <div className="row no-gutters align-items-center">
          {/* row */}
          <div className="col-lg-6 res-991-text-center res-991-mb-40">
            {/* ttm_single_image-wrapper */}
            <div className="ttm_single_image-wrapper">
              <img
                className="img-fluid"
                src="https://via.placeholder.com/568X675/444444.png"
                title="single-img-two"
                alt="single-img-two"
              />
            </div>
            {/* ttm_single_image-wrapper end */}
          </div>
          <div className="col-lg-6">
            <div className="spacing-4 ttm-bgcolor-grey">
              {/* section title */}
              <div className="section-title with-desc clearfix">
                <div className="title-header">
                  <h5>About Altech</h5>
                  <h2 className="title">
                    We deal with the aspects of professional <span>IT Services</span>
                  </h2>
                </div>
                <div className="title-desc">
                  <p>
                    We listen. We advise. We design, together. Happy customers and ongoing
                    relationships are what we strive for. Success is measured by results, the most
                    important being how our clients feel about their experience with us.
                  </p>
                </div>
              </div>
              {/* section title end */}
              {/* row */}
              <div className="row no-gutters mt-20">
                <div className="col-md-6 col-lg-6 col-sm-6">
                  {/*  featured-icon-box */}
                  <div className="featured-icon-box style3 left-icon icon-align-top">
                    <div className="featured-icon">
                      {/*  featured-icon */}
                      <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                        <i className="ti ti-medall" />
                        {/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="featured-content">
                      {/*  featured-content */}
                      <div className="featured-title">
                        {/*  featured-title */}
                        <h5>Award Ceremony</h5>
                      </div>
                      <div className="featured-desc">
                        {/*  featured-desc */}
                        <p>Quickly productivate just in time strategic theme.</p>
                      </div>
                    </div>
                  </div>
                  {/*  featured-icon-box END */}
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                  {/*  featured-icon-box */}
                  <div className="featured-icon-box style3 left-icon icon-align-top">
                    <div className="featured-icon">
                      {/*  featured-icon */}
                      <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                        <i className="ti ti-bookmark-alt" />
                        {/*  ttm-icon */}
                      </div>
                    </div>
                    <div className="featured-content">
                      {/*  featured-content */}
                      <div className="featured-title">
                        {/*  featured-title */}
                        <h5>Certified Company</h5>
                      </div>
                      <div className="featured-desc">
                        {/*  featured-desc */}
                        <p>Quickly productivate just in time strategic theme.</p>
                      </div>
                    </div>
                  </div>
                  {/*  featured-icon-box END */}
                </div>
              </div>
              {/* row END*/}
              {/* separator */}
              <div className="separator">
                <div className="sep-line mt-4 mb-4" />
              </div>
              {/* separator */}
              <div className="row align-items-center">
                <div className="col-md-3 col-lg-4 col-5">
                  <div className="text-left pt-15">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/145X60/444444.png"
                      alt="about-sign"
                    />
                  </div>
                </div>
                <div className="col-md-9 col-lg-8 col-7">
                  {/*  featured-icon-box */}
                  <div className="featured-icon-box without-icon text-left pt-15">
                    <div className="featured-content">
                      {/*  featured-content */}
                      <div className="featured-title">
                        {/*  featured-title */}
                        <h5>Jhon Martin</h5>
                      </div>
                      <div className="featured-desc">
                        {/*  featured-desc */}
                        <p>Chairman &amp; Founder Altech</p>
                      </div>
                    </div>
                  </div>
                  {/*  featured-icon-box END */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
        {/* row */}
        <div className="row"></div>
        {/* row end*/}
      </div>
    </section>

    {/* service-section */}
    <section className="ttm-row service-section-style2 res-991-pb-0 ttm-bgcolor-grey clearfix">
      <div className="container-xl">
        <div className="row">
          {/* row */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="section-title with-desc text-center clearfix">
              <div className="title-header">
                <h5>We Make Connections</h5>
                <h2 className="title">
                  We provide best <span>Services</span>
                </h2>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        <div className="row no-gutters">
          {/* row */}
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>Experience Design</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Our firm is an expert to creates an efficient user interface that make user
                    interaction.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-system" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>IT Consultancy</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We provide an IT management services is for according to an organization’s
                    needs.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-computer" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>Cyber Security</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Expertise in a IT consultancy for the many companies, for their different
                    working areas.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-chart" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>Digital Services</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We develop, migrate &amp; work on applications to ensure that run capably on
                    cloud.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-data" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>

            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>Experience Design</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Our firm is an expert to creates an efficient user interface that make user
                    interaction.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-system" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>IT Consultancy</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We provide an IT management services is for according to an organization’s
                    needs.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-computer" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>Cyber Security</h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Expertise in a IT consultancy for the many companies, for their different
                    working areas.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-chart" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <a className="ttm-btn btn-inline style2">Read More </a>
            </div>
            {/*  featured-icon-box END */}
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
    {/* service-section end*/}

    {/* our-partner-section */}
    <section className="ttm-row our-partner-section ttm-bgcolor-skincolor res-991-mt-0 res-991-p-0 clearfix">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center">
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
              slidesToShow={5}
            >
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                      <img
                        className="img-fluid"
                        src="https://via.placeholder.com/94X47/444444.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                      <img
                        className="img-fluid"
                        src="https://via.placeholder.com/94X47/444444.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                      <img
                        className="img-fluid"
                        src="https://via.placeholder.com/94X47/444444.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                      <img
                        className="img-fluid"
                        src="https://via.placeholder.com/94X47/444444.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                      <img
                        className="img-fluid"
                        src="https://via.placeholder.com/94X47/444444.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
    {/* our-partner-section end */}

    {/* blog-section */}
    <section className="ttm-row blog-section clearfix">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            {/* section title */}
            <div className="section-title text-center with-desc clearfix">
              <div className="title-header">
                <h5>Our Blog</h5>
                <h2 className="title">
                  Check Out Our <span>Latest News</span>
                </h2>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        <Slider
          className="row slick_slider ttm-boxes-spacing-30px"
          {...slick_slider}
          slidesToShow={3}
        >
          <div className="ttm-box-col-wrapper">
            <div className="featured-imagebox featured-imagebox-blog">
              <div className="featured-thumbnail">
                {/* featured-thumbnail */}
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/654X490/444444.jpg"
                />
                <div className="ttm-blog-overlay-iconbox">
                  <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                    <i className="ti ti-plus" />
                  </a>
                </div>
                <div className="ttm-box-view-overlay" />
              </div>
              <div className="featured-content">
                {/* featured-content */}
                <div className="ttm-box-post-date">
                  {/* ttm-box-post-date */}
                  <span className="ttm-entry-date">
                    <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">
                      17<span className="entry-month entry-year">Apr</span>
                    </time>
                  </span>
                </div>
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                      You Must Try 20 Secret Of Digital Transform
                    </a>
                  </h5>
                </div>
                <div className="post-meta">
                  {/* post-meta */}
                  <span className="ttm-meta-line">
                    <i className="fa fa-comments" />
                    2,comments
                  </span>
                  <span className="ttm-meta-line">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                </div>
                <div className="featured-desc">
                  {/* featured-description */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the...
                  </p>
                </div>
                <a className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20">
                  Read More <i className="ti ti-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="ttm-box-col-wrapper">
            <div className="featured-imagebox featured-imagebox-blog">
              <div className="featured-thumbnail">
                {/* featured-thumbnail */}
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/654X490/444444.jpg"
                />
                <div className="ttm-blog-overlay-iconbox">
                  <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                    <i className="ti ti-plus" />
                  </a>
                </div>
                <div className="ttm-box-view-overlay" />
              </div>
              <div className="featured-content">
                {/* featured-content */}
                <div className="ttm-box-post-date">
                  {/* ttm-box-post-date */}
                  <span className="ttm-entry-date">
                    <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">
                      12<span className="entry-month entry-year">Dec</span>
                    </time>
                  </span>
                </div>
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                      Define World Best IT Solution Technology
                    </a>
                  </h5>
                </div>
                <div className="post-meta">
                  {/* post-meta */}
                  <span className="ttm-meta-line">
                    <i className="fa fa-comments" />
                    3,comments
                  </span>
                  <span className="ttm-meta-line">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                </div>
                <div className="featured-desc">
                  {/* featured-description */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the...
                  </p>
                </div>
                <a
                  className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                  href="single_blog"
                >
                  Read More <i className="ti ti-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="ttm-box-col-wrapper">
            <div className="featured-imagebox featured-imagebox-blog">
              <div className="featured-thumbnail">
                {/* featured-thumbnail */}
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/654X490/444444.jpg"
                />
                <div className="ttm-blog-overlay-iconbox">
                  <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                    <i className="ti ti-plus" />
                  </a>
                </div>
                <div className="ttm-box-view-overlay" />
              </div>
              <div className="featured-content">
                {/* featured-content */}
                <div className="ttm-box-post-date">
                  {/* ttm-box-post-date */}
                  <span className="ttm-entry-date">
                    <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">
                      22<span className="entry-month entry-year">May</span>
                    </time>
                  </span>
                </div>
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                      10 PHP Frameworks You Need To Use Anywhere
                    </a>
                  </h5>
                </div>
                <div className="post-meta">
                  {/* post-meta */}
                  <span className="ttm-meta-line">
                    <i className="fa fa-comments" />
                    1,comments
                  </span>
                  <span className="ttm-meta-line">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                </div>
                <div className="featured-desc">
                  {/* featured-description */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the...
                  </p>
                </div>
                <a
                  className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                  href={process.env.PUBLIC_URL + '/Single_blog'}
                >
                  Read More <i className="ti ti-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="ttm-box-col-wrapper">
            <div className="featured-imagebox featured-imagebox-blog">
              <div className="featured-thumbnail">
                {/* featured-thumbnail */}
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/654X490/444444.jpg"
                />
                <div className="ttm-blog-overlay-iconbox">
                  <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                    <i className="ti ti-plus" />
                  </a>
                </div>
                <div className="ttm-box-view-overlay" />
              </div>
              <div className="featured-content">
                {/* featured-content */}
                <div className="ttm-box-post-date">
                  {/* ttm-box-post-date */}
                  <span className="ttm-entry-date">
                    <time className="entry-date" dateTime="2019-01-16T07:07:55+00:00">
                      04<span className="entry-month entry-year">Aug</span>
                    </time>
                  </span>
                </div>
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_blog'}>
                      Digital Conference Of IT Tech Events in 2019
                    </a>
                  </h5>
                </div>
                <div className="post-meta">
                  {/* post-meta */}
                  <span className="ttm-meta-line">
                    <i className="fa fa-comments" />
                    4,comments
                  </span>
                  <span className="ttm-meta-line">
                    <i className="fa fa-user" />
                    Admin
                  </span>
                </div>
                <div className="featured-desc">
                  {/* featured-description */}
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the...
                  </p>
                </div>
                <a
                  href={process.env.PUBLIC_URL + '/Single_blog'}
                  className="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-20"
                >
                  Read More <i className="ti ti-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
    {/* blog-section end */}

    {/* portfolio-section */}
    <section className="ttm-row bottomzero-padding-section  ttm-bg ttm-bgimage-yes bg-img5 ttm-bgcolor-skincolor clearfix">
      <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
      <div className="container-xl pb-5 res-991-pb-0">
        <div className="row align-items-center ttm-textcolor-white">
          <div className="col-lg-5 res-991-text-center">
            <div className="section-title style3 mb-0 clearfix">
              <div className="title-header mb-0">
                <h5>We Make Connections</h5>
                <h2 className="title">
                  Explore recent <span className="ttm-textcolor-white">Projects</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-5 res-991-text-center">
            <div className="title-desc">
              A project is a temporary endeavor with a defined beginning and end, scope, and
              assigned resources.
            </div>
          </div>
          <div className="col-lg-2 text-right res-991-text-center res-991-mt-20">
            <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">
              {' '}
              Read More{' '}
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="ttm-row mt-10 zero-padding-section clearfix">
      <div className="container-fluid p-0">
        <Slider
          className="row slick_slider ttm-boxes-spacing-10px"
          {...slick_slider}
          slidesToShow={5}
        >
          <div className="ttm-box-col-wrapper">
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })} className="ttm_image">
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>Business Seminarsetwst</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="ttm-box-col-wrapper">
            {/* featured-imagebox-portfolio */}
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })}>
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>IT Management</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* featured-thumbnail */}
          </div>
          <div className="ttm-box-col-wrapper">
            {/* featured-imagebox-portfolio */}
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })}>
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>Cyber Security Analysis</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* featured-thumbnail */}
          </div>
          <div className="ttm-box-col-wrapper">
            {/* featured-imagebox-portfolio */}
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })}>
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>Neural Networking</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* featured-thumbnail */}
          </div>
          <div className="ttm-box-col-wrapper">
            {/* featured-imagebox-portfolio */}
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })}>
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>Data Management</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* featured-thumbnail */}
          </div>
          <div className="ttm-box-col-wrapper">
            {/* featured-imagebox-portfolio */}
            <div className="featured-imagebox featured-imagebox-portfolio style1">
              {/* featured-thumbnail */}
              <div className="featured-thumbnail">
                <img
                  className="img-fluid"
                  alt=""
                  src="https://via.placeholder.com/600X750/444444.jpg"
                />
              </div>
              {/* featured-thumbnail end*/}
              {/* ttm-box-view-overlay */}
              <div className="ttm-box-view-overlay">
                <div className="featured-iconbox ttm-media-link">
                  {/* ttm-media-link */}
                  <a onClick={() => this.setState({ isOpen: true })}>
                    <i className="ti ti-search" />
                  </a>
                  <a href={process.env.PUBLIC_URL + '/Single_style1'} className="ttm_link">
                    <i className="ti ti-link" />
                  </a>
                </div>
              </div>
              {/* ttm-box-view-overlay end*/}
              <div className="featured-content">
                <div className="featured-title">
                  {/* featured-title */}
                  <h5>
                    <a href={process.env.PUBLIC_URL + '/Single_style1'}>Web Devlopment</a>
                  </h5>
                </div>
              </div>
            </div>
            {/* featured-thumbnail */}
          </div>
        </Slider>
      </div>
    </section>
    {/* process-section end */}
  </Layout>
);

export default IndexPage;
