// MEDNEST PLATFORM COMPREHENSIVE DATA STORE
// Source of truth: Mednest Startup Plan ("Healthcare, Connected.")

export const MEDNEST_CITIES = [
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    areas: ['Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'Jayanagar', 'Bannerghatta Road', 'Malleshwaram', 'Hebbal'],
    pincodes: ['560034', '560038', '560102', '560066', '560041', '560076', '560003', '560024'],
    coords: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    areas: ['Andheri West', 'Bandra', 'Powai', 'Worli', 'Juhu', 'Borivali', 'Dadar', 'Thane'],
    pincodes: ['400053', '400050', '400076', '400018', '400049', '400091', '400028', '400601'],
    coords: { lat: 19.0760, lng: 72.8777 }
  },
  {
    id: 'delhi',
    name: 'Delhi NCR',
    areas: ['Connaught Place', 'Saket', 'Dwarka', 'Vasant Kunj', 'Gurugram Sector 29', 'Noida Sector 62', 'Rohini'],
    pincodes: ['110001', '110017', '110075', '110070', '122002', '201309', '110085'],
    coords: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    areas: ['Gachibowli', 'Hitec City', 'Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Kukatpally', 'Secunderabad'],
    pincodes: ['500032', '500081', '500034', '500033', '500081', '500072', '500003'],
    coords: { lat: 17.3850, lng: 78.4867 }
  },
  {
    id: 'chennai',
    name: 'Chennai',
    areas: ['Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery', 'OMR - Thoraipakkam', 'Kilpauk', 'Nungambakkam'],
    pincodes: ['600040', '600017', '600020', '600042', '600097', '600010', '600034'],
    coords: { lat: 13.0827, lng: 80.2707 }
  },
  {
    id: 'pune',
    name: 'Pune',
    areas: ['Kothrud', 'Baner', 'Viman Nagar', 'Koregaon Park', 'Wakad', 'Hinjewadi', 'Aundh'],
    pincodes: ['411038', '411045', '411014', '411001', '411057', '411057', '411007'],
    coords: { lat: 18.5204, lng: 73.8567 }
  }
];

export const QUICK_SERVICES = [
  {
    id: 'hospitals',
    title: 'Find Hospital',
    icon: 'Building2',
    color: '#0284c7',
    bgColor: '#e0f2fe',
    badge: '24/7 ER Available',
    description: 'NABH multi-specialty hospitals with live ICU & emergency beds',
    targetSection: 'find-care',
    tab: 'hospitals'
  },
  {
    id: 'ambulances',
    title: 'Find Ambulance',
    icon: 'Ambulance',
    color: '#dc2626',
    bgColor: '#fee2e2',
    badge: '8-12 Min ETA',
    description: 'ALS cardiac & BLS ambulances with real-time GPS tracking',
    targetSection: 'emergency',
    tab: 'ambulances'
  },
  {
    id: 'blood',
    title: 'Find Blood',
    icon: 'Droplet',
    color: '#e11d48',
    bgColor: '#ffe4e6',
    badge: 'Live Stock Units',
    description: 'Verified blood bank inventory & emergency donor network',
    targetSection: 'emergency',
    tab: 'blood'
  },
  {
    id: 'doctors',
    title: 'Find Doctor',
    icon: 'Stethoscope',
    color: '#0d9488',
    bgColor: '#ccfbf1',
    badge: 'Top Specialists',
    description: 'Consult top doctors in-clinic or via instant video consult',
    targetSection: 'doctors',
    tab: 'doctors'
  },
  {
    id: 'diagnostics',
    title: 'Book Diagnostics',
    icon: 'Microscope',
    color: '#7c3aed',
    bgColor: '#ede9fe',
    badge: 'Home Collection',
    description: 'NABL certified lab tests, MRI, CT & comprehensive packages',
    targetSection: 'diagnostics',
    tab: 'diagnostics'
  },
  {
    id: 'pharmacies',
    title: 'Find Pharmacy',
    icon: 'Pill',
    color: '#059669',
    bgColor: '#d1fae5',
    badge: 'Rx Upload & OTC',
    description: 'Genuine medicines delivered from licensed neighborhood partners',
    targetSection: 'pharmacy',
    tab: 'pharmacies'
  },
  {
    id: 'homecare',
    title: 'Home Care',
    icon: 'HeartHandshake',
    color: '#db2777',
    bgColor: '#fce7f3',
    badge: 'Verified Attendants',
    description: 'ICU nurses, caregivers, wound care & post-op home assistance',
    targetSection: 'mednest-care',
    tab: 'homecare'
  },
  {
    id: 'equipment',
    title: 'Rent Equipment',
    icon: 'Accessibility',
    color: '#d97706',
    bgColor: '#fef3c7',
    badge: 'Sanitized & Delivered',
    description: 'Rent hospital beds, oxygen concentrators, wheelchairs & BiPAP',
    targetSection: 'mednest-care',
    tab: 'equipment'
  }
];

