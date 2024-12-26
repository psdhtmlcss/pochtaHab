'use strict';
const button = document.querySelector('.js-button');
const modal = document.querySelector('#modal-container');
const modalCloseButton = modal.querySelector('.js-modal-close');
const body = document.querySelector('body');

const onButtonClick = (evt) => {
  modal.className = '';
  modal.classList.add(evt.currentTarget.id);
  body.classList.add('modal-active');
}
const onModalCloseButtonClick = (evt) => {
  modal.classList.add('out');
  body.classList.remove('modal-active');
}
button.addEventListener('click', onButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);