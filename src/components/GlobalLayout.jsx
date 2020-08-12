import React from 'react';

import { Location } from '@reach/router';
import { IntlProvider } from 'react-intl';

import esMessages from '../locales/es.js';
import enMessages from '../locales/en.js';

import config from '../constants/site-config';

const messages = {
  es: esMessages,
  en: enMessages,
};

const GlobalLayout = ({ location, ...props }) => {
  const path_splits = location.pathname.split('/');
  let locale = config.defaultLang;
  const incipit = path_splits[1];
  if (config.locales.indexOf(incipit) > -1) {
    locale = incipit;
  }

  return (
    <IntlProvider locale={locale} messages={messages[locale]} location={location} {...props} />
  );
};

const WithLocationGlobalLayout = (props) => {
  return <Location>{({ location }) => <GlobalLayout {...props} location={location} />}</Location>;
};

export default WithLocationGlobalLayout;
