import React from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';

import Layout from '../components/Layout';
import Link from '../components/LocalizedLink';
import JobContacts from '../components/JobContacts';

const JobsPage = ({ data }) => {
  const prismicDataAllJobs = data.prismic.allJobs.edges;

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
                  <h5>Jobs</h5>
                  <h2 className="title">Open roles</h2>
                </div>
              </div>
              {/* section-title end */}
            </div>
          </div>
          {/* row end */}

          <div className="featured-roles">
            {/* row */}
            {prismicDataAllJobs.map(({ node }, index) => (
              <div className="featured-role" key={index}>
                <div>
                  <div className="featured-content">
                    <div className="featured-title">
                      {/* featured title */}
                      <h5>{RichText.asText(node.title)}</h5>
                    </div>
                    <div className="featured-desc">
                      {/* featured desc */}
                      {RichText.render(node.description)}
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to={`/jobs/${node._meta.uid}`}
                    className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}

            {/* row end*/}
          </div>
        </div>
      </section>

      <JobContacts />
    </Layout>
  );
};

export const query = graphql`
  query($lang: String!) {
    prismic {
      allJobs(lang: $lang) {
        edges {
          node {
            title
            description
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`;

export default JobsPage;
