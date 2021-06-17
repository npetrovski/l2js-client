const { description } = require('../../package')

module.exports = {
  base: '/l2js-client/',
  dest: 'docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Lineage 2 JavaScript Client',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'The idea is to have an Lineage 2 client library, that allows other projects to build L2 client functionalities, bots, game helpers or tests',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Docs', link: '/guide/',},
          { text: 'GitHub', link: 'https://github.com/npetrovski/l2js-client'}
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'installation',
                'examples',
                'api',
                'authorizationProcedure',
                'protocolOverview',
                'loginProtocol',
                'gameProtocol',
                'todo',
                'contributing',
                'community',
              ]
            }
          ],
        },
      },
      '/ru/': {
        selectText: 'Язык',
        label: 'Русский',
        editLinkText: 'Редактировать на GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Доступен новый контент.",
            buttonText: "Обновить"
          }
        },
        nav: [
          { text: 'Документация', link: '/ru/guide/',},
          { text: 'GitHub', link: 'https://github.com/npetrovski/l2js-client'}
        ],
        algolia: {},
        sidebar: {
          '/ru/guide/': [
            {
              title: 'Гайд',
              collapsable: false,
              children: [
                '',
                'installation',
                'examples',
                'api',
                'authorizationProcedure',
                'protocolOverview',
                'loginProtocol',
                'gameProtocol',
                'todo',
                'contributing',
                'community',
              ]
            }
          ],
        },
      }
    },
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false
  },

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Lineage 2 JavaScript Client',
      description: 'The idea is to have an Lineage 2 client library, that allows other projects to build L2 client functionalities, bots, game helpers or tests'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Lineage 2 JavaScript клиент',
      description: 'Идея состоит в том, чтобы иметь клиентскую библиотеку Lineage 2, которая позволяет другим проектам создавать клиентские функции L2, ботов, игровых помощников или тесты'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
