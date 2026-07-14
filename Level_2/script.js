const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

// Toggle the mobile navigation and hamburger shape
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a navigation link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
