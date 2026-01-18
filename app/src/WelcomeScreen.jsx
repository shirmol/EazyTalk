import { useState } from 'react';
import welcomeImg from './assets/EasyTalk_Jeep_Intro.png'; 
import './WelcomeScreen.css';
import welcomeBg from './assets/Welcome_Screen.jpg';

function WelcomeScreen({ onStart }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="screen-container">
      <div className="welcome-content-wrapper">
          <img src={welcomeImg} alt="Welcome" className="bg-image" />
          {!showInfo ? (
            
            <div className="welcome-overlay">
              <h1 className="main-title">ברוכים הבאים ללומדת EasyTalk</h1>
              <button className="start-button" onClick={() => setShowInfo(true)}>
                התחל בלומדה
              </button>
            </div>

          ) : (
            
            <div className="info-popup">
              <h2 className="info-title">קצת על ה-EasyTalk</h2>
              <ul className="info-list">
                <li>אפליקציית קשר מתפרץ המהווה פלטפורמה מבצעית לקצה הטקטי.</li>
                <li>המערכת מקושרת ברשת ROIP "ברק כתום" של המשטרה ולרשת DMR.</li>
                <li>האפליקציה מאפשרת שידור מיקום GPS אישי ושיחות רדיו קבוצתיות.</li>
              </ul>
              <button className="continue-button" onClick={onStart}>
                המשך
              </button>
            </div>

          )}
      </div> 
    </div>
  );
} 

export default WelcomeScreen;