const header = document.querySelector('.header');
const headerheight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > headerheight) {
        header.classList.add('scroll');
    }  else {
            header.classList.remove('scroll');
    }
    
});