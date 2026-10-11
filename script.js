/**
 * CareerPath – Discover Your Future
 * Client-Side Interactive Engine
 * Handles Navigation, Pathway Filters, Interactive Quiz, Accordion & Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Dynamic Footer Year & Share CareerPath
  // --------------------------------------------------------------------------
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

  // --------------------------------------------------------------------------
  // 2. Mobile Navigation Drawer & Smooth Scrolling
  // --------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link, .nav-cta');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('open');
    });

    // Close mobile nav on clicking any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('open')) {
          primaryNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!primaryNav.contains(e.target) && !navToggle.contains(e.target)) {
        if (primaryNav.classList.contains('open')) {
          primaryNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Active navigation highlight based on scroll position
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

  // --------------------------------------------------------------------------
  // 3. Pathway Category Filter
  // --------------------------------------------------------------------------
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
  };

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      window.activatePathwayFilter(filter);
    });
  });

  // --------------------------------------------------------------------------
  // 4. Interactive Career Quiz (6 In-Depth Questions)
  // --------------------------------------------------------------------------
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
          text: 'Writing a software code, creating a game, or solving complex algorithmic puzzles',
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

  // DOM Elements for Quiz
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

    quizStepText.textContent = `Question ${index + 1} of ${total}`;
    quizPercentText.textContent = `${progressPercent}% Completed`;
    quizProgressFill.style.width = `${progressPercent}%`;

    questionCategory.textContent = q.category;
    questionText.textContent = q.question;

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
        // Update selection UI
        const allOpts = optionsContainer.querySelectorAll('.quiz-option');
        allOpts.forEach(b => {
          b.classList.remove('selected');
          b.setAttribute('aria-checked', 'false');
        });
        optBtn.classList.add('selected');
        optBtn.setAttribute('aria-checked', 'true');

        quizNextBtn.disabled = false;
      });

      optionsContainer.appendChild(optBtn);
    });

    // Update navigation button states
    quizPrevBtn.disabled = index === 0;
    quizNextBtn.disabled = userAnswers[index] === null;

    if (index === total - 1) {
      quizNextBtn.innerHTML = '<span>Show Recommendations ✨</span>';
    } else {
      quizNextBtn.innerHTML = '<span>Next Question →</span>';
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
        // Calculate & display results
        calculateAndDisplayResults();
      }
    });
  }

  // Stream Profiles Dictionary
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
      alternative: 'Vocational Paramedical Diplomas or Specialized Laboratory Science programs.',
      nextSteps: [
        'Review the Class 11 and 12 NCERT Biology & Chemistry curriculums to understand the depth of memorization and conceptual clarity needed.',
        'Learn about entrance mechanisms such as NEET-UG and ICAR (Agriculture).',
        'Speak with healthcare professionals or science mentors regarding the commitment and multi-year journey required in clinical careers.'
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

    // Tally weighted points
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

    // Determine top score and runner up
    const sortedStreams = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let topStreamKey = sortedStreams[0];
    let secondaryStreamKey = sortedStreams[1];

    // Fallback if topStream is vocational
    if (topStreamKey === 'vocational') {
      topStreamKey = 'iti';
    }
    if (secondaryStreamKey === 'vocational' || secondaryStreamKey === topStreamKey) {
      secondaryStreamKey = sortedStreams[2] || 'polytechnic';
    }

    const topProfile = streamProfiles[topStreamKey] || streamProfiles.mpc;
    const secondaryProfile = streamProfiles[secondaryStreamKey] || streamProfiles.polytechnic;

    // Populate result card
    document.getElementById('result-stream-icon').textContent = topProfile.icon;
    document.getElementById('result-stream-name').textContent = topProfile.name;
    document.getElementById('result-explanation').innerHTML = `
      <strong>Why this fits your profile:</strong> ${topProfile.summary}<br><br>
      ${topProfile.whyRelevant}
    `;

    document.getElementById('secondary-stream-text').textContent = `${secondaryProfile.icon} ${secondaryProfile.name} — ${topProfile.alternative}`;

    const stepsList = document.getElementById('result-steps-list');
    stepsList.innerHTML = '';
    topProfile.nextSteps.forEach(step => {
      const li = document.createElement('li');
      li.textContent = step;
      stepsList.appendChild(li);
    });

    // Setup explore button behavior
    resultExploreBtn.onclick = (e) => {
      e.preventDefault();
      window.activatePathwayFilter(topProfile.filterTarget);
      const pathwaysSection = document.getElementById('pathways');
      if (pathwaysSection) {
        pathwaysSection.scrollIntoView({ behavior: 'smooth' });
      }
      triggerNotification(`Showing detailed roadmap for ${topProfile.name}`);
    };

    // Swap views
    quizQuestionCard.style.display = 'none';
    quizResultCard.style.display = 'block';

    triggerNotification('🎉 Quiz completed! View your personalized pathway recommendation below.');

    // Scroll to results container
    quizResultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Retake Quiz Handler
  if (quizRetakeBtn) {
    quizRetakeBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      userAnswers = new Array(quizData.length).fill(null);
      quizResultCard.style.display = 'none';
      quizQuestionCard.style.display = 'block';
      renderQuestion(0);
      quizQuestionCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      triggerNotification('🔄 Quiz reset. Feel free to re-answer with fresh reflections.');
    });
  }

  // Initialize first question
  if (quizQuestionCard) {
    renderQuestion(0);
  }

  // --------------------------------------------------------------------------
  // 5. FAQ Accordion Logic
  // --------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other accordion items for clean presentation
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', String(!isActive));
      });
    }
  });

  // --------------------------------------------------------------------------
  // 6. Toast Notification Mechanism
  // --------------------------------------------------------------------------
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
      backgroundColor: 'rgba(18, 24, 38, 0.96)',
      color: '#f8fafc',
      padding: '13px 22px',
      borderRadius: '12px',
      border: '1px solid rgba(99, 102, 241, 0.45)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 16px rgba(99, 102, 241, 0.25)',
      backdropFilter: 'blur(12px)',
      webkitBackdropFilter: 'blur(12px)',
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

  console.log('%c✨ CareerPath Guidance Website Initialized Successfully', 'color: #6366f1; font-weight: bold; font-size: 14px;');
});
