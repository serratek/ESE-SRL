import aboutUsPage from './en/about-us-page';
import businessUnitsPage from './en/business-units-page';
import buttons from './en/buttons';
import common from './en/common';
import contactUsPage from './en/contact-us-page';
import footer from './en/footer';
import inputs from './en/inputs';
import jobsPage from './en/jobs-page';
import menu from './en/menu';
import newsPage from './en/news-page';
import projectsPage from './en/projects-page';

const translation = {
  prefix: 'en',
  ...aboutUsPage,
  ...businessUnitsPage,
  ...buttons,
  ...common,
  ...contactUsPage,
  ...footer,
  ...inputs,
  ...jobsPage,
  ...menu,
  ...newsPage,
  ...projectsPage,
};

export default translation;
