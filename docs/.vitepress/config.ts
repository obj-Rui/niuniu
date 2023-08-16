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
    { text: 'Guide', link: '/guide/' },
    { text: 'gitee', link: 'https://gitee.com/obj_Rui/blog' },
  ];
}

const config = {
  title: 'niuniu',
  description: 'niuniu组件描述', // 描述标签
  head: [['link', { rel: 'icon', href: '/niuniu.png' }]],
  lastUpdated: true,
  // 主题配置
  themeConfig: {
    logo: '/niuniu.png',
    siteTitle: 'niuniu-COM',
    nav: nav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/obj-Rui/niuniu' }],
    sidebar,
  },
};

export default config;
