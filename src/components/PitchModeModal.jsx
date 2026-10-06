import React, { useState, useEffect } from 'react';
import { 
  X, 
  Presentation, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  Activity,
  Layers
} from 'lucide-react';
import { PITCH_HIGHLIGHTS, BRAND_INFO } from '../data/workflowData';
import { soundFx } from '../utils/audio';

export default function PitchModeModal({ isOpen, onClose }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, slideIndex]);

  if (!isOpen) return null;

  const slides = [
    {
      id: 'problem',
      title: PITCH_HIGHLIGHTS.problem.title,
      subtitle: 'The 3 Cracks in Current Healthcare Delivery',
      icon: AlertTriangle,
      color: '#EF4444',
      bg: '#FEF2F2',
      points: PITCH_HIGHLIGHTS.problem.points,
      stat: '30%+',
      statLabel: 'Preventable 30-day Hospital Readmissions Due to Poor Discharge Follow-up'
    },
    {
      id: 'solution',
      title: PITCH_HIGHLIGHTS.solution.title,
      subtitle: 'One Unified Coordination Hub Across All 3 Stages',
      icon: Activity,
      color: '#3B82F6',
      bg: '#EFF6FF',
      points: PITCH_HIGHLIGHTS.solution.points,
      stat: '< 60s',
      statLabel: 'Instant SOS Triaged Coordination Across Beds, Blood & Ambulances'
    },
    {
      id: 'differentiator',
      title: PITCH_HIGHLIGHTS.differentiator.title,
      subtitle: 'Turning Post-Discharge into Structured At-Home Healing',
      icon: Sparkles,
      color: '#8B5CF6',
      bg: '#F5F3FF',
      points: PITCH_HIGHLIGHTS.differentiator.points,
      stat: '42%',
      statLabel: 'Reduction in Patient Readmission Risk with Mednest Care'
    },
    {
      id: 'market',
      title: 'Market Opportunity & Asset-Light Advantage',
      subtitle: 'Scalable Coordination Model with Zero Medical Liability',
      icon: TrendingUp,
      color: '#10B981',
      bg: '#ECFDF5',
      points: [
        'Pure-play coordination layer: We monetize booking commissions & subscription recovery plans.',
        'Zero doctor malpractice or diagnosis liability: Verified partners deliver the medical care.',
        'Viral caregiver network effect: Family members invite relatives, compounding user retention.'
      ],
      stat: '$18.5B',
      statLabel: 'Addressable Integrated Healthcare & Home Recovery Market'
    }
  ];

  const currentSlide = slides[slideIndex];

  const handleNext = () => {
    if (slideIndex < slides.length - 1) {
      soundFx.playSoftClick();
      setSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      soundFx.playSoftClick();
      setSlideIndex(prev => prev - 1);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content-card" 
        style={{ maxWidth: 840, padding: 36 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Pitch Deck">
          <X size={18} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingRight: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)', background: currentSlide.bg, color: currentSlide.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Presentation size={20} />
            </div>
            <div>
              <span className="brand-tagline" style={{ color: currentSlide.color }}>
                MEDNEST PITCH DECK • SLIDE {slideIndex + 1} OF {slides.length}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                {currentSlide.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Slide Main Content */}
        <div style={{ background: currentSlide.bg, borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: 24, border: `1px solid ${currentSlide.color}33` }}>
          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: currentSlide.color, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
            {currentSlide.subtitle}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {currentSlide.points.map((pt, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: '#FFFFFF', padding: '12px 16px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xs)' }}>
                <CheckCircle2 size={18} color={currentSlide.color} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 500 }}>
                  {pt}
                </span>
              </div>
            ))}
          </div>

          {/* Key Stat Box */}
          <div style={{ marginTop: 20, background: '#FFFFFF', padding: '14px 20px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: 16, border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: currentSlide.color, lineHeight: 1 }}>
              {currentSlide.stat}
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
              {currentSlide.statLabel}
            </div>
          </div>
        </div>

        {/* Slide Footer Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {slides.map((_, sIdx) => (
              <button
                key={sIdx}
                onClick={() => {
                  soundFx.playSoftClick();
                  setSlideIndex(sIdx);
                }}
                style={{
                  width: sIdx === slideIndex ? 28 : 10,
                  height: 10,
                  borderRadius: 99,
                  background: sIdx === slideIndex ? currentSlide.color : '#CBD5E1',
                  transition: 'all var(--transition-fast)'
                }}
                title={`Slide ${sIdx + 1}`}
              />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button 
              className="btn-icon-subtle" 
              onClick={handlePrev} 
              disabled={slideIndex === 0}
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              className="btn-primary-cta" 
              style={{ background: currentSlide.color, padding: '8px 18px', fontSize: '0.85rem' }}
              onClick={slideIndex === slides.length - 1 ? onClose : handleNext}
            >
              <span>{slideIndex === slides.length - 1 ? 'Close Deck' : 'Next Slide'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
