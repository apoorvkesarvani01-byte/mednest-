import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuickServiceCards from './components/QuickServiceCards';
import EmergencySection from './components/EmergencySection';
import FindCareSection from './components/FindCareSection';
import DoctorDiscoverySection from './components/DoctorDiscoverySection';
import DiagnosticsSection from './components/DiagnosticsSection';
import PharmacySection from './components/PharmacySection';
import MednestCareSection from './components/MednestCareSection';
import PatientJourneySection from './components/PatientJourneySection';
import HealthVaultSection from './components/HealthVaultSection';
import FamilyDashboardSection from './components/FamilyDashboardSection';
import ProviderPortalSection from './components/ProviderPortalSection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

// Modals & Interactive Drawers
import UniversalBookingModal from './components/UniversalBookingModal';
import CartDrawer from './components/CartDrawer';
import PrescriptionUploadModal from './components/PrescriptionUploadModal';
import RefillReminderModal from './components/RefillReminderModal';
import RecoveryPlannerModal from './components/RecoveryPlannerModal';
import LocationMapModal from './components/LocationMapModal';
import GlobalSearchModal from './components/GlobalSearchModal';
import UserAccountModal from './components/UserAccountModal';
import PartnerOnboardingModal from './components/PartnerOnboardingModal';
import MobileBottomNav from './components/MobileBottomNav';

import { MEDNEST_CITIES, MEDICINES_DATA } from './data/mednestPlatformData';
import { soundFx } from './utils/audio';

