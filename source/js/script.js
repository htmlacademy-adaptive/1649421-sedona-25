const btnToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav');
const body = document.querySelector('body');

if (btnToggle) {
  btnToggle.addEventListener('click', (item) => {
    item.preventDefault();
    menu.classList.toggle('main-nav--open');
  });
}

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}
