import React from 'react';
import {
  Building2,
  Ambulance,
  Droplet,
  Stethoscope,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { QUICK_SERVICES } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function QuickServiceCards({
  onSelectService,
  onOpenEmergency
}) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 size={24} />;
      case 'Ambulance': return <Ambulance size={24} />;
      case 'Droplet': return <Droplet size={24} />;
      case 'Stethoscope': return <Stethoscope size={24} />;
      case 'Microscope': return <Microscope size={24} />;
      case 'Pill': return <Pill size={24} />;
      case 'HeartHandshake': return <HeartHandshake size={24} />;
      case 'Accessibility': return <Accessibility size={24} />;
      default: return <Building2 size={24} />;
    }
  };

  const handleCardClick = (service) => {
    soundFx.playSoftClick();
    if (service.id === 'ambulances' || service.id === 'blood') {
      if (onOpenEmergency) onOpenEmergency();
      const elem = document.getElementById('emergency');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (onSelectService) onSelectService(service);
      const elem = document.getElementById(service.targetSection);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mednest-quick-services-section">
      <div className="container">
        <div className="quick-services-header">
          <div className="quick-title-wrap">
            <span className="section-eyebrow">
              <Sparkles size={14} className="text-sky-600" />
              QUICK ACCESS SERVICES
            </span>
            <h2 className="section-title">One-Click Healthcare Access</h2>
          </div>
          <p className="section-subtitle">
            Find, book, and coordinate everything from instant emergency response to home medical equipment.
          </p>
        </div>

        <div className="quick-cards-grid">
          {QUICK_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="quick-service-card"
              style={{ '--card-accent': item.color }}
            >
              <div className="card-top-row">
                <div 
                  className="quick-card-icon-box"
                  style={{ backgroundColor: item.bgColor, color: item.color }}
                >
                  {getIcon(item.icon)}
                </div>
                <div className="card-badge-tag" style={{ color: item.color, backgroundColor: item.bgColor }}>
                  {item.badge}
                </div>
              </div>

              <div className="card-content-block">
                <h3 className="quick-card-title">{item.title}</h3>
                <p className="quick-card-desc">{item.description}</p>
              </div>

              <div className="card-bottom-action">
                <span className="action-text">Explore Service</span>
                <div className="action-circle">
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
