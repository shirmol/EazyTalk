import React, { useState, useEffect } from 'react';
import './PracticeScreen.css';
import step1Image from './assets/Enter_Groups_Instruction.png';           
import step2Image from './assets/Join_Group_Instruction.png';       
import step3Image from './assets/Join_Group_Step2_Menu.png';          
import step4Image from './assets/Select_Contact_Instruction.png';    
import step5Image from './assets/Click_to_Call_Instruction.png';     
import step6Image from './assets/Press_to_Talk_Instruction.png'; 

const Typewriter = ({ text, speed = 70 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); 
    let i = 0;
    
    const timer = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));

      if (i === text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span>
      {displayedText}
      <span className="cursor-blink">|</span>
    </span>
  );
};

const Confetti = () => {
  const pieces = Array.from({ length: 50 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`, 
      animationDuration: `${Math.random() * 3 + 2}s`, 
      animationDelay: `${Math.random() * 2}s`, 
      backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)], // צבעים
    };
    return <div key={i} className="confetti-piece" style={style} />;
  });

  return <div className="confetti-wrapper">{pieces}</div>;
};

function PracticeScreen() {
  const [currentStep, setCurrentStep] = useState('STEP1');
  const [showError, setShowError] = useState(false);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [transmissionFinished, setTransmissionFinished] = useState(false);

  const stepsConfig = {
    STEP1: { image: step1Image, hotspot: { top: '27%', left: '59%', width: '6%', height: '10%' }, nextStep: 'STEP2' },
    STEP2: { image: step2Image, hotspot: { top: '42.9%', left: '41.7%', width: '28%', height: '16%' }, nextStep: 'STEP3' },
    STEP3: { image: step3Image, hotspot: { top: '63%', left: '42%', width: '25%', height: '7%' }, nextStep: 'STEP4' },
    STEP4: { image: step4Image, hotspot: { top: '20.7%', left: '41.8%', width: '27%', height: '8%' }, nextStep: 'STEP5' },
    STEP5: { image: step5Image, hotspot: { top: '51.5%', left: '41.5%', width: '26%', height: '8%' }, nextStep: 'STEP6' },
    STEP6: { image: step6Image, hotspot: null, nextStep: null }
  };

  const handleHotspotClick = (e, nextStep) => {
    if (e.type === 'click') {
        e.stopPropagation();
    }
    setShowError(false);
    setCurrentStep(nextStep);
  };

  const handleBackgroundClick = () => {
    if (currentStep !== 'STEP6' && !showCompletionPopup) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1500);
    }
  };

  useEffect(() => {
    if (currentStep === 'STEP6') {
            const timer = setTimeout(() => {
        setTransmissionFinished(true); 
        setShowCompletionPopup(true);  
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [currentStep]);
  const handleClosePopup = () => {
    setShowCompletionPopup(false);
  };
  const currentData = stepsConfig[currentStep];

  return (
    <div className="practice-container" onClick={handleBackgroundClick}>
      
      {currentData.image ? (
        <img 
            src={currentData.image} 
            alt={`שלב ${currentStep}`} 
            className="practice-bg"
        />
      ) : (
        <div style={{color:'white', padding:'20px'}}>תמונה חסרה</div>
      )}
      
      {currentData.hotspot && !transmissionFinished && (
        <div 
          className="hotspot"
          tabIndex="0"            
          role="button"         
          aria-label="לחץ להמשך" 
          onKeyDown={(e) => {      
            if (e.key === 'Enter' || e.key === ' ') {
                e.stopPropagation(); 
                handleHotspotClick(e, currentData.nextStep);
            }
          }}
          style={{
            top: currentData.hotspot.top,
            left: currentData.hotspot.left,
            width: currentData.hotspot.width,
            height: currentData.hotspot.height,
          }}
          onClick={(e) => handleHotspotClick(e, currentData.nextStep)}
        ></div>
      )}

      {showError && !showCompletionPopup && (
        <div className="error-message">פעולה שגויה. נסה שוב.</div>
      )}

      {currentStep === 'STEP6' && !transmissionFinished && (
        <div className="success-message">
          <span className="blink">● משדר...</span>
          <br/>
          <div style={{ direction: 'rtl', marginTop: '5px' }}>
             "<Typewriter text="דרוש פינוי דחוף!" speed={70} />"
          </div>

        </div>
      )}

      {showCompletionPopup && (
        <div className="popup-overlay">
          <Confetti />
          <div className="completion-popup-container">
            <button className="close-popup-btn" onClick={handleClosePopup}>
              &#10005;
            </button>
              <h2>כל הכבוד!</h2>
              <p>
                סיימת את הלומדה.<br/>
             עכשיו את/ה יכול/ה להשתמש באפליקציה EazyTalk בקלות
              </p>
            
          </div>
        </div>
      )}

    </div>
  );
}

export default PracticeScreen;