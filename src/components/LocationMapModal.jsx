import React, { useState } from 'react';
import {
  MapPin,
  Search,
  Navigation,
  Building2,
  Ambulance,
  Droplet,
  Pill,
  HeartHandshake,
  Accessibility,
  CheckCircle2,
  X,
  PhoneCall,
  Calendar,
  Compass,
  Layers
} from 'lucide-react';
import { MEDNEST_CITIES, HOSPITALS_DATA, AMBULANCES_DATA, BLOOD_BANKS_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function LocationMapModal({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity,
  selectedArea,
  onSelectArea,
  targetProvider
}) {
  if (!isOpen) return null;

  const [currentCityId, setCurrentCityId] = useState(selectedCity?.id || 'bengaluru');
  const [areaInput, setAreaInput] = useState(selectedArea || '');
  const [selectedPin, setSelectedPin] = useState(targetProvider || HOSPITALS_DATA[0]);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  const activeCity = MEDNEST_CITIES.find((c) => c.id === currentCityId) || MEDNEST_CITIES[0];

  const simulatedPins = [
    { id: 'pin-1', name: 'Fortis Hospital & Trauma Center', type: 'hospitals', icon: 'Building2', color: '#0284c7', dist: '1.2 km', x: 42, y: 38, beds: '8 ICU Beds', contact: '+91 80 6621 4444' },
    { id: 'pin-2', name: 'LifeSave ALS Ambulance #04', type: 'ambulances', icon: 'Ambulance', color: '#ef4444', dist: '0.8 km (7m ETA)', x: 55, y: 48, beds: 'Paramedic Staffed', contact: '+91 98801 12345' },
    { id: 'pin-3', name: 'Red Cross Emergency Blood Centre', type: 'blood', icon: 'Droplet', color: '#e11d48', dist: '2.1 km', x: 28, y: 62, beds: '32 Units O+ Ready', contact: '+91 80 2226 8435' },
    { id: 'pin-4', name: 'Apollo Pharmacy 24/7 Store', type: 'pharmacies', icon: 'Pill', color: '#059669', dist: '0.4 km', x: 68, y: 30, beds: 'Open 24/7', contact: '+91 80 2630 4050' },
    { id: 'pin-5', name: 'CareFirst Home Nursing Hub', type: 'homecare', icon: 'HeartHandshake', color: '#db2777', dist: '1.5 km', x: 74, y: 68, beds: '14 Nurses Active', contact: '+91 80 4344 0100' },
    { id: 'pin-6', name: 'MedEquip Oxygen & Bed Depot', type: 'equipment', icon: 'Accessibility', color: '#d97706', dist: '1.9 km', x: 34, y: 25, beds: 'Oxygen In-Stock', contact: '+91 97410 88990' }
  ];

  const handleCityChange = (city) => {
    soundFx.playSoftClick();
    setCurrentCityId(city.id);
    if (onSelectCity) onSelectCity(city);
  };

  const handleAreaSelect = (area) => {
    soundFx.playSoftClick();
    setAreaInput(area);
    if (onSelectArea) onSelectArea(area);
  };

  const handlePinClick = (pin) => {
    soundFx.playSoftClick();
    setSelectedPin(pin);
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="location-map-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="location-modal-top">
          <div className="flex items-center gap-2">
            <Compass size={20} className="text-sky-600 animate-spin" style={{ animationDuration: '8s' }} />
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Location Discovery & Nearby Network</h3>
              <p className="text-xs text-slate-500">Live geo-spatial tracking for emergency and care services.</p>
            </div>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        {/* City & Area Selector Bar */}
        <div className="location-controls-bar">
          <div className="city-buttons-scroll">
            {MEDNEST_CITIES.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityChange(city)}
                className={`city-pill-btn ${currentCityId === city.id ? 'active' : ''}`}
              >
                <MapPin size={13} />
                <span>{city.name}</span>
              </button>
            ))}
          </div>

          <div className="area-autocomplete-box">
            <Search size={16} className="text-slate-400" />
            <input
              type="text"
              placeholder={`Enter area or PIN in ${activeCity.name} (e.g. Koramangala, 560034)...`}
              value={areaInput}
              onChange={(e) => setAreaInput(e.target.value)}
              className="area-input"
            />
          </div>

          <div className="area-tags-chips">
            <span className="text-xs font-bold text-slate-500">Popular Areas:</span>
            {activeCity.areas.slice(0, 4).map((ar, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleAreaSelect(ar)}
                className="area-chip-btn"
              >
                {ar}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Simulated Map Grid Area */}
        <div className="simulated-map-container">
          <div className="map-canvas-grid">
            {/* Radar scanner wave animation */}
            <div className="radar-sweep-center"></div>

            {/* Simulated Road Grid Lines */}
            <div className="map-road road-h-1"></div>
            <div className="map-road road-h-2"></div>
            <div className="map-road road-v-1"></div>
            <div className="map-road road-v-2"></div>

            {/* User Location Central Pin */}
            <div className="user-location-pin" style={{ left: '50%', top: '50%' }}>
              <div className="user-pulse-ring"></div>
              <div className="user-dot"></div>
              <span className="user-pin-label">You Are Here ({areaInput || activeCity.areas[0]})</span>
            </div>

            {/* Clickable Nearby Healthcare Pins */}
            {simulatedPins.map((pin) => (
              <div
                key={pin.id}
                onClick={() => handlePinClick(pin)}
                className={`map-provider-pin ${selectedPin?.id === pin.id ? 'active' : ''}`}
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  '--pin-bg': pin.color
                }}
                title={pin.name}
              >
                <div className="pin-icon-circle">
                  {pin.type === 'hospitals' && <Building2 size={16} />}
                  {pin.type === 'ambulances' && <Ambulance size={16} />}
                  {pin.type === 'blood' && <Droplet size={16} />}
                  {pin.type === 'pharmacies' && <Pill size={16} />}
                  {pin.type === 'homecare' && <HeartHandshake size={16} />}
                  {pin.type === 'equipment' && <Accessibility size={16} />}
                </div>
                <div className="pin-tooltip-badge">
                  <span className="pin-name-text">{pin.name}</span>
                  <span className="pin-dist-text">{pin.dist}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Pin Details Overlay Card */}
          {selectedPin && (
            <div className="selected-pin-info-overlay">
              <div className="pin-card-header">
                <div>
                  <span className="badge-pill badge-teal">{selectedPin.type || 'Healthcare Provider'}</span>
                  <h4 className="text-sm font-extrabold text-slate-900 mt-1">{selectedPin.name}</h4>
                  <p className="text-xs text-slate-500">{selectedPin.dist || '1.2 km away'} • {selectedPin.beds || 'Verified Partner'}</p>
                </div>
              </div>

              <div className="pin-card-actions mt-3">
                <a href={`tel:${selectedPin.contact || '+918066214444'}`} className="btn-pin-call">
                  <PhoneCall size={14} />
                  <span>Call Provider</span>
                </a>
                <button
                  onClick={() => {
                    soundFx.playSoftClick();
                    alert(`Starting GPS turn-by-turn navigation to ${selectedPin.name}...`);
                  }}
                  className="btn-pin-nav"
                >
                  <Navigation size={14} />
                  <span>Start Navigation</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer-row">
          <button type="button" onClick={onClose} className="btn-modal-cancel">
            Close Map
          </button>
          <button
            type="button"
            onClick={() => {
              soundFx.playSoftClick();
              if (onSelectArea && areaInput) onSelectArea(areaInput);
              onClose();
            }}
            className="btn-modal-confirm"
          >
            <CheckCircle2 size={16} />
            <span>Set "{areaInput || activeCity.name}" as My Location</span>
          </button>
        </div>
      </div>
    </div>
  );
}
