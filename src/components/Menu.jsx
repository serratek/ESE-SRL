import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from './LocalizedLink';

const Menu = () => {
  return (
    <nav id="menu" role="navigation" className="menu">
      <ul>
        <li className="menu-hasdropdown">
          <Link to="/">
            <FormattedMessage id={'menu.home'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/about-us/">
            <FormattedMessage id={'menu.aboutUs'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <a>
            <FormattedMessage id={'menu.businessUnits'} />
          </a>
          <ul className="menu-dropdown">
            <li>
              <Link to="/power-generation/">
                <FormattedMessage id={'menu.powerGeneration'} />
              </Link>
            </li>
            <li>
              <Link to="/power-substations/">
                <FormattedMessage id={'menu.powerSubstations'} />
              </Link>
            </li>
            <li>
              <Link to="/oil-and-gas/">
                <FormattedMessage id={'menu.oilGas'} />
              </Link>
            </li>
            <li>
              <Link to="/industry/">
                <FormattedMessage id={'menu.industry'} />
              </Link>
            </li>
            <li>
              <Link to="/distribution-electrical-grids/">
                <FormattedMessage id={'menu.distributionElectricalGrids'} />
              </Link>
            </li>
            <li>
              <Link to="/lines-of-transmission/">
                <FormattedMessage id={'menu.linesOfTransmission'} />
              </Link>
            </li>
            <li>
              <Link to="/lighting-systems/">
                <FormattedMessage id={'menu.lightingSystems'} />
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/projects/">
            <FormattedMessage id={'menu.projects'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/social-contribution/">
            <FormattedMessage id={'menu.socialContribution'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/jobs/">
            <FormattedMessage id={'menu.jobs'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/news/">
            <FormattedMessage id={'menu.news'} />
          </Link>
        </li>
        <li className="menu-hasdropdown">
          <Link to="/contact-us/">
            <FormattedMessage id={'menu.contactUs'} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
