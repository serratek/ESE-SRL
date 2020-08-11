import aboutUsPage from './en/about-us-page';
import contactUsPage from './en/contact-us-page';
import footer from './en/footer';
import inputs from './en/inputs';
import menu from './en/menu';
import newsPage from './en/news-page';

const translation = {
  prefix: 'en',
  ...aboutUsPage,
  ...contactUsPage,
  ...footer,
  ...inputs,
  ...menu,
  ...newsPage,
};

export default translation;
