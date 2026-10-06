import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Activity, 
  ArrowDown, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Users, 
  Layers, 
  Plus, 
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  Building2,
  Truck,
  HeartPulse,
  Heart,
  Calendar,
  Lock,
  Clock,
  Compass
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { WORKFLOW_STAGES, RECOVERY_FLOW_STEPS } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function PanoramicWorkflow({ onSelectService, onSelectStage }) {
  const stage1 = WORKFLOW_STAGES[0]; // Before Hospital
  const stage2 = WORKFLOW_STAGES[1]; // During Treatment
  const stage3 = WORKFLOW_STAGES[2]; // Mednest Care (After Discharge)

  const triggerRecoveryCelebration = () => {
    soundFx.playSuccessFanfare();
    confetti({
      particleCount: 110,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#3B82F6', '#10B981', '#8B5CF6', '#EC4899', '#F59E0B']
    });
  };

  const handleServiceClick = (module, stage) => {
    soundFx.playSoftClick();
    if (onSelectService) {
      onSelectService({ ...module, stageTitle: stage.title, stageTheme: stage.theme });
    }
  };

  return (
    <div className="container" id="workflow-map">
      <div className="workflow-section">
        
        {/* =========================================================
            START NODE & MEDNEST PLATFORM HUB ENTRY
            ========================================================= */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', margin: '0 auto 16px' }}>
          
          {/* Start Capsule Trigger */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '12px 30px', 
              borderRadius: 'var(--radius-full)', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              border: '2px solid #E2E8F0',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} className="animate-pulse-glow" />
            <span style={{ fontSize: '0.86rem', fontWeight: 800, letterSpacing: '0.04em', color: 'var(--text-primary)' }}>
              START: PATIENT / FAMILY HAS A HEALTHCARE NEED
            </span>
          </div>

          <ArrowDown size={22} className="animated-down-arrow" />

          {/* Mednest Platform Entry Hub */}
          <div 
            style={{ 
              background: 'linear-gradient(135deg, #EFF6FF 0%, #FAF5FF 100%)', 
              border: '2px solid #BFDBFE',
              borderRadius: 'var(--radius-xl)', 
              padding: '22px 38px',
              textAlign: 'center',
              boxShadow: 'var(--shadow-md)',
              maxWidth: 680,
              width: '100%',
              position: 'relative'
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', background: '#2563EB', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={20} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
                MEDNEST PLATFORM
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: '0 auto 10px', lineHeight: 1.45 }}>
              Intelligent Healthcare Coordination Engine: Directs patient context to the required stage
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span className="badge-pill badge-blue" style={{ fontSize: '0.72rem' }}>
                Zero Diagnosis Liability
              </span>
              <span className="badge-pill badge-green" style={{ fontSize: '0.72rem' }}>
                100% Coordination Platform
              </span>
              <span className="badge-pill badge-lavender" style={{ fontSize: '0.72rem' }}>
                Real-Time Provider Sync
              </span>
            </div>
          </div>

          <ArrowDown size={24} className="animated-down-arrow" />
        </div>

        {/* =========================================================
            STAGE 1: BEFORE HOSPITAL
            ========================================================= */}
        <div className="stage-card-box blue-theme" id="before-hospital">
          <div className="stage-header-row">
            <div>
              <div className="stage-badge-number badge-blue">
                <span>Stage 1</span>
                <span>•</span>
                <span>{stage1.tag}</span>
              </div>
              <h2 className="stage-title">{stage1.title}</h2>
              <p className="stage-purpose">{stage1.purpose}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge-pill badge-blue" style={{ padding: '6px 14px' }}>
                <Zap size={14} />
                <span>Response Speed: &lt; 60s</span>
              </span>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>
                Emergency triage & bed mapping
              </div>
            </div>
          </div>

          {/* Connected Modules Grid */}
          <div className="modules-grid">
            {stage1.modules.filter(m => !m.isCombined).map((mod) => (
              <div 
                key={mod.id}
                className="service-card blue-card"
                onClick={() => handleServiceClick(mod, stage1)}
              >
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-wrap blue">
                      <DynamicIcon name={mod.icon} size={22} />
                    </div>
                    <span className="service-card-badge">{mod.badge}</span>
                  </div>
                  <h4 className="service-name">{mod.name}</h4>
                  <div className="service-shortTag">{mod.shortTag}</div>
                  <p className="service-desc">{mod.description}</p>
                </div>
                <div className="service-card-footer">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Click for live mock</span>
                  <span className="explore-link">Details <ChevronRight size={14} /></span>
                </div>
              </div>
            ))}

            {/* Composite Emergency Coordination Card */}
            {stage1.modules.filter(m => m.isCombined).map((mod) => (
              <div 
                key={mod.id}
                className="composite-card"
                onClick={() => handleServiceClick(mod, stage1)}
                style={{ cursor: 'pointer' }}
              >
                <div className="composite-header">
                  <div className="service-icon-wrap blue" style={{ background: '#DBEAFE', color: '#1D4ED8', width: 50, height: 50 }}>
                    <DynamicIcon name={mod.icon} size={26} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h4 className="service-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>
                        {mod.name}
                      </h4>
                      <span className="badge-pill badge-blue" style={{ fontSize: '0.7rem' }}>
                        {mod.badge}
                      </span>
                    </div>
                    <p className="service-desc" style={{ marginBottom: 0, marginTop: 4 }}>
                      {mod.description}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Visually combines in real time:
                  </span>
                  <div className="composite-tag-list">
                    <div className="composite-sub-pill">
                      <Building2 size={16} color="#3B82F6" />
                      <span>Hospital Information & Beds</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontWeight: 900 }}>+</span>
                    <div className="composite-sub-pill">
                      <Truck size={16} color="#F59E0B" />
                      <span>Ambulance GPS Telemetry</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontWeight: 900 }}>+</span>
                    <div className="composite-sub-pill">
                      <HeartPulse size={16} color="#EF4444" />
                      <span>Blood Network Inventory</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inter-Stage Transition Badge */}
        <div className="stage-transition-connector">
          <ArrowDown size={22} className="animated-down-arrow" />
          <div className="transition-pill">
            <CheckCircle2 size={16} color="#10B981" />
            <span>PATIENT REACHES / CONNECTS WITH CARE</span>
          </div>
          <ArrowDown size={22} className="animated-down-arrow" />
        </div>

        {/* =========================================================
            STAGE 2: DURING TREATMENT
            ========================================================= */}
        <div className="stage-card-box green-theme" id="during-treatment">
          <div className="stage-header-row">
            <div>
              <div className="stage-badge-number badge-green">
                <span>Stage 2</span>
                <span>•</span>
                <span>{stage2.tag}</span>
              </div>
              <h2 className="stage-title">{stage2.title}</h2>
              <p className="stage-purpose">{stage2.purpose}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className="badge-pill badge-green" style={{ padding: '6px 14px' }}>
                <FileText size={14} />
                <span>Digital Health Vault Integration</span>
              </span>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>
                Seamless in-hospital navigation
              </div>
            </div>
          </div>

          <div className="modules-grid">
            {stage2.modules.filter(m => !m.isCombined).map((mod) => (
              <div 
                key={mod.id}
                className="service-card green-card"
                onClick={() => handleServiceClick(mod, stage2)}
              >
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-wrap green">
                      <DynamicIcon name={mod.icon} size={22} />
                    </div>
                    <span className="service-card-badge">{mod.badge}</span>
                  </div>
                  <h4 className="service-name">{mod.name}</h4>
                  <div className="service-shortTag">{mod.shortTag}</div>
                  <p className="service-desc">{mod.description}</p>
                </div>
                <div className="service-card-footer">
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Click for live mock</span>
                  <span className="explore-link" style={{ color: 'var(--mint-600)' }}>
                    Details <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}

            {/* Composite Personal Health Vault Card */}
            {stage2.modules.filter(m => m.isCombined).map((mod) => (
              <div 
                key={mod.id}
                className="composite-card green-dashed"
                onClick={() => handleServiceClick(mod, stage2)}
                style={{ cursor: 'pointer' }}
              >
                <div className="composite-header">
                  <div className="service-icon-wrap green" style={{ background: '#D1FAE5', color: '#047857', width: 50, height: 50 }}>
                    <DynamicIcon name={mod.icon} size={26} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h4 className="service-name" style={{ fontSize: '1.25rem', marginBottom: 0 }}>
                        {mod.name}
                      </h4>
                      <span className="badge-pill badge-green" style={{ fontSize: '0.7rem' }}>
                        {mod.badge}
                      </span>
                    </div>
                    <p className="service-desc" style={{ marginBottom: 0, marginTop: 4 }}>
                      {mod.description}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Personal Health Vault Connects With:
                  </span>
                  <div className="composite-tag-list">
                    <div className="composite-sub-pill">
                      <FileText size={16} color="#10B981" />
                      <span>Prescriptions</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontWeight: 900 }}>+</span>
                    <div className="composite-sub-pill">
                      <Layers size={16} color="#3B82F6" />
                      <span>Diagnostic Lab Reports</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontWeight: 900 }}>+</span>
                    <div className="composite-sub-pill">
                      <ShieldCheck size={16} color="#8B5CF6" />
                      <span>Vaccination Records</span>
                    </div>
                    <span style={{ color: '#94A3B8', fontWeight: 900 }}>+</span>
                    <div className="composite-sub-pill" style={{ background: '#ECFDF5', borderColor: '#A7F3D0' }}>
                      <Award size={16} color="#059669" />
                      <span>Discharge Summary</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inter-Stage Transition Badge: Discharge */}
        <div className="stage-transition-connector">
          <ArrowDown size={22} className="animated-down-arrow" />
          <div className="transition-pill" style={{ borderColor: '#DDD6FE', background: '#F5F3FF', color: '#6D28D9' }}>
            <FileText size={16} color="#8B5CF6" />
            <span>DISCHARGE ➔ MEDNEST CARE SEAMLESS HAND-OFF</span>
          </div>
          <ArrowDown size={22} className="animated-down-arrow" />
        </div>

        {/* =========================================================================
            STAGE 3: AFTER DISCHARGE — MEDNEST CARE (VISUALLY LARGER / HERO SECTION)
            ========================================================================= */}
        <div className="stage-card-box hero-lavender" id="mednest-care-section">
          <div className="stage-header-row">
            <div>
              <div className="stage-badge-number badge-lavender">
                <Sparkles size={14} />
                <span>Stage 3 • Core Startup Differentiator</span>
              </div>
              <h2 className="stage-title" style={{ fontSize: '2.3rem', color: '#4C1D95' }}>
                {stage3.title}
              </h2>
              <p className="stage-purpose" style={{ fontSize: '1.3rem', color: '#6D28D9', fontWeight: 800 }}>
                “{stage3.subtitle}”
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="badge-pill badge-lavender" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
                Complete At-Home Healing Ecosystem
              </span>
              <div style={{ fontSize: '0.8rem', color: '#7C3AED', fontWeight: 700, marginTop: 4 }}>
                Major Startup Differentiator ($15B+ Market)
              </div>
            </div>
          </div>

          {/* 9 Care Modules Grid */}
          <div className="modules-grid-large">
            {stage3.modules.map((mod) => (
              <div 
                key={mod.id}
                className="service-card lavender-card"
                onClick={() => handleServiceClick(mod, stage3)}
              >
                <div>
                  <div className="service-card-top">
                    <div className="service-icon-wrap lavender">
                      <DynamicIcon name={mod.icon} size={22} />
                    </div>
                    <span className="service-card-badge" style={{ background: '#EDE9FE', color: '#6D28D9' }}>
                      {mod.badge}
                    </span>
                  </div>
                  <h4 className="service-name">{mod.name}</h4>
                  <div className="service-shortTag">{mod.shortTag}</div>
                  <p className="service-desc">{mod.description}</p>
                </div>
                <div className="service-card-footer">
                  {mod.isConsentControlled ? (
                    <span style={{ color: '#DB2777', fontWeight: 800 }}>Consent-Locked</span>
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Click for live mock</span>
                  )}
                  <span className="explore-link" style={{ color: 'var(--lavender-600)' }}>
                    Explore <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================
              RECOVERY FLOW SEQUENCE (11-Step Connected Chain)
              ========================================================= */}
          <div className="recovery-chain-box">
            <div className="recovery-chain-title-row">
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Sparkles size={18} color="#8B5CF6" />
                  RECOVERY FLOW SEQUENCE
                </h4>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Connected patient trajectory from hospital discharge order to full recovery
                </p>
              </div>

              <button 
                className="btn-primary-cta"
                style={{ padding: '8px 18px', fontSize: '0.84rem', background: '#10B981' }}
                onClick={triggerRecoveryCelebration}
                title="Celebrate Completed Recovery"
              >
                <Award size={16} />
                <span>Simulate Recovery Complete</span>
              </button>
            </div>

            {/* 11 Steps Grid */}
            <div className="recovery-steps-grid">
              {RECOVERY_FLOW_STEPS.map((step) => (
                <div 
                  key={step.id}
                  className={`recovery-step-item ${step.isFinal ? 'complete-item' : ''}`}
                  onClick={() => {
                    soundFx.playSoftClick();
                    if (step.isFinal) triggerRecoveryCelebration();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="step-num-bubble">
                    {step.id}
                  </div>
                  <div className="step-info-col">
                    <span className="step-title-text">{step.title}</span>
                    <span className="step-desc-text">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
