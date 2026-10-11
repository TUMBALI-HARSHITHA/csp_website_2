/**
 * CareerPath – Discover Your Future
 * Interactive Engine: Mind Map, Pan & Zoom, Search, Modal, Quiz & Accordion
 * Built with Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. Comprehensive Mind Map Data Model (Matching Reference Image)
  // ==========================================================================
  const nodeDatabase = {
    // --- Intermediate Root & Sub-branches ---
    'intermediate-root': {
      title: 'Intermediate (10+2 / Higher Secondary)',
      branch: 'Intermediate',
      duration: '2 Years',
      icon: '📚',
      pathwayFilter: 'intermediate',
      description: 'A 2-year pre-university academic course that bridges school education and undergraduate university degrees. Divided into Science, Commerce, Arts/Humanities, and Vocational tracks.',
      eligibility: 'Passed 10th Standard (SSC / CBSE / ICSE) with minimum qualifying marks.',
      furtherStudies: 'B.Tech/B.E., MBBS, BDS, B.Pharm, B.Com, BBA, B.A., Integrated 5-Yr Law (B.A. LLB), NDA, Merchant Navy, B.Sc. degrees.',
      careers: 'Software Engineer, Doctor, Chartered Accountant, Corporate Lawyer, Civil Servant (IAS/IPS), Commercial Pilot, Data Analyst.',
      exams: 'JEE Main & Advanced, NEET-UG, CLAT, CA Foundation, CUET, State CETs, APRJC.',
      links: [
        { label: 'APRJC Official Portal', url: 'https://www.aprs.cgg.gov.in' },
        { label: 'Explore Pathways Section', url: '#pathways' }
      ]
    },
    'science-group': {
      title: 'Intermediate Science Stream',
      branch: 'Intermediate',
      duration: '2 Years',
      icon: '🔬',
      pathwayFilter: 'intermediate',
      description: 'Rigorous science and mathematics curriculum designed for students pursuing technological, medical, pure research, and scientific careers.',
      eligibility: 'Passed 10th Standard with strong marks in Mathematics and General Sciences.',
      furtherStudies: 'Engineering (B.Tech), Medicine (MBBS/BDS), Agriculture, Pharmacy, Pure Sciences (BS-MS).',
      careers: 'Scientist, Engineer, Medical Specialist, Research Officer, Defense Pilot.',
      exams: 'JEE, NEET, BITSAT, State Engineering & Medical CETs.',
      links: [{ label: 'View Science Pathways', url: '#pathways' }]
    },
    'mpc': {
      title: 'MPC – Mathematics, Physics, Chemistry',
      branch: 'Intermediate Science',
      duration: '2 Years',
      icon: '📐',
      pathwayFilter: 'intermediate',
      description: 'Core analytical and technological stream. Focuses on advanced mathematics, Newtonian & modern physics, and physical/organic chemistry.',
      eligibility: 'Passed 10th Standard with strong aptitude in Algebra, Geometry, and Physical Science.',
      furtherStudies: 'B.Tech/B.E. (all engineering branches), B.Arch (Architecture), NDA (Defense Forces), B.Sc. Computer Science / Mathematics, Commercial Pilot Training, Merchant Navy.',
      careers: 'Software Engineer, AI Specialist, Mechanical/Civil Engineer, Aerospace Scientist, Military Officer, Data Scientist, Quantitative Trader.',
      exams: 'JEE Main, JEE Advanced, BITSAT, State CETs (EAMCET, KCET, MHT-CET, etc.), NATA (Architecture), NDA Entrance.',
      links: [{ label: 'Detailed MPC Pathway', url: '#pathways' }]
    },
    'bipc': {
      title: 'BiPC – Biology, Physics, Chemistry',
      branch: 'Intermediate Science',
      duration: '2 Years',
      icon: '🧬',
      pathwayFilter: 'intermediate',
      description: 'Dedicated stream for living organisms, physiology, cellular biology, and medical sciences without advanced calculus.',
      eligibility: 'Passed 10th Standard with passion for biological systems and chemistry.',
      furtherStudies: 'MBBS (Medicine), BDS (Dentistry), BAMS/BHMS, B.Pharm, Pharm.D, B.Sc. Agriculture, BVSc (Veterinary), B.Sc. Nursing, Biotechnology, Physiotherapy (BPT).',
      careers: 'Doctor, Surgeon, Pharmacist, Clinical Research Associate, Agricultural Officer, Veterinarian, Bio-technologist, Hospital Administrator.',
      exams: 'NEET-UG, ICAR AIEEA (Agriculture), AIIMS Paramedical, State Agri/Pharma CETs.',
      links: [{ label: 'Detailed BiPC Pathway', url: '#pathways' }]
    },
    'library-science': {
      title: 'Library Science (Diploma / Certificate)',
      branch: 'Intermediate / Vocational',
      duration: '1 to 2 Years',
      icon: '📖',
      pathwayFilter: 'intermediate',
      description: 'Focuses on library organization, information cataloging, digital archive indexing, and database management.',
      eligibility: 'Passed 10th Standard or equivalent from recognized board.',
      furtherStudies: 'Bachelor of Library and Information Science (B.Lib.I.Sc.), Master of Library Science (M.Lib.I.Sc.).',
      careers: 'Assistant Librarian, Digital Archive Assistant, Documentation Specialist in universities, public libraries, and research institutions.',
      exams: 'State Vocational Board Entrance / University Merit Admission.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'commerce-group': {
      title: 'Intermediate Commerce Stream',
      branch: 'Intermediate',
      duration: '2 Years',
      icon: '💼',
      pathwayFilter: 'intermediate',
      description: 'Focuses on financial accounting, trade, business economics, and commercial administration.',
      eligibility: 'Passed 10th Standard from any recognized education board.',
      furtherStudies: 'B.Com, BBA, Integrated Law (B.A. LLB / BBA LLB), CA, CS, CMA.',
      careers: 'Accountant, Financial Analyst, Corporate Manager, Banker, Legal Advisor.',
      exams: 'CA Foundation, CS Executive Entrance (CSEET), CLAT, CUET.',
      links: [{ label: 'Detailed Commerce Pathway', url: '#pathways' }]
    },
    'cec': {
      title: 'CEC – Civics, Economics, Commerce',
      branch: 'Intermediate Commerce',
      duration: '2 Years',
      icon: '⚖️',
      pathwayFilter: 'intermediate',
      description: 'Combines trade accounting and microeconomics with political governance and legal frameworks. Does not require advanced calculus.',
      eligibility: 'Passed 10th Standard. Suited for students interested in law, governance, and business.',
      furtherStudies: 'Integrated 5-Year Law (B.A. LLB / BBA LLB), B.Com (Computer Applications, Taxation), BBA, Company Secretary (CS), CMA, Event & Hotel Management.',
      careers: 'Corporate Lawyer, Legal Advocate, Business Administrator, Human Resources Manager, Banking Executive, Marketing Strategist.',
      exams: 'CLAT (Common Law Admission Test), AILET, CSEET (Company Secretary), State Law CETs, CUET.',
      links: [{ label: 'Detailed CEC Pathway', url: '#pathways' }]
    },
    'arts-group': {
      title: 'Intermediate Arts & Humanities Stream',
      branch: 'Intermediate',
      duration: '2 Years',
      icon: '🏛️',
      pathwayFilter: 'intermediate',
      description: 'Explores human society, history, economics, governance, literature, and social psychology.',
      eligibility: 'Passed 10th Standard. Curiosity for societal issues, reading, and writing.',
      furtherStudies: 'B.A. (Honours), B.A. LLB, Journalism (BJMC), Fine Arts, Social Work (BSW), Civil Services preparation.',
      careers: 'Civil Servant (UPSC IAS/IPS), Journalist, Policy Analyst, Content Creator, Advocate.',
      exams: 'CUET, CLAT, NIFT/NID (Design), State PSCs.',
      links: [{ label: 'Detailed Arts Pathway', url: '#pathways' }]
    },
    'mec': {
      title: 'MEC – Mathematics, Economics, Commerce',
      branch: 'Intermediate Commerce / Arts',
      duration: '2 Years',
      icon: '📊',
      pathwayFilter: 'intermediate',
      description: 'A quantitative powerhouse blending higher mathematics with economics, commerce, and financial accounting.',
      eligibility: 'Passed 10th Standard with sound arithmetic and logical reasoning skills.',
      furtherStudies: 'Chartered Accountancy (CA Foundation), CMA, Actuarial Science, B.Com (Honours), B.Sc. Statistics / Data Analytics, BBA / IPMAT (IIM 5-Year Management).',
      careers: 'Chartered Accountant, Investment Banker, Actuary, Financial Risk Analyst, Stock Market Strategist, Corporate Finance Officer.',
      exams: 'CA Foundation (ICAI), IPMAT (IIM Indore/Rohtak), CMA Foundation, CUET UG.',
      links: [{ label: 'Detailed MEC Pathway', url: '#pathways' }]
    },
    'hec': {
      title: 'HEC – History, Economics, Civics',
      branch: 'Intermediate Arts',
      duration: '2 Years',
      icon: '📜',
      pathwayFilter: 'intermediate',
      description: 'Foundational social sciences stream covering Indian & world history, economic thought, and political governance.',
      eligibility: 'Passed 10th Standard from any recognized education board.',
      furtherStudies: 'B.A. (History/Pol. Science/Economics), 5-Year Integrated Law, Bachelor of Journalism & Mass Communication (BJMC), Psychology, Social Work.',
      careers: 'Civil Servant (UPSC IAS, IPS, State Group 1), Investigative Journalist, Legal Advocate, Public Relations Executive, Policy Researcher.',
      exams: 'CUET UG, CLAT, State Civil Services Preliminary exams (after degree).',
      links: [{ label: 'Detailed HEC Pathway', url: '#pathways' }]
    },
    'others-group': {
      title: 'Creative, Aesthetic & Vocational Tracks',
      branch: 'Intermediate / Vocational Tracks',
      duration: '1 to 2 Years',
      icon: '🎨',
      pathwayFilter: 'vocational',
      description: 'Applied creative arts and lifestyle trade certifications providing early self-employment and specialized studio careers.',
      eligibility: 'Passed 10th Standard with visual or creative aptitude.',
      furtherStudies: 'Diploma in Fashion/Jewelry Design, Bachelor of Vocation (B.Voc), Professional Academy Certifications.',
      careers: 'Boutique Owner, Fashion Stylist, Jewelry Designer, Studio Photographer, Cosmetology Consultant.',
      exams: 'Institute-level Aptitude / Portfolio review (e.g. NIFT, GIA, Pearl Academy).',
      links: [{ label: 'View Vocational Pathways', url: '#pathways' }]
    },
    'beauty-cosmetology': {
      title: 'Beauty & Cosmetology',
      branch: 'Vocational / Aesthetics',
      duration: '6 Months to 1 Year',
      icon: '💄',
      pathwayFilter: 'vocational',
      description: 'Skincare, professional hair dressing, personal aesthetics, bridal makeup, and cosmetology salon management.',
      eligibility: '10th Standard pass from any board.',
      furtherStudies: 'Advanced CIDESCO Diploma in Cosmetology, Hair Dressing Masterclasses.',
      careers: 'Professional Makeup Artist, Salon Owner, Aesthetician, Beauty Consultant in film and bridal industry.',
      exams: 'State Vocational Certification / CIDESCO exams.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'jewelry-designing': {
      title: 'Jewelry Designing',
      branch: 'Vocational / Design',
      duration: '1 to 2 Years',
      icon: '💎',
      pathwayFilter: 'vocational',
      description: 'Gemology, precious metal craftsmanship, manual jewelry sketching, and Matrix/Rhino 3D CAD design.',
      eligibility: '10th Standard pass with drawing aptitude and attention to detail.',
      furtherStudies: 'Diploma in Gemology (GIA / IGI), B.Des in Accessory Design (NIFT).',
      careers: 'Jewelry CAD Designer, Gemologist, Retail Jewelry Merchandiser, Custom Jewelry Artisan.',
      exams: 'GIA Admissions / NIFT Entrance.',
      links: [{ label: 'NIFT Official Portal', url: 'https://www.nift.ac.in' }]
    },
    'fashion-designing': {
      title: 'Fashion Designing',
      branch: 'Vocational / Design',
      duration: '1 to 2 Years',
      icon: '👗',
      pathwayFilter: 'vocational',
      description: 'Garment construction, pattern making, textile studies, fashion illustration, and boutique apparel merchandising.',
      eligibility: '10th Standard pass with an artistic eye for clothing and textiles.',
      furtherStudies: 'B.Des Fashion Design (NIFT / NID / Pearl Academy), B.Voc Fashion Technology.',
      careers: 'Fashion Stylist, Apparel Designer, Wardrobe Coordinator, Boutique Entrepreneur, Quality Controller.',
      exams: 'NIFT Entrance, NID DAT, UCEED.',
      links: [{ label: 'NIFT Official Portal', url: 'https://www.nift.ac.in' }]
    },
    'photography': {
      title: 'Photography & Digital Imaging',
      branch: 'Vocational / Media',
      duration: '6 Months to 1 Year',
      icon: '📷',
      pathwayFilter: 'vocational',
      description: 'DSLR/Mirrorless camera mechanics, studio lighting, photojournalism, portraiture, and Adobe Lightroom/Photoshop grading.',
      eligibility: '10th Standard pass.',
      furtherStudies: 'Diploma in Cinematography, B.A. in Visual Communication, Commercial Advertising Photography.',
      careers: 'Commercial Photographer, Wedding Photographer, Photojournalist, Wildlife Photographer, Studio Owner.',
      exams: 'Portfolio Evaluation at Photography Academies.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },

    // --- Polytechnic Root & 21 Branches in Reference Order ---
    'polytechnic-root': {
      title: 'Polytechnic Diploma in Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '⚙️',
      pathwayFilter: 'polytechnic',
      description: 'A 3-year applied, hands-on engineering diploma across 21 specialized technical branches. Enables direct lateral entry into 2nd-year B.Tech / B.E.',
      eligibility: 'Passed 10th Standard with Mathematics and Science. Admission via State POLYCET / JEECUP / Merit.',
      furtherStudies: 'Direct Lateral Entry to 2nd Year B.Tech / B.E. (via ECET, JELET, bypassing 1st year).',
      careers: 'Junior Engineer (JE) in Indian Railways, Electricity Boards, PWD, PSUs; CAD Designer, Plant Supervisor.',
      exams: 'State POLYCET (e.g. AP POLYCET, TS POLYCET, JEECUP).',
      links: [
        { label: 'AP POLYCET Official Portal', url: 'https://polycet.nic.in' },
        { label: 'AICTE Technical Portal', url: 'https://www.aicte-india.org' }
      ]
    },
    'poly-mechanical': {
      title: 'Diploma in Mechanical Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '⚙️',
      pathwayFilter: 'polytechnic',
      description: 'Thermodynamics, machine drawing, manufacturing technology, fluid mechanics, and CAD/CAM.',
      eligibility: 'Passed 10th Standard with Science & Maths; qualifying score in State POLYCET.',
      furtherStudies: 'B.Tech Mechanical Engineering (Lateral Entry to 2nd year via ECET).',
      careers: 'Junior Engineer (Railways, BHEL, NTPC, L&T), Production Supervisor, CNC Programmer.',
      exams: 'State POLYCET (Admission), State ECET (Lateral Entry to B.Tech).',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-computer-science': {
      title: 'Diploma in Computer Science & Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '💻',
      pathwayFilter: 'polytechnic',
      description: 'Computer programming (C, C++, Java, Python), database systems, operating systems, and computer hardware/networking.',
      eligibility: 'Passed 10th Standard with Mathematics & Science; State POLYCET rank.',
      furtherStudies: 'B.Tech Computer Science & Engineering / AI & Data Science (Lateral Entry).',
      careers: 'Junior Software Developer, Web Developer, IT Support Engineer, System Administrator.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'Detailed Polytechnic Info', url: '#pathways' }]
    },
    'poly-civil': {
      title: 'Diploma in Civil Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🏗️',
      pathwayFilter: 'polytechnic',
      description: 'Building materials, surveying, structural mechanics, concrete technology, and AutoCAD civil drafting.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Civil Engineering (Lateral Entry to 2nd year).',
      careers: 'Junior Engineer (PWD, Municipal Corporations, NHAI), Site Supervisor, Quality Surveyor.',
      exams: 'State POLYCET, SSC Junior Engineer (JE) exam.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-eee': {
      title: 'Diploma in Electrical & Electronics Engineering (EEE)',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '⚡',
      pathwayFilter: 'polytechnic',
      description: 'Power transmission, electrical machines, circuits, power electronics, and electrical control panels.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech EEE (Lateral Entry to 2nd year).',
      careers: 'Substation Operator, Junior Engineer in State Power Grid/DISCOMs, Industrial Maintenance Tech.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'Detailed Polytechnic Info', url: '#pathways' }]
    },
    'poly-it': {
      title: 'Diploma in Information Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🌐',
      pathwayFilter: 'polytechnic',
      description: 'Network protocols, cloud infrastructure, database administration, web applications, and cyber security.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Information Technology / Computer Science (Lateral Entry).',
      careers: 'Network Operations Technician, IT Support Specialist, Database Assistant.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'Detailed Polytechnic Info', url: '#pathways' }]
    },
    'poly-automobile': {
      title: 'Diploma in Automobile Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🚗',
      pathwayFilter: 'polytechnic',
      description: 'Internal combustion engines, automotive electricals, hybrid/EV technology, transmission, and chassis dynamics.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Automobile / Mechanical Engineering (Lateral Entry).',
      careers: 'Automobile Service Engineer, Vehicle Testing Technician (Maruti, Tata, Hyundai), Fleet Supervisor.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-ece': {
      title: 'Diploma in Electronics & Communication Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '📡',
      pathwayFilter: 'polytechnic',
      description: 'Microprocessors, semiconductor devices, telecommunications, optical fiber, and embedded systems.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech ECE (Lateral Entry to 2nd year).',
      careers: 'Telecom Junior Engineer (BSNL, Airtel), Embedded System Technician, Hardware Quality Inspector.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'Detailed Polytechnic Info', url: '#pathways' }]
    },
    'poly-biotech': {
      title: 'Diploma in Bio-Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🧪',
      pathwayFilter: 'polytechnic',
      description: 'Biochemical engineering, microbiology, fermentation technology, and bio-industrial manufacturing.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Biotechnology / Biochemical Engineering (Lateral Entry).',
      careers: 'Bio-process Technician, Quality Control Analyst in pharma and fermentation plants.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-electrical': {
      title: 'Diploma in Electrical Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🔌',
      pathwayFilter: 'polytechnic',
      description: 'Electrical wiring, industrial switchgear, motor drives, transformer maintenance, and safety codes.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Electrical Engineering (Lateral Entry).',
      careers: 'Electrical Inspector Assistant, Railway Traction Technician, Plant Electrical Supervisor.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-chemical': {
      title: 'Diploma in Chemical Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '⚗️',
      pathwayFilter: 'polytechnic',
      description: 'Unit operations, heat and mass transfer, petrochemical processing, distillation, and plant safety.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Chemical Engineering (Lateral Entry).',
      careers: 'Refinery Plant Operator, Petrochemical Tech (IOCL, HPCL, ONGC), Fertilizer Plant Supervisor.',
      exams: 'State POLYCET, State ECET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-aeronautical': {
      title: 'Diploma in Aeronautical Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '✈️',
      pathwayFilter: 'polytechnic',
      description: 'Aerodynamics, aircraft structures, jet propulsion engines, avionics, and aircraft maintenance basics.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Aerospace / Aeronautical Engineering (Lateral Entry).',
      careers: 'Aviation Technician, Aircraft Maintenance Apprentice, Ground Support Tech in airlines/airports.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-agriculture': {
      title: 'Diploma in Agricultural Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🌾',
      pathwayFilter: 'polytechnic',
      description: 'Farm machinery (tractors, harvesters), micro-irrigation systems, soil & water conservation, crop processing.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Agricultural Engineering (Lateral Entry via state entrance).',
      careers: 'Agricultural Extension Officer, Farm Equipment Service Specialist, Irrigation Project Assistant.',
      exams: 'State POLYCET / Agri CET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-architecture': {
      title: 'Diploma in Architectural Assistantship',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🏛️',
      pathwayFilter: 'polytechnic',
      description: 'Architectural drafting, 3D building modeling (Revit/SketchUp), building bylaws, and interior space layout.',
      eligibility: 'Passed 10th Standard with Maths & Drawing skills.',
      furtherStudies: 'B.Arch (via NATA / JEE Paper 2), B.Plan, Advanced Interior Design.',
      careers: 'Assistant Architect, Architectural Draughtsman, Interior Design Coordinator.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-biomedical': {
      title: 'Diploma in Bio-Medical Engineering',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🩻',
      pathwayFilter: 'polytechnic',
      description: 'Hospital medical imaging (X-ray, MRI, ultrasound), patient monitoring systems, calibration, and biomedical safety.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Biomedical Engineering (Lateral Entry).',
      careers: 'Hospital Biomedical Service Engineer, Medical Equipment Installation Specialist, Diagnostics Tech.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-marine': {
      title: 'Diploma in Marine Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🚢',
      pathwayFilter: 'polytechnic',
      description: 'Marine diesel engines, naval architecture, ship propulsion systems, shipyard fabrication, and offshore machinery.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Marine Engineering / Naval Architecture (Lateral Entry).',
      careers: 'Shipyard Junior Engineer, Dockyard Maintenance Tech, Merchant Shipping Junior Engineer.',
      exams: 'State POLYCET, IMU-CET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-mining': {
      title: 'Diploma in Mining Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '⛏️',
      pathwayFilter: 'polytechnic',
      description: 'Mine ventilation, blasting technology, mineral extraction geology, safety regulations, and heavy earth equipment.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Mining Engineering (Lateral Entry).',
      careers: 'Overman / Mining Sirdar in Coal India Ltd, NMDC, Singareni Collieries, Mine Safety Inspector.',
      exams: 'State POLYCET, DGMS Competency Certificates.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-leather': {
      title: 'Diploma in Leather Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '👞',
      pathwayFilter: 'polytechnic',
      description: 'Leather tanning chemistry, footwear design, leather goods manufacture, eco-friendly effluent treatment.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Leather Technology (Lateral Entry) at premier institutions like CLRI.',
      careers: 'Tannery Supervisor, Footwear Quality Controller, Production Manager in export houses.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-textile': {
      title: 'Diploma in Textile Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🧵',
      pathwayFilter: 'polytechnic',
      description: 'Yarn spinning, fabric weaving, textile chemical processing, knitting technology, and fabric testing.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'B.Tech Textile Technology / Textile Chemistry (Lateral Entry).',
      careers: 'Textile Mill Shift Supervisor, Quality Assurance Officer, Spinning Technologist.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-petroleum': {
      title: 'Diploma in Petroleum Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🛢️',
      pathwayFilter: 'polytechnic',
      description: 'Drilling techniques, petroleum exploration geology, pipeline transport, crude oil refining, and offshore safety.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Petroleum Engineering (Lateral Entry).',
      careers: 'Drilling Rig Technician, Petroleum Pipeline Operator, Terminal Tech in ONGC, Oil India, GAIL.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },
    'poly-plastic': {
      title: 'Diploma in Plastic Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🧪',
      pathwayFilter: 'polytechnic',
      description: 'Polymer processing, injection moulding, blow moulding, mould design, and plastic testing standards (CIPET).',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Plastics & Polymer Technology (Lateral Entry) / CIPET Post-Diplomas.',
      careers: 'Moulding Production Supervisor, Quality Inspector in packaging, automotive plastic components.',
      exams: 'State POLYCET / CIPET JEE.',
      links: [{ label: 'CIPET Official Portal', url: 'https://www.cipet.gov.in' }]
    },
    'poly-rubber': {
      title: 'Diploma in Rubber Technology',
      branch: 'Polytechnic',
      duration: '3 Years',
      icon: '🛞',
      pathwayFilter: 'polytechnic',
      description: 'Rubber vulcanization, compounding, tyre manufacturing technology, polymer testing, and quality management.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'B.Tech Polymer & Rubber Technology (Lateral Entry).',
      careers: 'Tyre Manufacturing Technician (MRF, Apollo, CEAT), Rubber Compounding Supervisor.',
      exams: 'State POLYCET.',
      links: [{ label: 'POLYCET Portal', url: 'https://polycet.nic.in' }]
    },

    // --- IIIT (Integrated 6 Years) ---
    'iiit-root': {
      title: 'IIIT – Integrated 6-Year B.Tech Program',
      branch: 'IIIT (RGUKT)',
      duration: '6 Years (2 Yrs PUC + 4 Yrs B.Tech)',
      icon: '🎓',
      pathwayFilter: 'polytechnic',
      description: 'Prestigious Rajiv Gandhi University of Knowledge Technologies (RGUKT) program established for high-performing 10th students (rural and state toppers). Bypasses Intermediate entrance coaching and guarantees direct B.Tech in CSE, ECE, Mechanical, Civil, Chemical, or MME.',
      eligibility: '10th Standard SSC pass with exceptional GPA / marks. Specific reservation for rural government school toppers in AP & Telangana (Basar, Nuzvid, RK Valley, Srikakulam, Ongole).',
      furtherStudies: 'M.Tech, MS abroad, MBA at IIMs, Ph.D.',
      careers: 'Software Engineer at tier-1 MNCs, Data Scientist, Hardware Design Engineer, Civil Services.',
      exams: 'Admission based on 10th Standard GPA / State Common Entrance notification.',
      links: [
        { label: 'RGUKT AP Portal', url: 'https://www.rgukt.in' },
        { label: 'RGUKT Basar Portal', url: 'https://www.rgukt.ac.in' }
      ]
    },

    // --- ITI Root & Trades in Reference Order ---
    'iti-root': {
      title: 'ITI – Industrial Training Institute Trades',
      branch: 'ITI Trades',
      duration: '1 to 2 Years',
      icon: '🔧',
      pathwayFilter: 'iti',
      description: 'Hands-on craftsmen technical vocational training regulated by Directorate General of Training (DGT / NCVT). Direct industrial employment and apprenticeships.',
      eligibility: 'Passed 10th Standard (some basic trades accept 8th pass).',
      furtherStudies: 'National Apprenticeship Certificate (NAC), Lateral Entry to 2nd Year Polytechnic Diploma.',
      careers: 'Railway Technician, Assistant Loco Pilot (RRB), PSU Craftsman (BHEL, ONGC, SAIL), Certified Electrician.',
      exams: 'All India Trade Test (AITT) for National Trade Certificate (NTC).',
      links: [
        { label: 'DGT Official Portal', url: 'https://dgt.gov.in' },
        { label: 'Explore ITI Pathways', url: '#pathways' }
      ]
    },
    'iti-fitter': {
      title: 'ITI Fitter Trade',
      branch: 'ITI Trades',
      duration: '2 Years',
      icon: '🔩',
      pathwayFilter: 'iti',
      description: 'Precision bench work, metal cutting, assembly, drilling, tapping, fitting components according to engineering blueprints.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'National Apprenticeship Certificate (NAC), Direct Lateral Entry to 2nd-year Diploma in Mechanical.',
      careers: 'Railway Technician, Mechanical Assembler in automotive and defense factories, Machine Tool Fitter.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-computer': {
      title: 'ITI Computer / COPA Trade',
      branch: 'ITI Trades',
      duration: '1 Year',
      icon: '🖥️',
      pathwayFilter: 'iti',
      description: 'Computer Operator & Programming Assistant (COPA). PC hardware assembly, MS Office, basic Python/JavaScript, internet safety.',
      eligibility: 'Passed 10th Standard from any recognized board.',
      furtherStudies: 'Polytechnic Diploma in Computer Science (Lateral entry in select states).',
      careers: 'Computer Operator, Data Entry Executive, IT Helpdesk Technician in government and private offices.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-civil-draughtsman': {
      title: 'ITI Civil (Draughtsman) Trade',
      branch: 'ITI Trades',
      duration: '2 Years',
      icon: '📐',
      pathwayFilter: 'iti',
      description: 'Civil structural drawings, building plan drafting using AutoCAD, surveying calculations, and construction estimates.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'Diploma in Civil Engineering (Lateral Entry), Apprenticeship.',
      careers: 'Draughtsman in PWD, Municipal Town Planning offices, Architectural firms.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-mechanical': {
      title: 'ITI Mechanical Cluster Trades',
      branch: 'ITI Trades',
      duration: '1 to 2 Years',
      icon: '⚙️',
      pathwayFilter: 'iti',
      description: 'Comprehensive mechanical group covering consumer electronic repair, motor vehicle servicing, diesel locomotives, and marine equipment.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'Polytechnic Diploma Lateral Entry, Apprenticeship.',
      careers: 'Loco Pilot Assistant, Fleet Maintenance Technician, Industrial Mechanic.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-radio-tv': {
      title: 'ITI Radio & TV / Consumer Electronics',
      branch: 'ITI Mechanical / Electronics',
      duration: '2 Years',
      icon: '📻',
      pathwayFilter: 'iti',
      description: 'Audio systems, LED/LCD TV repair, PCB soldering, microwave ovens, and household consumer electronics troubleshooting.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'Apprenticeship in electronics manufacturing, Diploma Lateral Entry.',
      careers: 'Service Center Technician, Cable/Broadband Hardware Tech, Self-employed repair business.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-motor-vehicle': {
      title: 'ITI Mechanic (Motor Vehicle)',
      branch: 'ITI Mechanical',
      duration: '2 Years',
      icon: '🚙',
      pathwayFilter: 'iti',
      description: 'Car/commercial vehicle engine overhaul, braking systems, transmission gearboxes, auto-electrics, and vehicle diagnostic scanners.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'National Apprenticeship at Maruti/Tata/Hyundai, Diploma in Automobile.',
      careers: 'Automotive Dealership Technician, State Transport Workshop Mechanic, Fleet Service Advisor.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-diesel': {
      title: 'ITI Mechanic (Diesel)',
      branch: 'ITI Mechanical',
      duration: '1 Year',
      icon: '⛽',
      pathwayFilter: 'iti',
      description: 'Heavy diesel engine servicing, fuel injection pumps, turbochargers, railway diesel engines, and stationary generators.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'Indian Railways Diesel Shed Apprenticeship, NAC.',
      careers: 'Railway Diesel Loco Technician, Power Generator Maintenance Specialist, Heavy Earth Mover Mechanic.',
      exams: 'AITT (NCVT), RRB Technician Exam.',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-marine': {
      title: 'ITI Marine Engine Fitter',
      branch: 'ITI Mechanical',
      duration: '2 Years',
      icon: '⚓',
      pathwayFilter: 'iti',
      description: 'Marine auxiliary engines, outboard boat motors, bilge pumps, shipboard valves, and dockyard mechanical overhauls.',
      eligibility: 'Passed 10th Standard with Science & Maths.',
      furtherStudies: 'Apprenticeship in Naval Dockyards / Cochin Shipyard / Mazagon Dock.',
      careers: 'Shipyard Mechanic, Marine Workshop Technician, Port Trust Maintenance Craftsman.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-electrician-plumber': {
      title: 'ITI Electrician & Plumber Trades',
      branch: 'ITI Trades',
      duration: '1 to 2 Years',
      icon: '💡',
      pathwayFilter: 'iti',
      description: 'Domestic and commercial electrical conduit wiring, switchboards, piping layout, sanitary fittings, and water pumps.',
      eligibility: 'Passed 10th Standard from any recognized board.',
      furtherStudies: 'Licensed Electrical Wireman Certification, Master Plumber Certification.',
      careers: 'Licensed Electrical Contractor, Building Maintenance Supervisor, Facility Management Technician.',
      exams: 'State Licensing Board / AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-surveyor': {
      title: 'ITI Surveyor Trade',
      branch: 'ITI Trades',
      duration: '2 Years',
      icon: '🗺️',
      pathwayFilter: 'iti',
      description: 'Theodolite surveying, Total Station instrumentation, GPS mapping, contouring, and road highway alignment.',
      eligibility: 'Passed 10th Standard with Mathematics & Science.',
      furtherStudies: 'Diploma in Civil Engineering (Lateral Entry).',
      careers: 'Surveyor in State Revenue Department, Irrigation Project Assistant, Highway Construction Surveyor.',
      exams: 'AITT (NCVT), State Land Records Recruitment.',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-electrical': {
      title: 'ITI Electrician Trade',
      branch: 'ITI Trades',
      duration: '2 Years',
      icon: '⚡',
      pathwayFilter: 'iti',
      description: 'AC/DC motors, armature rewinding, transformer maintenance, industrial panels, and electricity board line inspection.',
      eligibility: 'Passed 10th Standard with Mathematics & Science.',
      furtherStudies: 'Diploma in Electrical Engineering (Lateral Entry), Apprenticeship.',
      careers: 'Electricity Board Lineman, Railway Electrician, Plant Maintenance Electrician, Metro Rail Technician.',
      exams: 'AITT (NCVT), RRB Technician, State Electricity Board Lineman Exams.',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-machine-tools': {
      title: 'ITI Machinist / Machine Tools',
      branch: 'ITI Trades',
      duration: '2 Years',
      icon: '🔩',
      pathwayFilter: 'iti',
      description: 'Operating conventional and CNC lathes, milling machines, shapers, surface grinders, and cutting metal dies.',
      eligibility: 'Passed 10th Standard with Maths & Science.',
      furtherStudies: 'CNC Programming Specialist, Diploma in Mechanical (Lateral Entry).',
      careers: 'CNC Machine Operator, Tool Room Craftsman, Ordnance Factory Machinist, Defense Workshop Tech.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-welder': {
      title: 'ITI Welder Trade',
      branch: 'ITI Trades',
      duration: '1 Year',
      icon: '🔥',
      pathwayFilter: 'iti',
      description: 'Shielded Metal Arc Welding (SMAW), Gas Tungsten Arc (TIG), MIG, submerged arc welding, and pipeline fabrication.',
      eligibility: 'Passed 10th Standard (also open to 8th pass).',
      furtherStudies: 'Certified Pressure Vessel Welder (IBR Certification), Underwater Welding basics.',
      careers: 'Certified IBR Welder, Shipyard Fabricator, Oil Refinery Pipeline Welder (high demand in Gulf & domestic PSUs).',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },
    'iti-firemen': {
      title: 'Fire Technology & Industrial Safety',
      branch: 'ITI Trades',
      duration: '6 Months to 1 Year',
      icon: '🚒',
      pathwayFilter: 'iti',
      description: 'Fire suppression systems, breathing apparatus, hazard identification, emergency rescue drills, and industrial safety audits.',
      eligibility: 'Passed 10th Standard with required physical fitness standards.',
      furtherStudies: 'Advanced Diploma in Industrial Safety (ADIS), NEBOSH.',
      careers: 'Municipal Fireman, Airport Fire Rescue Specialist, Industrial Safety Supervisor in chemical/oil plants.',
      exams: 'State Fire Service Recruitment, Physical Efficiency Tests.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'iti-cookery': {
      title: 'Craftsmanship in Food Production / Cookery',
      branch: 'ITI / Hospitality',
      duration: '1 Year',
      icon: '🍳',
      pathwayFilter: 'iti',
      description: 'Culinary knife skills, Indian & Continental cuisine, bakery & confectionery, hygiene standards (HACCP), and commercial kitchen management.',
      eligibility: 'Passed 10th Standard from any recognized board.',
      furtherStudies: 'Diploma in Culinary Arts, Degree in Hotel Management.',
      careers: 'Commis Chef in hotels/restaurants, Industrial Catering Supervisor, Cruise Ship Galley Cook.',
      exams: 'NCHMCT / State Vocational Trade Assessment.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'iti-paint-technology': {
      title: 'Surface Preparation & Paint Technology',
      branch: 'ITI Trades',
      duration: '1 Year',
      icon: '🎨',
      pathwayFilter: 'iti',
      description: 'Sandblasting, electrostatic powder coating, automotive spray painting, corrosion prevention, and industrial coating inspection.',
      eligibility: 'Passed 10th Standard.',
      furtherStudies: 'NACE / SSPC Coating Inspector Certification.',
      careers: 'Automotive Paint Booth Operator, Industrial Coating Technician in shipyards, bridges, and manufacturing.',
      exams: 'AITT (NCVT).',
      links: [{ label: 'DGT Portal', url: 'https://dgt.gov.in' }]
    },

    // --- Paramedical Root & Diplomas ---
    'paramedical-root': {
      title: 'Paramedical Diplomas (Allied Healthcare)',
      branch: 'Paramedical',
      duration: '3 Years',
      icon: '🏥',
      pathwayFilter: 'vocational',
      description: 'Allied medical healthcare diplomas providing clinical support in diagnostic laboratories, operation theatres, eye clinics, and public sanitation.',
      eligibility: 'Passed 10th Standard with Science & Biology subjects.',
      furtherStudies: 'B.Sc. in Medical Laboratory Technology, B.Sc. Ophthalmic Tech, Hospital Administration.',
      careers: 'Diagnostic Lab Technician, Operation Theatre Assistant, Refractionist, Sanitary Inspector in hospitals and municipalities.',
      exams: 'State Paramedical Board Entrance & Counseling.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-dlmt': {
      title: 'DLMT – Diploma in Medical Laboratory Technology',
      branch: 'Paramedical',
      duration: '3 Years (or 2 Yrs in select boards)',
      icon: '🔬',
      pathwayFilter: 'vocational',
      description: 'Clinical biochemistry, hematology, blood banking, microbiology, pathology slide preparation, and operating automated diagnostic analyzers.',
      eligibility: 'Passed 10th Standard with Science.',
      furtherStudies: 'B.Sc. MLT (Medical Laboratory Technology).',
      careers: 'Medical Lab Technician in diagnostic centers, hospitals, blood banks, and pathology labs.',
      exams: 'State Paramedical Board Entrance.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-dhfm': {
      title: 'DHFM – Diploma in Hospital Food & Facility Management',
      branch: 'Paramedical',
      duration: '3 Years',
      icon: '🥗',
      pathwayFilter: 'vocational',
      description: 'Hospital patient nutrition, dietary food preparation, therapeutic diets, biomedical waste coordination, and hospital facility hygiene.',
      eligibility: 'Passed 10th Standard.',
      furtherStudies: 'B.Sc. Clinical Nutrition, Healthcare Management.',
      careers: 'Hospital Dietary Assistant, Ward Housekeeping Supervisor, Food Quality Coordinator in hospitals.',
      exams: 'State Paramedical Board Counseling.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-doa': {
      title: 'DOA – Diploma in Ophthalmic Assistant',
      branch: 'Paramedical',
      duration: '3 Years',
      icon: '👁️',
      pathwayFilter: 'vocational',
      description: 'Vision testing, refraction error measurement, eye drops administration, assisting ophthalmologists, and spectacle lens dispensing.',
      eligibility: 'Passed 10th Standard with Science.',
      furtherStudies: 'Bachelor of Clinical Optometry (B.Optom).',
      careers: 'Ophthalmic Assistant in eye hospitals, Optometry Clinic Refractionist, Optical Store Consultant.',
      exams: 'State Paramedical Board Entrance.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-dot': {
      title: 'DOT – Diploma in Operation Theatre Technology',
      branch: 'Paramedical',
      duration: '3 Years',
      icon: '🩺',
      pathwayFilter: 'vocational',
      description: 'Surgical instrument sterilization, anesthesia equipment preparation, surgical drape setup, monitoring vitals, and surgical OT assistance.',
      eligibility: 'Passed 10th Standard with Science.',
      furtherStudies: 'B.Sc. Operation Theatre & Anesthesia Technology.',
      careers: 'Operation Theatre Technician, Surgical Assistant in multi-specialty hospitals and trauma centers.',
      exams: 'State Paramedical Board Entrance.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-health-inspector': {
      title: 'Diploma for Health Inspector',
      branch: 'Paramedical / Public Health',
      duration: '3 Years (or 2 Yrs)',
      icon: '📋',
      pathwayFilter: 'vocational',
      description: 'Community epidemic surveillance, water quality testing, vaccination camp coordination, vector control, and public health enforcement.',
      eligibility: 'Passed 10th Standard.',
      furtherStudies: 'B.Sc. Public Health, Post-Diploma in Epidemiology.',
      careers: 'Health Inspector in Municipal Corporations, Primary Health Centers (PHCs), Indian Railways Health Division.',
      exams: 'Municipal Health Inspector Recruitment Exam.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'paramed-sanitary-inspector': {
      title: 'Diploma for Sanitary Inspector',
      branch: 'Paramedical / Sanitation',
      duration: '3 Years (or 1–2 Yrs)',
      icon: '🚯',
      pathwayFilter: 'vocational',
      description: 'Urban municipal waste segregation, sewage plant monitoring, food stall hygiene inspection, pest control, and environmental sanitation laws.',
      eligibility: 'Passed 10th Standard.',
      furtherStudies: 'Diploma in Environmental Health, B.Sc. Environmental Science.',
      careers: 'Sanitary Inspector in Municipal Corporations, Cantonment Boards, Railway Stations, Airport Health Units.',
      exams: 'State Municipal / Staff Selection Commission exams.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },

    // --- Short Term Courses (6 months to 1 year) ---
    'shortterm-root': {
      title: 'Short Term Certificate Courses',
      branch: 'Short Term Courses',
      duration: '6 Months to 1 Year',
      icon: '⚡',
      pathwayFilter: 'vocational',
      description: 'Fast-track, industry-tailored computer and digital skill courses enabling quick entry into IT support, graphic design, accounting, and cybersecurity.',
      eligibility: 'Passed 10th Standard from any recognized board.',
      furtherStudies: 'Advanced Diplomas, BCA, Professional Vendor Certifications (CompTIA, Cisco, Adobe).',
      careers: 'DTP Operator, Accounting Executive, Graphic Designer, Web Designer, Junior SOC Analyst.',
      exams: 'Institute and Industry Certification Tests.',
      links: [{ label: 'Swayam Portal', url: 'https://swayam.gov.in' }]
    },
    'short-dtp': {
      title: 'DTP – Desktop Publishing',
      branch: 'Short Term Courses',
      duration: '6 Months',
      icon: '🖨️',
      pathwayFilter: 'vocational',
      description: 'Typography layout, book typesetting, printing prepress, Adobe InDesign, CorelDraw, and Photoshop formatting for print media.',
      eligibility: '10th Standard pass.',
      furtherStudies: 'Diploma in Graphic Design & Printing Technology.',
      careers: 'DTP Operator, Printing Press Layout Artist, Publishing House Assistant.',
      exams: 'State Technical Examination in DTP.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'short-pgdca': {
      title: 'PGDCA / DCA – Diploma in Computer Applications',
      branch: 'Short Term Courses',
      duration: '1 Year',
      icon: '💻',
      pathwayFilter: 'vocational',
      description: 'Office automation (Word, Excel, Access), database fundamentals, basic web browsing, operating system commands, and data processing.',
      eligibility: '10th Standard pass.',
      furtherStudies: 'BCA (Bachelor of Computer Applications), Advanced Web Development.',
      careers: 'Office Assistant, Data Entry Executive, Computer Lab Assistant in schools.',
      exams: 'State Vocational Assessment / NIELIT.',
      links: [{ label: 'NIELIT Portal', url: 'https://www.nielit.gov.in' }]
    },
    'short-tally': {
      title: 'Tally Prime & GST Accounting',
      branch: 'Short Term Courses',
      duration: '3 to 6 Months',
      icon: '📈',
      pathwayFilter: 'vocational',
      description: 'Bookkeeping, journal vouchers, inventory management, TDS calculations, payroll, and GST portal return filings using Tally Prime.',
      eligibility: '10th Standard pass with basic math familiarity.',
      furtherStudies: 'Intermediate Commerce (CEC/MEC), B.Com, Advanced SAP FICO.',
      careers: 'Junior Accountant, GST Filing Assistant, Billing Executive in retail and trading firms.',
      exams: 'Tally Certification (Tally Education).',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'short-internet': {
      title: 'Internet & Digital Services Course',
      branch: 'Short Term Courses',
      duration: '3 to 6 Months',
      icon: '🌐',
      pathwayFilter: 'vocational',
      description: 'Internet research, e-governance service delivery, online application submissions, digital banking, and managing a Common Service Centre (CSC).',
      eligibility: '10th Standard pass.',
      furtherStudies: 'Digital Marketing, E-Commerce Operations.',
      careers: 'CSC Center Operator, Cyber Kiosk Manager, Digital Assistant in rural e-governance.',
      exams: 'CSC VLE Certification.',
      links: [{ label: 'Digital India CSC Portal', url: 'https://csc.gov.in' }]
    },
    'short-graphics': {
      title: 'Graphics Design & Digital Imaging',
      branch: 'Short Term Courses',
      duration: '6 Months to 1 Year',
      icon: '🎨',
      pathwayFilter: 'vocational',
      description: 'Vector illustration, logo creation, social media branding, photo retouching, and layout using Adobe Illustrator, Photoshop, and Canva.',
      eligibility: '10th Standard pass with visual creativity.',
      furtherStudies: 'Degree in Visual Arts, UI/UX Design.',
      careers: 'Graphic Designer, Social Media Creative Artist, Ad Agency Illustrator, Freelance Designer.',
      exams: 'Portfolio Review.',
      links: [{ label: 'Explore Vocational Tracks', url: '#pathways' }]
    },
    'short-animation': {
      title: '2D & 3D Animation Foundation',
      branch: 'Short Term Courses',
      duration: '6 Months to 1 Year',
      icon: '🎬',
      pathwayFilter: 'vocational',
      description: 'Storyboarding, keyframe animation, character rigging basics, Blender 3D modeling, lighting, and video editing.',
      eligibility: '10th Standard pass with passion for cartoons, gaming, or storytelling.',
      furtherStudies: 'B.Sc. Animation & Multimedia, Game Design.',
      careers: 'Junior 2D/3D Animator, Motion Graphics Artist, Video Editor, Gaming Asset Artist.',
      exams: 'Studio Portfolio Assessment.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'short-web-designing': {
      title: 'Web Designing (Frontend)',
      branch: 'Short Term Courses',
      duration: '6 Months',
      icon: '💻',
      pathwayFilter: 'vocational',
      description: 'Building modern responsive websites using HTML5, CSS3, JavaScript, Bootstrap, and Figma web prototypes.',
      eligibility: '10th Standard pass with basic computer familiarity.',
      furtherStudies: 'Full Stack Web Development, BCA, B.Tech CSE.',
      careers: 'Junior Frontend Web Designer, WordPress Developer, Website Maintenance Executive.',
      exams: 'FreeCodeCamp / W3Schools Certification.',
      links: [{ label: 'SWAYAM Portal', url: 'https://swayam.gov.in' }]
    },
    'short-cyber-security': {
      title: 'Cyber Security Essentials',
      branch: 'Short Term Courses',
      duration: '6 Months',
      icon: '🛡️',
      pathwayFilter: 'vocational',
      description: 'Information security fundamentals, firewall basics, password hygiene, safe network configuration, and ethical hacking awareness.',
      eligibility: '10th Standard pass with computer interest.',
      furtherStudies: 'Certified Ethical Hacker (CEH), B.Tech Cyber Security.',
      careers: 'Junior Security Operations Center (SOC) Assistant, Network Security Trainee.',
      exams: 'CompTIA Security+ / Cisco Certified CyberOps.',
      links: [{ label: 'SWAYAM Cyber Security', url: 'https://swayam.gov.in' }]
    },

    // --- Examinations Box ---
    'exam-aprjc': {
      title: 'APRJC – Andhra Pradesh Residential Junior College CET',
      branch: 'Key Entrance Examination',
      duration: 'For 2-Yr Intermediate',
      icon: '🏛️',
      pathwayFilter: 'intermediate',
      description: 'Prestigious state common entrance test providing free residential intermediate education (MPC, BiPC, MEC, CEC) with free boarding, lodging, and coaching for top competitive exams (JEE, NEET, CA).',
      eligibility: '10th Standard pass from Andhra Pradesh with rural/urban category criteria.',
      furtherStudies: 'Premier undergraduate degrees across India.',
      careers: 'Highest selection rates into IITs, NITs, AIIMS, and Central Universities.',
      exams: 'APRJC Common Entrance Test (conducted annually in April/May).',
      links: [{ label: 'Official APRJC Portal', url: 'https://www.aprs.cgg.gov.in' }]
    },
    'exam-polycet': {
      title: 'State POLYCET (Polytechnic Common Entrance Test)',
      branch: 'Key Entrance Examination',
      duration: 'For 3-Yr Diploma',
      icon: '⚙️',
      pathwayFilter: 'polytechnic',
      description: 'Centralized state-level entrance examination (AP POLYCET, TS POLYCET, JEECUP, etc.) for admission into all Government, Aided, and Private Polytechnic Diploma colleges across 21 engineering streams.',
      eligibility: '10th Standard pass with minimum 35% marks in Mathematics and Science.',
      furtherStudies: 'Direct Lateral Entry to 2nd-Year B.Tech / B.E. via ECET.',
      careers: 'Junior Engineer, Technical Apprentice.',
      exams: 'POLYCET (Objective exam covering Class 10 Maths, Physics, Chemistry).',
      links: [{ label: 'Official POLYCET Portal', url: 'https://polycet.nic.in' }]
    },

    // --- Govt. Jobs Box ---
    'job-vra': {
      title: 'VRA – Village Revenue Assistant',
      branch: 'Government Employment',
      duration: 'Direct Employment after 10th',
      icon: '🏛️',
      pathwayFilter: 'all',
      description: 'Field administrative post in the State Revenue Department assisting Village Revenue Officers (VRO) and Tahsildars with land surveys, crop inspections, and revenue records.',
      eligibility: 'Passed 10th Standard (SSC) from recognized board; local village nativity.',
      furtherStudies: 'Promotional departmental examinations to VRO.',
      careers: 'State Government Revenue Service employee with permanent salary and benefits.',
      exams: 'State Revenue Department VRA Recruitment Exam.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    },
    'job-military': {
      title: 'Military – Indian Armed Forces (Soldier Trades)',
      branch: 'Government Employment',
      duration: 'Service in Armed Forces',
      icon: '🎖️',
      pathwayFilter: 'all',
      description: 'Recruitment into the Indian Army, Navy, and Air Force under Agniveer schemes for Soldier General Duty (GD), Tradesman, and technical assistant roles.',
      eligibility: '10th Standard pass with minimum 45% aggregate; prescribed physical and medical standards.',
      furtherStudies: 'Army Graduation Cadet programs, ACC (Army Cadet College) to become a commissioned officer.',
      careers: 'Honorable service in the Indian Army, defense pension, healthcare, and post-service reservations.',
      exams: 'Agniveer Common Entrance Exam (CEE) & Physical Fitness Test (1.6 km run).',
      links: [{ label: 'Join Indian Army Official', url: 'https://joinindianarmy.nic.in' }]
    },
    'job-aw-female': {
      title: 'AW (Female) – Anganwadi Worker / Assistant',
      branch: 'Government Employment',
      duration: 'Social Welfare Service',
      icon: '👩‍👧',
      pathwayFilter: 'all',
      description: 'Community-based positions under the Integrated Child Development Services (ICDS) / Women & Child Welfare Department overseeing child nutrition, maternal healthcare, and pre-school education.',
      eligibility: '10th Standard pass female candidates belonging to the local village/ward area.',
      furtherStudies: 'Promotional track to Anganwadi Supervisor.',
      careers: 'Government social welfare healthcare sector.',
      exams: 'District Selection Committee (DSC) Interview & Merit Selection.',
      links: [{ label: 'Ministry of Women & Child Dev', url: 'https://wcd.nic.in' }]
    },
    'job-driving': {
      title: 'Government Driving Posts (RTC, Police & Transport)',
      branch: 'Government Employment',
      duration: 'Direct Employment after 10th',
      icon: '🚌',
      pathwayFilter: 'all',
      description: 'Heavy & Light motor vehicle driving positions in State Road Transport Corporations (RTC), Police Department, Fire Services, Municipal Corporations, and government fleets.',
      eligibility: 'Passed 10th Standard with valid Light/Heavy Motor Vehicle (HMV) Driving License and clean driving record.',
      furtherStudies: 'Senior Transport Supervisor.',
      careers: 'Permanent government driver roles with standardized pay scales.',
      exams: 'State Public Service Commission / RTC Driver Skill Test & Driving Track Exam.',
      links: [{ label: 'National Career Service', url: 'https://www.ncs.gov.in' }]
    }
  };

  // ==========================================================================
  // 2. Interactive Mind Map Pan, Zoom & View Engine
  // ==========================================================================
  const viewport = document.getElementById('mindmap-viewport');
  const canvas = document.getElementById('mindmap-canvas');
  const zoomInBtn = document.getElementById('zoom-in-btn');
  const zoomOutBtn = document.getElementById('zoom-out-btn');
  const zoomResetBtn = document.getElementById('zoom-reset-btn');
  const zoomFitBtn = document.getElementById('zoom-fit-btn');
  const zoomLevelText = document.getElementById('zoom-level-text');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const expandAllBtn = document.getElementById('expand-all-btn');
  const collapseAllBtn = document.getElementById('collapse-all-btn');

  let scale = 1.0;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function updateTransform() {
    if (canvas) {
      canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
    }
    if (zoomLevelText) {
      zoomLevelText.textContent = `${Math.round(scale * 100)}%`;
    }
  }

  function setZoom(newScale, focalX, focalY) {
    const minScale = 0.35;
    const maxScale = 2.4;
    const clampedScale = Math.min(Math.max(newScale, minScale), maxScale);

    if (focalX !== undefined && focalY !== undefined && viewport) {
      const rect = viewport.getBoundingClientRect();
      const mouseX = focalX - rect.left;
      const mouseY = focalY - rect.top;

      panX = mouseX - (mouseX - panX) * (clampedScale / scale);
      panY = mouseY - (mouseY - panY) * (clampedScale / scale);
    }

    scale = clampedScale;
    updateTransform();
  }

  function resetView() {
    scale = 1.0;
    panX = 0;
    panY = 0;
    updateTransform();
    triggerNotification('↺ Mind Map view reset to center');
  }

  function fitToScreen() {
    if (!viewport || !canvas) return;
    const viewWidth = viewport.clientWidth;
    const canvasWidth = canvas.scrollWidth || 1380;
    
    // Fit width with small margin
    const targetScale = Math.max(0.4, Math.min(1.0, (viewWidth - 40) / canvasWidth));
    scale = targetScale;
    panX = Math.max(0, (viewWidth - canvasWidth * scale) / 2);
    panY = 10;
    updateTransform();
    triggerNotification('⤢ Mind Map scaled to fit screen');
  }

  // Zoom Button Controls
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => setZoom(scale + 0.15));
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => setZoom(scale - 0.15));
  }
  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', resetView);
  }
  if (zoomFitBtn) {
    zoomFitBtn.addEventListener('click', fitToScreen);
  }

  // Fullscreen Mode Toggle
  if (fullscreenBtn && viewport) {
    fullscreenBtn.addEventListener('click', () => {
      const isFullscreen = viewport.classList.toggle('is-fullscreen');
      fullscreenBtn.innerHTML = isFullscreen ? '<span>✕ Exit</span>' : '<span>⛶ Fullscreen</span>';
      fitToScreen();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && viewport.classList.contains('is-fullscreen')) {
        viewport.classList.remove('is-fullscreen');
        fullscreenBtn.innerHTML = '<span>⛶ Fullscreen</span>';
        fitToScreen();
      }
    });
  }

  // Pan / Drag Interactions (Mouse)
  if (viewport) {
    viewport.addEventListener('mousedown', (e) => {
      // Don't drag if clicking buttons or interactive pills
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
        return;
      }
      isDragging = true;
      viewport.classList.add('is-dragging');
      startX = e.clientX - panX;
      startY = e.clientY - panY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      updateTransform();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (viewport) viewport.classList.remove('is-dragging');
      }
    });

    // Mouse Wheel Zoom
    viewport.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      setZoom(scale * zoomFactor, e.clientX, e.clientY);
    }, { passive: false });

    // Touch Drag & Pan
    let lastTouchX = 0;
    let lastTouchY = 0;
    let touchDistance = 0;

    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        if (e.target.closest('button') || e.target.closest('a')) return;
        isDragging = true;
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
      } else if (e.touches.length === 2) {
        // Pinch zoom start
        touchDistance = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        panX += touch.clientX - lastTouchX;
        panY += touch.clientY - lastTouchY;
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
        updateTransform();
      } else if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = dist / touchDistance;
        if (factor > 0.5 && factor < 2.0) {
          const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
          const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
          setZoom(scale * factor, midX, midY);
        }
        touchDistance = dist;
      }
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      isDragging = false;
    }, { passive: true });
  }

  // ==========================================================================
  // 3. Expand / Collapse Sub-Branches
  // ==========================================================================
  function setupCollapsibleBranches() {
    const toggleBtns = document.querySelectorAll('.branch-toggle');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentGroup = btn.closest('.bracket-group, .spine-item-parent');
        if (parentGroup) {
          const isCollapsed = parentGroup.classList.toggle('is-collapsed');
          btn.textContent = isCollapsed ? '+' : '−';
        }
      });
    });

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.bracket-group, .spine-item-parent').forEach(group => {
          group.classList.remove('is-collapsed');
          const toggle = group.querySelector('.branch-toggle');
          if (toggle) toggle.textContent = '−';
        });
        triggerNotification('📂 All sub-branches expanded');
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        document.querySelectorAll('.bracket-group, .spine-item-parent').forEach(group => {
          group.classList.add('is-collapsed');
          const toggle = group.querySelector('.branch-toggle');
          if (toggle) toggle.textContent = '+';
        });
        triggerNotification('📁 Sub-branches collapsed for simplified view');
      });
    }
  }
  setupCollapsibleBranches();

  // ==========================================================================
  // 4. Interactive Node Details Modal Engine
  // ==========================================================================
  const modalBackdrop = document.getElementById('node-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDoneBtn = document.getElementById('modal-done-btn');
  const modalViewPathwayBtn = document.getElementById('modal-view-pathway-btn');

  const modalIcon = document.getElementById('modal-icon');
  const modalBranchTag = document.getElementById('modal-branch-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalDurationBadge = document.getElementById('modal-duration-badge');
  const modalDescription = document.getElementById('modal-description');
  const modalEligibility = document.getElementById('modal-eligibility');
  const modalFurtherStudies = document.getElementById('modal-further-studies');
  const modalCareers = document.getElementById('modal-careers');
  const modalExams = document.getElementById('modal-exams');
  const modalLinksContainer = document.getElementById('modal-links');

  function openNodeDetails(nodeId) {
    const data = nodeDatabase[nodeId];
    if (!data) return;

    if (modalIcon) modalIcon.textContent = data.icon || '✦';
    if (modalBranchTag) modalBranchTag.textContent = data.branch;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDurationBadge) modalDurationBadge.textContent = `⏱️ Duration: ${data.duration}`;
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalEligibility) modalEligibility.textContent = data.eligibility;
    if (modalFurtherStudies) modalFurtherStudies.textContent = data.furtherStudies;
    if (modalCareers) modalCareers.textContent = data.careers;
    if (modalExams) modalExams.textContent = data.exams || 'N/A';

    // Populate links
    if (modalLinksContainer) {
      modalLinksContainer.innerHTML = '';
      if (data.links && data.links.length > 0) {
        data.links.forEach(link => {
          const a = document.createElement('a');
          a.className = 'modal-link-btn';
          a.href = link.url;
          if (link.url.startsWith('http')) {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
          }
          a.innerHTML = `<span>${link.label}</span> <span aria-hidden="true">↗</span>`;
          modalLinksContainer.appendChild(a);
        });
      }
    }

    // Pathway Jump Button
    if (modalViewPathwayBtn) {
      modalViewPathwayBtn.onclick = (e) => {
        closeNodeDetails();
        if (window.activatePathwayFilter && data.pathwayFilter) {
          window.activatePathwayFilter(data.pathwayFilter);
        }
      };
    }

    if (modalBackdrop) {
      modalBackdrop.style.display = 'flex';
      modalBackdrop.setAttribute('aria-hidden', 'false');
    }
  }

  function closeNodeDetails() {
    if (modalBackdrop) {
      modalBackdrop.style.display = 'none';
      modalBackdrop.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeNodeDetails);
  if (modalDoneBtn) modalDoneBtn.addEventListener('click', closeNodeDetails);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeNodeDetails();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.style.display !== 'none') {
      closeNodeDetails();
    }
  });

  // Attach click listener to all mind map nodes and cards
  document.querySelectorAll('[data-node-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      // Don't open modal if clicking the expand toggle button
      if (e.target.classList.contains('branch-toggle')) return;
      const nodeId = el.getAttribute('data-node-id');
      if (nodeId && nodeDatabase[nodeId]) {
        openNodeDetails(nodeId);
      }
    });
  });

  // ==========================================================================
  // 5. Mind Map Live Search Engine
  // ==========================================================================
  const searchInput = document.getElementById('mindmap-search');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchResultsDropdown = document.getElementById('search-results-dropdown');

  function centerOnNode(nodeElement) {
    if (!viewport || !canvas || !nodeElement) return;

    // Expand any parent groups if collapsed
    let currentParent = nodeElement.closest('.bracket-group, .spine-item-parent');
    while (currentParent) {
      currentParent.classList.remove('is-collapsed');
      const toggle = currentParent.querySelector('.branch-toggle');
      if (toggle) toggle.textContent = '−';
      currentParent = currentParent.parentElement.closest('.bracket-group, .spine-item-parent');
    }

    // Highlight node
    document.querySelectorAll('.node-pill').forEach(p => p.classList.remove('search-match'));
    nodeElement.classList.add('search-match');

    // Calculate node coordinates relative to canvas
    const nodeRect = nodeElement.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    const viewRect = viewport.getBoundingClientRect();

    const nodeCenterXInCanvas = (nodeRect.left - canvasRect.left + nodeRect.width / 2) / scale;
    const nodeCenterYInCanvas = (nodeRect.top - canvasRect.top + nodeRect.height / 2) / scale;

    scale = Math.max(scale, 1.1); // zoom in slightly to focus
    panX = (viewRect.width / 2) - (nodeCenterXInCanvas * scale);
    panY = (viewRect.height / 2) - (nodeCenterYInCanvas * scale);

    updateTransform();
  }

  if (searchInput && searchResultsDropdown) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim().toLowerCase();
      if (searchClearBtn) {
        searchClearBtn.style.display = query.length > 0 ? 'block' : 'none';
      }

      if (query.length < 2) {
        searchResultsDropdown.style.display = 'none';
        searchResultsDropdown.innerHTML = '';
        document.querySelectorAll('.node-pill').forEach(p => p.classList.remove('search-match'));
        return;
      }

      const matches = [];
      for (const [key, item] of Object.entries(nodeDatabase)) {
        if (
          item.title.toLowerCase().includes(query) ||
          item.branch.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        ) {
          matches.push({ id: key, ...item });
        }
      }

      // Highlight in canvas
      document.querySelectorAll('.node-pill').forEach(pill => {
        const id = pill.getAttribute('data-node-id');
        const matched = matches.some(m => m.id === id);
        pill.classList.toggle('search-match', matched);
      });

      if (matches.length > 0) {
        searchResultsDropdown.innerHTML = '';
        matches.slice(0, 10).forEach(match => {
          const item = document.createElement('div');
          item.className = 'search-result-item';
          item.innerHTML = `
            <span>${match.icon || '✦'} <strong>${match.title}</strong></span>
            <span class="search-result-branch">${match.branch}</span>
          `;
          item.addEventListener('click', () => {
            searchInput.value = match.title;
            searchResultsDropdown.style.display = 'none';
            const nodeEl = document.querySelector(`[data-node-id="${match.id}"]`);
            if (nodeEl) {
              centerOnNode(nodeEl);
            }
            openNodeDetails(match.id);
          });
          searchResultsDropdown.appendChild(item);
        });
        searchResultsDropdown.style.display = 'block';
      } else {
        searchResultsDropdown.innerHTML = '<div style="padding: 10px 15px; font-size: 0.85rem; color: #64748b;">No matching courses found.</div>';
        searchResultsDropdown.style.display = 'block';
      }
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.style.display = 'none';
        searchResultsDropdown.style.display = 'none';
        document.querySelectorAll('.node-pill').forEach(p => p.classList.remove('search-match'));
      });
    }

    // Close search dropdown on click outside
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResultsDropdown.contains(e.target)) {
        searchResultsDropdown.style.display = 'none';
      }
    });
  }

  // ==========================================================================
  // 6. Dynamic Footer Year & Share CareerPath
  // ==========================================================================
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          triggerNotification('🔗 Link copied to clipboard! Share CareerPath with fellow students.');
        } else {
          triggerNotification('💡 Bookmark this URL to share with classmates and parents!');
        }
      } catch (err) {
        triggerNotification('💡 Bookmark this URL to share with classmates and parents!');
      }
    });
  }

  // ==========================================================================
  // 7. Mobile Navigation Drawer & Smooth Scrolling
  // ==========================================================================
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('open')) {
          primaryNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
        if (primaryNav.classList.contains('open')) {
          primaryNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Active navigation highlight on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // ==========================================================================
  // 8. Pathway Category Filter
  // ==========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const pathwayCards = document.querySelectorAll('.pathway-card');

  window.activatePathwayFilter = function(filterValue) {
    filterButtons.forEach(btn => {
      const match = btn.getAttribute('data-filter') === filterValue;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', String(match));
    });

    pathwayCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.display = 'none';
      }
    });

    const pathwaysEl = document.getElementById('pathways');
    if (pathwaysEl) {
      pathwaysEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      window.activatePathwayFilter(filter);
    });
  });

  // ==========================================================================
  // 9. Interactive Career Quiz (6 In-Depth Questions)
  // ==========================================================================
  const quizData = [
    {
      category: 'Academic Strengths',
      question: 'Which subject combination do you find most natural and engaging in school?',
      options: [
        {
          key: 'A',
          text: 'Mathematics & Physical Sciences (Solving numericals, physics laws, equations)',
          weights: { mpc: 3, polytechnic: 2, mec: 1 }
        },
        {
          key: 'B',
          text: 'Biology & Living Systems (Human anatomy, plants, diseases, medical topics)',
          weights: { bipc: 3, vocational: 1 }
        },
        {
          key: 'C',
          text: 'Mathematics & Economics / Business (Mental calculations, finance, profit/loss)',
          weights: { mec: 3, mpc: 1, cec: 1 }
        },
        {
          key: 'D',
          text: 'Social Studies & Civics / Languages (History, politics, debates, creative writing)',
          weights: { cec: 2, hec: 3 }
        },
        {
          key: 'E',
          text: 'Practical Workshop & Technology (How machines, electronics, and devices operate)',
          weights: { polytechnic: 3, iti: 3 }
        }
      ]
    },
    {
      category: 'Preferred Daily Activities',
      question: 'What kind of weekend project sounds most enjoyable and absorbing to you?',
      options: [
        {
          key: 'A',
          text: 'Writing software code, creating a game, or solving complex algorithmic puzzles',
          weights: { mpc: 3, polytechnic: 2 }
        },
        {
          key: 'B',
          text: 'Visiting a healthcare camp, reading about new medicines, or biological experiments',
          weights: { bipc: 3 }
        },
        {
          key: 'C',
          text: 'Analyzing stock charts, tracking pocket money budgets, or planning a mini-startup',
          weights: { mec: 3, cec: 2 }
        },
        {
          key: 'D',
          text: 'Writing essays, debating current legal/civic issues, photography, or creative design',
          weights: { hec: 3, cec: 2, vocational: 1 }
        },
        {
          key: 'E',
          text: 'Fixing electrical connections, assembling a mechanical toy, or repairing gadgets',
          weights: { polytechnic: 2, iti: 3, vocational: 1 }
        }
      ]
    },
    {
      category: 'Workplace Environment',
      question: 'Where do you picture yourself working happily 5 to 7 years from now?',
      options: [
        {
          key: 'A',
          text: 'A high-tech software headquarters, aerospace design lab, or engineering consultancy',
          weights: { mpc: 3, polytechnic: 1 }
        },
        {
          key: 'B',
          text: 'A hospital ward, dental clinic, pharmaceutical lab, or agricultural research station',
          weights: { bipc: 3 }
        },
        {
          key: 'C',
          text: 'An investment banking office, audit firm, or corporate financial strategy team',
          weights: { mec: 3, cec: 1 }
        },
        {
          key: 'D',
          text: 'A court of law, media newsroom, civil administration office, or design studio',
          weights: { hec: 3, cec: 2 }
        },
        {
          key: 'E',
          text: 'A bustling industrial plant, railway technical depot, or certified workshop enterprise',
          weights: { iti: 3, polytechnic: 2 }
        }
      ]
    },
    {
      category: 'Study Horizon & Immediate Goals',
      question: 'What is your preferred educational timeline before entering the full-time workforce?',
      options: [
        {
          key: 'A',
          text: 'Long-term professional education (4+ years: Intermediate + B.Tech / B.Arch / Master’s)',
          weights: { mpc: 3, bipc: 2 }
        },
        {
          key: 'B',
          text: 'Dedicated medical/healthcare journey (4.5 to 5.5 years: MBBS / BDS / Pharm.D / Agri)',
          weights: { bipc: 3 }
        },
        {
          key: 'C',
          text: 'Balanced graduation or professional charter (3 to 5 years: B.Com / CA / BBA / MBA)',
          weights: { mec: 3, cec: 2 }
        },
        {
          key: 'D',
          text: '3-Year practical engineering diploma with direct job option OR lateral entry to B.Tech',
          weights: { polytechnic: 3 }
        },
        {
          key: 'E',
          text: '1 to 2 Years fast-track technical trade certification for rapid employment or apprenticeship',
          weights: { iti: 3, vocational: 2 }
        }
      ]
    },
    {
      category: 'Learning Preference',
      question: 'In which style do you grasp concepts most effortlessly?',
      options: [
        {
          key: 'A',
          text: 'Logical mathematical proofs, conceptual derivations, and analytical problem-solving',
          weights: { mpc: 3, mec: 1 }
        },
        {
          key: 'B',
          text: 'Detailed anatomical diagrams, biological taxonomies, and chemical lab experiments',
          weights: { bipc: 3 }
        },
        {
          key: 'C',
          text: 'Real-world business case studies, commercial balance sheets, and economic graphs',
          weights: { mec: 2, cec: 3 }
        },
        {
          key: 'D',
          text: 'Reading analytical literature, societal discussions, and expressing original ideas',
          weights: { hec: 3, cec: 1 }
        },
        {
          key: 'E',
          text: 'Hands-on practical experiments with physical tools, circuits, and technical machinery',
          weights: { polytechnic: 2, iti: 3, vocational: 1 }
        }
      ]
    },
    {
      category: 'Personal Mission & Driving Force',
      question: 'What ultimate impact or achievement excites you most about your future?',
      options: [
        {
          key: 'A',
          text: 'Inventing cutting-edge technology, coding AI algorithms, or designing physical structures',
          weights: { mpc: 3, polytechnic: 1 }
        },
        {
          key: 'B',
          text: 'Healing patients, understanding diseases, and advancing life science discoveries',
          weights: { bipc: 3 }
        },
        {
          key: 'C',
          text: 'Achieving financial mastery, running business operations, or leading corporate finances',
          weights: { mec: 3, cec: 2 }
        },
        {
          key: 'D',
          text: 'Advocating for justice, reporting stories, shaping public policies, or creative leadership',
          weights: { hec: 3, cec: 2 }
        },
        {
          key: 'E',
          text: 'Mastering an invaluable trade craft, certified engineering, and technical independence',
          weights: { polytechnic: 2, iti: 3, vocational: 2 }
        }
      ]
    }
  ];

  let currentQuestionIndex = 0;
  let userAnswers = new Array(quizData.length).fill(null);

  const quizStepText = document.getElementById('quiz-step-text');
  const quizPercentText = document.getElementById('quiz-percent-text');
  const quizProgressFill = document.getElementById('quiz-progress-fill');
  const questionCategory = document.getElementById('question-category');
  const questionText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const quizPrevBtn = document.getElementById('quiz-prev-btn');
  const quizNextBtn = document.getElementById('quiz-next-btn');
  const quizQuestionCard = document.getElementById('quiz-question-card');
  const quizResultCard = document.getElementById('quiz-result-card');
  const quizRetakeBtn = document.getElementById('quiz-retake-btn');
  const resultExploreBtn = document.getElementById('result-explore-btn');

  function renderQuestion(index) {
    const q = quizData[index];
    const total = quizData.length;
    const progressPercent = Math.round(((index + 1) / total) * 100);

    if (quizStepText) quizStepText.textContent = `Question ${index + 1} of ${total}`;
    if (quizPercentText) quizPercentText.textContent = `${progressPercent}% Completed`;
    if (quizProgressFill) quizProgressFill.style.width = `${progressPercent}%`;

    if (questionCategory) questionCategory.textContent = q.category;
    if (questionText) questionText.textContent = q.question;

    if (!optionsContainer) return;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, optIndex) => {
      const optBtn = document.createElement('button');
      optBtn.type = 'button';
      optBtn.className = 'quiz-option';
      optBtn.setAttribute('role', 'radio');
      optBtn.setAttribute('aria-checked', userAnswers[index] === optIndex ? 'true' : 'false');
      
      if (userAnswers[index] === optIndex) {
        optBtn.classList.add('selected');
      }

      optBtn.innerHTML = `
        <span class="quiz-option-key">${opt.key}</span>
        <span class="quiz-option-text">${opt.text}</span>
      `;

      optBtn.addEventListener('click', () => {
        userAnswers[index] = optIndex;
        const allOpts = optionsContainer.querySelectorAll('.quiz-option');
        allOpts.forEach(b => {
          b.classList.remove('selected');
          b.setAttribute('aria-checked', 'false');
        });
        optBtn.classList.add('selected');
        optBtn.setAttribute('aria-checked', 'true');

        if (quizNextBtn) quizNextBtn.disabled = false;
      });

      optionsContainer.appendChild(optBtn);
    });

    if (quizPrevBtn) quizPrevBtn.disabled = index === 0;
    if (quizNextBtn) {
      quizNextBtn.disabled = userAnswers[index] === null;
      quizNextBtn.innerHTML = index === total - 1 
        ? '<span>Show Recommendations ✨</span>' 
        : '<span>Next Question →</span>';
    }
  }

  if (quizPrevBtn) {
    quizPrevBtn.addEventListener('click', () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion(currentQuestionIndex);
      }
    });
  }

  if (quizNextBtn) {
    quizNextBtn.addEventListener('click', () => {
      if (userAnswers[currentQuestionIndex] === null) {
        triggerNotification('⚠️ Please select an answer option to proceed.');
        return;
      }

      if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion(currentQuestionIndex);
      } else {
        calculateAndDisplayResults();
      }
    });
  }

  const streamProfiles = {
    mpc: {
      name: 'Intermediate: MPC (Maths, Physics, Chemistry)',
      icon: '📐',
      filterTarget: 'intermediate',
      summary: 'Your answers reflect high analytical curiosity, passion for mathematical logic, and interest in technology systems.',
      whyRelevant: 'MPC provides the ideal rigorous foundation for Engineering degrees (B.Tech via JEE/CETs), Computer Science & Data Analytics, Defence Officer training (NDA), Architecture, or Commercial Aviation.',
      alternative: 'Polytechnic Diploma in Computer / Mechanical Engineering (if you prefer practical laboratory learning over 2-year entrance exam pressure).',
      nextSteps: [
        'Strengthen your class 10 fundamentals in Algebra, Trigonometry, and Physical Sciences.',
        'Explore syllabus patterns of JEE Main, BITSAT, and state engineering CETs.',
        'Schedule a discussion with your high-school maths and science teachers to evaluate your readiness for advanced coursework.'
      ]
    },
    bipc: {
      name: 'Intermediate: BiPC (Biology, Physics, Chemistry)',
      icon: '🧬',
      filterTarget: 'intermediate',
      summary: 'Your responses show deep curiosity about biological systems, healthcare, living organisms, and medical discoveries.',
      whyRelevant: 'BiPC is the essential pathway for medical sciences (MBBS, BDS, AYUSH), Pharmacy (B.Pharm), Agricultural & Veterinary sciences, Biotechnology, and Allied Health careers (Physiotherapy, Radiology, Nursing).',
      alternative: 'Vocational Paramedical Diplomas (DLMT, DOT) or Specialized Laboratory Science programs.',
      nextSteps: [
        'Review the Class 11 and 12 NCERT Biology & Chemistry curriculums to understand the depth of conceptual clarity needed.',
        'Learn about entrance mechanisms such as NEET-UG and ICAR (Agriculture).',
        'Speak with healthcare professionals or science mentors regarding the multi-year journey required in clinical careers.'
      ]
    },
    mec: {
      name: 'Intermediate: MEC (Maths, Economics, Commerce)',
      icon: '📊',
      filterTarget: 'intermediate',
      summary: 'You show a rare and valuable affinity: numerical confidence paired with curiosity about business, markets, and economic forces.',
      whyRelevant: 'MEC gives you a formidable quantitative advantage in elite corporate finance, Chartered Accountancy (CA Foundation), Actuarial Mathematics, Data Analytics, and top B.Com / BBA programs (e.g. IPMAT at IIMs).',
      alternative: 'CEC (Civics, Economics, Commerce) if you prefer corporate law and management without higher calculus.',
      nextSteps: [
        'Explore how commercial accounting and microeconomics intersect with numerical data.',
        'Read about foundational stages of CA (ICAI), CMA, and integrated management programs.',
        'Consult with a school commerce mentor to compare MEC vs CEC syllabus balance.'
      ]
    },
    cec: {
      name: 'Intermediate: CEC (Civics, Economics, Commerce)',
      icon: '💼',
      filterTarget: 'intermediate',
      summary: 'Your responses emphasize business management, corporate governance, legal institutions, and trade without heavy calculus.',
      whyRelevant: 'CEC is an exceptional springboard for corporate law (5-Year Integrated B.A. LLB / BBA LLB via CLAT), Business Administration (BBA), Company Secretary (CS), Banking, and entrepreneurship.',
      alternative: 'Arts & Humanities (HEC) if your passion leans even more strongly towards civil administration and policy.',
      nextSteps: [
        'Explore law entrance examinations (CLAT, AILET) and top university BBA/B.Com courses.',
        'Read introductory articles on business models, commercial law, and trade regulations.',
        'Discuss with family or counsellors whether your long-term goal aligns best with corporate management or legal careers.'
      ]
    },
    hec: {
      name: 'Intermediate: HEC / Humanities & Arts (History, Econ, Civics)',
      icon: '🏛️',
      filterTarget: 'intermediate',
      summary: 'You have a strong passion for society, writing, governance, historical contexts, communication, and creative analysis.',
      whyRelevant: 'HEC and Humanities nurture critical thinkers. It opens direct paths to Civil Services (UPSC), Journalism & Mass Communication, Law, Psychology, Design & Fine Arts (NIFT / NID), and Social Research.',
      alternative: 'CEC (Civics, Economics, Commerce) if you wish to blend social awareness with formal corporate accounting.',
      nextSteps: [
        'Read quality editorials and historical essays to expand analytical writing and reasoning.',
        'Explore premier liberal arts universities, law schools, and design entrance frameworks.',
        'Discuss your aspirations with teachers to identify specific specialization areas within Humanities.'
      ]
    },
    polytechnic: {
      name: 'Polytechnic Diploma in Engineering (3 Years)',
      icon: '⚙️',
      filterTarget: 'polytechnic',
      summary: 'You learn best through hands-on technical practice, experiments, machines, and practical engineering concepts rather than abstract theory.',
      whyRelevant: 'A 3-Year Polytechnic Diploma gives you early technical skills, direct Junior Engineer job opportunities in Indian Railways/PSUs/industry, and the prized Lateral Entry route straight into 2nd-year B.Tech (saving one year and bypassing JEE).',
      alternative: 'Intermediate MPC (if you prefer broad university degree paths and theoretical research over early technical specialization).',
      nextSteps: [
        'Check your state’s Polytechnic Entrance Exam schedule (e.g., POLYCET, JEECUP, DET).',
        'Review core branches such as Mechanical, Computer Engineering, Electrical, and Civil.',
        'Visit a local polytechnic institute or talk to diploma alumni to understand workshop routines.'
      ]
    },
    iti: {
      name: 'ITI – Industrial Training Institute Trades (1 to 2 Years)',
      icon: '🔧',
      filterTarget: 'iti',
      summary: 'You show high enthusiasm for tangible craftsmanship, direct tool manipulation, machine repair, and swift workforce independence.',
      whyRelevant: 'ITI equips you with certified craftsmanship in trades like Electrician, Fitter, Motor Mechanic, Welder, or Computer Operator. It provides early job placements, Railway Technician opportunities, and trade entrepreneurship.',
      alternative: '3-Year Polytechnic Diploma (for broader engineering management roles with B.Tech eligibility).',
      nextSteps: [
        'Browse the official Directorate General of Training (dgt.gov.in) portal for recognized NCVT trades.',
        'Check state government ITI admission notifications and trade availability.',
        'Speak with local certified technicians or instructors to select the most in-demand trade in your region.'
      ]
    }
  };

  function calculateAndDisplayResults() {
    const scores = {
      mpc: 0,
      bipc: 0,
      mec: 0,
      cec: 0,
      hec: 0,
      polytechnic: 0,
      iti: 0,
      vocational: 0
    };

    userAnswers.forEach((ansIndex, qIndex) => {
      if (ansIndex !== null) {
        const option = quizData[qIndex].options[ansIndex];
        if (option && option.weights) {
          for (const [key, val] of Object.entries(option.weights)) {
            if (scores[key] !== undefined) {
              scores[key] += val;
            }
          }
        }
      }
    });

    const sortedStreams = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let topStreamKey = sortedStreams[0];
    let secondaryStreamKey = sortedStreams[1];

    if (topStreamKey === 'vocational') topStreamKey = 'iti';
    if (secondaryStreamKey === 'vocational' || secondaryStreamKey === topStreamKey) {
      secondaryStreamKey = sortedStreams[2] || 'polytechnic';
    }

    const topProfile = streamProfiles[topStreamKey] || streamProfiles.mpc;
    const secondaryProfile = streamProfiles[secondaryStreamKey] || streamProfiles.polytechnic;

    const resStreamIcon = document.getElementById('result-stream-icon');
    const resStreamName = document.getElementById('result-stream-name');
    const resExplanation = document.getElementById('result-explanation');
    const resSecondaryText = document.getElementById('secondary-stream-text');
    const stepsList = document.getElementById('result-steps-list');

    if (resStreamIcon) resStreamIcon.textContent = topProfile.icon;
    if (resStreamName) resStreamName.textContent = topProfile.name;
    if (resExplanation) {
      resExplanation.innerHTML = `
        <strong>Why this fits your profile:</strong> ${topProfile.summary}<br><br>
        ${topProfile.whyRelevant}
      `;
    }

    if (resSecondaryText) {
      resSecondaryText.textContent = `${secondaryProfile.icon} ${secondaryProfile.name} — ${topProfile.alternative}`;
    }

    if (stepsList) {
      stepsList.innerHTML = '';
      topProfile.nextSteps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
      });
    }

    if (resultExploreBtn) {
      resultExploreBtn.onclick = (e) => {
        e.preventDefault();
        window.activatePathwayFilter(topProfile.filterTarget);
      };
    }

    if (quizQuestionCard) quizQuestionCard.style.display = 'none';
    if (quizResultCard) {
      quizResultCard.style.display = 'block';
      quizResultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    triggerNotification('🎉 Quiz completed! View your personalized pathway recommendation below.');
  }

  if (quizRetakeBtn) {
    quizRetakeBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      userAnswers = new Array(quizData.length).fill(null);
      if (quizResultCard) quizResultCard.style.display = 'none';
      if (quizQuestionCard) quizQuestionCard.style.display = 'block';
      renderQuestion(0);
      if (quizQuestionCard) quizQuestionCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      triggerNotification('🔄 Quiz reset. Feel free to re-answer with fresh reflections.');
    });
  }

  if (quizQuestionCard) {
    renderQuestion(0);
  }

  // ==========================================================================
  // 10. FAQ Accordion Logic
  // ==========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', String(!isActive));
      });
    }
  });

  // ==========================================================================
  // 11. Toast Notification Mechanism
  // ==========================================================================
  function triggerNotification(message) {
    let existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
      existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.setAttribute('role', 'alert');
    toast.textContent = message;

    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      backgroundColor: '#ffffff',
      color: '#0f172a',
      padding: '13px 22px',
      borderRadius: '12px',
      border: '1px solid #cbd5e1',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12), 0 0 10px rgba(79, 70, 229, 0.1)',
      zIndex: '2000',
      fontSize: '0.9rem',
      fontWeight: '600',
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      transform: 'translateY(12px)',
      opacity: '0',
      maxWidth: 'calc(100vw - 48px)'
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Initial fit on desktop/tablet load
  setTimeout(() => {
    fitToScreen();
  }, 200);

  console.log('%c✨ CareerPath Interactive Mind Map & Guidance Engine Initialized', 'color: #4f46e5; font-weight: bold; font-size: 14px;');
});
