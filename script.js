document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav ul').classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .cert-card, .education-item').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

function createFloatingElements() {
    const sections = document.querySelectorAll('section');
    const isSmall = window.matchMedia('(max-width: 768px)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    sections.forEach(section => {
        const floatingContainer = section.querySelector('.floating-elements');
        if (!floatingContainer) return;
        if (reduceMotion) return;
        const count = isSmall ? 6 : 15;
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            const size = Math.random() * 60 + 20;
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.left = `${Math.random() * 100}%`;
            element.style.animationDelay = `${Math.random() * 15}s`;
            element.style.animationDuration = `${Math.random() * 20 + 10}s`;
            floatingContainer.appendChild(element);
        }
    });
}

createFloatingElements();

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(42, 42, 42, 0.98)';
        header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'rgba(42, 42, 42, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    }
});
