import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Location } from '@reach/router';
import { IntlProvider } from 'react-intl';

import PageTitle from './PageTitle';
import Header from './Header';
import Footer from './Footer';

import esMessages from '../locales/es.js';
import enMessages from '../locales/en.js';

import config from '../constants/site-config';

// Styles
import '../assets/styles/main.scss';

const messages = {
  es: esMessages,
  en: enMessages,
};

const Layout = ({ isMainPage = false, isPageTitle, children, title, location }) => {
  const path_splits = location.pathname.split('/');
  let locale = config.defaultLang;
  const incipit = path_splits[1];
  if (config.locales.indexOf(incipit) > -1) {
    locale = incipit;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
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
    </IntlProvider>
  );
};

const WithLocationLayout = (props) => (
  <Location>{({ location }) => <Layout {...props} location={location} />}</Location>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithLocationLayout;
