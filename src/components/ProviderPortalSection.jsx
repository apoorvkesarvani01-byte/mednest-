import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  Droplet,
  Ambulance,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Calendar,
  AlertTriangle,
  Sliders,
  ToggleLeft,
  ToggleRight,
  Sparkles,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { PROVIDER_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function ProviderPortalSection({
  onOpenPartnerRegistration
}) {
  const [selectedCategory, setSelectedCategory] = useState('hospitals');
  const [isAcceptingPatients, setIsAcceptingPatients] = useState(true);
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings', 'requests', 'inventory', 'analytics'
  const [requests, setRequests] = useState(PROVIDER_DATA.liveRequests);

  const handleToggleAvailability = () => {
    soundFx.playSoftClick();
    setIsAcceptingPatients(!isAcceptingPatients);
  };

  const handleAcceptRequest = (id) => {
    soundFx.playSuccessFanfare();
    setRequests(requests.map((r) => r.id === id ? { ...r, status: 'Confirmed & Accepted' } : r));
  };

  return (
    <section id="provider-portal" className="mednest-provider-portal-section">
      <div className="container">
        {/* Section Header */}
        <div className="provider-header-banner">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-blue">
                <Building2 size={13} /> MEDNEST HEALTHCARE PARTNER PORTAL
              </span>
              <span className="text-xs text-slate-500 font-semibold">• ABDM & NMC Integrated</span>
            </div>
            <h2 className="section-title">Provider & Partner Network Dashboard</h2>
            <p className="section-subtitle">
              Centralized operations console for accredited hospitals, physicians, ambulance operators, blood banks, diagnostic labs, and home-care providers.
            </p>
          </div>

          <button 
            onClick={onOpenPartnerRegistration}
            className="btn-onboard-partner"
          >
            <Sparkles size={16} />
            <span>Join MEDNEST Network</span>
          </button>
        </div>

        {/* 8 Provider Category Badges Row */}
        <div className="provider-categories-selector-row">
          {PROVIDER_DATA.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { soundFx.playSoftClick(); setSelectedCategory(cat.id); }}
              className={`prov-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.name}</span>
              <span className="prov-cat-num">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Provider Profile Summary & Live Status Card */}
        <div className="provider-dashboard-main-card">
          <div className="provider-top-profile-bar">
            <div className="prov-profile-left">
              <div className="prov-emblem-box">
                <Building2 size={28} className="text-sky-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-extrabold text-slate-900">{PROVIDER_DATA.activeProfile.name}</h3>
                  <span className="verified-badge-inline" title="NABH Accredited & Verified">
                    <ShieldCheck size={14} className="text-emerald-600 inline mr-1" />
                    Verified Provider
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  License: <span className="font-mono">{PROVIDER_DATA.activeProfile.licenseNo}</span> • {PROVIDER_DATA.activeProfile.accreditation}
                </p>
              </div>
            </div>

            {/* Provider Availability Switch */}
            <div className="prov-availability-switch" onClick={handleToggleAvailability}>
              <span className="text-xs font-bold text-slate-600">Patient Acceptance:</span>
              <button className={`status-toggle-btn ${isAcceptingPatients ? 'active-green' : 'inactive-red'}`}>
                <span className="toggle-dot"></span>
                <span>{isAcceptingPatients ? 'Accepting Patients (Online)' : 'Paused (Offline)'}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="provider-metrics-row">
            <div className="prov-metric-item">
              <span className="p-metric-label">Fulfilled Bookings</span>
              <span className="p-metric-val">{PROVIDER_DATA.activeProfile.totalBookingsFulfilled}</span>
            </div>
            <div className="prov-metric-item">
              <span className="p-metric-label">Active ICU & OPD Queue</span>
              <span className="p-metric-val text-sky-700">{PROVIDER_DATA.activeProfile.activeBookingsCount} Active</span>
            </div>
            <div className="prov-metric-item">
              <span className="p-metric-label">Emergency Response Time</span>
              <span className="p-metric-val text-emerald-700">{PROVIDER_DATA.activeProfile.emergencyResponseTime}</span>
            </div>
            <div className="prov-metric-item">
              <span className="p-metric-label">Patient Rating</span>
              <span className="p-metric-val text-amber-600 font-extrabold">★ {PROVIDER_DATA.activeProfile.rating} / 5.0</span>
            </div>
          </div>

          {/* Dashboard Navigation Tabs */}
          <div className="provider-dash-nav-tabs">
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`p-nav-tab ${activeTab === 'bookings' ? 'active' : ''}`}
            >
              <Calendar size={15} />
              <span>Live Patient Triage & Requests</span>
            </button>
            <button 
              onClick={() => setActiveTab('inventory')}
              className={`p-nav-tab ${activeTab === 'inventory' ? 'active' : ''}`}
            >
              <Accessibility size={15} />
              <span>Beds & Equipment Inventory</span>
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`p-nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
            >
              <TrendingUp size={15} />
              <span>Performance Analytics</span>
            </button>
          </div>

          {/* Tab 1: Live Patient Requests */}
          {activeTab === 'bookings' && (
            <div className="provider-tab-content">
              <div className="table-responsive">
                <table className="provider-requests-table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Service Requested</th>
                      <th>Urgency / Priority</th>
                      <th>Requested Time</th>
                      <th>Contact</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <tr key={req.id}>
                        <td className="font-bold text-slate-900">{req.patientName}</td>
                        <td>{req.service}</td>
                        <td>
                          <span className={`urgency-pill ${req.urgency.includes('HIGH') ? 'high' : 'normal'}`}>
                            {req.urgency}
                          </span>
                        </td>
                        <td className="text-xs text-slate-500">{req.timeAgo}</td>
                        <td className="font-mono text-xs text-slate-600">{req.contact}</td>
                        <td>
                          <span className="status-badge-inline">{req.status}</span>
                        </td>
                        <td>
                          {req.status === 'Pending Acceptance' ? (
                            <button
                              onClick={() => handleAcceptRequest(req.id)}
                              className="btn-accept-request"
                            >
                              Accept & Allocate
                            </button>
                          ) : (
                            <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                              <CheckCircle2 size={13} /> Active
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 2: Equipment & Bed Inventory */}
          {activeTab === 'inventory' && (
            <div className="provider-tab-content">
              <div className="inventory-cards-grid">
                {PROVIDER_DATA.equipmentInventory.map((item, idx) => (
                  <div key={idx} className="inventory-card">
                    <h4 className="inv-item-name">{item.name}</h4>
                    <div className="inv-stat-row">
                      <div className="inv-stat">
                        <span className="stat-num">{item.total}</span>
                        <span className="stat-label">Total Fleet</span>
                      </div>
                      <div className="inv-stat">
                        <span className="stat-num text-amber-600">{item.rented}</span>
                        <span className="stat-label">In Use / Rented</span>
                      </div>
                      <div className="inv-stat">
                        <span className="stat-num text-emerald-600 font-bold">{item.available}</span>
                        <span className="stat-label">Available Ready</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Analytics */}
          {activeTab === 'analytics' && (
            <div className="provider-tab-content">
              <div className="analytics-summary-grid">
                <div className="analytics-card">
                  <span className="analytics-label">Monthly Fulfilled Consults</span>
                  <span className="analytics-val">{PROVIDER_DATA.analytics.monthlyBookings}</span>
                  <span className="text-xs text-emerald-600 font-semibold">↑ 18% month over month</span>
                </div>
                <div className="analytics-card">
                  <span className="analytics-label">Patient Satisfaction Score</span>
                  <span className="analytics-val text-emerald-600">{PROVIDER_DATA.analytics.patientSatisfaction}</span>
                  <span className="text-xs text-slate-500">Based on verified reviews</span>
                </div>
                <div className="analytics-card">
                  <span className="analytics-label">Emergency SLA Adherence</span>
                  <span className="analytics-val text-sky-600">{PROVIDER_DATA.analytics.slaAdherence}</span>
                  <span className="text-xs text-slate-500">&lt; 5 mins response SLA</span>
                </div>
                <div className="analytics-card">
                  <span className="analytics-label">Disbursed Care Revenue</span>
                  <span className="analytics-val text-purple-700">{PROVIDER_DATA.analytics.verifiedRevenue}</span>
                  <span className="text-xs text-slate-500">Automated settlement</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
