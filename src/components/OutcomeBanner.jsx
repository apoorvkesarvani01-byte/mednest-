import React from 'react';
import { Sparkles, Activity, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { PITCH_HIGHLIGHTS } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function OutcomeBanner({ onStartSimulation, onOpenPitch }) {
  return (
    <div className="container" style={{ marginTop: '20px', marginBottom: '40px' }}>
      <div className="outcome-banner-box">
        
        {/* Badge */}
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 8, 
            padding: '6px 16px', 
            borderRadius: 'var(--radius-full)', 
            background: 'rgba(255, 255, 255, 0.12)', 
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: 20
          }}
        >
          <Sparkles size={16} color="#60A5FA" />
          <span>The Connected Healthcare Ecosystem</span>
        </div>

        {/* Required Outcome Title */}
        <h2 className="outcome-title">
          “ONE PLATFORM. EVERY HEALTHCARE NEED.”
        </h2>

        {/* Required Supporting Line */}
        <p className="outcome-subtext">
          “From emergency access to recovery, MEDNEST keeps the healthcare journey connected.”
        </p>

        {/* 4 Impact Metrics */}
        <div className="outcome-metrics-grid">
          {PITCH_HIGHLIGHTS.metrics.map((m, idx) => (
            <div key={idx} className="outcome-metric-card">
              <div className="metric-big-num">{m.value}</div>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#F1F5F9', marginBottom: 2 }}>
                {m.label}
              </div>
              <div className="metric-label">{m.desc}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
          <button 
            className="btn-primary-cta"
            style={{ padding: '12px 28px', fontSize: '0.95rem', background: '#3B82F6' }}
            onClick={() => {
              soundFx.playSoftClick();
              onStartSimulation();
            }}
          >
            <Activity size={18} />
            <span>Launch Live Patient Walkthrough</span>
          </button>

          <button 
            className="btn-secondary-pitch"
            style={{ padding: '12px 24px', fontSize: '0.95rem', background: 'rgba(255, 255, 255, 0.15)', color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
            onClick={() => {
              soundFx.playSoftClick();
              onOpenPitch();
            }}
          >
            <Award size={18} color="#A78BFA" />
            <span>View Startup Pitch Deck</span>
          </button>
        </div>

      </div>
    </div>
  );
}
