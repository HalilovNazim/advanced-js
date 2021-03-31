const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'img/gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (products) => {
    return `<div class="products__item">
                <img class="products__pic" src="${products.img}" alt="${products.title}" width="250">
                <h3 class="products__title">${products.title}</h3>
                <p class="products__price">${products.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}