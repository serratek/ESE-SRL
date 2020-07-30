import React from 'react';
import Slider from 'react-slick';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/industry/industria-sem-01.jpg';
import imageSlider2 from '../assets/images/pages/industry/industria-sem-02.jpg';
import imageSlider3 from '../assets/images/pages/industry/industria-sem-03.jpg';
import imageSlider4 from '../assets/images/pages/industry/industria-sem-04.jpg';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const IndustryPage = () => {
  return (
    <Layout title="Industry" isPageTitle>
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
                        Do you have new machinery and do not know how to install it? Or do you have
                        problems with the electrical installation of your industry? Or maybe you
                        want to install a new system? The Industrial Services of Electromechanical
                        Assembly (SEM), offers a specialized technical service adapted to the
                        requirement of your company. During the last five years, SEM staff has
                        installed industrial machinery of diverse complexity and dimension, assembly
                        of specialized equipment, medium voltage electrical systems, protection,
                        cells and installation of transformers.
                      </p>
                      <p className="mb-0">
                        Among our clients we can mention the Vicente Food Company, the company ICON,
                        Dismatec, Soboce, hotel Camino Real, Los Tajibos. IOL S.A. among other. "We
                        work hard in the finished and, without conditions, we put dedication to the
                        work", expresses one of the supervisors of the area.
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
                      <img className="img-fluid" src={imageSlider1} alt="Industry" />
                      <img className="img-fluid" src={imageSlider2} alt="Industry" />
                      <img className="img-fluid" src={imageSlider3} alt="Industry" />
                      <img className="img-fluid" src={imageSlider4} alt="Industry" />
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

export default IndustryPage;
