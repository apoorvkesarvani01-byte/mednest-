import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Ambulance,
  Droplet,
  AlertTriangle,
  Stethoscope,
  Microscope,
  Pill,
  Info,
  ShieldCheck,
  HeartHandshake,
  Activity,
  Accessibility,
  Clock,
  LineChart,
  Users,
  UserCheck,
  Play,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { PATIENT_JOURNEY_STAGES } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function PatientJourneySection({
  onSelectService,
  onOpenBookingModal
}) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const getModuleIcon = (iconName) => {
    switch (iconName) {
      case 'Building2': return <Building2 size={20} />;
      case 'Ambulance': return <Ambulance size={20} />;
      case 'Droplet': return <Droplet size={20} />;
      case 'AlertTriangle': return <AlertTriangle size={20} />;
      case 'Stethoscope': return <Stethoscope size={20} />;
      case 'Microscope': return <Microscope size={20} />;
      case 'Pill': return <Pill size={20} />;
      case 'Info': return <Info size={20} />;
      case 'ShieldCheck': return <ShieldCheck size={20} />;
      case 'HeartHandshake': return <HeartHandshake size={20} />;
      case 'Activity': return <Activity size={20} />;
      case 'Accessibility': return <Accessibility size={20} />;
      case 'Clock': return <Clock size={20} />;
      case 'UserCheck': return <UserCheck size={20} />;
      case 'LineChart': return <LineChart size={20} />;
      case 'Users': return <Users size={20} />;
      default: return <Activity size={20} />;
    }
  };

  const handleStageSelect = (idx) => {
    soundFx.playStageChime(500 + idx * 100);
    setActiveStageIndex(idx);
  };

  const currentStage = PATIENT_JOURNEY_STAGES[activeStageIndex];

  return (
    <section id="patient-journey" className="mednest-patient-journey-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="badge-pill badge-teal">END-TO-END PATIENT CONTINUITY</span>
            <span className="text-xs text-slate-500 font-semibold">• Zero Disconnected Gaps</span>
          </div>
          <h2 className="section-title">The Complete Connected Patient Journey</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Explore how MEDNEST connects a patient and family through every critical touchpoint — from emergency triage to hospital discharge and complete home recovery.
          </p>
        </div>

        {/* Horizontal Interactive Stage Progress Bar */}
        <div className="journey-horizontal-timeline">
          <div className="timeline-stages-track">
            {PATIENT_JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              const isPast = activeStageIndex > idx;
              return (
                <React.Fragment key={stage.id}>
                  <div
                    onClick={() => handleStageSelect(idx)}
                    className={`timeline-stage-node ${isSelected ? 'selected' : ''} ${isPast ? 'completed' : ''}`}
                    style={{ '--node-color': stage.color }}
                  >
                    <div className="stage-step-circle">
                      {isPast ? <CheckCircle2 size={18} /> : <span>{stage.number}</span>}
                    </div>
                    <div className="stage-step-labels">
                      <span className="stage-num-tag">Stage {stage.number}</span>
                      <h4 className="stage-title-text">{stage.title}</h4>
                      <p className="stage-tagline-text">{stage.tagline}</p>
                    </div>
                  </div>

                  {/* Connecting Animated Arrow between stages */}
                  {idx < PATIENT_JOURNEY_STAGES.length - 1 && (
                    <div className={`timeline-connector-arrow ${activeStageIndex > idx ? 'active-flow' : ''}`}>
                      <div className="connector-line"></div>
                      <ArrowRight size={18} className="arrow-head" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Expanded Stage View Container */}
        <div className="active-stage-expanded-card" style={{ borderColor: currentStage.borderColor }}>
          <div className="expanded-stage-header" style={{ backgroundColor: currentStage.bgColor }}>
            <div className="stage-header-left">
              <span className="stage-badge-number" style={{ backgroundColor: currentStage.color }}>
                STAGE {currentStage.number}
              </span>
              <div>
                <h3 className="expanded-stage-title" style={{ color: currentStage.color }}>
                  {currentStage.title}
                </h3>
                <p className="expanded-stage-purpose"><strong>Purpose:</strong> {currentStage.purpose}</p>
              </div>
            </div>

            {currentStage.isDifferentiator && (
              <span className="badge-pill badge-green">
                <Sparkles size={14} /> Core Differentiator
              </span>
            )}
          </div>

          {/* Connected Modules Grid inside the active stage */}
          <div className="stage-modules-grid">
            {currentStage.modules.map((mod) => (
              <div
                key={mod.id}
                onClick={() => {
                  soundFx.playSoftClick();
                  if (onSelectService) onSelectService(mod);
                }}
                className="stage-module-item-card"
              >
                <div className="module-item-icon" style={{ color: currentStage.color, backgroundColor: currentStage.bgColor }}>
                  {getModuleIcon(mod.icon)}
                </div>
                <div className="module-item-info">
                  <h4 className="module-item-name">{mod.name}</h4>
                  <p className="module-item-desc">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Real Patient Scenario Simulation Card */}
          <div className="stage-scenario-card">
            <div className="scenario-header">
              <span className="scenario-badge">PATIENT CASE SIMULATION</span>
              <span className="scenario-patient">{currentStage.sampleScenario.patient}</span>
            </div>

            <div className="scenario-body-grid">
              <div className="scenario-col">
                <span className="col-label">Clinical Scenario Trigger</span>
                <p className="col-text">{currentStage.sampleScenario.trigger}</p>
              </div>

              <div className="scenario-col action-col">
                <span className="col-label">MEDNEST Connected Action</span>
                <p className="col-text">{currentStage.sampleScenario.mednestAction}</p>
              </div>

              <div className="scenario-col outcome-col">
                <span className="col-label">Patient Outcome</span>
                <p className="col-text text-emerald-800 font-bold">{currentStage.sampleScenario.outcome}</p>
              </div>
            </div>
          </div>

          {/* Stage Navigation Footer */}
          <div className="expanded-stage-footer">
            <button
              disabled={activeStageIndex === 0}
              onClick={() => handleStageSelect(activeStageIndex - 1)}
              className="btn-stage-nav prev"
            >
              ← Previous Stage
            </button>

            <span className="text-xs text-slate-400 font-semibold">
              Stage {activeStageIndex + 1} of {PATIENT_JOURNEY_STAGES.length}
            </span>

            <button
              disabled={activeStageIndex === PATIENT_JOURNEY_STAGES.length - 1}
              onClick={() => handleStageSelect(activeStageIndex + 1)}
              className="btn-stage-nav next"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
