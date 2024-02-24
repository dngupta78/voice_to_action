import React from 'react';
import SpeechRecognitionPage from './SpeechRecognitionPage';
import ImageButtonComponent from './ImageButtonComponent ';
import './SpeechComponent.css'; // Import CSS file for SpeechComponent styling
import VoiceRecognition from './VoiceRecognition';

const SpeechComponent = () => {
  return (
    <div className="speech-component-container">
      <div className="card">
        <SpeechRecognitionPage />
      </div>
      <div className="card">
        <ImageButtonComponent />
      </div>
      <div className="card">
        <VoiceRecognition />
      </div>
    </div>
  );
}

export default SpeechComponent;