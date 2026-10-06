import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  Ambulance,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  CheckCircle2,
  ShieldCheck,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function PartnerOnboardingModal({
  isOpen,
  onClose
}) {
  if (!isOpen) return null;

  const [providerType, setProviderType] = useState('hospital');
  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playSuccessFanfare();
    confetti({ particleCount: 90, spread: 70 });
    setSubmitted(true);
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="partner-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-strip">
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-blue">
              <Sparkles size={12} /> MEDNEST PROVIDER NETWORK ONBOARDING
            </span>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="modal-step-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl font-extrabold text-slate-900 mb-1">Partner with MEDNEST</h3>
              <p className="text-xs text-slate-500 mb-4">
                Connect your facility, practice, or ambulance fleet with thousands of patients seeking coordinated, accredited healthcare.
              </p>

              <div className="form-group mb-3">
                <label className="form-label">Healthcare Category</label>
                <select
                  value={providerType}
                  onChange={(e) => setProviderType(e.target.value)}
                  className="form-select"
                >
                  <option value="hospital">Hospital & Trauma Center</option>
                  <option value="doctor">Doctor / Medical Specialist</option>
                  <option value="ambulance">Ambulance Fleet Operator</option>
                  <option value="blood">Blood Bank / Blood Center</option>
                  <option value="diagnostic">Diagnostic Lab & Imaging Center</option>
                  <option value="pharmacy">Licensed Retail Pharmacy</option>
                  <option value="homecare">Home Healthcare & Nursing Agency</option>
                  <option value="equipment">Medical Equipment Rental Vendor</option>
                </select>
              </div>

              <div className="form-group mb-3">
                <label className="form-label">Organization / Practice Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LifeCare Hospital, Dr. Rajesh Clinic, MedExpress"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="form-group">
                  <label className="form-label">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Sunita Deshmukh"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">City *</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-select"
                  >
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="form-group">
                  <label className="form-label">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="partnerships@lifecare.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98801 12345"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="partner-trust-note mb-4">
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                <p className="text-xs text-slate-600">
                  All partner applications undergo mandatory license check (NMC / Form 20/21 / NABL / NABH) and physical credential inspection prior to live activation.
                </p>
              </div>

              <div className="modal-footer-row">
                <button type="button" onClick={onClose} className="btn-modal-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-modal-confirm">
                  <ShieldCheck size={16} />
                  <span>Submit Partnership Application</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="verified-success-icon mx-auto mb-3">
                <CheckCircle2 size={42} className="text-emerald-600" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-1">Partnership Application Received!</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto mb-4">
                Thank you, <strong>{contactPerson}</strong> ({orgName}). Our Provider Verification Team will review your credentials and contact you within 24 hours.
              </p>
              <button onClick={onClose} className="btn-modal-confirm mx-auto block">
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
