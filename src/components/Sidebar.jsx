import React from 'react';
import { Link } from 'gatsby';

const Sidebar = () => {
  return (
    <div>
      <div className="widget widget-nav-menu">
        <ul className="widget-menu">
          <li>
            <Link to="/power-generation/" activeClassName="active">
              Power Generation
            </Link>
          </li>
          <li>
            <Link to="/power-substations/" activeClassName="active">
              Power Substations
            </Link>
          </li>
          <li>
            <Link to="/oil-and-gas/" activeClassName="active">
              Oil & Gas
            </Link>
          </li>
          <li>
            <Link to="/industry/" activeClassName="active">
              Industry
            </Link>
          </li>
          <li>
            <Link to="/distribution-electrical-grids/" activeClassName="active">
              Distribution Electrical Grids
            </Link>
          </li>
          <li>
            <Link to="/lines-of-transmission/" activeClassName="active">
              Lines of Transmission
            </Link>
          </li>
          <li>
            <Link to="/lighting-systems/" activeClassName="active">
              Lighting Systems
            </Link>
          </li>
        </ul>
      </div>
      <div className="widget widget-text">
        <h3 className="widget-title">About Us</h3>
        <div className="ttm-author-widget">
          <div className="author-widget_img">
            <img
              className="author-img img-fluid"
              src="https://via.placeholder.com/294X190/444444.jpg"
              alt="author image"
            />
          </div>
          <h4 className="author-name">Altech-author</h4>
          <p className="author-widget_text">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece orem Ipsum is not simply random text. It has roots in a piece of loream classical.
          </p>
        </div>
      </div>
      <div className="widget widget-download">
        <h3 className="widget-title">Brouchers</h3>
        <ul className="download">
          <li>
            <i className="far fa-file-pdf" />
            <a title="Download">Download.pdf</a>
          </li>
          <li>
            <i className="far fa-file-word" />
            <a title="Download">Our ISO Certificate</a>
          </li>
          <li>
            <i className="far fa-file" />
            <a title="Download">Download.txt</a>
          </li>
        </ul>
      </div>
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

export default Sidebar;
