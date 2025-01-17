import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Introduction',
    },
    {
      type: 'category',
      label: '🤖 AI',
      items: [
        'ai/models',
        'ai/agents',
        'ai/ide',
        'ai/hosting',
        'ai/tools',
      ],
    },
    {
      type: 'category',
      label: '🔗 Crypto',
      items: [
        'crypto/protocols',
        'crypto/defi',
        'crypto/web3',
      ],
    },
    {
      type: 'category',
      label: '⚡ Productivity',
      items: [
        'productivity/workflows',
        'productivity/documentation',
        'productivity/automation',
      ],
    },
  ],
};

export default sidebars;
