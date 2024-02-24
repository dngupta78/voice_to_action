// FanControl.js
import React, { useState } from 'react';
import "./FanControl.css"

const FanControl = () => {
  const [isFanOn, setIsFanOn] = useState(false);
  const [speed, setSpeed] = useState(0);

  const handleFanToggle = () => {
    setIsFanOn(!isFanOn);
    setSpeed(isFanOn ? 0 : 1); // If turning on, set speed to 1
    // Add code to control the fan power (e.g., send commands to the IoT device)
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
    // Add code to control the fan speed (e.g., send commands to the IoT device)
  };

  return (
    <div className="fan-control">
      <h3>Fan Control</h3>
      <div className="fan-switch">
        <label className="switch">
          <input type="checkbox" checked={isFanOn} onChange={handleFanToggle} />
          <span className="slider round"></span>
        </label>
        <span>{isFanOn ? 'On' : 'Off'}</span>
      </div>
      {isFanOn && (
        <div>
          <div className="fan-speeds">
            <button className={`speed-button ${speed === 1 ? 'active' : ''}`} onClick={() => handleSpeedChange(1)}>Speed 1</button>
            <button className={`speed-button ${speed === 2 ? 'active' : ''}`} onClick={() => handleSpeedChange(2)}>Speed 2</button>
            <button className={`speed-button ${speed === 3 ? 'active' : ''}`} onClick={() => handleSpeedChange(3)}>Speed 3</button>
            <button className={`speed-button ${speed === 4 ? 'active' : ''}`} onClick={() => handleSpeedChange(4)}>Speed 4</button>
            <button className={`speed-button ${speed === 5 ? 'active' : ''}`} onClick={() => handleSpeedChange(5)}>Speed 5</button>
          </div>
          <p>Speed: {speed}</p>
          <br />
          <div className={`fan-blades speed-${speed}`}></div>
        </div>
      )}
    </div>
  );
}

export default FanControl;
