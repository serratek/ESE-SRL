const config = require('./src/constants/site-config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        whitelist: ['header', 'mobilemenu', 'nav-icon1'],
        whitelistPatternsChildren: [
          /^ti-/,
          /^fa-/,
          /^ttm-btn/,
          /^ttm-icon/,
          /^ttm-tabs/,
          /^ttm-tab/,
          /^c-timeline/,
          /^flaticon/,
          /^ttm-/,
          /^hamburger/,
          /^navbar/,
        ],
        purgeOnly: [
          '/main.scss',
          '/shortcode.scss',
          '/bootstrap.min.css',
          '/animate.css',
          '/slick.css',
        ],
      },
    },
    `gatsby-plugin-preload-fonts`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links', // This plugin intercepts all local links that have not been created in React using gatsby-link, and replaces their behavior with that of the gatsby-link navigate.
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'esesrl', // required
        previews: false, // optional, default: true
      },
    },
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    //   options: {},
    // },
  ],
};
