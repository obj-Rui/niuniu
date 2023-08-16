import { defineConfig, type DefaultTheme } from 'vitepress';
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [{ text: 'Button 按钮', link: '/components/button/' }],
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
  ],
};

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '文档', link: '/' },
    // { text: 'Guide', link: '/guide/' },
    // {
    //   text: 'Dropdown Menu',
    //   items: [
    //     { text: 'Item A', link: '/item-1' },
    //     { text: 'Item B', link: '/item-2' },
    //     { text: 'Item C', link: '/item-3' },
    //   ],
    // },
  ];
}

const config = {
  title: 'niuniu',
  description: 'niuniu组件描述', // 描述标签
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    logo: { light: '/logo.png', dark: '/logo_dark.png', alt: 'logo' },
    siteTitle: 'niuniu-COM',
    nav: nav(),
    sidebar,
    aside: 'right',
    outlineTitle: '本页目录',
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/obj-Rui/niuniu' }],
    footer: {
      message: 'niuniu个人版权',
      copyright: 'Copyright © 2023-present Evan Niu',
    },
    lastUpdated: {
      text: '更新日期',
      formatOptions: {
        dateStyle: 'full',
      },
    },
    editLink: {
      pattern: 'https://github.com/obj-Rui/niuniu/:path',
    },
    // 广告
    carbonAds: {
      code: '22',
      placement: 'vuejsorg',
    },
  },
};

export default config;
