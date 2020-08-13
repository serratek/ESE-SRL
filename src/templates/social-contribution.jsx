import React from 'react';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';

const SocialContributionPage = () => {
  return (
    <Layout title={{ id: 'socialContribution.seoTitle' }} isPageTitle>
      <div className="ttm-row grid-section clearfix">
        {/* aboutus-section end*/}
        <div className="container-xl">
          <div className="section-title clearfix">
            <div className="title-header">
              <h5>
                <FormattedMessage id={'socialContribution.subtitle'} />
              </h5>
              <h2 className="title">
                <FormattedMessage
                  id={'socialContribution.title'}
                  values={{
                    colored: (chunks) => <span>{chunks}</span>,
                  }}
                />
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
                            <FormattedMessage id={'socialContribution.desc'} />
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
                                <h5 className="fw-500">
                                  <FormattedMessage id={'socialContribution.item1'} />
                                </h5>
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
                                <h5 className="fw-500">
                                  <FormattedMessage id={'socialContribution.item2'} />
                                </h5>
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
                                <h5 className="fw-500">
                                  <FormattedMessage id={'socialContribution.item3'} />
                                </h5>
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
                                <CountUp start={0} end={29} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">
                                <FormattedMessage id={'socialContribution.item4'} />
                              </h3>
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
                                <CountUp start={0} end={1000} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">
                                <FormattedMessage id={'socialContribution.item5'} />
                              </h3>
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
                                <CountUp start={0} end={1000} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">
                                <FormattedMessage id={'socialContribution.item6'} />
                              </h3>
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
                  <h2 className="title">
                    <FormattedMessage id={'socialContribution.reviews'} />
                  </h2>
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
                        text: 'socialContribution.review1.text',
                        name: 'ROBERTO SANTIBAÑEZ',
                        position: 'socialContribution.review1.position',
                      },
                      {
                        text: 'socialContribution.review2.text',
                        name: 'LUIS FERNANDO SAAVEDRA',
                        position: 'socialContribution.review2.position',
                      },
                      {
                        text: 'socialContribution.review3.text',
                        name: 'CORCINO DÍAZ',
                        position: 'socialContribution.review3.position',
                      },
                      {
                        text: 'socialContribution.review4.text',
                        name: 'JULIO MATOS',
                        position: 'socialContribution.review4.position',
                      },
                      {
                        text: 'socialContribution.review5.text',
                        name: 'JOSÉ ANTONIO VICENTE',
                        position: 'socialContribution.review5.position',
                      },
                    ].map((item, index) => (
                      <div className="testimonials text-center" key={index}>
                        <div className="testimonial-content">
                          {/* testimonials-content */}
                          <blockquote>
                            "<FormattedMessage id={item.text} />"
                          </blockquote>
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
                            <label>
                              <FormattedMessage id={item.position} />
                            </label>
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
