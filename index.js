'use strict';
import IMask from 'imask';
const button = document.querySelector('.js-button');
const modal = document.querySelector('#modal-container');
const modalCloseButton = modal.querySelector('.js-modal-close');
const body = document.querySelector('body');
const nameInput = modal.querySelector('.js-name-input');
const phoneInput = modal.querySelector('.js-phone-input');
const emailInput = modal.querySelector('.js-email-input');
const radios = modal.querySelectorAll('input[type="radio"]');

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const ContactsMethod = {
    PHONE: 'phoneMethod',
    EMAIL: 'emailMethod'
};

IMask(phoneInput, maskOptions);

const onButtonClick = (evt) => {
  modal.className = '';
  modal.classList.add(evt.currentTarget.id);
  body.classList.add('modal-active');
  nameInput.focus();
}
const onModalCloseButtonClick = (evt) => {
  modal.classList.add('out');
  body.classList.remove('modal-active');
}
const onRadiosChange = (evt) => {
  console.log(evt.currentTarget.value);
  switch(evt.currentTarget.value) {
    case ContactsMethod.EMAIL:
      phoneInput.required = false;
      phoneInput.style.display = 'none';
      emailInput.required = true;
      emailInput.style.display = 'inline';
      break;
    case ContactsMethod.PHONE:
      emailInput.required = false;
      emailInput.style.display = 'none';
      phoneInput.required = true;
      phoneInput.style.display = 'inline';
      break;
  }
}
radios.forEach((label) => {
  label.addEventListener('change', onRadiosChange);
})
button.addEventListener('click', onButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);