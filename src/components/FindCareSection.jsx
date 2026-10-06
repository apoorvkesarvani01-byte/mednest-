import React, { useState } from 'react';
import {
  Building2,
  Stethoscope,
  Microscope,
  Pill,
  HeartHandshake,
  Accessibility,
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  PhoneCall,
  Navigation,
  Calendar,
  Eye,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2
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

export default function FindCareSection({
  activeTab = 'hospitals',
  onSelectTab,
  onOpenBookingModal,
  onOpenLocationMap,
  onSelectDoctor,
  onSelectDiagnostic,
  onSelectHomeCare,
  onSelectEquipment,
  onAddToCart
}) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCityFilter, setSelectedCityFilter] = useState('All Areas');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [detailsModalItem, setDetailsModalItem] = useState(null);

  const tabs = [
    { id: 'hospitals', label: 'Hospitals', icon: Building2, count: HOSPITALS_DATA.length },
    { id: 'doctors', label: 'Doctors', icon: Stethoscope, count: DOCTORS_DATA.length },
    { id: 'diagnostics', label: 'Diagnostics', icon: Microscope, count: DIAGNOSTICS_DATA.length },
    { id: 'pharmacies', label: 'Pharmacies', icon: Pill, count: MEDICINES_DATA.length },
    { id: 'homecare', label: 'Home Care', icon: HeartHandshake, count: HOME_CARE_SERVICES.length },
    { id: 'equipment', label: 'Equipment', icon: Accessibility, count: EQUIPMENT_DATA.length }
  ];

  const handleTabChange = (tabId) => {
    soundFx.playSoftClick();
    setCurrentTab(tabId);
    if (onSelectTab) onSelectTab(tabId);
  };

  const handleBookClick = (item, type) => {
    soundFx.playSoftClick();
    if (onOpenBookingModal) {
      onOpenBookingModal(item, type || currentTab);
    }
  };

  const handleNavigateClick = (item) => {
    soundFx.playSoftClick();
    if (onOpenLocationMap) {
      onOpenLocationMap(item);
    }
  };

  const handleViewDetails = (item) => {
    soundFx.playSoftClick();
    setDetailsModalItem(item);
  };

  return (
    <section id="find-care" className="mednest-find-care-section">
      <div className="container">
        {/* Section Header */}
        <div className="find-care-header-block">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge-pill badge-teal">HEALTHCARE DISCOVERY</span>
              <span className="text-xs text-slate-500 font-semibold">• 100% Verified Network</span>
            </div>
            <h2 className="section-title">Find Trusted Healthcare Services</h2>
            <p className="section-subtitle">
              Browse top-rated multi-specialty hospitals, verified doctors, diagnostic centers, licensed pharmacies, and home medical support.
            </p>
          </div>

          {/* Quick Search in section */}
          <div className="find-care-search-wrap">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${currentTab}... (e.g. Fortis, Cardiology, CBC, ICU Bed)`}
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="find-care-search-input"
            />
          </div>
        </div>

        {/* Marketplace Navigation Tabs */}
        <div className="marketplace-tabs-bar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`market-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                <span className="tab-count-badge">{tab.count}</span>
              </button>
            );
          })}
        </div>

        {/* Filter Toolbar */}
        <div className="marketplace-filter-toolbar">
          <div className="filter-left">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal size={14} /> Filters:
            </span>

            <select
              value={selectedCityFilter}
              onChange={(e) => setSelectedCityFilter(e.target.value)}
              className="filter-select-input"
            >
              <option value="All Areas">All Locations (Bengaluru)</option>
              <option value="Koramangala">Koramangala</option>
              <option value="Indiranagar">Indiranagar</option>
              <option value="Jayanagar">Jayanagar</option>
              <option value="Bannerghatta Road">Bannerghatta Road</option>
              <option value="Hebbal">Hebbal</option>
            </select>

            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="filter-select-input"
            >
              <option value="all">All Ratings</option>
              <option value="4.8">4.8★ & Above</option>
              <option value="4.9">4.9★ Top Rated</option>
            </select>
          </div>

          <div className="filter-right">
            <span className="text-xs text-slate-500 font-medium">
              Showing verified partners in Bengaluru
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB CONTENT: HOSPITALS */}
        {/* ========================================================================= */}
        {currentTab === 'hospitals' && (
          <div className="marketplace-grid">
            {HOSPITALS_DATA.map((hosp) => (
              <div key={hosp.id} className="market-card hospital-card">
                <div className="market-card-image-wrap">
                  <img src={hosp.image} alt={hosp.name} className="market-card-img" />
                  <div className="card-top-badges">
                    <span className="badge-pill badge-green">
                      <ShieldCheck size={13} /> {hosp.accreditation}
                    </span>
                    <span className="badge-pill badge-red">
                      {hosp.openStatus}
                    </span>
                  </div>
                </div>

                <div className="market-card-body">
                  <div className="market-card-header">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="card-item-name">{hosp.name}</h3>
                        {hosp.verified && (
                          <span className="verified-icon-chip" title="MEDNEST Physical Verification Completed">
                            <ShieldCheck size={16} className="text-emerald-600" />
                          </span>
                        )}
                      </div>
                      <p className="card-item-type">{hosp.type}</p>
                    </div>

                    <div className="rating-pill">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      <span className="rating-score">{hosp.rating}</span>
                      <span className="rating-count">({hosp.reviewCount})</span>
                    </div>
                  </div>

                  <div className="card-location-row">
                    <MapPin size={15} className="text-sky-600 flex-shrink-0" />
                    <span>{hosp.address}</span>
                    <span className="distance-tag">• {hosp.distance}</span>
                  </div>

                  <div className="card-services-pills">
                    {hosp.specialties.slice(0, 4).map((spec, i) => (
                      <span key={i} className="service-pill">{spec}</span>
                    ))}
                  </div>

                  <div className="card-availability-box">
                    <div className="avail-left">
                      <span className="avail-label">ICU Beds:</span>
                      <span className="avail-val text-emerald-700 font-bold">{hosp.icuBedsAvailable} Available</span>
                    </div>
                    <div className="avail-right">
                      <Clock size={13} className="text-slate-400" />
                      <span className="last-updated-text">{hosp.lastUpdated}</span>
                    </div>
                  </div>

                  {/* Action Buttons: View Details, Call, Book, Navigate */}
                  <div className="market-card-actions">
                    <button 
                      onClick={() => handleViewDetails(hosp)}
                      className="btn-card-secondary"
                      title="View Details"
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <a 
                      href={`tel:${hosp.emergencyHotline}`}
                      className="btn-card-secondary"
                      title="Direct Call"
                    >
                      <PhoneCall size={15} />
                      <span>Call</span>
                    </a>

                    <button 
                      onClick={() => handleNavigateClick(hosp)}
                      className="btn-card-secondary"
                      title="Get Directions"
                    >
                      <Navigation size={15} />
                      <span>Navigate</span>
                    </button>

                    <button 
                      onClick={() => handleBookClick(hosp, 'hospital')}
                      className="btn-card-primary"
                    >
                      <Calendar size={15} />
                      <span>Book OPD / Bed</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB CONTENT: DOCTORS */}
        {/* ========================================================================= */}
        {currentTab === 'doctors' && (
          <div className="marketplace-grid">
            {DOCTORS_DATA.map((doc) => (
              <div key={doc.id} className="market-card doctor-card">
                <div className="doctor-card-top-profile">
                  <div className="doctor-avatar-wrapper">
                    <img src={doc.avatar} alt={doc.name} className="doctor-avatar-img" />
                    {doc.verified && (
                      <span className="doc-verified-tick">
                        <CheckCircle2 size={16} className="fill-emerald-600 text-white" />
                      </span>
                    )}
                  </div>

                  <div className="doctor-profile-info">
                    <div className="flex items-center justify-between">
                      <span className="badge-pill badge-blue">{doc.specialty}</span>
                      <div className="rating-pill">
                        <Star size={13} className="fill-amber-400 text-amber-400" />
                        <span className="rating-score">{doc.rating}</span>
                        <span className="rating-count">({doc.reviewCount})</span>
                      </div>
                    </div>
                    <h3 className="doctor-name-title">{doc.name}</h3>
                    <p className="doctor-qual-text">{doc.qualification}</p>
                    <p className="doctor-exp-text"><strong>{doc.experience}</strong> • {doc.hospital}</p>
                  </div>
                </div>

                <div className="doctor-card-body">
                  <div className="doc-languages-row">
                    <span className="text-xs text-slate-500 font-medium">Languages:</span>
                    {doc.languages.map((l, i) => (
                      <span key={i} className="lang-tag">{l}</span>
                    ))}
                  </div>

                  <div className="doc-slot-availability">
                    <div className="slot-head">
                      <Clock size={14} className="text-emerald-600" />
                      <span className="font-semibold text-emerald-800 text-xs">Next Available: {doc.nextSlot}</span>
                    </div>
                    <div className="slot-chips-row">
                      {doc.slots.map((slot, i) => (
                        <span key={i} className="slot-time-chip">{slot}</span>
                      ))}
                    </div>
                  </div>

                  <div className="doc-fee-row">
                    <div>
                      <span className="fee-label">Consultation Fee</span>
                      <div className="fee-price-wrap">
                        <span className="fee-amount">₹{doc.discountFee}</span>
                        <span className="fee-mrp">₹{doc.consultFee}</span>
                      </div>
                    </div>

                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                      Free Follow-Up (7 Days)
                    </span>
                  </div>

                  <div className="market-card-actions">
                    <button 
                      onClick={() => handleViewDetails(doc)}
                      className="btn-card-secondary"
                    >
                      <Eye size={15} />
                      <span>Profile</span>
                    </button>

                    <button 
                      onClick={() => handleNavigateClick(doc)}
                      className="btn-card-secondary"
                    >
                      <Navigation size={15} />
                      <span>Clinic Map</span>
                    </button>

                    <button 
                      onClick={() => handleBookClick(doc, 'doctor')}
                      className="btn-card-primary"
                    >
                      <Calendar size={15} />
                      <span>Book Slot</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB CONTENT: DIAGNOSTICS */}
        {/* ========================================================================= */}
        {currentTab === 'diagnostics' && (
          <div className="marketplace-grid">
            {DIAGNOSTICS_DATA.map((diag) => (
              <div key={diag.id} className="market-card diagnostic-card">
                <div className="diagnostic-card-header">
                  <div className="flex items-center justify-between">
                    <span className="badge-pill badge-purple">{diag.category}</span>
                    <span className="badge-pill badge-green">
                      <ShieldCheck size={13} /> NABL Accredited
                    </span>
                  </div>
                  <h3 className="diag-test-name">{diag.name}</h3>
                  <p className="diag-partner-name">Lab: {diag.partner}</p>
                </div>

                <div className="diagnostic-card-body">
                  <p className="diag-description">{diag.description}</p>

                  <div className="diag-features-grid">
                    <div className="diag-feat-item">
                      <span className="feat-label">Home Collection:</span>
                      <span className="feat-val text-emerald-700 font-bold">
                        {diag.homeCollection ? '🏠 Free Home Sample' : '🏥 Center Visit Only'}
                      </span>
                    </div>
                    <div className="diag-feat-item">
                      <span className="feat-label">Turnaround Time:</span>
                      <span className="feat-val text-slate-700 font-semibold">{diag.reportTime}</span>
                    </div>
                  </div>

                  <div className="diag-price-row">
                    <div>
                      <span className="price-tag-big">₹{diag.price}</span>
                      <span className="mrp-tag">₹{diag.originalPrice}</span>
                      <span className="discount-pill">{diag.discount}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Next Slot:</span>
                      <span className="text-xs font-bold text-sky-700">{diag.nextSlot}</span>
                    </div>
                  </div>

                  <div className="market-card-actions">
                    <button 
                      onClick={() => handleViewDetails(diag)}
                      className="btn-card-secondary"
                    >
                      <Eye size={15} />
                      <span>Test Details</span>
                    </button>

                    <button 
                      onClick={() => handleBookClick(diag, 'diagnostic')}
                      className="btn-card-primary"
                    >
                      <Calendar size={15} />
                      <span>Book Test</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB CONTENT: PHARMACIES & MEDICINES */}
        {/* ========================================================================= */}
        {currentTab === 'pharmacies' && (
          <div className="marketplace-grid">
            {MEDICINES_DATA.map((med) => (
              <div key={med.id} className="market-card medicine-card">
                <div className="med-image-box">
                  <img src={med.image} alt={med.name} className="med-card-img" />
                  <span className={`med-type-badge ${med.isRx ? 'badge-rx' : 'badge-otc'}`}>
                    {med.type}
                  </span>
                </div>

                <div className="med-card-body">
                  <div className="med-info-block">
                    <span className="med-cat-tag">{med.category}</span>
                    <h3 className="med-name-title">{med.name}</h3>
                    <p className="med-brand-sub">{med.brand}</p>
                    <p className="med-comp-line">Composition: <strong>{med.composition}</strong></p>
                    <p className="med-partner-text">Fulfilled by: {med.verifiedPartner}</p>
                  </div>

                  <div className="med-price-delivery-row">
                    <div>
                      <span className="med-price-current">₹{med.price}</span>
                      <span className="med-price-mrp">₹{med.mrp}</span>
                      <span className="med-discount-tag">{med.discount}</span>
                    </div>
                    <span className="med-delivery-eta">⚡ {med.deliveryTime}</span>
                  </div>

                  <div className="market-card-actions">
                    <button 
                      onClick={() => {
                        soundFx.playSoftClick();
                        if (onAddToCart) onAddToCart(med);
                      }}
                      className="btn-card-primary full-width"
                    >
                      <Pill size={15} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB CONTENT: HOME CARE */}
        {/* ========================================================================= */}
        {currentTab === 'homecare' && (
          <div className="marketplace-grid">
            {HOME_CARE_SERVICES.map((care) => (
              <div key={care.id} className="market-card homecare-card">
                <div className="market-card-image-wrap">
                  <img src={care.image} alt={care.title} className="market-card-img" />
                  <div className="card-top-badges">
                    <span className="badge-pill badge-green">{care.badge}</span>
                  </div>
                </div>

                <div className="market-card-body">
                  <div className="flex items-center justify-between">
                    <span className="badge-pill badge-pink">{care.category}</span>
                    <div className="rating-pill">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span className="rating-score">{care.rating}</span>
                      <span className="rating-count">({care.reviewCount})</span>
                    </div>
                  </div>

                  <h3 className="care-card-title">{care.title}</h3>
                  <p className="care-desc-text">{care.description}</p>

                  <div className="care-includes-list">
                    <span className="includes-label">Includes in care plan:</span>
                    {care.includes.map((inc, i) => (
                      <div key={i} className="include-item">
                        <CheckCircle2 size={13} className="text-emerald-600 flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="care-price-row">
                    <div>
                      <span className="price-tag-big">₹{care.pricePerDay}</span>
                      <span className="text-xs text-slate-500"> / shift / day</span>
                    </div>
                    {care.pricePerMonth && (
                      <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">
                        Monthly: ₹{care.pricePerMonth.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <div className="market-card-actions">
                    <button 
                      onClick={() => handleViewDetails(care)}
                      className="btn-card-secondary"
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <button 
                      onClick={() => handleBookClick(care, 'homecare')}
                      className="btn-card-primary"
                    >
                      <HeartHandshake size={15} />
                      <span>Book Caregiver</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB CONTENT: EQUIPMENT RENTALS */}
        {/* ========================================================================= */}
        {currentTab === 'equipment' && (
          <div className="marketplace-grid">
            {EQUIPMENT_DATA.map((eq) => (
              <div key={eq.id} className="market-card equipment-card">
                <div className="market-card-image-wrap">
                  <img src={eq.image} alt={eq.name} className="market-card-img" />
                  <div className="card-top-badges">
                    <span className="badge-pill badge-green">
                      <ShieldCheck size={13} /> Sanitized & Certified
                    </span>
                    <span className="badge-pill badge-orange">{eq.badge}</span>
                  </div>
                </div>

                <div className="market-card-body">
                  <span className="badge-pill badge-purple">{eq.category}</span>
                  <h3 className="equip-card-title">{eq.name}</h3>
                  <p className="equip-desc-text">{eq.description}</p>

                  <div className="equip-features-box">
                    {eq.features.map((feat, i) => (
                      <div key={i} className="include-item">
                        <CheckCircle2 size={13} className="text-sky-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="equip-pricing-row">
                    <div className="rent-box">
                      <span className="rent-label">Rent:</span>
                      <span className="rent-price font-extrabold text-sky-700">₹{eq.rentalPricePerMonth.toLocaleString()}</span>
                      <span className="rent-sub">/ month</span>
                    </div>

                    <div className="buy-box">
                      <span className="buy-label">Buy:</span>
                      <span className="buy-price">₹{eq.buyPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="delivery-promise-line">
                    <Clock size={13} className="text-emerald-600" />
                    <span>{eq.delivery}</span>
                  </div>

                  <div className="market-card-actions">
                    <button 
                      onClick={() => handleViewDetails(eq)}
                      className="btn-card-secondary"
                    >
                      <Eye size={15} />
                      <span>Details</span>
                    </button>

                    <button 
                      onClick={() => handleBookClick(eq, 'equipment')}
                      className="btn-card-primary"
                    >
                      <Accessibility size={15} />
                      <span>Rent / Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Item Details Modal */}
        {detailsModalItem && (
          <div className="mednest-modal-overlay" onClick={() => setDetailsModalItem(null)}>
            <div className="details-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="details-modal-header">
                <div>
                  <span className="badge-pill badge-teal">VERIFIED PROVIDER PROFILE</span>
                  <h3 className="modal-title">{detailsModalItem.name || detailsModalItem.title}</h3>
                </div>
                <button onClick={() => setDetailsModalItem(null)} className="close-btn">×</button>
              </div>

              <div className="details-modal-body">
                <p className="text-slate-600 mb-4">{detailsModalItem.description || detailsModalItem.about}</p>
                
                {detailsModalItem.specialties && (
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Available Specialties</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {detailsModalItem.specialties.map((s, i) => (
                        <span key={i} className="service-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                {detailsModalItem.facilities && (
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Facilities & Infrastructure</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {detailsModalItem.facilities.map((f, i) => (
                        <span key={i} className="spec-tag">{f}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="provider-verification-stamp">
                  <ShieldCheck size={20} className="text-emerald-600" />
                  <div>
                    <span className="font-bold text-emerald-800 text-sm">MEDNEST Verified Credential Check</span>
                    <p className="text-xs text-emerald-700">Licensing, physical infrastructure, and clinical qualifications verified under National Health Guidelines.</p>
                  </div>
                </div>
              </div>

              <div className="details-modal-footer">
                <button onClick={() => setDetailsModalItem(null)} className="btn-modal-cancel">
                  Close
                </button>
                <button 
                  onClick={() => {
                    const item = detailsModalItem;
                    setDetailsModalItem(null);
                    handleBookClick(item);
                  }}
                  className="btn-modal-confirm"
                >
                  <Calendar size={16} />
                  <span>Proceed to Booking</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
