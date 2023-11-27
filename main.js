window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

const menuToogle = document.querySelector('.menu-toogle');
const nav = document.querySelector('nav');
menuToogle.addEventListener('click', function(){
    menuToogle.classList.toggle('active');
    nav.classList.toggle('active');
})

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(){
        menuToogle.classList.toggle('active');
        nav.classList.toggle('active');
    })
})