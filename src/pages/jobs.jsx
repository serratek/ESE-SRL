import React from 'react';

import Layout from '../components/Layout';

import imageProject1 from '../assets/images/projects/ciclo-combinado-termoelectrica-warnes.jpg';
import imageCustomer from '../assets/images/projects/ende-siemens.jpg';

const JobsPage = () => {
  return (
    <Layout title="Job with ESE" isPageTitle>
      <section className="ttm-row contact-section clearfix">
        <div className="container-xl">
          <div className="row">
            {/* row */}
            <div className="col-lg-8 offset-lg-2">
              {/* section-title */}
              <div className="section-title with-desc text-center clearfix">
                <div className="title-header">
                  <h5>Contact Us</h5>
                  <h2 className="title">Drop us a line</h2>
                </div>
              </div>
              {/* section-title end */}
            </div>
          </div>
          {/* row end */}
          {/* row */}
          <form
            id="ttm-quote-form"
            className="row ttm-quote-form clearfix"
            method="post"
            action="#"
          >
            <div className="col-sm-6 col-md-6">
              <div className="form-group">
                <input
                  name="firstName"
                  type="text"
                  className="form-control bg-white border"
                  placeholder="First Name*"
                  required="required"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-group">
                <input
                  name="lastName"
                  type="text"
                  className="form-control bg-white border"
                  placeholder="Last Name*"
                  required="required"
                />
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <input
                  name="address"
                  type="email"
                  placeholder="Email Address*"
                  required="required"
                  className="form-control bg-white border"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div className="form-group">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  className="form-control bg-white border"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="Massage"
                  rows={5}
                  placeholder="Write A Massage..."
                  required="required"
                  className="form-control bg-white border"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-12">
              <div className="form-group">
                <input
                  name="resume"
                  type="file"
                  placeholder="Resume"
                  className="form-control bg-white border"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-center">
                <button
                  type="submit"
                  id="submit"
                  className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mt-5 res-991-mt-20"
                  value
                >
                  Submit Massage
                </button>
              </div>
            </div>
          </form>
          {/* row end*/}
        </div>
      </section>
      {/* contact-box-section */}
      <div className="ttm-row contact-box-section ttm-bgcolor-grey clearfix">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-4 res-991-mb-60 res-991-mt-30">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="far fa-envelope" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>Email</h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>
                      <a href="mailto:info@ese-srl.com">info@ese-srl.com</a>
                    </p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
            <div className="col-lg-4 res-991-mb-60">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="fa fa-phone" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>Phone</h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>+ (591) (3) 3460561</p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
            <div className="col-lg-4">
              {/* featured-icon-box */}
              <div className="featured-icon-box style8 text-center box-shadow h-100">
                <div className="featured-icon">
                  {/* featured-icon*/}
                  <div className="ttm-icon ttm-bgcolor-white ttm-icon_element-size-md rounded-circle">
                    <i className="ti ti-target" />
                  </div>
                </div>
                {/* featured-icon */}
                <div className="featured-content">
                  {/* featured-content */}
                  <div className="featured-title">
                    <h5>Address</h5>
                    {/* featured-title */}
                  </div>
                  <div className="featured-desc">
                    {/* featured-description */}
                    <p>Industrial Park of Santa Cruz P.I. 23 and 24. Transversal Avenue 1</p>
                  </div>
                </div>
                {/* featured-content END*/}
              </div>
              {/* featured-icon-box */}
            </div>
          </div>
        </div>
      </div>
      {/* contact-box-section end */}
      {/* map-section */}
      <section className="ttm-row map-section res-991-p-0 clearfix">
        <div className="map-wrapper">
          <iframe
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30396.513405374746!2d-63.144212!3d-17.765163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcdca1225df7093cd!2sESE!5e0!3m2!1sen!2sus!4v1596459029180!5m2!1sen!2sus"
            frameBorder="0"
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </section>
      {/* map-section end */}
    </Layout>
  );
};

export default JobsPage;
