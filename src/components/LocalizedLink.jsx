import React from 'react';
import { Link } from 'gatsby';
import { injectIntl } from 'react-intl';

import config from '../constants/site-config';

const LocalizedLink = ({ to, intl: { locale }, ...props }) => {
  const path = locale === config.defaultLang ? to : `/${locale}${to}`;

  return <Link {...props} to={path} />;
};

export default injectIntl(LocalizedLink);
