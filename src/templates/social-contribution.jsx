import React from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';

import Layout from '../components/Layout';

const SocialContributionPage = () => {
  return (
    <Layout title="Social Contribution" isPageTitle>
      <div className="ttm-row grid-section clearfix">
        {/* aboutus-section end*/}
        <div className="container-xl">
          <div className="section-title clearfix">
            <div className="title-header">
              <h5>Social Contribution</h5>
              <h2 className="title">
                Trusted by 5,000+ <span>Happy Customers</span>
              </h2>
            </div>
          </div>
        </div>

        <section className="ttm-row bottomzero-padding-section bg-img6 position-relative z-1 clearfix mt-70 res-991-mt-0">
          <div className="container-xl ">
            <div className="row no-gutters">
              <div className="col-lg-10 mb_80 res-991-mb-0">
                <div className="ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner"></div>
                  </div>
                  <div className="layer-content">
                    <div className="spacing-5">
                      {/* section title */}
                      <div className="section-title mb-4 clearfix">
                        <div className="title-desc">
                          <p>
                            During these 27 years ESE, together with other institutions, has
                            interconnected many families with their life plans, dreams and goals
                            through public lighting projects, energy distribution lines or simply
                            solving some electromechanical problem in the industry. Our services,
                            despite working in many cases as subcontractors, have a significant
                            social impact. In addition, we currently generate more than 800 direct
                            and at least 300 indirect jobs. Some of which are involved with this:
                          </p>
                        </div>
                      </div>
                      {/* section title end */}
                      <div className="row pt-3">
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-24h" />
                                {/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/*  featured-content */}
                              <div className="featured-title">
                                {/*  featured-title */}
                                <h5 className="fw-500">100% Satisfaction</h5>
                              </div>
                            </div>
                          </div>
                          {/*  featured-icon-box END */}
                        </div>
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />
                                {/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/*  featured-content */}
                              <div className="featured-title">
                                {/*  featured-title */}
                                <h5 className="fw-500">World Class Architect</h5>
                              </div>
                            </div>
                          </div>
                          {/*  featured-icon-box END */}
                        </div>
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">
                              {/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-code" />
                                {/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">
                              {/*  featured-content */}
                              <div className="featured-title">
                                {/*  featured-title */}
                                <h5 className="fw-500">World Class Design</h5>
                              </div>
                            </div>
                          </div>
                          {/*  featured-icon-box END */}
                        </div>
                      </div>
                      <div className="row ttm-fid-row-wrapper">
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">
                              {/*ttm-fid-left*/}
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-global" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                              {/*ttm-fid-contents*/}
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={27} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Years Experience</h3>
                              {/*ttm-fid-title*/}
                            </div>
                          </div>
                          {/* ttm-fid end*/}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-interaction" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={800} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Direct Jobs</h3>
                            </div>
                          </div>
                          {/* ttm-fid end*/}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-global-1" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={300} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Indirect Jobs</h3>
                            </div>
                          </div>
                          {/* ttm-fid end*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="element-row element-style clearfix mt-70 res-991-mt-20 ">
          <div className="container-xl">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title clearfix">
                  <h2 className="title">Reviews</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="ttm-row ttm-bgcolor-darkgrey ttm-bg clearfix">
            <div className="container-xl">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <Slider className="slick_slider" arrows={false} autoplay infinite>
                    {[
                      {
                        text:
                          '"After 28 years the energy came to Villa Diego. We used to ask for bottle oil from the Caranda plant in order to make lighters. I saw the ESE staff how they opened roads to put each pole. I am very happy because I can buy a refrigerator to store food"',
                        name: 'ROBERTO SANTIBAÑEZ',
                        position: 'Agricultor and Communal of Villa Diego',
                      },
                      {
                        text:
                          '"ESE is a very professional company that is providing electric services. It is a big company in its sector and we are very happy with its service"',
                        name: 'LUIS FERNANDO SAAVEDRA',
                        position: 'General Manager of DISMAC',
                      },
                      {
                        text: `Two months ago we have light here in Quebrada León. I'm going to buy a TV and a cell phone. The ESE workers came to our assemblies in order to coordinate the work of the post of the poles. I am very grateful for what they did"`,
                        name: 'CORCINO DÍAZ',
                        position: 'Farmer and Communal of Quebrada Leon-Ichilo',
                      },
                      {
                        text: `"In this work in Buenavista, ESE has accompanied us and is not the only work with the Government. The actively participation of the company and its owner manager, Mr. Arturo Vera, has been decisive in advancing Santa Cruz's progress in providing electric power to many families and communities”.`,
                        name: 'JULIO MATOS',
                        position:
                          'Energy director of the rural Infrastructure Program (PIR) - Santa Cruz Government',
                      },
                      {
                        text:
                          '"The ESE company recently did the implementation of the electrical part of a new line of noodles in a satisfactory way. The delivery time was completely fulfilled. In addition, all medium voltage installations, the implementation and current operation of our plant are carried out by ESE."',
                        name: 'JOSÉ ANTONIO VICENTE',
                        position: 'Famosa Plant Manager',
                      },
                    ].map((item, index) => (
                      <div className="testimonials text-center" key={index}>
                        <div className="testimonial-content">
                          {/* testimonials-content */}
                          <blockquote>{item.text}</blockquote>
                          <div className="ttm-ratting-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="testimonial-caption">
                            {/* testimonials-caption */}
                            <h6>{item.name}</h6>
                            <label>{item.position}</label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SocialContributionPage;