export const HOSPITALS_DATA = [
  {
    id: 'hosp-1',
    name: 'Fortis Hospital & Research Institute',
    type: 'Multi-Specialty & Tertiary Care',
    verified: true,
    accreditation: 'NABH & JCI Accredited',
    address: '154/9, Bannerghatta Road, Opposite IIM-B',
    city: 'Bengaluru',
    area: 'Bannerghatta Road',
    distance: '1.4 km away',
    rating: 4.9,
    reviewCount: 684,
    emergencyHotline: '+91 80 6621 4444',
    openStatus: 'Open 24/7 • Emergency Ready',
    icuBedsAvailable: 8,
    emergencyWaitTime: '0-5 mins',
    lastUpdated: 'Updated 6 mins ago',
    specialties: ['Cardiology', 'Emergency & Trauma', 'Neurology', 'Orthopedics', 'Oncology', 'Organ Transplant'],
    facilities: ['24/7 Trauma Center', 'Digital Cath Lab', 'Level-3 ICU', 'Blood Bank On-Site', 'Helipad'],
    services: ['Emergency Admission', 'ICU Care', 'Surgical Suites', 'Diagnostics Center', 'In-House Pharmacy'],
    mapCoords: { lat: 12.8988, lng: 77.5997 },
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'hosp-2',
    name: 'Manipal Hospital Super Specialty Center',
    type: 'Quaternary Care Multi-Specialty',
    verified: true,
    accreditation: 'NABH Accredited',
    address: '98, HAL Old Airport Road, Kodihalli',
    city: 'Bengaluru',
    area: 'Indiranagar',
    distance: '2.8 km away',
    rating: 4.8,
    reviewCount: 920,
    emergencyHotline: '+91 80 2502 4444',
    openStatus: 'Open 24/7 • Trauma Center',
    icuBedsAvailable: 12,
    emergencyWaitTime: '0 mins',
    lastUpdated: 'Updated 11 mins ago',
    specialties: ['Cardiac Sciences', 'Neurosciences', 'Gastroenterology', 'Renal Sciences', 'Pulmonology'],
    facilities: ['Advanced Stroke Center', 'NICU / PICU', 'Robotic Surgery', '24/7 Diagnostic Lab'],
    services: ['Emergency Care', 'Inpatient Admission', 'Daycare Surgery', 'Preventive Health Checks'],
    mapCoords: { lat: 12.9592, lng: 77.6499 },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'hosp-3',
    name: 'Apollo Specialty Hospital',
    type: 'Multi-Specialty & Cancer Center',
    verified: true,
    accreditation: 'NABH & NABL Accredited',
    address: '21/2, 14th Cross, 3rd Block, Jayanagar',
    city: 'Bengaluru',
    area: 'Jayanagar',
    distance: '3.5 km away',
    rating: 4.9,
    reviewCount: 1140,
    emergencyHotline: '+91 80 2630 4050',
    openStatus: 'Open 24/7 • Critical Care',
    icuBedsAvailable: 5,
    emergencyWaitTime: '5 mins',
    lastUpdated: 'Updated 14 mins ago',
    specialties: ['Cardiology', 'Critical Care', 'Orthopedics', 'Pulmonology', 'Nephrology'],
    facilities: ['24/7 Emergency Wing', 'Coronary Care Unit', 'Advanced Dialysis Center', 'Ambulance Hub'],
    services: ['Emergency Admission', 'Elective Surgeries', 'Comprehensive Lab Services', 'Recovery Ward'],
    mapCoords: { lat: 12.9298, lng: 77.5847 },
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'hosp-4',
    name: 'Aster CMI Hospital',
    type: 'Multi-Specialty & Organ Transplant Center',
    verified: true,
    accreditation: 'NABH & JCI Accredited',
    address: 'No. 43/2, New Airport Road, NH 44, Sahakar Nagar',
    city: 'Bengaluru',
    area: 'Hebbal',
    distance: '6.2 km away',
    rating: 4.7,
    reviewCount: 540,
    emergencyHotline: '+91 80 4344 0100',
    openStatus: 'Open 24/7 • Level 1 Trauma',
    icuBedsAvailable: 15,
    emergencyWaitTime: '0-2 mins',
    lastUpdated: 'Updated 20 mins ago',
    specialties: ['Liver & Kidney Transplant', 'Neuro Surgery', 'Interventional Cardiology', 'Pediatrics'],
    facilities: ['Level-1 Trauma & Burn Center', 'Dedicated ECMO Unit', 'Pediatric ICU', 'Round the Clock Blood Bank'],
    services: ['Emergency Coordination', 'Transplant Care', 'Daycare Chemotherapy', 'Physiotherapy Center'],
    mapCoords: { lat: 13.0587, lng: 77.5926 },
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80'
  }
];

export const DOCTORS_DATA = [
  {
    id: 'doc-1',
    name: 'Dr. Rajesh Kumar',
    qualification: 'MD, DM (Cardiology), FACC',
    specialty: 'Cardiology',
    subSpecialty: 'Interventional Cardiology & Heart Failure',
    experience: '18+ Years Experience',
    hospital: 'Fortis Hospital & Mednest Partner',
    rating: 4.9,
    reviewCount: 420,
    languages: ['English', 'Hindi', 'Kannada'],
    consultFee: 900,
    discountFee: 800,
    availableToday: true,
    nextSlot: 'Today, 3:30 PM',
    slots: ['3:30 PM', '4:15 PM', '5:00 PM', '6:30 PM'],
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'Senior Interventional Cardiologist specializing in coronary interventions, hypertension management, post-bypass rehab, and preventive heart care.'
  },
  {
    id: 'doc-2',
    name: 'Dr. Ananya Sharma',
    qualification: 'MS (Ortho), M.Ch (Joint Replacement)',
    specialty: 'Orthopedics',
    subSpecialty: 'Knee & Hip Replacement, Sports Medicine',
    experience: '14+ Years Experience',
    hospital: 'Manipal Hospital & Mednest Partner',
    rating: 4.9,
    reviewCount: 350,
    languages: ['English', 'Hindi', 'Tamil'],
    consultFee: 850,
    discountFee: 750,
    availableToday: true,
    nextSlot: 'Today, 4:00 PM',
    slots: ['4:00 PM', '4:45 PM', '5:30 PM', '7:00 PM'],
    avatar: 'https://images.unsplash.com/photo-1594824813587-f9d949432f83?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'Expert Orthopedic Surgeon with 2000+ successful joint surgeries, leading post-surgical mobility protocols and minimally invasive procedures.'
  },
  {
    id: 'doc-3',
    name: 'Dr. Arvind Swaminathan',
    qualification: 'MD, DM (Neurology), FINR',
    specialty: 'Neurology',
    subSpecialty: 'Stroke Care, Epilepsy & Neuro-Rehabilitation',
    experience: '16+ Years Experience',
    hospital: 'Apollo Specialty Hospital',
    rating: 4.8,
    reviewCount: 290,
    languages: ['English', 'Tamil', 'Kannada', 'Hindi'],
    consultFee: 1000,
    discountFee: 900,
    availableToday: false,
    nextSlot: 'Tomorrow, 10:30 AM',
    slots: ['10:30 AM', '11:15 AM', '12:00 PM', '2:30 PM'],
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'Neurologist with global fellowships in acute stroke management, neuro-critical recovery, and post-discharge cognitive rehab.'
  },
  {
    id: 'doc-4',
    name: 'Dr. Meera Nambiar',
    qualification: 'MD (Pediatrics), DCH, FIAP',
    specialty: 'Pediatrics',
    subSpecialty: 'General Pediatrics & Adolescent Medicine',
    experience: '12+ Years Experience',
    hospital: 'Aster CMI Children Clinic',
    rating: 4.9,
    reviewCount: 510,
    languages: ['English', 'Malayalam', 'Hindi', 'Kannada'],
    consultFee: 700,
    discountFee: 600,
    availableToday: true,
    nextSlot: 'Today, 5:15 PM',
    slots: ['5:15 PM', '6:00 PM', '6:45 PM', '7:30 PM'],
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'Compassionate pediatrician focusing on developmental milestones, childhood immunizations, pediatric asthma, and newborn care.'
  },
  {
    id: 'doc-5',
    name: 'Dr. Siddharth Rao',
    qualification: 'MD (Pulmonary Med), FCCP (USA)',
    specialty: 'Pulmonology',
    subSpecialty: 'Asthma, COPD, Sleep Apnea & Post-COVID Care',
    experience: '15+ Years Experience',
    hospital: 'Fortis Hospital & Mednest Care Lead',
    rating: 4.8,
    reviewCount: 315,
    languages: ['English', 'Telugu', 'Hindi', 'Kannada'],
    consultFee: 900,
    discountFee: 800,
    availableToday: true,
    nextSlot: 'Today, 6:00 PM',
    slots: ['6:00 PM', '6:45 PM', '7:30 PM', '8:15 PM'],
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'Chest physician and pulmonologist specializing in home oxygen therapy management, non-invasive ventilation (BiPAP/CPAP), and lung rehabilitation.'
  },
  {
    id: 'doc-6',
    name: 'Dr. Rohan Verma',
    qualification: 'MBBS, MD (General Medicine)',
    specialty: 'General Medicine',
    subSpecialty: 'Internal Medicine, Diabetes & Geriatric Care',
    experience: '11+ Years Experience',
    hospital: 'Mednest Primary Care Hub',
    rating: 4.9,
    reviewCount: 480,
    languages: ['English', 'Hindi', 'Punjabi'],
    consultFee: 600,
    discountFee: 500,
    availableToday: true,
    nextSlot: 'Today, 2:45 PM',
    slots: ['2:45 PM', '3:30 PM', '4:15 PM', '5:00 PM'],
    avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&auto=format&fit=crop&q=80',
    verified: true,
    about: 'General physician with vast experience in lifestyle disorder management, diabetes reversal counseling, fever evaluation, and family health.'
  }
];

