import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { RichText } from 'prismic-reactjs';

import imageNews from '../assets/images/news/finergy2019.jpg';

const LatestNews = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          prismic {
            allArticles(first: 3) {
              edges {
                node {
                  title
                  date
                  _meta {
                    uid
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
        const prismicData = data.prismic.allArticles.edges;
        console.log(data);
        return (
          <ul className="widget-post ttm-recent-post-list">
            {prismicData.map(({ node }, index) => (
              <li key={index}>
                <Link to="/article/">
                  <Img fixed={node.imageSharp.childImageSharp.fixed} alt="post-img" />
                </Link>
                <div>
                  <Link to="/article/">
                    {RichText.asText(node.title).length > 45
                      ? `${RichText.asText(node.title).slice(0, 45)}...`
                      : RichText.asText(node.title)}
                  </Link>
                  <span className="post-date">
                    <i className="fa fa-calendar" />
                    May 01, 2020
                  </span>
                </div>
              </li>
            ))}
          </ul>
        );
      }}
    />
  );
};

export default LatestNews;
