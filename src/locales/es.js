import aboutUsPage from './es/about-us-page';
import contactUsPage from './es/contact-us-page';
import footer from './es/footer';
import inputs from './es/inputs';
import menu from './es/menu';
import newsPage from './es/news-page';

const translation = {
  prefix: '',
  ...aboutUsPage,
  ...contactUsPage,
  ...footer,
  ...inputs,
  ...menu,
  ...newsPage,
};

export default translation;
