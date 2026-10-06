import React, { useState } from 'react';
import {
  Microscope,
  Search,
  Home,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileText,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { DIAGNOSTICS_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function DiagnosticsSection({
  onOpenBookingModal
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTest, setSearchTest] = useState('');
  const [selectedHomeOnly, setSelectedHomeOnly] = useState(false);

  const categories = ['All', 'Blood Tests', 'Health Packages', 'Radiology / Scans', 'Diabetes Care', 'Hormone Tests'];

  const quickPills = [
    { label: 'CBC Blood Test', term: 'CBC' },
    { label: 'Full Body Health Checkup', term: 'Full Body' },
    { label: 'MRI Brain & Spine', term: 'MRI' },
    { label: 'CT Scan Chest', term: 'CT' },
    { label: 'Lipid Profile', term: 'Lipid' },
    { label: 'HbA1c Diabetes', term: 'HbA1c' },
    { label: 'Ultrasound Abdomen', term: 'Ultrasound' },
    { label: 'Thyroid Care Panel', term: 'Thyroid' }
  ];

  const filteredTests = DIAGNOSTICS_DATA.filter((test) => {
    const matchesCategory = activeCategory === 'All' || test.category === activeCategory;
    const matchesHome = !selectedHomeOnly || test.homeCollection;
    const matchesSearch = searchTest === '' ||
      test.name.toLowerCase().includes(searchTest.toLowerCase()) ||
      test.partner.toLowerCase().includes(searchTest.toLowerCase()) ||
      test.category.toLowerCase().includes(searchTest.toLowerCase());

    return matchesCategory && matchesHome && matchesSearch;
  });

  const handleBookTest = (test) => {
    soundFx.playSoftClick();
    if (onOpenBookingModal) {
      onOpenBookingModal(test, 'diagnostic');
    }
  };

  return (
    <section id="diagnostics" className="mednest-diagnostics-section">
      <div className="container">
        {/* Section Header */}
        <div className="diagnostics-header-row">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-purple">NABL ACCREDITED LAB NETWORK</span>
              <span className="text-xs text-slate-500 font-semibold">• 100% Certified Phlebotomists</span>
            </div>
            <h2 className="section-title">Book Diagnostic Tests</h2>
            <p className="section-subtitle">
              Book routine pathology blood tests with <strong>Free Home Sample Collection</strong> or schedule advanced <strong>MRI, CT & Ultrasound</strong> at certified imaging centers.
            </p>
          </div>

          <div className="diag-trust-box">
            <div className="trust-mini-item">
              <Home size={16} className="text-emerald-600" />
              <span>Free Doorstep Sample Pickup</span>
            </div>
            <div className="trust-mini-item">
              <Clock size={16} className="text-sky-600" />
              <span>Smart Digital PDF Reports in 6h</span>
            </div>
            <div className="trust-mini-item">
              <ShieldCheck size={16} className="text-purple-600" />
              <span>Auto-Sync to Health Vault</span>
            </div>
          </div>
        </div>

        {/* Search & Quick Chips Bar */}
        <div className="diag-search-card">
          <div className="diag-search-input-wrap">
            <Search size={20} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search by test name, package or condition (e.g. CBC, Lipid Profile, MRI Brain, Thyroid)..."
              value={searchTest}
              onChange={(e) => setSearchTest(e.target.value)}
              className="diag-search-input"
            />
          </div>

          {/* Quick Filter Chips */}
          <div className="quick-tests-row">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Sparkles size={13} className="text-purple-600" /> Popular:
            </span>
            <div className="quick-chips-scroll">
              {quickPills.map((pill, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSearchTest(pill.term)}
                  className="quick-chip-btn"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="diag-categories-bar">
            <div className="cat-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cat-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <label className="home-collect-toggle-label">
              <input
                type="checkbox"
                checked={selectedHomeOnly}
                onChange={(e) => setSelectedHomeOnly(e.target.checked)}
                className="checkbox-custom"
              />
              <span className="text-xs font-semibold text-slate-700">🏠 Home Collection Only</span>
            </label>
          </div>
        </div>

        {/* Tests & Packages Grid */}
        <div className="diagnostics-cards-grid">
          {filteredTests.map((test) => (
            <div key={test.id} className="diag-package-card">
              <div className="diag-card-top-header">
                <div className="flex items-center justify-between">
                  <span className="badge-pill badge-purple">{test.category}</span>
                  {test.homeCollection ? (
                    <span className="badge-pill badge-green">
                      <Home size={12} /> Free Home Pickup
                    </span>
                  ) : (
                    <span className="badge-pill badge-blue">
                      <MapPin size={12} /> Center Visit
                    </span>
                  )}
                </div>

                <h3 className="diag-title">{test.name}</h3>
                <p className="diag-lab-name">Lab: <strong>{test.partner}</strong></p>
                {test.badge && <span className="diag-highlight-tag">{test.badge}</span>}
              </div>

              <div className="diag-card-middle-body">
                <p className="diag-summary">{test.description}</p>

                <div className="diag-specs-grid">
                  <div className="diag-spec-item">
                    <span className="spec-label">Parameters:</span>
                    <span className="spec-val font-bold text-slate-900">{test.parameters} Tests Included</span>
                  </div>
                  <div className="diag-spec-item">
                    <span className="spec-label">Report Ready:</span>
                    <span className="spec-val text-emerald-700 font-semibold">{test.reportTime}</span>
                  </div>
                  <div className="diag-spec-item">
                    <span className="spec-label">Fasting:</span>
                    <span className="spec-val text-slate-700">
                      {test.fastingRequired ? test.fastingDuration : 'No Fasting Needed'}
                    </span>
                  </div>
                  <div className="diag-spec-item">
                    <span className="spec-label">Next Available:</span>
                    <span className="spec-val text-sky-700 font-bold">{test.nextSlot}</span>
                  </div>
                </div>
              </div>

              <div className="diag-card-bottom-footer">
                <div className="diag-price-group">
                  <div className="flex items-baseline gap-2">
                    <span className="diag-current-price">₹{test.price}</span>
                    <span className="diag-original-price">₹{test.originalPrice}</span>
                  </div>
                  <span className="diag-discount-badge">{test.discount}</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookTest(test)}
                  className="btn-book-test"
                >
                  <Calendar size={15} />
                  <span>Book Test</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
