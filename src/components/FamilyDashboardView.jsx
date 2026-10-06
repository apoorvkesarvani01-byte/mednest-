import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Pill, 
  FlaskConical, 
  LineChart, 
  Lock, 
  Unlock,
  AlertCircle,
  Sparkles,
  Heart,
  ChevronRight
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function FamilyDashboardView() {
  const [hasConsent, setHasConsent] = useState(true);
  const [medsCompleted, setMedsCompleted] = useState([true, true, false, false]);

  const toggleMed = (index) => {
    soundFx.playSoftClick();
    const updated = [...medsCompleted];
    updated[index] = !updated[index];
    setMedsCompleted(updated);
  };

  const toggleConsent = () => {
    soundFx.playSoftClick();
    setHasConsent(!hasConsent);
  };

  return (
    <div className="container" id="family-dashboard-section">
      <div className="family-dashboard-widget">
        
        {/* Permission Banner (Required in prompt) */}
        <div className="permission-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ShieldCheck size={20} />
            <div>
              <span style={{ fontSize: '0.88rem', fontWeight: 800 }}>
                Patient Permission & Consent Layer:
              </span>
              <span style={{ marginLeft: 6, fontWeight: 600, opacity: 0.9 }}>
                {hasConsent ? 'Access Authorized by Patient (Rahul Sharma)' : 'Access Paused by Patient'}
              </span>
            </div>
          </div>

          <button 
            onClick={toggleConsent}
            style={{
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              background: hasConsent ? '#FCE7F3' : '#F1F5F9',
              border: `1px solid ${hasConsent ? '#F472B6' : '#CBD5E1'}`,
              fontSize: '0.75rem',
              fontWeight: 700,
              color: hasConsent ? '#BE185D' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}
          >
            {hasConsent ? <Lock size={12} /> : <Unlock size={12} />}
            <span>{hasConsent ? 'Revoke Consent' : 'Grant Patient Consent'}</span>
          </button>
        </div>

        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div className="badge-pill badge-pink" style={{ marginBottom: 6 }}>
              <Users size={14} />
              <span>MEDNEST CARE • Family Caregiver Portal</span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Rahul Sharma’s At-Home Recovery Dashboard
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Real-time shared visibility for authorized family members (Priya • Rohan • Dr. Arvind)
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EFF6FF', padding: '6px 12px', borderRadius: 'var(--radius-full)', border: '1px solid #BFDBFE', fontSize: '0.78rem', fontWeight: 700, color: '#1D4ED8' }}>
              <Sparkles size={14} />
              <span>Recovery Milestone: 78% Complete</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
              Day 12 of 28 • Heart Rehab
            </div>
          </div>
        </div>

        {!hasConsent ? (
          <div style={{ background: '#FFF1F2', border: '1px dashed #FDA4AF', borderRadius: 'var(--radius-lg)', padding: '36px', textAlign: 'center', color: '#9F1239' }}>
            <Lock size={32} style={{ margin: '0 auto 12px', opacity: 0.8 }} />
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: 6 }}>Patient Permission Required</h4>
            <p style={{ fontSize: '0.86rem', maxWidth: 480, margin: '0 auto 16px' }}>
              Health information is private and strictly protected. The patient has temporarily restricted family dashboard sharing.
            </p>
            <button className="btn-primary-cta" style={{ background: '#E11D48', margin: '0 auto' }} onClick={toggleConsent}>
              Request / Restore Patient Consent
            </button>
          </div>
        ) : (
          /* Active Dashboard 5 Pillars (Required in prompt) */
          <div className="dashboard-sections-grid">
            
            {/* 1. Upcoming Appointments */}
            <div className="dashboard-col-card">
              <div className="col-card-title">
                <Calendar size={18} color="#3B82F6" />
                <span>Upcoming Appointments</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Dr. Arvind Mehta (Video Review)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#2563EB', fontWeight: 600, marginTop: 2 }}>
                    Tomorrow at 5:30 PM
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Post-angioplasty 2-week review
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    PT Session: Dr. Vikram (PT)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#8B5CF6', fontWeight: 600, marginTop: 2 }}>
                    Friday at 10:00 AM (Home)
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Cardio mobility & breathing drills
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Completed Visits */}
            <div className="dashboard-col-card">
              <div className="col-card-title">
                <CheckCircle2 size={18} color="#10B981" />
                <span>Completed Visits</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Nurse Anjali S. (Wound Care)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 600, marginTop: 2 }}>
                    ✓ Today at 9:00 AM • Completed
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    BP: 124/82 • SpO2: 99% • No swelling
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Equipment Tech Demo
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 600, marginTop: 2 }}>
                    ✓ Oct 2nd • Setup Verified
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Cardiac bed & monitor calibrated
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Medicines & Tasks */}
            <div className="dashboard-col-card">
              <div className="col-card-title">
                <Pill size={18} color="#EC4899" />
                <span>Medicines & Tasks</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { name: 'Aspirin (75mg)', time: 'Morning after food', done: medsCompleted[0] },
                  { name: 'Atorvastatin (40mg)', time: 'Morning 8:00 AM', done: medsCompleted[1] },
                  { name: 'Breathing Exercises (15m)', time: 'Afternoon 2:00 PM', done: medsCompleted[2] },
                  { name: 'Clopidogrel (75mg)', time: 'Night 9:00 PM', done: medsCompleted[3] },
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    onClick={() => toggleMed(idx)}
                    style={{
                      background: item.done ? '#F0FDF4' : '#FFFFFF',
                      padding: '8px 10px',
                      borderRadius: 'var(--radius-md)',
                      border: `1px solid ${item.done ? '#A7F3D0' : '#E2E8F0'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, textDecoration: item.done ? 'line-through' : 'none', color: item.done ? '#047857' : 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{item.time}</div>
                    </div>
                    <CheckCircle2 size={16} color={item.done ? '#10B981' : '#CBD5E1'} />
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Tests & Diagnostic Status */}
            <div className="dashboard-col-card">
              <div className="col-card-title">
                <FlaskConical size={18} color="#8B5CF6" />
                <span>Follow-up Tests</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Serum Electrolytes & Lipid Profile
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#6D28D9', fontWeight: 600, marginTop: 2 }}>
                    Scheduled: Friday 8:00 AM (Home)
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Phlebotomist assigned • Fasting 10h
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    ECG Review at Home
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 600, marginTop: 2 }}>
                    ✓ Normal Sinus Rhythm (Day 7)
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Uploaded to Health Vault
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Recovery Progress */}
            <div className="dashboard-col-card">
              <div className="col-card-title">
                <LineChart size={18} color="#10B981" />
                <span>Recovery Progress</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: 4 }}>
                    <span>Mobility & Energy</span>
                    <span style={{ color: '#10B981' }}>85%</span>
                  </div>
                  <div style={{ width: '100%', height: 6, background: '#E2E8F0', borderRadius: 99 }}>
                    <div style={{ width: '85%', height: '100%', background: '#10B981', borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    Walking 1,500 steps daily without fatigue
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: 4 }}>
                    <span>Care Adherence</span>
                    <span style={{ color: '#2563EB' }}>98%</span>
                  </div>
                  <div style={{ width: '100%', height: 6, background: '#E2E8F0', borderRadius: 99 }}>
                    <div style={{ width: '98%', height: '100%', background: '#3B82F6', borderRadius: 99 }} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    Zero missed doses in past 10 days
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
