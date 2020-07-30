import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <section>
      {/* page-title */}
      <div className="ttm-page-title-row">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <div className="title-box text-center">
                <div className="page-title-heading">
                  <h1 className="title">{title}</h1>
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
