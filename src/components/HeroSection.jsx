import React, { useState } from 'react';
import {
  Search,
  MapPin,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Activity,
  Heart,
  Ambulance,
  Stethoscope,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  CheckCircle2,
  Clock,
  Sparkles,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function HeroSection({
  onSearchQuery,
  onOpenEmergency,
  onOpenLocationModal,
  selectedCity,
  selectedArea,
  onSelectServiceTab,
  onStartRecoveryPlanner
}) {
  const [searchInput, setSearchInput] = useState('');

  const searchSuggestions = [
    { label: 'Hospital', icon: 'Building2', type: 'hospitals', section: 'find-care' },
    { label: 'Doctor', icon: 'Stethoscope', type: 'doctors', section: 'doctors' },
    { label: 'Ambulance', icon: 'Ambulance', type: 'ambulances', section: 'emergency' },
    { label: 'Blood', icon: 'Droplet', type: 'blood', section: 'emergency' },
    { label: 'Diagnostic Test', icon: 'Microscope', type: 'diagnostics', section: 'diagnostics' },
    { label: 'Pharmacy', icon: 'Pill', type: 'pharmacy', section: 'pharmacy' },
    { label: 'Nurse', icon: 'HeartHandshake', type: 'nurse', section: 'mednest-care' },
    { label: 'Physiotherapy', icon: 'Activity', type: 'physio', section: 'mednest-care' },
    { label: 'Medical Equipment', icon: 'Accessibility', type: 'equipment', section: 'mednest-care' }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      soundFx.playSoftClick();
      if (onSearchQuery) onSearchQuery(searchInput);
      const elem = document.getElementById('find-care');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuggestionClick = (sugg) => {
    soundFx.playSoftClick();
    setSearchInput(sugg.label);
    if (onSelectServiceTab) onSelectServiceTab(sugg.type);
    const elem = document.getElementById(sugg.section);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFindHealthcareClick = () => {
    soundFx.playSoftClick();
    const elem = document.getElementById('find-care');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="mednest-hero-section">
      <div className="hero-bg-glow hero-glow-1"></div>
      <div className="hero-bg-glow hero-glow-2"></div>
      <div className="hero-bg-glow hero-glow-3"></div>

      <div className="container hero-container-grid">
        {/* Left Column: Headline, Search & CTAs */}
        <div className="hero-left-content">
          {/* Identity Tagline Badge */}
          <div className="hero-platform-tag">
            <span className="tag-sparkle"><Sparkles size={14} className="text-sky-600" /></span>
            <span className="tag-text">ONE PLATFORM. EVERY HEALTHCARE NEED.</span>
            <span className="tag-dot"></span>
            <span className="tag-sub">NABH & NABL Network</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-main-title">
            Your Healthcare Journey,<br />
            <span className="hero-title-highlight">Connected in One Place.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-supporting-desc">
            Find trusted healthcare services from <strong>emergency support</strong> to <strong>treatment</strong> and <strong>home recovery</strong>. A single unified network connecting hospitals, verified doctors, diagnostic labs, pharmacies, and home-care specialists.
          </p>

          {/* Large Interactive Search Bar & Location Selector */}
          <form onSubmit={handleSearchSubmit} className="hero-search-card">
            {/* Location selector inside search */}
            <div 
              className="hero-location-picker"
              onClick={onOpenLocationModal}
              title="Change your city or area"
            >
              <MapPin size={18} className="text-sky-600 flex-shrink-0" />
              <div className="location-picker-text">
                <span className="location-picker-label">Location</span>
                <span className="location-picker-val">{selectedArea || selectedCity?.name || 'Bengaluru'}</span>
              </div>
            </div>

            <div className="search-bar-divider"></div>

            {/* Main Search Input */}
            <div className="hero-search-input-wrap">
              <Search size={20} className="text-slate-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="What healthcare service do you need? (e.g., Cardiologist, CBC Test, ICU Nurse, Bed Rental)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="hero-main-input"
              />
            </div>

            {/* Search Submit Button */}
            <button type="submit" className="hero-search-submit-btn">
              <span>Find Care</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Search Suggestions Chips */}
          <div className="hero-suggestions-container">
            <span className="suggestions-label">Popular Searches:</span>
            <div className="suggestions-scroll-row">
              {searchSuggestions.map((sugg, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSuggestionClick(sugg)}
                  className="suggestion-chip-btn"
                >
                  <span>{sugg.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dual Action CTA Buttons */}
          <div className="hero-cta-buttons-row">
            <button 
              type="button" 
              onClick={handleFindHealthcareClick}
              className="btn-primary-hero"
            >
              <span>Find Healthcare</span>
              <ArrowRight size={18} />
            </button>

            <button 
              type="button" 
              onClick={onOpenEmergency}
              className="btn-emergency-hero"
            >
              <AlertTriangle size={18} className="text-rose-500" />
              <span>Emergency Help (24/7)</span>
            </button>

            <button 
              type="button"
              onClick={onStartRecoveryPlanner}
              className="btn-outline-hero"
            >
              <HeartHandshake size={18} className="text-emerald-600" />
              <span>MEDNEST Care™</span>
            </button>
          </div>

          {/* Quick Trust Bar */}
          <div className="hero-trust-indicators">
            <div className="trust-ind-item">
              <ShieldCheck size={16} className="text-sky-600" />
              <span>100% Verified Providers</span>
            </div>
            <div className="trust-ind-item">
              <Clock size={16} className="text-emerald-600" />
              <span>Live ICU & Bed Availability</span>
            </div>
            <div className="trust-ind-item">
              <Activity size={16} className="text-purple-600" />
              <span>ABDM Health Vault Aligned</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Modern Healthcare Interactive Telemetry Card */}
        <div className="hero-right-illustration">
          <div className="telemetry-card-glass">
            {/* Card Header with Live Pulse */}
            <div className="telemetry-header">
              <div className="telemetry-badge-live">
                <span className="live-pulsing-dot"></span>
                <span>MEDNEST CONNECTED ECOSYSTEM</span>
              </div>
              <span className="telemetry-time">Live Status • Real-Time</span>
            </div>

            {/* Central Patient Workflow Graphic Card */}
            <div className="telemetry-patient-card">
              <div className="patient-avatar-box">
                <Heart size={24} className="text-rose-500 animate-pulse" />
              </div>
              <div className="patient-meta">
                <div className="patient-name-row">
                  <h4>Active Patient Journey</h4>
                  <span className="badge-pill badge-teal">Connected</span>
                </div>
                <p className="patient-desc">Emergency → Fortis Hospital → Mednest Home Care</p>
              </div>
            </div>

            {/* Live Micro Status Grid */}
            <div className="telemetry-status-grid">
              {/* Emergency Status */}
              <div className="telemetry-item item-red">
                <div className="tele-icon-circle bg-rose-50 text-rose-600">
                  <Ambulance size={18} />
                </div>
                <div className="tele-info">
                  <span className="tele-label">Emergency Coordination</span>
                  <span className="tele-val text-rose-600 font-bold">ALS Dispatched (8m ETA)</span>
                </div>
              </div>

              {/* In-Treatment Status */}
              <div className="telemetry-item item-blue">
                <div className="tele-icon-circle bg-sky-50 text-sky-600">
                  <Stethoscope size={18} />
                </div>
                <div className="tele-info">
                  <span className="tele-label">Treating Doctor</span>
                  <span className="tele-val text-sky-700 font-bold">Dr. Rajesh Kumar (Cardio)</span>
                </div>
              </div>

              {/* Home Care Recovery Status */}
              <div className="telemetry-item item-green">
                <div className="tele-icon-circle bg-emerald-50 text-emerald-600">
                  <HeartHandshake size={18} />
                </div>
                <div className="tele-info">
                  <span className="tele-label">MEDNEST Care (Home Recovery)</span>
                  <span className="tele-val text-emerald-700 font-bold">Nurse Mary Assigned (10 AM)</span>
                </div>
              </div>

              {/* Family Sync Status */}
              <div className="telemetry-item item-purple">
                <div className="tele-icon-circle bg-purple-50 text-purple-600">
                  <Activity size={18} />
                </div>
                <div className="tele-info">
                  <span className="tele-label">Family Vault & Vitals Sync</span>
                  <span className="tele-val text-purple-700 font-bold">Priya Sharma (Daughter) Updated</span>
                </div>
              </div>
            </div>

            {/* Bottom Real-Time Telemetry Bar */}
            <div className="telemetry-bottom-bar">
              <div className="vitals-metric">
                <span className="vital-name">Vitals</span>
                <span className="vital-num">BP 122/78 • SpO2 98%</span>
              </div>
              <div className="vitals-divider"></div>
              <div className="vitals-metric">
                <span className="vital-name">Adherence</span>
                <span className="vital-num text-emerald-600 font-bold">100% On-Track</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
