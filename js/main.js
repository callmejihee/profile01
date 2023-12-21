const hh = document.querySelector('.header');
const hhHeight = hh.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
if(window.scrollY > hhHeight){
    hh.classList.add('scroll');
} else{
    hh.classList.remove('scroll');
}
});

const about = document.querySelector('.about_content');

document.addEventListener('scroll', () => {
if(window.scrollY > 570){
    about.classList.remove('opacity');   
} else{
    about.classList.add('opacity');
}
});