import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  Clock,
  Lock,
  Key,
  Star,
  Headphones,
  CheckCircle2,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { TRUST_PILLARS } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function TrustSection() {
  const [activePillar, setActivePillar] = useState('trust-1');

  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={26} />;
      case 'Award': return <Award size={26} />;
      case 'Clock': return <Clock size={26} />;
      case 'Lock': return <Lock size={26} />;
      case 'Key': return <Key size={26} />;
      case 'Star': return <Star size={26} />;
      case 'Headphones': return <Headphones size={26} />;
      default: return <ShieldCheck size={26} />;
    }
  };

  return (
    <section id="trust" className="mednest-trust-section">
      <div className="container">
        <div className="section-head-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="badge-pill badge-teal">PATIENT SAFETY & COMPLIANCE</span>
            <span className="text-xs text-slate-500 font-semibold">• Zero Compromises</span>
          </div>
          <h2 className="section-title">Built on Trust.</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Healthcare demands absolute integrity. Learn how MEDNEST enforces rigorous physical and digital standards across every provider and service.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="trust-pillars-grid">
          {TRUST_PILLARS.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => {
                  soundFx.playSoftClick();
                  setActivePillar(pillar.id);
                }}
                className={`trust-pillar-card ${isSelected ? 'active-pillar' : ''}`}
                style={{ '--pillar-color': pillar.color }}
              >
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ color: pillar.color }}>
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <div className="pillar-tick-badge">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                  </div>
                </div>

                <div className="pillar-content">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <h4 className="pillar-subtitle">{pillar.subtitle}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Summary Strip */}
        <div className="trust-compliance-strip">
          <div className="compliance-item">
            <ShieldCheck size={18} className="text-sky-600" />
            <span>NMC Registered Doctors</span>
          </div>
          <div className="compliance-item">
            <Award size={18} className="text-emerald-600" />
            <span>NABL Certified Diagnostic Labs</span>
          </div>
          <div className="compliance-item">
            <Lock size={18} className="text-purple-600" />
            <span>ABDM Aligned Health Records</span>
          </div>
          <div className="compliance-item">
            <Headphones size={18} className="text-rose-600" />
            <span>24/7 Clinical Grievance Cell</span>
          </div>
        </div>
      </div>
    </section>
  );
}
