'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnOpenModal.forEach((btn) => {
    btn.addEventListener('click', (_e) => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});

btnCloseModal.addEventListener('click', (_e) => {
    closeModal();
});

overlay.addEventListener('click', (_e) => {
    closeModal();
});
