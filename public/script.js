class AbstractList {
  items = [];

  constructor(item = []) {
    this.item = [];
  }

  add(item) {
    const findedItem = this.items.find((fitem) => {
      return fitem.name === item.name;
    })

    const addedPromise = new Promise(resolve => {
      if (findedItem) {
        findedItem.counter++;
      } else {
        this.items.push(item);
      }
      resolve();
    })

    addedPromise.then(this.render.bind(this));
  }

  remove() {

  }

  render() {
    this.items.forEach(good => {
      good.render();
    });
  }
}

class List extends AbstractList {
  _cartInstance = null;
  _pageCounter = 1;

  constructor(CartInstance) {
    super()
    this._cartInstance = CartInstance;

    this.initShowMoreBtn();

    let goodsPromise = this.fetchGoods();
    goodsPromise.then(() => {
      this.render();
    });
  }

  initShowMoreBtn() {
    const btn = document.querySelector('.showmore');
    btn.addEventListener('click', () => {
      this.fetchGoods()
        .then(() => {
          this.render();
        });
    });
  }

  hideShowMoreBtn() {
    const btn = document.querySelector('.showmore');
    btn.remove();
  }

  fetchGoods() {
    const result = fetch(`http://127.0.0.1:5500//database/page${this._pageCounter}.json`);
    return result
      .then(res => {
        return res.json();
      })
      .then(data => {
        this._pageCounter++;
        this.items.push(...data.data.map(cur => {
          return new GoodItem(cur, this._cartInstance);
        }));
      })
      .catch(e => {
        this.hideShowMoreBtn();
        console.log(e);
      });
  }

  render() {
    const placeToRender = document.querySelector('.catalog');
    if (placeToRender) {
      placeToRender.innerHTML = '';
      this.items.forEach(good => {
        good.render(placeToRender);
      });
    }
  }
}

class Cart extends AbstractList {
  constructor() {
    super();
    this.init();
  }

  init() {
    const block = document.createElement('div');
    block.classList.add('cart');

    const list = document.createElement('div');
    list.classList.add('cart_list');
    block.appendChild(list);

    const ButtonInstnce = new Button('Корзина', () => {
      list.classList.toggle('shown');
    })
    block.appendChild(ButtonInstnce.getTemplate());

    const placeToRender = document.querySelector('header');
    if (placeToRender) {
      placeToRender.appendChild(block);
    }

    this.render();
  }

  render() {
    const placeToRender = document.querySelector('.cart_list');
    if (placeToRender) {
      placeToRender.innerHTML = '';
      if (this.items.length) {
        this.items.forEach(good => {
          good.render(placeToRender);
        });
      } else {
        placeToRender.innerHTML = 'Корзина пуста!';
      }
    }
  }
}

class GoodItem {
  name = '';
  model = '';
  price = 0;
  counter = 1;
  _cartInstance = null;

  constructor({
    name,
    model,
    price
  }, CartInstance) {
    this.name = name;
    this.model = model;
    this.price = price;
    this._cartInstance = CartInstance;
  }

  render(placeToRender) {
    if (placeToRender) {
      const block = document.createElement('div');
      block.classList.add('card');
      block.innerHTML = `
          <div class="img">
            <img src="laptop.jpg" />
          </div>
          <div class="meta">
            <div class="meta__row">
              <span class="key">Товар:</span>
              <span class="value">${this.name}</span>
            </div>
            <div class="meta__row">
              <span class="key">Модель:</span>
              <span class="value">${this.model}</span>
            </div>
            <div class="meta__row">
              <span class="key">Цена:</span>
              <span class="value">${this.price}</span>
            </div>
            <div class="btn_holder"></div>
          </div>
        `
      placeToRender.appendChild(block);

      const AddButton = new Button('Добавить в корзину', () => {
        this._cartInstance.add(new GoodItemInCart(this));
      });
      block.querySelector('.btn_holder').appendChild(AddButton.getTemplate());
    }
  }
}

class GoodItemInCart extends GoodItem {
  constructor(props) {
    super(props);
  }

  render(placeToRender) {
    if (placeToRender) {
      const block = document.createElement('div');
      block.classList.add('cart__good');
      block.innerHTML = `${this.name} ${this.model} = ${this.price} x ${this.counter}`;
      placeToRender.appendChild(block);
    }
  }
}

const CartInstance = new Cart();
const ListInstance = new List(CartInstance);