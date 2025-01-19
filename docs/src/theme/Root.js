import React from 'react';
import VoiceAssistant from '@site/src/components/VoiceAssistant';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {children}
      <VoiceAssistant />
    </>
  );
} 