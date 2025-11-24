// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header background on scroll
// window.addEventListener('scroll', () => {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 100) {
//         header.style.background = 'rgba(11, 20, 38, 0.95)';
//     } else {
//         header.style.background = 'rgba(11, 20, 38, 0.9)';
//     }
// });

// Cookie Popup Functionality
const cookiePopup = document.getElementById('cookiePopup');
const acceptBtn = document.getElementById('acceptCookies');
const rejectBtn = document.getElementById('rejectCookies');

// Check if user has already made a choice
function checkCookieChoice() {
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (!cookieChoice) {
        // Show popup after a short delay
        setTimeout(() => {
            cookiePopup.classList.add('show');
        }, 1000);
    }
}

// Accept cookies
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'accepted');
    cookiePopup.classList.remove('show');
});

// Reject cookies
rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', 'rejected');
    cookiePopup.classList.remove('show');
});

// Initialize cookie check on page load
document.addEventListener('DOMContentLoaded', () => {
    checkCookieChoice();
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Form submission logic would go here
    // For now, we'll just prevent the default behavior as requested
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease-in-out';
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
const animatedElements = document.querySelectorAll('.feature-card, .review-card, .screenshot, .game-info');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add hover effects for interactive elements
const interactiveCards = document.querySelectorAll('.feature-card, .review-card');
interactiveCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg');
    const speed = scrolled * 0.5;
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${speed}px)`;
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
        // Close cookie popup if open
        if (cookiePopup.classList.contains('show')) {
            cookiePopup.classList.remove('show');
        }
    }
});

// Add focus styles for accessibility
const focusableElements = document.querySelectorAll('a, button, input, [tabindex]');
focusableElements.forEach(element => {
    element.addEventListener('focus', () => {
        element.style.outline = '2px solid #4285F4';
        element.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});