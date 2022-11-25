
let navMain = document.querySelector('.header');
let navToggle = document.querySelector('.header__button');

navMain.classList.remove('header--nojs');
navMain.classList.add('header--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('header--opened');
  navMain.classList.toggle('header--closed');
});
