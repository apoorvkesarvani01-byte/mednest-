import React from 'react';
import { Sparkles, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function ContinuousLine({ activeStageId, onSelectStage }) {
  const stageNodes = [
    { id: 'before-hospital', label: 'Emergency & Access', shortName: 'Emergency', num: '1', percent: 25 },
    { id: 'during-treatment', label: 'Hospital Treatment', shortName: 'Treatment', num: '2', percent: 55 },
    { id: 'discharge-point', label: 'Discharge Summary', shortName: 'Discharge', num: '✓', percent: 75 },
    { id: 'after-discharge', label: 'Mednest Care', shortName: 'Recovery', num: '3', percent: 100 }
  ];

  const getProgressWidth = () => {
    if (activeStageId === 'before-hospital') return '25%';
    if (activeStageId === 'during-treatment') return '55%';
    if (activeStageId === 'discharge-point') return '75%';
    if (activeStageId === 'after-discharge' || activeStageId === 'recovery-complete') return '100%';
    return '35%';
  };

  const handleNodeClick = (nodeId) => {
    soundFx.playSoftClick();
    if (onSelectStage) {
      onSelectStage(nodeId);
    }
    const elem = document.getElementById(nodeId === 'after-discharge' ? 'mednest-care-section' : nodeId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container" style={{ marginBottom: '28px' }}>
      <div className="continuity-strip-wrapper">
        <div className="continuity-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              END-TO-END CARE CONTINUITY
            </span>
            <span className="badge-pill badge-green" style={{ fontSize: '0.7rem' }}>
              Real-Time Sync
            </span>
          </div>

          {/* Specified required label */}
          <div className="continuity-badge-label">
            <Sparkles size={14} />
            <span>Patient context continues throughout the journey.</span>
          </div>
        </div>

        {/* Visual Line & Progress Nodes */}
        <div className="continuity-line-container">
          <div className="continuity-track">
            <div 
              className="continuity-progress" 
              style={{ width: getProgressWidth() }}
            />
          </div>

          {stageNodes.map((node) => {
            const isActive = activeStageId === node.id;
            return (
              <div 
                key={node.id}
                className={`continuity-node ${isActive ? 'active' : ''}`}
                onClick={() => handleNodeClick(node.id)}
                title={`Jump to ${node.label}`}
              >
                <div className="node-dot">
                  {node.num}
                </div>
                <span className="node-title">{node.shortName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
