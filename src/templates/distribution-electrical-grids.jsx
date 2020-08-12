import React from 'react';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/distribution-electrical-grids/redes-01.jpg';
import imageSlider2 from '../assets/images/pages/distribution-electrical-grids/redes-02.jpg';
import imageSlider3 from '../assets/images/pages/distribution-electrical-grids/redes-03.jpg';
import imageSlider4 from '../assets/images/pages/distribution-electrical-grids/redes-04.jpg';
import imageSlider5 from '../assets/images/pages/distribution-electrical-grids/redes-05.jpg';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const DistributionElectricalGridsPage = () => {
  return (
    <Layout title={{ id: 'menu.distributionElectricalGrids' }} isPageTitle>
      {/* page-title end*/}
      <div className="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
        <div className="container-xl">
          {/* row */}
          <div className="row">
            <div className="col-lg-9 content-area order-lg-2">
              {/* ttm-service-single-content-are */}
              {/* ttm-service-single-content-are */}
              <div className="ttm-service-single-content-area">
                <div className="ttm-service-description">
                  <div className="row">
                    <div className="col-12">
                      <FormattedMessage
                        id={'businessUnits.distributionElectricalGrids.text'}
                        values={{
                          p: (chunks) => <p>{chunks}</p>,
                        }}
                      />
                    </div>
                  </div>
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                  </div>
                  {/* separator */}

                  <div className="ttm_single_image-wrapper mb-35 res-991-mb-20">
                    <Slider {...settings}>
                      <img
                        className="img-fluid"
                        src={imageSlider1}
                        alt="Distribution Electrical Grids"
                      />
                      <img
                        className="img-fluid"
                        src={imageSlider2}
                        alt="Distribution Electrical Grids"
                      />
                      <img
                        className="img-fluid"
                        src={imageSlider3}
                        alt="Distribution Electrical Grids"
                      />
                      <img
                        className="img-fluid"
                        src={imageSlider4}
                        alt="Distribution Electrical Grids"
                      />
                      <img
                        className="img-fluid"
                        src={imageSlider5}
                        alt="Distribution Electrical Grids"
                      />
                    </Slider>
                  </div>

                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                  </div>
                  {/* separator */}
                  <div className="featured-imagebox-blog">
                    <div className="featured-content">
                      <div className="featured-title">
                        <h6>INSTALLATION OF LOW VOLTAGE (BT)</h6>
                      </div>
                      <div className="featured-desc">
                        <p>
                          A low voltage installation is considered to be a system whose nominal
                          voltage is less than or equal to 1,000 volts (V) in alternating current
                          and 1,500 V in direct current. The ESE staff has extensive experience in
                          this type of installation for both private projects and public spaces, for
                          example, in the main square of Santa Cruz, cattle ranches, industries,
                          construction companies, among others.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="featured-imagebox-blog">
                    <div className="featured-content">
                      <div className="featured-title">
                        <h6>INSTALLATION OF MEDIUM VOLTAGE (MT)</h6>
                      </div>
                      <div className="featured-desc">
                        <p>
                          ESE has the trained staff, equipment and experience to design, build and
                          maintain these electrical grids that have a nominal voltage of 1 to 30
                          kilovolts (kV). Among its permanent clients is identified the Governor of
                          Santa Cruz, CRE, industrial companies, among others.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="featured-imagebox-blog">
                    <div className="featured-content">
                      <div className="featured-title">
                        <h6>ENERGIZED LINES</h6>
                      </div>
                      <div className="featured-desc">
                        <p>
                          When the job demands that the electrical connection is not interrupted,
                          ESE has at least four specialized vehicles to work with energized lines,
                          that is, lines in which tasks can be performed without power cuts. The
                          company also has the personnel trained to operate with voltage from 220 V
                          to 24,900 V.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                  </div>
                  {/* separator */}
                </div>
              </div>
              {/* ttm-service-single-content-are end */}
            </div>
            <div className="col-lg-3 widget-area">
              <Sidebar />
            </div>
          </div>
          {/* row end */}
        </div>
      </div>
    </Layout>
  );
};

export default DistributionElectricalGridsPage;
