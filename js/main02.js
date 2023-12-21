/*
const teimg = document.querySelector('.testimonial_img');
const tebox = document.querySelector('.testimonial_bubble');

teimg.addEventListener('click', () => {
    tebox.style.color = 'red';
});
*/



const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
    console.log(homeHeight);
    home.style.opacity = 1 - (window.scrollY / homeHeight);
});

