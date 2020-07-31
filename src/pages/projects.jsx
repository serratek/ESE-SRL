import React from 'react';

import Layout from '../components/Layout';

import imageProject1 from '../assets/images/projects/ciclo-combinado-termoelectrica-warnes.jpg';
import imageCustomer from '../assets/images/projects/ende-siemens.jpg';

const ProjectPage = () => {
  return (
    <Layout title="Customers and Projects" isPageTitle>
      <div className="ttm-row grid-section clearfix">
        <div className="container-xl">
          {/* row */}
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="featured-imagebox featured-imagebox-services style1 mb-30">
                  <div className="featured-thumbnail">
                    <img className="img-fluid w-100" src={imageProject1} alt="image" />
                  </div>
                  <div className="featured-content box-shadow">
                    <div className="featured-title mb-20">
                      <h5>
                        Extension of single cycle to combined cycle of the Warnes Thermoelectric
                        Plant
                      </h5>
                    </div>
                    <div className="featured-desc">
                      <p>They will install two new modules. It is expected to open in 2019.</p>

                      <p>
                        <b>Benefit:</b> It will inject 280 megawatts (MW) into the SIN and together
                        with 200 MW, will generate 480 MW of power
                      </p>
                      {/* separator */}
                      <div className="separator">
                        <div className="sep-line mt-20 mb-20" />
                      </div>
                      {/* separator */}

                      <img
                        className="img-fluid"
                        src={imageCustomer}
                        alt="Extension of single cycle to combined cycle of the Warnes Thermoelectric Plant"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
