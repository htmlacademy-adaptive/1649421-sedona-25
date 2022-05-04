const btnToggle = document.querySelector('.main-nav__toggle');
const menu = document.querySelector('.main-nav');

if (btnToggle) {
  btnToggle.addEventListener('click', (item) => {
    item.preventDefault();
    menu.classList.toggle('main-nav--open');
  });
}
