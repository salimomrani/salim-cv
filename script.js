// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .skill-category, .project-card, .stat-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Add active style for nav links
const navActiveStyle = document.createElement('style');
navActiveStyle.textContent = `
    .nav-menu a.active {
        color: var(--primary);
        background: rgba(37, 99, 235, 0.1);
    }
`;
document.head.appendChild(navActiveStyle);

// Typing effect for code block (optional enhancement)
const codeBlock = document.querySelector('.code-block code');
if (codeBlock) {
    const originalHTML = codeBlock.innerHTML;
    codeBlock.innerHTML = '';

    let i = 0;
    const typeWriter = () => {
        if (i < originalHTML.length) {
            // Handle HTML tags
            if (originalHTML[i] === '<') {
                const closeTag = originalHTML.indexOf('>', i);
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
