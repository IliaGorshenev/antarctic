import './modules/header-button';

const NAV_MAIN = document.querySelector('.header');
const NAV_OVERLAY = document.querySelector('.header__navigation');

const BUTTONS = document.querySelectorAll('.navigation__link');

const scrollTo = function (where) {
  const scrollTarget = document.querySelector(`[data-scroll-to="${where}"]`);
  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition,
    behavior: 'smooth',
  });
};

const validatePhone = function () {
  const eventCalllback = function (e) {
    const el = e.target;
    const clearVal = el.dataset.phoneClear;
    const pattern = el.dataset.phonePattern;
    const matrixDef = '+_ (___) ___-__-__';
    let matrix = pattern ? pattern : matrixDef;
    let i = 0;
    const def = matrix.replace(/\D/g, '');
    let val = e.target.value.replace(/\D/g, '');
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) {
      val = def;
    }
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
  };
  const PHONE_INPUTS = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of PHONE_INPUTS) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
};

BUTTONS.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();

    NAV_OVERLAY.classList.remove('overlay');
    document.body.classList.remove('is-menu-open');
    NAV_MAIN.classList.remove('header--opened');
    NAV_MAIN.classList.add('header--closed');

    scrollTo(Object.values(button.dataset));
  });
});

window.addEventListener('DOMContentLoaded', ()=> {
  validatePhone();
});
