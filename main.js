const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',toggleDesktopMenu)

function toggleDesktopMenu(){
    if(!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

/* 1. traer elemento a interactuar y el nuevo 2. funcion que activa el elemento "nuevo" */

const burgerMenu = document.querySelector('.menu')
const burgerMenuInside = document.querySelector('.mobile-menu')

burgerMenu.addEventListener('click',toggleBurgerMenu)

function toggleBurgerMenu (){

    if(!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.toggle('inactive')
    }
    burgerMenuInside.classList.toggle('inactive')
}



/* agregar el carrito de compras*/
const shoppingCart = document.querySelector('.product-detail')
const shoppingCartIcon = document.querySelector('.shoppingCartIcon')

shoppingCartIcon.addEventListener('click',toggleShoppingCart)

function toggleShoppingCart(){

    if(!burgerMenuInside.classList.contains('inactive')){
        burgerMenuInside.classList.toggle('inactive')
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
    shoppingCart.classList.toggle('inactive')
}