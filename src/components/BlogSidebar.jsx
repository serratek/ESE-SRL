import React from 'react';

import LatestNews from '../components/LatestNews';

const BlogSidebar = () => {
  return (
    <div>
      <aside className="widget post-widget">
        <h3 className="widget-title">Latest News</h3>
        <LatestNews />
      </aside>
      <div className="widget widget_media_image">
        <div className="banner-img-box ttm-textcolor-white text-left">
          <div className="featured-content featured-content-banner">
            <i className="flaticon flaticon-call" />
            <div className="featured-title ttm-box-title">
              <h5>How Can We Help?</h5>
            </div>
            <div className="featured-desc">
              <p>
                If you need any help, please
                <br /> feel free to contact us.
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
    </div>
  );
};

export default BlogSidebar;
