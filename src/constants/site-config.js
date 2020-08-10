const config = {
  siteTitle: 'ESE SRL', // Site title.
  siteTitleShort: 'ESE SRL', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'ESE SRL', // Alternative site title for SEO.
  siteLogo: 'src/images/favicon/favicon.png', // Logo used for SEO and manifest.
  siteFavicon: 'src/images/favicon/favicon.png',
  siteImage: 'https://devhance.co/images/photos/devhance.png',
  siteUrl: 'http://ese-srl.com', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'siteDescription', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: '', // Title of the RSS feed
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'ESE SRL', // Username to display in the author segment.
  userEmail: 'info@ese-srl.com', // Email used for RSS feed's author segment
  userTwitter: '@devhance_co', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Bolivia', // User location to display in the author segment.
  userAvatar: 'src/images/favicon/favicon.png', // User avatar to display in the author segment.
  userDescription: '', // User description to display in the author segment.
  themeColor: '#3eb5f1', // Used for setting manifest and progress theme colors.
  backgroundColor: '#3eb5f1', // Used for setting manifest background color.
  copyright: 'Copyright © Devhance 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  locales: ['es', 'en'],
  defaultLang: 'es',
  apiEndpoint: 'https://esesrl.prismic.io/graphql',
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`;

module.exports = config;
