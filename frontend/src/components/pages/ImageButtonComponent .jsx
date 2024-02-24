import React, { useState } from 'react';
import './ImageButtonComponent.css'; // Import CSS file

const ImageButtonComponent = () => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setIsLoading(true);
    setError(null);
    setResponseData("")
    try {
      const response = await fetch('http://127.0.0.1:8000/audio_to_text/');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Assuming responseData is an object with a key 'text'
      setResponseData(data.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-button-container">
      <h1>Speech to Text</h1><br/>
      <button className="image-button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : <img className="img-class" src="src/assets/microphone.png" alt="Button" />}
      </button>
      <p>Press to record and convert</p>
      {error && <p className="error-message">{error}</p>}
      {responseData && (
        <div className="response-data-container">
          {/* Display response data beautifully */}
          <p className="response-data">{responseData}</p>
        </div>
      )}
    </div>
  );
};

export default ImageButtonComponent;
