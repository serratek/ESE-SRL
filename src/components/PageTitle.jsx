import React from 'react';
import { useIntl } from 'react-intl';

const PageTitle = ({ title }) => {
  const intl = useIntl();

  const seoTitle = title && title.id ? intl.formatMessage({ id: title.id }) : title;

  return (
    <section>
      {/* page-title */}
      <div className="ttm-page-title-row">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box text-center">
                <div className="page-title-heading">
                  <h1 className="title">{seoTitle}</h1>
                </div>
              </div>
            </div>
            {/* /.col-md-12 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* page-title end*/}
    </section>
  );
};

export default PageTitle;
