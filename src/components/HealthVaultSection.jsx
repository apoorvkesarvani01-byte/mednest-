import React, { useState } from 'react';
import {
  FolderHeart,
  FileText,
  ShieldCheck,
  Lock,
  Upload,
  Download,
  Share2,
  Eye,
  CheckCircle2,
  Calendar,
  Building,
  Key,
  Sparkles,
  Search,
  Plus
} from 'lucide-react';
import { DEMO_HEALTH_VAULT_DOCUMENTS } from '../data/mednestPlatformData';
import { soundFx } from '../utils/audio';

export default function HealthVaultSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [documents, setDocuments] = useState(DEMO_HEALTH_VAULT_DOCUMENTS);
  const [selectedDocForPreview, setSelectedDocForPreview] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [newDocTitle, setNewDocTitle] = useState('');
  const [newDocCategory, setNewDocCategory] = useState('Prescriptions');
  const [newDocDoctor, setNewDocDoctor] = useState('');

  const categories = ['All', 'Prescriptions', 'Lab Reports', 'Vaccination Records', 'Discharge Summary', 'Recovery Plan'];

  const filteredDocs = documents.filter((doc) => {
    return activeCategory === 'All' || doc.category === activeCategory;
  });

  const handlePreview = (doc) => {
    soundFx.playSoftClick();
    setSelectedDocForPreview(doc);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (newDocTitle.trim()) {
      soundFx.playSuccessFanfare();
      const newDoc = {
        id: `doc-${Date.now()}`,
        title: newDocTitle,
        category: newDocCategory,
        doctor: newDocDoctor || 'Dr. Verified Practitioner',
        hospital: 'Uploaded by Patient (Encrypted)',
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        fileType: 'PDF',
        size: '1.2 MB',
        verified: true,
        tags: [newDocCategory, 'Verified Upload'],
        contentSnippet: 'Digitally verified clinical record uploaded to personal ABDM-aligned health vault.'
      };
      setDocuments([newDoc, ...documents]);
      setUploadModalOpen(false);
      setNewDocTitle('');
      setNewDocDoctor('');
    }
  };

  return (
    <section id="health-vault" className="mednest-health-vault-section">
      <div className="container">
        {/* Section Header */}
        <div className="vault-header-block">
          <div className="vault-title-wrap">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="badge-pill badge-blue">
                <Lock size={12} className="text-sky-600" /> ABDM ALIGNED 256-BIT ENCRYPTION
              </span>
              <span className="text-xs text-slate-500 font-semibold">• Zero Unauthorized Sharing</span>
            </div>
            <h2 className="section-title">My Health Vault</h2>
            <p className="section-subtitle">
              Your unified clinical record repository. Seamlessly organize, preview, and share prescriptions, diagnostic reports, discharge summaries, and home recovery plans.
            </p>
          </div>

          <div className="vault-header-actions">
            <button
              onClick={() => { soundFx.playSoftClick(); setUploadModalOpen(true); }}
              className="btn-upload-vault-doc"
            >
              <Plus size={16} />
              <span>Add New Record</span>
            </button>
          </div>
        </div>

        {/* Security & Consent Notice Ribbon */}
        <div className="vault-consent-banner">
          <div className="consent-banner-left">
            <div className="vault-shield-icon">
              <ShieldCheck size={24} className="text-emerald-600" />
            </div>
            <div>
              <h4 className="consent-title">Consent-Driven Healthcare Data Architecture</h4>
              <p className="consent-desc">
                <strong>Your data is shared ONLY with your explicit permission.</strong> You retain complete cryptographic ownership and can grant or revoke doctor/family access at any time.
              </p>
            </div>
          </div>
          <div className="consent-badge-box">
            <span className="text-xs text-slate-500 font-semibold block">Patient ABHA ID:</span>
            <strong className="text-slate-900 text-sm font-mono">91-8472-1092-4821</strong>
          </div>
        </div>

        {/* 5 Organized Category Filter Tabs */}
        <div className="vault-category-tabs-row">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { soundFx.playSoftClick(); setActiveCategory(cat); }}
              className={`vault-cat-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              <FileText size={15} />
              <span>{cat}</span>
              <span className="vault-cat-count">
                {cat === 'All' ? documents.length : documents.filter((d) => d.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Document Cards Grid */}
        <div className="vault-documents-grid">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="vault-doc-card">
              <div className="doc-card-top-header">
                <div className="flex items-center justify-between">
                  <span className="badge-pill badge-teal">{doc.category}</span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Verified</span>
                  </div>
                </div>

                <h3 className="vault-doc-title">{doc.title}</h3>
                <p className="vault-doc-doctor">Issued by: <strong>{doc.doctor}</strong></p>
                <p className="vault-doc-hospital">{doc.hospital}</p>
              </div>

              <div className="vault-doc-body">
                <p className="vault-snippet">{doc.contentSnippet}</p>

                <div className="vault-tags-row">
                  {doc.tags.map((t, i) => (
                    <span key={i} className="vault-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="vault-doc-footer">
                <div className="doc-meta-info">
                  <span className="doc-date">{doc.date}</span>
                  <span className="doc-size">• {doc.size}</span>
                </div>

                <div className="doc-action-btns">
                  <button
                    onClick={() => handlePreview(doc)}
                    className="btn-doc-action"
                    title="Preview Document"
                  >
                    <Eye size={15} />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => {
                      soundFx.playSoftClick();
                      alert(`Downloading encrypted ${doc.title} (${doc.fileType})`);
                    }}
                    className="btn-doc-action"
                    title="Download Encrypted PDF"
                  >
                    <Download size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Document Preview Modal */}
        {selectedDocForPreview && (
          <div className="mednest-modal-overlay" onClick={() => setSelectedDocForPreview(null)}>
            <div className="vault-preview-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="preview-modal-top">
                <div className="flex items-center gap-2">
                  <span className="badge-pill badge-teal">{selectedDocForPreview.category}</span>
                  <span className="text-xs text-slate-400 font-mono">ID: {selectedDocForPreview.id}</span>
                </div>
                <button onClick={() => setSelectedDocForPreview(null)} className="close-btn">×</button>
              </div>

              <div className="preview-modal-body">
                <div className="preview-doc-header">
                  <h3 className="text-xl font-extrabold text-slate-900">{selectedDocForPreview.title}</h3>
                  <p className="text-sm text-sky-700 font-semibold mt-1">
                    {selectedDocForPreview.doctor} • {selectedDocForPreview.hospital}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Dated: {selectedDocForPreview.date}</p>
                </div>

                <div className="preview-paper-card">
                  <div className="paper-watermark">MEDNEST SECURE VAULT</div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Clinical Content & Key Parameters</h4>
                  <p className="text-sm text-slate-800 leading-relaxed font-mono bg-slate-50 p-4 rounded-lg border border-slate-200">
                    {selectedDocForPreview.contentSnippet}
                  </p>

                  <div className="mt-4">
                    <h5 className="text-xs font-bold text-slate-500 uppercase mb-1">Key Diagnostic Indicators</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedDocForPreview.tags.map((t, idx) => (
                        <span key={idx} className="spec-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="consent-badge-footer">
                  <ShieldCheck size={18} className="text-emerald-600 flex-shrink-0" />
                  <p className="text-xs text-emerald-800">
                    ABDM compliant health record. Digitally signed and cryptographically validated by MEDNEST Trust Layer.
                  </p>
                </div>
              </div>

              <div className="preview-modal-footer">
                <button onClick={() => setSelectedDocForPreview(null)} className="btn-modal-cancel">
                  Close
                </button>
                <button
                  onClick={() => {
                    soundFx.playSoftClick();
                    alert(`Encrypted ${selectedDocForPreview.title} downloaded successfully.`);
                  }}
                  className="btn-modal-confirm"
                >
                  <Download size={16} />
                  <span>Download Verified PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Record Modal */}
        {uploadModalOpen && (
          <div className="mednest-modal-overlay" onClick={() => setUploadModalOpen(false)}>
            <div className="vault-upload-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-top-bar">
                <div className="flex items-center gap-2">
                  <span className="badge-pill badge-teal">ENCRYPTED DOCUMENT UPLOAD</span>
                </div>
                <button onClick={() => setUploadModalOpen(false)} className="close-btn">×</button>
              </div>

              <form onSubmit={handleUploadSubmit} className="vault-upload-form">
                <div className="form-group">
                  <label className="form-label">Document Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Post-Surgery Follow-up Prescription, Blood Report"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category</label>
                  <select
                    value={newDocCategory}
                    onChange={(e) => setNewDocCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="Prescriptions">Prescriptions</option>
                    <option value="Lab Reports">Lab Reports</option>
                    <option value="Vaccination Records">Vaccination Records</option>
                    <option value="Discharge Summary">Discharge Summary</option>
                    <option value="Recovery Plan">Recovery Plan</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Doctor / Lab Name</label>
                  <input
                    type="text"
                    placeholder="e.g., Dr. Rajesh Kumar / Metropolis Labs"
                    value={newDocDoctor}
                    onChange={(e) => setNewDocDoctor(e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="upload-dropzone-box">
                  <Upload size={32} className="text-sky-600 mb-2" />
                  <p className="text-sm font-bold text-slate-800">Click to select PDF or image document</p>
                  <span className="text-xs text-slate-400">Supported: PDF, JPG, PNG (Max 15MB) • AES-256 Encrypted</span>
                </div>

                <div className="modal-footer-row mt-4">
                  <button type="button" onClick={() => setUploadModalOpen(false)} className="btn-modal-cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn-modal-confirm">
                    <ShieldCheck size={16} />
                    <span>Save to Vault</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
