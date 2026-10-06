import React, { useState } from 'react';
import { 
  X, 
  Activity, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  ChevronRight, 
  AlertCircle, 
  HeartPulse, 
  Bed, 
  Footprints, 
  Users 
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function StartJourneyModal({ isOpen, onClose, onLaunchSimulation, onJumpToStage }) {
  const [selectedPathway, setSelectedPathway] = useState('emergency');

  if (!isOpen) return null;

  const pathways = [
    {
      id: 'emergency',
      title: 'Emergency Medical Need',
      subtitle: 'Acute cardiac, stroke, accident, or respiratory distress',
      icon: HeartPulse,
      color: '#EF4444',
      bg: '#FEF2F2',
      stageTarget: 'before-hospital',
      simIndex: 0,
      steps: [
        'Instant SOS ambulance GPS dispatch (<6m)',
        'Live ICU / ER bed reservation with receiving hospital',
        'Automatic blood matching & units reservation',
        'Direct hand-off into Mednest Care upon hospital discharge'
      ]
    },
    {
      id: 'surgery',
      title: 'Planned Surgery & Post-Op Recovery',
      subtitle: 'Joint replacement, cardiac stent, or elective procedures',
      icon: Bed,
      color: '#8B5CF6',
      bg: '#F5F3FF',
      stageTarget: 'after-discharge',
      simIndex: 1,
      steps: [
        'Top specialist discovery & pre-op diagnostic clearance',
        'Digital Health Vault synchronization of surgical implants',
        'Pre-scheduled home nursing & specialized physiotherapy',
        'Hospital bed, oxygen & walker delivery before discharge'
      ]
    },
    {
      id: 'eldercare',
      title: 'Elderly Care & Chronic Monitoring',
      subtitle: 'Ongoing rehabilitation, vitals monitoring & family sync',
      icon: Users,
      color: '#10B981',
      bg: '#ECFDF5',
      stageTarget: 'family',
      simIndex: 0,
      steps: [
        'Daily certified nursing attendant (12h/24h shifts)',
        'Automated medicine refill & smart dosage reminders',
        'Shared Family Dashboard with patient consent',
        'Periodic home blood draws & tele-doctor reviews'
      ]
    }
  ];

  const currentPathway = pathways.find(p => p.id === selectedPathway) || pathways[0];

  const handleLaunch = () => {
    soundFx.playStageChime();
    onClose();
    onLaunchSimulation(currentPathway.simIndex);
  };

  const handleJump = () => {
    soundFx.playSoftClick();
    onClose();
    onJumpToStage(currentPathway.stageTarget);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content-card" 
        style={{ maxWidth: 720 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, paddingRight: 40 }}>
          <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
            <Activity size={24} />
          </div>
          <div>
            <span className="badge-pill badge-blue" style={{ fontSize: '0.7rem' }}>
              MEDNEST Healthcare Navigator
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
              Choose Patient Healthcare Pathway
            </h3>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
          Select the healthcare scenario to see how MEDNEST coordinates care across Before Hospital, In-Hospital Treatment, and Mednest Care.
        </p>

        {/* Pathway Selection Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 20 }}>
          {pathways.map((p) => {
            const isSelected = selectedPathway === p.id;
            const IconComp = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => {
                  soundFx.playSoftClick();
                  setSelectedPathway(p.id);
                }}
                style={{
                  cursor: 'pointer',
                  padding: '16px',
                  borderRadius: 'var(--radius-lg)',
                  background: isSelected ? p.bg : '#FFFFFF',
                  border: `2px solid ${isSelected ? p.color : '#E2E8F0'}`,
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', background: isSelected ? '#FFFFFF' : p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: p.color }}>
                    <IconComp size={18} />
                  </div>
                  {isSelected && <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />}
                </div>

                <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.3 }}>
                  {p.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Pathway Preview Box */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-lg)', padding: '18px', marginBottom: 24 }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: currentPathway.color, textTransform: 'uppercase', marginBottom: 10, letterSpacing: '0.04em' }}>
            Coordinated MEDNEST Care Blueprint:
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {currentPathway.steps.map((step, sIdx) => (
              <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                <span style={{ width: 20, height: 20, borderRadius: '50%', background: currentPathway.bg, color: currentPathway.color, fontSize: '0.72rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {sIdx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12, flexWrap: 'wrap' }}>
          <button 
            className="btn-secondary-pitch" 
            style={{ color: 'var(--text-secondary)', background: '#F1F5F9', borderColor: '#CBD5E1' }}
            onClick={handleJump}
          >
            Jump to Stage Map
          </button>

          <button 
            className="btn-primary-cta"
            style={{ background: currentPathway.color }}
            onClick={handleLaunch}
          >
            <span>Launch Interactive Simulation</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
