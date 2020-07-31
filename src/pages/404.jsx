import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout title="Page Not Found">
    {/* error 404 */}
    <section className="error-404">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            <div className="ttm-big-icon ttm-textcolor-skincolor">
              <i className="far fa-thumbs-down" />
            </div>
            <header className="page-header">
              <h1 className="page-title">404 ERROR</h1>
            </header>
            <div className="page-content">
              {' '}
              <p>This page may have been moved or deleted. Be sure to check your spelling.</p>
            </div>
            <Link className="ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor mb-15" to={'/'}>
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* error 404 end*/}
  </Layout>
);

export default NotFoundPage;
