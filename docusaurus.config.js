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
  url: 'http://kubebb.k8s.com.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
            label: '教程',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/kubebb/building-base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关技术',
            items: [
              {
                label: '认证 OIDC - dex',
                href: 'https://github.com/dexidp/dex',
              },
              {
                label: '租户管理 - capsule',
                href: 'https://github.com/clastix/capsule',
              },
              {
                label: '权限管理 - K8S RBAC',
                href: 'https://kubernetes.io/zh-cn/docs/reference/access-authn-authz/rbac/',
              },
              {
                label: '审计操作 - K8S Audit',
                href: 'https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/audit/',
              }, 
            ],
          },
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
              {
                label: '内核',
                to: '/docs/category/内核',
              },
            ],
          },
          {
            title: '代码',
            items: [
              {
                label: '基础底座',
                href: 'https://github.com/kubebb/building-base',
              },
              {
                label: '示例组件',
                href: 'https://github.com/kubebb/addon-components',
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
        copyright: `Copyright © ${new Date().getFullYear()} Kubebb 官网，基于 Docusaurus 构建.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
