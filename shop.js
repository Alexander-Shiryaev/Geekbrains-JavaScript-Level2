class Main {
    items = [];

    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map(cur => {
            return new GoodItem(cur);
        }, []);

        this.items.push(...goods);
        this.render();
    }

    fetchGoods() {
        return [];
    }

    
    render() {
        this.items.forEach(good => {
            good.render();
        });
    }
}



class List extends Main {

    fetchGoods() {
        return [{name: 'ASUS', model: 'VivoBook', price: 'цена 49 204 руб.'},
                {name: 'HP', model: 'ProBook 450 G7', price: 'цена 78 540 руб.'},
                {name: 'Lenovo', model: 'IdeaPad S145', price: 'цена 52 990 руб.'},
                {name: 'Apple', model: 'MacBook Pro 13', price: 'цена 138 090 руб.'},
                {name: 'Acer', model: 'Swift 5', price: 'цена 86 650 руб.'},
                {name: 'Samsung', model: 'Galaxy Tab S6 Lite 10.4', price: 'цена 32 900 руб.'},
                {name: 'HUAWEI', model: 'MatePad LTE', price: 'цена 21 590 руб.'},
                {name: 'Apple', model: 'iPad Air', price: 'цена 42 688 руб.'},
                {name: 'Lenovo', model: 'Tab M10 Plus', price: 'цена 15 990 руб.'},
                {name: 'ASUS', model: 'ZenPad 10', price: 'цена 6 799 руб.'},
        ];
    }
}


class Cart extends Main {

}

class GoodItem {
    name = '';
    model = '';
    price = 0;

    constructor ({name, model, price}) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    render() {
        const placeToRender = document.querySelector('.goods-list');

        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add("card");
            block.innerHTML = `${this.name} ${this.model} ${this.price}`;
            placeToRender.appendChild(block);
        }



        const placeToRenderBtn = document.querySelectorAll('.card');
        console.log(placeToRenderBtn);
        
        if (placeToRenderBtn) {
            placeToRenderBtn.forEach((elem) => {
                const btn = document.createElement('button');
                btn.classList.add("btn");
                btn.innerHTML = 'Купить';
                elem.appendChild(btn);
            });
        }
    }
}


const list = new List();
const cart = new Cart();
