import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Sparkles,
  Shield,
  Award
} from 'lucide-react';
import DynamicIcon from './DynamicIcon';
import { TRUST_LAYER_PILLARS } from '../data/workflowData';

export default function TrustLayer() {
  return (
    <div className="container" id="trust-section" style={{ marginBottom: 36 }}>
      <div className="apollo-trust-strip">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 12, flexWrap: 'wrap', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShieldCheck size={22} color="#34d399" />
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                MEDNEST TRUST & GOVERNANCE ASSURANCE
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#b3deda', margin: 0 }}>
                Standardized verification, patient consent & data security across all 9 care channels
              </p>
            </div>
          </div>

          <span className="badge-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', fontSize: '0.72rem' }}>
            100% Verified Partners
          </span>
        </div>

        {/* 6 Trust Pillars Grid (Apollo Guarantees Style) */}
        <div className="trust-grid-apollo">
          {TRUST_LAYER_PILLARS.map((pillar) => (
            <div key={pillar.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: 'var(--radius-sm)' }}>
              <CheckCircle2 size={18} color="#34d399" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#ffffff' }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#cbd5e1', marginTop: 2 }}>
                  {pillar.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
