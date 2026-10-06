import React, { useState } from 'react';
import {
  AlertTriangle,
  Building2,
  Ambulance,
  Droplet,
  ShieldAlert,
  PhoneCall,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Info
} from 'lucide-react';
import { HOSPITALS_DATA, AMBULANCES_DATA, BLOOD_BANKS_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function EmergencySection({
  selectedCity,
  selectedArea,
  onOpenBookingModal,
  onOpenLocationModal
}) {
  const [activeEmergencyTab, setActiveEmergencyTab] = useState('all'); // 'all', 'hospitals', 'ambulances', 'blood', 'coordination'
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('O+');
  const [inputLocation, setInputLocation] = useState(selectedArea || selectedCity?.name || 'Koramangala, Bengaluru');
  const [requiredService, setRequiredService] = useState('emergency-icu');
  const [searchTriggered, setSearchTriggered] = useState(true);
  const [dispatchConfirmed, setDispatchConfirmed] = useState(false);
  const [dispatchedItem, setDispatchedItem] = useState(null);

  const emergencyTabs = [
    { id: 'all', label: 'All Emergency Services', icon: AlertTriangle },
    { id: 'hospitals', label: 'Emergency Hospitals', icon: Building2, badge: 'ICU Beds' },
    { id: 'ambulances', label: 'Find Ambulance', icon: Ambulance, badge: '8m ETA' },
    { id: 'blood', label: 'Find Blood', icon: Droplet, badge: 'Live Units' },
    { id: 'coordination', label: 'Emergency Coordination', icon: ShieldAlert, badge: 'Triage Hub' }
  ];

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    soundFx.playStageChime(750);
    setSearchTriggered(true);
    setDispatchConfirmed(false);
  };

  const handleInstantDispatch = (item, type) => {
    soundFx.playSuccessFanfare();
    setDispatchedItem({ item, type, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    setDispatchConfirmed(true);
  };

  return (
    <section id="emergency" className="mednest-emergency-section">
      <div className="container">
        {/* Main Emergency Header Box */}
        <div className="emergency-header-banner">
          <div className="emergency-header-content">
            <div className="emergency-badge-pulse">
              <span className="emergency-dot-pulse"></span>
              <span>24/7 RAPID RESPONSE HUB</span>
            </div>
            <h2 className="emergency-main-title">Need Help Right Now?</h2>
            <p className="emergency-sub-text">
              Real-time emergency coordination connecting verified <strong>Level-1 Trauma Centers</strong>, <strong>ALS Ambulances</strong>, and <strong>Live Blood Banks</strong>.
            </p>
          </div>

          {/* Direct 24/7 Hotline Badge */}
          <div className="emergency-hotline-card">
            <div className="hotline-icon-box">
              <PhoneCall size={26} className="text-white animate-bounce" />
            </div>
            <div className="hotline-text">
              <span className="hotline-label">MEDNEST 24/7 Emergency Dispatch</span>
              <a href="tel:1800MEDNEST" className="hotline-number">1800-MED-NEST</a>
              <span className="hotline-sub">Direct Line • 0s Hold Time • Free Call</span>
            </div>
          </div>
        </div>

        {/* 4 Emergency Action Cards */}
        <div className="emergency-action-cards-grid">
          {/* Card 1: Emergency Hospitals */}
          <div 
            onClick={() => { soundFx.playSoftClick(); setActiveEmergencyTab('hospitals'); }}
            className={`emergency-card ${activeEmergencyTab === 'hospitals' ? 'active' : ''}`}
          >
            <div className="emerg-card-icon bg-sky-50 text-sky-600">
              <Building2 size={24} />
            </div>
            <div className="emerg-card-info">
              <div className="emerg-card-title-row">
                <h3>Find Emergency Hospital</h3>
                <span className="badge-pill badge-blue">Live Beds</span>
              </div>
              <p>Trauma care, digital Cath Labs & verified ICU bed availability.</p>
            </div>
            <ChevronRight size={18} className="text-slate-400" />
          </div>

          {/* Card 2: Find Ambulance */}
          <div 
            onClick={() => { soundFx.playSoftClick(); setActiveEmergencyTab('ambulances'); }}
            className={`emergency-card ${activeEmergencyTab === 'ambulances' ? 'active' : ''}`}
          >
            <div className="emerg-card-icon bg-rose-50 text-rose-600">
              <Ambulance size={24} />
            </div>
            <div className="emerg-card-info">
              <div className="emerg-card-title-row">
                <h3>Find Ambulance</h3>
                <span className="badge-pill badge-red">8-12m ETA</span>
              </div>
              <p>ALS Cardiac & BLS transport with live GPS map dispatch.</p>
            </div>
            <ChevronRight size={18} className="text-slate-400" />
          </div>

          {/* Card 3: Find Blood */}
          <div 
            onClick={() => { soundFx.playSoftClick(); setActiveEmergencyTab('blood'); }}
            className={`emergency-card ${activeEmergencyTab === 'blood' ? 'active' : ''}`}
          >
            <div className="emerg-card-icon bg-pink-50 text-rose-600">
              <Droplet size={24} />
            </div>
            <div className="emerg-card-info">
              <div className="emerg-card-title-row">
                <h3>Find Blood</h3>
                <span className="badge-pill badge-orange">Verified Stocks</span>
              </div>
              <p>Real-time units across Red Cross & hospital blood centers.</p>
            </div>
            <ChevronRight size={18} className="text-slate-400" />
          </div>

          {/* Card 4: Emergency Coordination */}
          <div 
            onClick={() => { soundFx.playSoftClick(); setActiveEmergencyTab('coordination'); }}
            className={`emergency-card ${activeEmergencyTab === 'coordination' ? 'active' : ''}`}
          >
            <div className="emerg-card-icon bg-purple-50 text-purple-600">
              <ShieldAlert size={24} />
            </div>
            <div className="emerg-card-info">
              <div className="emerg-card-title-row">
                <h3>Emergency Coordination</h3>
                <span className="badge-pill badge-purple">Triage 3-in-1</span>
              </div>
              <p>Simultaneously reserves Hospital bed + Ambulance + Blood.</p>
            </div>
            <ChevronRight size={18} className="text-slate-400" />
          </div>
        </div>

        {/* Interactive Emergency Triage Input Bar */}
        <div className="emergency-search-control-panel">
          <form onSubmit={handleSearchSubmit} className="emergency-triage-form">
            <div className="triage-input-group">
              <label className="triage-label">
                <MapPin size={14} className="text-sky-600" />
                <span>Your Location</span>
              </label>
              <input
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                placeholder="Enter area, hospital or pincode"
                className="triage-input"
              />
            </div>

            <div className="triage-input-group">
              <label className="triage-label">
                <Droplet size={14} className="text-rose-600" />
                <span>Required Blood Group</span>
              </label>
              <select 
                value={selectedBloodGroup} 
                onChange={(e) => setSelectedBloodGroup(e.target.value)}
                className="triage-select"
              >
                {bloodGroups.map((bg) => (
                  <option key={bg} value={bg}>{bg} Blood Group</option>
                ))}
              </select>
            </div>

            <div className="triage-input-group">
              <label className="triage-label">
                <AlertTriangle size={14} className="text-amber-600" />
                <span>Required Emergency Service</span>
              </label>
              <select
                value={requiredService}
                onChange={(e) => setRequiredService(e.target.value)}
                className="triage-select"
              >
                <option value="emergency-icu">Emergency ICU Bed + Hospital Admission</option>
                <option value="als-ambulance">ALS Cardiac Ambulance Dispatch</option>
                <option value="blood-emergency">Urgent Blood / Platelet Units</option>
                <option value="full-coordination">Complete 3-in-1 Emergency Triage</option>
              </select>
            </div>

            <button type="submit" className="triage-submit-btn">
              <AlertTriangle size={18} />
              <span>Find Emergency Support</span>
            </button>
          </form>
        </div>

        {/* Live Dispatch Confirmation Alert */}
        {dispatchConfirmed && dispatchedItem && (
          <div className="emergency-dispatch-banner-confirmed">
            <div className="dispatch-alert-left">
              <div className="dispatch-alert-icon">
                <CheckCircle2 size={24} className="text-emerald-600" />
              </div>
              <div className="dispatch-alert-info">
                <h4>Emergency Alert Dispatched Successfully!</h4>
                <p>
                  Coordinating with <strong>{dispatchedItem.item.name}</strong> • Reference Token: <strong>EMG-{Math.floor(1000 + Math.random() * 9000)}</strong> • Live operator monitoring.
                </p>
              </div>
            </div>
            <div className="dispatch-alert-actions">
              <a href="tel:1800MEDNEST" className="btn-call-operator">
                <PhoneCall size={16} />
                <span>Speak to Dispatcher</span>
              </a>
              <button onClick={() => setDispatchConfirmed(false)} className="btn-dismiss-alert">
                Dismiss
              </button>
            </div>
          </div>
        )}

        {/* Live Results Display Area */}
        <div className="emergency-results-container">
          {/* Tab Filter Row */}
          <div className="emergency-tabs-row">
            {emergencyTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => { soundFx.playSoftClick(); setActiveEmergencyTab(tab.id); }}
                  className={`emerg-tab-btn ${activeEmergencyTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                  {tab.badge && <span className="tab-mini-tag">{tab.badge}</span>}
                </button>
              );
            })}
          </div>

          {/* Results Grid */}
          <div className="emergency-cards-display-grid">
            {/* Show Hospitals if tab is 'all', 'hospitals' or 'coordination' */}
            {(activeEmergencyTab === 'all' || activeEmergencyTab === 'hospitals' || activeEmergencyTab === 'coordination') && (
              <div className="emergency-category-block">
                <div className="category-header-row">
                  <div className="cat-title-left">
                    <Building2 size={18} className="text-sky-600" />
                    <h4>Nearest Verified Emergency Hospitals</h4>
                  </div>
                  <span className="text-xs text-slate-500">Live ICU Telemetry</span>
                </div>

                <div className="emerg-hospital-cards">
                  {HOSPITALS_DATA.slice(0, 2).map((hosp) => (
                    <div key={hosp.id} className="emerg-result-card">
                      <div className="result-card-header">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900">{hosp.name}</h4>
                            <span className="verified-badge-inline" title="NABH & NMC Verified">
                              <ShieldCheck size={14} className="text-emerald-600 inline mr-1" />
                              Verified
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{hosp.address} • <strong>{hosp.distance}</strong></p>
                        </div>
                        <div className="icu-availability-chip">
                          <span className="live-dot-green"></span>
                          <span>{hosp.icuBedsAvailable} ICU Beds Available</span>
                        </div>
                      </div>

                      <div className="result-specialties-tags">
                        {hosp.specialties.slice(0, 4).map((spec, i) => (
                          <span key={i} className="spec-tag">{spec}</span>
                        ))}
                      </div>

                      <div className="result-actions-row">
                        <a href={`tel:${hosp.emergencyHotline}`} className="btn-call-emergency">
                          <PhoneCall size={15} />
                          <span>Emergency Hotline</span>
                        </a>
                        <button 
                          onClick={() => handleInstantDispatch(hosp, 'hospital')}
                          className="btn-reserve-bed"
                        >
                          <span>Reserve ER Bed</span>
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show Ambulances if tab is 'all', 'ambulances' or 'coordination' */}
            {(activeEmergencyTab === 'all' || activeEmergencyTab === 'ambulances' || activeEmergencyTab === 'coordination') && (
              <div className="emergency-category-block">
                <div className="category-header-row">
                  <div className="cat-title-left">
                    <Ambulance size={18} className="text-rose-600" />
                    <h4>Nearby GPS-Tracked Ambulances</h4>
                  </div>
                  <span className="text-xs text-slate-500">Avg response: 8 mins</span>
                </div>

                <div className="emerg-ambulance-cards">
                  {AMBULANCES_DATA.slice(0, 2).map((amb) => (
                    <div key={amb.id} className="emerg-result-card ambulance-theme">
                      <div className="result-card-header">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-900">{amb.name}</h4>
                            <span className="badge-pill badge-red">{amb.type}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">
                            Vehicle: <strong>{amb.vehicleNo}</strong> • Driver: {amb.driverName}
                          </p>
                        </div>
                        <div className="eta-chip">
                          <Clock size={14} className="text-rose-600" />
                          <span>ETA: {amb.etaMinutes} mins ({amb.distance})</span>
                        </div>
                      </div>

                      <div className="ambulance-equipment-list">
                        <span className="equip-label">On-Board:</span>
                        {amb.equipmentOnBoard.slice(0, 3).map((eq, i) => (
                          <span key={i} className="equip-item">{eq}</span>
                        ))}
                      </div>

                      <div className="result-actions-row">
                        <a href={`tel:${amb.contact}`} className="btn-call-emergency">
                          <PhoneCall size={15} />
                          <span>Call Paramedic</span>
                        </a>
                        <button 
                          onClick={() => handleInstantDispatch(amb, 'ambulance')}
                          className="btn-dispatch-ambulance"
                        >
                          <Ambulance size={16} />
                          <span>Dispatch to My Location</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Show Blood Stock if tab is 'all', 'blood' or 'coordination' */}
            {(activeEmergencyTab === 'all' || activeEmergencyTab === 'blood' || activeEmergencyTab === 'coordination') && (
              <div className="emergency-category-block">
                <div className="category-header-row">
                  <div className="cat-title-left">
                    <Droplet size={18} className="text-rose-600" />
                    <h4>Real-Time Blood Bank Inventory ({selectedBloodGroup} Blood)</h4>
                  </div>
                  <span className="text-xs text-slate-500">Refreshed 4 mins ago</span>
                </div>

                <div className="emerg-blood-cards">
                  {BLOOD_BANKS_DATA.slice(0, 2).map((bb) => {
                    const unitsAvailable = bb.inventory[selectedBloodGroup] || 8;
                    return (
                      <div key={bb.id} className="emerg-result-card blood-theme">
                        <div className="result-card-header">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-slate-900">{bb.name}</h4>
                              <span className="verified-badge-inline">
                                <ShieldCheck size={14} className="text-emerald-600 inline mr-1" />
                                Licensed
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{bb.address} • <strong>{bb.distance}</strong></p>
                          </div>
                          <div className="blood-units-chip">
                            <Droplet size={16} className="text-rose-600" />
                            <span className="font-extrabold text-rose-700">{unitsAvailable} Units ({selectedBloodGroup})</span>
                          </div>
                        </div>

                        {/* Quick stock inventory preview */}
                        <div className="blood-quick-stocks-row">
                          {['A+', 'B+', 'O+', 'AB+', 'Platelets'].map((type) => (
                            <div key={type} className={`stock-badge ${type === selectedBloodGroup ? 'selected' : ''}`}>
                              <span className="stock-type">{type}:</span>
                              <span className="stock-count">{bb.inventory[type] || 5}</span>
                            </div>
                          ))}
                        </div>

                        <div className="result-actions-row">
                          <a href={`tel:${bb.contact}`} className="btn-call-emergency">
                            <PhoneCall size={15} />
                            <span>Call Blood Centre</span>
                          </a>
                          <button 
                            onClick={() => handleInstantDispatch(bb, 'blood')}
                            className="btn-reserve-blood"
                          >
                            <span>Reserve Blood Units</span>
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mandatory Regulatory Safety Disclaimer Box */}
        <div className="emergency-disclaimer-card">
          <div className="disclaimer-icon-wrap">
            <Info size={20} className="text-amber-600 flex-shrink-0" />
          </div>
          <div className="disclaimer-text">
            <h4>Important Safety & Medical Emergency Notice</h4>
            <p>
              <strong>MEDNEST is a healthcare coordination platform. It does NOT replace government or established emergency medical services (EMS).</strong> In life-threatening situations requiring immediate CPR, critical trauma intervention, or police/fire rescue, please dial <strong>112 / 108</strong> directly. MEDNEST facilitates verified connectivity with accredited healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
