import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Vlorion開發者社群',
  tagline: '個人技術筆記與架構實踐',
  favicon: 'img/favicon.ico',

  url: 'https://developers.vloion.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Vlorion Dev',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'dropdown',
          label: '技術文件',
          position: 'left',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'supportSidebar',
              label: '支援文檔',
            },
            {
              type: 'docSidebar',
              sidebarId: 'apiSidebar',
              label: 'API',
            },
          ],
        },
        {to: '/blog', label: '部落格', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '資源導航',
          items: [
            {
              label: '支援文檔',
              to: '/docs/support',
            },
            {
              label: 'API 說明',
              to: '/docs/api',
            },
            {
              label: '部落格',
              to: '/blog',
            },
          ],
        },
        {
          title: '法律條款',
          items: [
            {
              label: '隱私權政策',
              to: '/privacy',
            },
            {
              label: '服務條款',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Vlorion. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
