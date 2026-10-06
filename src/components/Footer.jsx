import React from 'react';
import {
  Heart,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Lock,
  Award,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Footer({
  onSelectNav,
  onOpenEmergency,
  onOpenPartnerModal
}) {
  const handleLinkClick = (sectionId) => {
    soundFx.playSoftClick();
    if (onSelectNav) onSelectNav(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="mednest-footer-root">
      {/* Pre-Footer Final Conversion Banner (Section 24) */}
      <div className="pre-footer-cta-banner">
        <div className="container">
          <div className="cta-banner-glass">
            <div className="cta-left">
              <span className="cta-tagline-badge">
                <Sparkles size={14} className="text-sky-600" /> ONE PLATFORM. EVERY HEALTHCARE NEED.
              </span>
              <h3 className="cta-title">
                Connected Care from Emergency to Full Recovery.
              </h3>
              <p className="cta-sub">
                Join thousands of patients, doctors, and healthcare providers seamlessly coordinating care on MEDNEST.
              </p>
            </div>

            <div className="cta-actions-group">
              <button
                onClick={() => handleLinkClick('hero')}
                className="btn-start-journey"
              >
                <span>Start Your Healthcare Journey</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="btn-partner-cta"
              >
                <span>Become a MEDNEST Partner</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="footer-main-container">
        <div className="container footer-grid-4col">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <div className="brand-logo-container mb-3" onClick={() => handleLinkClick('hero')}>
              <div className="brand-emblem">
                <div className="emblem-cross">
                  <Heart size={20} className="emblem-heart" />
                </div>
              </div>
              <div className="brand-text-block">
                <div className="brand-title">
                  MED<span className="brand-accent">NEST</span>
                </div>
                <div className="brand-tagline">Healthcare, Connected.</div>
              </div>
            </div>

            <p className="footer-brand-desc">
              India's premier healthcare continuity and coordination platform. Unifying emergency response, hospital discovery, verified consultations, and post-discharge home recovery into one seamless ecosystem.
            </p>

            <div className="footer-emergency-pill mt-4">
              <PhoneCall size={16} className="text-rose-500" />
              <div>
                <span className="text-xs text-slate-400 block">24/7 National Emergency Hotline</span>
                <strong className="text-sm text-slate-900 font-mono">112 / 1800-MED-NEST</strong>
              </div>
            </div>
          </div>

          {/* Column 1: Patient Services */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Patient Services</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleLinkClick('find-care')}>Find Care Marketplace</button></li>
              <li><button onClick={onOpenEmergency} className="text-rose-600 font-semibold">24/7 Emergency Hub</button></li>
              <li><button onClick={() => handleLinkClick('doctors')}>Find Doctors & Specialists</button></li>
              <li><button onClick={() => handleLinkClick('diagnostics')}>Book Diagnostic Tests (Home Pickup)</button></li>
              <li><button onClick={() => handleLinkClick('mednest-care')}>MEDNEST Care (Home Recovery)</button></li>
              <li><button onClick={() => handleLinkClick('find-care')}>Medical Equipment Rental</button></li>
              <li><button onClick={() => handleLinkClick('pharmacy')}>Medicines & Prescription Support</button></li>
              <li><button onClick={() => handleLinkClick('health-vault')}>My Health Vault (ABDM)</button></li>
              <li><button onClick={() => handleLinkClick('family')}>Family Care Dashboard</button></li>
            </ul>
          </div>

          {/* Column 2: Providers & Partners */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Healthcare Providers</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleLinkClick('provider-portal')}>Provider Portal Console</button></li>
              <li><button onClick={onOpenPartnerModal}>Hospital Network Onboarding</button></li>
              <li><button onClick={onOpenPartnerModal}>Doctor & Specialist Registration</button></li>
              <li><button onClick={onOpenPartnerModal}>Ambulance Fleet Partners</button></li>
              <li><button onClick={onOpenPartnerModal}>Blood Bank Network</button></li>
              <li><button onClick={onOpenPartnerModal}>Diagnostic Center Verification</button></li>
              <li><button onClick={onOpenPartnerModal}>Licensed Chemist Program</button></li>
              <li><button onClick={() => handleLinkClick('trust')}>Credential & Verification Standards</button></li>
            </ul>
          </div>

          {/* Column 3: Company & Compliance */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Company & Trust</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleLinkClick('trust')}>Built on Trust (7 Pillars)</button></li>
              <li><button onClick={() => handleLinkClick('patient-journey')}>Patient Journey Workflow</button></li>
              <li><button onClick={() => alert('MEDNEST Mission: Unifying Indian healthcare through trust, transparency, and clinical continuity.')}>About MEDNEST</button></li>
              <li><button onClick={() => alert('Contact MEDNEST: support@mednest.health • Koramangala 4th Block, Bengaluru')}>Contact & Escalation Desk</button></li>
              <li><button onClick={() => alert('Careers at MEDNEST: Engineering, Clinical Operations & Partner Alliances')}>Careers</button></li>
              <li><button onClick={() => alert('Privacy Policy: ABDM compliant, 256-bit encrypted personal health data with zero unauthorized sharing.')}>Privacy Policy</button></li>
              <li><button onClick={() => alert('Terms of Service: MEDNEST is a healthcare coordination platform and does not practice medicine directly.')}>Terms of Service</button></li>
              <li><button onClick={() => alert('Patient Consent Policy: Explicit digital authorization required before any clinical records are shared.')}>Patient Consent Charter</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mandatory Statutory Healthcare Disclaimer Strip (Section 21) */}
      <div className="footer-compliance-strip">
        <div className="container">
          <div className="compliance-inner-grid">
            <div className="compliance-icon-wrap">
              <AlertTriangle size={20} className="text-amber-500 flex-shrink-0" />
            </div>
            <div className="compliance-text">
              <h5 className="font-bold text-slate-800 text-xs">Statutory Safety & Coordination Notice:</h5>
              <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                <strong>MEDNEST is a healthcare coordination and discovery platform.</strong> MEDNEST does NOT diagnose medical conditions, prescribe medications, change medicine regimens, provide direct medical treatment, or replace emergency medical services (EMS). All consultations, diagnostic testing, surgical procedures, and prescription fulfillments are performed exclusively by independent, licensed healthcare practitioners and certified pharmacy partners. For life-threatening emergencies, please dial <strong>112 / 108</strong> or proceed immediately to the nearest hospital emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Security Badges Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-inner-row">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} MEDNEST Technologies Pvt. Ltd. All rights reserved. “Healthcare, Connected.”
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck size={13} className="text-emerald-600" /> ABDM Aligned
            </span>
            <span className="flex items-center gap-1">
              <Lock size={13} className="text-sky-600" /> 256-Bit Encrypted
            </span>
            <span className="flex items-center gap-1">
              <Award size={13} className="text-purple-600" /> ISO 27001 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
