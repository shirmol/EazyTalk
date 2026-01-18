import { useState } from 'react';
import './App.css';
import WelcomeScreen from './WelcomeScreen.jsx';
import VpnScreen from './VpnScreen.jsx';
import IntroPopup from './IntroPopup.jsx';
import TutorialScreen from './TutorialScreen.jsx'; 
import PracticeScenario from './PracticeScenario.jsx';
import PracticeScreen from './PracticeScreen.jsx';    

function App() {
  const [currentStep, setCurrentStep] = useState('WELCOME');

  const renderScreen = () => {
    switch (currentStep) {
      
      case 'WELCOME':
        return <WelcomeScreen onStart={() => setCurrentStep('VPN')} />;
      
      case 'VPN':
        return <VpnScreen onVpnConnect={() => setCurrentStep('INTRO')} />;

      case 'INTRO':
        return <IntroPopup onStart={() => setCurrentStep('TUTORIAL')} />;

      case 'TUTORIAL':
        return <TutorialScreen onComplete={() => setCurrentStep('SCENARIO')} />;

      case 'SCENARIO':
        return <PracticeScenario onStart={() => setCurrentStep('PRACTICE')} />;

      case 'PRACTICE':
        return <PracticeScreen onFinish={() => setCurrentStep('FINISHED')} />;

      case 'FINISHED':
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', direction: 'rtl' }}>
                הלומדה הסתיימה בהצלחה!
            </div>
        );

      default:
        return <div>שגיאה</div>;
    }
  };

  return (
    <div className="app-frame">
      {renderScreen()}
    </div>
  );
}

export default App;