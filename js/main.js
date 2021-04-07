const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsPage {
  constructor(container = '.products'){
    this.container = container;
    this.goods = [];//массив товаров
    this.allProducts = [];//массив объектов
    this._getProducts()
        .then(data => { //data - объект js
            this.goods = [...data];
            this.render()
        });
  }

  _getProducts(){
    return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => console.log(error));
  }

  render(){
    const block = document.querySelector(this.container);
    this.goods.forEach(product => {
        const productObj = new ProductItem(product);
        this.allProducts.push(productObj);
        block.insertAdjacentHTML('beforeend', productObj.render());
    });
  }
}
class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
  }

  render(products) {
    return `<div class="products__item">
                <img class="products__pic" src="${this.img}" alt="${this.title}" width="250">
                <h3 class="products__title">${this.title}</h3>
                <p class="products__price">${this.price}$</p>
                <button class="buy-btn">Купить</button>
            </div>`
  }
}

class GoodsItem {
  constructor(product, img = 'https://via.placeholder.com/150'){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
  }

  render() {
    return `<div class="good__item">
                <img class="good__pic" src="${this.img}" alt="${this.title}" width="50">
                <h3 class="good__title">${this.title}</h3>
                <p class="good__price">${this.price}$</p>
            </div>`
  }
}

class GoodsList {
  constructor(container = '.dropdown-content'){
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.amount = 0;
    this._getProducts()
      .then(data => {
        this.goods = [...data.contents];
        this.amount = data.amount;
        this.render();
      });

  }

  _getProducts() {
    return fetch(`${API}/getBasket.json`)
      .then(result => result.json())
      .catch(error => console.log(error));
  }

  render() {
    const block = document.querySelector(this.container);
    this.goods.forEach(good => {
      const productObj = new GoodsItem(good);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    });
  }

  calcAllGoodsPrice() {
    let sum = 0;
    this.goods.forEach(good => {
      sum += good.price;
    });
    console.log(sum);
    return sum;
  }

  _myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
}



const productList = new ProductsPage();

const list = new GoodsList();