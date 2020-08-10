const path = require('path');
const fs = require('fs');

const config = require('./src/constants/site-config');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  var allArticlesData = [];
  const getArticles = async () => {
    const createPageRecursively = async (query, endCursor = '') => {
      const results = await graphql(query, { after: endCursor });
      const hasNextPage = results.data.prismic.allArticles.pageInfo.hasNextPage;
      endCursor = results.data.prismic.allArticles.pageInfo.endCursor;

      allArticlesData = [...allArticlesData, ...results.data.prismic.allArticles.edges];

      if (hasNextPage) {
        await createPageRecursively(query, endCursor);
      } else {
        allArticlesData.forEach(({ node }) => {
          const getPrefix = () => {
            switch (node._meta.lang) {
              case 'es-bo':
                return 'es';
              case 'en-us':
                return 'en';
            }
          };
          const prefix = getPrefix() === config.defaultLang ? '' : getPrefix();
          createPage({
            path: `${prefix}/news/${node._meta.uid}/`,
            component: path.resolve(`src/templates/article.jsx`),
            context: {
              locale: getPrefix(),
              lang: node._meta.lang,
              uid: node._meta.uid,
            },
          });
        });
      }
    };

    await createPageRecursively(
      `
      query($after: String) {
          prismic {
            allArticles(after: $after) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  _meta {
                    uid
                    lang
                    id
                  }
                  title
                  date
                  image
                  author
                  content
                }
              }
            }
          }
        }
    `
    );
  };

  const getPages = async () =>
    config.locales.map((locale) => {
      const templateFolder = './src/templates';
      const PAGES = fs
        .readdirSync(templateFolder)
        .map((file) => file)
        .filter((page) => {
          if (page !== 'article.jsx') {
            return page;
          }
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

        if (getSlug() === 'news') {
          createPage({
            path: `${prefix}/${slug}`,
            component: path.resolve(`./src/templates/${template}`),
            context: {
              locale: locale,
              lang: langPrismic(),
              allNews: allArticlesData.filter(({ node }) => node._meta.lang === langPrismic()),
            },
          });
        } else {
          createPage({
            path: `${prefix}/${slug}`,
            component: path.resolve(`./src/templates/${template}`),
            context: { locale: locale, lang: langPrismic() },
          });
        }
      });
    });

  return Promise.all([await getArticles(), await getPages()]);
};
