import React, { useState } from 'react';
import {
  HeartHandshake,
  Activity,
  Accessibility,
  Pill,
  Microscope,
  Stethoscope,
  BellRing,
  LineChart,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight,
  HelpCircle,
  TrendingUp,
  Layers
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function MednestCareSection({
  onOpenBookingModal,
  onOpenFamilyDashboard,
  onOpenHealthVault,
  onOpenRecoveryPlanner
}) {
  const [selectedRecoveryPreset, setSelectedRecoveryPreset] = useState('knee-replacement');

  const recoveryPackages = [
    {
      id: 'knee-replacement',
      title: 'Total Knee / Joint Replacement Recovery',
      duration: '30-45 Days Care Plan',
      tag: 'Orthopedic Protocol',
      services: ['Daily Home Physiotherapist (30 Days)', 'Motorized Low-Height Hospital Bed', 'Walker & Commode Chair', 'Post-Op Suture Dressing Nurse', 'Pain & Mobility Tracking on App'],
      costEstimate: '₹14,500 / month package',
      badgeColor: 'badge-blue'
    },
    {
      id: 'cardiac-postop',
      title: 'Post-Cardiac Bypass / Angioplasty Care',
      duration: '60 Days Monitored Plan',
      tag: 'Cardiac Protocol',
      services: ['12h ICU Trained Nurse (Vitals & IV)', '5L Medical Oxygen Concentrator', 'Automated BP, SpO2 & ECG Sync', 'Follow-up Cardiology Video Consults', 'Family Real-Time Vitals Alert'],
      costEstimate: '₹28,000 / month package',
      badgeColor: 'badge-red'
    },
    {
      id: 'elderly-mobility',
      title: 'Elderly Assisted Living & Stroke Recovery',
      duration: 'Continuous Home Care',
      tag: 'Geriatric & Neuro Protocol',
      services: ['24h Dedicated Elderly Caregiver', 'Foldable Wheelchair & Anti-Bedsore Mattress', 'Neuro-Physiotherapist (Alternate Days)', 'Monthly Medicine Refill Delivery', 'Multi-Family Access Dashboard'],
      costEstimate: '₹32,500 / month package',
      badgeColor: 'badge-purple'
    }
  ];

  const careServices = [
    {
      id: 'nurse',
      title: 'Nurse / Caregiver',
      icon: HeartHandshake,
      color: '#db2777',
      bgColor: '#fce7f3',
      headline: 'Verified In-Home Clinical Nursing',
      desc: 'Book B.Sc & GNM certified nurses for post-operative recovery, ICU transitions, wound care, IV therapy, and catheter care.',
      actionLabel: 'Book Home Nurse',
      category: 'homecare'
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      icon: Activity,
      color: '#059669',
      bgColor: '#d1fae5',
      headline: 'Targeted Home Rehabilitation',
      desc: 'Certified physiotherapists visiting your home for joint replacement recovery, post-stroke mobilization, and spine therapy.',
      actionLabel: 'Book Physio Session',
      category: 'homecare'
    },
    {
      id: 'equipment',
      title: 'Equipment Rental',
      icon: Accessibility,
      color: '#d97706',
      bgColor: '#fef3c7',
      headline: 'Medical Grade Sanitized Devices',
      desc: 'Rent motorized ICU beds, 5L oxygen concentrators, BiPAP machines, wheelchairs, suction pumps with doorstep installation.',
      actionLabel: 'Rent Equipment',
      category: 'equipment'
    },
    {
      id: 'medicines',
      title: 'Medicine Support',
      icon: Pill,
      color: '#0284c7',
      bgColor: '#e0f2fe',
      headline: 'Automated Refill Reminders',
      desc: 'Never miss a dose. Schedule monthly prescription deliveries and receive smart adherence alerts on your smartphone.',
      actionLabel: 'Manage Medicines',
      category: 'pharmacy'
    },
    {
      id: 'follow-tests',
      title: 'Follow-up Tests',
      icon: Microscope,
      color: '#7c3aed',
      bgColor: '#ede9fe',
      headline: 'Home Sample Collection',
      desc: 'Schedule required post-discharge blood tests (CBC, ESR, CRP, Kidney, Liver) at home with automated results upload to Health Vault.',
      actionLabel: 'Schedule Lab Test',
      category: 'diagnostics'
    },
    {
      id: 'follow-doc',
      title: 'Follow-up Doctor',
      icon: Stethoscope,
      color: '#0d9488',
      bgColor: '#ccfbf1',
      headline: 'Post-Discharge Consultations',
      desc: 'Seamless follow-up appointments with your treating surgeon or hospital doctor via video call or priority hospital OPD.',
      actionLabel: 'Book Doctor Follow-up',
      category: 'doctors'
    },
    {
      id: 'reminders',
      title: 'Recovery Reminders',
      icon: BellRing,
      color: '#e11d48',
      bgColor: '#ffe4e6',
      headline: 'Smart Timing Notifications',
      desc: 'Automated WhatsApp, SMS and app alerts for medication doses, doctor visits, physiotherapy exercises, and daily vitals logging.',
      actionLabel: 'Set Reminders',
      category: 'reminders'
    },
    {
      id: 'tracking',
      title: 'Recovery Tracking',
      icon: LineChart,
      color: '#4f46e5',
      bgColor: '#e0e7ff',
      headline: 'Milestone & Vitals Log',
      desc: 'Monitor daily pain score (1-10), mobility distance, wound photo healing progression, and clinical vital sign charts.',
      actionLabel: 'View Recovery Chart',
      category: 'tracking'
    },
    {
      id: 'family',
      title: 'Family Dashboard',
      icon: Users,
      color: '#0284c7',
      bgColor: '#f0f9ff',
      headline: 'Real-Time Loved Ones Sync',
      desc: 'Grant secure permissions to permitted family members anywhere in the world to view recovery progress and nurse logs.',
      actionLabel: 'Open Family Portal',
      category: 'family'
    }
  ];

  const handleServiceClick = (serv) => {
    soundFx.playSoftClick();
    if (serv.category === 'family') {
      if (onOpenFamilyDashboard) onOpenFamilyDashboard();
      const elem = document.getElementById('family');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else if (serv.category === 'tracking' || serv.category === 'reminders') {
      if (onOpenHealthVault) onOpenHealthVault();
      const elem = document.getElementById('health-vault');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (onOpenBookingModal) {
        onOpenBookingModal({ name: `MEDNEST Care: ${serv.title}`, desc: serv.desc }, serv.category);
      }
    }
  };

  const handleCustomBundleBooking = (pkg) => {
    soundFx.playSuccessFanfare();
    if (onOpenBookingModal) {
      onOpenBookingModal({
        name: `MEDNEST Care Package: ${pkg.title}`,
        price: pkg.costEstimate,
        details: pkg.services.join(' • ')
      }, 'homecare');
    }
  };

  return (
    <section id="mednest-care" className="mednest-care-differentiator-section">
      <div className="care-bg-glow"></div>
      <div className="container">
        {/* Flagship Header Banner */}
        <div className="care-flagship-header">
          <div className="care-badge-highlight">
            <Sparkles size={16} className="text-emerald-600" />
            <span>MEDNEST FLAGSHIP INNOVATION</span>
            <span className="dot-sep">•</span>
            <span>POST-DISCHARGE CONTINUITY</span>
          </div>

          <h2 className="care-main-headline">
            Care Doesn't End at Discharge.
          </h2>

          <p className="care-main-subhead">
            <strong>MEDNEST Care</strong> helps patients continue their recovery safely at home with verified caregivers, medical equipment, and real-time family coordination.
          </p>
        </div>

        {/* 9 Comprehensive Care Service Modules Grid */}
        <div className="care-nine-modules-grid">
          {careServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="care-service-module-card"
                style={{ '--module-color': service.color }}
              >
                <div className="module-top-row">
                  <div
                    className="module-icon-wrap"
                    style={{ backgroundColor: service.bgColor, color: service.color }}
                  >
                    <Icon size={26} />
                  </div>
                  <span className="module-category-pill" style={{ color: service.color, backgroundColor: service.bgColor }}>
                    MEDNEST Care
                  </span>
                </div>

                <div className="module-content-wrap">
                  <h3 className="module-title">{service.title}</h3>
                  <h4 className="module-headline">{service.headline}</h4>
                  <p className="module-desc">{service.desc}</p>
                </div>

                <div className="module-footer-action">
                  <span className="module-action-link" style={{ color: service.color }}>
                    {service.actionLabel}
                  </span>
                  <div className="module-arrow-circle" style={{ backgroundColor: service.bgColor, color: service.color }}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Recovery Package Estimator / Bundler */}
        <div className="care-package-bundler-card">
          <div className="bundler-header">
            <div>
              <span className="badge-pill badge-green">TAILORED RECOVERY BUNDLES</span>
              <h3 className="bundler-title">Personalized Home Recovery Plans</h3>
              <p className="bundler-subtitle">
                Select your surgery or recovery condition to view recommended home medical support.
              </p>
            </div>

            <button 
              onClick={onOpenRecoveryPlanner}
              className="btn-custom-planner"
            >
              <Sparkles size={16} />
              <span>Launch Custom Recovery Planner</span>
            </button>
          </div>

          {/* Condition Tabs */}
          <div className="bundler-preset-tabs">
            {recoveryPackages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => { soundFx.playSoftClick(); setSelectedRecoveryPreset(pkg.id); }}
                className={`preset-tab-btn ${selectedRecoveryPreset === pkg.id ? 'active' : ''}`}
              >
                <span>{pkg.title}</span>
                <span className="text-xs opacity-75 font-normal">({pkg.duration})</span>
              </button>
            ))}
          </div>

          {/* Active Package Preview Box */}
          {(() => {
            const activePkg = recoveryPackages.find((p) => p.id === selectedRecoveryPreset) || recoveryPackages[0];
            return (
              <div className="active-bundle-preview-box">
                <div className="bundle-details-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`badge-pill ${activePkg.badgeColor}`}>{activePkg.tag}</span>
                    <span className="text-xs text-slate-500 font-semibold">• {activePkg.duration}</span>
                  </div>

                  <h4 className="bundle-name-title">{activePkg.title}</h4>

                  <div className="bundle-services-checklist">
                    {activePkg.services.map((serv, i) => (
                      <div key={i} className="bundle-check-item">
                        <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />
                        <span>{serv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bundle-pricing-right">
                  <span className="pricing-label">Estimated Care Bundle</span>
                  <div className="pricing-amount">{activePkg.costEstimate}</div>
                  <span className="pricing-note">Includes sanitization, setup & clinical supervision</span>

                  <button
                    onClick={() => handleCustomBundleBooking(activePkg)}
                    className="btn-book-bundle"
                  >
                    <Calendar size={16} />
                    <span>Book Recovery Package</span>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