export default function App() {
  // Navigation & View State
  const [activeNav, setActiveNav] = useState('home');
  const [selectedCity, setSelectedCity] = useState(MEDNEST_CITIES[0]); // Bengaluru default
  const [selectedArea, setSelectedArea] = useState('Koramangala');
  const [currentUserRole, setCurrentUserRole] = useState('patient'); // 'patient', 'family', 'provider'

  // Cart State (Pre-populated with 1 demo essential medicine)
  const [cartItems, setCartItems] = useState([
    { ...MEDICINES_DATA[0], quantity: 1 } // Telma 40
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Universal Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialService, setBookingInitialService] = useState(null);
  const [bookingServiceType, setBookingServiceType] = useState('doctor');
  const [userBookings, setUserBookings] = useState([
    {
      id: 'MND-2026-9182',
      service: { name: 'Dr. Rajesh Kumar (Cardiology Consultation)' },
      serviceType: 'doctor',
      date: 'Tomorrow, 4:00 PM',
      patient: 'Rahul Sharma',
      phone: '+91 98801 44556'
    }
  ]);

  // Other Modals State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [mapTargetProvider, setMapTargetProvider] = useState(null);
  const [isPrescriptionModalOpen, setIsPrescriptionModalOpen] = useState(false);
  const [isRefillModalOpen, setIsRefillModalOpen] = useState(false);
  const [isRecoveryPlannerOpen, setIsRecoveryPlannerOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [findCareActiveTab, setFindCareActiveTab] = useState('hospitals');

  // Switch User Persona
  const handleSwitchUserRole = () => {
    soundFx.playSoftClick();
    if (currentUserRole === 'patient') {
      setCurrentUserRole('family');
      const elem = document.getElementById('family');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else if (currentUserRole === 'family') {
      setCurrentUserRole('provider');
      const elem = document.getElementById('provider-portal');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentUserRole('patient');
      const elem = document.getElementById('hero');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart Actions
  const handleAddToCart = (item) => {
    soundFx.playSoftClick();
    const existing = cartItems.find((i) => i.id === item.id);
    if (existing) {
      setCartItems(cartItems.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (itemId, newQty) => {
    soundFx.playSoftClick();
    if (newQty <= 0) {
      setCartItems(cartItems.filter((i) => i.id !== itemId));
    } else {
      setCartItems(cartItems.map((i) => i.id === itemId ? { ...i, quantity: newQty } : i));
    }
  };

  const handleRemoveCartItem = (itemId) => {
    soundFx.playSoftClick();
    setCartItems(cartItems.filter((i) => i.id !== itemId));
  };

  // Open Universal Booking Modal
  const handleOpenBookingModal = (service, type = 'doctor') => {
    soundFx.playSoftClick();
    setBookingInitialService(service);
    setBookingServiceType(type);
    setBookingModalOpen(true);
  };

  const handleBookingCompleted = (bookingRecord) => {
    setUserBookings([bookingRecord, ...userBookings]);
  };

  // Map & Navigation
  const handleOpenLocationMap = (provider) => {
    soundFx.playSoftClick();
    setMapTargetProvider(provider || null);
    setIsLocationModalOpen(true);
  };

  // Global Search selection handler
  const handleGlobalSearchResult = (item, type) => {
    if (type === 'pharmacy') {
      handleAddToCart(item);
    } else {
      handleOpenBookingModal(item, type);
    }
  };

  return (
    <div className="mednest-platform-root">
      {/* Sticky Header with Navigation, Location, Search, Cart & Emergency CTA */}
      <Navbar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenEmergency={() => {
          const elem = document.getElementById('emergency');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        selectedCity={selectedCity}
        selectedArea={selectedArea}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenUserModal={() => setIsUserModalOpen(true)}
        onOpenBookingModal={() => handleOpenBookingModal({ name: 'General Healthcare Service' })}
        currentUserRole={currentUserRole}
        onSwitchUserRole={handleSwitchUserRole}
      />

      <main className="mednest-main-content">
        {/* 1. Hero Section (Section 3) */}
        <HeroSection
          onSearchQuery={(q) => {
            setIsSearchOpen(true);
          }}
          onOpenEmergency={() => {
            const elem = document.getElementById('emergency');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenLocationModal={() => setIsLocationModalOpen(true)}
          selectedCity={selectedCity}
          selectedArea={selectedArea}
          onSelectServiceTab={(tab) => {
            setFindCareActiveTab(tab);
            const elem = document.getElementById('find-care');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onStartRecoveryPlanner={() => setIsRecoveryPlannerOpen(true)}
        />

        {/* 2. Quick Service Cards (Section 4) */}
        <QuickServiceCards
          onSelectService={(service) => {
            setFindCareActiveTab(service.tab || 'hospitals');
          }}
          onOpenEmergency={() => {
            const elem = document.getElementById('emergency');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Emergency Coordination Section (Section 5) */}
        <EmergencySection
          selectedCity={selectedCity}
          selectedArea={selectedArea}
          onOpenBookingModal={handleOpenBookingModal}
          onOpenLocationModal={() => setIsLocationModalOpen(true)}
        />

        {/* 4. Find Care Marketplace Discovery (Section 6) */}
        <FindCareSection
          activeTab={findCareActiveTab}
          onSelectTab={(tab) => setFindCareActiveTab(tab)}
          onOpenBookingModal={handleOpenBookingModal}
          onOpenLocationMap={handleOpenLocationMap}
          onAddToCart={handleAddToCart}
        />

        {/* 5. Doctor Discovery Section (Section 7) */}
        <DoctorDiscoverySection
          onOpenBookingModal={handleOpenBookingModal}
          onOpenLocationMap={handleOpenLocationMap}
        />

        {/* 6. Diagnostics Section (Section 8) */}
        <DiagnosticsSection
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 7. Pharmacy / Medicine Support (Section 9) */}
        <PharmacySection
          onOpenPrescriptionModal={() => setIsPrescriptionModalOpen(true)}
          onOpenRefillModal={() => setIsRefillModalOpen(true)}
          onOpenLocationMap={() => setIsLocationModalOpen(true)}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
          onOpenCart={() => setIsCartOpen(true)}
        />

        {/* 8. MEDNEST CARE — Flagship Differentiator (Section 10) */}
        <MednestCareSection
          onOpenBookingModal={handleOpenBookingModal}
          onOpenFamilyDashboard={() => {
            const elem = document.getElementById('family');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenHealthVault={() => {
            const elem = document.getElementById('health-vault');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenRecoveryPlanner={() => setIsRecoveryPlannerOpen(true)}
        />

        {/* 9. Patient Journey Interactive Workflow (Section 11) */}
        <PatientJourneySection
          onSelectService={(mod) => {
            handleOpenBookingModal({ name: mod.name, desc: mod.desc });
          }}
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 10. Personal Health Vault (Section 12) */}
        <HealthVaultSection />

        {/* 11. Family Dashboard (Section 13) */}
        <FamilyDashboardSection
          onOpenBookingModal={handleOpenBookingModal}
        />

        {/* 12. Provider Portal Console (Section 14) */}
        <ProviderPortalSection
          onOpenPartnerRegistration={() => setIsPartnerModalOpen(true)}
        />

        {/* 13. Trust & Verification (Section 15) */}
        <TrustSection />
      </main>

      {/* Footer with Links, Compliance Disclaimers & Helplines (Sections 20 & 21) */}
      <Footer
        onSelectNav={(sectionId) => setActiveNav(sectionId)}
        onOpenEmergency={() => {
          const elem = document.getElementById('emergency');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
      />

      {/* Mobile Bottom Navigation Bar (Section 23) */}
      <MobileBottomNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenEmergency={() => {
          const elem = document.getElementById('emergency');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenUserModal={() => setIsUserModalOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* ========================================================================= */}
      {/* GLOBAL MODALS & DRAWERS */}
      {/* ========================================================================= */}

      {/* Universal 5-Step Booking Modal (Section 18) */}
      <UniversalBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={bookingInitialService}
        serviceType={bookingServiceType}
        onBookingComplete={handleBookingCompleted}
      />

      {/* Pharmacy Slide-Out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onOpenPrescriptionModal={() => {
          setIsCartOpen(false);
          setIsPrescriptionModalOpen(true);
        }}
      />

      {/* Prescription Uploader Modal */}
      <PrescriptionUploadModal
        isOpen={isPrescriptionModalOpen}
        onClose={() => setIsPrescriptionModalOpen(false)}
        onUploadSuccess={() => {
          alert('Prescription successfully queued for licensed pharmacist review.');
        }}
      />

      {/* Refill Reminder Scheduler Modal */}
      <RefillReminderModal
        isOpen={isRefillModalOpen}
        onClose={() => setIsRefillModalOpen(false)}
      />

      {/* Custom Home Recovery Package Estimator */}
      <RecoveryPlannerModal
        isOpen={isRecoveryPlannerOpen}
        onClose={() => setIsRecoveryPlannerOpen(false)}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Location Selector & Interactive Map Modal (Section 16) */}
      <LocationMapModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={(c) => setSelectedCity(c)}
        selectedArea={selectedArea}
        onSelectArea={(a) => setSelectedArea(a)}
        targetProvider={mapTargetProvider}
      />

      {/* Global Search Modal (Section 17) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={handleGlobalSearchResult}
      />

      {/* Patient Account Dashboard (Section 19) */}
      <UserAccountModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        bookings={userBookings}
        currentUserRole={currentUserRole}
        onSwitchUserRole={handleSwitchUserRole}
      />

      {/* Provider Onboarding Modal */}
      <PartnerOnboardingModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </div>
  );
}
