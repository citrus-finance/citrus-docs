// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Citrus Finance',
  tagline: 'Multi-chain All-in-One DeFi Platform',
  url: 'https://docs.citrus.finance',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // TODO: change me
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'citrus-finance', // Usually your GitHub org/user name.
  projectName: 'citrus-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/citrus-finance/citrus-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs',
            to: '/'
          },
          {
            from: '/docs/products',
            to: '/products'
          },
          {
            from: '/docs/products/dex',
            to: '/products/dex'
          },
          {
            from: '/docs/products/dex-aggregator',
            to: '/products/dex-aggregator'
          },
          {
            from: '/docs/products/lending',
            to: '/products/lending'
          },
          {
            from: '/docs/products/stable',
            to: '/products/stable'
          },
          {
            from: '/docs/products/vault',
            to: '/products/vault'
          },
          {
            from: '/docs/tokenomics',
            to: '/tokenomics'
          },
        ]
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Citrus',
        logo: {
          alt: 'Citrus finance logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/citrus-finance/citrus-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Products',
                to: '/products',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.citrus.finance',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/citrus_finance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/citrus-finance',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
