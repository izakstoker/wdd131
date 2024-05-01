function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);