// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tokomachi Wiki',
  //icon: '/img/android-chrome-192x192.png',
  tagline: 'Treasure every moment',
  url: 'https://toko.suisei.cc',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'aozaki-kuro', // Usually your GitHub org/user name.
  projectName: 'tokomachi-wiki-neo', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'zh-TW',
      //'zh-CN'
    ],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      'zh-TW': {
        htmlLang: 'zh-TW',
        label: '繁體中文',
      },
      'zh-CN': {
        htmlLang: 'zh-CN',
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          // Switch /docs/ to root
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/edit/master/',
        },
        blog: {
          blogTitle: 'Tokomachi Wiki Dev Blog',
          blogDescription:
            'This is the Dev blog of Tokomachi wiki. Not just a blog, but also a handbook :)',
          postsPerPage: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/android-chrome-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            media: '(prefers-color-scheme: light)',
            content: '#9d3757',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            media: '(prefers-color-scheme: dark)',
            content: '#007ab3',
          },
          {
            tagName: 'meta',
            name: 'verify.bing.com',
            content: 'verify.bing.com',
          },
        ],
      },
    ],
  ],

  scripts: [
    {
      defer: true,
      src: 'https://beacon.suisei.cc/app.js',
      'data-domain': 'toko.suisei.cc',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // metadata
      metadata: [
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Tokomachi Wiki',
        },
      ],

      // navbar
      navbar: {
        title: 'Tokomachi Wiki',
        logo: {
          alt: 'Tokomachi Wiki',
          src: 'img/android-chrome-192x192.png',
          width: 32,
          height: 32,
        },
        items: [
          // Left
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Main',
          },
          { to: '/blog', label: 'Blog', position: 'left' },

          // Right
          {
            type: 'dropdown',
            position: 'right',
            label: 'Support',
            items: [
              {
                label: 'Ko-Fi',
                href: 'https://ko-fi.com/project_stargazer',
              },
              {
                label: 'Patreon',
                href: 'https://www.patreon.com/project_startgazer',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      // footer
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Timeline',
            items: [
              {
                label: '2019',
                to: '/timeline/2019',
              },
              {
                label: '2020',
                to: '/timeline/2020',
              },
              {
                label: '2021',
                to: '/timeline/2021',
              },
              {
                label: '2022 (WIP)',
                to: '/timeline/2022',
              },
            ],
          },
          {
            title: 'Topics',
            items: [
              {
                label: 'Music & Lives',
                href: '/topics/music_list',
              },
              {
                label: 'Tokomachi Radio',
                href: '/radio/tokomachi_radio_s1',
              },
            ],
          },
          {
            title: 'Channels',
            items: [
              {
                label: 'Suisei Channel',
                href: 'https://www.youtube.com/channel/UC5CwaMl1eIgY8h02uZw7u8A',
              },
              {
                label: 'Inui Channel',
                href: 'https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg',
              },
              {
                label: 'Tokomachi Radio Playlist',
                href: 'https://www.youtube.com/playlist?list=PLRGzS-dvI7ZyOXpMyICfMY03vMsuxbL3h',
              },
            ],
          },
        ],
        copyright: `<img src="/img/android-chrome-192x192.png" width="64rem" height="64rem" alt="Tokomachi Wiki" /><br/>2021-${new Date().getFullYear()} Project Stargazer<br />CC BY-NC-SA 4.0<br />Built with Docusaurus`,
      },

      // dark mode toggle
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // plugins
      hideable: true,
      algolia: {
        // The application ID provided by Algolia
        appId: 'MWDE3H8IGO',

        // Public API key: it is safe to commit it
        apiKey: '089020613b342f8bc210b777ec8c33d3',

        indexName: 'main',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: '',

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      sitemap: {
        changefreq: 'weekly',
        priority: 0.5,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
