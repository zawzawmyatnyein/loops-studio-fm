const date = document.querySelector('#date');
date.textContent = new Date().getFullYear();

const header = document.querySelector('.header');
const navBtnOpen = document.querySelector('.main-nav__mobile-menu');
const navBtnClose = document.querySelector('.mobile-nav__mobile-menu');

navBtnOpen.addEventListener('click', () => {
  header.classList.add('nav-open');
});

navBtnClose.addEventListener('click', () => {
  header.classList.remove('nav-open');
});
