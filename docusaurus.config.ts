import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "WebscrapingHQ API Documentation",
  tagline: "Fast, reliable web scraping API with advanced features",
  favicon: "img/favicon.png",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.webscrapinghq.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For integration with Next.js, we'll serve this under /docs
  baseUrl: "/",

  // GitHub pages deployment config - update with your actual repo
  organizationName: "webscrapinghq", // Usually your GitHub org/user name.
  projectName: "scraping-api", // Usually your repo name.

  onBrokenLinks: "warn",
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
          routeBasePath: "/", // Serve the docs at the root of the baseURL
          editUrl: undefined, // Disable "edit this page" links
        },
        blog: false, // Disable blog for API documentation
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/api-social-card.jpg",
    navbar: {
      title: "WebscrapingHQ",
      logo: {
        alt: "WebscrapingHQ Logo",
        src: "img/logo.png",
        href: "https://app.webscrapinghq.com",
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
            {
              label: "Authentication",
              to: "/authentication",
            },
            {
              label: "Quick Start",
              to: "/quick-start",
            },
          ],
        },
        {
          title: "API",
          items: [
            {
              label: "Interactive API",
              to: "/api-reference",
            },
            {
              label: "Basic Scraping",
              to: "/basic-scraping",
            },
            {
              label: "JavaScript Instructions",
              to: "/javascript-instructions",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WebscrapingHQ. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "json",
        "javascript",
        "typescript",
        "python",
        "php",
        "go",
        "java",
        "csharp",
      ],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
