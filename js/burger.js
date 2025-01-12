const burger = document.querySelector('.header__menu');
const burgerSvg = document.querySelectorAll('.header__menu svg');
const menu = document.querySelector('.header__menu-burger');
const burgerList = document.querySelector('.header__menu-list');

burger.onclick = function () {
    if(!menu.classList.contains('header__menu-burger--exist')) {
        menu.classList.add('header__menu-burger--exist');
        burgerSvg[0].style.display = 'none';
        burgerSvg[1].style.display = 'flex';
    } else {
        menu.classList.remove('header__menu-burger--exist');
        burgerSvg[0].style.display = 'flex';
        burgerSvg[1].style.display = 'none';
    }
}

burgerList.onclick = function () {
    menu.classList.remove('header__menu-burger--exist');
    burgerSvg[0].style.display = 'flex';
    burgerSvg[1].style.display = 'none';
}