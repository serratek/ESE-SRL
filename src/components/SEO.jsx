import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

import config from '../constants/site-config';

const SEO = ({ title }) => {
  const intl = useIntl();

  const seoTitle =
    title && title.id ? intl.formatMessage({ id: title.id }) : title || config.siteTitle;
  const seoDescription = 'ESE SRL - Empresa de Servicios Electromecánicos';

  return (
    <Helmet>
      <html lang={intl.locale} />
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    </Helmet>
  );
};

export default SEO;
