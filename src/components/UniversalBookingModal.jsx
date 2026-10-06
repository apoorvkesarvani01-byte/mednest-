import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Stethoscope,
  Microscope,
  HeartHandshake,
  Accessibility,
  Pill,
  Download,
  Share2,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function UniversalBookingModal({
  isOpen,
  onClose,
  initialService,
  serviceType = 'doctor',
  onBookingComplete
}) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 10:00 AM');
  const [patientName, setPatientName] = useState('Rahul Sharma');
  const [patientAge, setPatientAge] = useState('34');
  const [patientPhone, setPatientPhone] = useState('+91 98801 44556');
  const [patientAddress, setPatientAddress] = useState('Flat 402, Green Glen Layout, Bellandur, Bengaluru');
  const [patientNotes, setPatientNotes] = useState('');
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  const availableDates = [
    'Today, 4:00 PM',
    'Today, 6:30 PM',
    'Tomorrow, 10:00 AM',
    'Tomorrow, 2:30 PM',
    'Oct 10, 11:00 AM'
  ];

  const handleNextStep = () => {
    soundFx.playSoftClick();
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      // Complete booking
      const generatedId = `MND-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBookingId(generatedId);
      setStep(4);
      soundFx.playSuccessFanfare();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onBookingComplete) {
        onBookingComplete({
          id: generatedId,
          service: initialService,
          serviceType,
          date: selectedDate,
          patient: patientName,
          phone: patientPhone
        });
      }
    }
  };

  const serviceTitle = initialService?.name || initialService?.title || 'Healthcare Service Consultation';

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="universal-booking-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header-strip">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge-pill badge-teal">VERIFIED BOOKING WORKFLOW</span>
              <span className="text-xs text-slate-400">Step {Math.min(step, 3)} of 3</span>
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mt-1">{serviceTitle}</h3>
          </div>
          <button onClick={onClose} className="close-btn" aria-label="Close modal">×</button>
        </div>

        {/* Wizard Steps Indicator */}
        {step < 4 && (
          <div className="wizard-progress-bar">
            <div className={`wizard-step-node ${step >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <label>Select Slot</label>
            </div>
            <div className={`wizard-connector ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`wizard-step-node ${step >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <label>Patient Details</label>
            </div>
            <div className={`wizard-connector ${step >= 3 ? 'active' : ''}`}></div>
            <div className={`wizard-step-node ${step >= 3 ? 'active' : ''}`}>
              <span>3</span>
              <label>Confirm</label>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 1: SELECT DATE & TIME SLOT */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="modal-step-body">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Choose Date & Preferred Time Slot</h4>
            <p className="text-xs text-slate-500 mb-4">
              Direct live sync with provider schedule. Guaranteed zero overbooking.
            </p>

            <div className="slots-selection-grid">
              {availableDates.map((d, i) => (
                <div
                  key={i}
                  onClick={() => { soundFx.playSoftClick(); setSelectedDate(d); }}
                  className={`slot-choice-card ${selectedDate === d ? 'selected' : ''}`}
                >
                  <Clock size={16} className="text-sky-600" />
                  <span className="slot-date-text">{d}</span>
                  {selectedDate === d && <CheckCircle2 size={16} className="text-emerald-600 ml-auto" />}
                </div>
              ))}
            </div>

            <div className="booking-summary-preview mt-4">
              <span className="text-xs font-bold text-slate-600 uppercase block mb-1">Service Summary</span>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-800">{serviceTitle}</span>
                <span className="font-extrabold text-sky-700">
                  {initialService?.discountFee ? `₹${initialService.discountFee}` : initialService?.price ? `₹${initialService.price}` : 'Verified Partner Pricing'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: ENTER PATIENT DETAILS */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="modal-step-body">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Patient Contact & Location Details</h4>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="form-group">
                <label className="form-label">Patient Full Name *</label>
                <input
                  type="text"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Age *</label>
                <input
                  type="number"
                  required
                  value={patientAge}
                  onChange={(e) => setPatientAge(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Phone Number for Updates *</label>
              <input
                type="tel"
                required
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">Delivery / Visit Address *</label>
              <input
                type="text"
                required
                value={patientAddress}
                onChange={(e) => setPatientAddress(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Medical Notes / Symptoms (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Post-op knee surgery, wheelchair assistance required"
                value={patientNotes}
                onChange={(e) => setPatientNotes(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 3: REVIEW & CONFIRM */}
        {/* ========================================================================= */}
        {step === 3 && (
          <div className="modal-step-body">
            <h4 className="text-sm font-bold text-slate-800 mb-2">Review Booking Summary</h4>

            <div className="review-summary-card">
              <div className="review-row">
                <span className="review-label">Selected Service:</span>
                <strong className="text-slate-900">{serviceTitle}</strong>
              </div>
              <div className="review-row">
                <span className="review-label">Scheduled Date & Time:</span>
                <strong className="text-sky-700">{selectedDate}</strong>
              </div>
              <div className="review-row">
                <span className="review-label">Patient:</span>
                <span>{patientName}, {patientAge} yrs</span>
              </div>
              <div className="review-row">
                <span className="review-label">Contact:</span>
                <span className="font-mono">{patientPhone}</span>
              </div>
              <div className="review-row">
                <span className="review-label">Address:</span>
                <span className="text-xs">{patientAddress}</span>
              </div>
            </div>

            <div className="consent-verification-checkbox mt-3">
              <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
              <p className="text-xs text-slate-600">
                I authorize MEDNEST to coordinate this service with accredited healthcare partners under consent protocols.
              </p>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* STEP 4: BOOKING CONFIRMED RECEIPT SCREEN */}
        {/* ========================================================================= */}
        {step === 4 && (
          <div className="modal-step-body text-center py-4">
            <div className="confirmed-icon-circle mx-auto mb-3">
              <CheckCircle2 size={42} className="text-emerald-600" />
            </div>

            <span className="badge-pill badge-green mb-2">BOOKING CONFIRMED & DISPATCHED</span>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-1">You're All Set!</h3>
            <p className="text-xs text-slate-500 mb-4">
              Booking details and real-time live tracking link sent via SMS & WhatsApp.
            </p>

            <div className="confirmed-receipt-card text-left">
              <div className="receipt-header">
                <span className="text-xs text-slate-400 font-bold uppercase">Booking Reference ID</span>
                <strong className="font-mono text-base text-sky-700">{confirmedBookingId}</strong>
              </div>

              <div className="receipt-body-grid">
                <div>
                  <span className="text-xs text-slate-400 block">Service</span>
                  <strong className="text-sm text-slate-800">{serviceTitle}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Date & Time</span>
                  <strong className="text-sm text-emerald-700">{selectedDate}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Patient Name</span>
                  <span className="text-sm text-slate-700">{patientName}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Status</span>
                  <span className="badge-pill badge-teal">Live Tracking Active</span>
                </div>
              </div>
            </div>

            <div className="confirmed-actions-row mt-4">
              <button
                onClick={() => {
                  soundFx.playSoftClick();
                  alert(`Booking Receipt for ${confirmedBookingId} downloaded.`);
                }}
                className="btn-receipt-action"
              >
                <Download size={15} />
                <span>Download Slip</span>
              </button>

              <button
                onClick={() => {
                  soundFx.playSoftClick();
                  alert(`Added appointment ${selectedDate} to Google Calendar.`);
                }}
                className="btn-receipt-action"
              >
                <Calendar size={15} />
                <span>Add to Calendar</span>
              </button>

              <button onClick={onClose} className="btn-modal-confirm">
                Back to Platform
              </button>
            </div>
          </div>
        )}

        {/* Modal Navigation Buttons for Steps 1-3 */}
        {step < 4 && (
          <div className="modal-footer-row">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-modal-cancel"
              >
                Back
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="btn-modal-cancel"
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              onClick={handleNextStep}
              className="btn-modal-confirm"
            >
              <span>{step === 3 ? 'Confirm & Book Now' : 'Proceed'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
