
const NAV_MAIN = document.querySelector('.header');
const NAV_TOGGLE = document.querySelector('.header__button');
const NAV_OVERLAY = document.querySelector('.header__navigation');

const closeOverlay = function () {
  NAV_OVERLAY.classList.remove('overlay');
  document.body.classList.remove('is-menu-open');
  NAV_MAIN.classList.remove('header--opened');
  NAV_MAIN.classList.add('header--closed');
};


NAV_MAIN.classList.remove('header--nojs');
NAV_MAIN.classList.add('header--closed');

NAV_TOGGLE.addEventListener('click', function () {
  NAV_MAIN.classList.toggle('header--opened');
  NAV_MAIN.classList.toggle('header--closed');

  if (NAV_OVERLAY.classList.contains('overlay')) {
    NAV_OVERLAY.classList.remove('overlay');
    NAV_OVERLAY.removeEventListener('click', closeOverlay);
  } else {
    NAV_OVERLAY.classList.add('overlay');
    NAV_OVERLAY.addEventListener('click', closeOverlay);
  }

  if (document.body.classList.contains('is-menu-open')) {
    document.body.classList.remove('is-menu-open');
  } else {
    document.body.classList.add('is-menu-open');
  }
});

const breakpoint = window.matchMedia(`(min-width:768px)`);
const breakpointChecker = () => {
  if (breakpoint.matches && NAV_OVERLAY.classList.contains('overlay')) {
    NAV_OVERLAY.classList.remove('overlay');
    NAV_OVERLAY.removeEventListener('click', closeOverlay);
    NAV_MAIN.classList.remove('header--opened');
    NAV_MAIN.classList.remove('header--opened');
    NAV_MAIN.classList.add('header--closed');
  }
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();
