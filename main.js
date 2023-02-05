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
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive')
    }
    burgerMenuInside.classList.toggle('inactive')
}



/* agregar el carrito de compras*/
const shoppingCart = document.querySelector('.shopping-cart-container')
const shoppingCartIcon = document.querySelector('.shoppingCartIcon')

shoppingCartIcon.addEventListener('click',toggleShoppingCart)

function toggleShoppingCart(){

    if(!burgerMenuInside.classList.contains('inactive')){
        burgerMenuInside.classList.toggle('inactive')
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive')
    }
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive')
    }
    shoppingCart.classList.toggle('inactive')
}



/*product list */

const productList = []
productList.push({
    name: 'Vintage Lamp',
    price: 200,
    image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/06/il_1588xN.1727616325_tgly.jpg?auto=format&q=60&fit=max&w=930',
})
productList.push({
    name: 'Vintage Lamp',
    price: 200,
    image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/06/il_1588xN.1727616325_tgly.jpg?auto=format&q=60&fit=max&w=930',
})
productList.push({
    name: 'Vintage Lamp',
    price: 200,
    image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/06/il_1588xN.1727616325_tgly.jpg?auto=format&q=60&fit=max&w=930',
})



/* Toggle product detail */
const productDetail = document.querySelector('.product-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

function openProductDetail(){ /*El add event listener de esta función está en la función de abajo */
    if(!shoppingCart.classList.contains('inactive')){
        shoppingCart.classList.toggle('inactive')
    }
    if(!burgerMenuInside.classList.contains('inactive')){
        burgerMenuInside.classList.toggle('inactive')
    }
    productDetail.classList.remove('inactive')
}


productDetailCloseIcon.addEventListener('click',closeProductDetail)

function closeProductDetail(){
    productDetail.classList.add('inactive')
}

/* En esta funcion, se crea una variable para cada elemento del HTML (iterando cada elemento del array)
despues se procede a agregar sus respectivas clases, src, innerText, etc
por ultimo se procede a maquetear desde adentro hacia afuera (appendChild)
        */

const cardsContainer = document.querySelector('.cards-container')

function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product-img')
    
    productImg.addEventListener('click',openProductDetail)
    
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    productPrice.classList.add('product-detail-title')
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productPrice.classList.add('product-detail-name')
    
    productDetails.appendChild(productPrice)
    productDetails.appendChild(productName)
    
    const productInfoFigure = document.createElement('figure');
    productInfoFigure.classList.add('product-addtocart')
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart)
    
    productCard.appendChild(productImg)
    productCard.appendChild(productDetails)
    productCard.appendChild(productInfoFigure)

    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)

