// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/edit/master/',
        },
        blog: {
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
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/android-chrome-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/site.webmanifest', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#9d3757',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'twitter:card',
          content: '/img/android-chrome-192x192.png'
        },
        {
          name: 'twitter:site',
          content: 'Tokomachi Wiki | Treasure every moment',
        },
        {
          name: 'twitter:image',
          content: '/img/android-chrome-192x192.png',
        },
        {
          name: 'twitter:description',
          content: 'This is a Wikipedia-like site to record Tokomachi activities and details.',
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: 'Tokomachi Wiki | Treasure every moment',
        },
        {
          property: 'og:site_name',
          content: 'Tokomachi Wiki',
        },
        {
          property: 'og:url',
          content: 'https://toko.suisei.cc/',
        },
        {
          property: 'og:image',
          content: '/img/android-chrome-192x192.png',
        },
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
        {
          name: 'theme-color',
          content: '#9d3757',
        },
      ],
      navbar: {
        title: 'Tokomachi Wiki',
        logo: {
          alt: 'Tokomachi Wiki',
          src: 'img/android-chrome-192x192.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Main',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/aozaki-kuro/tokomachi-wiki-neo/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Timeline',
            items: [
              {
                label: '2019',
                to: '/docs/timeline/2019',
              },
              {
                label: '2020',
                to: '/docs/timeline/2020',
              },
              {
                label: '2021',
                to: '/docs/timeline/2021',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Project Stargazer, CC-BY-NC 4.0, ${new Date().getFullYear()} . Built with Docusaurus.`,
      },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
