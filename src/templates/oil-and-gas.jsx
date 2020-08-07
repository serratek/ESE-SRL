import React from 'react';
import Slider from 'react-slick';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/oil-and-gas/petroleoygas-01.jpg';
import imageSlider2 from '../assets/images/pages/oil-and-gas/petroleoygas-02.jpg';
import imageSlider3 from '../assets/images/pages/oil-and-gas/petroleoygas-03.jpg';
import imageSlider4 from '../assets/images/pages/oil-and-gas/petroleoygas-04.jpg';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const OilAndGasPage = () => {
  return (
    <Layout title="Oil & Gas" isPageTitle>
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
                      <p>
                        ESE is able to provide integral solutions to companies that are upstream or
                        downstream of the oil sector. The area staff has more than 15 years of
                        experience in engineering, construction, commissioning and preventive,
                        predictive and corrective maintenance of electrical and mechanical systems
                        in fields, companies and the area of oil operation.
                      </p>
                      <p className="mb-0">
                        Among its main clients are YPFB Transporte, YPFB Refinación, Halliburton
                        Latin America SRL, Vintage Petroleum, GTB (Gas Trans Boliviano), Petrobras,
                        among others. "We comply with the procedures and standards of quality,
                        health and safety in the sector.
                      </p>
                    </div>
                  </div>
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-35 mb-35 res-991-mtb-20" />
                  </div>
                  {/* separator */}

                  <div className="ttm_single_image-wrapper mb-35 res-991-mb-20">
                    <Slider {...settings}>
                      <img className="img-fluid" src={imageSlider1} alt="Oil & Gas" />
                      <img className="img-fluid" src={imageSlider2} alt="Oil & Gas" />
                      <img className="img-fluid" src={imageSlider3} alt="Oil & Gas" />
                      <img className="img-fluid" src={imageSlider4} alt="Oil & Gas" />
                    </Slider>
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

export default OilAndGasPage;
