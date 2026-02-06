const html = document.documentElement;

// Translations
const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "hero.badge": "Available for new opportunities",
    "hero.tagline":
      "I design <em>robust architectures</em> and <em>high-performance interfaces</em> for critical industrial environments.",
    "hero.stats.years": "years XP",
    "hero.stats.companies": "companies",
    "hero.cta.contact": "Contact me",
    "hero.cta.download": "Download CV",
    "hero.scroll": "Scroll",
    "about.title": "About",
    "about.intro":
      "<strong>Full-Stack Java / Angular</strong> Developer with over 10 years of experience in web application development.",
    "about.body":
      "I design complete solutions, from backend with Spring Boot to user interfaces with Angular. I have worked for major companies like Saint-Gobain, TotalEnergies and Allianz on various projects. Passionate about clean code, teamwork and DevOps automation.",
    "about.location": "Location",
    "about.education": "Education",
    "about.educationValue": "Master IT & IS Expert",
    "about.languages": "Languages",
    "about.languagesValue": "FR native • EN professional",
    "skills.title": "Tech Stack",
    "skills.methodologies": "Methodologies",
    "experience.title": "Experience",
    "experience.sg.duration": "3 yrs",
    "experience.sg.date": "Mar 2022 – May 2025",
    "experience.sg.role":
      "Front-End Angular Developer (70%) / Back-End Java (30%)",
    "experience.sg.project":
      "ERP ATLAS Project — <strong>15,000 users</strong>",
    "experience.sg.achievement1":
      "Detected and fixed memory leaks via Chrome Profiler, significantly improving performance",
    "experience.sg.achievement2":
      "Jest tests optimization: <strong>30 min → 14 min (-53%)</strong> via direct component instantiation",
    "experience.sg.achievement3":
      "Led Angular 9 → 15 migration, NgRx and Component Store modernization",
    "experience.sg.achievement4":
      "Integrated <strong>GitHub Copilot / ChatGPT</strong> for documentation, tests and refactoring",
    "experience.te.duration": "3 yrs",
    "experience.te.date": "Jan 2019 – Mar 2022",
    "experience.te.role": "Web Development Engineer",
    "experience.te.achievement1":
      "Created a <strong>Full-Stack Angular/Laravel skeleton</strong> to accelerate project startups",
    "experience.te.achievement2":
      "Web & mobile apps: fluid comparison, Air Total Card, interactive digital walls",
    "experience.te.achievement3":
      "<strong>Security audits</strong> and team training on best practices",
    "experience.al.duration": "1.5 yrs",
    "experience.al.date": "Oct 2017 – Jan 2019",
    "experience.al.role": "Full-Stack Developer",
    "experience.al.project": 'European regulatory project "Duty of Advice"',
    "experience.al.achievement1":
      "<strong>Architecture setup</strong> Angular 5 → 7 from scratch",
    "experience.al.achievement2":
      "Complete redesign from AngularJS, new features",
    "experience.al.achievement3":
      "CI/CD Jenkins, code reviews and Agile sprints",
    "experience.ap.duration": "3 yrs",
    "experience.ap.date": "Oct 2014 – Sept 2017",
    "experience.ap.role": "Full-Stack Developer",
    "experience.ap.project": "Industrial management applications",
    "experience.ap.achievement1":
      "Spare parts order management app (PHP/Laravel/VueJS)",
    "experience.ap.achievement2":
      "Industrial maintenance app (Java EE/PrimeFaces)",
    "experience.ap.achievement3": "Requirements documentation, user training",
    "projects.title": "Projects",
    "projects.truck.date": "Dec 2025",
    "projects.truck.desc":
      "Real-time GPS Tracking System with microservices architecture",
    "projects.truck.feature1": "5 event-driven microservices (Kafka)",
    "projects.truck.feature2": "Interactive map WebSocket + OSRM",
    "projects.truck.feature3": "React Native mobile app",
    "projects.truck.feature4": "Terraform + K8s AWS infrastructure",
    "projects.viewGithub": "View on GitHub",
    "projects.hra.date": "Feb 2026",
    "projects.hra.desc":
      "Intelligent HR assistant powered by <strong>RAG</strong> (Retrieval-Augmented Generation)",
    "projects.hra.feature1": "Spring AI + Ollama for augmented generation",
    "projects.hra.feature2":
      "Angular 21 frontend with conversational interface",
    "projects.hra.feature3": "pgvector for embedding storage",
    "projects.hra.feature4": "Redis cache for performance",
    "projects.blog.date": "Nov 2025",
    "projects.blog.title": "Tech Blog",
    "projects.blog.desc":
      "Modern Full-Stack deployed on <strong>Kubernetes (EKS)</strong>",
    "projects.blog.feature2": "Complete CI/CD: GitLab CI, Docker Buildx, kOps",
    "projects.blog.feature3": "Infrastructure as Code on AWS EKS",
    "contact.intro": "Interested in my profile? Feel free to contact me.",
  },
  fr: {
    "nav.about": "Profil",
    "nav.experience": "Parcours",
    "nav.projects": "Projets",
    "hero.badge": "Disponible pour de nouvelles opportunités",
    "hero.tagline":
      "Je conçois des <em>architectures robustes</em> et des <em>interfaces performantes</em> pour les environnements industriels critiques.",
    "hero.stats.years": "ans d'XP",
    "hero.stats.companies": "entreprises",
    "hero.cta.contact": "Me contacter",
    "hero.cta.download": "Télécharger CV",
    "hero.scroll": "Scroll",
    "about.title": "À propos",
    "about.intro":
      "Développeur <strong>Full-Stack Java / Angular</strong> avec plus de 10 ans d'expérience dans le développement d'applications web.",
    "about.body":
      "Je conçois des solutions complètes, du backend avec Spring Boot aux interfaces utilisateur avec Angular. J'ai travaillé pour des grands groupes comme Saint-Gobain, TotalEnergies et Allianz sur des projets variés. Passionné par le code propre, le travail en équipe et l'automatisation DevOps.",
    "about.location": "Localisation",
    "about.education": "Formation",
    "about.educationValue": "Master Expert Info & SI",
    "about.languages": "Langues",
    "about.languagesValue": "FR natif • EN pro",
    "skills.title": "Stack technique",
    "skills.methodologies": "Méthodologies",
    "experience.title": "Parcours",
    "experience.sg.duration": "3 ans",
    "experience.sg.date": "Mars 2022 – Mai 2025",
    "experience.sg.role":
      "Développeur Front-End Angular (70%) / Back-End Java (30%)",
    "experience.sg.project":
      "Projet ERP ATLAS — <strong>15 000 utilisateurs</strong>",
    "experience.sg.achievement1":
      "Détection et correction de memory leaks via Chrome Profiler, améliorant significativement les performances",
    "experience.sg.achievement2":
      "Optimisation des tests Jest : <strong>30 min → 14 min (-53%)</strong> via instanciation directe des composants",
    "experience.sg.achievement3":
      "Pilotage migration Angular 9 → 15, modernisation NgRx et Component Store",
    "experience.sg.achievement4":
      "Intégration de <strong>GitHub Copilot / ChatGPT</strong> pour documentation, tests et refactoring",
    "experience.te.duration": "3 ans",
    "experience.te.date": "Janv. 2019 – Mars 2022",
    "experience.te.role": "Ingénieur Développement Web",
    "experience.te.achievement1":
      "Création d'un <strong>skeleton Full-Stack Angular/Laravel</strong> pour accélérer le démarrage des projets",
    "experience.te.achievement2":
      "Apps web & mobile : comparaison fluides, Carte Air Total, murs digitaux interactifs",
    "experience.te.achievement3":
      "<strong>Audits de sécurité</strong> et formation des équipes sur les bonnes pratiques",
    "experience.al.duration": "1.5 an",
    "experience.al.date": "Oct. 2017 – Janv. 2019",
    "experience.al.role": "Développeur Full-Stack",
    "experience.al.project":
      'Projet réglementaire européen "Devoir de Conseil"',
    "experience.al.achievement1":
      "<strong>Mise en place de l'architecture</strong> Angular 5 → 7 from scratch",
    "experience.al.achievement2":
      "Refonte complète depuis AngularJS, nouvelles fonctionnalités",
    "experience.al.achievement3":
      "CI/CD Jenkins, revues de code et sprints Agile",
    "experience.ap.duration": "3 ans",
    "experience.ap.date": "Oct. 2014 – Sept. 2017",
    "experience.ap.role": "Développeur Full-Stack",
    "experience.ap.project": "Applications de gestion industrielle",
    "experience.ap.achievement1":
      "App gestion commandes pièces détachées (PHP/Laravel/VueJS)",
    "experience.ap.achievement2":
      "App maintenance industrielle (Java EE/PrimeFaces)",
    "experience.ap.achievement3":
      "Rédaction cahier des charges, formation utilisateurs",
    "projects.title": "Projets",
    "projects.truck.date": "Déc 2025",
    "projects.truck.desc":
      "Système de Tracking GPS temps réel avec architecture microservices",
    "projects.truck.feature1": "5 microservices event-driven (Kafka)",
    "projects.truck.feature2": "Carte interactive WebSocket + OSRM",
    "projects.truck.feature3": "App mobile React Native",
    "projects.truck.feature4": "Infrastructure Terraform + K8s AWS",
    "projects.viewGithub": "Voir sur GitHub",
    "projects.hra.date": "Fév 2026",
    "projects.hra.desc":
      "Assistant RH intelligent propulsé par <strong>RAG</strong> (Retrieval-Augmented Generation)",
    "projects.hra.feature1": "Spring AI + Ollama pour la génération augmentée",
    "projects.hra.feature2":
      "Frontend Angular 21 avec interface conversationnelle",
    "projects.hra.feature3": "pgvector pour le stockage d'embeddings",
    "projects.hra.feature4": "Cache Redis pour les performances",
    "projects.blog.date": "Nov 2025",
    "projects.blog.title": "Blog Technique",
    "projects.blog.desc":
      "Full-Stack moderne déployé sur <strong>Kubernetes (EKS)</strong>",
    "projects.blog.feature2": "CI/CD complète : GitLab CI, Docker Buildx, kOps",
    "projects.blog.feature3": "Infrastructure as Code sur AWS EKS",
    "contact.intro": "Intéressé par mon profil ? N'hésitez pas à me contacter.",
  },
};

