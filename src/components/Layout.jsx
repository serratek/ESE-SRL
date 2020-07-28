import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

// Styles
import '../assets/styles/main.scss';

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
      </Helmet>

      <div className="page">
        <div className="site-main">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
