import React from 'react';

type FeatureItem = {
  id: string;
  title: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    id: 'ai-features',
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
    id: 'blockchain-features',
    title: 'Crypto/Blockchain',
    icon: '🔗',
    description: (
      <>
        Blockchain technology documentation and guides. Smart contracts, DeFi protocols,
        and Web3 development resources all in one place.
      </>
    ),
  },
  {
    id: 'productivity-features',
    title: 'Productivity',
    icon: '⚡',
    description: (
      <>
        Tools and frameworks for enhancing productivity. Documentation, automation, 
        and workflow optimization techniques for modern development.
      </>
    ),
  },
];

function Feature({id, title, icon, description}: FeatureItem) {
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
          {FeatureList.map((props) => (
            <Feature key={props.id} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
