import React from 'react';
import Slider from 'react-slick';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/lines-of-transmission/lineas-de-transmision-01.jpg';
import imageSlider2 from '../assets/images/pages/lines-of-transmission/lineas-de-transmision-02.jpg';
import imageSlider3 from '../assets/images/pages/lines-of-transmission/lineas-de-transmision-03.jpg';
import imageSlider4 from '../assets/images/pages/lines-of-transmission/lineas-de-transmision-04.jpg';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const LinesOfTransmissionyPage = () => {
  return (
    <Layout title="Lines of Transmission" isPageTitle>
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
                        The transmission lines allow the transportation of electrical energy from
                        the generation plants to a substation, between two substations or between
                        the same generators. These lines are characterized by their wide length,
                        capacity and power to carry voltage levels up to more than 500 kV.
                      </p>
                      <p className="mb-0">
                        ESE made the electromechanical assembly and civil works between Cochabamba
                        and La Paz on the 4,500 meters above sea level that included the
                        construction of entry, exit and expansion bays. Several transmission lines
                        were also carried out between the boundaries of La Paz and Beni with results
                        that were highly accepted by customers. ESE has the personnel trained to
                        make the foundations for transformers, fire walls, porticos, patio
                        equipment, electrical conduits, control rooms, access roads and all
                        complementary works.
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
                      <img className="img-fluid" src={imageSlider1} alt="Lines of Transmission" />
                      <img className="img-fluid" src={imageSlider2} alt="Lines of Transmission" />
                      <img className="img-fluid" src={imageSlider3} alt="Lines of Transmission" />
                      <img className="img-fluid" src={imageSlider4} alt="Lines of Transmission" />
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

export default LinesOfTransmissionyPage;
