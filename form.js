class Form {
    constructor() {
        this.render();
    }

    render() {
        const placeToRender = document.querySelector('footer');

        if (placeToRender) {
            const form = document.createElement('form');
            form.classList.add('form');
            form.innerHTML = `
            <h1 class="form__title">Заказать обратный звонок</h1>
            <input data-rule="text" type="text" placeholder="Ваше имя">
            <input data-rule="tel" type="tel" placeholder="Ваш телефон">
            <input data-rule="email" type="email" placeholder="Email">
            <div class="btn_holder"></div>
          `
            placeToRender.appendChild(form);
        }

        const formButton = new Button('Связаться с нами');
        placeToRender.querySelector('.btn_holder').appendChild(formButton.getTemplate());
    }
}

let inputs = document.querySelectorAll('input');
console.log(inputs);

for (let input of inputs) {
    input.addEventListener('blur', () => {
        let rule = this.dataset.rule;
        let value = this.value;
        let check;

        switch (rule) {
            case 'text':
                check = /^\w+$/.test(value);
                break;
            case 'tel':
                break;
            case 'email':
                break;
        }
        if (check) {
            this.classList.add('valid');
        } else {
            this.classList.add('invalid');
        }
    });
}