import React, { useState } from 'react';
import './TutorialScreen.css';
import mainGroupImg from './assets/Primary_Group.png'; 
import lastSenderImg from './assets/Last_Talker_ID.png'; 
import pttImg from './assets/PTT_Button.png'; 
import VoicemailImg from './assets/Voicemail_Button.png'; 
import speakerImg from './assets/Speaker_Button.png'; 
import CallLogImg from './assets/Call_Log_Button.jpg'; 
import groupsEntryImg from './assets/Secondary_Group_Buttons.png'; 
import groupsListButtonImg from './assets/Groups_List_Button.png'; 
import graySpeakrtImg from './assets/Group_Monitor_Icon_Gray.png';     
import greenSpeakerImg from './assets/Group_Audio_Icon_Green.png';  
import specificGroupRowImg from './assets/Specific_Group_Row.png';
import joinGroupButtonImg from './assets/Join_Group_Button.png'; 
import viewGroupInfoImg from './assets/View_Group_Info.png'; 
import availabilityIndicatorsImg from './assets/Availability_Indicators.png'; 
import specificContactNameImg from './assets/Specific_Contact_Name.png';           
import createCallImg from './assets/Contact_Options_Menu.png';          
import activeCallImg from './assets/Active_Transmission_Screen.png';   
import monitorClickSound from './assets/monitor_click.mp4';       
import statusIconsLegendImg from './assets/Status_Icons_Legend1.png'; 

