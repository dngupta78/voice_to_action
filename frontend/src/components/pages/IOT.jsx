// IOTPage.js
import React from 'react';
import FanControl from './FanControl';
import LightControl from './LightControl';
import './IOTPage.css'; // Import CSS file for styling

const IOT = () => {
  return (
    <div className="iot-container">
      <div className="control-card">
        <FanControl />
      </div>
      <div className="control-card">
        <LightControl />
      </div>
    </div>
  );
}

export default IOT;
