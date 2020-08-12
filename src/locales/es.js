import aboutUsPage from './es/about-us-page';
import businessUnitsPage from './es/business-units-page';
import buttons from './en/buttons';
import common from './en/common';
import contactUsPage from './es/contact-us-page';
import footer from './es/footer';
import inputs from './es/inputs';
import jobsPage from './en/jobs-page';
import menu from './es/menu';
import newsPage from './es/news-page';
import projectsPage from './es/projects-page';

const translation = {
  prefix: '',
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
