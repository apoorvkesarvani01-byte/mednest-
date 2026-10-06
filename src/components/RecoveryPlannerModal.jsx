import React, { useState } from 'react';
import {
  HeartHandshake,
  Activity,
  Accessibility,
  Pill,
  Microscope,
  Stethoscope,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  X,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function RecoveryPlannerModal({
  isOpen,
  onClose,
  onOpenBookingModal
}) {
  if (!isOpen) return null;

  const [selectedCondition, setSelectedCondition] = useState('knee');
  const [needsNurse, setNeedsNurse] = useState(true);
  const [needsPhysio, setNeedsPhysio] = useState(true);
  const [needsBed, setNeedsBed] = useState(true);
  const [needsOxygen, setNeedsOxygen] = useState(false);
  const [needsFamilySync, setNeedsFamilySync] = useState(true);

  // Dynamic estimate calculation
  let basePrice = 0;
  if (needsNurse) basePrice += 15000;
  if (needsPhysio) basePrice += 8500;
  if (needsBed) basePrice += 3800;
  if (needsOxygen) basePrice += 4200;

  const handleBookCustomBundle = () => {
    soundFx.playSuccessFanfare();
    confetti({ particleCount: 90, spread: 65 });
    if (onOpenBookingModal) {
      onOpenBookingModal({
        name: `Custom Home Recovery Kit (${selectedCondition.toUpperCase()})`,
        price: `₹${basePrice.toLocaleString()} / month`,
        details: `Includes Nurse (${needsNurse ? 'Yes' : 'No'}), Physio (${needsPhysio ? 'Yes' : 'No'}), Bed (${needsBed ? 'Yes' : 'No'}), O2 (${needsOxygen ? 'Yes' : 'No'})`
      }, 'homecare');
    }
    onClose();
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="recovery-planner-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-strip">
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-green">
              <Sparkles size={12} /> MEDNEST CARE PROTOCOL
            </span>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="modal-step-body">
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">Custom Home Recovery Plan Builder</h3>
          <p className="text-xs text-slate-500 mb-4">
            Tailor the exact post-discharge medical support, equipment, and caregiver visits required for your home recovery.
          </p>

          <div className="form-group mb-4">
            <label className="form-label">Recovery Scenario / Surgery Type</label>
            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              className="form-select"
            >
              <option value="knee">Total Knee / Hip Joint Replacement</option>
              <option value="cardiac">Cardiac Surgery (CABG / Valve / Angioplasty)</option>
              <option value="stroke">Post-Stroke Neurological Rehabilitation</option>
              <option value="elderly">Elderly Assisted Living & Fall Recovery</option>
              <option value="respiratory">Post-ICU Respiratory Recovery (COPD / Oxygen)</option>
            </select>
          </div>

          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Select Care Components</h4>

          <div className="care-components-toggle-list">
            <label className="care-comp-toggle-item">
              <input
                type="checkbox"
                checked={needsNurse}
                onChange={(e) => setNeedsNurse(e.target.checked)}
                className="checkbox-custom"
              />
              <div className="comp-info">
                <span className="comp-title">👩‍⚕️ Post-Op Caregiver / Nurse (Daily Vitals & Suture Care)</span>
                <span className="comp-cost">+₹15,000 / month</span>
              </div>
            </label>

            <label className="care-comp-toggle-item">
              <input
                type="checkbox"
                checked={needsPhysio}
                onChange={(e) => setNeedsPhysio(e.target.checked)}
                className="checkbox-custom"
              />
              <div className="comp-info">
                <span className="comp-title">🧘 Home Physiotherapy (12 Structured Sessions)</span>
                <span className="comp-cost">+₹8,500 / pack</span>
              </div>
            </label>

            <label className="care-comp-toggle-item">
              <input
                type="checkbox"
                checked={needsBed}
                onChange={(e) => setNeedsBed(e.target.checked)}
                className="checkbox-custom"
              />
              <div className="comp-info">
                <span className="comp-title">🦽 Motorized 3-Function Hospital Bed (Delivered & Sanitized)</span>
                <span className="comp-cost">+₹3,800 / month</span>
              </div>
            </label>

            <label className="care-comp-toggle-item">
              <input
                type="checkbox"
                checked={needsOxygen}
                onChange={(e) => setNeedsOxygen(e.target.checked)}
                className="checkbox-custom"
              />
              <div className="comp-info">
                <span className="comp-title">💨 5L Medical Oxygen Concentrator / BiPAP</span>
                <span className="comp-cost">+₹4,200 / month</span>
              </div>
            </label>

            <label className="care-comp-toggle-item">
              <input
                type="checkbox"
                checked={needsFamilySync}
                onChange={(e) => setNeedsFamilySync(e.target.checked)}
                className="checkbox-custom"
              />
              <div className="comp-info">
                <span className="comp-title">👨‍👩‍👧 Family Real-Time Dashboard & Health Vault Sync</span>
                <span className="comp-cost text-emerald-600 font-bold">INCLUDED FREE</span>
              </div>
            </label>
          </div>

          <div className="planner-estimate-box mt-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs text-slate-500 block">Total Monthly Recovery Estimate</span>
                <strong className="text-xl font-extrabold text-sky-800">₹{basePrice.toLocaleString()}</strong>
                <span className="text-xs text-slate-400"> / month</span>
              </div>

              <button
                type="button"
                onClick={handleBookCustomBundle}
                className="btn-modal-confirm"
              >
                <Calendar size={16} />
                <span>Reserve Custom Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
