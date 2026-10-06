import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Building2,
  Stethoscope,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  Ambulance,
  Droplet,
  ArrowRight,
  Sparkles,
  X,
  Clock
} from 'lucide-react';
import {
  HOSPITALS_DATA,
  DOCTORS_DATA,
  DIAGNOSTICS_DATA,
  MEDICINES_DATA,
  HOME_CARE_SERVICES,
  EQUIPMENT_DATA
} from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function GlobalSearchModal({
  isOpen,
  onClose,
  onSelectItem
}) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const sampleSearches = [
    'Hospital near me',
    'Cardiologist',
    'O+ blood',
    'Ambulance',
    'CBC test',
    'Nurse for elderly care',
    'Wheelchair rental',
    'Physiotherapy at home',
    'Telmisartan 40mg'
  ];

  // Grouped search results
  const doctorsMatches = DOCTORS_DATA.filter((d) =>
    query && (d.name.toLowerCase().includes(query.toLowerCase()) || d.specialty.toLowerCase().includes(query.toLowerCase()))
  );

  const hospitalsMatches = HOSPITALS_DATA.filter((h) =>
    query && (h.name.toLowerCase().includes(query.toLowerCase()) || h.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase())))
  );

  const diagnosticsMatches = DIAGNOSTICS_DATA.filter((t) =>
    query && (t.name.toLowerCase().includes(query.toLowerCase()) || t.category.toLowerCase().includes(query.toLowerCase()))
  );

  const careMatches = HOME_CARE_SERVICES.filter((c) =>
    query && (c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()))
  );

  const equipmentMatches = EQUIPMENT_DATA.filter((e) =>
    query && (e.name.toLowerCase().includes(query.toLowerCase()) || e.category.toLowerCase().includes(query.toLowerCase()))
  );

  const medicinesMatches = MEDICINES_DATA.filter((m) =>
    query && (m.name.toLowerCase().includes(query.toLowerCase()) || m.composition.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelectResult = (item, type, sectionId) => {
    soundFx.playSoftClick();
    if (onSelectItem) onSelectItem(item, type);
    onClose();
    const elem = document.getElementById(sectionId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mednest-modal-overlay" onClick={onClose}>
      <div className="global-search-modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Omnibar */}
        <div className="global-search-input-header">
          <Search size={22} className="text-sky-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search doctors, hospitals, tests, nurses, equipment or medicines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="global-search-text-input"
          />
          {query && (
            <button onClick={() => setQuery('')} className="clear-search-btn">
              <X size={16} />
            </button>
          )}
          <span className="search-esc-tag">ESC</span>
        </div>

        <div className="global-search-results-area">
          {!query ? (
            /* Suggested Searches */
            <div className="search-popular-suggestions">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block flex items-center gap-1">
                <Sparkles size={13} className="text-sky-600" /> Popular Healthcare Queries
              </span>

              <div className="popular-queries-grid">
                {sampleSearches.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => { soundFx.playSoftClick(); setQuery(s); }}
                    className="popular-query-pill"
                  >
                    <Search size={13} className="text-slate-400" />
                    <span>{s}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Grouped Results Display */
            <div className="search-matched-groups">
              {doctorsMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <Stethoscope size={14} className="text-sky-600" /> Doctors & Specialists ({doctorsMatches.length})
                  </span>
                  {doctorsMatches.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => handleSelectResult(doc, 'doctor', 'doctors')}
                      className="search-result-row"
                    >
                      <img src={doc.avatar} alt={doc.name} className="result-avatar" />
                      <div>
                        <strong className="text-sm text-slate-900">{doc.name}</strong>
                        <span className="text-xs text-slate-500 block">{doc.specialty} • {doc.hospital}</span>
                      </div>
                      <span className="badge-pill badge-teal ml-auto">₹{doc.discountFee}</span>
                    </div>
                  ))}
                </div>
              )}

              {hospitalsMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <Building2 size={14} className="text-sky-600" /> Hospitals & Centers ({hospitalsMatches.length})
                  </span>
                  {hospitalsMatches.map((hosp) => (
                    <div
                      key={hosp.id}
                      onClick={() => handleSelectResult(hosp, 'hospital', 'find-care')}
                      className="search-result-row"
                    >
                      <div className="result-icon-box bg-sky-50 text-sky-600">
                        <Building2 size={16} />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900">{hosp.name}</strong>
                        <span className="text-xs text-slate-500 block">{hosp.address} • {hosp.icuBedsAvailable} ICU Beds</span>
                      </div>
                      <span className="badge-pill badge-green ml-auto">Open 24/7</span>
                    </div>
                  ))}
                </div>
              )}

              {diagnosticsMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <Microscope size={14} className="text-purple-600" /> Diagnostic Tests & Scans ({diagnosticsMatches.length})
                  </span>
                  {diagnosticsMatches.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => handleSelectResult(t, 'diagnostic', 'diagnostics')}
                      className="search-result-row"
                    >
                      <div className="result-icon-box bg-purple-50 text-purple-600">
                        <Microscope size={16} />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900">{t.name}</strong>
                        <span className="text-xs text-slate-500 block">{t.partner} • {t.reportTime}</span>
                      </div>
                      <span className="badge-pill badge-purple ml-auto">₹{t.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {careMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <HeartHandshake size={14} className="text-pink-600" /> Home Care & Nursing ({careMatches.length})
                  </span>
                  {careMatches.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => handleSelectResult(c, 'homecare', 'mednest-care')}
                      className="search-result-row"
                    >
                      <div className="result-icon-box bg-pink-50 text-pink-600">
                        <HeartHandshake size={16} />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900">{c.title}</strong>
                        <span className="text-xs text-slate-500 block">{c.category} • Certified Staff</span>
                      </div>
                      <span className="badge-pill badge-pink ml-auto">₹{c.pricePerDay}/day</span>
                    </div>
                  ))}
                </div>
              )}

              {equipmentMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <Accessibility size={14} className="text-amber-600" /> Equipment Rentals ({equipmentMatches.length})
                  </span>
                  {equipmentMatches.map((eq) => (
                    <div
                      key={eq.id}
                      onClick={() => handleSelectResult(eq, 'equipment', 'find-care')}
                      className="search-result-row"
                    >
                      <div className="result-icon-box bg-amber-50 text-amber-600">
                        <Accessibility size={16} />
                      </div>
                      <div>
                        <strong className="text-sm text-slate-900">{eq.name}</strong>
                        <span className="text-xs text-slate-500 block">{eq.category} • Sanitized</span>
                      </div>
                      <span className="badge-pill badge-orange ml-auto">₹{eq.rentalPricePerMonth}/mo</span>
                    </div>
                  ))}
                </div>
              )}

              {medicinesMatches.length > 0 && (
                <div className="result-group-block">
                  <span className="group-title">
                    <Pill size={14} className="text-emerald-600" /> Medicines & Pharmacy ({medicinesMatches.length})
                  </span>
                  {medicinesMatches.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => handleSelectResult(m, 'pharmacy', 'pharmacy')}
                      className="search-result-row"
                    >
                      <img src={m.image} alt={m.name} className="result-avatar" />
                      <div>
                        <strong className="text-sm text-slate-900">{m.name}</strong>
                        <span className="text-xs text-slate-500 block">{m.brand} • {m.composition}</span>
                      </div>
                      <span className="badge-pill badge-green ml-auto">₹{m.price}</span>
                    </div>
                  ))}
                </div>
              )}

              {doctorsMatches.length === 0 &&
               hospitalsMatches.length === 0 &&
               diagnosticsMatches.length === 0 &&
               careMatches.length === 0 &&
               equipmentMatches.length === 0 &&
               medicinesMatches.length === 0 && (
                <div className="text-center py-8">
                  <Search size={32} className="text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-700">No direct matches found for "{query}"</p>
                  <span className="text-xs text-slate-400">Try searching for generic terms like "Cardiology", "Bed", "Blood", or "Nurse"</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
