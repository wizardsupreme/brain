import React from 'react';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI',
    icon: '🤖',
    description: (
      <>
        Comprehensive documentation of AI models, agents, and tools. From GPT-4 to Claude, 
        covering the latest in artificial intelligence research and development.
      </>
    ),
  },
  {
    title: 'Productivity',
    icon: '⚡',
    description: (
      <>
        Tools and frameworks for enhancing productivity. Documentation, automation, 
        and workflow optimization techniques for modern development.
      </>
    ),
  },
  {
    title: 'Crypto/Blockchain',
    icon: '🔗',
    description: (
      <>
        Blockchain technology documentation and guides. Smart contracts, DeFi protocols,
        and Web3 development resources all in one place.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <div className="feature-description">{description}</div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
