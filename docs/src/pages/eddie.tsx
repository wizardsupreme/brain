import React from 'react';

export default function EddiePage() {
  return (
    <iframe
      src="https://vapi.ai/?demo=true&shareKey=42871133-195a-41fb-96fe-96bc9f53183a&assistantId=bb0aa1db-c587-4118-b809-502faf1dc248"
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
  );
} 