// Language Toggle
const langToggle = document.querySelector(".lang-toggle");
const langText = document.querySelector(".lang-text");
let currentLang = localStorage.getItem("lang") || "fr";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  html.setAttribute("lang", lang);
  langText.textContent = lang.toUpperCase();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
}

// Initialize language
setLanguage(currentLang);

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "fr" ? "en" : "fr");
});

// Dark Mode Toggle
const themeToggle = document.querySelector(".theme-toggle");

// Check for saved theme preference or default to system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
} else if (systemPrefersDark) {
  html.setAttribute("data-theme", "dark");
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: "-50px",
  threshold: 0.15,
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Don't unobserve to allow re-animation on scroll up/down
    }
  });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(
  ".fade-in-up, .scale-fade, .slide-in-left, .slide-in-right, .stagger-children, " +
    ".section-header, .about-grid, .skills-grid, .experience-list, .projects-grid, .contact-content",
);

animatedElements.forEach((el) => {
  // Add default fade-in-up class if no animation class present
  if (
    !el.classList.contains("fade-in-up") &&
    !el.classList.contains("scale-fade") &&
    !el.classList.contains("slide-in-left") &&
    !el.classList.contains("slide-in-right") &&
    !el.classList.contains("stagger-children")
  ) {
    el.classList.add("fade-in-up");
  }
  scrollObserver.observe(el);
});

