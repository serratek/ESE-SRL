import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import config from '../constants/site-config';

const SEO = ({ title }) => {
  const intl = useIntl();

  const seoTitle =
    title && title.id ? intl.formatMessage({ id: title.id }) : title || config.siteTitle;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
    </Helmet>
  );
};

export default SEO;
