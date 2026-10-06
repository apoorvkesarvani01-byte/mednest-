import React, { useState } from 'react';
import {
  Clock,
  Pill,
  Calendar,
  CheckCircle2,
  BellRing,
  X,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function RefillReminderModal({
  isOpen,
  onClose
}) {
  if (!isOpen) return null;

  const [medName, setMedName] = useState('Telma 40 (Telmisartan)');
  const [frequency, setFrequency] = useState('30 Days (Monthly)');
  const [reminderDaysBefore, setReminderDaysBefore] = useState('3 Days Before');
  const [autoOrderEnabled, setAutoOrderEnabled] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  const handleSaveReminder = (e) => {
    e.preventDefault();
    soundFx.playSuccessFanfare();
    setConfirmed(true);
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="refill-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-strip">
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-purple">
              <Clock size={12} /> RECOVERY MEDICINE SUPPORT
            </span>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="modal-step-body">
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">Schedule Medicine Refill Reminder</h3>
          <p className="text-xs text-slate-500 mb-4">
            Never run out of essential chronic medications. We alert you prior to dose exhaustion and coordinate with your licensed pharmacy.
          </p>

          {!confirmed ? (
            <form onSubmit={handleSaveReminder}>
              <div className="form-group mb-3">
                <label className="form-label">Medicine Name *</label>
                <input
                  type="text"
                  required
                  value={medName}
                  onChange={(e) => setMedName(e.target.value)}
                  placeholder="e.g. Telma 40, Glycomet, Atorva"
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="form-group">
                  <label className="form-label">Refill Frequency</label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="form-select"
                  >
                    <option value="15 Days">Every 15 Days</option>
                    <option value="30 Days (Monthly)">Every 30 Days (Monthly)</option>
                    <option value="60 Days">Every 60 Days</option>
                    <option value="90 Days">Every 90 Days</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Alert Notice</label>
                  <select
                    value={reminderDaysBefore}
                    onChange={(e) => setReminderDaysBefore(e.target.value)}
                    className="form-select"
                  >
                    <option value="2 Days Before">2 Days Before</option>
                    <option value="3 Days Before">3 Days Before</option>
                    <option value="5 Days Before">5 Days Before</option>
                  </select>
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="flex items-center gap-2 cursor-pointer bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <input
                    type="checkbox"
                    checked={autoOrderEnabled}
                    onChange={(e) => setAutoOrderEnabled(e.target.checked)}
                    className="checkbox-custom"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">1-Click Auto-Refill Confirmation</span>
                    <span className="text-xs text-slate-500">Send WhatsApp reminder with instant reorder link</span>
                  </div>
                </label>
              </div>

              <div className="modal-footer-row">
                <button type="button" onClick={onClose} className="btn-modal-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-modal-confirm">
                  <BellRing size={16} />
                  <span>Activate Refill Reminder</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="verified-success-icon mx-auto mb-2">
                <CheckCircle2 size={36} className="text-emerald-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Refill Reminder Scheduled!</h4>
              <p className="text-xs text-slate-600 mt-1">
                You will receive a notification for <strong>{medName}</strong> 3 days prior to your next refill date.
              </p>
              <button onClick={onClose} className="btn-modal-confirm mt-4 mx-auto block">
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
