import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from './LocalizedLink';
import HowCanWeHelpBlock from './HowCanWeHelpBlock';

const Sidebar = () => {
  return (
    <div>
      <div className="widget widget-nav-menu">
        <ul className="widget-menu">
          <li>
            <Link to="/power-generation/" activeClassName="active">
              <FormattedMessage id={'menu.powerGeneration'} />
            </Link>
          </li>
          <li>
            <Link to="/power-substations/" activeClassName="active">
              <FormattedMessage id={'menu.powerSubstations'} />
            </Link>
          </li>
          <li>
            <Link to="/oil-and-gas/" activeClassName="active">
              <FormattedMessage id={'menu.oilGas'} />
            </Link>
          </li>
          <li>
            <Link to="/industry/" activeClassName="active">
              <FormattedMessage id={'menu.industry'} />
            </Link>
          </li>
          <li>
            <Link to="/distribution-electrical-grids/" activeClassName="active">
              <FormattedMessage id={'menu.distributionElectricalGrids'} />
            </Link>
          </li>
          <li>
            <Link to="/lines-of-transmission/" activeClassName="active">
              <FormattedMessage id={'menu.linesOfTransmission'} />
            </Link>
          </li>
          <li>
            <Link to="/lighting-systems/" activeClassName="active">
              <FormattedMessage id={'menu.lightingSystems'} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="widget widget-text">
        <h3 className="widget-title">
          <FormattedMessage id={'menu.aboutUs'} />
        </h3>
        <div className="ttm-author-widget">
          <p className="author-widget_text">
            <FormattedMessage id={'home.fsP'} />
          </p>
        </div>
      </div>
      {/* <div className="widget widget-download">
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
      </div> */}
      <HowCanWeHelpBlock />
    </div>
  );
};

export default Sidebar;
