const toggleBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.header_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
});