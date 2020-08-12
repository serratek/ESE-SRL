import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from 'apollo-link-prismic';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

import Layout from '../components/Layout';

import config from '../constants/site-config';

const client = new ApolloClient({
  link: PrismicLink({
    uri: config.apiEndpoint,
  }),
  cache: new InMemoryCache(),
});

const ProjectPage = ({ data, pageContext }) => {
  const PrismicDataAllProjects = data.prismic.allProjects;
  const [prismicProjects, setPrismicProjects] = useState(PrismicDataAllProjects.edges);

  useEffect(() => {
    let collectedData;
    const loadMoreProjects = async (res) => {
      const response = await client.query({
        query: gql`
          query($lang: String!, $after: String!) {
            allProjects(lang: $lang, after: $after) {
              edges {
                node {
                  title
                  description
                  image
                  logo
                  _meta {
                    id
                  }
                }
              }
              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        `,
        variables: { lang: pageContext.lang, after: res.pageInfo.endCursor },
      });
      collectedData = [...prismicProjects, ...response.data.allProjects.edges];

      if (response.data.allProjects.pageInfo.hasNextPage) {
        loadMoreProjects(response.data.allProjects);
      } else {
        setPrismicProjects(collectedData);
        return Promise.resolve();
      }
    };

    if (PrismicDataAllProjects.pageInfo.hasNextPage) {
      loadMoreProjects(PrismicDataAllProjects);
    }
  }, []);

  return (
    <Layout title={{ id: 'projects.seoTitle' }} isPageTitle>
      <div className="ttm-row grid-section clearfix">
        <div className="container-xl">
          {/* row */}
          <div className="row">
            {prismicProjects.map(({ node }, index) => (
              <div className="col-md-6" key={index}>
                <div className="featured-imagebox featured-imagebox-services style1 mb-30">
                  <div className="featured-thumbnail">
                    <img
                      className="img-fluid w-100"
                      src={node.image.url}
                      alt={RichText.asText(node.title)}
                    />
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title mb-20">
                      <h5>{RichText.asText(node.title)}</h5>
                    </div>
                    <div className="featured-desc">
                      {RichText.render(node.description)}
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-20 mb-20" />
                      </div>
                      {/* separator */}
                      {node.logo && <img className="img-fluid" src={node.logo.url} alt="logo" />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($lang: String!) {
    prismic {
      allProjects(lang: $lang) {
        edges {
          node {
            title
            description
            image
            logo
            _meta {
              id
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export default ProjectPage;