export const DIAGNOSTICS_DATA = [
  {
    id: 'diag-1',
    name: 'Complete Blood Count (CBC) with ESR',
    category: 'Blood Tests',
    parameters: 28,
    partner: 'Metropolis Healthcare & NABL Lab',
    originalPrice: 450,
    price: 299,
    discount: '33% OFF',
    homeCollection: true,
    fastingRequired: false,
    reportTime: 'Within 6 Hours (Digital PDF)',
    verified: true,
    badge: 'Most Booked Test',
    description: 'Measures red & white blood cells, hemoglobin, platelets, and infection markers. Crucial for fever, fatigue and routine health screening.',
    nextSlot: 'Tomorrow, 7:00 AM - 9:00 AM'
  },
  {
    id: 'diag-2',
    name: 'Comprehensive Full Body Health Checkup',
    category: 'Health Packages',
    parameters: 84,
    partner: 'Dr. Lal PathLabs & Mednest Partner',
    originalPrice: 2499,
    price: 1299,
    discount: '48% OFF',
    homeCollection: true,
    fastingRequired: true,
    fastingDuration: '10-12 Hours Fasting',
    reportTime: 'Within 24 Hours',
    verified: true,
    badge: 'Best Value Package',
    description: 'Includes Liver (LFT), Kidney (KFT), Lipid profile, Thyroid (TSH), HbA1c, CBC, Urine Routine, Vitamin D3 & B12.',
    nextSlot: 'Tomorrow, 6:30 AM - 8:30 AM'
  },
  {
    id: 'diag-3',
    name: 'MRI Brain & Cervical Spine (with Contrast)',
    category: 'Radiology / Scans',
    parameters: 1,
    partner: 'Apollo Diagnostics Imaging Hub',
    originalPrice: 8500,
    price: 6200,
    discount: '27% OFF',
    homeCollection: false,
    fastingRequired: false,
    reportTime: 'Same Day (Within 12 Hours)',
    verified: true,
    badge: '3.0 Tesla Silent MRI',
    description: 'High-resolution neuro-imaging scan for migraine, vertigo, nerve compression, disc herniation, and stroke screening.',
    nextSlot: 'Today, 5:30 PM (At Diagnostic Center)'
  },
  {
    id: 'diag-4',
    name: 'High-Resolution CT Scan Chest (HRCT)',
    category: 'Radiology / Scans',
    parameters: 1,
    partner: 'Fortis Diagnostics & Imaging',
    originalPrice: 4500,
    price: 3200,
    discount: '28% OFF',
    homeCollection: false,
    fastingRequired: false,
    reportTime: 'Within 4 Hours',
    verified: true,
    badge: '128-Slice Low Dose CT',
    description: 'Evaluates lung parenchyma, interstitial lung disease, pneumonia, chronic cough, and post-viral pulmonary inflammation.',
    nextSlot: 'Today, 6:15 PM'
  },
  {
    id: 'diag-5',
    name: 'Lipid Profile (Cardiovascular Risk Panel)',
    category: 'Blood Tests',
    parameters: 9,
    partner: 'Metropolis Healthcare',
    originalPrice: 750,
    price: 450,
    discount: '40% OFF',
    homeCollection: true,
    fastingRequired: true,
    fastingDuration: '12 Hours Fasting',
    reportTime: 'Within 8 Hours',
    verified: true,
    badge: 'Heart Care Essential',
    description: 'Measures Total Cholesterol, HDL, LDL, VLDL, Triglycerides and Cardiac Risk Ratios for heart health monitoring.',
    nextSlot: 'Tomorrow, 7:00 AM'
  },
  {
    id: 'diag-6',
    name: 'HbA1c & Fasting Blood Sugar (Diabetes Duo)',
    category: 'Diabetes Care',
    parameters: 3,
    partner: 'Dr. Lal PathLabs',
    originalPrice: 650,
    price: 399,
    discount: '38% OFF',
    homeCollection: true,
    fastingRequired: true,
    fastingDuration: '8-10 Hours Fasting',
    reportTime: 'Within 6 Hours',
    verified: true,
    badge: '3-Month Blood Sugar Avg',
    description: 'Gold standard monitoring for Glycated Hemoglobin (HbA1c) providing estimated average blood glucose over the past 90 days.',
    nextSlot: 'Tomorrow, 6:30 AM'
  },
  {
    id: 'diag-7',
    name: 'Ultrasound Whole Abdomen & Pelvis',
    category: 'Radiology / Scans',
    parameters: 1,
    partner: 'Aster CMI Diagnostic Imaging',
    originalPrice: 2000,
    price: 1450,
    discount: '27% OFF',
    homeCollection: false,
    fastingRequired: true,
    fastingDuration: 'Full Bladder & 6h Fasting',
    reportTime: 'Instant Report with Doctor Remarks',
    verified: true,
    badge: 'USG Color Doppler',
    description: 'Sonographic evaluation of liver, gallbladder, kidneys, pancreas, spleen, urinary bladder, and pelvic organs.',
    nextSlot: 'Tomorrow, 9:00 AM'
  },
  {
    id: 'diag-8',
    name: 'Thyroid Care Panel (T3, T4, TSH Ultra-Sensitive)',
    category: 'Hormone Tests',
    parameters: 3,
    partner: 'Metropolis Healthcare',
    originalPrice: 550,
    price: 349,
    discount: '36% OFF',
    homeCollection: true,
    fastingRequired: false,
    reportTime: 'Within 8 Hours',
    verified: true,
    badge: 'Thyroid Function',
    description: 'Evaluates thyroid gland activity for hypothyroidism, hyperthyroidism, unexplained weight fluctuations, and fatigue.',
    nextSlot: 'Tomorrow, 7:30 AM'
  }
];

