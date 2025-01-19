import VoiceAssistant from './VoiceAssistant';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <VoiceAssistant />
    </>
  );
} 