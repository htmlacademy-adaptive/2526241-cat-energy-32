alert('Скрипт работает');
let navMenu = document.querySelector('.nav-menu');
let menuToggler = document.querySelector('.main-header__toggle');

navMenu.classList.add('nav-menu--closed');

menuToggler.onclick = function () {
  navMenu.classList.toggle('nav-menu--closed');
  menuToggler.classList.toggle('main-header__toggle--closed');
};