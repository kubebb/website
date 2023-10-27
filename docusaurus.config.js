// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { curr_url_map } = require('./static/contants.js');
const href_pre = 'https://docs.tenxcloud.com';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Framework as a Building Block for Kubernetes',
  tagline: '在 Kubernetes 上以搭积木的方式构建自己的服务门户',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: curr_url_map?.url || 'http://kubebb.k8s.com.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: curr_url_map?.baseUrl || '/',

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
          src: "img/kubebb-logo-black.svg",
          srcDark: "img/kubebb-logo-white.svg",
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档中心',
          },
          {
            to: '/market',
            position: 'left',
            label: '组件市场',
          },
          {
            href: 'https://github.com/kubebb/',
            className: 'noIcon',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://dev.tenxcloud.com/',
            className: 'noIcon',
            position: 'left',
            label: '开发者社区',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Kubebb',
            items: [
              {
                label: '快速开始',
                to: '/docs/quick-start/prerequisite',
              },
              {
                label: '内核 Kit',
                to: '/docs/core/intro',
              },
              {
                label: '底座 Kit',
                to: '/docs/building-base/intro',
              },
              {
                label: '低码 Kit',
                to: '/docs/lowcode-development/intro',
              },
            ],
          },
          {
            title: '开源产品',
            items: [
              {
                label: '微服务框架',
                href: href_pre + '/docs/TMF/产品介绍',
              },
              {
                label: '服务网格',
                href: href_pre + '/docs/服务网格/产品介绍',
              },
              {
                label: 'API网关',
                href: href_pre + '/docs/TAMP/产品介绍',
              },
              {
                label: '应用性能监控',
                href: href_pre + '/docs/TAPM/产品介绍',
              },
              {
                label: '云梯低代码平台',
                to: '/docs/lowcode-development/intro',
              },
            ],
          },
          {
            title: '更多信息',
            items: [
              {
                label: 'Github issue',
                href: 'https://github.com/kubebb/core/issues',
              },
              {
                label: 'Github',
                href: 'https://github.com/kubebb',
              },
            ],
          },
          {
            title: '加入我们',
            items: [
              {
                html: `<img width="120px" src="${!curr_url_map?.baseUrl || curr_url_map?.baseUrl === '/' ?
                  '' : curr_url_map?.baseUrl}/img/home/qrcode.webp" />`
              }
            ]
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