// Add stagger animation to grids
document
  .querySelectorAll(".skills-grid, .about-details, .projects-grid")
  .forEach((el) => {
    el.classList.add("stagger-children");
    scrollObserver.observe(el);
  });

// Observe exp-cards for visibility (they have their own CSS animation)
document.querySelectorAll(".exp-card").forEach((el) => {
  scrollObserver.observe(el);
});

// Parallax effect for hero gradient
const heroGradient = document.querySelector(".hero-gradient");
if (heroGradient) {
  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      heroGradient.style.transform = `translateY(${rate}px)`;
    },
    { passive: true },
  );
}

// Mouse move parallax for floating badges
const floatingBadges = document.querySelectorAll(".floating-badge");
if (floatingBadges.length > 0) {
  document.addEventListener(
    "mousemove",
    (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      floatingBadges.forEach((badge, index) => {
        const depth = (index + 1) * 10;
        const moveX = mouseX * depth;
        const moveY = mouseY * depth;
        badge.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    },
    { passive: true },
  );
}

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const updateCounter = () => {
    current += increment;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

// Observe stats for counter animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statValues = entry.target.querySelectorAll(".stat-value");
        statValues.forEach((stat) => {
          const text = stat.textContent;
          const number = parseInt(text);
          if (!isNaN(number) && !stat.dataset.animated) {
            stat.dataset.animated = "true";
            const suffix = text.replace(number, "");
            animateCounter(stat, number, 1500);
            // Re-add suffix after animation
            setTimeout(() => {
              stat.innerHTML = `${number}<span class="stat-plus">${suffix.includes("+") ? "+" : ""}</span>`;
            }, 1600);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

const heroStats = document.querySelector(".hero-stats");
if (heroStats) {
  statsObserver.observe(heroStats);
}

// Active navigation link on scroll
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active");
    } else {
      navLink?.classList.remove("active");
    }
  });
});

// Add active style for nav links
const navActiveStyle = document.createElement("style");
navActiveStyle.textContent = `
    .nav-menu a.active {
        color: var(--primary);
        background: rgba(37, 99, 235, 0.1);
    }
`;
document.head.appendChild(navActiveStyle);

// Typing effect for code block (optional enhancement)
const codeBlock = document.querySelector(".code-block code");
if (codeBlock) {
  const originalHTML = codeBlock.innerHTML;
  codeBlock.innerHTML = "";

  let i = 0;
  const typeWriter = () => {
    if (i < originalHTML.length) {
      // Handle HTML tags
      if (originalHTML[i] === "<") {
        const closeTag = originalHTML.indexOf(">", i);
        codeBlock.innerHTML += originalHTML.substring(i, closeTag + 1);
        i = closeTag + 1;
      } else {
        codeBlock.innerHTML += originalHTML[i];
        i++;
      }
      setTimeout(typeWriter, 15);
    }
  };

  // Start typing effect after a short delay
  setTimeout(typeWriter, 500);
}

// ===========================================
// Google Analytics 4 - Custom Event Tracking
// ===========================================

// Helper function to send GA4 events
function trackEvent(eventName, params = {}) {
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}

// 1. Scroll Depth Tracking (25%, 50%, 75%, 100%)
const scrollThresholds = [25, 50, 75, 100];
const scrollTriggered = new Set();

window.addEventListener(
  "scroll",
  () => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

    scrollThresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !scrollTriggered.has(threshold)) {
        scrollTriggered.add(threshold);
        trackEvent("scroll_depth", {
          percent_scrolled: threshold,
          page_title: document.title,
        });
      }
    });
  },
  { passive: true },
);

