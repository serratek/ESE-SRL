import contactUsPage from './en/contact-us-page';
import footer from './en/footer';
import inputs from './en/inputs';
import menu from './en/menu';

const translation = {
  prefix: 'en',
  ...contactUsPage,
  ...footer,
  ...inputs,
  ...menu,
};

export default translation;
