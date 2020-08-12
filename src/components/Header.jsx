import React, { useState, useEffect } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useIntl } from 'react-intl';

import Link from './LocalizedLink';
import Menu from './Menu';
import Mobilemenu from './Mobile_menu';

import imageLogo from '../assets/images/LOGO_ESE.png';
import iconES from '../assets/images/flag_Espana.jpg';
import iconEN from '../assets/images/flag_United Kingdom.jpg';

const useScroll = () => {
  const [isStickyHeader, setStickyHeader] = useState(false);

  const handleScroll = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    setStickyHeader(scrolled > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return { isStickyHeader };
};

const Header = () => {
  const { isStickyHeader } = useScroll();
  const intl = useIntl();
  const locale = intl.locale;

  return (
    <header id="masthead" className="header ttm-header-style-03">
      {/* ttm-topbar-wrapper */}
      <div className="ttm-header-wrap res-767-mb-80">
        <div className="site-header-menu">
          <div
            id="navbar"
            className={`ttm-stickable-header clearfix ${
              isStickyHeader ? 'fixed-header visible-title' : ''
            }`}
          >
            <div className="container-xl">
              <div className="d-xl-flex flex-xl-row align-items-xl-center justify-content-xl-between">
                <div className="site-branding">
                  <Link className="home-link" to={'/'} title="ESE SRL" rel="home">
                    <img id="logo-img" className="img-fluid" alt="logo" src={imageLogo} />
                  </Link>
                </div>
                <div className="site-navigation">
                  <div className="ttm-topbar-wrapper clearfix">
                    <div className="container-xl">
                      <div className="row">
                        <div className="col-lg-12 text-right">
                          <ul className="top-contact">
                            <li>
                              <a href="tel:+591 3 3460561">
                                <i className="fas fa-phone" />
                                &nbsp;&nbsp;+591 3 3460561
                              </a>
                            </li>
                            <li>
                              <a href="mailto:info@example.com.com">
                                <i className="far fa-envelope" />
                                &nbsp;&nbsp;info@ese-srl.com
                              </a>
                            </li>
                            <li>
                              <i className="far fa-clock" />
                              &nbsp;&nbsp;Office Hour: 07:30am - 6:30pm
                            </li>
                            <li>
                              <GatsbyLink to={locale === 'en' ? '/' : '/en'} className="mr-2">
                                <img src={iconES} alt="es" />
                              </GatsbyLink>
                              <GatsbyLink to={'/en'}>
                                <img src={iconEN} alt="en" />
                              </GatsbyLink>
                            </li>
                          </ul>
                          <div className="ttm-social-links-wrapper list-inline">
                            <ul className="social-icons">
                              <li>
                                <a
                                  href="https://www.facebook.com/ESESRL/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" tooltip-bottom"
                                  data-tooltip="Facebook"
                                >
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/ESE_SRL"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" tooltip-bottom"
                                  data-tooltip="Twitter"
                                >
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.youtube.com/channel/UC52D98RbbJwgVQ3kIR07Bzw/videos"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" tooltip-bottom"
                                  data-tooltip="Youtube"
                                >
                                  <i className="fab fa-youtube" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-xl">
                    <div className="row align-items-center ml-auto">
                      <div className="ml-auto">
                        <Menu />
                        <div className="mobilemenu">
                          <Mobilemenu locale={locale} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
