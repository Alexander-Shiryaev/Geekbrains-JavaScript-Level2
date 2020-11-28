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
      const result = fetch(`http://127.0.0.1:5500//public/database/page${this._pageCounter}.json`);
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