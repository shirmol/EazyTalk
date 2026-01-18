import React from 'react';
import './VpnScreen.css';
import vpnImg from './assets/VPN_Connection_Reminder.png'; 

function VpnScreen({ onVpnConnect }) {
  return (
    <div className="screen-container">
      <img src={vpnImg} alt="Background" className="bg-image" />
      <div className="vpn-header">
        <h1>תזכורת: חזור לאפליקציית ה-VPN וודא שאתה מחובר.</h1>
        <h2>בלי חיבור פעיל לא ניתן להשתמש באפליקציה.</h2>
      </div>
      <button className="vpn-button" onClick={onVpnConnect}>
        אני מחובר - אפשר להתקדם
      </button>
    </div>
  );
}

export default VpnScreen;