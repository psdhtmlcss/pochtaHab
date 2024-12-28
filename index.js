'use strict';
import IMask from 'imask';
const button = document.querySelector('.js-button');
const modal = document.querySelector('#modal-container');
const modalCloseButton = modal.querySelector('.js-modal-close');
const body = document.querySelector('body');
const nameInput = modal.querySelector('.js-name-input');
const phoneInput = modal.querySelector('.js-phone-input');
const maskOptions = {
  mask: '+{7}(000)000-00-00'
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
button.addEventListener('click', onButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);