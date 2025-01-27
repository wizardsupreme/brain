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
        {
          type: 'doc',
          id: 'ai/models',
          label: '🧠 Models',
        },
        {
          type: 'doc',
          id: 'ai/agents',
          label: '🤖 Agents',
        },
        {
          type: 'doc',
          id: 'ai/storage',
          label: '💾 Storage',
        },
        {
          type: 'doc',
          id: 'ai/ides',
          label: '💻 IDEs',
        },
        {
          type: 'doc',
          id: 'ai/interfaces',
          label: '🖥️ Interfaces',
        },
        {
          type: 'doc',
          id: 'ai/hosting',
          label: '☁️ Hosting',
        },
        {
          type: 'doc',
          id: 'ai/tools',
          label: '🛠️ Tools',
        },
        {
          type: 'doc',
          id: 'ai/videos',
          label: '🎥 Videos',
        },
      ],
    },
    {
      type: 'category',
      label: '🔗 Blockchain',
      items: [
        {
          type: 'doc',
          id: 'blockchain/protocols',
          label: '⛓️ Protocols',
        },
        {
          type: 'doc',
          id: 'blockchain/defi',
          label: '💰 DeFi',
        },
        {
          type: 'doc',
          id: 'blockchain/web3',
          label: '🌐 Web3',
        },
      ],
    },
    {
      type: 'category',
      label: '⚡ Productivity',
      items: [
        {
          type: 'doc',
          id: 'productivity/workflows',
          label: '📈 Workflows',
        },
        {
          type: 'doc',
          id: 'productivity/documentation',
          label: '📚 Documentation',
        },
        {
          type: 'doc',
          id: 'productivity/automation',
          label: '⚡ Automation',
        },
      ],
    },
  ],
};

export default sidebars;
