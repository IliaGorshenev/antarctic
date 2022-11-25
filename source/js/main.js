import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './modules/header-button';

const buttons = document.querySelectorAll('.navigation__link');

const SCROLL_TO = function (where) {
  const scrollTarget = document.querySelector(`[data-scroll-to="${where}"]`);
  const elementPosition = scrollTarget.getBoundingClientRect().top;

  window.scrollBy({
    top: elementPosition,
    behavior: 'smooth',
  });
};

const VALIDATE_PHONE = function () {
  const eventCalllback = function (e) {
    const el = e.target;
    const clearVal = el.dataset.phoneClear;
    const pattern = el.dataset.phonePattern;
    const matrixDef = '+7 (___) ___-__-__';
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

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    SCROLL_TO(Object.values(button.dataset));
  });
});

window.addEventListener('DOMContentLoaded', ()=> {
  iosVhFix();
  VALIDATE_PHONE();
  window.addEventListener('load', () => {
    initModals();
  });
});
