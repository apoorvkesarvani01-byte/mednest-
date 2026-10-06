import React, { useState } from 'react';
import {
  Stethoscope,
  Search,
  MapPin,
  Star,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Languages,
  Award,
  Video,
  Building,
  ArrowRight,
  Filter
} from 'lucide-react';
import { DOCTORS_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function DoctorDiscoverySection({
  onOpenBookingModal,
  onOpenLocationMap
}) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [selectedAvailability, setSelectedAvailability] = useState('All');
  const [searchDoctor, setSearchDoctor] = useState('');
  const [selectedDoctorProfile, setSelectedDoctorProfile] = useState(null);

  const specialties = ['All', 'Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Pulmonology', 'General Medicine'];
  const languages = ['All', 'English', 'Hindi', 'Kannada', 'Tamil', 'Telugu'];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    const matchesLanguage = selectedLanguage === 'All' || doc.languages.includes(selectedLanguage);
    const matchesAvailability = selectedAvailability === 'All' || (selectedAvailability === 'Today' && doc.availableToday);
    const matchesSearch = searchDoctor === '' || 
      doc.name.toLowerCase().includes(searchDoctor.toLowerCase()) || 
      doc.specialty.toLowerCase().includes(searchDoctor.toLowerCase()) ||
      doc.hospital.toLowerCase().includes(searchDoctor.toLowerCase());

    return matchesSpecialty && matchesLanguage && matchesAvailability && matchesSearch;
  });

  const handleBookDoctor = (doc, slot) => {
    soundFx.playSoftClick();
    if (onOpenBookingModal) {
      onOpenBookingModal({ ...doc, selectedSlot: slot || doc.nextSlot }, 'doctor');
    }
  };

  return (
    <section id="doctors" className="mednest-doctors-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="badge-pill badge-teal">SPECIALIST APPOINTMENTS</span>
            <span className="text-xs text-slate-500 font-semibold">• NMC Verified Doctors</span>
          </div>
          <h2 className="section-title">Find the Right Doctor</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Book in-clinic visits or instant video consultations with top certified medical specialists from leading hospital networks.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="doctor-filter-card">
          <div className="doctor-search-row">
            <div className="doc-search-box">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors by name, specialty or hospital (e.g. Dr. Rajesh, Cardiology, Fortis)..."
                value={searchDoctor}
                onChange={(e) => setSearchDoctor(e.target.value)}
                className="doc-search-input"
              />
            </div>

            {/* Quick Availability Filters */}
            <div className="avail-filters-row">
              <button
                type="button"
                onClick={() => setSelectedAvailability('All')}
                className={`avail-btn ${selectedAvailability === 'All' ? 'active' : ''}`}
              >
                All Days
              </button>
              <button
                type="button"
                onClick={() => setSelectedAvailability('Today')}
                className={`avail-btn ${selectedAvailability === 'Today' ? 'active' : ''}`}
              >
                <Clock size={13} className="text-emerald-600" />
                Available Today
              </button>
            </div>
          </div>

          {/* Specialty Pills */}
          <div className="specialty-chips-wrap">
            <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
              <Stethoscope size={14} /> Specialty:
            </span>
            <div className="specialty-pills-scroll">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  type="button"
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`spec-pill-btn ${selectedSpecialty === spec ? 'active' : ''}`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters: Language & Location */}
          <div className="secondary-filters-row">
            <div className="filter-group">
              <label className="text-xs font-semibold text-slate-500">Language:</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="filter-mini-select"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang === 'All' ? 'All Languages' : lang}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="text-xs font-semibold text-slate-500">Consultation Type:</label>
              <select className="filter-mini-select">
                <option value="both">In-Clinic & Video Consult</option>
                <option value="video">Video Consultation Only</option>
                <option value="clinic">In-Clinic Hospital Visit Only</option>
              </select>
            </div>

            <div className="filter-group ml-auto">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong>{filteredDoctors.length}</strong> Verified Specialists
              </span>
            </div>
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="doctors-cards-grid">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="doc-profile-card">
              <div className="doc-card-top">
                <div className="doc-avatar-box">
                  <img src={doc.avatar} alt={doc.name} className="doc-img" />
                  <div className="doc-verified-badge" title="National Medical Commission Verified">
                    <ShieldCheck size={16} className="text-white fill-emerald-600" />
                  </div>
                </div>

                <div className="doc-meta-block">
                  <div className="flex items-center justify-between">
                    <span className="badge-pill badge-blue">{doc.specialty}</span>
                    <div className="rating-pill">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span className="rating-score">{doc.rating}</span>
                      <span className="rating-count">({doc.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="doc-qual">{doc.qualification}</p>
                  <p className="doc-subspecialty">{doc.subSpecialty}</p>

                  <div className="doc-hospital-affiliation">
                    <Building size={13} className="text-slate-400" />
                    <span>{doc.hospital}</span>
                  </div>

                  <div className="doc-experience-row">
                    <Award size={13} className="text-amber-500" />
                    <span className="font-semibold text-slate-700">{doc.experience}</span>
                    <span className="bullet-sep">•</span>
                    <Languages size={13} className="text-slate-400" />
                    <span>{doc.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Doctor Slots Preview */}
              <div className="doc-slots-section">
                <div className="doc-slot-header">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-800">Available Slot: {doc.nextSlot}</span>
                  </div>
                  <span className="text-xs text-slate-400">Instant Confirmation</span>
                </div>

                <div className="slots-pills-container">
                  {doc.slots.map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => handleBookDoctor(doc, slot)}
                      className="slot-picker-pill"
                      title="Click to select this slot"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consultation Fee & Actions */}
              <div className="doc-card-bottom-bar">
                <div className="doc-fee-box">
                  <span className="fee-title">Consultation Fee</span>
                  <div className="fee-numbers">
                    <span className="fee-disc">₹{doc.discountFee}</span>
                    <span className="fee-original">₹{doc.consultFee}</span>
                  </div>
                </div>

                <div className="doc-card-btns">
                  <button 
                    onClick={() => setSelectedDoctorProfile(doc)}
                    className="btn-doc-profile"
                  >
                    View Profile
                  </button>
                  <button 
                    onClick={() => handleBookDoctor(doc)}
                    className="btn-doc-book"
                  >
                    <Calendar size={15} />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Doctor Full Profile Drawer/Modal */}
        {selectedDoctorProfile && (
          <div className="mednest-modal-overlay" onClick={() => setSelectedDoctorProfile(null)}>
            <div className="doc-profile-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top-bar">
                <div className="flex items-center gap-2">
                  <span className="badge-pill badge-teal">VERIFIED PHYSICIAN DOSSIER</span>
                  <span className="text-xs text-slate-400">NMC Reg #KA-2012-7781</span>
                </div>
                <button onClick={() => setSelectedDoctorProfile(null)} className="close-btn">×</button>
              </div>

              <div className="modal-profile-header">
                <img src={selectedDoctorProfile.avatar} alt={selectedDoctorProfile.name} className="modal-doc-avatar" />
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{selectedDoctorProfile.name}</h3>
                  <p className="text-sm text-sky-700 font-semibold">{selectedDoctorProfile.qualification}</p>
                  <p className="text-xs text-slate-600 mt-1">{selectedDoctorProfile.subSpecialty} • {selectedDoctorProfile.hospital}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="rating-pill">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span className="font-bold">{selectedDoctorProfile.rating}</span>
                      <span>({selectedDoctorProfile.reviewCount} verified reviews)</span>
                    </div>
                    <span className="badge-pill badge-green">{selectedDoctorProfile.experience}</span>
                  </div>
                </div>
              </div>

              <div className="modal-profile-body">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">About Doctor & Clinical Expertise</h4>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{selectedDoctorProfile.about}</p>

                <div className="info-box-gray">
                  <h5 className="text-xs font-bold text-slate-800 mb-1">MEDNEST Continuity Guarantee</h5>
                  <p className="text-xs text-slate-600">All digital prescriptions, lab orders, and follow-up schedules from this consultation automatically sync to your secure <strong>Personal Health Vault</strong> and <strong>Recovery Reminders</strong>.</p>
                </div>
              </div>

              <div className="modal-footer-row">
                <button onClick={() => setSelectedDoctorProfile(null)} className="btn-modal-cancel">
                  Close
                </button>
                <button 
                  onClick={() => {
                    const d = selectedDoctorProfile;
                    setSelectedDoctorProfile(null);
                    handleBookDoctor(d);
                  }}
                  className="btn-modal-confirm"
                >
                  <Calendar size={16} />
                  <span>Book for ₹{selectedDoctorProfile.discountFee}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
