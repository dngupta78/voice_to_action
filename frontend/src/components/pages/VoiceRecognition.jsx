import React, { useState } from 'react';
import microphoneOnIcon from '../../assets/microphone_on.png';
import microphoneOffIcon from '../../assets/microphone_off.png';

const VoiceRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState(null);
    const recognition = new window.webkitSpeechRecognition();

    recognition.lang = 'en-US';

    recognition.onstart = () => {
        setTranscript('Listening...');
    };

    recognition.onresult = event => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
    };

    recognition.onend = () => {
        setIsListening(false);
        if(transcript === "Listening...")
            setTranscript(null)
    };

    const toggleListening = () => {
        if (!isListening) {
            setIsListening(true);
            recognition.start();
        } else {
            setIsListening(false);
            recognition.stop();
            console.log(transcript)
            if(transcript === "Listening...")
                setTranscript(null)
        }
    };

    return (
        <div className="image-button-container">
            <h1>Audio to Text</h1><br />
            <button className="image-button" onClick={toggleListening} style={{ background: 'transparent', border: 'none' }}>
                <img
                    src={isListening ?  microphoneOnIcon : microphoneOffIcon}
                    alt="Microphone"
                    className="img-class"
                    style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                />
            </button>
            {transcript && (
                <div className="response-data-container">
                    {/* Display response data beautifully */}
                    <p className="response-data">{transcript}</p>
                </div>
            )}
        </div>
    );
}

export default VoiceRecognition;
