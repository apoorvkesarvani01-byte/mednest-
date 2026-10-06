import React, { useState } from 'react';
import {
  Users,
  Heart,
  Calendar,
  Clock,
  Pill,
  Microscope,
  CheckCircle2,
  ShieldCheck,
  Key,
  Lock,
  Plus,
  Trash2,
  Activity,
  AlertCircle,
  Sparkles,
  ChevronRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { DEMO_FAMILY_DASHBOARD_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function FamilyDashboardSection({
  onOpenBookingModal
}) {
  const [data, setData] = useState(DEMO_FAMILY_DASHBOARD_DATA);
  const [familyMembers, setFamilyMembers] = useState(DEMO_FAMILY_DASHBOARD_DATA.familyMembers);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRelation, setNewMemberRelation] = useState('Spouse');
  const [newMemberRole, setNewMemberRole] = useState('View Vitals & Appointments');

  const handleRevoke = (id) => {
    soundFx.playSoftClick();
    if (confirm('Are you sure you want to revoke this family member’s access?')) {
      setFamilyMembers(familyMembers.filter((m) => m.id !== id));
    }
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (newMemberName.trim()) {
      soundFx.playSuccessFanfare();
      const newM = {
        id: `fam-${Date.now()}`,
        name: newMemberName,
        relation: newMemberRelation,
        accessLevel: newMemberRole,
        phone: '+91 98' + Math.floor(10000000 + Math.random() * 90000000),
        status: 'Active'
      };
      setFamilyMembers([...familyMembers, newM]);
      setInviteModalOpen(false);
      setNewMemberName('');
    }
  };

  return (
    <section id="family" className="mednest-family-section">
      <div className="container">
        {/* Section Header */}
        <div className="family-header-banner">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-purple">
                <Users size={13} /> FAMILY CARE COORDINATION
              </span>
              <span className="text-xs text-slate-500 font-semibold">• Patient-Consented Access</span>
            </div>
            <h2 className="section-title">Family Dashboard</h2>
            <p className="section-subtitle">
              Keep trusted loved ones informed in real-time. Transparently coordinate nurse logs, upcoming specialist visits, medicine schedules, and recovery milestones.
            </p>
          </div>

          <button 
            onClick={() => { soundFx.playSoftClick(); setInviteModalOpen(true); }}
            className="btn-invite-family"
          >
            <Plus size={16} />
            <span>Grant Family Access</span>
          </button>
        </div>

        {/* Patient Status Overview Card */}
        <div className="patient-status-overview-card">
          <div className="patient-main-badge">
            <div className="patient-avatar-round">
              <Heart size={26} className="text-rose-500 fill-rose-50" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="patient-full-name">{data.patient.name}</h3>
                <span className="patient-relation-chip">({data.patient.relationship})</span>
              </div>
              <p className="patient-meta-line">
                Age: {data.patient.age} • Gender: {data.patient.gender} • Blood Group: <strong>{data.patient.bloodGroup}</strong> • ABHA: <span className="font-mono text-xs">{data.patient.abhaId}</span>
              </p>
            </div>
          </div>

          <div className="patient-recovery-metrics">
            <div className="rec-metric-box">
              <span className="rec-metric-label">Recovery Score</span>
              <div className="flex items-center gap-2">
                <span className="rec-score-number">{data.patient.recoveryScore}%</span>
                <span className="badge-pill badge-green">On Track</span>
              </div>
            </div>

            <div className="rec-metric-box">
              <span className="rec-metric-label">Vitals Telemetry</span>
              <span className="rec-vitals-status">{data.patient.vitalsStatus}</span>
            </div>

            <div className="rec-metric-box">
              <span className="rec-metric-label">Active Coordinator</span>
              <span className="rec-coord-name">{data.careCoordinator.name}</span>
            </div>
          </div>
        </div>

        {/* 3 Column Grid: Appointments, Nurse Visits, Medicine Compliance */}
        <div className="family-dashboard-grid">
          {/* Column 1: Upcoming Appointments */}
          <div className="family-dash-card">
            <div className="dash-card-header">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-sky-600" />
                <h4>Upcoming Appointments</h4>
              </div>
              <span className="count-pill">{data.upcomingAppointments.length}</span>
            </div>

            <div className="dash-card-body">
              {data.upcomingAppointments.map((apt) => (
                <div key={apt.id} className="family-item-card">
                  <div className="item-top-row">
                    <span className="item-doctor-name">{apt.doctor}</span>
                    <span className="badge-pill badge-blue">{apt.type}</span>
                  </div>
                  <p className="item-spec">{apt.specialty}</p>
                  <p className="item-hosp">{apt.hospital}</p>
                  <div className="item-time-row">
                    <Clock size={13} className="text-sky-600" />
                    <span className="font-bold text-sky-800 text-xs">{apt.dateTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Completed Nurse Visits & Clinical Notes */}
          <div className="family-dash-card">
            <div className="dash-card-header">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <h4>Completed Nurse Visits & Logs</h4>
              </div>
              <span className="count-pill">{data.completedVisits.length}</span>
            </div>

            <div className="dash-card-body">
              {data.completedVisits.map((visit) => (
                <div key={visit.id} className="family-item-card visit-log">
                  <div className="item-top-row">
                    <span className="caregiver-name">{visit.caregiver}</span>
                    <span className="visit-date">{visit.date}</span>
                  </div>
                  <p className="visit-notes-text">"{visit.notes}"</p>
                  
                  <div className="vitals-chips-row">
                    <span className="vital-chip">BP: {visit.vitals.bp}</span>
                    <span className="vital-chip">Pulse: {visit.vitals.pulse}</span>
                    <span className="vital-chip">SpO2: {visit.vitals.spo2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Daily Medicine Tasks & Adherence */}
          <div className="family-dash-card">
            <div className="dash-card-header">
              <div className="flex items-center gap-2">
                <Pill size={18} className="text-purple-600" />
                <h4>Today's Medicine Tasks</h4>
              </div>
              <span className="badge-pill badge-green">100% Adherence</span>
            </div>

            <div className="dash-card-body">
              <div className="medicine-compliance-bar">
                <div className="comp-text-row">
                  <span className="text-xs text-slate-500 font-medium">Daily Compliance</span>
                  <span className="text-xs font-bold text-emerald-700">3 of 3 Doses Logged</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="meds-schedule-list">
                {data.medicineCompliance.schedule.map((med, idx) => (
                  <div key={idx} className="med-task-item">
                    <div className="med-checkbox-box checked">
                      <CheckCircle2 size={16} className="text-emerald-600" />
                    </div>
                    <div className="med-task-info">
                      <span className="med-task-name">{med.name}</span>
                      <span className="med-task-time">{med.time} • {med.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Granular Permission Controls & Family Member List */}
        <div className="family-permissions-box">
          <div className="perm-header-row">
            <div className="flex items-center gap-2">
              <Key size={18} className="text-amber-600" />
              <h4 className="font-bold text-slate-900">Granular Family Access & Consent Management</h4>
            </div>
            <span className="text-xs text-slate-500">Patient permission strictly required for all data sharing</span>
          </div>

          <div className="family-members-table-wrap">
            <table className="family-members-table">
              <thead>
                <tr>
                  <th>Family Member</th>
                  <th>Relationship</th>
                  <th>Permission / Access Level</th>
                  <th>Contact</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {familyMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="font-bold text-slate-900">{member.name}</td>
                    <td>{member.relation}</td>
                    <td>
                      <span className="access-level-badge">{member.accessLevel}</span>
                    </td>
                    <td className="font-mono text-xs text-slate-600">{member.phone}</td>
                    <td>
                      <span className="status-badge-active">
                        <span className="live-dot-green"></span> Active
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleRevoke(member.id)}
                        className="btn-revoke-perm"
                        title="Revoke Access"
                      >
                        <Trash2 size={14} />
                        <span>Revoke</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invite Family Member Modal */}
        {inviteModalOpen && (
          <div className="mednest-modal-overlay" onClick={() => setInviteModalOpen(false)}>
            <div className="family-invite-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top-bar">
                <div className="flex items-center gap-2">
                  <span className="badge-pill badge-purple">PATIENT CONSENTED INVITATION</span>
                </div>
                <button onClick={() => setInviteModalOpen(false)} className="close-btn">×</button>
              </div>

              <form onSubmit={handleAddMember} className="family-invite-form">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Grant Family Member Access</h3>
                <p className="text-xs text-slate-500 mb-4">
                  The invited member will receive an OTP confirmation. You can revoke their access at any moment.
                </p>

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newMemberName}
                    onChange={(e) => setNewMemberName(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Relationship to Patient</label>
                  <select
                    value={newMemberRelation}
                    onChange={(e) => setNewMemberRelation(e.target.value)}
                    className="form-select"
                  >
                    <option value="Daughter">Daughter</option>
                    <option value="Son">Son</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Sibling">Sibling</option>
                    <option value="Parent">Parent</option>
                    <option value="Family Doctor">Family Doctor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Access Level Permission</label>
                  <select
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value)}
                    className="form-select"
                  >
                    <option value="Full Access (Care Coordinator)">Full Access (Manage Bookings, Vitals & Reports)</option>
                    <option value="View Vitals & Appointments">View Vitals & Appointments Only</option>
                    <option value="Medical Reports & Notes Only">Medical Reports & Doctor Notes Only</option>
                  </select>
                </div>

                <div className="modal-footer-row mt-4">
                  <button type="button" onClick={() => setInviteModalOpen(false)} className="btn-modal-cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn-modal-confirm">
                    <ShieldCheck size={16} />
                    <span>Authorize & Send Invite</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
