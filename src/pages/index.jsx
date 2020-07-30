import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';

import Layout from '../components/Layout';
import BussinessUnits from '../components/BusinessUnits';

import image from '../assets/images/bg-image/slider-mainbg-003.jpg';
import imageCustomer1 from '../assets/images/customers/cre-logo.png';
import imageCustomer2 from '../assets/images/customers/ende-andina-logo.png';
import imageCustomer3 from '../assets/images/customers/ende.png';
import imageCustomer4 from '../assets/images/customers/gobernacion-logo.png';
import imageCustomer5 from '../assets/images/customers/tde-logo.png';
import imageCustomer6 from '../assets/images/customers/valle-hermoso-logo.png';
import imageNews1 from '../assets/images/news/termoelctrica_Del_Sur.jpg';
import imageNews2 from '../assets/images/news/finergy2019.jpg';
import imageProject1 from '../assets/images/projects/ciclo-combinado-termoelectrica-warnes.jpg';
import imageProject2 from '../assets/images/projects/diseno-pailon-sur.jpg';
import imageProject3 from '../assets/images/projects/subestacion-tarija.jpg';

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
  <Layout title="Home" isMainPage>
    <section>
      <div className="container-fluid">
        <div className="row">
          <div id="Home_banner2" className="carousel carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
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
                          View more
                        </button>
                        <button className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey">
                          Contact us
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* about us */}
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
    <BussinessUnits />
    {/* service-section end*/}

    {/* our-partner-section */}
    <section className="ttm-row our-partner-section ttm-bgcolor-skincolor res-991-mt-0 res-991-p-0 clearfix">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 text-center">
            <Slider
              className="row slick_slider ttm-boxes-spacing-30px"
              {...slick_slider}
              slidesToShow={6}
              variableWidth
            >
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer1} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer2} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer3} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer4} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer5} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer6} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer1} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer2} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer3} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer4} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer5} alt="image" />
                  </div>
                </div>
              </div>
              <div className="ttm-box-col-wrapper">
                <div className="client-box ttm-box-view-boxed-logo">
                  <div className="client">
                    <img className="img-fluid" src={imageCustomer6} alt="image" />
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
                <img className="img-fluid" alt="" src={imageNews1} />
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
                      Authorities inaugurate 2nd phase of the Termoeléctrica del Sur in Tarija
                    </a>
                  </h5>
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
                <img className="img-fluid" alt="" src={imageNews2} />
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
                      ESE presents stand at Finergy 2019; He received the "Molino Chiquitano" award
                    </a>
                  </h5>
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
                <img className="img-fluid" alt="" src={imageNews1} />
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
                      Authorities inaugurate 2nd phase of the Termoeléctrica del Sur in Tarija
                    </a>
                  </h5>
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
                <img className="img-fluid" alt="" src={imageNews2} />
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
                      ESE presents stand at Finergy 2019; He received the "Molino Chiquitano" award
                    </a>
                  </h5>
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
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="ttm-box-col-wrapper">
              {/* featured-imagebox-services */}
              <div className="featured-imagebox featured-imagebox-services style1">
                <div className="featured-thumbnail">
                  {/* featured-thumbnail */}
                  <img className="img-fluid" src={imageProject1} alt="image" />
                </div>
                <div className="featured-content box-shadow">
                  <div className="featured-title">
                    {/* featured-title */}
                    <h5>
                      <a href={process.env.PUBLIC_URL + '/It_consultancy'}>
                        Extension of single cycle to combined cycle of the Warnes Thermoelectric
                        Plant
                      </a>
                    </h5>
                  </div>
                  <div className="featured-desc">
                    {/* featured-title */}
                    <p>They will install two new modules. It is expected to open in 2019</p>
                  </div>
                  <a
                    className="ttm-btn ttm-btn-size-sm ttm-textcolor-skincolor btn-inline ttm-icon-btn-right mt-2"
                    href={process.env.PUBLIC_URL + '/It_consultancy'}
                  >
                    Read More <i className="ti ti-angle-double-right" />
                  </a>
                </div>
              </div>
              {/* featured-imagebox-services */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
    {/* process-section end */}
  </Layout>
);

export default IndexPage;
