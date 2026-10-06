import React, { useState } from 'react';
import { 
  Network, 
  Users, 
  Activity, 
  ArrowLeftRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  Stethoscope, 
  HeartPulse, 
  Truck, 
  FlaskConical, 
  Pill, 
  UserCheck, 
  Footprints, 
  Bed 
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { ECOSYSTEM_PROVIDERS } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function EcosystemHub() {
  const [activeProviderId, setActiveProviderId] = useState('hospitals');

  const selectedProvider = ECOSYSTEM_PROVIDERS.find(p => p.id === activeProviderId) || ECOSYSTEM_PROVIDERS[0];

  const handleProviderSelect = (pId) => {
    soundFx.playSoftClick();
    setActiveProviderId(pId);
  };

  return (
    <div className="container" id="ecosystem-section">
      <div className="ecosystem-hub-container">
        
        {/* Header */}
        <div className="ecosystem-header">
          <div className="badge-pill badge-green" style={{ marginBottom: 8 }}>
            <Network size={14} />
            <span>Platform Ecosystem Architecture</span>
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
            MEDNEST as the Central Healthcare Hub
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: 720, margin: '0 auto' }}>
            Bridging fragmented medical silos: Patients & families seamlessly connect with 9 verified healthcare provider networks through one intelligent coordination engine.
          </p>
        </div>

        {/* 3-Column Diagram (Patients <-> MEDNEST HUB <-> 9 Providers) */}
        <div className="ecosystem-diagram-row">
          
          {/* Left: Patients & Families */}
          <div className="ecosystem-patients-box">
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', boxShadow: 'var(--shadow-xs)' }}>
              <Users size={28} color="#2563EB" />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 6 }}>
              PATIENTS & FAMILIES
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Emergency SOS, hospital admissions, digital vault access & at-home recovery management
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'left' }}>
              <div style={{ background: '#FFFFFF', padding: '8px 10px', borderRadius: 'var(--radius-md)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                ✓ Single-tap Emergency SOS
              </div>
              <div style={{ background: '#FFFFFF', padding: '8px 10px', borderRadius: 'var(--radius-md)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                ✓ Shared Family Dashboard
              </div>
              <div style={{ background: '#FFFFFF', padding: '8px 10px', borderRadius: 'var(--radius-md)', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                ✓ Encrypted Health Vault
              </div>
            </div>
          </div>

          {/* Center: MEDNEST PLATFORM HUB */}
          <div className="ecosystem-center-hub">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Activity size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                MEDNEST HUB
              </h3>
            </div>

            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: 16 }}>
              The Intelligent Coordination Layer: Directs telemetry, schedules care, validates licenses & ensures data consent.
            </p>

            {/* Core engine badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
              <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid #DDD6FE', fontSize: '0.75rem', fontWeight: 700, color: '#6D28D9' }}>
                Context Continuity
              </div>
              <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid #DDD6FE', fontSize: '0.75rem', fontWeight: 700, color: '#6D28D9' }}>
                Verified Trust Layer
              </div>
              <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid #DDD6FE', fontSize: '0.75rem', fontWeight: 700, color: '#6D28D9' }}>
                Consent Vault
              </div>
              <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: 'var(--radius-md)', border: '1px solid #DDD6FE', fontSize: '0.75rem', fontWeight: 700, color: '#6D28D9' }}>
                Real-Time Dispatch
              </div>
            </div>

            {/* Live selected provider preview */}
            <div style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0', textAlign: 'left' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 2 }}>
                Active Channel Highlight:
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: selectedProvider.color }}>
                {selectedProvider.name} ({selectedProvider.count})
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', marginTop: 2 }}>
                {selectedProvider.role}
              </div>
            </div>
          </div>

          {/* Right: 9 Provider Categories */}
          <div className="ecosystem-providers-grid">
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4, textAlign: 'center' }}>
              9 Verified Provider Networks
            </div>

            {ECOSYSTEM_PROVIDERS.map((prov) => {
              const isSelected = activeProviderId === prov.id;
              return (
                <div
                  key={prov.id}
                  className="provider-chip"
                  onClick={() => handleProviderSelect(prov.id)}
                  style={{
                    cursor: 'pointer',
                    borderColor: isSelected ? prov.color : 'var(--border-subtle)',
                    background: isSelected ? '#F8FAFC' : '#FFFFFF',
                    transform: isSelected ? 'translateX(-4px)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <DynamicIcon name={prov.icon} size={16} color={prov.color} />
                    <span style={{ fontSize: '0.82rem' }}>{prov.name}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                    {prov.count}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
