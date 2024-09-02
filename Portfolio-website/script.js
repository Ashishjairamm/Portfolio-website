// Dark/Light Mode Toggle
const modeToggle = document.querySelector('.mode i');
const body = document.body;

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        modeToggle.classList.remove('bx-sun');
        modeToggle.classList.add('bx-moon');
    } else {
        body.classList.add('dark-mode');
        modeToggle.classList.remove('bx-moon');
        modeToggle.classList.add('bx-sun');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        // Ensure smooth scrolling and correct position
        window.scrollTo({
            top: target.offsetTop - 50, // Offset for header height if fixed
            behavior: 'smooth'
        });
    });
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 50) && window.pageYOffset < (sectionTop + sectionHeight - 50)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Additional Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Animations for the intro section
    const animatedText = document.querySelector('.animated-text');
    if (animatedText) {
        animatedText.style.opacity = 1;
        // Add any animation-related styles here
    }

    // Icon click behavior for social media links
    const iconBlocks = document.querySelectorAll('.icon-block');
    iconBlocks.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    });
});
