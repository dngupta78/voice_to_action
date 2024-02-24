import React, { useState } from 'react';
import "./LightControl.css";
import light_on from '../../assets/bulb_on.png';
import light_off from '../../assets/bulb_off.png';

const LightControl = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = () => {
    setIsLightOn(prevState => !prevState);
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
      <div className="button-group">
        <button onClick={toggleLight}>
          {isLightOn ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    </div>
  );
}

export default LightControl;
