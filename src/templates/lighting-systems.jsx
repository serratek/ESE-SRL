import React from 'react';
import Slider from 'react-slick';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/lighting-systems/sistemas-iluminacion-01.jpg';
import imageSlider2 from '../assets/images/pages/lighting-systems/sistemas-iluminacion-02.jpg';
import imageSlider3 from '../assets/images/pages/lighting-systems/sistemas-iluminacion-03.jpg';
import imageSlider4 from '../assets/images/pages/lighting-systems/sistemas-iluminacion-04.png';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LightingSystemsPage = () => {
  return (
    <Layout title={{ id: 'menu.lightingSystems' }} isPageTitle>
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
                        id={'businessUnits.lightingSystems.text'}
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
                      <img className="img-fluid" src={imageSlider1} alt="Lighting Systems" />
                      <img className="img-fluid" src={imageSlider2} alt="Lighting Systems" />
                      <img className="img-fluid" src={imageSlider3} alt="Lighting Systems" />
                      <img className="img-fluid" src={imageSlider4} alt="Lighting Systems" />
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

export default LightingSystemsPage;
