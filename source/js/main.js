import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// import './modules/mask-number';
import './modules/phone-input';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  const mainScreenButton = document.querySelector('.promo__button');

  mainScreenButton.addEventListener('click', () => {
    document.querySelector('.questions').scrollIntoView({behavior: 'smooth', block: 'start'});
  });

  const about = document.querySelector('.about');
  const closeDescription = about.querySelector('.about__hidden-description');
  const buttonOpen = about.querySelector('.about__open-button');
  const buttonClose = about.querySelector('.about__close-button');

  buttonOpen.addEventListener('click', () => {
    closeDescription.style.display = 'block';
    buttonOpen.style.display = 'none';
    buttonClose.style.display = 'block';
  });

  buttonClose.addEventListener('click', () => {
    closeDescription.style.display = 'none';
    buttonOpen.style.display = 'block';
    buttonClose.style.display = 'none';
  });

  const accordionButton = document.querySelectorAll('.footer-section__button');
  const menu = document.querySelectorAll('.footer-section__accordion');

  for (let i = 0; i < accordionButton.length; i++) {
    let currentButton = accordionButton[i];
    currentButton.addEventListener('click', () => {

      let panelMenu = currentButton.nextElementSibling;

      if (panelMenu.style.display === 'block') {
        menu.forEach(function (menuItem) {
          menuItem.style.display = 'none';
        });
      } else {
        menu.forEach(function (menuItem) {
          menuItem.style.display = 'none';
          panelMenu.style.display = 'block';
        });
      }
    });
  }
  // const accordionSecondButton = document.querySelectorAll('.footer-section__button');
  // const firstMenu = document.querySelector('.footer-section__menu');
  // const secondMenu = document.querySelector('.footer-section__office');

  // const formQuestions = document.querySelector('.questions');
  // const formFields = formQuestions.querySelectorAll('input');
  // const formButton = formQuestions.querySelector('.questions-form__button');

  // for (let i = 0; i <= formFields.length - 1; i++) {
  //   let currentField = formFields[i];
  //   if (currentField.hasAttribute('required')) {
  //     formButton.setAttribute('disabled', 'disabled');
  //   }
  // }

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
