import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { useIntl, FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import JobContacts from '../components/JobContacts';

const JobsPage = ({ data }) => {
  const jobData = data.prismic.job;
  const intl = useIntl();

  return (
    <Layout title="Job with ESE" isPageTitle>
      <section className="ttm-row zero-padding-section clearfix">
        <div className="container-xl">
          <div className="row no-gutters">
            {/* row */}

            <div className="col-lg-5 col-xl-5">
              <div className="spacing-5">
                <div className="ttm-pf-single-detail-box mb-35">
                  <div className="ttm-pf-single-title">
                    <h5>{RichText.asText(jobData.title)}</h5>
                  </div>
                  {RichText.render(jobData.description)}
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7">
              <div className="spacing-5">
                {/* section title */}
                <div className="section-title with-desc clearfix">
                  <div className="title-header">
                    <h5>Contact Us</h5>
                    <h2 className="title">Apply for this Job</h2>
                  </div>
                </div>
                {/* section title end */}
                {/* form */}
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
                        placeholder={`${intl.formatMessage({ id: 'inputs.firstName' })}*`}
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
                        placeholder={`${intl.formatMessage({ id: 'inputs.lastName' })}*`}
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
                        placeholder={`${intl.formatMessage({ id: 'inputs.emailAddress' })}*`}
                        className="form-control bg-white border"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        type="text"
                        placeholder={intl.formatMessage({ id: 'inputs.phoneNumber' })}
                        className="form-control bg-white border"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="Massage"
                        rows={5}
                        placeholder={intl.formatMessage({ id: 'inputs.writeMassage' })}
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
                        Submit the Application
                      </button>
                    </div>
                  </div>
                </form>
                {/* form */}
              </div>
            </div>
            {/* row */}
          </div>
        </div>
      </section>
      <JobContacts />
    </Layout>
  );
};

export const pageQuery = graphql`
  query Job($uid: String!, $lang: String!) {
    prismic {
      job(lang: $lang, uid: $uid) {
        title
        description
      }
    }
  }
`;

export default JobsPage;
