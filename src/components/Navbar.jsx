import React, { useState } from 'react';
import {
  Heart,
  Search,
  MapPin,
  ShoppingCart,
  User,
  AlertTriangle,
  Bell,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Building2,
  Stethoscope,
  Pill,
  Microscope,
  HeartHandshake,
  Accessibility,
  FolderHeart,
  Users,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar({
  activeNav,
  setActiveNav,
  onOpenEmergency,
  onOpenSearch,
  onOpenCart,
  cartCount = 0,
  selectedCity,
  selectedArea,
  onOpenLocationModal,
  onOpenUserModal,
  onOpenBookingModal,
  currentUserRole = 'patient',
  onSwitchUserRole
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', section: 'hero' },
    { id: 'find-care', label: 'Find Care', section: 'find-care' },
    { id: 'emergency', label: 'Emergency', section: 'emergency', badge: '24/7' },
    { id: 'doctors', label: 'Doctors', section: 'doctors' },
    { id: 'diagnostics', label: 'Diagnostics', section: 'diagnostics' },
    { id: 'mednest-care', label: 'Home Care', section: 'mednest-care', highlight: true },
    { id: 'equipment', label: 'Equipment', section: 'equipment' },
    { id: 'pharmacy', label: 'Medicines', section: 'pharmacy' },
    { id: 'health-vault', label: 'My Health', section: 'health-vault' },
    { id: 'family', label: 'Family', section: 'family' },
    { id: 'provider-portal', label: 'Providers', section: 'provider-portal', roleTag: 'Partner' }
  ];

  const handleNavClick = (navItem) => {
    soundFx.playSoftClick();
    setActiveNav(navItem.id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to section if on home view
    const elem = document.getElementById(navItem.section);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleEmergencyClick = () => {
    soundFx.playStageChime(700);
    if (onOpenEmergency) onOpenEmergency();
    const elem = document.getElementById('emergency');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="mednest-header-sticky">
      {/* Top Emergency & Trust Alert Ribbon */}
      <div className="mednest-top-ribbon">
        <div className="container ribbon-inner">
          <div className="ribbon-left">
            <span className="ribbon-badge">
              <span className="pulse-dot-green"></span>
              LIVE COORDINATION NETWORK
            </span>
            <span className="ribbon-text">
              Connecting 42+ NABH Hospitals, 320+ Doctors & 65+ ALS Ambulances
            </span>
          </div>
          <div className="ribbon-right">
            <span className="ribbon-helpline">
              <AlertTriangle size={13} className="text-amber-500" />
              24/7 National Emergency Hotline: <strong>112 / 1800-MED-NEST</strong>
            </span>
            <div className="role-pill-switch" onClick={onSwitchUserRole} title="Switch view persona">
              <span className="role-indicator">Role:</span>
              <strong>{currentUserRole === 'patient' ? '👤 Patient View' : currentUserRole === 'family' ? '👨‍👩‍👧 Family View' : '🏥 Provider View'}</strong>
              <span className="switch-hint">Switch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="mednest-main-navbar">
        <div className="container nav-content-wrapper">
          {/* Logo & Brand Identity */}
          <div className="brand-logo-container" onClick={() => handleNavClick({ id: 'home', section: 'hero' })}>
            <div className="brand-emblem">
              <div className="emblem-cross">
                <Heart size={20} className="emblem-heart" />
              </div>
              <div className="emblem-nest-rings">
                <div className="ring-1"></div>
                <div className="ring-2"></div>
              </div>
            </div>
            <div className="brand-text-block">
              <div className="brand-title">
                MED<span className="brand-accent">NEST</span>
              </div>
              <div className="brand-tagline">Healthcare, Connected.</div>
            </div>
          </div>

          {/* Location Selector Pill */}
          <button 
            className="nav-location-pill"
            onClick={onOpenLocationModal}
            title="Change City & Pincode"
          >
            <MapPin size={16} className="text-sky-600 location-pin-icon" />
            <div className="location-text">
              <span className="location-label">Location</span>
              <span className="location-value">{selectedArea || selectedCity?.name || 'Bengaluru'}</span>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav-links">
            {navLinks.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link-btn ${isActive ? 'nav-active' : ''} ${item.highlight ? 'nav-highlight' : ''}`}
                >
                  {item.label}
                  {item.badge && <span className="nav-mini-badge badge-emergency">{item.badge}</span>}
                  {item.highlight && <span className="nav-mini-badge badge-differentiator">Care</span>}
                </button>
              );
            })}
          </div>

          {/* Right Action Icons & Emergency CTA */}
          <div className="nav-right-actions">
            {/* Global Search Trigger */}
            <button 
              className="action-icon-btn" 
              onClick={onOpenSearch} 
              title="Search Doctors, Hospitals, Tests, Medicines (Ctrl+K)"
            >
              <Search size={18} />
            </button>

            {/* Notifications Trigger */}
            <div className="notifications-dropdown-rel">
              <button 
                className="action-icon-btn notif-btn" 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                title="Notifications"
              >
                <Bell size={18} />
                <span className="notif-badge">3</span>
              </button>

              {notificationsOpen && (
                <div className="notifications-popover-card">
                  <div className="notif-header">
                    <h4>Notifications</h4>
                    <span className="text-xs text-sky-600 font-semibold">Mark all read</span>
                  </div>
                  <div className="notif-list">
                    <div className="notif-item unread">
                      <span className="notif-dot"></span>
                      <div>
                        <p className="notif-title">Nurse Visit Confirmed</p>
                        <p className="notif-desc">Sister Mary arriving tomorrow at 10:00 AM</p>
                        <span className="notif-time">10 mins ago</span>
                      </div>
                    </div>
                    <div className="notif-item">
                      <span className="notif-dot gray"></span>
                      <div>
                        <p className="notif-title">Lipid Profile Report Ready</p>
                        <p className="notif-desc">Metropolis Labs uploaded report to Health Vault</p>
                        <span className="notif-time">2 hours ago</span>
                      </div>
                    </div>
                    <div className="notif-item">
                      <span className="notif-dot gray"></span>
                      <div>
                        <p className="notif-title">Medicine Refill Reminder</p>
                        <p className="notif-desc">Telma 40 refill due in 3 days</p>
                        <span className="notif-time">5 hours ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="notif-footer" onClick={() => { setNotificationsOpen(false); onOpenUserModal(); }}>
                    View Full Health Activity
                  </div>
                </div>
              )}
            </div>

            {/* Pharmacy Cart Trigger */}
            <button 
              className="action-icon-btn cart-btn" 
              onClick={onOpenCart} 
              title="Pharmacy Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* User Account / Profile Trigger */}
            <button 
              className="nav-user-profile-btn" 
              onClick={onOpenUserModal}
              title="Patient & Account Dashboard"
            >
              <div className="user-avatar-circle">
                <User size={16} />
              </div>
              <span className="user-name-text">
                {currentUserRole === 'patient' ? 'Rahul S.' : currentUserRole === 'family' ? 'Priya S.' : 'Dr. Rajesh'}
              </span>
            </button>

            {/* Prominent Emergency Button */}
            <button 
              className="nav-emergency-btn" 
              onClick={handleEmergencyClick}
              title="Instant 24/7 Emergency Coordination"
            >
              <span className="emergency-pulse-ring"></span>
              <AlertTriangle size={17} className="emergency-icon-svg" />
              <span>Emergency Help</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button 
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-location-row" onClick={() => { setMobileMenuOpen(false); onOpenLocationModal(); }}>
              <MapPin size={16} className="text-sky-600" />
              <span>Location: <strong>{selectedArea || selectedCity?.name || 'Bengaluru'}</strong> (Change)</span>
            </div>
            
            <div className="mobile-nav-links-grid">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`mobile-nav-item ${activeNav === item.id ? 'mobile-active' : ''}`}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="badge-pill badge-red">{item.badge}</span>}
                  {item.highlight && <span className="badge-pill badge-green">Care</span>}
                </button>
              ))}
            </div>

            <div className="mobile-drawer-bottom">
              <button className="mobile-emergency-full-btn" onClick={() => { setMobileMenuOpen(false); handleEmergencyClick(); }}>
                <AlertTriangle size={18} />
                <span>Emergency Help (24/7 Coordination)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