// 2. CTA Button Clicks
document.querySelectorAll(".btn-primary, .btn-ghost").forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnText = btn.textContent.trim();
    const isDownload = btn.hasAttribute("download");

    trackEvent(isDownload ? "cv_download" : "cta_click", {
      button_text: btnText,
      button_type: btn.classList.contains("btn-primary") ? "primary" : "ghost",
    });
  });
});

// 3. Navigation Clicks
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    const section = link.getAttribute("href");
    trackEvent("navigation_click", {
      section_target: section,
      link_text: link.textContent.trim(),
    });
  });
});

// 4. External Links (GitHub, etc.)
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", () => {
    trackEvent("external_link_click", {
      link_url: link.href,
      link_text: link.textContent.trim(),
    });
  });
});

// 5. Contact Links (Email, Phone)
document.querySelectorAll(".contact-link").forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");
    let contactType = "other";

    if (href.startsWith("mailto:")) contactType = "email";
    else if (href.startsWith("tel:")) contactType = "phone";
    else if (href.includes("github")) contactType = "github";

    trackEvent("contact_click", {
      contact_type: contactType,
      contact_value: href,
    });
  });
});

// 6. Section Visibility Tracking
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");
        trackEvent("section_view", {
          section_id: sectionId,
        });
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll("section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

// 7. Language Toggle Tracking
document.querySelector(".lang-toggle")?.addEventListener("click", () => {
  trackEvent("language_change", {
    new_language: currentLang === "fr" ? "en" : "fr",
  });
});

// 8. Theme Toggle Tracking
document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const newTheme =
    html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  trackEvent("theme_change", {
    new_theme: newTheme,
  });
});
