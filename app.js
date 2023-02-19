const navbar = document.querySelector('#navbar');
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');

openMenu.addEventListener('click', ()=> {
    navbar.classList.add("navbar-visible");
    console.log('click');
});

closeMenu.addEventListener('click', ()=> {
    navbar.classList.remove("navbar-visible");
});