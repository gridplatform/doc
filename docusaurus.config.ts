import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * GitHub Pages (project site):
 *   https://gridplatform.github.io/doc/
 *
 * Custom domain later: set `url` to the domain and `baseUrl` to `/`.
 */
const config: Config = {
  title: 'Grid Platform Docs',
  tagline: 'Infrastructure orchestration — install, operate, extend',

  url: 'https://gridplatform.github.io',
  baseUrl: '/doc/',

  organizationName: 'gridplatform',
  projectName: 'doc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Folder READMEs are for GitHub browsing only (not site routes).
          exclude: ['**/README.md'],
          editUrl: 'https://github.com/gridplatform/doc/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Grid Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/gridplatform/doc',
          label: 'Edit on GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/gridplatform',
          label: 'Org',
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
            { label: 'What is Grid?', to: '/What_Is_Grid' },
            { label: 'Desired state', to: '/Concepts/Desired_State' },
            { label: 'Cloud matrix', to: '/Clouds/Support_Matrix' },
            { label: 'Configuration', to: '/Install/Configuration' },
            { label: 'Roadmap', to: '/Roadmap' },
          ],
        },
        {
          title: 'Repos',
          items: [
            { label: 'grid-core', href: 'https://github.com/gridplatform/grid-core' },
            { label: 'grid-ui', href: 'https://github.com/gridplatform/grid-ui' },
            { label: 'grid-cli', href: 'https://github.com/gridplatform/grid-cli' },
            { label: 'grid-config', href: 'https://github.com/gridplatform/grid-config' },
            { label: 'grid-terraform', href: 'https://github.com/gridplatform/grid-terraform' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grid Platform. MIT.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
