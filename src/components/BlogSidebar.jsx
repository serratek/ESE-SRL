import React from 'react';
import { FormattedMessage } from 'react-intl';

import LatestNews from '../components/LatestNews';
import HowCanWeHelpBlock from './HowCanWeHelpBlock';

const BlogSidebar = () => {
  return (
    <div>
      <aside className="widget post-widget">
        <h3 className="widget-title">
          <FormattedMessage id={'common.latestNews'} />
        </h3>
        <LatestNews />
      </aside>
      <HowCanWeHelpBlock />
    </div>
  );
};

export default BlogSidebar;
