const top = document.querySelector('.arrow_up');
const main = document.querySelector('#home');
const mainHeight = main.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(mainHeight);
    if(scrollY > mainHeight / 2){
        top.style.opacity = 1;
    } else {
        top.style.opacity = 0;
    }
});