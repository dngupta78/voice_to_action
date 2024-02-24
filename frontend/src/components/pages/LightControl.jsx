// LightControl.js
import React, { useState } from 'react';
import "./LightControl.css";
import light_on from '../../assets/bulb_on.png';
import light_off from '../../assets/bulb_off.png';

const LightControl = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(prevState => !prevState);
  };

  const turnOnLight = () => {
    setIsLightOn(true);
  };

  const turnOffLight = () => {
    setIsLightOn(false);
  };

  return (
    <div className="light-control">
      <h3>Light Control</h3>
      <div className="light-switch">
        <img 
          src={isLightOn ? light_on : light_off} 
          alt={isLightOn ? "On" : "Off"}
          onClick={toggleLight}
          className="light-bulb"
        />
      </div>
      <span>{isLightOn ? 'On' : 'Off'}</span>
      <div className="button-group">
        <button onClick={turnOnLight}>Turn On</button>
        <button onClick={turnOffLight}>Turn Off</button>
      </div>
    </div>
  );
}

export default LightControl;
