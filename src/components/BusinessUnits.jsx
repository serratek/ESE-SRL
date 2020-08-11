import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from './LocalizedLink';

const BusinessUnits = () => {
  return (
    <section className="ttm-row service-section-style2 ttm-bgcolor-grey clearfix">
      <div className="container-xl">
        <div className="row">
          {/* row */}
          <div className="col-lg-12">
            {/* section title */}
            <div className="section-title with-desc text-center clearfix">
              <div className="title-header">
                <h5>We Make Connections</h5>
                <h2 className="title">
                  We provide best business <span>Units</span>
                </h2>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        <div className="row no-gutters">
          {/* row */}
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.powerGeneration'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Our firm is an expert to creates an efficient user interface that make user
                    interaction.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-system" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/power-generation/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.powerSubstations'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We provide an IT management services is for according to an organization’s
                    needs.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-computer" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/power-substations/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.oilGas'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Expertise in a IT consultancy for the many companies, for their different
                    working areas.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-chart" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/oil-and-gas/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.industry'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We develop, migrate &amp; work on applications to ensure that run capably on
                    cloud.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-data" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/industry/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>

            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.distributionElectricalGrids'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Our firm is an expert to creates an efficient user interface that make user
                    interaction.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-system" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/distribution-electrical-grids/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.linesOfTransmission'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    We provide an IT management services is for according to an organization’s
                    needs.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-computer" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/lines-of-transmission/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
          <div className="col-md-6 col-lg-3">
            {/*  featured-icon-box */}
            <div className="featured-icon-box style6">
              <div className="featured-content">
                {/*  featured-content */}
                <div className="featured-title">
                  {/*  featured-title */}
                  <h5>
                    <FormattedMessage id={'menu.lightingSystems'} />
                  </h5>
                </div>
                <div className="featured-desc">
                  {/*  featured-desc */}
                  <p>
                    Expertise in a IT consultancy for the many companies, for their different
                    working areas.
                  </p>
                </div>
              </div>
              <div className="featured-icon">
                {/*  featured-icon */}
                <div className="ttm-icon ttm-icon_element-size-lg">
                  <i className="flaticon flaticon-chart" />
                  {/*  ttm-icon */}
                </div>
              </div>
              <Link to="/lighting-systems/" className="ttm-btn btn-inline style2">
                Read More{' '}
              </Link>
            </div>
            {/*  featured-icon-box END */}
          </div>
        </div>
        {/* row end */}
      </div>
    </section>
  );
};

export default BusinessUnits;
