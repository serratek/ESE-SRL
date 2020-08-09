const path = require('path');
const fs = require('fs');

const config = require('./src/constants/site-config');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const getPages = config.locales.map((locale) => {
    const templateFolder = './src/templates';
    const PAGES = fs
      .readdirSync(templateFolder)
      .map((file) => file)
      .filter((page) => {
        // if (page !== 'article.jsx') {
        //   return page;
        // }
        return page;
      });

    PAGES.forEach((template) => {
      const getSlug = () => {
        if (template.includes('.jsx')) {
          return template.replace('.jsx', '');
        }
        if (template.includes('.js')) {
          return template.replace('.js', '');
        }
      };
      const prefix = locale === config.defaultLang ? '' : locale;
      const slug = getSlug() === 'index' ? '' : `${getSlug()}/`;
      const langPrismic = () => {
        switch (locale) {
          case 'es':
            return 'es-bo';
          case 'en':
            return 'en-us';
        }
      };

      createPage({
        path: `${prefix}/${slug}`,
        component: path.resolve(`./src/templates/${template}`),
        context: { locale: locale, lang: langPrismic() },
      });
    });
  });

  return Promise.all([getPages]);
};
