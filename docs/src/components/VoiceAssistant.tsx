import React, { useState, useRef, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BlandWebClient } from 'bland-client-js-sdk';
import { createWebAgent, getSessionToken } from '../api/bland';
import styles from './VoiceAssistant.module.css';

export default function VoiceAssistant(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const apiKey = siteConfig.customFields.blandApiKey;
  const [agentId, setAgentId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const clientRef = useRef<BlandWebClient | null>(null);

  useEffect(() => {
    const initAgent = async () => {
      if (!apiKey) return;
      try {
        const response = await createWebAgent(apiKey);
        const newAgentId = response?.agent?.id || response?.id;
        if (!newAgentId) throw new Error('No agent ID in response');
        setAgentId(newAgentId);
      } catch (err) {
        console.error('Agent creation error:', err);
        setError(err instanceof Error ? err.message : 'Failed to create agent');
      }
    };

    initAgent();
  }, [apiKey]);

  const handleStartCall = async () => {
    if (!apiKey || !agentId) {
      setError('Missing credentials');
      return;
    }

    try {
      const token = await getSessionToken(apiKey, agentId);
      clientRef.current = new BlandWebClient(token, agentId, {
        backgroundNoise: false,
      });

      await clientRef.current.initConversation({
        sampleRate: 44100,
        callId: agentId
      });

      // Add event listeners separately
      clientRef.current.on('data', (data) => console.log('Speech data received'));
      clientRef.current.on('error', (error) => setError('Connection error occurred'));

      setIsActive(true);
      setError(null);
    } catch (error) {
      console.error('Failed to start call:', error);
      setError('Failed to start call');
    }
  };

  const stopListening = () => {
    if (clientRef.current) {
      clientRef.current.stopConversation();
      clientRef.current = null;
    }
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}
      <button 
        type="button"
        className={`${styles.floatingButton} ${isActive ? styles.active : ''}`}
        onClick={() => isActive ? stopListening() : handleStartCall()}
        aria-label={isActive ? 'Stop voice assistant' : 'Start voice assistant'}
      >
        {isActive ? (
          <span className={styles.pulsingDot} />
        ) : (
          <span className={styles.micIcon}>🎤</span>
        )}
      </button>
    </div>
  );
} 