import React from 'react';
import Slider from 'react-slick';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import imageSlider1 from '../assets/images/pages/power-generation/power-generation-01.jpg';
import imageSlider2 from '../assets/images/pages/power-generation/power-generation-02.jpg';
import imageSlider3 from '../assets/images/pages/power-generation/power-generation-03.jpg';
import imageSlider4 from '../assets/images/pages/power-generation/power-generation-04.jpg';
import imageSlider5 from '../assets/images/pages/power-generation/power-generation-05.jpg';

const settings = {
  dots: true,
  arrow: false,
  autoplay: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PowerGenerationPage = () => {
  return (
    <Layout title="Power Generation" isPageTitle>
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
                        In Bolivia, according to the Electricity Authority, about 70% of power
                        generation comes from thermos plants. And of this figure at least 30% has
                        installed ESE. In 2012, the company participated, for example as a
                        subcontractor, in the engineering, supply, construction and assembly works
                        of the El Kenko II (El Alto) thermoelectric power plant, which injects 17.5
                        megawatts (MW) National Interconnected (SIN). Subsequently, ESE was also
                        awarded the engineering, construction and electromechanical assemblies of
                        Termoeléctrica del Sur (Tarija) in which four turbogenerators of the German
                        Siemens SGT-800 industry were installed. We have also been awarded the
                        execution of the civil works and the electromechanical assembly of the
                        Warnes Thermoelectric plant with the installation of five Siemens
                        turbogenerators.
                      </p>
                      <p>
                        ESE has demonstrated that it has all the technical and operative capacity to
                        work as an EPC (Engineering, Procurement and Construction) firm, which
                        means, to take care of the design, provision of supplies and the
                        construction of any electromechanical project. We have 498 MW of installed
                        capacity in Bolivia and 742 MW of power in the process of installation.
                      </p>
                      <p className="mb-0">
                        The company also carried out the electromechanical, pre-commissioning,
                        commissioning and commissioning of the Río Tercero thermoelectric plant,
                        located in Córdoba (Argentina), together with the company Carlos Caballero,
                        generating a favorable acceptance from the client: SoEnergy Argentina.
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
                      <img className="img-fluid" src={imageSlider1} alt="Power Generation" />
                      <img className="img-fluid" src={imageSlider2} alt="Power Generation" />
                      <img className="img-fluid" src={imageSlider3} alt="Power Generation" />
                      <img className="img-fluid" src={imageSlider4} alt="Power Generation" />
                      <img className="img-fluid" src={imageSlider5} alt="Power Generation" />
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

export default PowerGenerationPage;
