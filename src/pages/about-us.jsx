import React from 'react';
import { Link } from 'gatsby';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FadeIn from 'react-fade-in';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CountUp from 'react-countup';

import Layout from '../components/Layout';

import imageNosotros1 from '../assets/images/pages/about-us/nosotros1.jpg';
import imageArturoVera from '../assets/images/pages/about-us/arturo-vera.jpg';
import imageAlumbrado from '../assets/images/pages/about-us/alumbrado.jpg';
import imageFachada from '../assets/images/pages/about-us/fachada.jpg';
import imagePlanta from '../assets/images/pages/about-us/planta-generacion-warnes.jpg';
import imageArg from '../assets/images/pages/about-us/arg.jpg';
import imageSam from '../assets/images/pages/about-us/sam.jpg';
import imageOrganigrama from '../assets/images/pages/about-us/organigrama.jpg';

const AboutUsPage = () => (
  <Layout title="About Us" isPageTitle>
    {/* tab section */}
    <section className="ttm-row tab-section clearfix">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12">
            {/* section title */}
            <div className="section-title text-center with-desc clearfix">
              <div className="title-header">
                <h5>What We Offer For You</h5>
                <h2 className="title">
                  Here are some <span>Information </span>
                </h2>
              </div>
            </div>
            {/* section title end */}
          </div>
        </div>
        {/* row end */}
        {/* row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="ttm-tabs text-center ttm-tab-style-classic style1">
              <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                {/* tabs */}
                <TabList className="tabs">
                  <Tab className="tab" title="Our History">
                    <span>
                      <i className="ttm-icon ti-user"></i>
                      Our History
                    </span>
                  </Tab>
                  <Tab className="tab" title="Media">
                    <span>
                      <i className="ttm-icon ti-cup"></i> Philosophy of Life
                    </span>
                  </Tab>
                  <Tab className="tab" title="Industrial">
                    <span>
                      <i className="ttm-icon ti-check-box"></i> Quality Policies
                    </span>
                  </Tab>
                  <Tab className="tab" title="Banking">
                    <span>
                      <i className="ttm-icon ti-shield"></i>Health, Safety and Evironmental Policies
                    </span>
                  </Tab>
                  <Tab className="tab" title="Medical">
                    <span>
                      <i className="ttm-icon ti-target"></i> Main Figures
                    </span>
                  </Tab>
                  <Tab className="tab" title="Medical">
                    <span>
                      <i className="ttm-icon ti-settings"></i> Organigrama
                    </span>
                  </Tab>
                </TabList>
                <div className="box-shadow content-tab">
                  <FadeIn>
                    {/* Our History */}
                    <TabPanel>
                      <div className="content-inner">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="text-left">
                              <h3 className="title fs-30">Our History</h3>
                              <p>
                                The history of the Electromechanical Services Company ESE SRL began
                                to come out ahead in the late 1980s. The world was shocking about
                                the fall of the Berlin Wall, a lot of people were also debating the
                                dissolution of the Soviet Union and other ones were marveling at
                                Maradona's skill on the court. In Bolivia, the democracy was
                                starting to take its first steps and the economy was afloat
                                following an intentional process known as hyperinflation. The
                                population in the country did not work with the internet or less
                                with cell phones.
                              </p>
                              <p>
                                That same year the INE reported that Santa Cruz had an estimated
                                population of 800,000. Hundreds of families migrated to this region
                                attracted by investments and projects that were developed mainly in
                                agriculture, industry and commerce. And as the population grew, so
                                did the demand for water, energy, health and education.
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="grey-border res-991-mt-30 text-left">
                              {/* ttm_single_image-wrapper */}
                              <div className="ttm_single_image-wrapper with-border15">
                                <img
                                  className="img-fluid grey-boder"
                                  src={imageNosotros1}
                                  title="single-img-three"
                                  alt="single-img-three"
                                />
                              </div>
                              {/* ttm_single_image-wrapper end */}
                            </div>
                          </div>
                          <div className="col-12 text-left">
                            <p>
                              At the end of 1989, Arturo Vera Velasco, a young man who learned how
                              to install coils from his 15 years and who knew how to face each
                              problem with self-effacement, was the founder of Electromechanical
                              Services Company ESE SRL. The principles with which company started
                              were inherent to what he was: to work with honesty, responsibility and
                              above all with professionalism to satisfy his clients.{' '}
                            </p>
                            <p>
                              The company began to provide services with two workers, a van and a
                              small office located at the end of Paraguá Avenue, in the north of
                              Santa Cruz. The confidence of the companies we were winning step by
                              step. Institutions like CRE, YPFB, among others, supported the work of
                              ESE. Step by step, more workers joined.{' '}
                            </p>
                            <p>
                              {' '}
                              In 1994, as the company grew and maintained a balance between its
                              accounts and the workforce, the executives of this firm acquired land
                              in the area with the largest concentration of private companies in
                              Santa Cruz: the Industrial Park. Months later, they built the office
                              where the company currently operates.
                            </p>
                            <p>
                              Twenty-seven years have passed since that day. Vera, along with her
                              two sons, Marco, Diego and the professional contribution of each of
                              his workers, has developed more than a hundred projects of economic
                              and social relevance. Nowadays is one of the few companies in the
                              country that offer EPC -Engineering, Procurement & Construction-
                              services or also known as turnkey signatures.
                            </p>
                            <p>
                              During these years, ESE together with CRE contributed to the expansion
                              of public lighting in Santa Cruz. It also became one of the pioneer
                              companies in incorporating specialized equipment for the service of
                              maintenance of live lines in low and medium voltage and developed
                              experience in the construction of electrical grids in the east, west,
                              valley and the mountain range.
                            </p>
                            <p>
                              ESE, with the incorporation of new technologies, the company entered
                              into the Electrical Maintenance Services to the Oil Companies (SEEP)
                              and in the Industrial Services of Electromechanical Assembly (SEM). As
                              a subcontractor, the company participated and is involved in the
                              design, construction and assembly of large thermoelectric plants in
                              the country, such as El Kenko 2 (El Alto), Del Sur (Tarija), Warnes
                              (Santa Cruz) and Entre Ríos (Cochabamba) . We have also built a dozen
                              power substations located in strategic locations in Tarija,
                              Chuquisaca, La Paz, Beni and Cochabamba.
                            </p>
                            <p>
                              The company has the certificate of the integrated management system
                              audited by Tüv Rheinland Quality: ISO 9001, Occupational Safety and
                              Health: OHSAS 18001; and Environment: ISO 14001. Actually, ESE keeps
                              alive its principles with which it began: to be a company that leads
                              the electromechanical services sector, meeting the management, health,
                              safety and environmental standards. It generates more than 600 direct
                              jobs and has received various awards for being a contractor company
                              with great technical attributes.
                            </p>
                            <div className="c-timeline">
                              <VerticalTimeline>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="1980"
                                  dateClassName="c-timeline__date"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageArturoVera}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Nace ESE S.R.L. como un emprendimiento que dé respuesta a la
                                    necesidad de contar con una empresa especializada en el área de
                                    servicios electromecánicos para la ciudad de Santa Cruz de la
                                    Sierra.
                                  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="1980-1994"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageAlumbrado}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Nos hemos convertido en el principal proveedor de servicios de
                                    la Cooperativa Rural de Electrificación – CRE Ltda.
                                  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="1994"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageFachada}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Se construyen las nuevas instalaciones de la empresa, ubicadas
                                    en el Parque Industrial Manzana 24.
                                  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="1994-2016"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imagePlanta}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Se consolida un equilibrio tanto administrativo como financiero,
                                    que nos ha permitido encarar diversos proyectos de expansión de
                                    nuestras unidades de negocios.
                                  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="2016"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageArg}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Se amplían nuestros horizontes, desarrollando proyectos a nivel
                                    internacional, en Argentina.
                                  </p>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                  className="vertical-timeline-element--work"
                                  contentStyle={{ background: '#de6b00', color: '#fff' }}
                                  contentArrowStyle={{ borderRight: '7px solid  #de6b00' }}
                                  date="2016 - present"
                                  iconStyle={{ background: '#de6b00', color: '#fff' }}
                                  icon={<i className="ttm-icon ti-star"></i>}
                                >
                                  <img
                                    className="img-fluid grey-boder"
                                    src={imageSam}
                                    title="single-img-three"
                                    alt="single-img-three"
                                  />
                                  <p>
                                    Se realiza la implantación de nuestro Sistema Integrado de
                                    Gestión (Calidad: ISO 9001, Seguridad y Salud Ocupacional: OHSAS
                                    18001 y Medio Ambiente: ISO 14001).
                                  </p>
                                </VerticalTimelineElement>
                              </VerticalTimeline>
                            </div>
                          </div>
                        </div>
                        {/* row end */}
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                    <TabPanel>
                      <div className="content-inner">
                        {/* row */}
                        <div className="row mt-15">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style3 left-icon icon-align-top">
                              <div className="featured-icon">
                                {/* featured-icon */}
                                <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                  <i className="flaticon flaticon-global" />
                                </div>
                              </div>
                              <div className="featured-content text-left">
                                <div className="featured-title">
                                  {/* featured title */}
                                  <h5>Mission</h5>
                                </div>
                                <div className="featured-desc">
                                  {/* featured desc */}
                                  <p>
                                    We provide quality services in the country, protecting and
                                    helping as a priority the human being and then the environment
                                    with collaborators who work with international standards.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                          <div className="sep-line mt-4 mb-3" />
                        </div>
                        {/* separator */}
                        <div className="row">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style3 left-icon icon-align-top">
                              <div className="featured-icon">
                                {/* featured-icon */}
                                <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                  <i className="flaticon flaticon-report" />
                                </div>
                              </div>
                              <div className="featured-content text-left">
                                <div className="featured-title">
                                  {/* featured title */}
                                  <h5>View</h5>
                                </div>
                                <div className="featured-desc">
                                  {/* featured desc */}
                                  <p>
                                    We are a leading company in the execution of integral
                                    electromechanical services in Bolivia applying international
                                    standards of quality, safety, occupational health and
                                    environment.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* separator */}
                        <div className="separator">
                          <div className="sep-line mt-4 mb-3" />
                        </div>
                        {/* separator */}
                        <div className="row">
                          <div className="col-12">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box style3 left-icon icon-align-top">
                              <div className="featured-icon">
                                {/* featured-icon */}
                                <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                                  <i className="flaticon flaticon-work" />
                                </div>
                              </div>
                              <div className="featured-content text-left">
                                <div className="featured-title">
                                  {/* featured title */}
                                  <h5>Our Corporate Values</h5>
                                </div>
                                <div className="featured-desc">
                                  {/* featured desc */}
                                  <p>
                                    In ESE, both managers and operatives work in an organizational
                                    culture that supports four main values:
                                  </p>
                                  <p>
                                    <ul className="ttm-list ttm-list-style-icon">
                                      <li>
                                        <i className="ti-check-box ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">
                                          <span className="fw-500">Quality.</span> <br />
                                          Every activity we develop persists in the fulfillment of
                                          the quality standards applied by the multinational
                                          companies highlighted in their sectors.
                                        </span>
                                      </li>
                                      <li>
                                        <i className="ti-check-box ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">
                                          <span className="fw-500">Commitment.</span> <br />
                                          We are a legally established Bolivian company that values
                                          above all things the human being and the environment that
                                          contributes with taxes, jobs and new technologies to the
                                          development of our country.
                                        </span>
                                      </li>
                                      <li>
                                        <i className="ti-check-box ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">
                                          <span className="fw-500">Responsability.</span> <br />
                                          Every activity of the company focuses on seeking the good
                                          living of both its workers, customers, the community and
                                          any region where it develops its operations.
                                        </span>
                                      </li>
                                      <li>
                                        <i className="ti-check-box ttm-textcolor-skincolor" />
                                        <span className="ttm-list-li-content">
                                          <span className="fw-500">Honesty.</span> <br />
                                          Every ESE worker develops his services seeking to satisfy
                                          the requirements of the client by carefully managing the
                                          resources he has.
                                        </span>
                                      </li>
                                    </ul>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                    <TabPanel>
                      <div className="content-inner active">
                        <div className="row">
                          <div className="col-12 text-left">
                            <p>
                              The execution of every project carried out by ESE is governed by an
                              integrated management system that seeks to comply with at least six
                              policies:
                            </p>
                            <ul className="ttm-list ttm-list-style-icon">
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">CUSTOMER SATISFACTION. </span>
                                  Permanently seek customer satisfaction in all our activities
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">LEGALITY. </span>
                                  Comply with the main norms and systems in force regarding the
                                  environment, safety, occupational health and the integrated
                                  management system.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">TRAINING. </span>
                                  Train personnel permanently with the purpose of improving their
                                  competencies and optimally reach the goals set.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">SAFETY. </span>
                                  Plan and work preventively in safety, health and operation systems
                                  in order to reduce risks.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">RESPONSIBILITY. </span>
                                  Avoiding environmental contamination, we can establish preventive
                                  waste management systems.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  <span className="fw-500">PROACTIVITY. </span>
                                  Respond constructively and with a positive attitude to any
                                  emergency situation or risk that is present in the company.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* row end */}
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                    <TabPanel>
                      <div className="content-inner">
                        <div className="row">
                          <div className="col-12 text-left">
                            <p>
                              ESE's staff practices and promotes work policies that are part of a
                              comprehensive management system framed in the fulfillment of tasks
                              related to operational safety, occupational health, environment and
                              social relationships (C & SSMS) under a relevant principle: prevention
                              and continuous improvement. As a company ESE looks for:
                            </p>
                            <ul className="ttm-list ttm-list-style-icon">
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  Ensure compliance with the main regulations of SSMS that are in
                                  force in Bolivia.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  To ensure the health and physical integrity of all people both in
                                  our own facilities and in other places of work.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  All the staff directly and indirectly involved in the execution of
                                  all tasks carried out by the company are committed to applying and
                                  enforcing compliance with the current SSMS standards.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  All workers’ aim at starting, developing and concluding with zero
                                  accidents. Any damage to the people, environment, property and
                                  reputation of the company is considered as unacceptable behavior
                                  to the company.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  It is a priority for the company to preserve the environment in
                                  all the projects and activities it carries out.
                                </span>
                              </li>
                              <li>
                                <i className="ti-check-box ttm-textcolor-skincolor" />
                                <span className="ttm-list-li-content">
                                  The executive management of the firm undertakes to provide every
                                  worker of this company with the resources necessary to comply with
                                  the SSMS standards.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* row end */}
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                    <TabPanel>
                      <div className="content-inner">
                        <div className="row">
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={1000} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">KILOMETERS OF LINES</h3>
                                <p>
                                  By year there are the ones that constructed ESE in average during
                                  the last decade in the country.
                                </p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={23} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">TURBINES</h3>
                                <p>Siemens SGT-800 are the ones that installed ESE in four years</p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={498} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">MEGAWATTS (MW) ISO</h3>
                                <p>Of power in generation installed ESE in the country</p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={742} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">MW</h3>
                                <p>
                                  From power in generation power has ESE in the process of
                                  installation.
                                </p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={900} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">JOBS</h3>
                                <p>
                                  Direct are those generated by the company in the country in a
                                  dozen projects
                                </p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-4">
                            <div className="ttm-fid inside ttm-fid-view-topicon">
                              <div className="ttm-fid-icon-wrapper">
                                <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-lg">
                                  <h4>
                                    <CountUp start={0} end={7} duration={10} />
                                  </h4>
                                </div>
                              </div>
                              <div className="ttm-fid-contents">
                                {/*  ttm-fid-contents */}
                                <h3 className="ttm-fid-title">UNITS</h3>
                                <p>Business is the one developed by ESE in Bolivia.</p>
                                {/*  ttm-fid-title */}
                              </div>
                              {/* ttm-fid-contents end */}
                            </div>
                          </div>
                        </div>
                        {/* row end */}
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                    <TabPanel>
                      <div className="content-inner">
                        <div className="row">
                          <div className="col-12">
                            <img
                              className="img-fluid grey-boder"
                              src={imageOrganigrama}
                              title="Organigrama"
                              alt="Organigrama"
                            />
                          </div>
                        </div>
                        {/* row end */}
                      </div>
                      {/* content-inner */}
                      {/* row end*/}
                    </TabPanel>
                  </FadeIn>
                </div>
              </Tabs>
              {/* tabs end*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* tab section end */}
  </Layout>
);

export default AboutUsPage;
