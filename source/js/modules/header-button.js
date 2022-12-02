
const NAV_MAIN = document.querySelector('.header');
const NAV_TOGGLE = document.querySelector('.header__button');

NAV_MAIN.classList.remove('header--nojs');
NAV_MAIN.classList.add('header--closed');

NAV_TOGGLE.addEventListener('click', function () {
  NAV_MAIN.classList.toggle('header--opened');
  NAV_MAIN.classList.toggle('header--closed');

  if (document.body.classList.contains('is-menu-open')) {
    document.body.classList.remove('is-menu-open');
  } else {
    document.body.classList.add('is-menu-open');
  }
});
