import React, { useState } from 'react';
import {
  User,
  Calendar,
  FolderHeart,
  Activity,
  Clock,
  Users,
  Heart,
  Bell,
  Lock,
  ShieldCheck,
  CheckCircle2,
  X,
  FileText,
  Building,
  Phone,
  Edit2,
  Download,
  Trash2,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function UserAccountModal({
  isOpen,
  onClose,
  bookings = [],
  currentUserRole = 'patient',
  onSwitchUserRole
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings', 'vault', 'recovery', 'reminders', 'family', 'profile', 'privacy'

  const userTabs = [
    { id: 'bookings', label: 'My Bookings', icon: Calendar, badge: bookings.length || 2 },
    { id: 'recovery', label: 'Recovery Plan', icon: Activity },
    { id: 'reminders', label: 'Medicine Reminders', icon: Clock, badge: '3 Active' },
    { id: 'family', label: 'Family Access', icon: Users },
    { id: 'profile', label: 'Profile & ABHA ID', icon: User },
    { id: 'privacy', label: 'Privacy & Consent', icon: Lock }
  ];

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="user-account-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Top User Header Bar */}
        <div className="user-modal-header">
          <div className="user-header-left">
            <div className="user-avatar-huge">
              <User size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-slate-900">Rahul Sharma</h3>
                <span className="badge-pill badge-green">ABHA Verified</span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                ABHA ID: <span className="font-mono text-slate-700">91-8472-1092-4821</span> • Bengaluru • +91 98801 44556
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onSwitchUserRole}
              className="btn-persona-switch"
              title="Switch between Patient, Family, or Provider view"
            >
              <span>{currentUserRole === 'patient' ? '👤 Patient Persona' : currentUserRole === 'family' ? '👨‍👩‍👧 Family Persona' : '🏥 Provider Persona'}</span>
              <span className="switch-text">(Switch)</span>
            </button>
            <button onClick={onClose} className="close-btn">×</button>
          </div>
        </div>

        {/* Modal Navigation Side / Top Tabs */}
        <div className="user-modal-tabs-row">
          {userTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { soundFx.playSoftClick(); setActiveTab(tab.id); }}
                className={`user-modal-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
                {tab.badge && <span className="tab-badge">{tab.badge}</span>}
              </button>
            );
          })}
        </div>

        {/* Modal Tab Content Area */}
        <div className="user-modal-content-area">
          {/* TAB 1: MY BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Active Healthcare Bookings & History</h4>
                <span className="text-xs text-slate-500">Live GPS tracking and operator support active</span>
              </div>

              <div className="bookings-list-scroll">
                {/* Simulated Active Booking 1 */}
                <div className="booking-card-item">
                  <div className="booking-top-line">
                    <div className="flex items-center gap-2">
                      <span className="badge-pill badge-blue">Doctor Consultation</span>
                      <strong className="text-sm font-bold text-slate-900">Dr. Rajesh Kumar (Cardiology)</strong>
                    </div>
                    <span className="badge-pill badge-green">Confirmed • Tomorrow 4:00 PM</span>
                  </div>
                  <p className="booking-details-line">Fortis Hospital / Video Tele-Consult • Reference: <strong>MND-2026-9182</strong></p>
                  
                  <div className="booking-actions-line mt-2">
                    <button onClick={() => alert('Opening Video Consultation Room...')} className="btn-table-action primary">
                      Join Video Consult
                    </button>
                    <button onClick={() => alert('Reschedule requested')} className="btn-table-action">
                      Reschedule
                    </button>
                  </div>
                </div>

                {/* Simulated Active Booking 2 */}
                <div className="booking-card-item">
                  <div className="booking-top-line">
                    <div className="flex items-center gap-2">
                      <span className="badge-pill badge-pink">Home Nursing Visit</span>
                      <strong className="text-sm font-bold text-slate-900">Sister Mary Verghese (Post-Op Dressing)</strong>
                    </div>
                    <span className="badge-pill badge-teal">Scheduled • Oct 10, 10:00 AM</span>
                  </div>
                  <p className="booking-details-line">CareFirst Home Health Partner • Reference: <strong>MND-2026-4421</strong></p>
                  
                  <div className="booking-actions-line mt-2">
                    <a href="tel:+919880112345" className="btn-table-action">
                      Call Caregiver
                    </a>
                    <button onClick={() => alert('Downloading Booking Slip...')} className="btn-table-action">
                      <Download size={13} className="inline mr-1" /> Slip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RECOVERY PLAN */}
          {activeTab === 'recovery' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Cardiac Post-PCI Recovery Protocol (Day 5 of 30)</h4>
                <span className="badge-pill badge-green">84% Recovery Score</span>
              </div>

              <div className="recovery-milestones-list">
                <div className="milestone-item completed">
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-slate-800">Hospital Discharge & Oxygen Setup</strong>
                    <span className="text-xs text-slate-500 block">Day 1 • 5L Oxygen Concentrator & ICU Bed delivered</span>
                  </div>
                </div>

                <div className="milestone-item completed">
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-slate-800">First In-Home Suture Dressing & Vitals Check</strong>
                    <span className="text-xs text-slate-500 block">Day 3 • Sister Mary verified clean incision</span>
                  </div>
                </div>

                <div className="milestone-item active-current">
                  <Clock size={18} className="text-sky-600 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-sky-900">Active: Supervised Hallway Walking & Mobility</strong>
                    <span className="text-xs text-sky-700 block">Day 5 to 14 • 15 mins morning / evening walking</span>
                  </div>
                </div>

                <div className="milestone-item pending">
                  <div className="pending-dot"></div>
                  <div>
                    <strong className="text-sm text-slate-600">Follow-up Lipid & ECG Review</strong>
                    <span className="text-xs text-slate-400 block">Day 14 • Dr. Rajesh Kumar Tele-Consult</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MEDICINE REMINDERS */}
          {activeTab === 'reminders' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Daily Medicine Adherence Scheduler</h4>
                <span className="text-xs text-emerald-700 font-bold">100% Adherence This Week</span>
              </div>

              <div className="reminders-table-wrap">
                <div className="reminder-item-row">
                  <div className="flex items-center gap-3">
                    <span className="time-pill">08:00 AM</span>
                    <div>
                      <strong className="text-sm text-slate-900">Telma 40mg (Telmisartan)</strong>
                      <span className="text-xs text-slate-500 block">1 Tablet • After Breakfast • Blood Pressure</span>
                    </div>
                  </div>
                  <span className="badge-pill badge-green">Logged Taken (8:05 AM)</span>
                </div>

                <div className="reminder-item-row">
                  <div className="flex items-center gap-3">
                    <span className="time-pill">01:30 PM</span>
                    <div>
                      <strong className="text-sm text-slate-900">Ecosprin 75mg (Aspirin)</strong>
                      <span className="text-xs text-slate-500 block">1 Tablet • After Lunch • Blood Thinner</span>
                    </div>
                  </div>
                  <span className="badge-pill badge-green">Logged Taken (1:35 PM)</span>
                </div>

                <div className="reminder-item-row">
                  <div className="flex items-center gap-3">
                    <span className="time-pill">09:00 PM</span>
                    <div>
                      <strong className="text-sm text-slate-900">Atorva 10mg (Atorvastatin)</strong>
                      <span className="text-xs text-slate-500 block">1 Tablet • After Dinner • Cholesterol</span>
                    </div>
                  </div>
                  <span className="badge-pill badge-blue">Scheduled for Tonight</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: FAMILY ACCESS */}
          {activeTab === 'family' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Authorized Family & Caregivers</h4>
                <span className="text-xs text-slate-500">Managed with cryptographic patient consent</span>
              </div>

              <div className="family-cards-list">
                <div className="family-member-mini-card">
                  <div>
                    <strong className="text-sm text-slate-900">Priya Sharma (Daughter)</strong>
                    <span className="text-xs text-sky-700 font-semibold block">Full Access (Care Coordinator)</span>
                    <span className="text-xs text-slate-400">Mobile: +91 98201 44556</span>
                  </div>
                  <span className="badge-pill badge-green">Access Active</span>
                </div>

                <div className="family-member-mini-card">
                  <div>
                    <strong className="text-sm text-slate-900">Amit Sharma (Son)</strong>
                    <span className="text-xs text-slate-600 block">View Vitals & Appointments Only</span>
                    <span className="text-xs text-slate-400">Mobile: +91 98112 33445</span>
                  </div>
                  <span className="badge-pill badge-green">Access Active</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PROFILE & ABHA ID */}
          {activeTab === 'profile' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Ayushman Bharat Health Account (ABHA) Profile</h4>
                <span className="badge-pill badge-teal">National Digital Health ID</span>
              </div>

              <div className="profile-details-grid">
                <div className="prof-item">
                  <span className="prof-label">Full Legal Name</span>
                  <span className="prof-val">Rahul Sharma</span>
                </div>
                <div className="prof-item">
                  <span className="prof-label">ABHA Address</span>
                  <span className="prof-val font-mono">rahul.sharma@abdm</span>
                </div>
                <div className="prof-item">
                  <span className="prof-label">Blood Group</span>
                  <span className="prof-val font-bold text-rose-600">O+ Positive</span>
                </div>
                <div className="prof-item">
                  <span className="prof-label">Registered Phone</span>
                  <span className="prof-val font-mono">+91 98801 44556</span>
                </div>
                <div className="prof-item">
                  <span className="prof-label">Known Allergies</span>
                  <span className="prof-val">Penicillin (Mild), Sulfa Drugs (None)</span>
                </div>
                <div className="prof-item">
                  <span className="prof-label">Emergency Contact</span>
                  <span className="prof-val">Priya Sharma (+91 98201 44556)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: PRIVACY & CONSENT */}
          {activeTab === 'privacy' && (
            <div className="user-tab-panel">
              <div className="panel-header-row">
                <h4 className="text-base font-bold text-slate-900">Consent & Clinical Data Governance</h4>
                <span className="badge-pill badge-purple">ISO 27001 & ABDM Aligned</span>
              </div>

              <div className="consent-controls-list">
                <div className="consent-toggle-row">
                  <div>
                    <strong className="text-sm text-slate-900">Hospital Discharge Auto-Sync</strong>
                    <p className="text-xs text-slate-500">Automatically pull discharge summaries from Fortis and Apollo into My Health Vault.</p>
                  </div>
                  <span className="badge-pill badge-green">Enabled</span>
                </div>

                <div className="consent-toggle-row">
                  <div>
                    <strong className="text-sm text-slate-900">Emergency Triage Access</strong>
                    <p className="text-xs text-slate-500">Allow emergency paramedics to read critical blood group & allergy data in emergency dispatches.</p>
                  </div>
                  <span className="badge-pill badge-green">Enabled</span>
                </div>

                <div className="consent-toggle-row">
                  <div>
                    <strong className="text-sm text-slate-900">Zero Commercial Data Monetization</strong>
                    <p className="text-xs text-slate-500">MEDNEST never sells, shares, or leases your clinical records to insurance or marketing entities.</p>
                  </div>
                  <span className="badge-pill badge-teal">Protected</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="user-modal-footer">
          <button onClick={onClose} className="btn-modal-confirm">
            Close Account Console
          </button>
        </div>
      </div>
    </div>
  );
}
