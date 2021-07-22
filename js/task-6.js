//скрипт, який при зникнені фокуса на інпуті, перевіря його вміст на правильну кількість символів.

const inputName = document.querySelector('#validation-input')

inputName.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length !== Number(inputName.dataset.length)) {
        inputName.classList.add('invalid');
    } else {
        inputName.classList.replace('invalid', 'valid');
    }
};
