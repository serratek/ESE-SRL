import React from 'react';
import { Helmet } from 'react-helmet';

import PageTitle from './PageTitle';
import Header from './Header';
import Footer from './Footer';

// Styles
import '../assets/styles/main.scss';

const Layout = ({ isMainPage = false, isPageTitle, children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
      </Helmet>

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
    </>
  );
};

export default Layout;
