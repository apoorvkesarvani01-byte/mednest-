import React, { useState } from 'react';
import { 
  Activity, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  Info,
  Building2,
  Truck,
  HeartPulse,
  Heart
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { WORKFLOW_STAGES } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function StageExplorer({ onSelectService }) {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const currentStage = WORKFLOW_STAGES[selectedStageIndex];

  const handleStageSelect = (idx) => {
    soundFx.playStageChime(idx === 0 ? 440 : idx === 1 ? 554 : 659);
    setSelectedStageIndex(idx);
  };

  const handleServiceClick = (module) => {
    soundFx.playSoftClick();
    if (onSelectService) {
      onSelectService({ ...module, stageTitle: currentStage.title, stageTheme: currentStage.theme });
    }
  };

  return (
    <div className="container" id="stage-explorer">
      <div style={{ marginBottom: '32px' }}>
        
        {/* Stage Selector Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {WORKFLOW_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(idx)}
                style={{
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-xl)',
                  background: isSelected ? stage.accentColor : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--text-primary)',
                  border: `2px solid ${isSelected ? stage.accentColor : '#E2E8F0'}`,
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-xs)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  transition: 'all var(--transition-normal)'
                }}
              >
                <span style={{ 
                  width: 24, 
                  height: 24, 
                  borderRadius: '50%', 
                  background: isSelected ? 'rgba(255,255,255,0.25)' : '#F1F5F9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.78rem'
                }}>
                  {stage.stageNumber}
                </span>
                <span>{stage.title}</span>
                {stage.isHeroStage && (
                  <span className="badge-pill" style={{ background: isSelected ? 'rgba(255,255,255,0.2)' : '#EDE9FE', color: isSelected ? '#FFF' : '#6D28D9', fontSize: '0.68rem' }}>
                    Differentiator
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div 
          className="stage-card-box" 
          style={{ 
            borderTop: `6px solid ${currentStage.accentColor}`,
            background: currentStage.isHeroStage ? 'linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)' : '#FFFFFF',
            padding: currentStage.isHeroStage ? '36px' : '28px'
          }}
        >
          <div className="stage-header-row">
            <div>
              <div className={`stage-badge-number badge-${currentStage.theme}`}>
                <span>Stage {currentStage.stageNumber} of 3</span>
                <span>•</span>
                <span>{currentStage.tag}</span>
              </div>
              <h2 className="stage-title" style={{ fontSize: '1.9rem' }}>
                {currentStage.title}
              </h2>
              <p className="stage-purpose" style={{ color: currentStage.accentColor }}>
                {currentStage.purpose}
              </p>
            </div>

            <div style={{ maxWidth: 360, textAlign: 'right' }}>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {currentStage.summary}
              </p>
            </div>
          </div>

          {/* Connected Modules in Active Stage */}
          <div className={currentStage.isHeroStage ? "modules-grid-large" : "modules-grid"}>
            {currentStage.modules.map((mod) => (
              <div 
                key={mod.id}
                className={`service-card ${currentStage.theme}-card ${mod.isCombined ? 'composite-card' : ''}`}
                onClick={() => handleServiceClick(mod)}
                style={mod.isCombined ? { gridColumn: '1 / -1', borderStyle: 'dashed' } : {}}
              >
                <div>
                  <div className="service-card-top">
                    <div className={`service-icon-wrap ${currentStage.theme}`}>
                      <DynamicIcon name={mod.icon} size={22} />
                    </div>
                    <span className="service-card-badge">{mod.badge}</span>
                  </div>

                  <h4 className="service-name">{mod.name}</h4>
                  <div className="service-shortTag">{mod.shortTag}</div>
                  <p className="service-desc">{mod.description}</p>

                  {/* Bullet features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {mod.keyFeatures.slice(0, 3).map((feat, fidx) => (
                      <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={13} color={currentStage.accentColor} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-footer">
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                    Live Provider Integration
                  </span>
                  <span className="explore-link" style={{ color: currentStage.accentColor }}>
                    Interactive Demo <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
