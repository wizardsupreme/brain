declare module '@docusaurus/useDocusaurusContext' {
  export interface DocusaurusContext {
    siteConfig: {
      customFields: {
        blandApiKey: string;
      };
    };
  }
}

declare module '@site/src/components/VoiceAssistant' {
  export default function VoiceAssistant(): JSX.Element;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Add page component types
declare namespace JSX {
  interface IntrinsicElements {
    'HomepageFeatures': {
      children?: React.ReactNode;
      description?: string;
    };
  }
}

declare module '@theme/Layout' {
  export interface Props {
    children: React.ReactNode;
    description?: string;
  }
  
  export default function Layout(props: Props): JSX.Element;
} 