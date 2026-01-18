import React, { useEffect } from 'react'; 
import './PracticeScenario.css';
import AlertSound from './assets/AlertSound.mp4'; 

function PracticeScenario({ onStart }) {
  useEffect(() => {
    const audio = new Audio(AlertSound);
    audio.loop = true; 
    audio.volume = 0.5; 
    
    audio.play().catch(error => console.log("Audio autoplay failed:", error));
    return () => {
      audio.pause();       
      audio.currentTime = 0; 
    };
  }, []);

  return (
    <div className="scenario-wrapper">
      <div className="scenario-card">
        <h1 className="scenario-title">
          אירוע רב-נפגעים<span role="img" aria-label="siren" className="siren-icon">⚠️</span>
        </h1>
        <p className="scenario-description">
          התקבל דיווח על תאונה קשה בציר. עליך להזניק את רופא
          החטיבה באופן מיידי לנקודה בשיחה פרטית.
        </p>

        <div className="mission-box">
          <h3>המשימה שלך:</h3>
          <ul>
            <li>היכנס לקבוצת <strong>"חטמ״ר 417 אשכולות מדרון88  " </strong>.</li>
            <li>מצא ברשימת המשתתפים את <strong>"חטמ״ר 417/קרפ״ח"</strong>.</li>
            <li>בצע אליו <strong>"קריאה"</strong> ודווח: <strong>'דרוש פינוי דחוף'</strong>.</li>
          </ul>
        </div>

        <button className="start-practice-btn" onClick={onStart}>
          התחל תרגול
        </button>

      </div>
    </div>
  );
}

export default PracticeScenario;