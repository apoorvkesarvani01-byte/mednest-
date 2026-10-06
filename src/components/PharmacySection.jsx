import React, { useState } from 'react';
import {
  Pill,
  Search,
  Upload,
  Clock,
  MapPin,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  ArrowRight,
  Info,
  Building
} from 'lucide-react';
import { MEDICINES_DATA } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function PharmacySection({
  onOpenPrescriptionModal,
  onOpenRefillModal,
  onOpenLocationMap,
  onAddToCart,
  cartItems = [],
  onOpenCart
}) {
  const [searchMedicine, setSearchMedicine] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cardiovascular / Blood Pressure', 'Antibiotics', 'Gastroenterology / Antacid', 'Diabetes Care', 'Pain & Fever / Analgesic', 'Vitamins & Supplements', 'Medical Devices & Diagnostics'];

  const filteredMeds = MEDICINES_DATA.filter((med) => {
    const matchesCat = selectedCategory === 'All' || med.category === selectedCategory;
    const matchesSearch = searchMedicine === '' ||
      med.name.toLowerCase().includes(searchMedicine.toLowerCase()) ||
      med.brand.toLowerCase().includes(searchMedicine.toLowerCase()) ||
      med.composition.toLowerCase().includes(searchMedicine.toLowerCase());

    return matchesCat && matchesSearch;
  });

  const handleAdd = (med) => {
    soundFx.playSoftClick();
    if (onAddToCart) {
      onAddToCart(med);
    }
  };

  return (
    <section id="pharmacy" className="mednest-pharmacy-section">
      <div className="container">
        {/* Section Header */}
        <div className="pharmacy-header-banner">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-green">LICENSED PHARMACY NETWORK</span>
              <span className="text-xs text-slate-500 font-semibold">• 100% Genuine Medications</span>
            </div>
            <h2 className="section-title">Medicines & Prescription Support</h2>
            <p className="section-subtitle">
              Order authentic prescription & OTC medicines fulfilled directly by verified licensed neighborhood pharmacies with scheduled doorstep delivery.
            </p>
          </div>

          <button 
            type="button"
            onClick={onOpenPrescriptionModal}
            className="btn-upload-prescription-large"
          >
            <Upload size={18} />
            <span>Upload Prescription</span>
            <span className="btn-sub-note">Get verified & delivered in 2h</span>
          </button>
        </div>

        {/* 4 Quick Pharmacy Feature Action Cards */}
        <div className="pharmacy-features-grid">
          <div 
            onClick={onOpenPrescriptionModal}
            className="pharm-feature-card cursor-pointer"
          >
            <div className="feature-icon-box bg-emerald-50 text-emerald-600">
              <Upload size={22} />
            </div>
            <div className="feature-info">
              <h4>Upload Prescription</h4>
              <p>Instant digital scan & pharmacist verification queue.</p>
            </div>
            <ArrowRight size={16} className="text-slate-400" />
          </div>

          <div 
            onClick={() => {
              const elem = document.getElementById('med-catalog-search');
              if (elem) elem.focus();
            }}
            className="pharm-feature-card cursor-pointer"
          >
            <div className="feature-icon-box bg-sky-50 text-sky-600">
              <Search size={22} />
            </div>
            <div className="feature-info">
              <h4>Search Medicines</h4>
              <p>Search 15,000+ generic and branded medicines by salt.</p>
            </div>
            <ArrowRight size={16} className="text-slate-400" />
          </div>

          <div 
            onClick={onOpenRefillModal}
            className="pharm-feature-card cursor-pointer"
          >
            <div className="feature-icon-box bg-purple-50 text-purple-600">
              <Clock size={22} />
            </div>
            <div className="feature-info">
              <h4>Refill Reminder</h4>
              <p>Automated 30-day chronic medicine refill reminders.</p>
            </div>
            <ArrowRight size={16} className="text-slate-400" />
          </div>

          <div 
            onClick={onOpenLocationMap}
            className="pharm-feature-card cursor-pointer"
          >
            <div className="feature-icon-box bg-amber-50 text-amber-600">
              <MapPin size={22} />
            </div>
            <div className="feature-info">
              <h4>Nearby 24/7 Pharmacy</h4>
              <p>Locate accredited open pharmacies in your neighborhood.</p>
            </div>
            <ArrowRight size={16} className="text-slate-400" />
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="pharmacy-catalog-filter-card">
          <div className="pharm-search-input-wrap">
            <Search size={20} className="text-slate-400" />
            <input
              id="med-catalog-search"
              type="text"
              placeholder="Search by medicine name, brand, or salt composition (e.g. Telmisartan, Dolo, Augmentin, BP Monitor)..."
              value={searchMedicine}
              onChange={(e) => setSearchMedicine(e.target.value)}
              className="pharm-search-input"
            />
          </div>

          <div className="pharm-cat-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`cat-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Medicine Product Grid */}
        <div className="pharmacy-products-grid">
          {filteredMeds.map((med) => {
            const inCart = cartItems.find((item) => item.id === med.id);
            return (
              <div key={med.id} className="med-product-card">
                <div className="med-prod-img-box">
                  <img src={med.image} alt={med.name} className="med-prod-img" />
                  <span className={`rx-badge ${med.isRx ? 'badge-rx-req' : 'badge-otc-safe'}`}>
                    {med.isRx ? '🔴 Prescription Required (Rx)' : '🟢 Over The Counter (OTC)'}
                  </span>
                </div>

                <div className="med-prod-body">
                  <span className="med-cat-mini">{med.category}</span>
                  <h3 className="med-prod-name">{med.name}</h3>
                  <p className="med-brand-name">{med.brand}</p>
                  
                  <div className="med-comp-box">
                    <span className="text-xs text-slate-500 block">Active Salt:</span>
                    <span className="text-xs font-semibold text-slate-800">{med.composition}</span>
                  </div>

                  <p className="med-partner-line">
                    <Building size={12} className="inline mr-1 text-slate-400" />
                    Fulfilled by: <strong>{med.verifiedPartner}</strong>
                  </p>

                  <div className="med-prod-price-row">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="prod-price">₹{med.price}</span>
                        <span className="prod-mrp">₹{med.mrp}</span>
                        <span className="prod-disc">{med.discount}</span>
                      </div>
                      <span className="text-xs text-slate-400">{med.packSize}</span>
                    </div>

                    <span className="delivery-time-tag">⚡ {med.deliveryTime}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAdd(med)}
                    className={`btn-add-to-cart ${inCart ? 'in-cart' : ''}`}
                  >
                    <ShoppingCart size={15} />
                    <span>{inCart ? `In Cart (${inCart.quantity})` : 'Add to Cart'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Mandatory Notice for Pharmacy */}
        <div className="pharmacy-compliance-notice-card">
          <div className="flex items-start gap-3">
            <Info size={22} className="text-sky-700 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-950 text-sm">Strict Compliance & Safe Dispensing Policy</h4>
              <p className="text-xs text-sky-800 mt-1 leading-relaxed">
                <strong>MEDNEST is a healthcare coordination platform and does NOT recommend, change, substitute, or prescribe medicines.</strong> All prescription drugs strictly require a valid digital or physical prescription authored by a registered medical practitioner. Prescription verification and dispensing is handled exclusively by licensed partner pharmacies under the Drugs and Cosmetics Act & Pharmacy Practice Regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
