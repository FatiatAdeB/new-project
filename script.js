const navbarMenu = document.querySelector(".navbar .links");
const iconMenu = document.querySelector('.icon-menu');
const hideIconMenu = navbarMenu.querySelector('.iconclose');

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
// show mobile menu
iconMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// hide mobile menu
hideIconMenu.addEventListener("click", () => iconMenu.click());

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
} );

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
} );

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
} );

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
} );