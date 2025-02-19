import React from 'react';

export default function MarcoPage() {
  return (
    <iframe
      title="Marco AI Assistant"
      src="https://vapi.ai?demo=true&shareKey=42871133-195a-41fb-96fe-96bc9f53183a&assistantId=9e9d49d3-5f35-4335-94e5-84118e5bd674"
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