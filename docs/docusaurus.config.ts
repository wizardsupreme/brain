import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Wizard Supreme\'s Official AI Brain',
  tagline: 'AI, Crypto, Productivity and Everything Else',
  favicon: 'img/nayeemai-favicon.ico',

  // Set the production URL of your site here
  url: 'https://wizardsupreme.github.io', // Updated URL
  baseUrl: '/docs/', // Updated base URL for GitHub Pages deployment

  // GitHub pages deployment config
  organizationName: 'wizardsupreme', // GitHub org/user name
  projectName: 'docs', // Repository name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Options for the search plugin
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      }
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/wizardsupreme/brain/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/wizardsupreme/brain/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/wizard-supreme-social-card.jpg',
    navbar: {
      title: 'Wizard Supreme',
      logo: {
        alt: 'Wizard Supreme Logo',
        src: 'img/nayeemai.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'AI Brain',
        },
        {
          href: 'https://github.com/wizardsupreme/brain',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
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
              label: 'Documentation',
              to: '/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/MSPj9HRX',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/wizardnayeem',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wizardsupreme/brain',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wizard Supreme, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
