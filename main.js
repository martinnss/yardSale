const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

/* 1. traer elemento a interactuar y el nuevo 2. funcion que activa el elemento "nuevo" */

const burgerMenu = document.querySelector('.menu')
const burgerMenuInside = document.querySelector('.mobile-menu')

burgerMenu.addEventListener('click',toggleBurgerMenu)

function toggleBurgerMenu (){
    burgerMenuInside.classList.toggle('inactive')
}