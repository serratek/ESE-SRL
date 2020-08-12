import React from 'react';
import { FormattedMessage } from 'react-intl';

const HowCanWeHelpBlock = () => {
  return (
    <div className="widget widget_media_image">
      <div className="banner-img-box ttm-textcolor-white text-left">
        <div className="featured-content featured-content-banner">
          <i className="flaticon flaticon-call" />
          <div className="featured-title ttm-box-title">
            <h5>
              <FormattedMessage id={'common.howHelpBlock.title'} />
            </h5>
          </div>
          <div className="featured-desc">
            <p>
              <FormattedMessage id={'common.howHelpBlock.desc'} />
            </p>
          </div>
          <ul>
            <li>
              <i className="fa fa-phone" />
              +591 3 3460561
            </li>
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:info@ese-srl.com">info@ese-srl.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowCanWeHelpBlock;
