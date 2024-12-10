// Fade-in Animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight / 1.2;
        if (sectionTop < screenHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Interactive Button Click (Resume Download Alert)
const downloadButton = document.querySelector('.download-btn');
downloadButton.addEventListener('click', () => {
    alert('Your download is starting...');
});

// Notify when contact links are clicked
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        alert('You clicked a contact link!');
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Add dark mode class to specific elements
    document.querySelectorAll('header, section, .project, h1, h2, p, ul li').forEach(el => {
        el.classList.toggle('dark-mode');
    });

    // Update the button text
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️ Light Mode';
    } else {
        toggleButton.textContent = '🌙 Dark Mode';
    }
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ensure Dark Mode Persistence Across Page Reloads
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelectorAll('header, section, .project, h1, h2, p, ul li').forEach(el => {
        el.classList.add('dark-mode');
    });
    toggleButton.textContent = '☀️ Light Mode';
}

// Update Local Storage on Dark Mode Toggle
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
