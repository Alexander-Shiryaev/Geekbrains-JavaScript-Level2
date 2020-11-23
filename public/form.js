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