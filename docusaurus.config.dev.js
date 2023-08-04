// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Framework as a Building Block for Kubernetes',
  tagline: '在 Kubernetes 上以搭积木的方式构建自己的服务门户',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://kubebb.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kubebb', // Usually your GitHub org/user name.
  projectName: 'kubebb', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'zh-Hans': {
        label: '中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Kubebb Logo',
          src: "img/kubebb-logo-black.png",
          srcDark: "img/kubebb-logo-white.png",
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/kubebb/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '快速开始',
            items: [
              {
                label: '预先准备',
                to: '/docs/quick-start/prerequisite',
              },
              {
                label: '安装内核',
                to: '/docs/quick-start/core_quickstart',
              },
              {
                label: '安装底座',
                to: '/docs/quick-start/buildingbase_quickstart',
              },
            ],
          },
          {
            title: '内核Kit',
            items: [
              {
                label: '介绍',
                to: '/docs/core/intro',
              },
              {
                label: '概念',
                to: '/docs/category/概念',
              },
              {
                label: '组件评级',
                to: '/docs/core/rating',
              },
            ],
          },
          {
            title: '底座Kit',
            items: [
              {
                label: '介绍',
                to: '/docs/building-base/intro',
              },
              {
                label: '自定义配置',
                to: '/docs/category/自定义配置',
              },
            ],
          },
          {
            title: '低码Kit',
            items: [
              {
                label: '介绍',
                to: '/docs/lowcode-development/intro',
              },
              {
                label: '开发模式',
                to: '/docs/lowcode-development/development_pattern',
              },
              {
                label: '组件开发',
                to: '/docs/category/组件开发',
              },
            ],
          },
          {
            title: '更多信息',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/kubebb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KubeBB`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
