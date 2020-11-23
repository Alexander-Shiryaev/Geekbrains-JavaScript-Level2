class Form {
    constructor() {
        this.render();
        this.checkValid();
    }

    render() {
        const placeToRender = document.querySelector('footer');

        if (placeToRender) {
            const form = document.createElement('form');
            form.classList.add('form');
            form.innerHTML = `
            <h1 class="form__title">Заказать обратный звонок</h1>
            <input id="first-input" data-rule="text" type="text" placeholder="Ваше имя">
            <input id="second-input" data-rule="tel" type="tel" placeholder="Ваш телефон">
            <input id="third-input" data-rule="email" type="email" placeholder="Email">
            <div class="btn_holder"></div>
          `
            placeToRender.appendChild(form);
        }


        const formButton = new Button('Связаться с нами');
        placeToRender.querySelector('.btn_holder').appendChild(formButton.getTemplate());
        const formButtonAddClass = placeToRender.querySelector('.btn');
        formButtonAddClass.classList.add('form__btn');
    }

    checkValid() {
        let inputs = document.querySelectorAll('input');

        const firstInp = document.getElementById('first-input');

        firstInp.addEventListener('blur', function () {
            let value = this.value;
            let check;

            if (check = /^[a-zа-яё]+$/i.test(value)) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });

        const secondInp = document.getElementById('second-input');

        secondInp.addEventListener('blur', function () {
            let value = this.value;
            let check;

            if (check = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/i.test(value)) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }

        });

        const thirdInp = document.getElementById('third-input');

        thirdInp.addEventListener('blur', function () {
            let value = this.value;
            let check;

            if (check = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    }
}