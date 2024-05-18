import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"

const config: Config = {
  title: "iRacing Web SDK",
  tagline: "Drive your iRacing development experience with the iRacing Web SDK",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "saldanaj97", // Usually your GitHub org/user name.
  projectName: "iracing-web-sdk-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "iRacing Web SDK",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://forums.iracing.com/",
          label: "iRacing Forum",
          position: "right",
        },
        {
          href: "https://members-login.iracing.com/?ref=https%3A%2F%2Fmembers-ng.iracing.com%2Fdata%2Fdoc&signout=true",
          label: "iRacing API",
          position: "right",
        },
        {
          href: "https://github.com/saldanaj97/iracing-schedule-data",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "iRacing Forum",
              href: "https://forums.iracing.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "iRacing API",
              href: "https://members-login.iracing.com/?ref=https%3A%2F%2Fmembers-ng.iracing.com%2Fdata%2Fdoc&signout=true",
            },
            {
              label: "GitHub",
              href: "https://github.com/saldanaj97/iracing-schedule-data",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} iRacing Web SDK, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
