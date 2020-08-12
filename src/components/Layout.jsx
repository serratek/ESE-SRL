import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SEO from './SEO';
import PageTitle from './PageTitle';
import Footer from './Footer';

// Styles
import '../assets/styles/main.scss';

const Layout = ({ isMainPage = false, isPageTitle, children, title, ...props }) => {
  return (
    <div>
      <SEO title={title} />

      <div className="page">
        <div className={`site-main ${isMainPage ? 'home-page' : ''} `}>
          <Header />
          <div>
            {isPageTitle && <PageTitle title={title} />}
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
