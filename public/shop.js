class List {
    items = [];

    constructor() {
        let goods = this.fetchGoods();
        goods = goods.map((cur) => {
            return new GoodItem(cur)
        })
        this.items.push(...goods);
        this.render();
    }

    fetchGoods() {
        return [
            { id: 1, name: 'Palit', price: 20000 },
            { id: 2, name: 'GiGabyte', price: 22500 },
            { id: 3, name: 'Asus', price: 24000 },
            { id: 4, name: 'MSI', price: 23200 },
        ];
    }

    render() {
        this.items.forEach((good) => {
            return good.render()
        });
    }
}

class GoodItem {
    id = 0;
    name = '';
    price = 0;

    constructor({ id, name, price}) {
        this.id = id
        this.name = name
        this.price = price
    }

    render() {
        const placeToRender = document.querySelector('.goods-list');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.innerHTML = `Товaр: ${this.name} - ${this.price}`;
            placeToRender.appendChild(block);
        }
    }
}

const ListInstance = new List();
