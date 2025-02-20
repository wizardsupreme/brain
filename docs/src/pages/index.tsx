import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './styles.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const imageUrl = useBaseUrl('img/icons/brain.png');
  
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroSection}>
          <div>
            <h1 className={styles.heroTitle}>
              Wizard Supreme{" "}
              <span className={styles.headerTextGradient}>
                Official AI Brain
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              AI, Crypto, Productivity and Everything Else
            </p>
            <div className={styles.buttonGroup}>
              <Link
                className="button button--primary button--lg"
                to="/intro">
                Get Started
              </Link>
              <Link
                className="button button--whatsapp button--lg"
                to="https://chat.whatsapp.com/HlNTqnlKhOaKJ1ZRPQDn8g"
                target="_blank"
                rel="noopener noreferrer">
                Join WhatsApp Group
              </Link>
              <div className={styles.githubButton}>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=wizardsupreme&repo=brain&type=star&count=true&size=large"
                  style={{ border: 0 }}
                  scrolling="0"
                  width="135"
                  height="30"
                  title="GitHub"
                >
                </iframe>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <img
              src={imageUrl}
              className={styles.heroImage}
              alt="Wizard Supreme Brain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      description="Wizard Supreme's Official AI Brain - A concise knowledge base for AI research and development">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
