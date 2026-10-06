import React from 'react';
import {
  Home,
  Search,
  AlertTriangle,
  Calendar,
  User,
  HeartHandshake
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function MobileBottomNav({
  activeNav,
  setActiveNav,
  onOpenEmergency,
  onOpenUserModal,
  onOpenSearch
}) {
  const handleNav = (navId, sectionId) => {
    soundFx.playSoftClick();
    setActiveNav(navId);
    const elem = document.getElementById(sectionId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmergency = () => {
    soundFx.playStageChime(700);
    if (onOpenEmergency) onOpenEmergency();
    const elem = document.getElementById('emergency');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mednest-mobile-bottom-nav">
      <button
        onClick={() => handleNav('home', 'hero')}
        className={`mobile-bar-btn ${activeNav === 'home' ? 'active' : ''}`}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button
        onClick={() => handleNav('find-care', 'find-care')}
        className={`mobile-bar-btn ${activeNav === 'find-care' ? 'active' : ''}`}
      >
        <Search size={20} />
        <span>Find Care</span>
      </button>

      {/* Center Floating Emergency Button */}
      <button
        onClick={handleEmergency}
        className="mobile-bar-emergency-center-btn"
        title="24/7 Emergency Support"
      >
        <div className="mobile-emerg-circle">
          <AlertTriangle size={20} className="text-white" />
        </div>
        <span className="text-rose-600 font-extrabold text-[10px] uppercase">Emergency</span>
      </button>

      <button
        onClick={() => handleNav('mednest-care', 'mednest-care')}
        className={`mobile-bar-btn ${activeNav === 'mednest-care' ? 'active' : ''}`}
      >
        <HeartHandshake size={20} />
        <span>Care</span>
      </button>

      <button
        onClick={() => { soundFx.playSoftClick(); onOpenUserModal(); }}
        className="mobile-bar-btn"
      >
        <User size={20} />
        <span>Profile</span>
      </button>
    </div>
  );
}
