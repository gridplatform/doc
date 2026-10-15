import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * GitHub Pages (project site):
 *   https://gridplatform.github.io/doc/
 *
 * Custom domain later: set `url` to the domain and `baseUrl` to `/`.
 */
const config: Config = {
  title: 'About Grid',
  tagline: 'Self-hosted infrastructure orchestration',
  favicon: 'img/favicon-32x32.png',

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
    image: 'img/og.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Grid',
      logo: {
        alt: 'Grid',
        src: 'img/logo.png',
        srcDark: 'img/logo.png',
        width: 28,
        height: 28,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/Getting-Started/Quick_Start',
          label: 'Quick start',
          position: 'left',
        },
        {
          to: '/Concepts/Desired_State',
          label: 'Desired state',
          position: 'left',
        },
        {
          href: 'https://github.com/gridplatform',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Start',
          items: [
            { label: 'About Grid', to: '/' },
            { label: 'Quick start', to: '/Getting-Started/Quick_Start' },
            { label: 'Your desired-state repo', to: '/Getting-Started/Your_Desired_State_Repo' },
          ],
        },
        {
          title: 'Deep dives',
          items: [
            { label: 'Desired state', to: '/Concepts/Desired_State' },
            { label: 'AWS catalog', to: '/Clouds/AWS' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Grid Platform · MIT`,
    },
    prism: {
      additionalLanguages: ['bash', 'json', 'hcl', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
