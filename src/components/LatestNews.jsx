import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Date, RichText } from 'prismic-reactjs';
import { injectIntl } from 'react-intl';

import Link from './LocalizedLink';

import imageNews from '../assets/images/news/finergy2019.jpg';

const LatestNews = ({ intl: { locale } }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          prismic {
            allArticles(first: 10) {
              edges {
                node {
                  title
                  date
                  _meta {
                    uid
                    lang
                  }
                  image
                  imageSharp {
                    childImageSharp {
                      fixed(width: 70, height: 70) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const langPrismic = () => {
          switch (locale) {
            case 'es':
              return 'es-bo';
            case 'en':
              return 'en-us';
          }
        };
        const prismicData = data.prismic.allArticles.edges
          .filter(({ node }) => node._meta.lang === langPrismic())
          .slice(0, 3);

        return (
          <ul className="widget-post ttm-recent-post-list">
            {prismicData.map(({ node }, index) => (
              <li key={index}>
                <Link to={`/news/${node._meta.uid}`}>
                  <Img fixed={node.imageSharp.childImageSharp.fixed} alt="post-img" />
                </Link>
                <div>
                  <Link to={`/news/${node._meta.uid}`}>
                    {RichText.asText(node.title).length > 45
                      ? `${RichText.asText(node.title).slice(0, 45)}...`
                      : RichText.asText(node.title)}
                  </Link>
                  {node.date && (
                    <span className="post-date">
                      <i className="fa fa-calendar" />
                      {Date(node.date).toLocaleDateString('en-GB', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        );
      }}
    />
  );
};

export default injectIntl(LatestNews);
