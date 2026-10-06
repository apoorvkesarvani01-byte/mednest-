import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Award,
  FolderHeart,
  Users,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { PATIENT_SIMULATION_CASES } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function SimulationMode() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeCase = PATIENT_SIMULATION_CASES[selectedCaseIndex];
  const activeStep = activeCase.steps[currentStepIndex];

  // Auto-play simulation timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev < activeCase.steps.length - 1) {
            soundFx.playStageChime(500 + prev * 80);
            return prev + 1;
          } else {
            setIsPlaying(false);
            soundFx.playSuccessFanfare();
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.6 }
            });
            return prev;
          }
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeCase.steps.length]);

  const handleCaseChange = (idx) => {
    soundFx.playSoftClick();
    setSelectedCaseIndex(idx);
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const handleNext = () => {
    if (currentStepIndex < activeCase.steps.length - 1) {
      soundFx.playSoftClick();
      setCurrentStepIndex(prev => prev + 1);
      if (currentStepIndex === activeCase.steps.length - 2) {
        soundFx.playSuccessFanfare();
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      soundFx.playSoftClick();
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    soundFx.playSoftClick();
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    soundFx.playSoftClick();
    if (!isPlaying && currentStepIndex === activeCase.steps.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container" id="simulation-mode">
      <div className="simulation-bar-wrap">
        
        {/* Header & Case Selector */}
        <div className="simulation-controls-row">
          <div>
            <div className="badge-pill badge-blue" style={{ marginBottom: 6 }}>
              <Activity size={14} />
              <span>Interactive Patient Journey Simulator</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {activeCase.patientName} — {activeCase.condition}
            </h3>
          </div>

          {/* Case Picker */}
          <div className="sim-case-picker">
            {PATIENT_SIMULATION_CASES.map((c, idx) => (
              <button
                key={c.id}
                className={`sim-btn-case ${selectedCaseIndex === idx ? 'active' : ''}`}
                onClick={() => handleCaseChange(idx)}
              >
                Case {idx + 1}: {c.patientName.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Box */}
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: '#F8FAFC', padding: '12px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: 24 }}>
          <strong>Scenario:</strong> {activeCase.story}
        </p>

        {/* Playback Controls & Progress Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button 
              className="btn-primary-cta"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pause' : 'Autoplay Demo'}</span>
            </button>

            <button className="btn-icon-subtle" onClick={handlePrev} disabled={currentStepIndex === 0} title="Previous Step">
              <ChevronLeft size={18} />
            </button>
            <button className="btn-icon-subtle" onClick={handleNext} disabled={currentStepIndex === activeCase.steps.length - 1} title="Next Step">
              <ChevronRight size={18} />
            </button>
            <button className="btn-icon-subtle" onClick={handleReset} title="Reset Journey">
              <RotateCcw size={16} />
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            Step {currentStepIndex + 1} of {activeCase.steps.length} • {activeStep.stage}
          </div>
        </div>

        {/* Progress Dots Track */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${activeCase.steps.length}, 1fr)`, gap: 8, marginBottom: 28 }}>
          {activeCase.steps.map((step, sIdx) => {
            const isDone = sIdx < currentStepIndex;
            const isCurrent = sIdx === currentStepIndex;
            return (
              <div 
                key={sIdx}
                onClick={() => {
                  soundFx.playSoftClick();
                  setCurrentStepIndex(sIdx);
                }}
                style={{
                  cursor: 'pointer',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  background: isCurrent ? '#EFF6FF' : isDone ? '#ECFDF5' : '#F1F5F9',
                  border: `2px solid ${isCurrent ? '#3B82F6' : isDone ? '#10B981' : '#E2E8F0'}`,
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: isCurrent ? '#2563EB' : isDone ? '#047857' : '#64748B' }}>
                    Step {sIdx + 1}
                  </span>
                  {isDone ? <CheckCircle2 size={12} color="#10B981" /> : null}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {step.stage}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Live Simulation Display */}
        <div 
          style={{ 
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8FF 100%)', 
            border: '2px solid #BFDBFE', 
            borderRadius: 'var(--radius-lg)', 
            padding: '24px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
            <span className="badge-pill badge-blue" style={{ fontSize: '0.75rem' }}>
              {activeStep.badge}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: '#6D28D9', fontWeight: 700 }}>
              <FolderHeart size={14} />
              <span>Vault State: {activeStep.vaultData}</span>
            </div>
          </div>

          <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>
            {activeStep.title}
          </h4>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 18 }}>
            {activeStep.action}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #EEF2F6', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Context continuity verified: Health Vault synced</span>
            {currentStepIndex === activeCase.steps.length - 1 ? (
              <button 
                className="btn-primary-cta" 
                style={{ background: '#10B981', padding: '6px 14px', fontSize: '0.8rem' }}
                onClick={() => {
                  soundFx.playSuccessFanfare();
                  confetti({ particleCount: 70, spread: 60 });
                }}
              >
                <Award size={14} />
                <span>Patient Restored to Health!</span>
              </button>
            ) : (
              <button 
                className="btn-primary-cta" 
                style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                onClick={handleNext}
              >
                <span>Continue Next Stage</span>
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