export const MEDICINES_DATA = [
  {
    id: 'med-1',
    name: 'Telmisartan 40mg Tablets',
    brand: 'Telma 40 (Glenmark Pharmaceuticals)',
    category: 'Cardiovascular / Blood Pressure',
    type: 'Prescription Required (Rx)',
    isRx: true,
    packSize: 'Strip of 15 Tablets',
    price: 184,
    mrp: 220,
    discount: '16% OFF',
    composition: 'Telmisartan (40mg)',
    verifiedPartner: 'Wellness Forever Licensed Chemist',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&auto=format&fit=crop&q=80',
    description: 'Prescription medication for managing primary hypertension and cardiovascular risk reduction.'
  },
  {
    id: 'med-2',
    name: 'Augmentin 625 Duo Tablet',
    brand: 'Augmentin (GlaxoSmithKline)',
    category: 'Antibiotics',
    type: 'Prescription Required (Rx)',
    isRx: true,
    packSize: 'Strip of 10 Tablets',
    price: 198,
    mrp: 242,
    discount: '18% OFF',
    composition: 'Amoxicillin (500mg) + Clavulanic Acid (125mg)',
    verifiedPartner: 'Apollo Pharmacy Licensed Partner',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&auto=format&fit=crop&q=80',
    description: 'Broad-spectrum penicillin antibiotic with clavulanate for bacterial respiratory and skin infections.'
  },
  {
    id: 'med-3',
    name: 'Pantocid DSR Capsule',
    brand: 'Pantocid (Sun Pharma)',
    category: 'Gastroenterology / Antacid',
    type: 'Prescription Required (Rx)',
    isRx: true,
    packSize: 'Strip of 15 Capsules',
    price: 215,
    mrp: 265,
    discount: '19% OFF',
    composition: 'Pantoprazole (40mg) + Domperidone (30mg SR)',
    verifiedPartner: 'MedPlus Licensed Partner',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-ed200f5e5a43?w=300&auto=format&fit=crop&q=80',
    description: 'Sustained-release formulation for gastroesophageal reflux disease (GERD), heartburn and hyperacidity.'
  },
  {
    id: 'med-4',
    name: 'Glycomet-GP 1 Tablet PR',
    brand: 'Glycomet (USV Private Ltd)',
    category: 'Diabetes Care',
    type: 'Prescription Required (Rx)',
    isRx: true,
    packSize: 'Strip of 15 Tablets',
    price: 145,
    mrp: 175,
    discount: '17% OFF',
    composition: 'Glimepiride (1mg) + Metformin (500mg PR)',
    verifiedPartner: 'Wellness Forever Licensed Chemist',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&auto=format&fit=crop&q=80',
    description: 'Anti-diabetic combination therapy for managing glycemic control in Type-2 Diabetes Mellitus.'
  },
  {
    id: 'med-5',
    name: 'Dolo 650 Tablet',
    brand: 'Dolo 650 (Micro Labs Ltd)',
    category: 'Pain & Fever / Analgesic',
    type: 'Over The Counter (OTC)',
    isRx: false,
    packSize: 'Strip of 15 Tablets',
    price: 31,
    mrp: 35,
    discount: '11% OFF',
    composition: 'Paracetamol / Acetaminophen (650mg)',
    verifiedPartner: 'Apollo Pharmacy Licensed Partner',
    deliveryTime: 'Delivery in 45 Mins',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&auto=format&fit=crop&q=80',
    description: 'Trusted antipyretic and mild analgesic for rapid relief from fever, body aches and headaches.'
  },
  {
    id: 'med-6',
    name: 'Atorva 10mg Tablet',
    brand: 'Atorva (Zydus Cadila)',
    category: 'Cardiovascular / Statins',
    type: 'Prescription Required (Rx)',
    isRx: true,
    packSize: 'Strip of 15 Tablets',
    price: 132,
    mrp: 160,
    discount: '18% OFF',
    composition: 'Atorvastatin (10mg)',
    verifiedPartner: 'MedPlus Licensed Partner',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-ed200f5e5a43?w=300&auto=format&fit=crop&q=80',
    description: 'HMG-CoA reductase inhibitor for reducing LDL cholesterol, total triglycerides, and coronary risks.'
  },
  {
    id: 'med-7',
    name: 'Becosules Performance Multivitamin & Zinc',
    brand: 'Becosules (Pfizer India)',
    category: 'Vitamins & Supplements',
    type: 'Over The Counter (OTC)',
    isRx: false,
    packSize: 'Bottle of 30 Softgels',
    price: 185,
    mrp: 230,
    discount: '20% OFF',
    composition: 'Vitamin B-Complex + Vitamin C + Zinc + Ginseng',
    verifiedPartner: 'Wellness Forever Licensed Chemist',
    deliveryTime: 'Delivery in 2 Hours',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=300&auto=format&fit=crop&q=80',
    description: 'Daily vitality multivitamin for immune resilience, tissue repair, and energy recovery post-illness.'
  },
  {
    id: 'med-8',
    name: 'Accu-Chek Instant Blood Glucose Meter Kit',
    brand: 'Roche Diagnostics',
    category: 'Medical Devices & Diagnostics',
    type: 'Over The Counter (OTC)',
    isRx: false,
    packSize: 'Box (Meter + 10 Strips + Lancing Device)',
    price: 1299,
    mrp: 1649,
    discount: '21% OFF',
    composition: 'Digital Glucometer with Bluetooth Sync',
    verifiedPartner: 'Mednest Certified Healthcare Logistics',
    deliveryTime: 'Same Day Delivery',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&auto=format&fit=crop&q=80',
    description: 'Clinically proven accuracy with target range indicator for fast and hassle-free home blood sugar tracking.'
  }
];

