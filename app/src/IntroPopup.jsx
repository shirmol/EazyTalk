import React from 'react';
import './IntroPopup.css'; 
import bgImage from './assets/Welcome_Screen.jpg'; 

function IntroPopup({ onStart }) {
  return (
    <div className="screen-container">
      <img src={bgImage} alt="Background" className="bg-image" />
      <div className="popup-overlay">
        <div className="popup-content">
          <h3>כעת נעבור על רכיבי האפליקציה שלב אחר שלב, על מנת להבטיח תפעול מקצועי ומדויק בשטח.</h3>
          
          <button className="popup-button" onClick={onStart}>
            התחל היכרות
          </button>
        </div>
      </div>
    </div>
  );
}

export default IntroPopup;