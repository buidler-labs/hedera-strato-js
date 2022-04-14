/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const path = require('path');
const remarkMermaid = require('mdx-mermaid');
const remarkNpm2Yarn = require('@docusaurus/remark-plugin-npm2yarn');
const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');

module.exports = async function () {
  const remarkGfm = (await import('remark-gfm')).default;

  return {
    baseUrl: '/',
    deploymentBranch: 'main',
    organizationName: 'buidler-labs',
    plugins: [
      [
        '@cmfcmf/docusaurus-search-local',
        {
          indexBlog: false,
        },
      ],
      '@docusaurus/theme-live-codeblock',
    ],
    presets: [
      [
        'classic',
        {
          blog: false,
          docs: {
            editUrl:
              'https://github.com/buidler-labs/hedera-strato-js/edit/main/lib.docs/',
            exclude: ['**/src/**'],
            path: '.',
            remarkPlugins: [
              remarkGfm,
              remarkMermaid,
              [remarkNpm2Yarn, { sync: true }],
              remarkNumberedFootnoteLabels,
            ],
            routeBasePath: '/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            sidebarPath: path.join(__dirname, './sidebar.js'),
          },
          googleAnalytics: {
            anonymizeIP: true,
            trackingID: 'G-ZHBJ3QTDC9',
          },
          gtag: false,
          theme: {
            customCss: [path.resolve(__dirname, 'static/css/theme.css')],
          },
        },
      ],
    ],
    projectName: 'hedera-strato-js',
    scripts: [
      {
        src: '/js/app.js',
        type: 'module',
      },
    ],
    staticDirectories: ['static'],
    tagline: 'Write Hedera dApps like a boss because why not?',
    themeConfig: {
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} <a href='https://github.com/buidler-labs'>Buidler Labs</a>. Built with ❤️ in <a href='https://docusaurus.io/'>Docusaurus</a>.`,
        logo: {
          alt: 'BuiDler Labs Logo',
          href: 'https://buidlerlabs.com/',
          src: 'img/logos/buidler-labs.png',
        },
        style: 'dark',
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        items: [
          {
            href: '/',
            label: 'Hedera Strato JS',
            position: 'left',
          },
          {
            'aria-label': 'GitHub repository',
            className: 'header-github-link',
            href: 'https://github.com/buidler-labs/hedera-strato-js',
            position: 'right',
          },
        ],
      },
      prism: {
        additionalLanguages: ['solidity'],
      },
    },
    title: 'Hedera Strato JS',
    url: 'https://hsj-docs.buidlerlabs.com/',
  };
};
