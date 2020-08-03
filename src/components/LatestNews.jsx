import React from 'react';
import { Link } from 'gatsby';

import imageNews from '../assets/images/news/finergy2019.jpg';

const LatestNews = () => {
  return (
    <ul className="widget-post ttm-recent-post-list">
      <li>
        <Link to="/article/">
          <img src={imageNews} alt="post-img" />
        </Link>
        <Link to="/article/">More than 120 workers perform the reading of meters for CRE</Link>
        <span className="post-date">
          <i className="fa fa-calendar" />
          May 01, 2020
        </span>
      </li>
      <li>
        <Link to="/article/">
          <img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img" />
        </Link>
        <Link to="/article/">You Must Try 20 Secret Of Digital Transform</Link>
        <span className="post-date">
          <i className="fa fa-calendar" />
          May 03, 2019
        </span>
      </li>
      <li>
        <Link to="/article/">
          <img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img" />
        </Link>
        <Link to="/article/">10 PHP Frameworks You Need To Use Anywhere</Link>
        <span className="post-date">
          <i className="fa fa-calendar" />
          May 05, 2019
        </span>
      </li>
    </ul>
  );
};

export default LatestNews;
