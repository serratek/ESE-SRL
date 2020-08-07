import React from 'react';

import Layout from '../components/Layout';
import BlogSidebar from '../components/BlogSidebar';

import imageNews from '../assets/images/news/finergy2019.jpg';

const NewsPage = () => {
  return (
    <Layout title="News" isPageTitle>
      <div className="clearfix">
        <div className="sidebar ttm-bgcolor-white clearfix">
          <div className="container-xl">
            {/* row */}
            <div className="row">
              <div className="col-lg-9 content-area">
                {/* ttm-service-single-content-are */}
                <article className="post ttm-blog-single clearfix">
                  {/* post-featured-wrapper */}
                  <div className="ttm-post-featured-wrapper">
                    <div className="ttm-post-featured">
                      <img className="img-fluid w-100" src={imageNews} alt="post-01" />
                    </div>
                  </div>
                  {/* post-featured-wrapper end */}
                  {/* ttm-blog-classic-content */}
                  <div className="ttm-blog-single-content">
                    <div className="entry-content">
                      <div className="ttm-post-entry-header">
                        <div className="post-meta">
                          <span className="ttm-meta-line byline">
                            <i className="fa fa-user" />
                            By Admin
                          </span>
                          <span className="ttm-meta-line entry-date">
                            <i className="fa fa-calendar" />
                            <time
                              className="entry-date published"
                              dateTime="2018-07-28T00:39:29+00:00"
                            >
                              July 28, 2020
                            </time>
                          </span>
                        </div>
                      </div>
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-3 mb-4" />
                      </div>
                      {/* separator */}
                      <p>
                        For the third consecutive year, ESE participated in the International Energy
                        Fair (Finergy 2019). During this version, held on the third floor of the
                        Marriott hotel, the company received the "Chiquitano mill" award as the best
                        stand of the electricity sector, among some 31 participating companies.
                      </p>
                      <p>
                        The event was arranged on Thursday, March 28 with a toast and a subsequent
                        report from the authorities to each of the stands. This year ESE presented
                        several novelties: Four LED luminaires of 32, 35 90 and 140 W have been seen
                        that produce up to 50% savings in energy consumption rates; The Fluke
                        thermograph was presented to perform the measurements of the heat points in
                        the electrical installations and of the media, in a practical way, the main
                        safety standards that a worker in the electrical sector should have.
                      </p>
                      <p>
                        During the two days of the fair, ESE was visited by students, politicians,
                        authorities, academics and the general public. Most of the attendees who are
                        in the ESE stand information about our 8 business units and the main
                        projects we developed, as well as information about the equipment that is on
                        display.
                      </p>
                      <p>
                        We are grateful for the award received, thanks to the organizers and the
                        people who praised this event," he said. Diego Vera, CFO of ESE.
                      </p>
                      <p>
                        Finergy is an event that takes place since 2017 as a boost for the
                        electricity sector of the Secretariat of Energy of the Government of Santa
                        Cruz, the College of Engineers and Electronics of Santa Cruz and the Society
                        of Engineers of Bolivia, subsidiary Santa Cruz.
                      </p>

                      <img className="img-fluid" src={imageNews} alt="post-06" />
                    </div>

                    {/* separator */}
                    <div className="separator">
                      <div className="sep-line mt-4 mb-4" />
                    </div>
                    {/* separator */}
                    <div className="clearfix">
                      <div className="social-icons square">
                        <ul className="list-inline mb-0 d-inline-block">
                          <li className="social-facebook">
                            <a>
                              <i className="fab fa-facebook-f" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="social-twitter">
                            <a>
                              <i className="fab fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li className="social-linkedin">
                            <a>
                              <i className="fab fa-linkedin-in" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* ttm-blog-classic-content end */}
                </article>
                {/* ttm-service-single-content-are end */}
              </div>
              <div className="col-lg-3 widget-area">
                <BlogSidebar />
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