export const HOME_CARE_SERVICES = [
  {
    id: 'care-1',
    title: 'Post-Surgical ICU Trained Nurse',
    category: 'Nursing Care',
    rating: 4.9,
    reviewCount: 310,
    pricePerDay: 2200,
    pricePerMonth: 58000,
    shifts: ['12-Hour Day Shift', '12-Hour Night Shift', '24-Hour Live-in'],
    verified: true,
    badge: 'B.Sc Nursing • GNM Certified',
    description: 'Experienced ICU nursing staff for critical post-operative monitoring, tracheostomy, catheter care, IV infusions, and surgical drain management.',
    includes: ['Vitals check every 2-4 hours', 'Medication & IV administration', 'Wound dressing & suture care', 'Daily doctor coordination log'],
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'care-2',
    title: 'Certified Home Physiotherapy Session',
    category: 'Physiotherapy & Rehab',
    rating: 4.9,
    reviewCount: 420,
    pricePerDay: 850,
    package10Sessions: 7500,
    shifts: ['45-60 Min In-Home Session'],
    verified: true,
    badge: 'BPT / MPT Licensed Physio',
    description: 'Customized in-home rehabilitation for total knee/hip replacement, post-stroke motor recovery, Parkinsonian gait training, and spine mobility.',
    includes: ['Initial mobility & pain assessment', 'Manual therapy & joint mobilization', 'Therapeutic exercise equipment provided', 'Progress graph on Family Dashboard'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'care-3',
    title: 'Elderly Care & Mobility Attendant',
    category: 'Caregiver / Attendant',
    rating: 4.8,
    reviewCount: 540,
    pricePerDay: 1100,
    pricePerMonth: 29000,
    shifts: ['12-Hour Day Shift', '24-Hour Residential'],
    verified: true,
    badge: 'Background Verified • Trained',
    description: 'Compassionate assistance for senior citizens with activities of daily living: bathing, diaper changes, wheelchair transfers, feeding, and fall prevention.',
    includes: ['Assistance with personal hygiene', 'Timed medicine reminders', 'Assisted walking & wheelchair mobility', 'Companion care & mental stimulation'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'care-4',
    title: 'Wound Dressing & Injection Specialist Visit',
    category: 'Short Visit Procedure',
    rating: 4.9,
    reviewCount: 280,
    pricePerDay: 450,
    shifts: ['Per Visit (30-45 Mins)'],
    verified: true,
    badge: 'Sterile Aseptic Protocol',
    description: 'Home visits by certified nurses for sterile surgical dressing, diabetic ulcer care, bed sore staging, Ryle tube insertion, and IM/IV injections.',
    includes: ['Sterile dressing pack & antiseptic care', 'Wound photo progress documentation', 'Prescription dosage verification', 'Biomedical waste disposal'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80'
  }
];

export const EQUIPMENT_DATA = [
  {
    id: 'equip-1',
    name: 'Motorized 3-Function Hospital ICU Bed',
    category: 'Hospital Beds',
    rentalPricePerMonth: 3800,
    deposit: 5000,
    buyPrice: 42000,
    verified: true,
    sanitized: true,
    delivery: 'Delivery & Free Installation within 4 Hours',
    rating: 4.9,
    badge: 'Electric Remote Control',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&auto=format&fit=crop&q=80',
    description: 'Hospital bed with electric remote control for head elevation (0-75°), knee elevation (0-45°), and height adjustment. Includes fold-down side rails and heavy-duty castors.',
    features: ['Backrest & knee-rest electric adjustment', 'High-density waterproof mattress included', 'Collapsible safety side railings', '100% Medical Grade Sanitized']
  },
  {
    id: 'equip-2',
    name: 'Philips / Yuwell 5L Medical Oxygen Concentrator',
    category: 'Respiratory Care',
    rentalPricePerMonth: 4200,
    deposit: 6000,
    buyPrice: 48000,
    verified: true,
    sanitized: true,
    delivery: 'Immediate Express Delivery in 2 Hours',
    rating: 4.9,
    badge: '93% ± 3% O2 Purity',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    description: 'Continuous flow 5 Litres/min medical oxygen concentrator with built-in oxygen purity sensor, low noise design, and oxygen tubing starter kit.',
    features: ['Continuous 24/7 oxygen delivery', 'Digital flow meter with purity alarm', 'Includes humidifier bottle & 2 nasal cannulas', 'Doorstep calibration check']
  },
  {
    id: 'equip-3',
    name: 'ResMed AirCurve 10 Auto-BiPAP Machine',
    category: 'Respiratory Care',
    rentalPricePerMonth: 5500,
    deposit: 7500,
    buyPrice: 72000,
    verified: true,
    sanitized: true,
    delivery: 'Delivery with Technician Setup in 3 Hours',
    rating: 4.8,
    badge: 'Auto-Adjusting Pressure',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80',
    description: 'Non-invasive positive airway pressure device for COPD, sleep apnea, and respiratory support post-ICU extubation with heated humidifier and SD card data logging.',
    features: ['Auto-titrating IPAP/EPAP pressures', 'ClimateLine heated breathing tube', 'Ultra-quiet Easy-Breathe motor', 'Full mask fitting by certified respiratory technician']
  },
  {
    id: 'equip-4',
    name: 'Premium Foldable Lightweight Wheelchair',
    category: 'Mobility Equipment',
    rentalPricePerMonth: 1200,
    deposit: 2000,
    buyPrice: 7500,
    verified: true,
    sanitized: true,
    delivery: 'Same-Day Delivery in 3 Hours',
    rating: 4.9,
    badge: 'Heavy-Duty 120kg Capacity',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&auto=format&fit=crop&q=80',
    description: 'Chromed steel / alloy folding wheelchair with cushioned seat, flip-up armrests, swing-away footrests, and puncture-proof solid rubber tyres.',
    features: ['Folds compactly for car trunk storage', 'Dual attendant parking brakes', 'High-grade wipe-clean upholstery', 'Lightweight 13.5kg frame']
  },
  {
    id: 'equip-5',
    name: 'Anti-Bedsore Alternating Pressure Air Mattress',
    category: 'Bed Sore Prevention',
    rentalPricePerMonth: 950,
    deposit: 1500,
    buyPrice: 4200,
    verified: true,
    sanitized: true,
    delivery: 'Delivered with Bed or Same-Day',
    rating: 4.8,
    badge: 'Silent Pump Included',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=80',
    description: 'Bubble style alternating pressure mattress system with ultra-quiet compressor pump to prevent and relieve Stage 1 & 2 pressure ulcers.',
    features: ['Continuous 10-minute cycle alternating inflation', 'Medical grade non-toxic PVC material', 'Adjustable pressure dial for patient weight', 'Easy sanitized wipe down']
  }
];

export const BLOOD_BANKS_DATA = [
  {
    id: 'blood-1',
    name: 'Indian Red Cross Society Blood Centre',
    verified: true,
    address: '26, Red Cross Building, Race Course Road',
    city: 'Bengaluru',
    area: 'Central Bengaluru',
    distance: '2.1 km away',
    contact: '+91 80 2226 8435',
    operatingHours: '24/7 Emergency Blood Bank',
    lastUpdated: 'Updated 4 mins ago',
    inventory: {
      'A+': 18,
      'A-': 6,
      'B+': 24,
      'B-': 4,
      'O+': 32,
      'O-': 8,
      'AB+': 12,
      'AB-': 3,
      'Platelets': 15,
      'FFP': 20
    }
  },
  {
    id: 'blood-2',
    name: 'Rotary TTK Voluntary Blood Bank',
    verified: true,
    address: 'New Thippasandra Main Road, HAL 3rd Stage',
    city: 'Bengaluru',
    area: 'Indiranagar',
    distance: '3.4 km away',
    contact: '+91 80 2528 7903',
    operatingHours: '24/7 Emergency Blood Bank',
    lastUpdated: 'Updated 8 mins ago',
    inventory: {
      'A+': 14,
      'A-': 3,
      'B+': 19,
      'B-': 5,
      'O+': 22,
      'O-': 6,
      'AB+': 9,
      'AB-': 2,
      'Platelets': 11,
      'FFP': 16
    }
  },
  {
    id: 'blood-3',
    name: 'Fortis Hospital Dedicated Blood Centre',
    verified: true,
    address: '154/9 Bannerghatta Road',
    city: 'Bengaluru',
    area: 'Bannerghatta Road',
    distance: '1.4 km away',
    contact: '+91 80 6621 4400',
    operatingHours: '24/7 In-Hospital Blood Bank',
    lastUpdated: 'Updated 12 mins ago',
    inventory: {
      'A+': 12,
      'A-': 2,
      'B+': 15,
      'B-': 3,
      'O+': 18,
      'O-': 5,
      'AB+': 7,
      'AB-': 1,
      'Platelets': 8,
      'FFP': 14
    }
  }
];

export const AMBULANCES_DATA = [
  {
    id: 'amb-1',
    name: 'LifeSave Advanced Life Support (ALS) Ambulance',
    type: 'ALS Cardiac Ambulance',
    verified: true,
    vehicleNo: 'KA-01-EA-9921',
    driverName: 'Manjunath K. (Paramedic Staffed)',
    contact: '+91 98801 12345',
    etaMinutes: 8,
    distance: '1.2 km away',
    rating: 4.9,
    equipmentOnBoard: ['Defibrillator / Multi-para Monitor', 'Ventilator & Oxygen Cylinder', 'Emergency Intubation Kit', 'Emergency Cardiac Drug Kit', 'Spine Board & Stretcher'],
    baseCharge: '₹2,500 Base + ₹45/km',
    location: 'Koramangala 4th Block, Bengaluru'
  },
  {
    id: 'amb-2',
    name: 'MedExpress Basic Life Support (BLS) Ambulance',
    type: 'BLS Medical Transport',
    verified: true,
    vehicleNo: 'KA-05-MB-4028',
    driverName: 'Suresh Gowda (EMT Certified)',
    contact: '+91 98802 67890',
    etaMinutes: 12,
    distance: '2.5 km away',
    rating: 4.8,
    equipmentOnBoard: ['Oxygen Inhalation Unit', 'Suction Machine', 'Vital Signs Monitor', 'First Aid Trauma Kit', 'Wheelchair Lift'],
    baseCharge: '₹1,500 Base + ₹35/km',
    location: 'Indiranagar 100ft Road, Bengaluru'
  },
  {
    id: 'amb-3',
    name: 'CityHeart Critical Neonatal & Pediatric Ambulance',
    type: 'NICU/PICU Transport Ambulance',
    verified: true,
    vehicleNo: 'KA-04-NC-1102',
    driverName: 'Anil Kumar (Neonatal Tech Staffed)',
    contact: '+91 98803 99881',
    etaMinutes: 15,
    distance: '3.8 km away',
    rating: 5.0,
    equipmentOnBoard: ['Transport Incubator', 'Neonatal Ventilator', 'Infusion Pumps', 'Baby Warmer & Resuscitation Kit'],
    baseCharge: '₹3,500 Base + ₹50/km',
    location: 'Jayanagar 4th Block, Bengaluru'
  }
];

export const PATIENT_JOURNEY_STAGES = [
  {
    id: 'before-hospital',
    number: '01',
    title: 'BEFORE HOSPITAL',
    tagline: 'Rapid Access & Emergency Coordination',
    purpose: 'Get the patient to the right medical care without critical delays.',
    color: '#ef4444',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    accentClass: 'stage-red',
    icon: 'Ambulance',
    modules: [
      { id: 'hosp-finder', name: 'Hospital Finder', icon: 'Building2', desc: 'Real-time ICU bed & trauma capability search' },
      { id: 'amb-finder', name: 'Ambulance Dispatch', icon: 'Ambulance', desc: 'GPS tracked ALS/BLS with 8-12 min response' },
      { id: 'blood-net', name: 'Blood Network', icon: 'Droplet', desc: 'Live unit availability across verified blood banks' },
      { id: 'emerg-coord', name: 'Emergency Coordination', icon: 'AlertTriangle', desc: 'Triages Hospital + Ambulance + Blood instantly' }
    ],
    sampleScenario: {
      patient: 'Mr. Ramesh Sharma (Age 68)',
      trigger: 'Sudden chest discomfort & shortness of breath at 6:30 AM',
      mednestAction: 'Emergency module instantly located nearest Cardiac Cath-Lab (Fortis Hospital), dispatched ALS ambulance (ETA 7 mins), and alerted hospital triage with patient history from Health Vault.',
      outcome: 'Door-to-balloon time reduced by 28 minutes. Patient safely admitted directly to cardiac ICU.'
    }
  },
  {
    id: 'during-treatment',
    number: '02',
    title: 'DURING TREATMENT',
    tagline: 'Treatment Navigation & Health Vault',
    purpose: 'Streamline the in-hospital and consultation journey for patients & caregivers.',
    color: '#0284c7',
    bgColor: '#f0f9ff',
    borderColor: '#bae6fd',
    accentClass: 'stage-blue',
    icon: 'Stethoscope',
    modules: [
      { id: 'doc-disc', name: 'Doctor Discovery', icon: 'Stethoscope', desc: 'Top specialists with transparent fees & slots' },
      { id: 'diag-book', name: 'Diagnostics', icon: 'Microscope', desc: 'NABL tests, scans & digital report vault' },
      { id: 'pharm-nav', name: 'Pharmacy Support', icon: 'Pill', desc: 'Prescription verification & licensed fulfillment' },
      { id: 'hosp-info', name: 'Hospital Information', icon: 'Info', desc: 'Ward procedures, billing guides & insurance' },
      { id: 'health-vault-mod', name: 'Personal Health Vault', icon: 'ShieldCheck', desc: 'ABDM aligned secure storage for all records' }
    ],
    sampleScenario: {
      patient: 'Mr. Ramesh Sharma (Post-Angioplasty & Stent Placement)',
      trigger: 'Navigating post-op reports, medications, and physician consults',
      mednestAction: 'All angiography records, stent serial numbers, and discharge prescriptions automatically synced into encrypted Health Vault. Permitted daughter (Priya) in Mumbai received real-time updates.',
      outcome: 'Zero misplaced records; seamless transition to discharge care protocol.'
    }
  },
  {
    id: 'after-discharge',
    number: '03',
    title: 'MEDNEST CARE (AFTER DISCHARGE)',
    tagline: 'Safe Home Recovery & Continuous Care',
    purpose: 'Care does not end at discharge. We ensure safe, guided recovery at home.',
    color: '#10b981',
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    accentClass: 'stage-green',
    icon: 'HeartHandshake',
    isDifferentiator: true,
    modules: [
      { id: 'nurse-home', name: 'Nurse / Caregiver', icon: 'HeartHandshake', desc: 'ICU nurses for vitals, IV, and wound dressing' },
      { id: 'physio-home', name: 'Physiotherapy', icon: 'Activity', desc: 'Targeted home sessions for mobility restoration' },
      { id: 'equip-rent', name: 'Equipment Rental', icon: 'Accessibility', desc: 'Sanitized ICU beds, O2 concentrators, wheelchairs' },
      { id: 'med-remind', name: 'Medicine Support', icon: 'Clock', desc: 'Smart refill scheduling & adherence reminders' },
      { id: 'follow-tests', name: 'Follow-up Tests', icon: 'Microscope', desc: 'Home sample collection on doctor-scheduled dates' },
      { id: 'follow-doc', name: 'Follow-up Doctor', icon: 'UserCheck', desc: '14-day tele-consult & in-person clinic reviews' },
      { id: 'rec-track', name: 'Recovery Tracking', icon: 'LineChart', desc: 'Daily vitals, mobility score & pain scale logs' },
      { id: 'fam-dash', name: 'Family Dashboard', icon: 'Users', desc: 'Transparent updates for permitted loved ones' }
    ],
    sampleScenario: {
      patient: 'Mr. Ramesh Sharma (Day 1 to 45 Home Recovery)',
      trigger: 'Arriving home post-discharge needing oxygen support, wound dressing, and strict cardiac meds',
      mednestAction: 'Motorized hospital bed & 5L Oxygen concentrator delivered 2 hours prior to hospital discharge. Daily 12h nurse attended to surgical incision. Automated medicine reminders maintained 98% adherence.',
      outcome: '100% complication-free recovery. Zero hospital re-admissions.'
    }
  }
];

export const DEMO_HEALTH_VAULT_DOCUMENTS = [
  {
    id: 'doc-rx-101',
    title: 'Post-Angioplasty Discharge Prescription',
    category: 'Prescriptions',
    doctor: 'Dr. Rajesh Kumar (Cardiologist)',
    hospital: 'Fortis Hospital & Research Institute',
    date: '02 Oct 2026',
    fileType: 'PDF',
    size: '1.4 MB',
    verified: true,
    tags: ['Cardiology', 'Telmisartan', 'Atorvastatin', 'Aspirin'],
    contentSnippet: 'Rx: Telma 40 (1-0-0), Atorva 10 (0-0-1), Ecosprin 75 (1-0-0). Regular BP and pulse monitoring recommended twice daily.'
  },
  {
    id: 'doc-lab-202',
    title: 'Lipid Profile & Cardiac Biomarker Panel',
    category: 'Lab Reports',
    doctor: 'Metropolis Diagnostics Lab',
    hospital: 'NABL Certified Lab',
    date: '03 Oct 2026',
    fileType: 'PDF',
    size: '840 KB',
    verified: true,
    tags: ['Lipid Profile', 'Troponin-T', 'Total Cholesterol 164 mg/dL', 'LDL 88 mg/dL'],
    contentSnippet: 'Troponin-T: Negative (<0.01 ng/mL). Total Cholesterol: 164 mg/dL (Normal). HDL: 44 mg/dL. Triglycerides: 138 mg/dL.'
  },
  {
    id: 'doc-dis-303',
    title: 'Formal Inpatient Hospital Discharge Summary',
    category: 'Discharge Summary',
    doctor: 'Dr. Rajesh Kumar / Dr. S. Rao',
    hospital: 'Fortis Hospital - Department of Cardiology',
    date: '02 Oct 2026',
    fileType: 'PDF',
    size: '2.8 MB',
    verified: true,
    tags: ['Cath Lab', 'DES Stent to LAD', 'Ejection Fraction 52%', 'Discharge Stable'],
    contentSnippet: 'Diagnosis: Acute Coronary Syndrome. Procedure: Primary PCI with Drug-Eluting Stent to Mid-LAD on 28 Sep 2026. Uneventful post-procedure recovery. Discharged in hemodynamically stable condition.'
  },
  {
    id: 'doc-vac-404',
    title: 'Adult Immunization Record (Pneumococcal & Flu)',
    category: 'Vaccination Records',
    doctor: 'Apollo Clinic Center',
    hospital: 'Apollo Healthcare Registry',
    date: '15 Aug 2026',
    fileType: 'PDF',
    size: '620 KB',
    verified: true,
    tags: ['Prevnar-13', 'Quadrivalent Influenza Vaccine', 'Batch #PV2026-9'],
    contentSnippet: 'Prevnar-13 Pneumococcal Conjugate vaccine administered IM right deltoid. Annual Influenza quadrivalent booster administered.'
  },
  {
    id: 'doc-rec-505',
    title: 'MEDNEST 60-Day Post-Cardiac Rehab Protocol',
    category: 'Recovery Plan',
    doctor: 'Mednest Care Coordination Team',
    hospital: 'In Alignment with Fortis Cardiology Protocol',
    date: '02 Oct 2026',
    fileType: 'Interactive Protocol',
    size: '1.1 MB',
    verified: true,
    tags: ['Cardiac Rehab', 'Home Nurse', 'Physio Plan', 'Weekly Milestones'],
    contentSnippet: 'Phase 1 (Day 1-14): Assisted room ambulation, vitals log, low sodium diet. Phase 2 (Day 15-30): 15-minute garden walk, follow-up ECG. Phase 3 (Day 31-60): Full stamina recovery.'
  }
];

export const DEMO_FAMILY_DASHBOARD_DATA = {
  patient: {
    name: 'Ramesh Sharma',
    relationship: 'Father',
    age: 68,
    gender: 'Male',
    bloodGroup: 'O+ Positive',
    abhaId: '91-8472-1092-4821',
    condition: 'Post-Cardiac PCI Recovery • Day 5 of 30',
    recoveryScore: 84,
    vitalsStatus: 'Stable & Normal'
  },
  careCoordinator: {
    name: 'Priya Sharma (Daughter)',
    location: 'Mumbai (Access Permitted via Mednest)',
    role: 'Primary Care Coordinator (Full Access)'
  },
  familyMembers: [
    { id: 'fam-1', name: 'Priya Sharma', relation: 'Daughter', accessLevel: 'Full Access (Care Coordinator)', phone: '+91 98201 44556', status: 'Active' },
    { id: 'fam-2', name: 'Amit Sharma', relation: 'Son', accessLevel: 'View Vitals & Appointments', phone: '+91 98112 33445', status: 'Active' },
    { id: 'fam-3', name: 'Dr. Vivek Verma', relation: 'Family Physician', accessLevel: 'Medical Reports & Notes Only', phone: '+91 98450 77889', status: 'Active' }
  ],
  upcomingAppointments: [
    {
      id: 'apt-1',
      doctor: 'Dr. Rajesh Kumar',
      specialty: 'Cardiology Follow-Up Consult',
      hospital: 'Fortis Hospital / Video Tele-Consult',
      dateTime: 'Tomorrow, 4:00 PM',
      type: 'Video Consultation',
      status: 'Confirmed'
    },
    {
      id: 'apt-2',
      doctor: 'Sister Mary Verghese',
      specialty: 'Home Nursing Vitals & Suture Inspection',
      hospital: 'CareFirst Home Health Partner',
      dateTime: 'Tomorrow, 10:00 AM',
      type: 'Home Visit',
      status: 'Scheduled'
    }
  ],
  completedVisits: [
    {
      id: 'visit-101',
      caregiver: 'Sister Mary Verghese (B.Sc Nurse)',
      date: 'Today, 10:30 AM',
      notes: 'Surgical entry site healed with zero erythema. Blood pressure: 122/78 mmHg, Pulse: 72 bpm, SpO2: 98% on room air. Morning cardiac medications verified.',
      vitals: { bp: '122/78', pulse: '72 bpm', spo2: '98%', temp: '98.4°F' }
    },
    {
      id: 'visit-100',
      caregiver: 'Dr. Ananya Sharma (Home Physio)',
      date: 'Yesterday, 4:00 PM',
      notes: 'Conducted 20-minute supervised hallway ambulation. Patient reported zero chest tightness. Calf exercises completed.',
      vitals: { bp: '126/80', pulse: '76 bpm', spo2: '97%', temp: '98.6°F' }
    }
  ],
  medicineCompliance: {
    todayTaken: 3,
    todayTotal: 3,
    percentage: 100,
    schedule: [
      { name: 'Telma 40 (Telmisartan)', time: '08:00 AM', taken: true, status: 'Taken at 8:05 AM' },
      { name: 'Ecosprin 75 (Aspirin)', time: '01:30 PM', taken: true, status: 'Taken with lunch' },
      { name: 'Atorva 10 (Atorvastatin)', time: '09:00 PM', taken: true, status: 'Taken at 9:02 PM' }
    ]
  },
  scheduledTests: [
    {
      id: 'test-sch-1',
      test: 'Follow-Up Lipid Profile & Serum Creatinine',
      date: 'Oct 10, 2026 (7:30 AM)',
      partner: 'Metropolis Home Sample Collection',
      status: 'Confirmed'
    }
  ]
};

export const PROVIDER_DATA = {
  activeProfile: {
    id: 'prov-fortis',
    name: 'Fortis Hospital Bannerghatta',
    category: 'Hospital Network Partner',
    verified: true,
    licenseNo: 'KA-MED-HOSP-2024-8891',
    accreditation: 'NABH Level 3 & JCI',
    contactPerson: 'Dr. Sunita Deshmukh (Medical Director)',
    phone: '+91 80 6621 4444',
    rating: 4.9,
    totalBookingsFulfilled: 1420,
    activeBookingsCount: 18,
    emergencyResponseTime: '3.4 mins avg',
    acceptingPatients: true
  },
  categories: [
    { id: 'hospitals', name: 'Hospitals & Trauma Centers', count: 42, icon: 'Building2' },
    { id: 'doctors', name: 'Doctors & Specialists', count: 320, icon: 'Stethoscope' },
    { id: 'blood', name: 'Blood Banks & Donors', count: 18, icon: 'Droplet' },
    { id: 'ambulances', name: 'Ambulance Fleet Operators', count: 65, icon: 'Ambulance' },
    { id: 'diagnostics', name: 'Diagnostic Labs & Imaging', count: 84, icon: 'Microscope' },
    { id: 'pharmacies', name: 'Licensed Pharmacies', count: 140, icon: 'Pill' },
    { id: 'homecare', name: 'Home Care Nursing Agencies', count: 38, icon: 'HeartHandshake' },
    { id: 'equipment', name: 'Medical Equipment Rental Partners', count: 26, icon: 'Accessibility' }
  ],
  liveRequests: [
    {
      id: 'req-1',
      patientName: 'Kavita Sundaram',
      service: 'Emergency ICU Bed Booking',
      urgency: 'HIGH (Immediate)',
      timeAgo: '2 mins ago',
      contact: '+91 98450 11223',
      status: 'Pending Acceptance'
    },
    {
      id: 'req-2',
      patientName: 'Ramesh Sharma',
      service: 'Cardiology 14-Day Post-Op Follow-up',
      urgency: 'Scheduled',
      timeAgo: '15 mins ago',
      contact: '+91 98201 44556',
      status: 'Confirmed'
    },
    {
      id: 'req-3',
      patientName: 'Mohammed Tariq',
      service: '5L Oxygen Concentrator Rental (1 Month)',
      urgency: 'Standard Delivery',
      timeAgo: '42 mins ago',
      contact: '+91 97410 88990',
      status: 'Dispatched for Setup'
    }
  ],
  equipmentInventory: [
    { name: 'Motorized ICU Bed 3-Function', total: 15, rented: 12, available: 3 },
    { name: '5L Medical Oxygen Concentrator', total: 20, rented: 17, available: 3 },
    { name: 'BiPAP Non-Invasive Ventilator', total: 10, rented: 8, available: 2 },
    { name: 'Foldable Lightweight Wheelchair', total: 30, rented: 22, available: 8 },
    { name: 'Alternating Air Mattress', total: 25, rented: 19, available: 6 }
  ],
  analytics: {
    monthlyBookings: 348,
    patientSatisfaction: '98.4%',
    slaAdherence: '99.1%',
    verifiedRevenue: '₹14,82,000'
  }
};

export const TRUST_PILLARS = [
  {
    id: 'trust-1',
    title: '100% Verified Providers',
    subtitle: 'Physical & Digital Credential Verification',
    desc: 'Every hospital, doctor, diagnostic lab, nursing agency, and ambulance operator undergoes multi-tier physical inspection and clinical license verification before onboarding.',
    icon: 'ShieldCheck',
    color: '#0284c7'
  },
  {
    id: 'trust-2',
    title: 'Strict License & Qualification Audits',
    subtitle: 'NMC, NABL, NABH & Drug Control Aligned',
    desc: 'Doctors verified against National Medical Commission (NMC) registries; labs verified with NABL accreditation; pharmacies certified with valid Form 20/21 drug licenses.',
    icon: 'Award',
    color: '#7c3aed'
  },
  {
    id: 'trust-3',
    title: 'Real-Time Dynamic Availability',
    subtitle: 'Zero Ghost Listings or Stale Data',
    desc: 'ICU bed availability, blood unit counts, ambulance GPS locations, and medicine inventory are refreshed dynamically every 5-15 minutes with automated timestamp verification.',
    icon: 'Clock',
    color: '#059669'
  },
  {
    id: 'trust-4',
    title: 'ABDM-Aligned Health Data Privacy',
    subtitle: '256-Bit Encrypted & Consent-First',
    desc: 'Your health records in My Health Vault are stored with banking-grade AES-256 encryption. We never share or monetize your clinical information without your explicit digital consent.',
    icon: 'Lock',
    color: '#d97706'
  },
  {
    id: 'trust-5',
    title: 'Granular Patient Consent Controls',
    subtitle: 'You Control Who Sees What & When',
    desc: 'You decide whether a family member or consulting doctor sees your complete records, only vitals, or time-bound post-discharge reports. Revoke access with 1 click anytime.',
    icon: 'Key',
    color: '#db2777'
  },
  {
    id: 'trust-6',
    title: '100% Authentic Completed Ratings',
    subtitle: 'No Paid or Fabricated Reviews',
    desc: 'Reviews and ratings can only be submitted by verified patients who have successfully completed a confirmed booking through the MEDNEST platform.',
    icon: 'Star',
    color: '#eab308'
  },
  {
    id: 'trust-7',
    title: '24/7 Escalation & Patient Advocacy',
    subtitle: 'Dedicated Clinical Grievance Cell',
    desc: 'Our 24/7 escalation desk monitors active emergency dispatches, resolves billing ambiguities, and ensures patient safety standards across all partner networks.',
    icon: 'Headphones',
    color: '#ef4444'
  }
];
