import React, { useState } from 'react';

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
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {FeatureList.map((props) => (
              <Feature key={props.id} {...props} />
            ))}
          </div>
        </div>
      </section>

      {showChat && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000
        }}>
          <iframe
            title="Nova AI Assistant"
            src="https://vapi.ai?demo=true&shareKey=42871133-195a-41fb-96fe-96bc9f53183a&assistantId=63300d08-00a8-4031-bd24-66b8bc17e570"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            allow="microphone"
          />
          <button 
            type="button"
            onClick={() => setShowChat(false)}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 1001,
              padding: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'white',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
        </div>
      )}
      
      <button
        type="button"
        onClick={() => setShowChat(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '15px 30px',
          borderRadius: '25px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          fontSize: '16px',
          zIndex: 999
        }}
      >
        Chat with Nova
      </button>
    </>
  );
}
