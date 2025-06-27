import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar allows you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main documentation sidebar
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "🏠 Welcome",
    },
    {
      type: "category",
      label: "🚀 Getting Started",
      collapsed: false,
      items: ["authentication", "quick-start"],
    },
    {
      type: "category",
      label: "📖 Core Concepts",
      collapsed: false,
      items: ["basic-scraping", "javascript-instructions"],
    },
    {
      type: "category",
      label: "🤖 Advanced Features",
      collapsed: false,
      items: [
        "ai-extraction",
        "extraction-rules",
        "serp-scraping",
        "screenshots",
      ],
    },
    {
      type: "category",
      label: "📚 API Reference",
      collapsed: false,
      items: ["api-reference"],
    },
  ],
};

export default sidebars;
