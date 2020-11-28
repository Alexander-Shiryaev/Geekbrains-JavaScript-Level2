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