function TutorialScreen({ onComplete }) {
  const [mainStep, setMainStep] = useState(0);
  const [subStep, setSubStep] = useState(-1);
  const [branchStep, setBranchStep] = useState(-1); 

  const playClickSound = () => { };

  const steps = [
    { id: 0, title: 'קבוצה ראשית', image: mainGroupImg, description: "קבוצה זו היא הקבוצה הראשית שלנו, אליה אנו יכולים לשדר", target: { top: '24%', left: '47%' }, placement: 'bottom' },
    { id: 1, title: 'משדר אחרון', image: lastSenderImg, description: "כאן מוצג שמו של המשדר האחרון", target: { top: '30%', left: '50%' }, placement: 'bottom' },
    { id: 2, title: 'תא קולי', image: VoicemailImg, description: "בלחיצה על כפתור התא קולי נוכל לשמוע את ההקלטה האחרונה ששודרה בקבוצה הראשית", target: { top: '90%', left: '39%' }, placement: 'top' },
    { id: 3, title: 'רמקול', image: speakerImg, description: "בלחיצה על כפתור הרמקול נוכל להוריד מרמקול", target: { top: '90%', left: '61%' }, placement: 'top' },
    { id: 4, title: 'לחצן PTT', image: pttImg, description: "באמצעות לחיצה על המיקרופון נוכל לצאת לשידור בקבוצה הראשית", target: { top: '66%', left: '50%' }, placement: 'top' },
    { id: 5, title: 'יומן שיחות', image: CallLogImg, description: "בלחיצה על כפתור יומן השיחות נראה את כל השידורים שהמכשיר קיבל ושידר", target: { top: '47%', left: '54%' }, placement: 'top' },
    { id: 6, title: 'קבוצות משניות', image: groupsEntryImg, description: "שלושת הקבוצות הקטנות על המסך הן הקבוצות בשימוש הכי נפוץ. באמצעות לחיצה על הקבוצה נוכל להפוך אותה לקבוצה הראשית", target: { top: '60%', left: '43%' }, placement: 'bottom' },
    { 
      id: 7, title: 'רשימת קבוצות', image: groupsListButtonImg, 
      hasDrillDown: true,
      description: "כפתור המכניס אותנו לקבוצות שאנו משוייכים אליהם.",
      target: { top: '23%', left: '61%' }, placement: 'bottom',
      
      subSteps: [
        { title: 'ניטור (אפור)', image: graySpeakrtImg, description: "יש ליד כל קבוצה רמקול. אם הוא אפור אנחנו לא בהאזנה לקבוצה. אם נלחץ עליו הוא יהפוך לירוק ונהיה בהאזנה לקבוצה.\n\nאנא לחץ על הרמקול להאזנה", target: { top: '22.4%', left: '63.4%' }, textLocation: { top: '27%', left: '63%' }, placement: 'bottom', isInteractive: true, sound: monitorClickSound },
        { title: 'שמע (ירוק)', image: greenSpeakerImg, description: "רמקול ירוק מעיד שאנו שומעים את השיחות בקבוצה זו.", target: { top: '27%', left: '63%' }, placement: 'bottom' },
        { title: 'בתוך קבוצה', image: specificGroupRowImg, description: "ברגע שנלחץ על הקבוצה נוכל לבחור אם להצטרף לקבוצה, לעזוב קבוצה או להציג פרטי קבוצה.\n\nאנא לחץ על שם הקבוצה", target: { top: '45.9%', left: '49.7%' }, textLocation: { top: '40%', left: '50%' }, placement: 'top', isInteractive: true, interactionSize: { width: '440px', height: '132px', borderRadius: '10px' } },
        { 
            title: 'הצטרפות', 
            image: joinGroupButtonImg, 
            description: "כאשר מצרפים לקבוצה היא הופכת לקבוצה הראשית.",
            target: { top: '60%', left: '50%' }, 
            textLocation: { top: '42%', left: '50%' }, 
            placement: 'top', 
            isInteractive: false 
        },
        { 
            title: 'פרטי קבוצה', 
            image: viewGroupInfoImg, 
            description: "כאשר נלחץ על להציג פרטי קבוצה נוכל לראות את כל אנשי הקשר כולל מגשרים וזמינותם",
            target: { top: '68%', left: '50%' }, 
            textLocation: { top: '72%', left: '50%' }, 
            placement: 'bottom',
            isInteractive: true,
             interactionSize: { 
                        width: '389px', 
                        height: '37px', 
                        borderRadius: '10px' 
                    },
            
            hasBranch: true,
            branchSteps: [
                { 
                    title: 'זמינות', image: availabilityIndicatorsImg, 
                    description: "חוץ מאנשי הקשר נוכל לראות מי זמין ומי לא מחובר לפי הצבע",
                    target: { top: '42%', left: '35%' }, placement: 'left',
                    extraImage: statusIconsLegendImg
                },
                { 
                    title: 'איש קשר', image: specificContactNameImg, 
                    description: "ברגע שלוחצים על אחד האנשים מופיעות האפשרויות. אנחנו נשתמש רק ב'קריאה'", 
                    target: { top: '49.8%', left: '52.8%' }, 
                    textLocation: { top: '52%', left: '55%' }, 
                    placement: 'bottom',
                    isInteractive: true,
                    interactionSize: { 
                                width: '340px', 
                                height: '37px', 
                                borderRadius: '10px' 
                    },
            
                },
           
                { 
                    title: 'יצירת קריאה', image: createCallImg, 
                    description:  "  כשנלחץ על קריאה יופיע מסך שחור וכל מי שבתדר יוכל לדבר                           אנא לחץ לקריאה", 
                    
                    target: { top: '51.5%', left: '51.5%' }, 
                    
                    textLocation: { top: '41%', left: '52%' }, 

                    placement: 'top',
                    isInteractive: true, 
                    interactionSize: { 
                        width: '384px', 
                        height: '37px', 
                        borderRadius: '10px' 
                    }
                },
                
                { 
                    title: 'שיחה פעילה', image: activeCallImg, 
                    description: "כך נראה מסך שידור פעיל.", 
                    target: { top: '25%', left: '50%' }, placement: 'bottom'
                }
            ]
        }
      ]
    }
  ];

const handleInteractiveClick = () => {
    let currentStepObj = steps[mainStep];
    if (subStep !== -1 && currentStepObj.subSteps) {
        currentStepObj = currentStepObj.subSteps[subStep];
        if (branchStep !== -1 && currentStepObj.branchSteps) {
            currentStepObj = currentStepObj.branchSteps[branchStep];
        }
    }

    if (currentStepObj.sound) {
        console.log("מנסה לנגן סאונד:", currentStepObj.sound);
        const audio = new Audio(currentStepObj.sound);
        
        audio.play()
            .then(() => {
                console.log("הסאונד מתנגן בהצלחה");
            })
            .catch((error) => {
                console.error("שגיאה בניגון הסאונד:", error);
                alert("יש בעיה עם קובץ האודיו. בדוק את ה-Console (F12) לפרטים.");
            });
    } 

    handleNext(); 
  };

  const jumpToMainStep = (index) => {
    setMainStep(index);
    setSubStep(-1);
    setBranchStep(-1);
  };
  const jumpToSubStep = (index) => {
    setSubStep(index);
    setBranchStep(-1);
  };
  const jumpToBranchStep = (index) => {
    setBranchStep(index);
  };

  const handleNext = () => {
    const currentMainData = steps[mainStep];

    if (branchStep !== -1) {
       const currentSub = currentMainData.subSteps[subStep];
       if (branchStep < currentSub.branchSteps.length - 1) {
           setBranchStep(branchStep + 1);
       } else {
           onComplete(); 
       }
       return;
    }

    if (subStep !== -1) {
      const currentSub = currentMainData.subSteps[subStep];
      if (currentSub.hasBranch) {
          setBranchStep(0);
          return;
      }
      if (subStep < currentMainData.subSteps.length - 1) {
        setSubStep(subStep + 1); 
      } else {
        setSubStep(-1);
        if (mainStep < steps.length - 1) setMainStep(mainStep + 1);
        else onComplete();
      }
      return;
    }

    if (currentMainData.hasDrillDown) {
      setSubStep(0);
    } else {
      if (mainStep < steps.length - 1) setMainStep(mainStep + 1);
      else onComplete();
    }
  };

  const exitSubFlow = (e) => {
    e.stopPropagation();
    if (branchStep !== -1) {
        setBranchStep(-1);
        return;
    }
    setSubStep(-1);
  };

  let currentImage = steps[mainStep].image;
  let currentText = steps[mainStep].description;
  let currentTarget = steps[mainStep].target || { top: '50%', left: '50%' };
  let currentPlacement = steps[mainStep].placement || 'bottom';
  let isInteractive = false;
  let bubblePos = currentTarget; 
  let interactionStyle = {};
  let currentExtraImage = null;
  let stepperAlign = 'right'; 

  if (subStep !== -1 && steps[mainStep].subSteps) {
    const sub = steps[mainStep].subSteps[subStep];
    
    if (branchStep !== -1 && sub.branchSteps) {
        const branch = sub.branchSteps[branchStep];
        currentImage = branch.image;
        currentText = branch.description;
        currentTarget = branch.target || { top: '50%', left: '50%' };
        currentPlacement = branch.placement || 'bottom';
        isInteractive = branch.isInteractive || false; 

        if (branch.extraImage) currentExtraImage = branch.extraImage;
        if (branch.textLocation) bubblePos = branch.textLocation;
        else bubblePos = currentTarget;
        if (branch.interactionSize) interactionStyle = branch.interactionSize;
        if (branch.stepperAlign) stepperAlign = branch.stepperAlign;

    } else {
        currentImage = sub.image;
        currentText = sub.description;
        currentTarget = sub.target || { top: '50%', left: '50%' };
        currentPlacement = sub.placement || 'bottom';
        isInteractive = sub.isInteractive || false;
        
        if (sub.textLocation) bubblePos = sub.textLocation;
        else bubblePos = currentTarget;
        if (sub.interactionSize) interactionStyle = sub.interactionSize;
        if (sub.stepperAlign) stepperAlign = sub.stepperAlign;
    }
  } else {
      if (steps[mainStep].textLocation) bubblePos = steps[mainStep].textLocation;
      else bubblePos = currentTarget;
      
      if (steps[mainStep].stepperAlign) stepperAlign = steps[mainStep].stepperAlign;
  }

  return (
    <div className="tutorial-container">
    <img 
      key={`${mainStep}-${subStep}-${branchStep}`} 
      src={currentImage} 
      alt="Tutorial Step" 
      className="tutorial-bg" 
    />     
     <div className="top-gradient-overlay"></div>

      {isInteractive && (
        <div 
            className="interaction-target pulsate"
            style={{ 
                top: currentTarget.top, 
                left: currentTarget.left,
                width: interactionStyle.width || '45px',
                height: interactionStyle.height || '44px',
                borderRadius: interactionStyle.borderRadius || '50%'
            }}
            onClick={handleInteractiveClick}
        ></div>
      )}

      <div 
        className={`instruction-bubble bubble-${currentPlacement} fade-in`}
        style={{ top: bubblePos.top, left: bubblePos.left }}
      >
        <p style={{ whiteSpace: 'pre-wrap' }}>{currentText}</p>
        
        {currentExtraImage && (
            <img src={currentExtraImage} alt="legend" className="bubble-extra-img" />
        )}

        {!isInteractive && (
          <button className="bubble-continue-btn" onClick={handleNext}>
            המשך
          </button>
        )}
      </div>

      <div className={`stepper-wrapper ${stepperAlign}`}>
        <div className="main-stepper">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              onClick={() => jumpToMainStep(index)}
              className={`step-dot main ${index === mainStep ? 'active' : ''} ${index < mainStep ? 'completed' : ''}`}
            >
              {index === mainStep && subStep !== -1 && <div className="branch-line"></div>}
            </div>
          ))}
        </div>

        {subStep !== -1 && (
          <div className="sub-stepper fade-in">
            <div className="sub-stepper-row">
                {steps[mainStep].subSteps.map((sub, subIndex) => (
                <div 
                    key={subIndex}
                    onClick={() => jumpToSubStep(subIndex)}
                    className={`step-dot sub ${subIndex === subStep ? 'active' : ''}`}
                >
                    {subIndex === subStep && branchStep !== -1 && <div className="sub-to-branch-line"></div>}
                </div>
                ))}
            </div>

            {branchStep !== -1 && steps[mainStep].subSteps[subStep].branchSteps && (
                <div className="branch-stepper">
                    {steps[mainStep].subSteps[subStep].branchSteps.map((b, bIndex) => (
                        <div 
                            key={bIndex}
                            onClick={() => jumpToBranchStep(bIndex)}
                            className={`step-dot branch ${bIndex === branchStep ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            )}

            <button className="back-up-btn" onClick={exitSubFlow}>▲ חזור</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TutorialScreen;