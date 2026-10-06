import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  FileText, 
  Clock, 
  MapPin, 
  Building2, 
  Truck, 
  HeartPulse, 
  Stethoscope, 
  FlaskConical, 
  Pill, 
  Bed, 
  UserCheck, 
  Footprints, 
  BellRing, 
  LineChart, 
  Users,
  Check,
  Lock,
  Download,
  PhoneCall,
  Calendar,
  AlertCircle
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { soundFx } from '../utils/audio';

export default function ServiceDetailDrawer({ service, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [mockState, setMockState] = useState({
    bedCount: 8,
    bloodUnits: 'O+ (8 Units)',
    nurseShift: '12h Day Shift',
    equipmentDays: 14,
    recoveryScore: 78
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={() => {
            soundFx.playSoftClick();
            onClose();
          }}
          aria-label="Close details"
        >
          <X size={18} />
        </button>

        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20, paddingRight: 40 }}>
          <div className={`service-icon-wrap ${service.stageTheme || 'blue'}`} style={{ width: 54, height: 54, borderRadius: 'var(--radius-lg)' }}>
            <DynamicIcon name={service.icon} size={28} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span className={`badge-pill badge-${service.stageTheme || 'blue'}`} style={{ fontSize: '0.72rem' }}>
                {service.stageTitle || 'Workflow Module'}
              </span>
              <span className="badge-pill" style={{ background: '#F1F5F9', color: '#475569', fontSize: '0.72rem' }}>
                {service.badge}
              </span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {service.name}
            </h3>
            <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)', marginTop: 2 }}>
              {service.shortTag}
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 20 }}>
          {service.description}
        </p>

        {/* Live Interactive Widget Box */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-lg)', padding: '20px', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Live Platform Mock Telemetry:
            </span>
            <span style={{ fontSize: '0.74rem', color: '#10B981', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#10B981' }} className="animate-pulse-glow" />
              Verified & Synchronized
            </span>
          </div>

          {/* Dynamic Mock Key-Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 16 }}>
            {service.mockData && Object.entries(service.mockData).map(([key, value]) => (
              <div key={key} style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid #EEF2F6', boxShadow: 'var(--shadow-xs)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: 2 }}>
                  {String(value)}
                </div>
              </div>
            ))}
          </div>

          {/* Special interactive element for Health Vault */}
          {service.id === 'personal-health-vault' && (
            <div style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Lock size={14} color="#10B981" />
                <span>Encrypted Vault Records Ready for Transfer:</span>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <span className="badge-pill badge-green" style={{ fontSize: '0.72rem' }}>Prescription_Cardiology.pdf</span>
                <span className="badge-pill badge-blue" style={{ fontSize: '0.72rem' }}>Angiography_Report.dcm</span>
                <span className="badge-pill badge-lavender" style={{ fontSize: '0.72rem' }}>Discharge_Summary_Signed.pdf</span>
              </div>
            </div>
          )}

          {/* Special interactive element for Emergency Coordination */}
          {service.id === 'emergency-coordination' && (
            <div style={{ background: '#EFF6FF', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1px solid #BFDBFE' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1D4ED8', display: 'flex', alignItems: 'center', gap: 6 }}>
                <Activity size={16} />
                <span>Unified SOS Triage Broadcast:</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#1E40AF', marginTop: 4 }}>
                Hospital Cath Lab Pre-Alerted • Ambulance GPS En-Route (ETA 4m) • O+ Blood Units Reserved
              </div>
            </div>
          )}
        </div>

        {/* 2-5 Word Key Features (Prompt Rule) */}
        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--text-primary)', textTransform: 'uppercase', marginBottom: 12, letterSpacing: '0.04em' }}>
            Core Capabilities (2–5 Word Highlights):
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
            {service.keyFeatures && service.keyFeatures.map((feat, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: '#FFFFFF', 
                  border: '1px solid #E2E8F0', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  boxShadow: 'var(--shadow-xs)'
                }}
              >
                <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Continuity Handoff Note */}
        <div style={{ background: '#FAF5FF', border: '1px solid #DDD6FE', borderRadius: 'var(--radius-md)', padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Sparkles size={18} color="#8B5CF6" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6D28D9' }}>
              Patient context is automatically preserved and forwarded across the care journey.
            </span>
          </div>
          <button 
            className="btn-primary-cta"
            style={{ padding: '8px 18px', fontSize: '0.82rem', background: '#8B5CF6' }}
            onClick={() => {
              soundFx.playSoftClick();
              onClose();
            }}
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
