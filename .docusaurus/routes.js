import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', 'c3b'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', 'e83'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '8fc'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', 'f7c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', 'dc0'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '352'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '7c8'),
    exact: true
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', 'e87'),
    routes: [
      {
        path: '/documentation/',
        component: ComponentCreator('/documentation/', '5eb'),
        routes: [
          {
            path: '/documentation/',
            component: ComponentCreator('/documentation/', 'a31'),
            routes: [
              {
                path: '/documentation/ai-extraction',
                component: ComponentCreator('/documentation/ai-extraction', '0fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/api-reference',
                component: ComponentCreator('/documentation/api-reference', 'bb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/authentication',
                component: ComponentCreator('/documentation/authentication', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/basic-scraping',
                component: ComponentCreator('/documentation/basic-scraping', '613'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/extraction-rules',
                component: ComponentCreator('/documentation/extraction-rules', '58a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/javascript-instructions',
                component: ComponentCreator('/documentation/javascript-instructions', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/quick-start',
                component: ComponentCreator('/documentation/quick-start', 'df3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/screenshots',
                component: ComponentCreator('/documentation/screenshots', 'e61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/serp-scraping',
                component: ComponentCreator('/documentation/serp-scraping', 'c39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/',
                component: ComponentCreator('/documentation/', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
