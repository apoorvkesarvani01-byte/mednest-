import React, { useState } from 'react';
import {
  Upload,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  X,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function PrescriptionUploadModal({
  isOpen,
  onClose,
  onUploadSuccess
}) {
  if (!isOpen) return null;

  const [uploadStatus, setUploadStatus] = useState('idle'); // 'idle', 'scanning', 'verified'
  const [patientPhone, setPatientPhone] = useState('+91 98801 44556');
  const [doctorNotes, setDoctorNotes] = useState('Telma 40 & Atorva 10 refill required');

  const handleSimulatedUpload = () => {
    soundFx.playSoftClick();
    setUploadStatus('scanning');
    setTimeout(() => {
      setUploadStatus('verified');
      soundFx.playSuccessFanfare();
      if (onUploadSuccess) onUploadSuccess();
    }, 1800);
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="prescription-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-strip">
          <div className="flex items-center gap-2">
            <span className="badge-pill badge-green">LICENSED PHARMACY DISPENSING</span>
            <span className="text-xs text-slate-400">Form 20/21 Aligned</span>
          </div>
          <button onClick={onClose} className="close-btn">×</button>
        </div>

        <div className="modal-step-body">
          <h3 className="text-xl font-extrabold text-slate-900 mb-1">Upload Doctor's Prescription</h3>
          <p className="text-xs text-slate-500 mb-4">
            Our licensed pharmacist partner will review your prescription, verify dosages, and prepare your medication for doorstep delivery.
          </p>

          {uploadStatus === 'idle' && (
            <div className="upload-dropzone-large" onClick={handleSimulatedUpload}>
              <div className="dropzone-icon-circle">
                <Upload size={28} className="text-emerald-600" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Drag & Drop Prescription or Browse Files</h4>
              <span className="text-xs text-slate-400 mt-1">Accepts PDF, JPG, PNG from hospital or camera photo</span>
              <button type="button" className="btn-browse-file mt-3">
                Select Prescription File
              </button>
            </div>
          )}

          {uploadStatus === 'scanning' && (
            <div className="upload-scanning-state text-center py-8">
              <div className="scanning-radar-spinner mx-auto mb-3"></div>
              <h4 className="text-sm font-bold text-slate-900">Validating Prescription with Pharmacist Queue...</h4>
              <p className="text-xs text-slate-500">Checking doctor registration number and active drug interactions...</p>
            </div>
          )}

          {uploadStatus === 'verified' && (
            <div className="upload-verified-state text-center py-4">
              <div className="verified-success-icon mx-auto mb-2">
                <CheckCircle2 size={36} className="text-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Prescription Uploaded & Queued!</h4>
              <p className="text-xs text-slate-600 mt-1">
                Verified by <strong>Apollo Pharmacy Partner</strong>. An SMS with the confirmed item list and payment link will be sent to <strong>{patientPhone}</strong>.
              </p>
            </div>
          )}

          <div className="mt-4">
            <div className="form-group mb-3">
              <label className="form-label">Contact Number for Order Confirmation</label>
              <input
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Doctor Notes / Medicine Specifics (Optional)</label>
              <input
                type="text"
                value={doctorNotes}
                onChange={(e) => setDoctorNotes(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="pharmacy-guarantee-strip mt-4">
            <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
            <p className="text-xs text-emerald-800">
              <strong>MEDNEST Non-Substitution Rule:</strong> We never alter or recommend medicine substitutes. All medicines are dispensed exactly as written on your prescription.
            </p>
          </div>
        </div>

        <div className="modal-footer-row">
          <button type="button" onClick={onClose} className="btn-modal-cancel">
            {uploadStatus === 'verified' ? 'Done' : 'Cancel'}
          </button>
          {uploadStatus === 'idle' && (
            <button type="button" onClick={handleSimulatedUpload} className="btn-modal-confirm">
              <Upload size={16} />
              <span>Simulate Upload & Verify</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
